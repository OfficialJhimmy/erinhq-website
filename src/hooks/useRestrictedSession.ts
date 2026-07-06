// hooks/useRestrictedSession.ts
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Routes that trigger a restricted session when landed on directly,
// e.g. a shared portfolio link.
export const RESTRICTED_ENTRY_ROUTES = ["/portfolio", "/writing", "/links"];

const SESSION_INITIALIZED_KEY = "erinSessionInitialized";
const RESTRICTED_SESSION_KEY = "erinRestrictedSession";

/**
 * Once a visitor lands directly on one of RESTRICTED_ENTRY_ROUTES,
 * this stays true for the rest of the browser tab's session,
 * regardless of which page they navigate to afterward.
 * It does not reset just because they click through to another page,
 * e.g. a single portfolio project's detail page.
 */
export function useRestrictedSession(): boolean {
  const pathname = usePathname();
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    const restrictedFlag = sessionStorage.getItem(RESTRICTED_SESSION_KEY);
    const initialized = sessionStorage.getItem(SESSION_INITIALIZED_KEY);

    if (restrictedFlag === "true") {
      setIsRestricted(true);
      return;
    }

    if (restrictedFlag === "false") {
      setIsRestricted(false);
      return;
    }

    if (!initialized) {
      sessionStorage.setItem(SESSION_INITIALIZED_KEY, "true");
      const isDirectEntryOnRestrictedRoute =
        RESTRICTED_ENTRY_ROUTES.includes(pathname);

      sessionStorage.setItem(
        RESTRICTED_SESSION_KEY,
        isDirectEntryOnRestrictedRoute ? "true" : "false"
      );
      setIsRestricted(isDirectEntryOnRestrictedRoute);
    }
  }, [pathname]);

  return isRestricted;
}