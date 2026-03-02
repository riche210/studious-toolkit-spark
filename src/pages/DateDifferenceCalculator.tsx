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
    const hours = totalDays * 24;
    setResult(
      `Difference: <strong>${years} years, ${months} months, ${days} days</strong><br/>` +
      `Total: <strong>${totalDays.toLocaleString()} days</strong> · ${weeks.toLocaleString()} weeks · ${hours.toLocaleString()} hours`
    );
  };

  return (
    <ToolPage
      title="Date Difference Calculator"
      description="Find the exact difference between two dates in years, months, days, weeks, and hours."
      seoContent={`<p>The Date Difference Calculator helps you find the precise duration between any two dates. Whether you need to count the days until your next exam, calculate the length of a semester, determine the gap between two historical events, or simply know how many days are left until a special occasion, this tool provides comprehensive results in multiple time formats.</p>
<p>Date arithmetic is deceptively complex. Months have varying lengths (28, 29, 30, or 31 days), leap years add an extra day every four years (with exceptions for century years), and time zone considerations can affect day boundaries. Our calculator handles all these nuances automatically, providing results in years, months, days, total days, weeks, and hours.</p>
<p>Indian students use date calculations frequently in academic planning. With board exams typically in February-March, competitive exams like JEE in January and April, NEET in May, and college admissions running through summer, knowing the exact number of study days available is crucial for effective preparation. This tool helps create realistic study schedules based on actual available time.</p>
<p>The tool is equally useful for teachers and educational administrators planning academic calendars, scheduling assessments, and ensuring compliance with UGC/CBSE requirements for minimum teaching days. Event coordinators can calculate lead times for college fests, seminars, and conferences. HR professionals use similar calculations for employee tenure, notice periods, and leave balances.</p>
<p>For history students, this calculator helps determine the duration between historical events — useful for understanding timelines and making connections between events in Indian and world history. Geography and science students can use it to calculate the duration of phenomena like monsoon seasons, agricultural cycles, and astronomical events.</p>
<p>The calculator accepts any combination of past, present, and future dates. The order doesn't matter — it automatically computes the absolute difference. Results are displayed in multiple formats so you can choose the most relevant one for your purpose. The year/month breakdown uses average month (30.44 days) and year (365.25 days) lengths for approximate conversions, while the total days count is mathematically exact. All calculations run locally in your browser with no external dependencies.</p>`}
      faqs={[
        { q: "Does it account for leap years?", a: "Yes, the total day count is exact and includes leap days. The year/month breakdown uses average values (365.25 days/year, 30.44 days/month) for approximation." },
        { q: "Does the order of dates matter?", a: "No, the calculator uses the absolute difference. You can enter dates in any order." },
        { q: "Can I use future dates?", a: "Yes, you can calculate the difference between any combination of past, present, and future dates." },
        { q: "How accurate is the year and month breakdown?", a: "The total days count is mathematically exact. The year/month/day breakdown is approximate since it uses average month and year lengths." },
        { q: "What's the maximum date range supported?", a: "The tool supports any dates that your browser's date picker allows, typically spanning several thousand years." },
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
