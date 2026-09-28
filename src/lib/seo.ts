import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://erinhq.com";
export const SITE_NAME = "ERIN";

// Portrait crop, not an ideal 1200x630 OG image — used as a fallback until a
// purpose-built social share image exists.
const DEFAULT_OG_IMAGE = "/images/erin-headshot.png";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
