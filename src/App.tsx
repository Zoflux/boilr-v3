import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import SolutionDiscovery from "./pages/SolutionDiscovery";
import SolutionSignals from "./pages/SolutionSignals";
import FAQ from "./pages/FAQ";
import ComparisonVenteAi from "./pages/ComparisonVenteAi";
import ComparisonSourcebreaker from "./pages/ComparisonSourcebreaker";
import ComparisonPaiger from "./pages/ComparisonPaiger";
import ToolkitPage from "./pages/ToolkitPage";
import AboutUs from "./pages/AboutUs";
import RecruitmentPlaybook from "./pages/RecruitmentPlaybook";
import OurCustomers from "./pages/OurCustomers";
import ROICalculator from "./pages/ROICalculator";
import HiringSignals from "./pages/HiringSignals";
import BusinessDevelopment from "./pages/BusinessDevelopment";
import PromptsForRecruiters from "./pages/PromptsForRecruiters";

const queryClient = new QueryClient();

// Component that handles scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={120} skipDelayDuration={200}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Reviews page */}
          <Route path="/reviews" element={<OurCustomers />} />
          {/* Solutions - separate pages for each product */}
          <Route path="/solutions" element={<Navigate to="/solutions/discovery" replace />} />
          <Route path="/solutions/discovery" element={<SolutionDiscovery />} />
          <Route path="/solutions/signals" element={<SolutionSignals />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* Comparison pages */}
          <Route path="/comparison-boilr-vs-vente-ai" element={<ComparisonVenteAi />} />
          <Route path="/comparison-boilr-vs-sourcebreaker" element={<ComparisonSourcebreaker />} />
          <Route path="/comparison-boilr-vs-paiger" element={<ComparisonPaiger />} />
          <Route path="/toolkit" element={<ToolkitPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/playbook" element={<RecruitmentPlaybook />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/hiring-signals" element={<HiringSignals />} />
          <Route path="/business-development" element={<BusinessDevelopment />} />
          <Route path="/prompts-for-recruiters" element={<PromptsForRecruiters />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
