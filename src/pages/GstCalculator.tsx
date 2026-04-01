import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const gstRates = [5, 12, 18, 28];

const GstCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [inclusive, setInclusive] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const a = parseFloat(amount), r = parseFloat(rate);
   if (isNaN(a) || isNaN(r) || a <= 0) {
  setResult("<span class='text-red-500'>Please enter a valid amount.</span>");
  return;
}
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
  `Base Amount: <strong>₹${base.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong><br/>` +
  `GST (${r}%): <strong>₹${gst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong><br/>` +
  `CGST (${(r/2).toFixed(1)}%): ₹${cgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} | SGST (${(r/2).toFixed(1)}%): ₹${sgst.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<br/>` +
  `Total Amount: <strong>₹${total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>`
);
  };

  return (
    <ToolPage
      title="GST Calculator"
      description="Calculate GST for all Indian tax slabs — 5%, 12%, 18%, and 28% with CGST/SGST breakdown."
      seoContent={`<p>The GST Calculator is designed specifically for the Indian Goods and Services Tax system. GST was implemented across India on July 1, 2017, replacing a complex web of indirect taxes including VAT, excise duty, service tax, and octroi. This unified tax system simplified compliance but created a need for quick, accurate calculation tools — which is exactly what SmartStudyTools provides.</p>
<p>India has four main GST slabs: 5%, 12%, 18%, and 28%. Essential items like basic food grains are exempt (0%), while necessities like packaged food and economy travel fall under 5%. The 12% slab covers processed food, mobile phones, and business-class travel. The standard 18% rate applies to most goods and services including electronics, restaurants, and financial services. Luxury and demerit goods like premium cars, tobacco, and aerated drinks attract the highest rate of 28%.</p>
<p>Our calculator supports both exclusive and inclusive GST calculations. In exclusive mode, you enter the base price and the tool adds GST to calculate the total. In inclusive mode, you enter the total price (GST included) and the tool extracts the base amount and GST component. This dual functionality is essential for different business scenarios — from pricing products to verifying invoices and receipts.</p>
<p>The CGST/SGST breakdown is automatically calculated for intra-state transactions. When goods are sold within the same state, GST is split equally between Central GST (CGST) and State GST (SGST). For example, 18% GST becomes 9% CGST + 9% SGST. For inter-state transactions, IGST (Integrated GST) applies at the full rate, but the total tax amount remains the same.</p>
<p>Commerce and CA students studying Indian taxation will find this tool invaluable for understanding GST concepts practically. It's also useful for small business owners who need to quickly calculate tax amounts for billing, filing GST returns (GSTR-1, GSTR-3B), and reconciling invoices. Consumers can use it to verify the GST charged on their purchases.</p>
<p>The calculator handles all edge cases including zero amounts and works with decimal values for precise commercial calculations. It runs entirely in your browser with no data sent to external servers. Whether you're a student learning about indirect taxation, a shopkeeper preparing bills, or a consumer checking your invoice, this free GST Calculator provides instant, accurate results on any device.</p>`}
      faqs={[
        { q: "What are the GST slabs in India?", a: "India has four main GST slabs: 5%, 12%, 18%, and 28%. Some essential items are exempt at 0%, and certain luxury items have additional cess." },
        { q: "What is the difference between CGST, SGST, and IGST?", a: "CGST (Central GST) and SGST (State GST) apply to intra-state sales. IGST (Integrated GST) applies to inter-state sales. The total tax rate remains the same." },
        { q: "When should I use GST inclusive calculation?", a: "Use inclusive mode when the price already includes GST (like MRP-based products) and you want to find the base amount and tax component separately." },
        { q: "Is this tool accurate for filing GST returns?", a: "The mathematical calculations are accurate. However, for official GST return filing, use the GST portal and consult a chartered accountant." },
        { q: "Which GST rate applies to my product?", a: "GST rates are product-specific based on HSN codes. Check the official GST rate finder at cbic-gst.gov.in or consult a tax professional." },
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
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" checked={inclusive} onChange={e => setInclusive(e.target.checked)} className="rounded border-input" />
          Price is GST inclusive
        </label>
        <button onClick={calculate} className="tool-button">Calculate GST</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
        <div className="mt-10 p-6 bg-muted rounded-lg">
  <h3 className="text-xl font-semibold mb-2">
    Learn How GST Is Calculated
  </h3>
  <p className="text-sm mb-3">
    Want to understand CGST, SGST, and IGST with real examples?
  </p>
  <Link to="/blog/how-to-calculate-gst-in-india" className="text-primary underline">
    Read our complete GST guide →
  </Link>
</div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
  This calculator provides approximate GST values based on standard rates. For official tax filing, always refer to government guidelines or consult a tax professional.
</p>
    </ToolPage>
  );
};

export default GstCalculator;
