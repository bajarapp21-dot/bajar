// utils/analytics.ts
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params)
  }

  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('track', eventName, params)
  }

  // Log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}:`, params)
  }
}

export const trackDownload = (store: string, location: string) => {
  trackEvent('download_click', { store, location })
}

export const trackNavigation = (section: string) => {
  trackEvent('navigation_click', { section })
}