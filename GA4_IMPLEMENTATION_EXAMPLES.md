# GA4 Implementation Examples & Code Snippets

Quick reference guide with copy-paste ready code for common tracking scenarios.

---

## Table of Contents

1. [Button Clicks](#button-clicks)
2. [Form Submissions](#form-submissions)
3. [Navigation Links](#navigation-links)
4. [Page-Specific Tracking](#page-specific-tracking)
5. [Custom Components](#custom-components)
6. [Scroll Tracking](#scroll-tracking)
7. [Time Tracking](#time-tracking)

---

## Button Clicks

### **Basic CTA Button**

```typescript
import { trackClick } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

export const ContactButton = () => {
  const handleClick = () => {
    trackClick('contact_cta_button');
    // Then navigate or perform action
  };

  return (
    <Button onClick={handleClick}>
      Get In Touch
    </Button>
  );
};
```

### **Button with Additional Context**

```typescript
import { trackButtonClick } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

export const ApplyJobButton = ({ jobId, jobTitle }) => {
  const handleClick = () => {
    trackButtonClick('apply_job_button', {
      job_id: jobId,
      job_title: jobTitle,
      timestamp: new Date().toISOString(),
    });
    // Navigate to application form
  };

  return (
    <Button onClick={handleClick}>
      Apply Now
    </Button>
  );
};
```

### **Multiple Button Group**

```typescript
import { trackButtonClick } from '@/lib/analytics';

export const ServiceSelection = () => {
  const services = ['Paraplanning', 'Client Support', 'Mortgage'];

  return (
    <div>
      {services.map(service => (
        <button
          key={service}
          onClick={() => trackButtonClick('service_select', { service })}
        >
          {service}
        </button>
      ))}
    </div>
  );
};
```

---

## Form Submissions

### **Contact Form**

```typescript
import { trackFormSubmission } from '@/lib/analytics';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Track form submission
    trackFormSubmission('contact_form', {
      service_type: formData.service,
      has_message: formData.message.length > 0,
    });

    // Submit to server
    try {
      // API call here
      console.log('Form submitted');
    } catch (error) {
      console.error('Form submission failed');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select Service</option>
        <option value="paraplanning">Paraplanning</option>
        <option value="client_support">Client Support</option>
        <option value="mortgage">Mortgage</option>
      </select>
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Send Message</button>
    </form>
  );
};
```

### **Newsletter Signup Form**

```typescript
import { trackConversion } from '@/lib/analytics';
import { useState } from 'react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Subscribe to newsletter API
      // await subscribeNewsletter(email);

      // Track conversion
      trackConversion('newsletter_signup', 10); // Value: 10 points

      setEmail('');
      // Show success message
    } catch (error) {
      console.error('Newsletter signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};
```

### **Job Application Form**

```typescript
import { trackFormSubmission, trackConversion } from '@/lib/analytics';
import { useState } from 'react';

export const JobApplicationForm = ({ jobId, jobTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Track form submission
    trackFormSubmission('job_application_form', {
      job_id: jobId,
      job_title: jobTitle,
      has_cover_letter: formData.coverLetter.length > 0,
    });

    try {
      // Submit application
      // const response = await submitApplication(formData);

      // Track conversion if successful
      trackConversion('job_application_submitted', 50); // Value: 50 points

      // Show success message
    } catch (error) {
      console.error('Application submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        required
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        required
        onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] })}
      />
      <textarea
        placeholder="Cover Letter (Optional)"
        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};
```

---

## Navigation Links

### **Service Navigation**

```typescript
import { Link } from 'react-router-dom';
import { trackClick } from '@/lib/analytics';

export const ServiceNavigation = () => {
  const services = [
    { path: '/services/paraplanning', name: 'Paraplanning' },
    { path: '/services/clientsupport', name: 'Client Support' },
    { path: '/services/mortgage', name: 'Mortgage' },
  ];

  const handleNavigate = (serviceName) => {
    trackClick(`service_nav_${serviceName.toLowerCase()}`);
  };

  return (
    <nav>
      {services.map(service => (
        <Link
          key={service.path}
          to={service.path}
          onClick={() => handleNavigate(service.name)}
        >
          {service.name}
        </Link>
      ))}
    </nav>
  );
};
```

### **Blog Post Link**

```typescript
import { Link } from 'react-router-dom';
import { trackClick } from '@/lib/analytics';

export const BlogPostLink = ({ postId, postTitle }) => {
  return (
    <Link
      to={`/blog/${postId}`}
      onClick={() => trackClick('blog_post_click', { post_id: postId, post_title: postTitle })}
    >
      {postTitle}
    </Link>
  );
};
```

### **External Link Tracking**

```typescript
import { trackClick } from '@/lib/analytics';

export const ExternalLink = ({ href, label, category }) => {
  const handleClick = () => {
    trackClick(`external_link_${category}`, {
      url: href,
      label: label,
    });
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {label}
    </a>
  );
};
```

---

## Page-Specific Tracking

### **Blog Page - Track Engagement**

```typescript
import { useEffect } from 'react';
import { trackEvent, trackTimeOnPage } from '@/lib/analytics';

export const BlogPostPage = ({ postId, postTitle }) => {
  useEffect(() => {
    const startTime = Date.now();

    // Track blog post view
    trackEvent('blog_post_viewed', {
      post_id: postId,
      post_title: postTitle,
    });

    // Track time on page when user leaves
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };
  }, [postId, postTitle]);

  return (
    <div>
      {/* Blog content */}
    </div>
  );
};
```

### **Career Page - Track Interested Candidates**

```typescript
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { JobCard } from '@/components/JobCard';

export const CareersPage = () => {
  const jobs = [
    { id: '1', title: 'Senior Paraplanners', location: 'Philippines' },
    { id: '2', title: 'Compliance Officer', location: 'Sri Lanka' },
  ];

  const handleJobViewDetails = (jobId, jobTitle) => {
    trackEvent('job_details_viewed', {
      job_id: jobId,
      job_title: jobTitle,
    });
  };

  return (
    <div>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          {...job}
          onViewDetails={() => handleJobViewDetails(job.id, job.title)}
        />
      ))}
    </div>
  );
};
```

### **Services Page - Track Service Interest**

```typescript
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { id: 'paraplanning', name: 'Paraplanning', icon: '📋' },
    { id: 'client-support', name: 'Client Support', icon: '👥' },
    { id: 'mortgage', name: 'Mortgage', icon: '🏠' },
  ];

  const handleServiceClick = (serviceId, serviceName) => {
    setActiveService(serviceId);
    trackEvent('service_expanded', {
      service_id: serviceId,
      service_name: serviceName,
    });
  };

  return (
    <div>
      {services.map(service => (
        <div
          key={service.id}
          onClick={() => handleServiceClick(service.id, service.name)}
        >
          {service.icon} {service.name}
        </div>
      ))}
    </div>
  );
};
```

---

## Custom Components

### **Accordion Component with Tracking**

```typescript
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  trackingCategory: string;
}

export const Accordion = ({ items, trackingCategory }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number, itemId: string, itemTitle: string) => {
    setOpenIndex(openIndex === index ? null : index);

    trackEvent('accordion_item_clicked', {
      category: trackingCategory,
      item_id: itemId,
      item_title: itemTitle,
      opened: openIndex !== index,
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id}>
          <button onClick={() => handleItemClick(index, item.id, item.title)}>
            {item.title}
          </button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
```

### **Modal/Dialog with Tracking**

```typescript
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ title, onClose, children }: ModalProps) => {
  const handleClose = () => {
    trackEvent('modal_closed', {
      modal_title: title,
    });
    onClose();
  };

  const handleBackdropClick = () => {
    trackEvent('modal_backdrop_clicked', {
      modal_title: title,
    });
    handleClose();
  };

  return (
    <div onClick={handleBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
```

### **Video Player with Tracking**

```typescript
import { useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface VideoPlayerProps {
  videoId: string;
  videoTitle: string;
  src: string;
}

export const VideoPlayer = ({ videoId, videoTitle, src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    trackEvent('video_played', {
      video_id: videoId,
      video_title: videoTitle,
    });
  };

  const handlePause = () => {
    const currentTime = videoRef.current?.currentTime || 0;
    trackEvent('video_paused', {
      video_id: videoId,
      video_title: videoTitle,
      time_watched: Math.round(currentTime),
    });
  };

  const handleEnded = () => {
    trackEvent('video_completed', {
      video_id: videoId,
      video_title: videoTitle,
      duration: Math.round(videoRef.current?.duration || 0),
    });
  };

  return (
    <video
      ref={videoRef}
      src={src}
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
      controls
    />
  );
};
```

---

## Scroll Tracking

### **Page Scroll Depth Tracking**

```typescript
import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export const useScrollDepthTracking = () => {
  useEffect(() => {
    let lastTrackedScroll = 0;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;

      // Track at 25%, 50%, 75%, 100%
      if (scrollPercentage >= 25 && lastTrackedScroll < 25) {
        trackScrollDepth(25);
        lastTrackedScroll = 25;
      } else if (scrollPercentage >= 50 && lastTrackedScroll < 50) {
        trackScrollDepth(50);
        lastTrackedScroll = 50;
      } else if (scrollPercentage >= 75 && lastTrackedScroll < 75) {
        trackScrollDepth(75);
        lastTrackedScroll = 75;
      } else if (scrollPercentage >= 100 && lastTrackedScroll < 100) {
        trackScrollDepth(100);
        lastTrackedScroll = 100;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Usage in a page component
export const HomePage = () => {
  useScrollDepthTracking();

  return (
    <div>
      {/* Your content */}
    </div>
  );
};
```

### **Element Visibility Tracking**

```typescript
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface SectionTrackerProps {
  sectionId: string;
  sectionName: string;
  children: React.ReactNode;
}

export const SectionTracker = ({ sectionId, sectionName, children }: SectionTrackerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_viewed', {
            section_id: sectionId,
            section_name: sectionName,
            view_time: new Date().toISOString(),
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionId, sectionName]);

  return <div ref={sectionRef}>{children}</div>;
};
```

---

## Time Tracking

### **Page Exit Tracking**

```typescript
import { useEffect } from 'react';
import { trackTimeOnPage } from '@/lib/analytics';

export const usePageExitTracking = () => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };
  }, []);
};

// Usage in a component
export const DetailPage = () => {
  usePageExitTracking();

  return (
    <div>
      {/* Page content */}
    </div>
  );
};
```

### **Component Render Time Tracking**

```typescript
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export const SlowComponent = () => {
  useEffect(() => {
    const startTime = performance.now();

    // Simulate slow component
    setTimeout(() => {
      const endTime = performance.now();
      const renderTime = Math.round(endTime - startTime);

      trackEvent('component_rendered', {
        component_name: 'SlowComponent',
        render_time: renderTime,
      });
    }, 0);
  }, []);

  return <div>Slow Component</div>;
};
```

---

## Testing All Examples Locally

1. **Add imports to your page:**

   ```typescript
   import {
     trackClick,
     trackFormSubmission,
     trackEvent,
   } from "@/lib/analytics";
   ```

2. **Use with your components**

3. **Open browser DevTools (F12)**

4. **Check Console tab** - You'll see logs like:

   ```
   📊 GA4 Event Tracked: { eventName: 'click', data: { element_name: 'button' } }
   ```

5. **Check Network tab** - Filter by "collect" to see GA4 requests

6. **Check GA4 Dashboard** - DebugView shows events in real-time

---

## Best Practices

✅ **Do:**

- Track important user interactions
- Include meaningful context (IDs, titles, categories)
- Use consistent event names
- Test in Dev Tools Console

❌ **Don't:**

- Track every single click
- Use personally identifiable information (PII)
- Create events with random names
- Rely on real-time data for decisions (use historical data)

---

**Last Updated:** February 2026
**Measurement ID:** G-3P9VQDR324
