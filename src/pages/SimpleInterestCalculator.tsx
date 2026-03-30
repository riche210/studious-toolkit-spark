import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(principal), r = parseFloat(rate), t = parseFloat(time);
    if (isNaN(p) || isNaN(r) || isNaN(t)) return;
    const si = (p * r * t) / 100;
    const total = p + si;
    setResult(
      `Simple Interest: <strong>₹${si.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong><br/>` +
      `Total Amount: <strong>₹${total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>`
    );
  };

  return (
    <ToolPage
      title="Simple Interest Calculator"
      description="Calculate simple interest using the formula (P × R × T) ÷ 100. Includes examples and explanation for students."
      seoContent={`<p>The Simple Interest Calculator helps students and individuals calculate the interest earned or payable on a principal amount using the standard simple interest formula: SI = (P × R × T) / 100. This is one of the most fundamental financial calculations taught in Indian schools from Class 7 onwards and is widely used in real-world banking scenarios.</p>
<p>Simple interest differs from compound interest in that it is calculated only on the original principal amount throughout the entire duration. This makes the calculation straightforward and predictable. In India, simple interest is commonly applied to short-term loans, some fixed deposit schemes, and educational loans offered by nationalized banks.</p>
<p>Understanding simple interest is crucial for financial literacy, which is increasingly recognized as an essential life skill in India. The Reserve Bank of India (RBI) promotes financial literacy programs that include understanding interest calculations. Students who master this concept early can make better financial decisions regarding savings, investments, and borrowing throughout their lives.</p>
<p>This calculator is particularly useful for students preparing for competitive exams. Simple interest problems frequently appear in quantitative aptitude sections of SSC CGL, SSC CHSL, Banking exams (IBPS PO, SBI PO, RBI Grade B), CAT, and various state-level competitive examinations. Practicing with this tool helps students verify their manual calculations and understand the relationship between principal, rate, time, and interest.</p>
<p>For practical applications, consider education loans. Many Indian banks offer education loans at simple interest rates for the moratorium period (while the student is studying). Understanding how much interest accumulates during this period helps families plan their finances. Similarly, senior citizens often prefer simple interest fixed deposits for predictable returns.</p>
<p>Our calculator accepts the principal amount in rupees, the annual interest rate as a percentage, and the time period in years. For calculations involving months, simply convert to years (e.g., 6 months = 0.5 years, 18 months = 1.5 years). The tool instantly computes the simple interest and total amount, formatted in the Indian numbering system for easy reading. All calculations are performed in your browser — completely free, private, and available on any device.</p>`}
      faqs={[
        { q: "What is the simple interest formula?", a: "Simple Interest (SI) = (Principal × Rate × Time) / 100. The total amount is Principal + SI." },
        { q: "How is simple interest different from compound interest?", a: "Simple interest is calculated only on the original principal. Compound interest is calculated on principal plus accumulated interest, resulting in higher returns over time." },
        { q: "Should I enter the rate as a percentage?", a: "Yes, enter the annual interest rate as a percentage. For example, enter 8 for 8% per annum." },
        { q: "How do I enter time in months instead of years?", a: "Convert months to years by dividing by 12. For example, 6 months = 0.5 years, 18 months = 1.5 years." },
        { q: "Which Indian banks use simple interest?", a: "Many banks use simple interest for certain schemes like short-term loans and education loan moratorium periods. Most savings accounts and FDs use compound interest." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Principal Amount (₹)</label>
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 10000" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Rate of Interest (% per year)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 8" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Time (years)</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g. 2" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate Interest</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
      <div className="mt-10 p-6 bg-muted rounded-lg">
  <h3 className="text-xl font-semibold mb-2">
    Learn the Simple Interest Formula
  </h3>
  <p className="text-sm mb-3">
    Want to understand how the simple interest formula works with examples and explanations?
  </p>
  <Link to="/blog/simple-interest-formula-guide" className="text-primary underline">
    Read the complete Simple Interest guide →
  </Link>
</div>
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Example Calculation</h3>

  <p className="text-sm text-muted-foreground mb-2">
    Suppose you invest <strong>₹5,000</strong> at an interest rate of <strong>10%</strong> for <strong>2 years</strong>.
  </p>

  <p className="text-sm font-medium">
    SI = (5000 × 10 × 2) ÷ 100 = <strong>₹1,000</strong>
  </p>

  <p className="text-sm mt-2">
    Total Amount = ₹5,000 + ₹1,000 = <strong>₹6,000</strong>
  </p>
</div>
      <div className="mt-6">
  <h3 className="text-lg font-semibold mb-2">Where is Simple Interest Used?</h3>

  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
    <li>School and board exam problems</li>
    <li>Short-term loans</li>
    <li>Basic banking calculations</li>
    <li>Financial planning and savings</li>
  </ul>
</div>
    </ToolPage>
  );
};

export default SimpleInterestCalculator;
