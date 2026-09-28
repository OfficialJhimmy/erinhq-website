import { z } from "zod";
import { ENQUIRY_TYPES } from "@/data/enquiryTypes";

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email address").max(200),
  projectType: z.enum([
    ENQUIRY_TYPES.aiSystem,
    ENQUIRY_TYPES.aiProduct,
    ENQUIRY_TYPES.softwareProduct,
    ENQUIRY_TYPES.automation,
    ENQUIRY_TYPES.notSure,
    ENQUIRY_TYPES.somethingElse,
  ]),
  company: z.string().trim().min(1, "Company or organisation is required").max(200),
  problem: z.string().trim().min(1, "Tell me about the problem or idea").max(4000),
  desiredOutcome: z.string().trim().min(1, "Let me know what you would like the system to do").max(4000),
  companyWebsite: optionalText(300),
  currentTools: optionalText(1000),
  timeline: optionalText(200),
  budget: optionalText(200),
  anythingElse: optionalText(4000),
  // Honeypot — a real visitor never sees or fills this field. Deliberately
  // not constrained to empty here; a non-empty value is checked explicitly
  // in the route handler so a bot gets a fake "success" instead of a 400
  // that would help it tune its submission.
  hpField: z.string().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
