import { useState } from "react";
import { Check, Copy } from "lucide-react";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("python", python);

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const highlighted = hljs.highlight(code, { language: "python" }).value;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Unable to copy code to the clipboard.", error);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__toolbar">
        <span>Python</span>
        <button type="button" onClick={copyCode} aria-label="Copy code">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code
          className="hljs language-python"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
}
