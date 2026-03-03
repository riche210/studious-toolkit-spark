import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogGst = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>
    <article className="prose prose-sm max-w-none">
      <h1>How to Calculate GST in India (Complete Guide for Students & Beginners)</h1>

<p>
Goods and Services Tax (GST) is one of the most important indirect taxes in India. Whether you're a student studying commerce, preparing for competitive exams, or running a small business, understanding how GST works is essential.
</p>

<p>
In this guide, we’ll explain what GST is, how it is calculated, the difference between CGST, SGST, and IGST, and provide practical examples that make everything easy to understand.
</p>

<h2>What is GST?</h2>

<p>
GST (Goods and Services Tax) is a single indirect tax applied to the supply of goods and services in India. It replaced multiple taxes such as VAT, service tax, and excise duty to create a unified tax system.
</p>

<p>
GST is applied at different rates depending on the type of product or service.
</p>

<h2>Current GST Slabs in India</h2>

<ul>
  <li>5%</li>
  <li>12%</li>
  <li>18%</li>
  <li>28%</li>
</ul>

<p>
Most commonly used goods and services fall under the 12% and 18% categories.
</p>

<h2>Types of GST</h2>

<p>There are three main types of GST in India:</p>

<ul>
  <li><strong>CGST (Central GST)</strong> – Collected by the Central Government</li>
  <li><strong>SGST (State GST)</strong> – Collected by the State Government</li>
  <li><strong>IGST (Integrated GST)</strong> – Applied to inter-state transactions</li>
</ul>

<h2>GST Calculation Formula</h2>

<p>
The basic formula to calculate GST is:
</p>

<p>
<strong>GST Amount = (Original Price × GST Rate) ÷ 100</strong>
</p>

<p>
<strong>Final Price = Original Price + GST Amount</strong>
</p>

<h2>Example 1: Calculating GST on ₹1,000 at 18%</h2>

<p>
Let’s assume the original price of a product is ₹1,000 and the GST rate is 18%.
</p>

<p>
GST Amount = (1000 × 18) ÷ 100 = ₹180
</p>

<p>
Final Price = 1000 + 180 = ₹1,180
</p>

<p>
If it is an intra-state transaction, the ₹180 will be split into:
</p>

<ul>
  <li>CGST = ₹90</li>
  <li>SGST = ₹90</li>
</ul>

<h2>Example 2: Reverse GST Calculation</h2>

<p>
Sometimes you are given the final price and need to find the original price before GST.
</p>

<p>
Reverse Formula:
</p>

<p>
<strong>Original Price = Final Price ÷ (1 + GST Rate/100)</strong>
</p>

<p>
If final price is ₹1,180 and GST rate is 18%:
</p>

<p>
Original Price = 1180 ÷ 1.18 = ₹1,000
</p>

<h2>Why Students Should Understand GST</h2>

<ul>
  <li>Important for commerce and economics exams</li>
  <li>Frequently asked in competitive exams</li>
  <li>Useful for small businesses and freelancers</li>
  <li>Helps understand real-world pricing</li>
</ul>

<h2>Use Our Free GST Calculator</h2>

<p>
Instead of calculating manually every time, you can use our free GST Calculator available on SmartStudyTools. It helps you instantly calculate GST amount, split CGST/SGST, and even reverse-calculate original price.
</p>

<p>
Visit the GST Calculator from the Tools section to calculate in seconds.
</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
  <li>Forgetting to divide GST rate by 100</li>
  <li>Confusing intra-state and inter-state transactions</li>
  <li>Incorrect reverse calculation formula</li>
</ul>

<h2>Frequently Asked Questions (FAQ)</h2>

<h3>1. How do I calculate 18% GST on a price?</h3>
<p>
Multiply the price by 18 and divide by 100. Then add the result to the original price.
</p>

<h3>2. What is the difference between CGST and SGST?</h3>
<p>
CGST is collected by the central government, while SGST is collected by the state government in intra-state transactions.
</p>

<h3>3. How do I remove GST from a total amount?</h3>
<p>
Divide the total amount by (1 + GST rate ÷ 100).
</p>

<h2>Conclusion</h2>

<p>
Understanding GST is not just important for exams but also for everyday financial awareness. Whether you are a student, freelancer, or small business owner, knowing how GST works helps you make better financial decisions.
</p>

<p>
For quick and accurate calculations, use our free GST Calculator on SmartStudyTools.
</p>
    </article>
  </div>
);

export default BlogGst;
