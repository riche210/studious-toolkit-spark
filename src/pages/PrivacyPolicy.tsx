import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p><strong>Last updated:</strong> March 2026</p>
        <p>At SmartStudyTools, we take your privacy seriously. This page explains how we handle your data.</p>
        <h3 className="text-foreground">Data Collection</h3>
        <p>All calculations are performed locally in your browser. We do not collect, store, or transmit any data you enter into our tools. Your inputs never leave your device.</p>
        <h3 className="text-foreground">Cookies</h3>
        <p>We may use essential cookies for basic site functionality. We do not use tracking cookies or share data with third parties.</p>
        <h3 className="text-foreground">Analytics</h3>
        <p>We may use anonymized analytics to understand how our tools are used and improve the user experience. No personally identifiable information is collected.</p>
        <h3 className="text-foreground">Third-Party Links</h3>
        <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those websites.</p>
        <h3 className="text-foreground">Changes</h3>
        <p>We may update this policy from time to time. Any changes will be reflected on this page with an updated date.</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
