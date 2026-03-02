import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const c = parseFloat(cgpa);
    if (isNaN(c) || c < 0 || c > 10) return;
    const pct = c * 9.5;
    setResult(`A CGPA of <strong>${c}</strong> is approximately <strong>${pct.toFixed(2)}%</strong> (using the standard formula: CGPA × 9.5)`);
  };

  return (
    <ToolPage
      title="CGPA to Percentage Converter"
      description="Convert your CGPA to percentage using the standard conversion formula."
      seoContent="<p>The CGPA to Percentage Converter is a must-have tool for students in India and other countries that use the Cumulative Grade Point Average system. Most universities and institutions use the formula Percentage = CGPA × 9.5, which is recommended by CBSE and many other education boards. This tool instantly converts your CGPA to an equivalent percentage score.</p><p>CGPA (Cumulative Grade Point Average) is a grading system adopted by many educational institutions to evaluate student performance. While CGPA provides a standardized way to measure academic achievement, many employers, higher education institutions, and scholarship programs require percentage scores for eligibility criteria. This makes conversion essential for students.</p><p>The standard conversion formula (CGPA × 9.5) is widely accepted across India, particularly for CBSE board results. However, some universities may use different multipliers. Always check with your specific institution for their official conversion formula. Our tool provides a quick reference using the most commonly accepted method.</p><p>Whether you're applying for higher education, scholarships, or jobs, knowing your percentage equivalent is crucial. This tool saves time and eliminates calculation errors, providing instant results that you can use in your applications and resumes. It works seamlessly on mobile devices, making it convenient for students on the go.</p>"
      faqs={[
        { q: "What formula is used for conversion?", a: "The standard formula is Percentage = CGPA × 9.5, as recommended by CBSE." },
        { q: "Is this formula universally accepted?", a: "While widely used in India, some universities may have different conversion formulas. Check with your institution." },
        { q: "What is the maximum CGPA?", a: "In most Indian systems, the maximum CGPA is 10.0, which converts to 95%." },
        { q: "Can I convert percentage back to CGPA?", a: "Yes, divide your percentage by 9.5 to get the approximate CGPA." },
        { q: "Does this work for all universities?", a: "This uses the standard CBSE formula. Some universities may use different multipliers." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Enter CGPA (0 - 10)</label>
          <input type="number" step="0.01" min="0" max="10" value={cgpa} onChange={e => setCgpa(e.target.value)} placeholder="e.g. 8.5" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Convert to Percentage</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default CgpaToPercentage;
