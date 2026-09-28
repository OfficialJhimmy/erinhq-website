import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "./schema";
import { getResendClient } from "@/lib/resend";
import { ENQUIRY_TYPE_LABELS, type EnquiryType } from "@/data/enquiryTypes";
import { buildAdminNotificationEmail, buildConfirmationEmail } from "@/lib/emailTemplates";

// Best-effort only: in-memory state does not reliably persist across
// serverless invocations/instances. This slows down sustained abuse from a
// single warm instance; it is not a substitute for a real rate-limit
// service, and is combined with the honeypot field as defence in depth.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissionLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

const FROM_ADDRESS = "ERIN <creatives@erinhq.com>";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot tripped: report success without sending anything, so a bot
  // has no signal to tune its next attempt against.
  if (data.hpField) {
    return NextResponse.json({ ok: true });
  }

  const toEmail = process.env.ENQUIRY_TO_EMAIL || "creatives@erinhq.com";
  const projectTypeLabel = ENQUIRY_TYPE_LABELS[data.projectType as EnquiryType];

  // The admin notification is the critical path — if this fails, the
  // enquiry effectively never reached anyone, so the request must fail.
  try {
    const resend = getResendClient();
    const admin = buildAdminNotificationEmail({ ...data, projectTypeLabel });
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: toEmail,
      replyTo: data.email,
      subject: `New enquiry: ${projectTypeLabel} — ${data.company}`,
      html: admin.html,
      text: admin.text,
    });
  } catch (error) {
    console.error("Failed to send enquiry notification:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or email creatives@erinhq.com directly." },
      { status: 502 }
    );
  }

  // The confirmation email to the enquirer is best-effort — the enquiry
  // itself already succeeded above, so a failure here shouldn't fail the
  // whole request.
  try {
    const resend = getResendClient();
    const confirmation = buildConfirmationEmail({
      name: data.name,
      projectTypeLabel,
      company: data.company,
    });
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: data.email,
      subject: "Thanks for reaching out",
      html: confirmation.html,
      text: confirmation.text,
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error instanceof Error ? error.message : error);
  }

  return NextResponse.json({ ok: true });
}
