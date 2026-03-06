import { Link } from "react-router-dom";

const BlogWordCounter = () => {
  return (
    <div className="section-container max-w-3xl">
      
      <Link to="/blog" className="text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">
        Word Counter Tool Explained for Students
      </h1>

      <p className="mb-4">
        A word counter is a simple tool that helps you count the number of
        words, characters, and sentences in a piece of text. It is commonly
        used by students, writers, bloggers, and professionals when writing
        essays, assignments, or online content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Why Students Use Word Counters
      </h2>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>To meet essay word limits</li>
        <li>To track assignment length</li>
        <li>To optimize writing for blogs or articles</li>
        <li>To count characters for social media posts</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Example
      </h2>

      <p className="mb-4">
        If a teacher asks for an essay of <strong>500 words</strong>, students
        can paste their text into a word counter tool to instantly see whether
        they have reached the required length.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Use Our Free Word Counter
      </h2>

      <p className="mb-4">
        Instead of counting manually, you can use our free{" "}
        <Link to="/word-counter" className="text-primary underline">
          Word Counter Tool
        </Link>{" "}
        to instantly count words, characters, and sentences in your text.
      </p>

      <hr className="my-8" />

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">About the Author</h3>
         <p>
    This article was written by the SmartStudyTools editorial team to help students and learners understand important academic and financial concepts in a simple and practical way.
  </p>
  <p className="mt-2">
    Our goal is to provide accurate calculators and easy-to-understand educational guides for Indian students.
  </p>
      </div>

    </div>
  );
};

export default BlogWordCounter;
