import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height) / 100;
    if (isNaN(w) || isNaN(h) || h === 0) return;
    const bmi = w / (h * h);
    let category = "", color = "";
    if (bmi < 18.5) { category = "Underweight"; color = "text-yellow-600"; }
    else if (bmi < 25) { category = "Normal weight"; color = "text-green-600"; }
    else if (bmi < 30) { category = "Overweight"; color = "text-orange-600"; }
    else { category = "Obese"; color = "text-red-600"; }
    setResult(`Your BMI is <strong>${bmi.toFixed(1)}</strong> — <strong>${category}</strong>`);
  };

  return (
    <ToolPage
      title="BMI Calculator"
      description="Calculate your Body Mass Index to check if you're in a healthy weight range."
      seoContent={`<p>The BMI (Body Mass Index) Calculator is a widely used health screening tool that helps you assess whether you have a healthy body weight relative to your height. BMI is calculated using the formula: BMI = weight (kg) ÷ height² (m²). This simple calculation produces a numerical value that classifies individuals into categories: underweight (below 18.5), normal weight (18.5–24.9), overweight (25–29.9), and obese (30 and above).</p>
<p>Health organizations worldwide, including the World Health Organization (WHO) and India's ICMR (Indian Council of Medical Research), use BMI as a primary screening tool for weight-related health risks. However, it's important to note that Asian populations, including Indians, tend to have higher body fat percentages at lower BMI values. Some Indian health experts suggest using modified BMI cutoffs: normal weight as 18.5–22.9 and overweight as 23–24.9 for the Indian population.</p>
<p>Students studying biology, physical education, and health sciences frequently encounter BMI calculations in their curriculum. CBSE and ICSE physical education syllabi include BMI as a key concept in fitness assessment. This tool helps students quickly verify their calculations and understand the practical application of the formula they learn in class.</p>
<p>Beyond academics, regular BMI monitoring is valuable for maintaining personal health. India faces a dual burden of malnutrition — with both undernutrition and obesity being significant public health challenges. Understanding your BMI helps you make informed decisions about diet, exercise, and lifestyle. While BMI alone isn't a diagnostic tool, it provides a useful starting point for health awareness.</p>
<p>The calculator accepts weight in kilograms and height in centimeters, which are the standard units used in India. Simply enter your values and get instant results with the corresponding health category. For athletes and individuals with high muscle mass, BMI may overestimate body fat — in such cases, additional assessments like waist circumference and body composition analysis are recommended.</p>
<p>This tool runs entirely in your browser with complete privacy. No health data is collected, stored, or shared. It's free, requires no registration, and works on any device. While useful for general health awareness, always consult a qualified healthcare professional for medical advice, especially if your BMI falls outside the normal range.</p>`}
      faqs={[
        { q: "What is a healthy BMI for Indians?", a: "The standard WHO range is 18.5–24.9. Some Indian health experts recommend 18.5–22.9 as normal for the Indian population due to higher body fat at lower BMIs." },
        { q: "Is BMI accurate for athletes?", a: "BMI may overestimate body fat in muscular individuals since it doesn't distinguish between muscle and fat mass. Athletes should use additional measurements." },
        { q: "What units should I enter?", a: "Enter weight in kilograms (kg) and height in centimeters (cm). For example, 65 kg and 170 cm." },
        { q: "Does BMI apply to children?", a: "BMI interpretation differs for children and teenagers. Age and gender-specific BMI percentile charts should be used for those under 18." },
        { q: "What should I do if my BMI is abnormal?", a: "Consult a healthcare professional who can evaluate your overall health, considering factors beyond BMI like waist circumference, diet, activity level, and family history." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 65" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 170" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate BMI</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
      <div className="mt-10 p-6 bg-muted rounded-lg">
  <h3 className="text-xl font-semibold mb-2">
    Learn How BMI Works
  </h3>
  <p className="text-sm mb-3">
    Want to understand how Body Mass Index is calculated and what the numbers mean?
  </p>
 <Link to="/blog/bmi-formula-explained" className="text-primary underline">
    Read the complete BMI guide →
  </Link>
</div>
    </ToolPage>
  );
};

export default BmiCalculator;
