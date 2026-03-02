import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const WordCounter = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readingTime = Math.ceil(words / 200);

  return (
    <ToolPage
      title="Word Counter"
      description="Count words, characters, sentences, and paragraphs in your text instantly."
      seoContent="<p>The Word Counter is an essential tool for students, writers, bloggers, and content creators who need to track the length of their text. Whether you're writing an essay with a word limit, crafting a social media post with character restrictions, or preparing academic papers, this tool provides instant statistics about your text.</p><p>Our Word Counter provides comprehensive text analysis including word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. These metrics are crucial for meeting assignment requirements, optimizing content for SEO, and ensuring your writing is the appropriate length for its intended purpose.</p><p>Students frequently face word count requirements for essays, research papers, and assignments. This tool eliminates the guesswork by providing real-time counting as you type or paste your text. It's also useful for preparing for competitive exams where essay writing has strict word limits, such as UPSC, SSC, and various state-level examinations.</p><p>Content creators and bloggers benefit from knowing their word count for SEO optimization. Search engines tend to favor content of certain lengths, and our tool helps ensure your articles meet recommended word counts. The reading time estimate also helps writers gauge how long their content will take readers to consume, which is important for audience engagement and content planning.</p>"
      faqs={[
        { q: "How are words counted?", a: "Words are counted by splitting text on whitespace characters. Multiple spaces between words are handled correctly." },
        { q: "Does it count special characters?", a: "Yes, all characters including special characters are included in the character count." },
        { q: "How is reading time calculated?", a: "Reading time is estimated based on an average reading speed of 200 words per minute." },
        { q: "Can I paste text from other sources?", a: "Yes, you can paste text from any source. The tool will count everything in the text area." },
        { q: "Is there a character limit?", a: "No, you can enter as much text as you need. The tool handles large texts efficiently." },
      ]}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Enter or paste your text</label>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            rows={8}
            className="tool-input resize-y"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            ["Words", words],
            ["Characters", chars],
            ["No Spaces", charsNoSpace],
            ["Sentences", sentences],
            ["Paragraphs", paragraphs],
            ["Reading Time", `${readingTime} min`],
          ].map(([label, val]) => (
            <div key={label as string} className="result-box text-center">
              <div className="text-2xl font-bold text-primary">{val}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolPage>
  );
};

export default WordCounter;
