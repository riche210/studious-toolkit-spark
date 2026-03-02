import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p><strong>Last updated:</strong> March 2026</p>

        <h3 className="text-foreground">Acceptance of Terms</h3>
        <p>By accessing and using SmartStudyTools, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

        <h3 className="text-foreground">Use of Tools</h3>
        <p>All tools and calculators on SmartStudyTools are provided free of charge for personal and educational use. You may not use automated systems to scrape, copy, or redistribute our tools without prior written permission.</p>

        <h3 className="text-foreground">Accuracy</h3>
        <p>While we strive for accuracy, all calculations are provided "as is" without warranties. Users should verify results independently for critical decisions including financial, medical, or legal matters.</p>

        <h3 className="text-foreground">Intellectual Property</h3>
        <p>All content, design, and code on SmartStudyTools are protected by copyright. You may not reproduce, distribute, or create derivative works without our consent.</p>

        <h3 className="text-foreground">Limitation of Liability</h3>
        <p>SmartStudyTools shall not be liable for any damages arising from the use or inability to use our tools. This includes but is not limited to errors in calculations, data loss, or decisions made based on our results.</p>

        <h3 className="text-foreground">Changes to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
      </div>
    </div>
  </Layout>
);

export default Terms;
