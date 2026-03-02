import { Link } from "react-router-dom";
import {
  Calendar, Percent, GraduationCap, Landmark, Receipt,
  Type, Heart, CreditCard, Tag, CalendarDays, ArrowRight
} from "lucide-react";

const tools = [
  { to: "/age-calculator", icon: Calendar, title: "Age Calculator", desc: "Calculate your exact age in years, months, and days" },
  { to: "/percentage-calculator", icon: Percent, title: "Percentage Calculator", desc: "Find percentages, increases, and decreases quickly" },
  { to: "/cgpa-to-percentage", icon: GraduationCap, title: "CGPA to Percentage", desc: "Convert your CGPA to percentage (Indian formula)" },
  { to: "/simple-interest-calculator", icon: Landmark, title: "Simple Interest Calculator", desc: "Calculate simple interest on any principal amount" },
  { to: "/gst-calculator", icon: Receipt, title: "GST Calculator", desc: "Calculate GST for Indian tax slabs (5%, 12%, 18%, 28%)" },
  { to: "/word-counter", icon: Type, title: "Word Counter", desc: "Count words, characters, sentences, and paragraphs" },
  { to: "/bmi-calculator", icon: Heart, title: "BMI Calculator", desc: "Check your Body Mass Index instantly" },
  { to: "/emi-calculator", icon: CreditCard, title: "EMI Calculator", desc: "Calculate your monthly loan EMI payment" },
  { to: "/discount-calculator", icon: Tag, title: "Discount Calculator", desc: "Find the final price after discount" },
  { to: "/date-difference-calculator", icon: CalendarDays, title: "Date Difference", desc: "Find the difference between two dates" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 sm:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-sm font-medium mb-6 backdrop-blur-sm">
            100% Free · No Sign-up · Works Offline
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Free Student & Daily<br />Utility Tools for India
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            10+ lightweight calculators and tools built for Indian students. CGPA converter, GST calculator, EMI planner, and more — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tools" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-all">
              Explore All Tools <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/blog" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Popular Student Tools</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Free, fast, and accurate tools designed specifically for Indian students and everyday use.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link key={tool.to} to={tool.to} className="tool-card group">
              <div className="tool-icon-wrapper">
                <tool.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/tools" className="tool-button inline-flex items-center gap-2">
            View All Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why SmartStudyTools?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "100% Free", desc: "No hidden charges, no premium tiers. Every tool is completely free to use." },
              { title: "Mobile Friendly", desc: "Optimized for phones and tablets. Use anywhere — classroom, library, or home." },
              { title: "Made for India", desc: "Tools calibrated for Indian students — CGPA formulas, GST slabs, INR currency." },
            ].map(item => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
