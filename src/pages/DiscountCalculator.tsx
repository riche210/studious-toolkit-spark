import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const DiscountCalculator = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const p = parseFloat(price), d = parseFloat(discount);
    if (isNaN(p) || isNaN(d)) return;
    const saved = (p * d) / 100;
    const final_ = p - saved;
    setResult(`You save <strong>₹${saved.toFixed(2)}</strong>. Final price: <strong>₹${final_.toFixed(2)}</strong>`);
  };

  return (
    <ToolPage
      title="Discount Calculator"
      description="Calculate the final price after applying a discount percentage."
      seoContent="<p>The Discount Calculator is a practical tool that helps you quickly determine how much you'll save and the final price after applying a discount. Whether you're shopping online, comparing deals during sales, or calculating bulk purchase discounts, this tool provides instant results that help you make smarter purchasing decisions.</p><p>Discounts are everywhere — from festive sales and clearance events to student discounts and loyalty programs. Understanding the actual savings in monetary terms helps you evaluate whether a deal is truly worth it. Our calculator takes the original price and discount percentage to show you both the amount saved and the final price you'll pay.</p><p>Students benefit from this tool in multiple ways. In mathematics, discount calculations are a common topic in commercial arithmetic. For practical use, students can calculate savings on textbooks, electronics, and other purchases during student discount offers. Understanding discounts also builds financial literacy skills that are valuable throughout life.</p><p>The tool is also valuable for small business owners who need to calculate discounted prices for customers, set sale prices, or analyze profit margins after applying promotional discounts. Its simplicity makes it accessible to anyone, regardless of their mathematical ability, ensuring quick and accurate calculations every time.</p>"
      faqs={[
        { q: "How is discount calculated?", a: "Discount amount = (Original Price × Discount %) / 100. Final price = Original Price - Discount Amount." },
        { q: "Can I calculate successive discounts?", a: "For multiple discounts, calculate the first discount, then apply the second discount to the reduced price." },
        { q: "What's the maximum discount I can enter?", a: "You can enter any percentage, but discounts typically range from 1% to 100%." },
        { q: "Does this include tax?", a: "This calculator shows the price after discount only. Tax calculations should be done separately." },
        { q: "Can I use this for bulk pricing?", a: "Yes, enter the total price and the bulk discount percentage to find the discounted total." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Original Price (₹)</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 2000" className="tool-input" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Discount (%)</label>
          <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} placeholder="e.g. 20" className="tool-input" />
        </div>
        <button onClick={calculate} className="tool-button">Calculate Discount</button>
        {result && <div className="result-box" dangerouslySetInnerHTML={{ __html: result }} />}
      </div>
    </ToolPage>
  );
};

export default DiscountCalculator;
