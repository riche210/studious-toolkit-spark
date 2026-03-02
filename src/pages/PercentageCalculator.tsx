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
      description="Calculate what percentage one number is of another quickly and accurately."
      seoContent={`<p>The Percentage Calculator is one of the most essential mathematical tools for students, teachers, and professionals. It helps you instantly determine what percentage one number represents of another. Whether you're calculating your exam score as a percentage, determining profit margins, or working out tax percentages, this tool provides accurate results in seconds.</p>
<p>In the Indian education system, percentage calculation is fundamental. CBSE, ICSE, and state board results are often expressed in percentages. Students need to convert their raw marks into percentages for college admissions, scholarship applications, and placement interviews. Our tool simplifies this by letting you enter the marks obtained and total marks to get an instant percentage.</p>
<p>The formula used is straightforward: Percentage = (Value / Total) × 100. While simple in theory, manual calculation can lead to errors, especially when dealing with decimals or large numbers. This tool eliminates those errors and provides results to two decimal places for precision. It accepts decimal inputs, making it suitable for complex calculations in statistics, science, and commerce.</p>
<p>Beyond academics, percentage calculations are everywhere in daily life. Shopping discounts, GST calculations, salary increments, investment returns, and loan interest rates all involve percentages. Understanding how to work with percentages is a critical life skill, and this tool helps both learning and practical application.</p>
<p>For commerce students studying profit and loss, this calculator is invaluable. You can quickly determine profit percentage, loss percentage, markup percentage, and margin on any transaction. Economics students can use it for calculating growth rates, inflation rates, and other statistical measures that form the backbone of economic analysis.</p>
<p>The tool is designed with a clean, distraction-free interface that works equally well on mobile phones and desktop computers. All calculations happen locally in your browser, ensuring your data stays private. There's no limit on usage — calculate as many percentages as you need, completely free of charge. Whether you're a Class 6 student learning percentages for the first time or a graduate student analyzing research data, this tool is built for you.</p>`}
      faqs={[
        { q: "How do I calculate percentage of marks?", a: "Divide the marks obtained by total marks and multiply by 100. For example, 85 out of 100 = (85/100) × 100 = 85%." },
        { q: "Can I calculate percentage increase or decrease?", a: "Yes, enter the increase/decrease amount as the value and the original number as the total to find the percentage change." },
        { q: "What if I enter zero as the total?", a: "Division by zero is undefined. The calculator requires a non-zero total to produce meaningful results." },
        { q: "Is this accurate enough for board exam results?", a: "Yes, this uses the same formula used in academic grading. Results are accurate to two decimal places." },
        { q: "Can I use decimal numbers?", a: "Yes, both fields accept decimal numbers for precise calculations in scientific and statistical contexts." },
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
