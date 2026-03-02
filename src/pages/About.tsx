import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">About SmartStudyTools</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>SmartStudyTools is a free online platform providing essential calculators and utility tools built specifically for Indian students. Our mission is to make everyday academic and financial calculations simple, fast, and accessible to everyone.</p>
        <p>We understand that students juggle multiple subjects, exams, and deadlines. That's why we built a collection of lightweight tools that work instantly in your browser — no downloads, no sign-ups, no distracting ads. From converting CGPA to percentage using the CBSE formula to calculating GST with all Indian tax slabs, every tool is tailored for the Indian education system.</p>
        <p>Our tools cover mathematics, finance, health, and productivity — everything a student needs in daily academic life. Whether you're preparing for board exams, competitive tests like JEE and NEET, or managing personal finances, SmartStudyTools has you covered.</p>
        <p>We're a small team passionate about education technology and committed to continuously improving our platform based on student feedback. If you have ideas for new tools, we'd love to hear from you!</p>
      </div>
    </div>
  </Layout>
);

export default About;
