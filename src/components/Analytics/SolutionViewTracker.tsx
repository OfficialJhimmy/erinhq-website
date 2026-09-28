"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export function SolutionViewTracker({ solutionName }: { solutionName: string }) {
  const { trackSolutionViewed } = useAnalytics();

  useEffect(() => {
    trackSolutionViewed(solutionName);
    // Only fire once per mount, not on every trackSolutionViewed identity change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solutionName]);

  return null;
}
