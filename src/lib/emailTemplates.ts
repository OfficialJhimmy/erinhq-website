import { SITE_URL } from "./seo";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

// Shared head: light/dark mode via prefers-color-scheme, mobile-safe widths.
// Table-based layout so this renders correctly in Outlook and other clients
// that ignore modern CSS.
function emailShell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<title>${escapeHtml(title)}</title>
<style>
  body, table, td, a { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body { margin: 0; padding: 0; }
  .email-bg { background-color: #FAF7F2; }
  .email-card { background-color: #FFFFFF; border-color: rgba(27,27,27,0.1); }
  .email-heading { color: #1B1B1B; }
  .email-text { color: #525252; }
  .email-label { color: #A3A3A3; }
  .email-divider { border-color: rgba(27,27,27,0.1); }
  .email-accent { color: #E8B67E; }
  @media (prefers-color-scheme: dark) {
    .email-bg { background-color: #1B1B1B !important; }
    .email-card { background-color: #242220 !important; border-color: rgba(255,255,255,0.12) !important; }
    .email-heading { color: #FFFFFF !important; }
    .email-text { color: #D9D4CC !important; }
    .email-label { color: #8A8580 !important; }
    .email-divider { border-color: rgba(255,255,255,0.12) !important; }
  }
  @media (max-width: 600px) {
    .email-container { width: 100% !important; }
    .email-padding { padding-left: 20px !important; padding-right: 20px !important; }
  }
</style>
</head>
<body class="email-bg">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="email-bg">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <table role="presentation" width="600" class="email-container" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          <tr>
            <td class="email-padding" style="padding: 0 16px 24px;">
              <span class="email-accent" style="font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600;">ERIN</span>
            </td>
          </tr>
          <tr>
            <td class="email-card" style="border-radius: 16px; border: 1px solid; padding: 40px 32px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td class="email-padding" style="padding: 24px 16px 0; text-align: center;">
              <p class="email-label" style="margin: 0; font-size: 12px;">
                ERIN &middot; &middot; <a href="${SITE_URL}" class="email-accent" style="text-decoration: none;">erinhq.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

interface ConfirmationEmailData {
  name: string;
  projectTypeLabel: string;
  company: string;
}

export function buildConfirmationEmail({ name, projectTypeLabel, company }: ConfirmationEmailData): {
  html: string;
  text: string;
} {
  const safeName = escapeHtml(name);
  const safeType = escapeHtml(projectTypeLabel);
  const safeCompany = escapeHtml(company);

  const bodyHtml = `
    <h1 class="email-heading" style="margin: 0 0 16px; font-size: 24px; line-height: 1.3; font-weight: 600;">
      Thanks for reaching out, ${safeName}.
    </h1>
    <p class="email-text" style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
      I've received your enquiry about a <strong>${safeType}</strong> for ${safeCompany}, and I'm reviewing the details now.
    </p>
    <p class="email-text" style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
      I'll reach out soon with a meeting link so we can set up a discovery call and go deeper into what you're trying to build.
    </p>
    <p class="email-text" style="margin: 24px 0 0; font-size: 16px; line-height: 1.6;">
      Talk soon,<br />Feyijimi (ERIN)
    </p>`;

  const text = [
    `Thanks for reaching out, ${name}.`,
    "",
    `I've received your enquiry about a ${projectTypeLabel} for ${company}, and I'm reviewing the details now.`,
    "",
    "I'll reach out soon with a meeting link so we can set up a discovery call and go deeper into what you're trying to build.",
    "",
    "Talk soon,",
    "Feyijimi (ERIN)",
  ].join("\n");

  return { html: emailShell("Thanks for reaching out", bodyHtml), text };
}

interface AdminNotificationData {
  name: string;
  email: string;
  projectTypeLabel: string;
  company: string;
  problem: string;
  desiredOutcome: string;
  companyWebsite?: string;
  currentTools?: string;
  timeline?: string;
  budget?: string;
  anythingElse?: string;
}

function detailRow(label: string, value?: string, multiline = false): string {
  if (!value) return "";
  const safeValue = multiline ? escapeHtmlMultiline(value) : escapeHtml(value);
  return `
    <tr>
      <td style="padding: 12px 0; border-top: 1px solid; border-color: inherit;" class="email-divider">
        <p class="email-label" style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">${escapeHtml(label)}</p>
        <p class="email-text" style="margin: 0; font-size: 15px; line-height: 1.6;">${safeValue}</p>
      </td>
    </tr>`;
}

export function buildAdminNotificationEmail(data: AdminNotificationData): { html: string; text: string } {
  const rows = [
    detailRow("Project type", data.projectTypeLabel),
    detailRow("Name", data.name),
    detailRow("Email", data.email),
    detailRow("Company", data.company),
    detailRow("Company website", data.companyWebsite),
    detailRow("Problem or idea", data.problem, true),
    detailRow("What they'd like the system to do", data.desiredOutcome, true),
    detailRow("Current tools/systems", data.currentTools),
    detailRow("Expected timeline", data.timeline),
    detailRow("Approximate budget", data.budget),
    detailRow("Anything else", data.anythingElse, true),
  ].join("");

  const bodyHtml = `
    <h1 class="email-heading" style="margin: 0 0 8px; font-size: 22px; line-height: 1.3; font-weight: 600;">
      New Work With Me enquiry
    </h1>
    <p class="email-text" style="margin: 0 0 16px; font-size: 14px;">
      From ${escapeHtml(data.name)} at ${escapeHtml(data.company)}
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${rows}
    </table>`;

  const textLines = [
    `New Work With Me enquiry — ${data.projectTypeLabel}`,
    "",
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

  return { html: emailShell("New Work With Me enquiry", bodyHtml), text: textLines.join("\n") };
}
