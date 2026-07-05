'use client';

import { useCallback } from 'react';
import { event } from '@/lib/gtag';

export function useAnalytics() {
  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string) => {
    event({
      action: 'click',
      category: 'Button',
      label: buttonName,
    });
  }, []);

  // Track link clicks
  const trackLinkClick = useCallback((linkName: string, destination: string) => {
    event({
      action: 'click',
      category: 'Link',
      label: `${linkName} - ${destination}`,
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
    trackFormSubmit,
    trackDownload,
    trackVideoPlay,
    trackScrollDepth,
    trackTimeOnPage,
  };
}