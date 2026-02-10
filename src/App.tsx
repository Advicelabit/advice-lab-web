import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { usePageViewTracking } from "@/hooks/usePageViewTracking";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Paraplanning from "./pages/services/Paraplanning";
import ClientSupport from "./pages/services/ClientSupport";
import Mortgage from "./pages/services/Mortgage";
import Blog from "./pages/Resources/Blog";
import Careers from "./pages/Careers";
import BlogPost from "./pages/BlogPost";
import PhilippinesVacancies from "./pages/careers/PhilippinesVacancies";
import SriLankaVacancies from "./pages/careers/SriLankaVacancies";
import JobDetail from "./pages/careers/JobDetail";
import SubmitResume from "./pages/careers/SubmitResume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * AppRoutes Component
 * Separated to use React Router hooks (useLocation) for GA4 page tracking
 * This component must be inside BrowserRouter to access location context
 */
const AppRoutes = () => {
  // Track page views on route changes
  // usePageViewTracking();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/paraplanning" element={<Paraplanning />} />
        <Route path="/services/clientsupport" element={<ClientSupport />} />
        <Route path="/services/mortgage" element={<Mortgage />} />
        <Route path="/resources/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/philippines" element={<PhilippinesVacancies />} />
        <Route path="/careers/srilanka" element={<SriLankaVacancies />} />
        <Route path="/careers/job/:jobId" element={<JobDetail />} />
        <Route path="/careers/submit-resume" element={<SubmitResume />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
