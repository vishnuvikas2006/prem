import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { modules } from "../data/portfolio";

export function Modules() {
  return (
    <section className="content-page page-container">
      <SectionTitle
        eyebrow="Coursework"
        title="Laboratory modules"
        description="The topics below follow the supplied Data Wrangling and Data Visualization experiment documents."
        align="center"
      />
      <div className="module-grid">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <article className="module-card" key={module.number}>
              <div className="module-card__topline">
                <span>Module {module.number}</span>
                <Icon size={24} />
              </div>
              <h2>{module.title}</h2>
              <p>{module.description}</p>
              <ul className="topic-list">
                {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
              <Link className="card-link" to={module.experimentRoute}>
                Read related experiment <ArrowUpRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
