import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="section-container">
      <h1 className="text-3xl font-bold mb-4">About SmartStudyTools</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        <p>SmartStudyTools was created with one simple goal — to make academic and everyday calculations easier for students in India.

As students ourselves, we noticed how often we needed quick tools for tasks like converting CGPA to percentage, calculating GST, solving simple interest problems, or checking exam-related calculations. Most websites were either filled with ads, required sign-ups, or were overly complicated.</p>
        <p>So we built SmartStudyTools to be different.

No downloads.
No sign-ups.
No unnecessary distractions.
Just fast, accurate tools that work instantly in your browser.</p>
        <p>Every calculator on this platform is designed keeping Indian students in mind — whether you're preparing for board exams, competitive exams like JEE or NEET, or simply managing personal finances.

Our mission is to create a reliable, student-first utility platform that is simple, transparent, and continuously improving.

We are committed to:

Providing accurate calculation tools

Keeping the platform clean and easy to use

Protecting user privacy (we do not sell personal data)

Continuously adding new student-focused tools.</p>
        <p>If you have suggestions for new tools or improvements, feel free to reach out to us at contact@smartstudytools.in
.

SmartStudyTools is built for students, by people who understand students!</p>
      </div>
    </div>
  </Layout>
);

export default About;
