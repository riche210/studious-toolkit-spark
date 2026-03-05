import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(principal), annualRate = parseFloat(rate), t = parseFloat(tenure);
    if (isNaN(p) || isNaN(annualRate) || isNaN(t) || t === 0) return;
    const r = annualRate / 12 / 100;
    const n = t * 12;
    const emi = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;
    const fmt = (v: number) => v.toLocaleString("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    setResult(
      `Monthly EMI: <strong>₹${fmt(emi)}</strong><br/>` +
      `Total Interest: <strong>₹${fmt(totalInterest)}</strong><br/>` +
      `Total Payment: <strong>₹${fmt(totalPayment)}</strong>`
    );
  };

  return (
    <ToolPage
      title="EMI Calculator"
      description="Calculate your Equated Monthly Installment for home, car, personal, or education loans."
      seoContent={`<p>The EMI (Equated Monthly Installment) Calculator helps you plan your loan repayments by calculating the fixed monthly amount you'll need to pay. Whether it's a home loan, car loan, personal loan, or education loan, knowing your EMI in advance is essential for financial planning and budgeting.</p>
<p>EMI is calculated using the standard formula: EMI = P × r × (1+r)^n ÷ ((1+r)^n – 1), where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 and by 100), and n is the total number of monthly installments. Each EMI payment covers both principal repayment and interest, with the proportion shifting over time — early payments are interest-heavy, while later payments contribute more to principal reduction.</p>
<p>In India, loan interest rates vary significantly by type. As of 2026, home loan rates from major banks like SBI, HDFC, and ICICI range from 8.5% to 10%. Personal loan rates can be 10% to 18%. Education loan rates are typically 8% to 12% from nationalized banks. Car loan rates range from 8% to 14%. This calculator helps you compare EMIs across different scenarios by adjusting the rate and tenure.</p>
<p>Students planning for education loans will find this tool particularly valuable. Understanding your post-graduation EMI commitment helps in deciding the right loan amount and choosing between repayment options. Many education loans offer a moratorium period (study period + 6-12 months) before EMI payments begin, which should be factored into your financial planning.</p>
<p>The calculator also reveals the total interest payable over the loan tenure — a figure that often surprises borrowers. For example, a ₹50 lakh home loan at 9% for 20 years has an EMI of approximately ₹45,000, but the total interest paid exceeds ₹58 lakh — more than the principal! Understanding this helps you evaluate whether prepayment or a shorter tenure would save money.</p>
<p>This tool supports any combination of loan amount, interest rate, and tenure. It handles edge cases like 0% interest (no-cost EMI) correctly. All calculations happen in your browser with no data shared externally. Whether you're comparing bank loan offers, planning a major purchase, or studying financial mathematics for competitive exams, this EMI Calculator provides instant, accurate results.</p>`}
      faqs={[
        { q: "What does EMI stand for?", a: "EMI stands for Equated Monthly Installment — a fixed payment made by a borrower to a lender on a specified date each month." },
        { q: "Does increasing tenure reduce EMI?", a: "Yes, a longer tenure reduces monthly EMI but significantly increases the total interest paid over the loan period." },
        { q: "Is the interest rate annual or monthly?", a: "Enter the annual interest rate. The calculator automatically converts it to monthly for the EMI formula." },
        { q: "Can I use this for no-cost EMI calculations?", a: "Yes, enter 0% as the interest rate. The EMI will simply be the principal divided by the number of months." },
        { q: "How do Indian banks calculate EMI?", a: "Most Indian banks use the same reducing balance method that this calculator uses. Some may use flat-rate method which results in higher effective EMIs." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Loan Amount (₹)</label>
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 500000" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 8.5" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Loan Tenure (years)</label>
          <input type="number" value={tenure} onChange={e => setTenure(e.target.value)} placeholder="e.g. 5" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate EMI</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
        <div className="mt-6 p-4 bg-muted rounded-lg">
  <h3 className="text-lg font-semibold mb-2">
    Learn How EMI Is Calculated
  </h3>

  <p className="text-sm mb-2">
    Want to understand the EMI formula and see step-by-step examples?
  </p>

  <Link to="/blog/emi-calculation-guide" className="text-primary underline">
    Read our complete EMI calculation guide →
  </Link>
</div>
      </div>
    </ToolPage>
  );
};

export default EmiCalculator;
