import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const v = parseFloat(value);
    const t = parseFloat(total);
    if (isNaN(v) || isNaN(t) || t === 0) return;
    const pct = (v / t) * 100;
    setResult(`<strong>${v}</strong> is <strong>${pct.toFixed(2)}%</strong> of <strong>${t}</strong>`);
  };

  return (
    <ToolPage
      title="Percentage Calculator"
      description="Calculate what percentage one number is of another quickly and easily."
      seoContent="<p>The Percentage Calculator is an essential tool for students, professionals, and everyday calculations. Whether you're calculating exam scores, discount percentages, profit margins, or statistical data, this tool provides instant and accurate results. Simply enter the part value and the total value to find the percentage.</p><p>Understanding percentages is fundamental in mathematics and everyday life. From calculating your marks in an exam to understanding tax rates, interest rates, and sales discounts, percentages are everywhere. Our tool simplifies this process, eliminating the need for manual calculations or complex formulas.</p><p>Students often need to calculate their percentage in exams to understand their performance. This tool is perfect for quickly converting raw marks into percentages across any grading system. It's also useful for teachers who need to grade papers and calculate class averages efficiently.</p><p>In business, percentages are used to calculate profit margins, growth rates, market share, and commission. Our Percentage Calculator handles all these scenarios with ease. The tool works on all modern browsers and devices, ensuring you can access it whenever you need quick percentage calculations.</p>"
      faqs={[
        { q: "How do I calculate percentage?", a: "Divide the part value by the total value and multiply by 100. Our tool does this automatically for you." },
        { q: "Can I calculate percentage increase?", a: "Yes, enter the increase amount as the value and the original amount as the total." },
        { q: "What if the total is zero?", a: "Division by zero is undefined, so the total must be a non-zero number." },
        { q: "Is this accurate for exam scores?", a: "Yes, this provides the same calculation used in academic grading systems." },
        { q: "Can I use decimals?", a: "Yes, both fields accept decimal numbers for precise calculations." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Value (Part)</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 45" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Total</label>
          <input type="number" value={total} onChange={e => setTotal(e.target.value)} placeholder="e.g. 200" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate Percentage</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default PercentageCalculator;
