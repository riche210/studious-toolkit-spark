import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>Daily Student Tools is a free online platform providing essential calculators and utility tools for students. Our mission is to make everyday calculations simple, fast, and accessible to everyone.</p>
        <p>We believe that students should focus on learning, not struggle with repetitive calculations. That's why we've created a collection of lightweight, mobile-friendly tools that work instantly in your browser — no downloads, no sign-ups, no ads.</p>
        <p>Whether you need to calculate your age, convert CGPA to percentage, count words in an essay, or figure out your loan EMI, Daily Student Tools has you covered. All our tools are designed with simplicity and accuracy in mind.</p>
        <p>Our team is passionate about education technology and committed to continuously improving and expanding our tool collection based on student needs and feedback.</p>
      </div>
    </div>
  </Layout>
);

export default About;
