import { useState } from "react";
import { Link } from "react-router-dom";
import ToolPage from "@/components/ToolPage";

const WordCounter = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readingTime = words > 0 ? Math.ceil(words / 200) : 0;

  return (
    <ToolPage
      title="Word Counter"
      description="Count words, characters, sentences, paragraphs, and estimated reading time in your text."
      seoContent={`<p>The Word Counter is an essential tool for students, writers, bloggers, and content creators who need to track the length and structure of their text. Whether you're writing an essay with a strict word limit, preparing content for social media with character restrictions, crafting academic papers, or optimizing blog posts for SEO, this tool provides comprehensive real-time text statistics.</p>
<p>Our Word Counter goes beyond simple word counting. It provides six key metrics: total words, total characters, characters without spaces, sentence count, paragraph count, and estimated reading time. These metrics are crucial for meeting assignment requirements, adhering to platform-specific limits (Twitter/X has 280 characters, Instagram captions allow 2,200), and ensuring your content is the appropriate length for its purpose.</p>
<p>Indian students frequently face word count requirements across their academic journey. CBSE and ICSE board exams specify word limits for essays, letters, and comprehension answers. Competitive exams like UPSC, SSC, and banking exams have strict word limits for descriptive papers. College assignments and research papers often require specific word counts. This tool helps students stay within limits without manually counting every word.</p>
<p>For content creators and digital marketers, word count directly impacts SEO performance. Google tends to favor comprehensive content — blog posts of 1,500–2,500 words often rank higher for competitive keywords. Our tool helps writers ensure their content meets recommended lengths while the reading time estimate helps gauge how long readers will spend with the content, which is important for audience engagement.</p>
<p>The tool counts words by splitting text on whitespace, handles multiple spaces correctly, and recognizes sentences by period, exclamation, and question mark delimiters. Paragraphs are detected by double line breaks. Reading time is estimated at an average reading speed of 200 words per minute, which is standard for English text.</p>
<p>Simply type or paste your text into the text area and all statistics update in real time — no need to click a calculate button. The tool handles text of any length efficiently and works on all devices. All processing happens locally in your browser, so your text is never sent to any server. This makes it safe for sensitive academic work, professional documents, and personal writing.</p>`}
      faqs={[
        { q: "How are words counted?", a: "Words are counted by splitting text on whitespace characters (spaces, tabs, line breaks). Multiple spaces between words are handled correctly." },
        { q: "Does it count special characters and punctuation?", a: "Yes, all characters including special characters and punctuation are included in the character count. The 'No Spaces' count excludes all whitespace." },
        { q: "How is reading time calculated?", a: "Reading time is estimated at an average reading speed of 200 words per minute, which is the standard for English text comprehension." },
        { q: "Can I paste text from Word or PDF?", a: "Yes, you can paste text from any source including Microsoft Word, Google Docs, PDFs, and web pages. The tool will count everything in the text area." },
        { q: "Is there a maximum text length?", a: "No, there's no practical limit. The tool handles large texts efficiently since all processing happens locally in your browser." },
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
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Learn More About Word Counting</h3>
  <p>
    Want to understand how word counting works and why it is important for
    students and writers? Read our detailed guide.
  </p>
  <a
    href="/blog/word-counter-tool-guide"
    className="text-primary underline"
  >
    Word Counter Tool Explained →
  </a>
</div>
      <div className="mt-8 p-5 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold mb-2">Example</h3>

  <p className="text-sm text-muted-foreground mb-2">
    If you write a paragraph with 100 words, the estimated reading time will be:
  </p>

  <p className="text-sm font-medium">
    100 ÷ 200 = <strong>1 minute</strong>
  </p>

  <p className="text-sm mt-2">
    This helps students and writers understand how long readers will take to read their content.
  </p>
</div>
    </ToolPage>
  );
};

export default WordCounter;
