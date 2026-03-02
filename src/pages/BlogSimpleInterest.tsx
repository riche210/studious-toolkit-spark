import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogSimpleInterest = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>
    <article className="prose prose-sm max-w-none">
      <h1 className="text-3xl font-bold text-foreground">Simple Interest Formula Guide</h1>
      <p className="text-muted-foreground text-sm">Published: February 20, 2026</p>

      <h2 className="text-foreground">What is Simple Interest?</h2>
      <p className="text-muted-foreground">Simple Interest (SI) is the most basic method of calculating interest on a principal amount. Unlike compound interest, simple interest is calculated only on the original principal — not on any accumulated interest. This makes it straightforward to understand and calculate, which is why it's one of the first financial concepts taught in Indian schools.</p>

      <h2 className="text-foreground">The Simple Interest Formula</h2>
      <p className="text-muted-foreground"><strong>SI = (P × R × T) / 100</strong></p>
      <ul className="text-muted-foreground">
        <li><strong>P</strong> = Principal (the initial amount of money)</li>
        <li><strong>R</strong> = Rate of interest per annum (yearly percentage)</li>
        <li><strong>T</strong> = Time period in years</li>
      </ul>
      <p className="text-muted-foreground">The total amount after interest is: <strong>A = P + SI</strong></p>

      <h2 className="text-foreground">Solved Examples</h2>
      <p className="text-muted-foreground"><strong>Example 1:</strong> Find the simple interest on ₹10,000 at 8% per annum for 3 years.</p>
      <p className="text-muted-foreground">SI = (10000 × 8 × 3) / 100 = <strong>₹2,400</strong>. Total amount = ₹12,400.</p>
      <p className="text-muted-foreground"><strong>Example 2:</strong> A student borrows ₹50,000 for education at 6% for 2 years.</p>
      <p className="text-muted-foreground">SI = (50000 × 6 × 2) / 100 = <strong>₹6,000</strong>. Total repayment = ₹56,000.</p>

      <h2 className="text-foreground">Simple Interest vs Compound Interest</h2>
      <p className="text-muted-foreground">The key difference is that simple interest is always calculated on the original principal, while compound interest is calculated on the principal plus previously earned interest. For short-term calculations, the difference is small. For long-term investments or loans, compound interest results in significantly higher amounts.</p>

      <h2 className="text-foreground">Real-World Applications</h2>
      <p className="text-muted-foreground">Simple interest is commonly used in short-term personal loans, auto loans, some fixed deposits, and educational loans. Many Indian banks use simple interest for calculating interest on savings accounts on a daily balance basis. Understanding this formula helps students solve math problems and make informed financial decisions.</p>

      <h2 className="text-foreground">Try It Yourself</h2>
      <p className="text-muted-foreground">Practice with our free <Link to="/simple-interest-calculator" className="text-primary hover:underline">Simple Interest Calculator</Link> — enter any values and see results instantly.</p>
    </article>
  </div>
);

export default BlogSimpleInterest;
