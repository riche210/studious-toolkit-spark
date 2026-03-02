import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    setResult(`You are <strong>${years} years, ${months} months, and ${days} days</strong> old. That's <strong>${totalDays.toLocaleString()} days</strong> in total!`);
  };

  return (
    <ToolPage
      title="Age Calculator"
      description="Calculate your exact age in years, months, and days from your date of birth."
      seoContent="<p>The Age Calculator is a free online tool that helps you determine your exact age from your date of birth. Whether you need to know your precise age for official documents, school applications, or just out of curiosity, this tool provides accurate results in years, months, and days. It also calculates your total age in days, giving you a fun perspective on how long you've been alive.</p><p>Age calculation is essential in many scenarios — from determining eligibility for exams, scholarships, and government schemes to understanding insurance premiums and retirement planning. Our tool handles leap years and varying month lengths accurately, ensuring you get the most precise result every time. Simply enter your date of birth and click calculate to see your age instantly.</p><p>Students frequently need to verify their age for competitive exams like JEE, NEET, UPSC, and various state-level examinations that have strict age criteria. This tool eliminates the hassle of manual calculation and provides instant, error-free results. It works on all devices including mobile phones, tablets, and desktops, making it accessible anywhere, anytime.</p><p>Our Age Calculator uses your device's current date to compute the difference between your birth date and today. The calculation accounts for the varying number of days in each month and leap years, providing results that match official age computation methods used by most institutions worldwide.</p>"
      faqs={[
        { q: "How is age calculated?", a: "Age is calculated by finding the difference between your date of birth and today's date in years, months, and days, accounting for leap years and varying month lengths." },
        { q: "Does it consider leap years?", a: "Yes, the calculator properly handles leap years and months with different numbers of days." },
        { q: "Can I use this for official purposes?", a: "This tool provides accurate calculations, but always verify with official sources for legal purposes." },
        { q: "What date format should I use?", a: "Use the date picker or enter the date in your browser's supported format (typically YYYY-MM-DD)." },
        { q: "Is this tool free to use?", a: "Yes, this Age Calculator is completely free with no limitations." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Date of Birth</label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate Age</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default AgeCalculator;
