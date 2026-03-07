import { useState } from "react";
import { Link } from "react-router-dom";
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
    setResult(
      `You save: <strong>₹${saved.toFixed(2)}</strong><br/>` +
      `Final Price: <strong>₹${final_.toFixed(2)}</strong>`
    );
  };

  return (
    <ToolPage
      title="Discount Calculator"
      description="Calculate the final price and savings after applying a discount percentage."
      seoContent={`<p>The Discount Calculator is a practical everyday tool that helps you quickly determine how much you'll save and the final price you'll pay after a discount is applied. Whether you're shopping during Flipkart's Big Billion Days, Amazon Great Indian Festival, Myntra End of Reason Sale, or at your local store's clearance event, this tool takes the guesswork out of discount calculations.</p>
<p>The calculation is straightforward: Discount Amount = Original Price × Discount Percentage ÷ 100, and Final Price = Original Price − Discount Amount. While simple in theory, doing this mentally for various products and discount percentages during a shopping spree can lead to errors. Our tool provides instant, accurate results so you can make informed purchasing decisions.</p>
<p>In India, discounts are a major part of the retail culture. Festival seasons like Diwali, Dussehra, and Eid bring massive sales across both online and offline retailers. E-commerce platforms regularly offer 40-80% discounts on various categories. Understanding the actual rupee value of these discounts helps you evaluate whether a deal is genuinely good or just marketing hype.</p>
<p>Students benefit from this tool in both academic and practical contexts. In mathematics, discount calculations are a key topic in commercial arithmetic taught from Class 7 onwards. Problems involving successive discounts, marked price vs selling price, and profit/loss after discount are common in board exams and competitive tests. This tool helps verify manual calculations during practice sessions.</p>
<p>For practical use, students can calculate savings on textbooks, electronics, stationery, and other purchases when using student discount programs. Many brands and platforms offer 10-20% student discounts, and knowing the exact savings helps with budgeting. College students managing limited finances can use this tool to compare deals across different stores and platforms.</p>
<p>Small business owners also find this tool valuable for setting sale prices, calculating promotional discounts, and understanding profit margins after markdowns. Whether you need to determine the selling price after a 15% trade discount or calculate customer savings for your marketing material, this calculator provides quick and accurate results. It's free, works on all devices, and requires no registration.</p>`}
      faqs={[
        { q: "How is the discount amount calculated?", a: "Discount Amount = (Original Price × Discount %) / 100. The final price is the original price minus the discount amount." },
        { q: "How do I calculate successive (double) discounts?", a: "Apply the first discount to get a reduced price, then apply the second discount to that reduced price. For example, 20% + 10% on ₹1000: first ₹800, then ₹720." },
        { q: "Is 50% + 50% discount the same as free?", a: "No! 50% off ₹1000 = ₹500. Then 50% off ₹500 = ₹250. Successive 50% discounts equal 75% total discount, not 100%." },
        { q: "Does this include GST after discount?", a: "This calculator shows the price after discount only. GST would be calculated on the discounted price separately." },
        { q: "Can I enter a discount greater than 100%?", a: "While technically possible, discounts above 100% aren't realistic in commerce. The final price would be negative, which has no practical meaning." },
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
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Learn How Discount Calculations Work</h3>
  <p>
    Discover the discount formula and see examples used in shopping
    and online sales.
  </p>
  <a
    href="/blog/discount-calculation-guide"
    className="text-primary underline"
  >
    Discount Calculation Guide →
  </a>
</div>
    </ToolPage>
  );
};

export default DiscountCalculator;
