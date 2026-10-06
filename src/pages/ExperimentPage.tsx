import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ExperimentDocument } from "../components/ExperimentDocument";
import { ASSETS } from "../config/upload";
import { experiments } from "../data/portfolio";

export function ExperimentPage({ experimentId }: { experimentId: 4 | 5 }) {
  const experiment = experiments.find(({ id }) => id === experimentId);
  if (!experiment) return null;
  const documentUrl = experimentId === 4 ? ASSETS.experiment4 : ASSETS.experiment5;

  return (
    <section className="content-page experiment-page page-container">
      <Link className="back-link" to="/experiments">
        <ArrowLeft size={16} /> All experiments
      </Link>
      <header className="experiment-heading">
        <span className="eyebrow">Experiment {experimentId}</span>
        <h1>{experiment.title}</h1>
        <a
          className="button button--outline"
          href={documentUrl}
          download={experiment.sourceFile}
        >
          <Download size={16} /> Download Experiment {experimentId}
        </a>
      </header>
      <article className="document-panel">
        <ExperimentDocument
          key={experimentId}
          source={`/assets/experiments/exp${experimentId}.html`}
        />
      </article>
    </section>
  );
}
