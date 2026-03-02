import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const DateDifferenceCalculator = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!date1 || !date2) return;
    const d1 = new Date(date1), d2 = new Date(date2);
    const diffMs = Math.abs(d2.getTime() - d1.getTime());
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(totalDays / 365.25);
    const months = Math.floor((totalDays % 365.25) / 30.44);
    const days = Math.floor(totalDays - years * 365.25 - months * 30.44);
    const weeks = Math.floor(totalDays / 7);
    setResult(
      `Difference: <strong>${years} years, ${months} months, ${days} days</strong><br/>` +
      `Total: <strong>${totalDays.toLocaleString()} days</strong> (${weeks.toLocaleString()} weeks)`
    );
  };

  return (
    <ToolPage
      title="Date Difference Calculator"
      description="Find the exact difference between two dates in years, months, days, and weeks."
      seoContent="<p>The Date Difference Calculator helps you find the exact duration between any two dates. Whether you need to calculate the number of days until an exam, the duration of a project, the gap between two events, or simply how many days are left until a special occasion, this tool provides comprehensive results instantly.</p><p>Date calculations are surprisingly complex due to varying month lengths, leap years, and calendar irregularities. Our calculator handles all these nuances automatically, providing accurate results in multiple formats — years, months, days, total days, and weeks. This makes it useful for a wide range of applications from academic planning to project management.</p><p>Students frequently need date calculations for assignment deadlines, exam preparation schedules, and project timelines. By knowing the exact number of days available, students can create effective study plans and manage their time more efficiently. Teachers can also use this tool for academic calendar planning and scheduling assessments.</p><p>Beyond academics, date difference calculations are useful in many professional scenarios. HR departments calculate employee tenure, legal professionals determine statute of limitations periods, and event planners count days to upcoming events. The tool's simplicity and accuracy make it a versatile utility for anyone who works with dates regularly.</p>"
      faqs={[
        { q: "Does it handle leap years?", a: "Yes, the calculator accounts for leap years in its calculations." },
        { q: "Which date should be first?", a: "The order doesn't matter — the calculator uses the absolute difference between the two dates." },
        { q: "How accurate are the year/month breakdowns?", a: "The breakdown uses average month (30.44 days) and year (365.25 days) lengths for approximate breakdowns. Total days is exact." },
        { q: "Can I calculate future dates?", a: "Yes, you can use any combination of past, present, and future dates." },
        { q: "What date format should I use?", a: "Use the date picker or your browser's default date format (typically YYYY-MM-DD)." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Start Date</label>
          <input type="date" value={date1} onChange={e => setDate1(e.target.value)} className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">End Date</label>
          <input type="date" value={date2} onChange={e => setDate2(e.target.value)} className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate Difference</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default DateDifferenceCalculator;
