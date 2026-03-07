import { Link } from "react-router-dom";

const BlogDiscountCalculator = () => {
  return (
    <div className="section-container max-w-3xl">

      <Link to="/blog" className="text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        Discount Calculator Explained for Students and Shoppers
      </h1>

      <p className="mb-4">
        Discounts are common in shopping, online sales, and retail stores.
        A discount calculator helps you quickly calculate the final price
        after a percentage discount.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        What is a Discount?
      </h2>

      <p className="mb-4">
        A discount is a reduction in the original price of a product or service.
        It is usually given as a percentage. For example, a 20% discount means
        the price is reduced by 20 percent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Discount Formula
      </h2>

      <p className="mb-4">
        The basic formula used to calculate a discount is:
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        Discount Amount = Original Price × Discount Percentage ÷ 100
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        Final Price = Original Price − Discount Amount
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example Calculation
      </h2>

      <p className="mb-4">
        Suppose a product costs ₹1000 and the store offers a 20% discount.
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        Discount = 1000 × 20 ÷ 100 = ₹200
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        Final Price = 1000 − 200 = ₹800
      </p>

      <p className="mb-4">
        So after the discount, the customer pays <strong>₹800</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use Our Discount Calculator
      </h2>

      <p className="mb-4">
        Instead of calculating manually, you can use our free{" "}
        <Link to="/discount-calculator" className="text-primary underline">
          Discount Calculator
        </Link>{" "}
        to instantly calculate discounts for shopping, sales, and offers.
      </p>

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

export default BlogDiscountCalculator;
