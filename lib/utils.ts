import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- GOOGLE ANALYTICS TRACKING FUNCTION ---
export const trackDownloadEvent = (platform: 'App Store' | 'Google Play', location: string) => {
  // Check agar window aur gtag available hai
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      'event_category': 'App Download',
      'event_label': platform,   // e.g., "App Store"
      'location': location,      // e.g., "Hero Section"
      'transport_type': 'beacon'
    });
    // Console log sirf testing ke liye (Production mein hata sakte hain)
    console.log(`🔔 Tracking Sent: ${platform} clicked in ${location}`);
  }
}