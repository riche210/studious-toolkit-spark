import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>We'd love to hear from you! Whether you have a suggestion for a new tool, found a bug, or just want to say hello, feel free to reach out.</p>
        <p><strong>Email:</strong> contact@dailystudenttools.com</p>
        <p><strong>Response Time:</strong> We typically respond within 24-48 hours.</p>
        <p>If you'd like to suggest a new calculator or tool, please include a brief description of what it should do and how it would help students. We're always looking to expand our collection based on real student needs.</p>
      </div>
    </div>
  </Layout>
);

export default Contact;
