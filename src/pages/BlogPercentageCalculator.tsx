import { Link } from "react-router-dom";

const BlogPercentageCalculator = () => {
  return (
    <div className="section-container max-w-3xl">
      
      <Link to="/blog" className="text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        Percentage Calculator Explained for Students
      </h1>

      <p className="mb-4">
        Percentages are used everywhere in academics, finance, and everyday life.
        A percentage calculator helps you quickly calculate percentages without
        doing manual calculations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        What is a Percentage?
      </h2>

      <p className="mb-4">
        A percentage means a number out of 100. It is written using the % symbol.
        For example, 50% means 50 out of 100.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Percentage Formula
      </h2>

      <p className="mb-4">
        The basic formula for calculating percentage is:
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        Percentage = (Part / Total) × 100
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example Calculation
      </h2>

      <p className="mb-4">
        Suppose a student scores 45 marks out of 60 in a test.
      </p>

      <p className="bg-gray-100 p-4 rounded mb-4">
        (45 / 60) × 100 = 75%
      </p>

      <p className="mb-4">
        So the student scored <strong>75%</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use Our Percentage Calculator
      </h2>

      <p className="mb-4">
        Instead of calculating manually, you can use our free{" "}
        <Link to="/percentage-calculator" className="text-primary underline">
          Percentage Calculator
        </Link>{" "}
        to instantly calculate percentages for marks, discounts, or financial values.
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

export default BlogPercentageCalculator;
