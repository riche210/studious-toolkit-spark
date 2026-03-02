import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height) / 100;
    if (isNaN(w) || isNaN(h) || h === 0) return;
    const bmi = w / (h * h);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    setResult(`Your BMI is <strong>${bmi.toFixed(1)}</strong> — <strong>${category}</strong>`);
  };

  return (
    <ToolPage
      title="BMI Calculator"
      description="Calculate your Body Mass Index to check if you're in a healthy weight range."
      seoContent="<p>The BMI (Body Mass Index) Calculator is a widely used tool to assess whether a person has a healthy body weight relative to their height. BMI is calculated using the formula: BMI = weight (kg) / height² (m²). It provides a simple numerical value that categorizes individuals as underweight, normal weight, overweight, or obese.</p><p>Health professionals worldwide use BMI as a screening tool to identify potential weight-related health issues. While BMI doesn't directly measure body fat, it provides a useful general indicator of health risk. Students studying biology, health sciences, and physical education frequently use BMI calculations in their coursework and practical assessments.</p><p>Understanding your BMI helps you make informed decisions about your diet, exercise, and overall lifestyle. A BMI between 18.5 and 24.9 is generally considered healthy for adults. However, it's important to note that BMI is just one indicator of health and doesn't account for factors like muscle mass, bone density, age, and gender distribution of fat.</p><p>Our BMI Calculator accepts weight in kilograms and height in centimeters, making it easy for users in countries that use the metric system. The tool instantly calculates your BMI and provides the corresponding health category. Regular BMI monitoring can help track weight management progress and motivate healthier lifestyle choices.</p>"
      faqs={[
        { q: "What is a normal BMI?", a: "A BMI between 18.5 and 24.9 is considered normal/healthy weight for adults." },
        { q: "Is BMI accurate for athletes?", a: "BMI may overestimate body fat in athletes with high muscle mass. It's a screening tool, not a diagnostic one." },
        { q: "What units should I use?", a: "Enter weight in kilograms (kg) and height in centimeters (cm)." },
        { q: "Does BMI apply to children?", a: "BMI interpretation differs for children and teens. This calculator is designed for adults." },
        { q: "What should I do if my BMI is abnormal?", a: "Consult a healthcare professional for personalized advice based on your overall health profile." },
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
    </ToolPage>
  );
};

export default BmiCalculator;
