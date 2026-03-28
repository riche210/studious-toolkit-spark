import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogGst = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>

    <article className="prose prose-sm max-w-none">
      <h1>How to Calculate GST in India (Complete Guide with Examples)</h1>

      <p>
        Goods and Services Tax (GST) is one of the most important indirect taxes in India. Whether you are a student, preparing for exams, or managing daily expenses, understanding GST helps you make better financial decisions.
      </p>

      <p>
        In this complete guide, you will learn what GST is, how to calculate it, the difference between CGST, SGST, and IGST, along with real-life examples and formulas.
      </p>

      <h2>What is GST?</h2>

      <p>
        GST (Goods and Services Tax) is a unified indirect tax applied to the supply of goods and services across India. It replaced multiple taxes such as VAT, service tax, and excise duty to simplify the taxation system.
      </p>

      <p>
        The main goal of GST is to create a single national market and reduce the complexity of multiple taxes.
      </p>

      <h2>GST Slabs in India</h2>

      <p>
        GST is applied at different rates depending on the type of goods or services:
      </p>

      <ul>
        <li>5% – Essential goods</li>
        <li>12% – Standard goods</li>
        <li>18% – Most commonly used goods and services</li>
        <li>28% – Luxury items</li>
      </ul>

      <p>
        Among these, 12% and 18% are the most commonly used GST rates in daily transactions.
      </p>

      <h2>Types of GST</h2>

      <p>There are three types of GST in India:</p>

      <ul>
        <li><strong>CGST (Central GST):</strong> Collected by the Central Government</li>
        <li><strong>SGST (State GST):</strong> Collected by the State Government</li>
        <li><strong>IGST (Integrated GST):</strong> Applied to inter-state transactions</li>
      </ul>

      <p>
        In intra-state transactions, GST is divided equally between CGST and SGST. In inter-state transactions, IGST is applied.
      </p>

      <h2>GST Calculation Formula</h2>

      <p>The basic GST calculation formula is:</p>

      <p><strong>GST Amount = (Original Price × GST Rate) ÷ 100</strong></p>
      <p><strong>Final Price = Original Price + GST Amount</strong></p>

      <h2>Example 1: GST Calculation</h2>

      <p>
        Let’s say the price of a product is ₹1,000 and GST rate is 18%.
      </p>

      <ul>
        <li>GST Amount = (1000 × 18) ÷ 100 = ₹180</li>
        <li>Final Price = ₹1,000 + ₹180 = ₹1,180</li>
      </ul>

      <p>
        If it is an intra-state transaction:
      </p>

      <ul>
        <li>CGST = ₹90</li>
        <li>SGST = ₹90</li>
      </ul>

      <h2>Example 2: Reverse GST Calculation</h2>

      <p>
        Sometimes you know the final price and want to find the original price.
      </p>

      <p><strong>Original Price = Final Price ÷ (1 + GST Rate/100)</strong></p>

      <p>
        Example: Final price = ₹1,180, GST = 18%
      </p>

      <ul>
        <li>Original Price = 1180 ÷ 1.18 = ₹1,000</li>
      </ul>

      <h2>Real-Life Uses of GST</h2>

      <ul>
        <li>Shopping bills in stores and online</li>
        <li>Restaurant bills</li>
        <li>Freelance invoices</li>
        <li>Business transactions</li>
      </ul>

      <p>
        Understanding GST helps you verify bills and avoid overpaying.
      </p>

      <h2>Common Mistakes to Avoid</h2>

      <ul>
        <li>Forgetting to divide GST rate by 100</li>
        <li>Confusing CGST/SGST with IGST</li>
        <li>Using wrong reverse calculation formula</li>
        <li>Adding GST twice by mistake</li>
      </ul>

      <h2>Use Our Free GST Calculator</h2>

      <p>
        Instead of calculating manually every time, you can use our free{" "}
        <Link to="/gst-calculator" className="text-primary underline">
          GST Calculator
        </Link>{" "}
        to instantly calculate GST, split CGST/SGST, and perform reverse calculations.
      </p>

      <h2>Related Tools</h2>

      <ul>
        <li>
          <Link to="/percentage-calculator" className="text-primary underline">
            Percentage Calculator
          </Link>
        </li>
        <li>
          <Link to="/simple-interest-calculator" className="text-primary underline">
            Simple Interest Calculator
          </Link>
        </li>
        <li>
          <Link to="/emi-calculator" className="text-primary underline">
            EMI Calculator
          </Link>
        </li>
      </ul>

      <h2>Frequently Asked Questions (FAQ)</h2>

      <h3>How do I calculate 18% GST?</h3>
      <p>
        Multiply the price by 18 and divide by 100, then add it to the original price.
      </p>

      <h3>What is the difference between CGST and SGST?</h3>
      <p>
        CGST is collected by the central government, while SGST is collected by the state government in intra-state transactions.
      </p>

      <h3>How do I remove GST from a price?</h3>
      <p>
        Divide the final price by (1 + GST rate ÷ 100).
      </p>

      <h2>Conclusion</h2>

      <p>
        GST is an essential part of India’s taxation system and understanding it is useful for both academic and practical purposes. Whether you are a student or a professional, knowing how GST works helps you make smarter financial decisions.
      </p>

      <p>
        For quick and accurate results, use our GST Calculator on SmartStudyTools.
      </p>

    </article>

    <hr className="my-8" />

    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">About the Author</h3>
      <p>
        This article was written by the SmartStudyTools editorial team to help students and learners understand important academic and financial concepts in a simple and practical way.
      </p>
      <p className="mt-2">
        Our goal is to provide accurate calculators and easy-to-understand educational guides for Indian students.
      </p>
    </div>
  </div>
);

export default BlogGst;
