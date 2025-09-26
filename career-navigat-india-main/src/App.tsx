import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Quiz from "./pages/Quiz";
import DashboardPage from "./pages/DashboardPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import Mentors from "./pages/Mentors";
import Courses from "./pages/Courses";
import CollegeFinderPage from "./pages/CollegeFinderPage";
import VoiceAssistant from "@/components/VoiceAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/colleges" element={<CollegeFinderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global animated chatbot for all pages */}
        <VoiceAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
