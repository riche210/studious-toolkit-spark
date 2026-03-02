import { Link } from "react-router-dom";
import { 
  Calendar, Percent, GraduationCap, Landmark, Receipt, 
  Type, Heart, CreditCard, Tag, CalendarDays 
} from "lucide-react";

const tools = [
  { to: "/age-calculator", icon: Calendar, title: "Age Calculator", desc: "Calculate your exact age in years, months, and days" },
  { to: "/percentage-calculator", icon: Percent, title: "Percentage Calculator", desc: "Find percentages, increases, and decreases quickly" },
  { to: "/cgpa-to-percentage", icon: GraduationCap, title: "CGPA to Percentage", desc: "Convert your CGPA to percentage easily" },
  { to: "/simple-interest-calculator", icon: Landmark, title: "Simple Interest Calculator", desc: "Calculate simple interest on any principal amount" },
  { to: "/gst-calculator", icon: Receipt, title: "GST Calculator", desc: "Calculate GST for Indian tax slabs (5%, 12%, 18%, 28%)" },
  { to: "/word-counter", icon: Type, title: "Word Counter", desc: "Count words, characters, sentences, and paragraphs" },
  { to: "/bmi-calculator", icon: Heart, title: "BMI Calculator", desc: "Check your Body Mass Index instantly" },
  { to: "/emi-calculator", icon: CreditCard, title: "EMI Calculator", desc: "Calculate your monthly loan EMI payment" },
  { to: "/discount-calculator", icon: Tag, title: "Discount Calculator", desc: "Find the final price after discount" },
  { to: "/date-difference-calculator", icon: CalendarDays, title: "Date Difference Calculator", desc: "Find the difference between two dates" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Daily Student Tools</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Free online calculators and tools for students. Fast, simple, and works on any device.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">All Tools</h2>
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
      </section>
    </>
  );
};

export default Index;
