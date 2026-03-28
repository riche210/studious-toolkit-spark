import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogSimpleInterest = () => (
  <div className="section-container max-w-3xl">
    <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>

    <article className="prose prose-sm max-w-none">
      <h1>Simple Interest Formula Explained (With Examples & Real-Life Uses)</h1>

      <p>
        Simple Interest is one of the most important concepts in basic mathematics and finance. It is widely used in school exams, competitive tests, and even real-life financial calculations.
      </p>

      <p>
        In this guide, you will learn what simple interest is, the formula, how to calculate it step by step, and practical examples to make the concept easy to understand.
      </p>

      <h2>What is Simple Interest?</h2>

      <p>
        Simple Interest (SI) is the interest calculated only on the original principal amount for a fixed period of time.
      </p>

      <p>
        Unlike compound interest, simple interest does not include interest on previously earned interest. This makes it easier to calculate and understand.
      </p>

      <h2>Simple Interest Formula</h2>

      <p>The standard formula is:</p>

      <p><strong>SI = (P × R × T) ÷ 100</strong></p>

      <p>Where:</p>

      <ul>
        <li><strong>P</strong> = Principal amount</li>
        <li><strong>R</strong> = Rate of interest (per year)</li>
        <li><strong>T</strong> = Time (in years)</li>
      </ul>

      <h2>Example 1: Basic Calculation</h2>

      <p>Let’s take a simple example:</p>

      <ul>
        <li>Principal = ₹5,000</li>
        <li>Rate = 10% per year</li>
        <li>Time = 2 years</li>
      </ul>

      <p>
        SI = (5000 × 10 × 2) ÷ 100 = ₹1,000
      </p>

      <p>
        Total Amount = Principal + Interest = ₹6,000
      </p>

      <h2>Example 2: Finding the Principal</h2>

      <p>
        Sometimes you are given interest and need to find the principal.
      </p>

      <ul>
        <li>Simple Interest = ₹600</li>
        <li>Rate = 5%</li>
        <li>Time = 3 years</li>
      </ul>

      <p>
        P = (SI × 100) ÷ (R × T)
      </p>

      <p>
        P = (600 × 100) ÷ (5 × 3) = ₹4,000
      </p>

      <h2>Real-Life Uses of Simple Interest</h2>

      <ul>
        <li>Personal loans</li>
        <li>Short-term bank deposits</li>
        <li>Borrowing money from friends or family</li>
        <li>School and exam problems</li>
      </ul>

      <p>
        Understanding simple interest helps you calculate how much extra money you need to pay or earn over time.
      </p>

      <h2>Difference Between Simple and Compound Interest</h2>

      <ul>
        <li>Simple Interest is calculated only on the principal</li>
        <li>Compound Interest is calculated on principal + accumulated interest</li>
        <li>Simple Interest is easier and faster to calculate</li>
      </ul>

      <h2>Common Mistakes Students Make</h2>

      <ul>
        <li>Forgetting to divide by 100</li>
        <li>Using months instead of years (always convert months to years)</li>
        <li>Confusing simple interest with compound interest</li>
        <li>Using incorrect values for rate or time</li>
      </ul>

      <h2>Use Our Free Simple Interest Calculator</h2>

      <p>
        Instead of calculating manually, you can use our free{" "}
        <Link to="/simple-interest-calculator" className="text-primary underline">
          Simple Interest Calculator
        </Link>{" "}
        to instantly calculate interest and total amount.
      </p>

      <h2>Related Tools</h2>

      <ul>
        <li>
          <Link to="/emi-calculator" className="text-primary underline">
            EMI Calculator
          </Link>
        </li>
        <li>
          <Link to="/percentage-calculator" className="text-primary underline">
            Percentage Calculator
          </Link>
        </li>
        <li>
          <Link to="/gst-calculator" className="text-primary underline">
            GST Calculator
          </Link>
        </li>
      </ul>

      <h2>Frequently Asked Questions (FAQ)</h2>

      <h3>What is the formula of Simple Interest?</h3>
      <p>
        SI = (P × R × T) ÷ 100
      </p>

      <h3>Can time be in months?</h3>
      <p>
        Yes, but you must convert months into years by dividing by 12.
      </p>

      <h3>Is simple interest used in banks?</h3>
      <p>
        Yes, it is commonly used in short-term loans and basic financial calculations.
      </p>

      <h2>Conclusion</h2>

      <p>
        Simple Interest is a fundamental concept that every student should understand. It is not only useful for exams but also for real-life financial decisions.
      </p>

      <p>
        For fast and accurate calculations, use the Simple Interest Calculator on SmartStudyTools.
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

export default BlogSimpleInterest;
