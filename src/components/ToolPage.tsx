import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  q: string;
  a: string;
}

interface ToolPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  seoContent: string;
  faqs: FAQ[];
}

const ToolPage = ({ title, description, children, seoContent, faqs }: ToolPageProps) => (
  <div className="section-container">
    <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Tools
    </Link>

    <h1 className="text-3xl font-bold mb-2">{title}</h1>
    <p className="text-muted-foreground mb-8">{description}</p>

    <div className="bg-card rounded-xl border border-border p-6 sm:p-8">
      {children}
    </div>

    {/* SEO Content */}
    <div className="seo-content">
      <h2 className="text-xl font-semibold text-foreground mb-4">About {title}</h2>
      <div dangerouslySetInnerHTML={{ __html: seoContent }} />
    </div>

    {/* FAQs */}
    <div className="faq-section">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-sm font-medium">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default ToolPage;
