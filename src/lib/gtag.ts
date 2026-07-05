export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Types for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Track page views
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;
  
  // Check if gtag is loaded
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;
  
  // Check if gtag is loaded
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};