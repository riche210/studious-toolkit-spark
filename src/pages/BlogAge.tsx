import { Link } from "react-router-dom";

const BlogAge = () => {
  return (
    <div className="section-container max-w-3xl">

      <Link to="/blog" className="text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        How to Calculate Age from Date of Birth
      </h1>

      <p className="mb-4">
        Calculating age from a date of birth is a common task in school forms,
        government applications, and job registrations. While the basic idea is
        simple, doing it manually can sometimes cause mistakes when months and
        days are involved.
      </p>

      <p className="mb-4">
        In this guide, we will explain how age calculation works and how you can
        easily determine someone's age in years, months, and days.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Basic Age Calculation Formula
      </h2>

      <p className="mb-4">
        The basic concept is:
      </p>

      <p className="font-mono bg-muted p-3 rounded mb-4">
        Age = Current Date − Date of Birth
      </p>

      <p className="mb-4">
        However, since months have different numbers of days, proper age
        calculation needs to account for months and leap years.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example
      </h2>

      <p className="mb-4">
        Suppose someone was born on:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Date of Birth: 15 March 2005</li>
        <li>Current Date: 10 October 2025</li>
      </ul>

      <p className="mb-4">
        The calculated age would be approximately:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>20 years</li>
        <li>6 months</li>
        <li>25 days</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use Our Age Calculator
      </h2>

      <p className="mb-4">
        Instead of calculating manually, you can use our free{" "}
        <Link to="/age-calculator" className="text-primary underline">
          Age Calculator
        </Link>{" "}
        to instantly calculate exact age from any date of birth.
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

export default BlogAge;
