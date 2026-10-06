import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { tools } from "../data/portfolio";

export function Tools() {
  return (
    <section className="content-page page-container">
      <SectionTitle
        eyebrow="Lab toolkit"
        title="Tools & technologies"
        description="Software and dataset references explicitly named in the supplied experiment material."
        align="center"
      />
      <div className="tool-grid">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const content = (
            <>
              <span className="tool-card__icon"><Icon size={23} /></span>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              {tool.website && <ArrowUpRight className="tool-card__arrow" size={17} />}
            </>
          );
          return tool.website ? (
            <a
              className="tool-card"
              href={tool.website}
              key={tool.name}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <article className="tool-card" key={tool.name}>{content}</article>
          );
        })}
      </div>
    </section>
  );
}
