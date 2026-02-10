# GA4 Testing & Troubleshooting Guide

Complete guide for testing your GA4 implementation and solving common issues.

---

## Quick Testing Checklist

### **Phase 1: Browser Console Tests** ✅

```javascript
// Open DevTools (F12) → Console tab and run:

// 1. Check if GA4 script loaded
console.log("gtag function:", typeof window.gtag);
console.log("dataLayer array:", window.dataLayer);

// Expected output:
// gtag function: function
// dataLayer array: [Array(n)]

// 2. Check Measurement ID
window.dataLayer.forEach((item) => {
  if (item[0] === "config") {
    console.log("Measurement ID:", item[1]);
  }
});

// Expected output:
// Measurement ID: G-3P9VQDR324

// 3. Manually trigger a test event
window.gtag("event", "test_event", {
  test_param: "hello_world",
  timestamp: new Date().toISOString(),
});

// 4. Check dataLayer entries
console.log("Last 5 dataLayer entries:", window.dataLayer.slice(-5));
```

### **Phase 2: Network Tab Tests** ✅

1. Open DevTools → **Network** tab
2. Filter by **Fetch/XHR**
3. Search for **"collect"** or **"google-analytics"**
4. Navigate to a different page in your app
5. **Expected:** You'll see a POST request to `https://www.google-analytics.com/g/collect`
6. Click the request → **Request** tab
7. Scroll down to see payload data

**Sample Request Payload:**

```
measurement_id=G-3P9VQDR324
api_secret=[UUID]
payload_bytes=...
```

### **Phase 3: Browser Storage** ✅

```javascript
// In DevTools Console:

// 1. Check cookies
console.log("Cookies:", document.cookie);

// 2. Look for _ga and _ga_[MEASUREMENT_ID] cookies
// They'll look like: _ga=GA1.1.123456789.1234567890

// 3. Check localStorage
console.log("localStorage:", window.localStorage);

// Should contain GA-related data
```

### **Phase 4: GA4 Dashboard Real-time** ✅

**Method 1: Real-time Report**

1. Go to https://analytics.google.com
2. Select your property (Advice Lab)
3. **Reports** → **Realtime**
4. Open your website in new tab
5. Navigate to different pages
6. **Expected:** You'll see active users and pages in real-time

**Method 2: Debug View**

1. **Reports** → **DebugView** (if enabled)
2. Make sure Device is selected
3. Open your site in new private window
4. **Expected:** Live event stream appears in Debug View

---

## Step-by-Step Testing Procedure

### **Test 1: Basic Page View Tracking**

**Steps:**

1. Open browser DevTools Console
2. Go to your website home page (`/`)
3. Check console for: `📊 GA4 Page View Tracked: { path: '/', ... }`
4. Click on a link (e.g., `/about`)
5. Check console for: `📊 GA4 Page View Tracked: { path: '/about', ... }`

**Expected Result:**
✅ Logs appear immediately upon navigation
✅ Pathname is correct
✅ Document title is correct

---

### **Test 2: Custom Event Tracking**

**Steps:**

1. Open browser DevTools Console
2. Run this code:
   ```javascript
   window.gtag("event", "manual_test_event", {
     test_param: "test_value",
   });
   ```
3. Check console for log message
4. Switch to **Network** tab
5. Filter by "collect"
6. Look for POST request with your event data

**Expected Result:**
✅ Console logs the event
✅ Network shows request to Google
✅ GA4 DebugView shows the event

---

### **Test 3: Form Submission Tracking**

**Steps:**

1. Navigate to `/contact` page
2. Open browser Console
3. Fill out the contact form (minimal fields)
4. Submit the form
5. Check console for: `📊 GA4 Event Tracked: { eventName: 'form_submit', ... }`

**Expected Result:**
✅ Form submission event logged
✅ Network tab shows request
✅ GA4 shows form_submit event in Events report

---

### **Test 4: Click Event Tracking**

**Steps:**

1. Add this to any button in your component:
   ```typescript
   onClick={() => trackClick('test_button')}
   ```
2. Click the button
3. Check console for: `📊 GA4 Event Tracked: { eventName: 'click', ... }`

**Expected Result:**
✅ Click event logged with element name
✅ Timestamp recorded correctly
✅ Event appears in GA4 Events report

---

## Debugging Common Issues

### **Issue #1: "gtag is not defined" Error**

**Cause:** GA4 script not loaded from Google

**Diagnosis:**

```javascript
console.log(typeof window.gtag); // Should be 'function'
console.log(window.dataLayer); // Should be an array
```

**Solutions:**

✅ **Check script tag exists in index.html:**

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-3P9VQDR324"
></script>
```

✅ **Check script loads correctly:**

- Network tab → filter "gtag" → should show 200 status

✅ **Check browser extensions:**

- Some ad blockers block Google Analytics
- Try private/incognito window

✅ **Check network conditions:**

```javascript
// In DevTools -> Network tab:
// Check "Disable cache" is checked
// Try throttling to "No throttling"
```

---

### **Issue #2: No Data in GA4 Dashboard**

**Cause:** Events sent but not showing in dashboard

**Diagnosis:**

1. Check Network tab for requests to Google
2. Check Console for event logs
3. Check real-time report
4. Wait 30+ seconds (batching delay)

**Solutions:**

✅ **Enable Debug View (fastest feedback):**

1. Go to GA4 Property Settings
2. Find "Reporting Identity"
3. Enable "Debug View"
4. Open your site in new tab
5. Check **DebugView** in Reports (shows 1-second latency)

✅ **Check Measurement ID:**

```javascript
// In console:
window.dataLayer.forEach((entry) => {
  if (entry[0] === "config") {
    console.log("Using ID:", entry[1]);
  }
});
// Should show: G-3P9VQDR324
```

✅ **Check if data is being filtered:**

- GA4 Settings → Admin → Data streams
- Check Filters and Exclusions
- No filters should be active

✅ **Wait for data processing:**

- Real-time: 30 seconds latency
- Reports: Can take up to 24 hours
- Use Debug View for immediate feedback

---

### **Issue #3: Events Not Showing in GA4**

**Cause:** Events sent to wrong measurement ID or incorrect configuration

**Diagnosis:**

```javascript
// Check last events in dataLayer
console.log(window.dataLayer.slice(-10));
```

**Solutions:**

✅ **Verify Measurement ID in code:**

```typescript
// In analytics.ts, check this ID is correct:
// G-3P9VQDR324

// Also check in index.html:
// <script ... ?id=G-3P9VQDR324></script>
```

✅ **Check event name format:**

- GA4 converts event names to lowercase
- Underscores allowed, but dots get removed
- Use: `form_submit` not `formSubmit`

✅ **Check event parameters:**

```javascript
// Parameters must be objects, not arrays
window.gtag("event", "test", {
  param1: "value1", // ✅ Correct
  param2: "value2",
});

// Not:
window.gtag("event", "test", ["value1", "value2"]); // ❌ Wrong
```

---

### **Issue #4: Page Views Not Tracking**

**Cause:** Hook not properly integrated or route not detected

**Diagnosis:**

```javascript
// Check if usePageViewTracking is being called
// Add this to App.tsx temporarily:
console.log("AppRoutes component rendered");
```

**Solutions:**

✅ **Verify hook is in AppRoutes:**

```typescript
const AppRoutes = () => {
  usePageViewTracking();  // Should be here
  return <Routes>...</Routes>;
};
```

✅ **Check hook dependencies:**

```typescript
useEffect(() => {
  trackPageView(location.pathname, document.title);
}, [location.pathname]); // Must depend on location.pathname
```

✅ **Verify AppRoutes is inside BrowserRouter:**

```typescript
<BrowserRouter>
  <AppRoutes />  {/* useLocation works here */}
</BrowserRouter>
```

❌ **Wrong:**

```typescript
<AppRoutes />  {/* useLocation won't work - no provider */}
<BrowserRouter>
  {/* Routes */}
</BrowserRouter>
```

---

### **Issue #5: CORS or Network Errors**

**Cause:** Network blocking or firewall

**Diagnosis:**

- Network tab shows failed requests (red X)
- Console shows CORS error

**Solutions:**

✅ **Check firewall/proxy:**

```javascript
// Try fetching Google Analytics directly
fetch("https://www.google-analytics.com/g/collect")
  .then(() => console.log("GA4 accessible"))
  .catch((e) => console.error("GA4 blocked:", e));
```

✅ **Check browser security settings:**

- Disable tracking protection temporarily
- Check browser privacy settings
- Try different browser (Firefox, Chrome)

✅ **Try private/incognito mode:**

```
Press Ctrl+Shift+P (Chrome) or Cmd+Shift+P (Mac)
Open your site in new private window
ad blockers usually disabled in private mode
```

---

### **Issue #6: Delayed or Missing Events**

**Cause:** Batching delay or page navigation before send

**Diagnosis:**

```javascript
// Check when last event was sent
console.log(
  "Last dataLayer entry:",
  window.dataLayer[window.dataLayer.length - 1],
);
```

**Solutions:**

✅ **Understand GA4 batching:**

- Events batched every 500ms OR
- When page unloads (e.g., navigation away)
- NOT real-time, can take several seconds

✅ **Force send events:**

```javascript
// If needed (not recommended in production):
window.gtag("event", "important_event", {
  event_callback: () => console.log("Event sent"),
});
```

✅ **Check page unload:**

```javascript
window.addEventListener("beforeunload", () => {
  console.log("Page unloading, GA4 will send queued events");
});
```

---

## Complete Testing Flow

### **Day 1: Development Testing**

```
1. Add GA4 script to index.html ✅
2. Create analytics.ts utility ✅
3. Create usePageViewTracking hook ✅
4. Import hook in App.tsx ✅
5. Test in browser console ✅
6. Check Network tab for requests ✅
7. Commit to GitHub ✅
```

### **Day 2: On Staging**

```
1. Deploy to staging environment
2. Open DevTools Console
3. Navigate all pages (/, /about, /services, /contact)
4. Verify page view logs appear
5. Check GA4 Real-time report for data
6. Add test event tracking code
7. Trigger events and verify logging
8. Wait 5 minutes, check Real-time report
```

### **Day 3: Production**

```
1. Deploy to production
2. Enable Debug View in GA4
3. Open production site
4. Navigate pages in private window
5. Check GA4 DebugView for events
6. Monitor for 24 hours
7. Check standard reports the next day
```

---

## Device Identification Testing

### **Test Multiple Devices**

GA4 uses cookies to identify users across sessions:

```
Device 1: Chrome → _ga=GA1.1.[ID1]
Device 2: Firefox → _ga=GA1.1.[ID2]
Device 3: Safari → _ga=GA1.1.[ID3]
```

**To test:**

1. Visit your site on different browsers
2. Check cookies: `_ga_G-3P9VQDR324`
3. GA4 dashboard will show as different users

---

## Performance Testing

### **Check Tracking Impact**

```javascript
// Measure page load with/without GA4

// Before GA event:
const before = performance.now();

window.gtag('event', 'large_event', {
  // 100+ parameters
  p1: 'v1', p2: 'v2', ... p100: 'v100'
});

// After GA event:
const after = performance.now();
console.log(`GA event tracking took ${after - before}ms`);

// Should be < 5ms (very fast)
```

**Expected Results:**

- Page load impact: < 500ms
- Individual event tracking: < 5ms
- No noticeable slowness

---

## Browser Console Commands Quick Reference

```javascript
// Check if GA is loaded
window.gtag ? "✅ GA4 loaded" : "❌ GA4 not loaded";

// View all dataLayer entries
window.dataLayer;

// Count events sent
window.dataLayer.filter((e) => e[0] === "event").length;

// View last 10 events
window.dataLayer.filter((e) => e[0] === "event").slice(-10);

// Manually send test event
window.gtag("event", "test_event", { test: "param" });

// Check all cookies
document.cookie;

// Check GA cookie
document.cookie.split(";").find((c) => c.includes("_ga"));

// Clear all data (development only!)
window.dataLayer = [];
```

---

## Production Monitoring Checklist

Daily checks:

- [ ] Real-time report shows active users
- [ ] Page view counts look normal
- [ ] No spike in errors
- [ ] Debug View shows expected events (if enabled)
- [ ] Network requests to GA succeed (status 200)

Weekly checks:

- [ ] Check main reports for trends
- [ ] Verify page view data matches site logs
- [ ] Check for anomalies or drops
- [ ] Review event counts vs expected

---

**Last Updated:** February 2026
**Quick Reference:** Open this file whenever you need to test or troubleshoot GA4
