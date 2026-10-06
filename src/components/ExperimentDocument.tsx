import DOMPurify from "dompurify";
import { useEffect, useState, type ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

interface ExperimentDocumentProps {
  source: string;
}

function convertNode(node: Node, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (!(node instanceof HTMLElement)) return null;

  const tag = node.tagName.toLowerCase();
  if (tag === "pre") return <CodeBlock key={key} code={node.textContent ?? ""} />;

  const children = Array.from(node.childNodes).map((child, index) =>
    convertNode(child, `${key}-${index}`),
  );
  const attributes: Record<string, string> = {};
  if (tag === "a") {
    const href = node.getAttribute("href");
    if (href) attributes.href = href;
  }

  switch (tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "p":
    case "ul":
    case "ol":
    case "li":
    case "strong":
    case "em":
    case "blockquote":
    case "table":
    case "thead":
    case "tbody":
    case "tr":
    case "th":
    case "td":
    case "a":
      return ReactElement(tag, attributes, children, key);
    case "br":
      return <br key={key} />;
    default:
      return <span key={key}>{children}</span>;
  }
}

function ReactElement(
  tag: string,
  attributes: Record<string, string>,
  children: ReactNode[],
  key: string,
) {
  const element = tag as keyof JSX.IntrinsicElements;
  return <Element key={key} tag={element} attributes={attributes} children={children} />;
}

function Element({
  tag,
  attributes,
  children,
}: {
  tag: keyof JSX.IntrinsicElements;
  attributes: Record<string, string>;
  children: ReactNode[];
}) {
  const Component = tag;
  return <Component {...attributes}>{children}</Component>;
}

function renderDocument(markup: string) {
  const safeMarkup = DOMPurify.sanitize(markup, {
    ALLOWED_TAGS: [
      "a", "b", "blockquote", "br", "em", "h1", "h2", "h3", "h4", "i",
      "li", "ol", "p", "pre", "strong", "table", "tbody", "td", "th",
      "thead", "tr", "ul",
    ],
    ALLOWED_ATTR: ["href"],
  });
  const parsed = new DOMParser().parseFromString(safeMarkup, "text/html");
  const nodes: ReactNode[] = [];

  for (let index = 0; index < parsed.body.childNodes.length; index += 1) {
    const node = parsed.body.childNodes[index];
    if (node instanceof HTMLElement && node.tagName.toLowerCase() === "pre") {
      const lines = [node.textContent ?? ""];
      while (
        parsed.body.childNodes[index + 1] instanceof HTMLElement &&
        (parsed.body.childNodes[index + 1] as HTMLElement).tagName.toLowerCase() === "pre"
      ) {
        index += 1;
        lines.push(parsed.body.childNodes[index].textContent ?? "");
      }
      nodes.push(<CodeBlock key={`code-${index}`} code={lines.join("\n")} />);
    } else {
      nodes.push(convertNode(node, `doc-${index}`));
    }
  }
  return nodes;
}

export function ExperimentDocument({ source }: ExperimentDocumentProps) {
  const [markup, setMarkup] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(source, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Document preview request failed: ${response.status}`);
        }
        return response.text();
      })
      .then(setMarkup)
      .catch((reason: unknown) => {
        if (reason instanceof Error && reason.name === "AbortError") return;
        console.error("Unable to load the experiment document preview.", reason);
        setError(true);
      });

    return () => controller.abort();
  }, [source]);

  if (error) {
    return <p className="document-message">Experiment document preview unavailable.</p>;
  }
  if (markup === null) {
    return <p className="document-message">Loading experiment document…</p>;
  }
  return <div className="document-content">{renderDocument(markup)}</div>;
}
