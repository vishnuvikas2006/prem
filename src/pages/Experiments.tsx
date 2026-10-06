import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { experiments } from "../data/portfolio";

export function Experiments() {
  return (
    <section className="content-page page-container">
      <SectionTitle
        eyebrow="Practical work"
        title="Laboratory experiments"
        description="Open each experiment to read the original lab document directly on this site."
        align="center"
      />
      <div className="experiment-grid">
        {experiments.map((experiment) => {
          const Icon = experiment.icon;
          return (
            <article className="experiment-card" key={experiment.id}>
              <span className="experiment-card__number">
                Experiment {experiment.id.toString().padStart(2, "0")}
              </span>
              <span className="round-icon"><Icon size={25} /></span>
              <h2>{experiment.title}</h2>
              <p>{experiment.description}</p>
              <Link className="button button--primary" to={experiment.route}>
                Open Experiment <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
