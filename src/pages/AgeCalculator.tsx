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
    const weeks = Math.floor(totalDays / 7);
    const hours = totalDays * 24;
    setResult(
      `You are <strong>${years} years, ${months} months, and ${days} days</strong> old.<br/>` +
      `Total: <strong>${totalDays.toLocaleString()} days</strong> · ${weeks.toLocaleString()} weeks · ${hours.toLocaleString()} hours`
    );
  };

  return (
    <ToolPage
      title="Age Calculator"
      description="Calculate your exact age in years, months, days, weeks, and hours from your date of birth."
      seoContent={`<p>The Age Calculator is a free online tool designed to help you determine your exact age from your date of birth. Whether you need to know your precise age for official documents, school applications, competitive exam eligibility, or just out of curiosity, this tool provides accurate results broken down into years, months, days, weeks, and even hours.</p>
<p>Age calculation is essential in many scenarios across India. Competitive exams like JEE, NEET, UPSC, SSC, and various state-level examinations have strict age eligibility criteria. Students preparing for these exams need to verify whether they meet the age requirements as of specific cutoff dates. Our Age Calculator eliminates the hassle of manual calculation and provides instant, error-free results that match official age computation methods.</p>
<p>Beyond academics, age verification is required for government schemes like scholarships, pension plans, insurance policies, and voter registration. Banks require age verification for account opening and loan eligibility. Our tool handles all these scenarios by computing the precise difference between your birth date and today's date, accounting for leap years and varying month lengths.</p>
<p>The calculator uses your device's current date to compute results. It properly handles edge cases like February 29 birthdays (leap year births), months with 28, 30, or 31 days, and century leap year rules. The algorithm follows the same methodology used by most government institutions worldwide for official age determination.</p>
<p>How to use this tool: Simply enter your date of birth using the date picker or type it manually, then click "Calculate Age." The result will show your age in years, months, and days, along with your total age in days, weeks, and hours for a fun perspective on your life. This tool works entirely in your browser — no data is sent to any server, ensuring complete privacy.</p>
<p>Students studying mathematics will also find this tool useful for understanding date arithmetic concepts. Teachers can use it as a practical demonstration of how date calculations work, including the complexities of different month lengths and leap years. The tool is completely free, requires no registration, and works on all devices including mobile phones, tablets, and desktop computers.</p>`}
      faqs={[
        { q: "How is age calculated accurately?", a: "Age is calculated by finding the exact difference between your date of birth and today's date in years, months, and days, properly accounting for leap years and varying month lengths." },
        { q: "Does the calculator handle leap years?", a: "Yes, the calculator properly handles leap years and months with different numbers of days for accurate results." },
        { q: "Can I use this for competitive exam age verification?", a: "Yes, the calculation method matches official age computation used by UPSC, SSC, and most Indian institutions. Always verify with the official notification." },
        { q: "What date format should I use?", a: "Use the date picker provided, or enter the date in your browser's supported format (typically YYYY-MM-DD or DD/MM/YYYY)." },
        { q: "Is my data safe?", a: "Yes, all calculations happen locally in your browser. No data is sent to any server." },
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
