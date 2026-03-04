import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogEmi = () => {
    <div className="section-container max-w-3xl">
     <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
      <ArrowLeft className="w-4 h-4" /> Back to Blog
    </Link>
    <article className="prose prose-sm max-w-none">
      <h1 className="text-3xl font-bold mb-4">
        How to Calculate EMI Manually (Step-by-Step Guide)
      </h1>

      <p className="mb-4">
        EMI (Equated Monthly Installment) is the fixed monthly amount you pay to a bank or lender to repay a loan. Whether it is a home loan, car loan, or education loan, understanding how EMI is calculated helps you plan your finances better.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">EMI Formula</h2>

      <p className="mb-4">
        The EMI formula is:
      </p>

      <p className="font-mono bg-muted p-3 rounded mb-4">
        EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>P</strong> = Principal loan amount</li>
        <li><strong>r</strong> = Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Loan tenure in months</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example Calculation</h2>

      <p className="mb-4">
        Suppose you take a loan of ₹1,00,000 at 10% annual interest for 2 years (24 months).
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>P = 100000</li>
        <li>Annual Interest = 10%</li>
        <li>Monthly Interest (r) = 10 / 12 / 100 = 0.00833</li>
        <li>n = 24 months</li>
      </ul>

      <p className="mb-4">
        After applying the formula, the EMI comes to approximately ₹4,614 per month.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use EMI Calculator for Quick Results</h2>

      <p className="mb-4">
        Instead of calculating manually every time, you can use our free{" "}
        <Link to="/emi-calculator" className="text-primary underline">
          EMI Calculator
        </Link>{" "}
        to instantly calculate monthly payments for any loan amount and interest rate.
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

export default BlogEmi;
