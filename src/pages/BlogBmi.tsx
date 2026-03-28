import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogBmi = () => {
  return (
    <div className="section-container max-w-3xl">

      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <article className="prose prose-sm max-w-none">
        <h1>BMI Formula Explained (Complete Guide for Students)</h1>

        <p>
          BMI (Body Mass Index) is a simple calculation used to check whether your body weight is healthy for your height. It is widely used by doctors, schools, and health organizations as a basic health indicator.
        </p>

        <p>
          While BMI does not measure body fat directly, it gives a quick idea about whether a person is underweight, normal, overweight, or obese.
        </p>

        <h2>What is BMI?</h2>

        <p>
          BMI is a numerical value calculated using your weight and height. It helps categorize individuals into different weight ranges based on international health standards.
        </p>

        <h2>BMI Formula</h2>

        <p>The formula for BMI is:</p>

        <p className="font-mono bg-muted p-3 rounded mb-4">
          BMI = Weight (kg) ÷ Height² (m²)
        </p>

        <h2>Example Calculation</h2>

        <p>Let’s understand with an example:</p>

        <ul>
          <li>Weight = 60 kg</li>
          <li>Height = 1.7 m</li>
        </ul>

        <p>
          BMI = 60 ÷ (1.7 × 1.7)  
          BMI = 60 ÷ 2.89 ≈ <strong>20.76</strong>
        </p>

        <h2>BMI Categories</h2>

        <ul>
          <li>Below 18.5 – Underweight</li>
          <li>18.5 – 24.9 – Normal weight</li>
          <li>25 – 29.9 – Overweight</li>
          <li>30 and above – Obese</li>
        </ul>

        <h2>Important Note for Indian Population</h2>

        <p>
          For Indian and Asian populations, health risks can start at lower BMI levels. Some experts suggest:
        </p>

        <ul>
          <li>18.5 – 22.9 → Normal</li>
          <li>23 – 24.9 → Overweight (risk begins)</li>
        </ul>

        <h2>Why BMI is Important</h2>

        <ul>
          <li>Helps identify unhealthy weight</li>
          <li>Useful for school health assessments</li>
          <li>Important in fitness and sports</li>
          <li>Used in medical screening</li>
        </ul>

        <h2>Limitations of BMI</h2>

        <ul>
          <li>Does not distinguish between fat and muscle</li>
          <li>May be inaccurate for athletes</li>
          <li>Does not measure body fat distribution</li>
        </ul>

        <h2>Use Our Free BMI Calculator</h2>

        <p>
          Instead of calculating manually, use our free{" "}
          <Link to="/bmi-calculator" className="text-primary underline">
            BMI Calculator
          </Link>{" "}
          to instantly check your BMI and health category.
        </p>

        <h2>Related Tools</h2>

        <ul>
          <li>
            <Link to="/age-calculator" className="text-primary underline">
              Age Calculator
            </Link>
          </li>
          <li>
            <Link to="/percentage-calculator" className="text-primary underline">
              Percentage Calculator
            </Link>
          </li>
          <li>
            <Link to="/word-counter" className="text-primary underline">
              Word Counter Tool
            </Link>
          </li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>What is a healthy BMI?</h3>
        <p>
          A BMI between 18.5 and 24.9 is generally considered healthy.
        </p>

        <h3>Is BMI accurate?</h3>
        <p>
          BMI is a useful screening tool, but it may not be accurate for athletes or muscular individuals.
        </p>

        <h3>Can BMI be used for children?</h3>
        <p>
          For children, BMI is interpreted differently using age-based charts.
        </p>

        <h2>Conclusion</h2>

        <p>
          BMI is a simple and effective way to understand your weight category. While it has limitations, it is a useful starting point for maintaining a healthy lifestyle.
        </p>

        <p>
          For quick and accurate results, use the BMI Calculator on SmartStudyTools.
        </p>

      </article>

      <hr className="my-8" />

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">About the Author</h3>
        <p>
          This article was written by the SmartStudyTools editorial team to help students and learners understand important academic and health concepts in a simple and practical way.
        </p>
        <p className="mt-2">
          Our goal is to provide accurate calculators and easy-to-understand educational guides for Indian students.
        </p>
      </div>

    </div>
  );
};

export default BlogBmi;
