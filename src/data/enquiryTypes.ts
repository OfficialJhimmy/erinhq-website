// Canonical `?type=` query values used to preselect the enquiry type on
// /work-with-me when a visitor arrives from a contextual CTA elsewhere on
// the site (AI Solutions, AI Engineering, Projects, etc).
export const ENQUIRY_TYPES = {
  aiSystem: "ai-system",
  aiProduct: "ai-product",
  softwareProduct: "software-product",
  automation: "automation",
  notSure: "not-sure",
  somethingElse: "something-else",
} as const;

export type EnquiryType = (typeof ENQUIRY_TYPES)[keyof typeof ENQUIRY_TYPES];

export const ENQUIRY_TYPE_LABELS: Record<EnquiryType, string> = {
  [ENQUIRY_TYPES.aiSystem]: "AI System",
  [ENQUIRY_TYPES.aiProduct]: "AI Product",
  [ENQUIRY_TYPES.softwareProduct]: "Software Product",
  [ENQUIRY_TYPES.automation]: "Automation",
  [ENQUIRY_TYPES.notSure]: "Not sure yet",
  [ENQUIRY_TYPES.somethingElse]: "Something else",
};

export function workWithMeHref(type?: EnquiryType): string {
  return type ? `/work-with-me?type=${type}#enquiry-form` : "/work-with-me";
}
