import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import BulkSMS from "./pages/services/BulkSMS";
import RCS from "./pages/services/RCS";
import WhatsApp from "./pages/services/WhatsApp";
import Voice from "./pages/services/Voice";
import OTP from "./pages/services/OTP";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
import Security from "./pages/Security";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/bulk-sms" element={<BulkSMS />} />
          <Route path="/services/rcs" element={<RCS />} />
          <Route path="/services/whatsapp" element={<WhatsApp />} />
          <Route path="/services/voice" element={<Voice />} />
          <Route path="/services/otp" element={<OTP />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
