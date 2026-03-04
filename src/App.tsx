import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import AgeCalculator from "./pages/AgeCalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import CgpaToPercentage from "./pages/CgpaToPercentage";
import SimpleInterestCalculator from "./pages/SimpleInterestCalculator";
import GstCalculator from "./pages/GstCalculator";
import WordCounter from "./pages/WordCounter";
import BmiCalculator from "./pages/BmiCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import DiscountCalculator from "./pages/DiscountCalculator";
import DateDifferenceCalculator from "./pages/DateDifferenceCalculator";
import Blog from "./pages/Blog";
import BlogGst from "./pages/BlogGst";
import BlogCgpa from "./pages/BlogCgpa";
import BlogSimpleInterest from "./pages/BlogSimpleInterest";
import BlogEmi from "./pages/BlogEmi";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/tools" element={<Layout><Tools /></Layout>} />
          <Route path="/age-calculator" element={<Layout><AgeCalculator /></Layout>} />
          <Route path="/percentage-calculator" element={<Layout><PercentageCalculator /></Layout>} />
          <Route path="/cgpa-to-percentage" element={<Layout><CgpaToPercentage /></Layout>} />
          <Route path="/simple-interest-calculator" element={<Layout><SimpleInterestCalculator /></Layout>} />
          <Route path="/gst-calculator" element={<Layout><GstCalculator /></Layout>} />
          <Route path="/word-counter" element={<Layout><WordCounter /></Layout>} />
          <Route path="/bmi-calculator" element={<Layout><BmiCalculator /></Layout>} />
          <Route path="/emi-calculator" element={<Layout><EmiCalculator /></Layout>} />
          <Route path="/discount-calculator" element={<Layout><DiscountCalculator /></Layout>} />
          <Route path="/date-difference-calculator" element={<Layout><DateDifferenceCalculator /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/how-to-calculate-gst-in-india" element={<Layout><BlogGst /></Layout>} />
          <Route path="/blog/cgpa-vs-percentage-explained" element={<Layout><BlogCgpa /></Layout>} />
          <Route path="/blog/simple-interest-formula-guide" element={<Layout><BlogSimpleInterest /></Layout>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
