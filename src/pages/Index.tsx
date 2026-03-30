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
            10 lightweight calculators and tools built for Indian students. CGPA converter, GST calculator, EMI planner, and more — all in one place.
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
      <section className="py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <h2 className="text-3xl font-bold mb-6 text-center">
      Free Online Calculators for Students in India
    </h2>

    <p className="text-muted-foreground mb-4">
      SmartStudyTools provides a collection of free online calculators designed to help students and everyday users perform quick and accurate calculations. Whether you need to calculate your age, convert CGPA to percentage, or plan your loan EMI, our tools are built to make the process simple and efficient.
    </p>

    <p className="text-muted-foreground mb-4">
      Each calculator is based on standard formulas used in academics and real-world applications. For example, our GST calculator follows Indian tax slabs, while the CGPA to percentage converter uses commonly accepted formulas like the CBSE conversion method.
    </p>

    <p className="text-muted-foreground mb-4">
      In addition to tools, we also provide detailed blog guides that explain concepts step-by-step. These guides help students understand not just the results, but also the logic behind calculations.
    </p>

    <p className="text-muted-foreground">
      All tools on SmartStudyTools are completely free, require no login, and work smoothly across mobile and desktop devices.
    </p>

  </div>
</section>
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
      {/* About SmartStudyTools */}
<section className="py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-6">
      About SmartStudyTools
    </h2>

    <p className="text-muted-foreground mb-4">
      SmartStudyTools is an educational and utility platform built to help Indian students perform accurate academic and financial calculations quickly and easily. From CGPA conversion to GST and EMI planning, our tools are designed with simplicity and reliability in mind.
    </p>

    <p className="text-muted-foreground mb-4">
      We also publish easy-to-understand educational guides that explain important concepts step by step, helping students improve their understanding and exam performance.
    </p>

    <p className="text-muted-foreground">
      Our mission is to make everyday calculations simple, accessible, and completely free for everyone.
    </p>
  </div>
</section>
     <section className="mt-24 mb-24 max-w-3xl mx-auto px-4">
  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

  <div className="space-y-4">

    <div>
      <h3 className="font-semibold">Are these calculators free to use?</h3>
      <p className="text-muted-foreground">
        Yes. All tools on SmartStudyTools are completely free and can be used by students, professionals, and anyone who needs quick calculations.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">Are the calculation results accurate?</h3>
      <p className="text-muted-foreground">
        Our tools are designed using standard mathematical formulas to provide accurate results. However, they should be used for informational purposes.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">What tools are available on SmartStudyTools?</h3>
      <p className="text-muted-foreground">
        The website includes tools such as Age Calculator, BMI Calculator, CGPA to Percentage Converter, GST Calculator, EMI Calculator, Percentage Calculator, Word Counter, Discount Calculator, and more.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">Do these tools work on mobile devices?</h3>
      <p className="text-muted-foreground">
        Yes. All calculators and tools on SmartStudyTools are designed to work smoothly on mobile phones, tablets, and desktop devices.
      </p>
    </div>

  </div>
</section>
    </>
  );
};

export default Index;
