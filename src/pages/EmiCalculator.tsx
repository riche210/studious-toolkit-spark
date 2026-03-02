import { useState } from "react";
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
    setResult(
      `Monthly EMI: <strong>₹${emi.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong><br/>` +
      `Total Interest: <strong>₹${totalInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong><br/>` +
      `Total Payment: <strong>₹${totalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>`
    );
  };

  return (
    <ToolPage
      title="EMI Calculator"
      description="Calculate your Equated Monthly Installment for loans with custom interest rate and tenure."
      seoContent="<p>The EMI (Equated Monthly Installment) Calculator helps you plan your loan repayments by calculating the fixed monthly amount you'll need to pay. Whether it's a home loan, car loan, personal loan, or education loan, knowing your EMI in advance helps you budget effectively and choose the right loan amount and tenure.</p><p>EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n – 1), where P is the principal loan amount, r is the monthly interest rate, and n is the total number of monthly installments. This mathematical formula ensures that each payment covers both principal repayment and interest charges in a balanced manner.</p><p>Students planning for education loans will find this tool particularly useful. Understanding your future EMI commitments helps in making informed decisions about loan amounts and repayment periods. It also helps parents plan for their children's education expenses by understanding the financial commitment involved in education loans.</p><p>The calculator also shows the total interest payable and total payment amount over the loan tenure. This transparency helps borrowers understand the true cost of borrowing and compare different loan offers from banks and financial institutions. By adjusting the principal, rate, and tenure, you can find the most comfortable EMI that fits your monthly budget.</p>"
      faqs={[
        { q: "What does EMI stand for?", a: "EMI stands for Equated Monthly Installment — a fixed payment amount made by a borrower to a lender every month." },
        { q: "Does a longer tenure reduce EMI?", a: "Yes, a longer tenure reduces the monthly EMI but increases the total interest paid over the loan period." },
        { q: "Is the interest rate annual or monthly?", a: "Enter the annual interest rate. The calculator automatically converts it to monthly for the EMI formula." },
        { q: "Can I use this for education loans?", a: "Yes, this calculator works for all types of loans including education, home, car, and personal loans." },
        { q: "What if the interest rate is 0%?", a: "At 0% interest, EMI equals the principal divided by the number of months." },
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
      </div>
    </ToolPage>
  );
};

export default EmiCalculator;
