import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const gstRates = [5, 12, 18, 28];

const GstCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [inclusive, setInclusive] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const a = parseFloat(amount), r = parseFloat(rate);
    if (isNaN(a)) return;
    let gst: number, base: number, total: number;
    if (inclusive) {
      base = a / (1 + r / 100);
      gst = a - base;
      total = a;
    } else {
      base = a;
      gst = (a * r) / 100;
      total = a + gst;
    }
    const cgst = gst / 2, sgst = gst / 2;
    setResult(
      `Base Amount: <strong>₹${base.toFixed(2)}</strong><br/>` +
      `GST (${r}%): <strong>₹${gst.toFixed(2)}</strong><br/>` +
      `CGST (${r/2}%): ₹${cgst.toFixed(2)} | SGST (${r/2}%): ₹${sgst.toFixed(2)}<br/>` +
      `Total: <strong>₹${total.toFixed(2)}</strong>`
    );
  };

  return (
    <ToolPage
      title="GST Calculator"
      description="Calculate GST for Indian tax slabs — 5%, 12%, 18%, and 28% rates."
      seoContent="<p>The GST Calculator is designed specifically for Indian tax calculations. The Goods and Services Tax (GST) in India has four main slabs — 5%, 12%, 18%, and 28% — each applicable to different categories of goods and services. This tool helps you calculate GST amounts quickly and accurately for any transaction.</p><p>GST replaced multiple indirect taxes in India when it was implemented on July 1, 2017. It simplified the tax structure but created a need for quick calculation tools. Whether you're a student studying taxation, a small business owner, or a consumer wanting to verify tax charges, this calculator provides instant breakdowns including CGST and SGST components.</p><p>The calculator supports both exclusive (adding GST to a base price) and inclusive (extracting GST from a total price) calculations. This dual functionality makes it versatile for different scenarios — from pricing products to verifying invoices. The CGST and SGST breakdown helps in understanding how the tax is split between central and state governments.</p><p>For inter-state transactions, IGST applies at the full rate instead of the CGST+SGST split, but the total tax amount remains the same. Our tool focuses on intra-state calculations with the CGST and SGST breakdown, which is the most common scenario for everyday transactions. Students studying commerce and taxation will find this tool particularly useful for understanding GST concepts practically.</p>"
      faqs={[
        { q: "What are the GST slabs in India?", a: "India has four main GST slabs: 5%, 12%, 18%, and 28%. Some items have 0% GST or special rates." },
        { q: "What is CGST and SGST?", a: "CGST (Central GST) and SGST (State GST) are the two components of GST for intra-state transactions, each being half of the total GST rate." },
        { q: "When should I use inclusive calculation?", a: "Use inclusive when the price already includes GST and you want to find the base amount and tax component." },
        { q: "What about IGST?", a: "IGST applies to inter-state transactions at the full GST rate. The total tax remains the same." },
        { q: "Is this tool accurate for billing?", a: "Yes, the calculations are mathematically accurate. However, always verify with professional accounting software for official billing." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Amount (₹)</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 1000" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">GST Rate</label>
          <select value={rate} onChange={e => setRate(e.target.value)} className="tool-input">
            {gstRates.map(r => <option key={r} value={r}>{r}%</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={inclusive} onChange={e => setInclusive(e.target.checked)} className="rounded" />
          Price is GST inclusive
        </label>
        <button onClick={calculate} className="tool-button">Calculate GST</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default GstCalculator;
