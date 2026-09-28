import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "./schema";
import { getResendClient } from "@/lib/resend";
import { ENQUIRY_TYPE_LABELS, type EnquiryType } from "@/data/enquiryTypes";

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

  const lines = [
    `Project type: ${projectTypeLabel}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    data.companyWebsite ? `Company website: ${data.companyWebsite}` : null,
    "",
    "Problem or idea:",
    data.problem,
    "",
    "What they'd like the system to do:",
    data.desiredOutcome,
    data.currentTools ? `\nCurrent tools/systems: ${data.currentTools}` : null,
    data.timeline ? `Expected timeline: ${data.timeline}` : null,
    data.budget ? `Approximate budget: ${data.budget}` : null,
    data.anythingElse ? `\nAnything else:\n${data.anythingElse}` : null,
  ].filter((line): line is string => line !== null);

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: "ERIN Website <enquiries@erinhq.com>",
      to: toEmail,
      replyTo: data.email,
      subject: `New enquiry: ${projectTypeLabel} — ${data.company}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Failed to send enquiry email:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or email creatives@erinhq.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
