import { Link } from "react-router-dom";

const BlogBmi = () => {
  return (
    <div className="section-container max-w-3xl">
      
      <Link to="/blog" className="text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        BMI Formula Explained for Students
      </h1>

      <p className="mb-4">
        BMI (Body Mass Index) is a simple formula used to estimate whether a
        person's weight is healthy for their height. It is widely used by
        doctors, schools, and health organizations to evaluate body weight.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">BMI Formula</h2>

      <p className="mb-4">
        The BMI formula is:
      </p>

      <p className="font-mono bg-muted p-3 rounded mb-4">
        BMI = Weight (kg) ÷ Height² (m²)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example Calculation</h2>

      <p className="mb-4">
        Suppose a student weighs <strong>60 kg</strong> and their height is
        <strong> 1.7 meters</strong>.
      </p>

      <p className="mb-4">
        BMI = 60 ÷ (1.7 × 1.7)
      </p>

      <p className="mb-4">
        BMI = 60 ÷ 2.89 ≈ <strong>20.76</strong>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">BMI Categories</h2>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Below 18.5 – Underweight</li>
        <li>18.5 – 24.9 – Normal weight</li>
        <li>25 – 29.9 – Overweight</li>
        <li>30 and above – Obese</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use BMI Calculator for Instant Results
      </h2>

      <p className="mb-4">
        Instead of calculating manually, you can use our free{" "}
        <Link to="/bmi-calculator" className="text-primary underline">
          BMI Calculator
        </Link>{" "}
        to instantly check your BMI and understand your weight category.
      </p>

      <hr className="my-8" />

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">About the Author</h3>
        <p>
          This article was written by the SmartStudyTools editorial team to
          help students understand important academic and health concepts in a
          simple and practical way.
        </p>
      </div>

    </div>
  );
};

export default BlogBmi;
