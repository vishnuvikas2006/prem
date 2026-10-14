import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Ellipsis, Pencil, RotateCcw, Trash2 } from "lucide-react";
import { ExperimentThumbnail } from "../components/ExperimentThumbnail";
import { SectionTitle } from "../components/SectionTitle";
import { loadExperiments, resetExperiments, saveExperiments, type Experiment } from "../data/portfolio";

export function Experiments() {
  const [experiments, setExperiments] = useState<Experiment[]>(() => loadExperiments());
  const [menuId, setMenuId] = useState<string | null>(null);

  const update = (next: Experiment[]) => { setExperiments(next); saveExperiments(next); };
  const edit = (experiment: Experiment) => {
    const title = window.prompt("Experiment title", experiment.title);
    if (title === null || !title.trim()) return;
    const description = window.prompt("Short description", experiment.description);
    if (description === null || !description.trim()) return;
    update(experiments.map((item) => item.id === experiment.id ? { ...item, title: title.trim(), description: description.trim() } : item));
    setMenuId(null);
  };
  const remove = (experiment: Experiment) => {
    if (window.confirm(`Delete ${experiment.title}? This can be restored with Reset sample experiments.`)) update(experiments.filter((item) => item.id !== experiment.id));
    setMenuId(null);
  };
  const reset = () => { resetExperiments(); setExperiments(loadExperiments()); setMenuId(null); };

  return <section className="content-page page-container experiment-directory">
    <SectionTitle eyebrow="Practical work" title="Laboratory experiments" description="Open an overview or deep-link directly into one of the five guided sub-experiments." align="center" />
    <div className="directory-actions"><span>{experiments.length} experiments · five guided activities each</span><button type="button" onClick={reset}><RotateCcw size={14} /> Reset sample experiments</button></div>
    <div className="experiment-directory__grid">
      {experiments.map((experiment, index) => <article className="directory-card" style={{ "--card-delay": `${index * 55}ms` } as CSSProperties} key={experiment.id}>
        <ExperimentThumbnail variant={experiment.thumbnail} />
        <div className="directory-card__copy">
          <span className="experiment-label">EXP-{experiment.number}</span>
          <h2>{experiment.title}</h2>
          <p>{experiment.description}</p>
        </div>
        <div className="directory-card__menu">
          <button type="button" className="kebab-button" aria-label={`Actions for ${experiment.title}`} aria-expanded={menuId === experiment.id} onClick={() => setMenuId(menuId === experiment.id ? null : experiment.id)}><Ellipsis size={19} /></button>
          {menuId === experiment.id && <div className="card-menu"><button type="button" onClick={() => edit(experiment)}><Pencil size={14} /> Edit</button><button type="button" onClick={() => remove(experiment)}><Trash2 size={14} /> Delete</button></div>}
        </div>
        <div className="directory-card__links">
          <Link className="overview-button" to={`/experiments/${experiment.id}`}>Overview</Link>
          <div className="sub-link-list" aria-label={`${experiment.title} sub-experiments`}>
            {experiment.subExperiments.map((item) => <Link key={item.id} className="sub-link" title={item.title} aria-label={`${item.id}: ${item.title}`} to={`/experiments/${experiment.id}/${item.id}`}>{item.id}</Link>)}
          </div>
        </div>
      </article>)}
    </div>
  </section>;
}
