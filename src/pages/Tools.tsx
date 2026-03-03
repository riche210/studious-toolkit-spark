import { Link } from "react-router-dom";
import {
  Calendar, Percent, GraduationCap, Landmark, Receipt,
  Type, Heart, CreditCard, Tag, CalendarDays
} from "lucide-react";

const tools = [
  { to: "/age-calculator", icon: Calendar, title: "Age Calculator", desc: "Calculate your exact age in years, months, and days from your date of birth." },
  { to: "/percentage-calculator", icon: Percent, title: "Percentage Calculator", desc: "Find what percentage one number is of another quickly and accurately." },
  { to: "/cgpa-to-percentage", icon: GraduationCap, title: "CGPA to Percentage", desc: "Convert your CGPA to percentage using the standard Indian formula (CGPA × 9.5)." },
  { to: "/simple-interest-calculator", icon: Landmark, title: "Simple Interest Calculator", desc: "Calculate simple interest on any principal amount with custom rate and time." },
  { to: "/gst-calculator", icon: Receipt, title: "GST Calculator", desc: "Calculate GST for all Indian slabs — 5%, 12%, 18%, and 28% with CGST/SGST split." },
  { to: "/word-counter", icon: Type, title: "Word Counter", desc: "Count words, characters, sentences, paragraphs, and estimated reading time." },
  { to: "/bmi-calculator", icon: Heart, title: "BMI Calculator", desc: "Check your Body Mass Index and health category based on weight and height." },
  { to: "/emi-calculator", icon: CreditCard, title: "EMI Calculator", desc: "Calculate monthly loan EMI, total interest, and total repayment amount." },
  { to: "/discount-calculator", icon: Tag, title: "Discount Calculator", desc: "Find the final price and savings after applying a discount percentage." },
  { to: "/date-difference-calculator", icon: CalendarDays, title: "Date Difference Calculator", desc: "Find the exact difference between two dates in years, months, days, and weeks." },
];

const Tools = () => (
  <div className="section-container max-w-6xl">
    <h1 className="text-3xl font-bold mb-2">All Student Tools</h1>
    <p className="text-muted-foreground mb-8">Free, fast, and accurate online calculators for students.</p>
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
  </div>
);

export default Tools;
