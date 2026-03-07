import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "how-to-calculate-gst-in-india",
    title: "How to Calculate GST in India",
    excerpt: "Learn how to calculate GST in India with formulas, examples, and explanations of CGST, SGST, and IGST. Includes reverse GST calculation method.",
  
  },
  {
    slug: "cgpa-vs-percentage-explained",
    title: "CGPA vs Percentage Explained",
    excerpt: "Understand how to convert CGPA to percentage using the official CBSE formula. Includes examples, common mistakes, and conversion tips.",
  
  },
  {
    slug: "simple-interest-formula-guide",
    title: "Simple Interest Formula Guide",
    excerpt: "Master the simple interest formula with step-by-step examples, practical problems, and exam-ready explanations.",
  
  },
  {
  slug: "emi-calculation-guide",
  title: "How to Calculate EMI Manually (Step-by-Step Guide)",
  excerpt: "Learn the EMI formula, understand how banks calculate loan EMI, and see real loan examples with simple explanations.",
},
  {
  slug: "bmi-formula-explained",
  title: "BMI Formula Explained for Students",
  excerpt: "Learn the BMI formula, understand what a healthy BMI range is, and see simple examples for students.",
},
  {
  slug: "how-to-calculate-age",
  title: "How to Calculate Age from Date of Birth",
  excerpt: "Learn how to calculate exact age in years, months, and days using a simple method and examples.",
},
  {
  slug: "date-difference-calculation-guide",
  title: "How to Calculate Date Difference Easily",
  excerpt: "Learn how to calculate the difference between two dates in days, months, and years with examples and practical uses.",
},
  {
  slug: "word-counter-tool-guide",
  title: "Word Counter Tool Explained for Students",
  excerpt: "Learn how word counter tools work, why students use them, and how they help track essay and assignment length.",
},
  {
  slug: "percentage-calculator-guide",
  title: "Percentage Calculator Explained for Students",
  excerpt: "Learn how percentage calculations work with simple formulas and examples.",
},
];

const Blog = () => (
  <div className="section-container max-w-4xl">
    <h1 className="text-3xl font-bold mb-2">Blog</h1>
  
<p>
Welcome to the SmartStudyTools Blog. Here we publish simple, clear, and practical guides to help students understand important academic and financial concepts like GST, CGPA conversion, and Simple Interest.
</p>

<p>
All our articles are written in easy language with formulas, worked examples, and step-by-step explanations so that students can learn quickly and apply the concepts confidently in exams and real life.
</p>

<h2>Latest Educational Guides</h2>
    <br/>
    <div className="space-y-6">
      {posts.map(post => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="block tool-card group">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
          <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read more <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default Blog;
