import localFont from "next/font/local";

// Heading font used site-wide via the `.font-heading` utility in globals.css.
export const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Body font used site-wide via the `.font-body` utility in globals.css.
export const euclidCircularA = localFont({
  src: "../../public/fonts/euclid-circular-a/Euclid-Circular-A-Light.ttf",
  weight: "300",
  style: "normal",
  variable: "--font-euclid",
  display: "swap",
});
