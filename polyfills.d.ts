// Type declarations for polyfills

declare module 'intersection-observer' {
  // The intersection-observer polyfill doesn't export anything
  // It just adds IntersectionObserver to the global scope
}

// Extend global interfaces for polyfills
declare global {
  // Extend PerformanceEntry to include processingStart for FID measurements
  interface PerformanceEntry {
    processingStart?: number
  }

  // Extend Window interface for ResizeObserver polyfill
  interface Window {
    ResizeObserver: typeof ResizeObserver
  }
}

export {}
