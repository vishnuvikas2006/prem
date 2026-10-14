import { ArrowRight, BookOpenCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { modules } from "../data/portfolio";

export function Modules() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const active = modules.find((module) => module.id === moduleId) ?? modules[0];

  return <section className="content-page page-container modules-page">
    <SectionTitle eyebrow="Coursework" title="Data Science modules" description="Move through the course foundations, from Python and data acquisition to visual storytelling." align="center" />
    <nav className="module-stack" aria-label="Data Science modules">
      {modules.map((module) => <Link key={module.id} to={`/modules/${module.id}`} className={`module-stack__card${module.id === active.id ? " is-active" : ""}`}>
        <strong>Mod {module.number}</strong>
        <span>{module.title}</span>
      </Link>)}
    </nav>
    <article className="module-details" aria-live="polite">
      <div className="module-details__heading"><BookOpenCheck size={20} /><span>Module {active.number} overview</span></div>
      <h2>{active.title}</h2>
      <p>{active.viewerText}</p>
      <section className="module-details__theory" aria-labelledby="theory-title">
        <h3 id="theory-title">Theory</h3>
        {active.theory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>
      <div className="module-details__topics">
        {active.topics.map((topic) => <span key={topic}>{topic}</span>)}
      </div>
      <Link className="module-details__link" to={active.experimentRoute}>Open related practical <ArrowRight size={16} /></Link>
    </article>
  </section>;
}
