import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogGst = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>
    <article className="prose prose-sm max-w-none">
      <h1 className="text-3xl font-bold text-foreground">How to Calculate GST in India</h1>
      <p className="text-muted-foreground text-sm">Published: March 1, 2026</p>

      <h2 className="text-foreground">What is GST?</h2>
      <p className="text-muted-foreground">Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. Implemented on July 1, 2017, GST replaced multiple cascading taxes like VAT, excise duty, and service tax, creating a unified national tax system. Understanding GST is essential for commerce students, small business owners, and consumers alike.</p>

      <h2 className="text-foreground">GST Tax Slabs in India</h2>
      <p className="text-muted-foreground">India has four main GST rates:</p>
      <ul className="text-muted-foreground">
        <li><strong>5% GST</strong> — Essential items like packaged food, footwear under ₹1000, economy hotel stays</li>
        <li><strong>12% GST</strong> — Processed food, mobile phones, business class air tickets</li>
        <li><strong>18% GST</strong> — Most goods and services including electronics, restaurants, financial services</li>
        <li><strong>28% GST</strong> — Luxury items like cars, aerated drinks, tobacco products</li>
      </ul>

      <h2 className="text-foreground">How to Calculate GST (Exclusive)</h2>
      <p className="text-muted-foreground">When GST is <strong>not included</strong> in the price:</p>
      <p className="text-muted-foreground"><strong>GST Amount = Base Price × GST Rate / 100</strong></p>
      <p className="text-muted-foreground"><strong>Total Price = Base Price + GST Amount</strong></p>
      <p className="text-muted-foreground">Example: If a product costs ₹1,000 and GST is 18%, then GST = ₹180, Total = ₹1,180.</p>

      <h2 className="text-foreground">How to Calculate GST (Inclusive)</h2>
      <p className="text-muted-foreground">When GST is <strong>already included</strong> in the price:</p>
      <p className="text-muted-foreground"><strong>Base Price = Total Price / (1 + GST Rate / 100)</strong></p>
      <p className="text-muted-foreground"><strong>GST Amount = Total Price − Base Price</strong></p>
      <p className="text-muted-foreground">Example: If total price is ₹1,180 with 18% GST, Base = ₹1,000, GST = ₹180.</p>

      <h2 className="text-foreground">CGST and SGST</h2>
      <p className="text-muted-foreground">For intra-state transactions (within the same state), GST is split equally between CGST (Central GST) and SGST (State GST). For inter-state transactions, IGST (Integrated GST) applies at the full rate. For example, 18% GST on an intra-state sale means 9% CGST + 9% SGST.</p>

      <h2 className="text-foreground">Use Our Free GST Calculator</h2>
      <p className="text-muted-foreground">Skip the manual math! Our <Link to="/gst-calculator" className="text-primary hover:underline">GST Calculator</Link> supports all four Indian tax slabs and gives you an instant CGST/SGST breakdown. It works on mobile and requires no sign-up.</p>
    </article>
  </div>
);

export default BlogGst;
