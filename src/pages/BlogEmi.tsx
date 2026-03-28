import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogEmi = () => {
  return (
    <div className="section-container max-w-3xl">

      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <article className="prose prose-sm max-w-none">
        <h1>How to Calculate EMI Manually (Complete Guide with Examples)</h1>

        <p>
          EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan. It is commonly used in home loans, car loans, personal loans, and education loans.
        </p>

        <p>
          Understanding EMI is important because it helps you plan your finances and avoid taking loans that are difficult to repay.
        </p>

        <h2>What is EMI?</h2>

        <p>
          EMI is a combination of both principal and interest. Every month, a part of your payment goes towards repaying the loan amount, and the rest goes towards interest.
        </p>

        <h2>EMI Formula</h2>

        <p>The standard EMI formula is:</p>

        <p className="font-mono bg-muted p-3 rounded mb-4">
          EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
        </p>

        <ul>
          <li><strong>P</strong> = Principal loan amount</li>
          <li><strong>r</strong> = Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
          <li><strong>n</strong> = Loan tenure in months</li>
        </ul>

        <h2>Example Calculation</h2>

        <p>Let’s understand with an example:</p>

        <ul>
          <li>Loan Amount (P) = ₹1,00,000</li>
          <li>Interest Rate = 10% per year</li>
          <li>Monthly Rate (r) = 0.00833</li>
          <li>Time (n) = 24 months</li>
        </ul>

        <p>
          After applying the formula, the EMI comes to approximately <strong>₹4,614 per month</strong>.
        </p>

        <h2>Why EMI is Important</h2>

        <ul>
          <li>Helps you plan monthly expenses</li>
          <li>Allows comparison between different loan offers</li>
          <li>Prevents over-borrowing</li>
          <li>Helps in long-term financial planning</li>
        </ul>

        <h2>Real-Life Uses of EMI</h2>

        <ul>
          <li>Home loans</li>
          <li>Car and bike loans</li>
          <li>Mobile and electronics financing</li>
          <li>Education loans</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>

        <ul>
          <li>Not converting annual interest to monthly rate</li>
          <li>Ignoring loan tenure impact</li>
          <li>Choosing longer tenure without checking total interest</li>
          <li>Not comparing EMI across lenders</li>
        </ul>

        <h2>Use Our Free EMI Calculator</h2>

        <p>
          Instead of calculating manually, you can use our free{" "}
          <Link to="/emi-calculator" className="text-primary underline">
            EMI Calculator
          </Link>{" "}
          to instantly calculate your monthly payments.
        </p>

        <h2>Related Tools</h2>

        <ul>
          <li>
            <Link to="/simple-interest-calculator" className="text-primary underline">
              Simple Interest Calculator
            </Link>
          </li>
          <li>
            <Link to="/gst-calculator" className="text-primary underline">
              GST Calculator
            </Link>
          </li>
          <li>
            <Link to="/percentage-calculator" className="text-primary underline">
              Percentage Calculator
            </Link>
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What is EMI?</h3>
        <p>
          EMI is the fixed monthly amount paid to repay a loan over a specific period.
        </p>

        <h3>What factors affect EMI?</h3>
        <p>
          EMI depends on loan amount, interest rate, and loan tenure.
        </p>

        <h3>Can I reduce my EMI?</h3>
        <p>
          Yes, by increasing tenure or choosing a lower interest rate.
        </p>

        <h2>Conclusion</h2>

        <p>
          EMI is a key concept in personal finance. Understanding how it works helps you choose the right loan and manage your finances better.
        </p>

        <p>
          For quick and accurate calculations, use the EMI Calculator on SmartStudyTools.
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
};

export default BlogEmi;
