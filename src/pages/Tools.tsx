import { type CSSProperties } from "react";
import { ArrowLeft, ArrowUpRight, BookMarked, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { tools } from "../data/portfolio";

export function Tools() {
  const { toolId } = useParams<{ toolId: string }>();
  const active = tools.find((tool) => tool.id === toolId);

  if (active) {
    const Icon = active.icon;
    return <section className="content-page page-container tool-documentation">
      <Link className="back-link" to="/tools"><ArrowLeft size={16} /> Tools directory</Link>
      <article className="tool-documentation__paper">
        <span className="tool-documentation__icon"><Icon size={31} /></span>
        <span className="eyebrow">Tool documentation</span>
        <h1>{active.name}</h1>
        <p>{active.description}</p>
        <div className="tool-purpose"><BookMarked size={18} /><div><strong>Laboratory purpose</strong><span>{active.purpose}</span></div></div>
        {active.website && <a className="button button--primary" href={active.website} target="_blank" rel="noreferrer">Visit official resource <ExternalLink size={15} /></a>}
      </article>
    </section>;
  }

  return <section className="content-page page-container tools-directory">
    <SectionTitle eyebrow="Lab toolkit" title="Tools directory" description="Software, environments, and dataset references named across the laboratory material." align="center" />
    <div className="tool-directory-grid">
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return <Link className="tool-directory-card" style={{ "--tool-delay": `${index * 45}ms` } as CSSProperties} to={`/tools/${tool.id}`} key={tool.id}>
          <span className="tool-card__icon"><Icon size={23} /></span><ArrowUpRight className="tool-card__arrow" size={17} />
          <h2>{tool.name}</h2><p>{tool.description}</p><span className="directory-read">Read documentation</span>
        </Link>;
      })}
    </div>
  </section>;
}
