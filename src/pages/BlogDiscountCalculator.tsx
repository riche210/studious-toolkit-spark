import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogDiscountCalculator = () => {
  return (
    <div className="section-container max-w-3xl">

      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <article className="prose prose-sm max-w-none">

        <h1>Discount Calculator Explained (How to Calculate Discounts Easily)</h1>

        <p>
          Discounts are widely used in shopping, online sales, and retail stores. Understanding how discounts work helps you know how much money you are saving and the final amount you need to pay.
        </p>

        <p>
          In this guide, you will learn the discount formula, step-by-step calculations, and real-life examples.
        </p>

        <h2>What is a Discount?</h2>

        <p>
          A discount is a reduction in the original price of a product or service. It is usually expressed as a percentage.
        </p>

        <p>
          For example, a 20% discount means you save ₹20 on every ₹100.
        </p>

        <h2>Discount Formula</h2>

        <p>The basic formulas are:</p>

        <p className="font-mono bg-muted p-3 rounded mb-4">
          Discount = (Original Price × Discount %) ÷ 100
        </p>

        <p className="font-mono bg-muted p-3 rounded mb-4">
          Final Price = Original Price − Discount
        </p>

        <h2>Example Calculation</h2>

        <p>
          Suppose a product costs ₹1,000 and has a 20% discount.
        </p>

        <p>
          Discount = (1000 × 20) ÷ 100 = ₹200
        </p>

        <p>
          Final Price = 1000 − 200 = <strong>₹800</strong>
        </p>

        <h2>Where Discounts Are Used</h2>

        <ul>
          <li>Online shopping sales</li>
          <li>Festive offers and coupons</li>
          <li>Retail store promotions</li>
          <li>Clearance sales</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>

        <ul>
          <li>Not subtracting discount from original price</li>
          <li>Applying percentage incorrectly</li>
          <li>Confusing discount with profit</li>
        </ul>

        <h2>Use Our Free Discount Calculator</h2>

        <p>
          Instead of calculating manually, you can use our free{" "}
          <Link to="/discount-calculator" className="text-primary underline">
            Discount Calculator
          </Link>{" "}
          to instantly calculate final price and savings.
        </p>

        <h2>Related Tools</h2>

        <ul>
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
          <li>
            <Link to="/simple-interest-calculator" className="text-primary underline">
              Simple Interest Calculator
            </Link>
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>How do I calculate a discount?</h3>
        <p>
          Multiply the original price by the discount percentage and divide by 100, then subtract from the original price.
        </p>

        <h3>What is the final price after discount?</h3>
        <p>
          Final Price = Original Price − Discount Amount.
        </p>

        <h3>Why are discounts important?</h3>
        <p>
          Discounts help customers save money and encourage more purchases.
        </p>

        <h2>Conclusion</h2>

        <p>
          Understanding discounts helps you make better financial decisions while shopping and avoid confusion during sales.
        </p>

        <p>
          For fast and accurate results, use the Discount Calculator on SmartStudyTools.
        </p>

      </article>

      <hr className="my-8" />

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">About the Author</h3>
        <p>
          This article was written by the SmartStudyTools editorial team to help students and learners understand practical and financial concepts in a simple and easy way.
        </p>
        <p className="mt-2">
          Our goal is to provide accurate calculators and easy-to-understand educational guides for Indian students.
        </p>
      </div>

    </div>
  );
};

export default BlogDiscountCalculator;
