import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogCgpa = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>
    <article className="prose prose-sm max-w-none">
      <h1 className="text-3xl font-bold text-foreground">CGPA vs Percentage Explained</h1>
      <p className="text-muted-foreground text-sm">Published: February 25, 2026</p>

      <h2 className="text-foreground">What is CGPA?</h2>
      <p className="text-muted-foreground">CGPA stands for Cumulative Grade Point Average. It is a grading system used by many Indian educational institutions, including CBSE, to evaluate student performance on a 10-point scale. Instead of giving exact marks, CGPA provides a grade point for each subject which is then averaged across all subjects.</p>

      <h2 className="text-foreground">What is Percentage?</h2>
      <p className="text-muted-foreground">Percentage is the traditional scoring system where marks obtained are expressed as a fraction of total marks, multiplied by 100. It gives a precise numerical representation of performance. Most Indian universities, employers, and scholarship programs still require percentage scores for eligibility and comparison.</p>

      <h2 className="text-foreground">Key Differences</h2>
      <ul className="text-muted-foreground">
        <li><strong>Scale:</strong> CGPA uses a 10-point scale; percentage uses 0–100.</li>
        <li><strong>Precision:</strong> Percentage gives exact marks; CGPA gives grade ranges.</li>
        <li><strong>Usage:</strong> CBSE uses CGPA for Class 9–10; most higher education uses percentage.</li>
        <li><strong>Stress:</strong> CGPA reduces competition pressure by grouping marks into grades.</li>
      </ul>

      <h2 className="text-foreground">How to Convert CGPA to Percentage</h2>
      <p className="text-muted-foreground">The standard formula recommended by CBSE is:</p>
      <p className="text-muted-foreground"><strong>Percentage = CGPA × 9.5</strong></p>
      <p className="text-muted-foreground">For example, a CGPA of 8.6 converts to 8.6 × 9.5 = <strong>81.7%</strong>. This formula is widely accepted across India for CBSE board results. Some universities may use different multipliers — always check with your specific institution.</p>

      <h2 className="text-foreground">Which System is Better?</h2>
      <p className="text-muted-foreground">Neither system is inherently better. CGPA reduces the stress of exact marks and encourages holistic learning, while percentage provides precise scores needed for competitive rankings. Many institutions are now adopting CGPA at the school level while maintaining percentage at the university level. Understanding both systems and how to convert between them is essential for Indian students navigating the education system.</p>

      <h2 className="text-foreground">Convert Your CGPA Now</h2>
      <p className="text-muted-foreground">Use our free <Link to="/cgpa-to-percentage" className="text-primary hover:underline">CGPA to Percentage Converter</Link> for instant, accurate results.</p>
    </article>
  </div>
);

export default BlogCgpa;
