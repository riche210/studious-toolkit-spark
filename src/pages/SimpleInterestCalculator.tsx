import { useState } from "react";
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
    setResult(`Simple Interest: <strong>₹${si.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong><br/>Total Amount: <strong>₹${total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong>`);
  };

  return (
    <ToolPage
      title="Simple Interest Calculator"
      description="Calculate simple interest on any principal amount with custom rate and time period."
      seoContent="<p>The Simple Interest Calculator helps students and professionals calculate interest earned or owed on a principal amount using the simple interest formula: SI = (P × R × T) / 100. This is one of the most fundamental financial calculations taught in schools and used in real-world banking and lending scenarios.</p><p>Simple interest is calculated only on the original principal amount, unlike compound interest which also earns interest on accumulated interest. This makes simple interest calculations straightforward and predictable. It's commonly used for short-term loans, fixed deposits, and educational examples in mathematics classes.</p><p>Understanding simple interest is crucial for financial literacy. Students learn this concept early in their mathematics curriculum, and it forms the foundation for more complex financial calculations. Whether you're solving homework problems, planning a fixed deposit, or calculating loan costs, this tool provides instant, accurate results.</p><p>Our calculator accepts the principal amount, annual interest rate, and time period in years. It instantly computes both the simple interest earned and the total amount (principal + interest). The tool is designed with students in mind, featuring a clean interface that makes it easy to input values and understand results.</p>"
      faqs={[
        { q: "What is the formula for simple interest?", a: "Simple Interest = (Principal × Rate × Time) / 100" },
        { q: "What's the difference between simple and compound interest?", a: "Simple interest is calculated only on the principal, while compound interest is calculated on principal plus accumulated interest." },
        { q: "Should I enter rate as a percentage?", a: "Yes, enter the annual interest rate as a percentage (e.g., 8 for 8%)." },
        { q: "What unit is time in?", a: "Time should be entered in years. For months, divide by 12 (e.g., 6 months = 0.5 years)." },
        { q: "Is this useful for bank calculations?", a: "Yes, many banks use simple interest for short-term loans and certain deposit schemes." },
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
    </ToolPage>
  );
};

export default SimpleInterestCalculator;
