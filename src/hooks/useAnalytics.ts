'use client';

import { useCallback } from 'react';
import { event } from '@/lib/gtag';

export function useAnalytics() {
  // Track CTA button clicks
  const trackButtonClick = useCallback((buttonName: string) => {
    event({
      action: 'cta_clicked',
      category: 'CTA',
      label: buttonName,
    });
  }, []);

  // Track outbound link clicks (social profiles, live project sites, external case studies, etc.)
  const trackLinkClick = useCallback((linkName: string, destination: string) => {
    event({
      action: 'external_link_clicked',
      category: 'External Link',
      label: `${linkName} - ${destination}`,
    });
  }, []);

  // Track AI Solution page views
  const trackSolutionViewed = useCallback((solutionName: string) => {
    event({
      action: 'solution_viewed',
      category: 'AI Solutions',
      label: solutionName,
    });
  }, []);

  // Track project case study views
  const trackProjectViewed = useCallback((projectName: string) => {
    event({
      action: 'project_viewed',
      category: 'Projects',
      label: projectName,
    });
  }, []);

  // Track form submissions
  const trackFormSubmit = useCallback((formName: string) => {
    event({
      action: 'submit',
      category: 'Form',
      label: formName,
    });
  }, []);

  // Track downloads
  const trackDownload = useCallback((fileName: string) => {
    event({
      action: 'download',
      category: 'File',
      label: fileName,
    });
  }, []);

  // Track video plays
  const trackVideoPlay = useCallback((videoTitle: string) => {
    event({
      action: 'play',
      category: 'Video',
      label: videoTitle,
    });
  }, []);

  // Track scroll depth
  const trackScrollDepth = useCallback((depth: number) => {
    event({
      action: 'scroll',
      category: 'Engagement',
      label: `${depth}%`,
      value: depth,
    });
  }, []);

  // Track time on page
  const trackTimeOnPage = useCallback((seconds: number) => {
    event({
      action: 'time_on_page',
      category: 'Engagement',
      label: `${seconds} seconds`,
      value: seconds,
    });
  }, []);

  return {
    trackButtonClick,
    trackLinkClick,
    trackSolutionViewed,
    trackProjectViewed,
    trackFormSubmit,
    trackDownload,
    trackVideoPlay,
    trackScrollDepth,
    trackTimeOnPage,
  };
}