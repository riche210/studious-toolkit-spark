import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const c = parseFloat(cgpa);
    if (isNaN(c) || c < 0 || c > 10) return;
    const pct = c * 9.5;
    setResult(`A CGPA of <strong>${c}</strong> equals approximately <strong>${pct.toFixed(2)}%</strong><br/><span class="text-sm">Formula: CGPA × 9.5 (CBSE standard)</span>`);
  };

  return (
    <ToolPage
      title="CGPA to Percentage Converter"
      description="Convert your CGPA to percentage using the standard Indian (CBSE) conversion formula."
      seoContent={`<p>The CGPA to Percentage Converter is a must-have tool for Indian students who need to convert their Cumulative Grade Point Average into a percentage score. The CBSE (Central Board of Secondary Education) recommends the formula Percentage = CGPA × 9.5 for converting grades to percentages, and this tool applies that formula instantly.</p>
<p>CGPA is widely used in Indian schools, particularly by CBSE for Class 9 and Class 10 results. While CGPA provides a standardized way to evaluate academic performance on a 10-point scale, many situations require percentage scores instead. College admissions, scholarship applications, job placements, and competitive exam eligibility often specify percentage cutoffs rather than CGPA requirements.</p>
<p>The conversion formula CGPA × 9.5 was derived by CBSE based on statistical analysis of student performance data. It provides a reasonable approximation of the percentage a student would have scored. For example, a CGPA of 9.0 converts to 85.5%, and a perfect CGPA of 10.0 converts to 95%. This formula is specifically calibrated for the CBSE grading system and is widely accepted across India.</p>
<p>However, it's important to note that different universities and institutions may use different conversion formulas. Some universities use CGPA × 10, while others have their own proprietary formulas based on their grading scales. IITs, NITs, and central universities often have specific conversion policies mentioned in their prospectus. Always check with your target institution for their official conversion method.</p>
<p>Students applying for higher education abroad should note that foreign universities may not accept the CBSE conversion formula. Many international institutions prefer to see the original CGPA along with a grading scale explanation rather than a converted percentage. Our tool is primarily designed for domestic Indian purposes where the 9.5 multiplier is the standard.</p>
<p>This converter works entirely in your browser with no data sent to external servers. It's designed for quick lookups — enter your CGPA and get an instant result. Whether you're filling out college application forms, updating your resume, or simply curious about your equivalent percentage, this tool saves time and eliminates calculation errors. It's completely free, works on all devices, and requires no registration or downloads.</p>`}
      faqs={[
        { q: "What formula is used for CGPA to percentage conversion?", a: "The standard CBSE formula is Percentage = CGPA × 9.5. This is the most widely accepted formula in India." },
        { q: "Is the 9.5 multiplier universally accepted?", a: "It's widely accepted for CBSE results. Some universities use different multipliers. Always check with your specific institution." },
        { q: "What is the maximum CGPA on the CBSE scale?", a: "The maximum CGPA is 10.0, which converts to 95% using the standard formula." },
        { q: "Can I convert percentage back to CGPA?", a: "Yes, divide your percentage by 9.5 to get the approximate CGPA. For example, 76% ÷ 9.5 = 8.0 CGPA." },
        { q: "Does this work for university-level CGPA?", a: "Universities may use different scales (4.0, 7.0, or 10.0) with different conversion formulas. This tool uses the CBSE 10-point scale." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Enter CGPA (0 – 10)</label>
          <input type="number" step="0.01" min="0" max="10" value={cgpa} onChange={e => setCgpa(e.target.value)} placeholder="e.g. 8.5" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Convert to Percentage</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
      <div className="mt-10 p-6 bg-muted rounded-lg">
  <h3 className="text-xl font-semibold mb-2">
    Understand CGPA to Percentage Conversion
  </h3>
  <p className="text-sm mb-3">
    Confused about how CGPA converts to percentage using the CBSE formula?
  </p>
  <Link to="/blog/cgpa-vs-percentage-explained" className="text-primary underline">
    Read our complete CGPA vs Percentage guide →
  </Link>
</div>
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">
    Example: CGPA to Percentage
  </h3>

  <p className="text-sm text-muted-foreground mb-2">
    Let’s say your CGPA is <strong>8.2</strong>.
  </p>

  <p className="text-sm text-muted-foreground mb-2">
    Using the CBSE formula:
  </p>

  <p className="text-sm font-medium">
    Percentage = 8.2 × 9.5 = <strong>77.9%</strong>
  </p>

  <p className="text-sm text-muted-foreground mt-2">
    This is how your CGPA is converted into percentage for most Indian academic purposes.
  </p>
</div>
      <div className="mt-6">
  <h3 className="text-lg font-semibold mb-2">
    When do you need CGPA to Percentage?
  </h3>

  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
    <li>College admissions and cut-offs</li>
    <li>Job applications and resumes</li>
    <li>Scholarship eligibility</li>
    <li>Competitive exam forms</li>
  </ul>
</div>
    </ToolPage>
  );
};

export default CgpaToPercentage;
