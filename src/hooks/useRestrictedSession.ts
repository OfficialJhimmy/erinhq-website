// hooks/useRestrictedSession.ts
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Routes that trigger a restricted, minimal navbar when landed on directly,
// e.g. a shared portfolio link. Restriction applies only to the page
// someone lands on directly. Clicking any link, anywhere, restores the
// full navbar from that point on for the rest of the tab session.
export const RESTRICTED_ENTRY_ROUTES = ["/portfolio", "/writing", "/links"];

const HAS_NAVIGATED_KEY = "erinHasNavigatedInternally";

export function useRestrictedSession(): boolean {
  const pathname = usePathname();
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    const hasNavigatedInternally =
      sessionStorage.getItem(HAS_NAVIGATED_KEY) === "true";
    const isRestrictedRoute = RESTRICTED_ENTRY_ROUTES.includes(pathname);

    if (isRestrictedRoute && !hasNavigatedInternally) {
      // Direct entry on a restricted route, nothing clicked yet this session.
      setIsRestricted(true);
    } else {
      // Either a normal route, or a restricted route reached by clicking
      // through the site rather than landing on it directly.
      if (!hasNavigatedInternally) {
        sessionStorage.setItem(HAS_NAVIGATED_KEY, "true");
      }
      setIsRestricted(false);
    }
  }, [pathname]);

  return isRestricted;
}