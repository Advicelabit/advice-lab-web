/**
 * usePageViewTracking Hook
 *
 * This custom hook automatically tracks page views whenever the route changes in a React Router application.
 * It listens to location changes and sends them to GA4.
 *
 * Usage:
 * Import and call this hook once in your App component to enable automatic page view tracking.
 *
 * Example:
 * ```
 * const App = () => {
 *   usePageViewTracking();
 *   return <Routes>...</Routes>
 * }
 * ```
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Hook to track page views automatically on route changes
 *
 * How it works:
 * 1. Listens to location changes from React Router
 * 2. When location changes, extracts the pathname
 * 3. Sends the page view to GA4 with the pathname and document title
 * 4. Works for single-page applications (SPAs) where page reloads don't happen
 * 5. Deduplicates events that may fire twice due to React.StrictMode
 *
 * This replaces the automatic page view tracking that typically happens
 * with traditional website navigation (full page reloads)
 */
export const usePageViewTracking = (): void => {
  const location = useLocation();
  const lastPathname = useRef<string>("");

  useEffect(() => {
    // Only track if the pathname has actually changed
    // This prevents duplicate events when React.StrictMode runs effects twice
    if (lastPathname.current !== location.pathname) {
      lastPathname.current = location.pathname;
      trackPageView(location.pathname, document.title);
    }
  }, [location.pathname]);
};
