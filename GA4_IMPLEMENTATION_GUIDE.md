# Google Analytics 4 (GA4) - Manual Implementation Guide

## Overview

This document explains how Google Analytics 4 (GA4) has been manually implemented in the **advice-lab-web** React application **without using third-party packages**.

**Measurement ID:** `G-3P9VQDR324`

---

## Table of Contents

1. [Implementation Architecture](#implementation-architecture)
2. [Files Modified/Created](#files-modifiedcreated)
3. [How It Works](#how-it-works)
4. [Usage Examples](#usage-examples)
5. [Testing & Debugging](#testing--debugging)
6. [Google Analytics Dashboard Access](#google-analytics-dashboard-access)

---

## Implementation Architecture

```
┌─────────────────────────────────────────┐
│         Google Analytics 4 (GA4)        │
│    (Remote: gtag.js library)            │
│    Measurement ID: G-3P9VQDR324         │
└────────────┬────────────────────────────┘
             │
             ├─── Loaded via Script Tag (index.html)
             │
┌────────────▼────────────────────────────┐
│      Window.gtag (Global Function)      │
│      Window.dataLayer (Global Array)    │
└────────────┬────────────────────────────┘
             │
             ├─── Used by Analytics Utilities
             │
┌────────────▼────────────────────────────┐
│    /src/lib/analytics.ts                │
│  (Utility Functions & Helper Methods)   │
└────────────┬────────────────────────────┘
             │
             ├─── Used by Hooks
             │
┌────────────▼────────────────────────────┐
│  /src/hooks/usePageViewTracking.ts      │
│  (Auto-track route changes)             │
└────────────┬────────────────────────────┘
             │
             ├─── Called by App
             │
┌────────────▼────────────────────────────┐
│       /src/App.tsx (AppRoutes)          │
│   (React Router Integration)            │
└─────────────────────────────────────────┘
```

---

## Files Modified/Created

### 1. **index.html** (Modified)

**Location:** `d:\advice-lab-web\index.html`

Added GA4 initialization script in the `<head>` tag:

```html
<!-- Google Analytics 4 (GA4) - Manual Implementation -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-3P9VQDR324"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-3P9VQDR324", {
    page_path: window.location.pathname,
  });
</script>
```

**What it does:**

- Loads the GA4 gtag.js library asynchronously from Google's servers
- Creates a global `gtag()` function for tracking events
- Initializes GA4 with the measurement ID
- Sets initial page_path to the current URL

---

### 2. **src/lib/analytics.ts** (Created)

**Location:** `d:\advice-lab-web\src\lib\analytics.ts`

Core utility file with all analytics functions. **No third-party packages used.**

**Key Functions:**

| Function                                         | Purpose                 | Parameters                                           |
| ------------------------------------------------ | ----------------------- | ---------------------------------------------------- |
| `initializeAnalytics()`                          | Initialize GA4 tracking | -                                                    |
| `trackPageView(path, title?)`                    | Track page views        | `path`: URL path, `title?`: page title               |
| `trackEvent(eventName, eventData?)`              | Track custom events     | `eventName`: event name, `eventData?`: event details |
| `trackClick(elementName)`                        | Track element clicks    | `elementName`: element identifier                    |
| `trackFormSubmission(formName, additionalData?)` | Track form submission   | Form name and optional data                          |
| `trackButtonClick(buttonName, additionalData?)`  | Track button clicks     | Button name and optional data                        |
| `setUserId(userId)`                              | Set user ID             | `userId`: unique identifier                          |
| `trackScrollDepth(scrollPercentage)`             | Track scroll depth      | `scrollPercentage`: 0-100                            |
| `trackTimeOnPage(seconds)`                       | Track time on page      | `seconds`: time spent                                |
| `trackConversion(goalName, goalValue?)`          | Track conversion        | Goal name and optional value                         |
| `clearAnalyticsData()`                           | Clear analytics data    | -                                                    |

---

### 3. **src/hooks/usePageViewTracking.ts** (Created)

**Location:** `d:\advice-lab-web\src\hooks\usePageViewTracking.ts`

Custom React hook that automatically tracks page views when routes change:

```typescript
export const usePageViewTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);
};
```

**How it works:**

1. Uses `useLocation()` from React Router to detect route changes
2. When `location.pathname` changes, it triggers the `useEffect`
3. Calls `trackPageView()` with the new pathname
4. Runs every time a user navigates to a different route

---

### 4. **src/App.tsx** (Modified)

**Location:** `d:\advice-lab-web\src\App.tsx`

Updated to use the tracking hook:

```typescript
// Import the hook
import { usePageViewTracking } from "@/hooks/usePageViewTracking";

// Create AppRoutes component inside BrowserRouter
const AppRoutes = () => {
  usePageViewTracking();  // Enable automatic page tracking

  return <Routes>...</Routes>;
};
```

**Key changes:**

- Created separate `AppRoutes` component
- The hook must be inside `BrowserRouter` to access `useLocation()`
- `AppRoutes` is called inside `BrowserRouter`

---

## How It Works

### **Page View Tracking Flow**

```
User navigates to URL
         ↓
React Router detects route change
         ↓
useLocation() returns new location
         ↓
useEffect triggers (location.pathname changed)
         ↓
trackPageView(pathname, title) called
         ↓
gtag('event', 'page_view', {...}) called
         ↓
Data sent to Google Analytics (batched, not real-time)
         ↓
Appears in GA4 Dashboard after ~30 seconds
```

### **Event Tracking Flow**

```
User performs action (click, form submit, etc.)
         ↓
Your code calls trackEvent() or trackClick()
         ↓
Analytics utility builds event object
         ↓
gtag('event', eventName, {...}) called
         ↓
Data sent to Google Analytics
         ↓
Appears in GA4 Dashboard (Events section)
```

### **Data Collection Process**

1. **Client-side Data**: Events collected by gtag.js on user's browser
2. **DataLayer Queue**: Events added to `window.dataLayer` array
3. **Batching**: GA4 batches events (typically sends every few seconds or on page unload)
4. **Google Servers**: Events sent to Google's servers
5. **Processing**: Google processes and stores data
6. **Dashboard**: Data appears in GA4 dashboard (usually within 30 seconds - 24 hours depending on view)

---

## Usage Examples

### **1. Automatic Page Tracking (Already Configured)**

No code needed! The `usePageViewTracking` hook in App.tsx automatically tracks every route change.

```
✓ User navigates to /services/paraplanning → Tracked automatically
✓ User navigates to /contact → Tracked automatically
✓ User navigates to /blog/:id → Tracked automatically
```

### **2. Track Custom Events**

If a user clicks a CTA button:

```typescript
import { trackClick } from '@/lib/analytics';

<Button onClick={() => trackClick('cta_contact_button')}>
  Get In Touch
</Button>
```

### **3. Track Form Submission**

When a contact form is submitted:

```typescript
import { trackFormSubmission } from "@/lib/analytics";

const handleSubmit = (formData) => {
  // Submit form logic...
  trackFormSubmission("contact_form", {
    service_type: formData.service,
    company_size: formData.companySize,
  });
};
```

### **4. Track Button Clicks**

Track any button click with additional context:

```typescript
import { trackButtonClick } from '@/lib/analytics';

<button onClick={() => trackButtonClick('apply_job', {
  position: 'Senior Paraplanners',
  location: 'Philippines'
})}>
  Apply Now
</button>
```

### **5. Track Scroll Depth**

Track how deep users scroll:

```typescript
import { trackScrollDepth } from "@/lib/analytics";
import { useEffect } from "react";

useEffect(() => {
  const handleScroll = () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    if (scrolled % 25 === 0) {
      // Track at 25%, 50%, 75%, 100%
      trackScrollDepth(Math.round(scrolled));
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### **6. Track Conversion/Goal Completion**

Track when a user completes a desired action:

```typescript
import { trackConversion } from "@/lib/analytics";

const handleSuccessfulSubmission = () => {
  trackConversion("contact_form_completed", 500); // value: 500
};
```

---

## Testing & Debugging

### **1. Check if GA4 is Loaded**

Open browser DevTools (F12) and run:

```javascript
console.log(window.gtag);
console.log(window.dataLayer);
```

**Expected output:**

- `window.gtag` = function code
- `window.dataLayer` = array with initialization events

### **2. View Real-time Events**

Open DevTools Console and navigate pages:

```
📊 GA4 Page View Tracked: { path: '/about', title: 'About - Advice Lab' }
📊 GA4 Event Tracked: { eventName: 'click', data: { element_name: 'cta_button' } }
```

These messages appear because of the `console.log()` in development mode.

### **3. Enable Debug Mode in GA4**

To see real-time events in the GA4 dashboard:

1. Go to: https://analytics.google.com → Property Settings
2. Enable "Debug View"
3. Open your site in a new tab
4. In GA4 dashboard, go to **DebugView**
5. See events appear in real-time

### **4. Use Browser Network Tab**

1. Open DevTools → Network tab
2. Filter by "collect" (GA4 requests)
3. Navigate pages or trigger events
4. You'll see POST requests to `www.google-analytics.com/g/collect`
5. Click request → Preview/Response to see event data

### **5. Verify Measurement ID**

Check that the correct ID is being used:

```javascript
// In DevTools Console
window.dataLayer.forEach((item) => console.log(item));
```

Look for `"config"` entries with `"G-3P9VQDR324"`

### **6. Test Event Tracking**

In DevTools Console, manually trigger events:

```javascript
window.gtag("event", "test_event", { test_param: "hello" });
```

Check the Network tab to see the request to Google Analytics.

### **7. Common Issues & Solutions**

| Issue                        | Cause                      | Solution                                  |
| ---------------------------- | -------------------------- | ----------------------------------------- |
| `window.gtag is not defined` | GA4 script not loaded      | Check index.html for script tag           |
| No data in dashboard         | Debug mode not enabled     | Enable Debug View in GA4 property         |
| Events not appearing         | Measurement ID mismatch    | Verify ID is `G-3P9VQDR324`               |
| CORS errors                  | Third-party script blocked | Check browser extensions/privacy settings |
| Delayed data                 | Normal batch processing    | Wait 30 seconds to several minutes        |

---

## Google Analytics Dashboard Access

### **Accessing GA4 Dashboard**

1. **URL:** https://analytics.google.com
2. **Property:** Select "Advice Lab" (or your property name)
3. **Account:** Use your Google account with GA4 access

### **Key Sections**

#### **Real-time Report** (Live data, 30-second delay)

- Path: **Reports** → **Real-time**
- Shows: Current active users, pages being viewed, events happening now
- Used for: Immediate feedback during testing

#### **Page Views Report**

- Path: **Reports** → **Engagement** → **Pages and screens**
- Shows: Most visited pages, bounce rate, session duration
- Used for: Understanding user navigation patterns

#### **Events Report**

- Path: **Reports** → **Engagement** → **Events**
- Shows: Custom events you tracked (form_submit, click, etc.)
- Used for: Monitoring conversions and user interactions

#### **Debug View**

- Path: **Reports** → **DebugView**
- Shows: Real-time event stream from tagged devices
- Used for: Testing and debugging during development

#### **Custom Reports**

- Create custom dashboards combining any metrics
- Used for: Executive dashboards, specific KPI tracking

### **Important Metrics**

| Metric               | Definition                                    |
| -------------------- | --------------------------------------------- |
| **Sessions**         | Time period of user activity (30 min timeout) |
| **Users**            | Unique visitors (identified by cookie)        |
| **Page Views**       | Times a page was loaded                       |
| **Bounce Rate**      | % of sessions with only 1 page view           |
| **Engagement Rate**  | % of sessions with meaningful interaction     |
| **Session Duration** | Average time per session                      |

---

## Summary of Implementation

✅ **GA4 Script:** Loaded in `index.html`
✅ **Analytics Utilities:** Created in `src/lib/analytics.ts` (no third-party packages)
✅ **Page Tracking:** Automatic via `usePageViewTracking` hook
✅ **Event Tracking:** Available through exported functions
✅ **React Router Integration:** AppRoutes component uses the hook
✅ **Development Logging:** Console logs in development mode
✅ **Type Safety:** TypeScript type definitions included
✅ **Error Handling:** Try-catch blocks prevent crashes
✅ **Testing Ready:** Multiple testing methods available

---

## Quick Reference

```typescript
// Import in any component
import {
  trackPageView,
  trackEvent,
  trackClick,
  trackFormSubmission,
  trackButtonClick,
  trackConversion,
  trackScrollDepth,
  trackTimeOnPage,
  setUserId,
} from "@/lib/analytics";

// Page views - automatic (no code needed)

// Track a click
trackClick("button_name");

// Track form submission
trackFormSubmission("form_name", { field1: "value" });

// Track custom event
trackEvent("event_name", { param: "value" });

// Track conversion
trackConversion("goal_name", 100);
```

---

## Next Steps

1. ✅ Implementation complete
2. **Test:** Navigate your site and check GA4 dashboard
3. **Add Events:** Add custom tracking to important interactions
4. **Monitor:** Check GA4 reports regularly
5. **Optimize:** Use insights to improve user experience

---

**Created:** February 2026
**Measurement ID:** G-3P9VQDR324
**Framework:** React + React Router
**Packages:** None (manual implementation)
