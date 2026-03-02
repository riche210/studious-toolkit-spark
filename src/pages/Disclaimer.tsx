import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>The tools and calculators provided on SmartStudyTools are for informational and educational purposes only. While we strive for accuracy, we make no guarantees about the completeness or reliability of the results.</p>
        <p>The calculations are based on standard mathematical formulas and may not account for all real-world variables. For critical financial, medical, or legal decisions, always consult qualified professionals.</p>
        <p>SmartStudyTools is not responsible for any decisions made based on the results provided by our calculators. Users are advised to verify important calculations independently.</p>
        <p>The content on this website, including blog articles, SEO descriptions, and FAQs, is provided for general informational purposes. We do not claim it to be professional advice of any kind.</p>
      </div>
    </div>
  </Layout>
);

export default Disclaimer;
