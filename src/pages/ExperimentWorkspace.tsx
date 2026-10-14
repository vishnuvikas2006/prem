import { ArrowLeft, Download, FileText, Layers3 } from "lucide-react";
import { Link, NavLink, useParams } from "react-router-dom";
import { CodeWorkspace } from "../components/CodeWorkspace";
import { loadExperiments } from "../data/portfolio";

export function ExperimentWorkspace() {
  const { expId, subId } = useParams<{ expId: string; subId?: string }>();
  const experiment = loadExperiments().find((item) => item.id === expId);
  if (!experiment) return <section className="content-page page-container not-found"><span className="eyebrow">Not found</span><h1>This experiment is not available.</h1><Link className="button button--primary" to="/experiments">All experiments</Link></section>;

  const current = subId ? experiment.subExperiments.find((item) => item.id === subId.toUpperCase()) : undefined;
  const title = current ? `${current.id}. ${current.title}` : "Overview";
  const aim = current?.aim ?? experiment.overview;
  const procedure = current?.procedure ?? ["Review the experiment overview and selected tools.", "Open any A–E activity from the sidebar.", "Use the starter code to rehearse the workflow."];
  const code = current?.code ?? experiment.starterCode;
  const output = current?.output ?? experiment.expectedOutput;

  return <section className="content-page page-container workspace-page">
    <Link className="back-link" to="/experiments"><ArrowLeft size={16} /> All experiments</Link>
    <div className="workspace-layout">
      <main className="workspace-main">
        <header className="workspace-heading">
          <span className="experiment-label">EXP-{experiment.number} · {experiment.difficulty}</span>
          <h1>{experiment.title}</h1>
          <p>{experiment.description}</p>
          <div className="workspace-tools"><span><Layers3 size={15} /> {experiment.tools.join(" · ")}</span>{experiment.sourceFile && <a href={`/assets/experiments/${experiment.sourceFile}`} download={experiment.sourceFile}><Download size={14} /> Download source</a>}</div>
        </header>
        <article className="workspace-brief">
          <span className="brief-kicker">{current ? "Aim" : "Overview"}</span>
          <h2>{title}</h2>
          <p>{aim}</p>
          <ol>{procedure.map((step) => <li key={step}>{step}</li>)}</ol>
        </article>
        <CodeWorkspace initialCode={code} expectedOutput={output} language={experiment.language} workspaceKey={`${experiment.id}-${current?.id ?? "overview"}`} />
      </main>
      <aside className="subexperiment-sidebar" aria-label="Sub-experiment navigation">
        <div className="sidebar-heading"><FileText size={16} /><span>Activities</span><small>A–E</small></div>
        <NavLink end to={`/experiments/${experiment.id}`} className={({ isActive }) => `sidebar-overview${isActive ? " is-active" : ""}`}>Overview</NavLink>
        <div className="sidebar-steps">
          {experiment.subExperiments.map((item) => <NavLink key={item.id} to={`/experiments/${experiment.id}/${item.id}`} title={item.title} aria-label={`${item.id}: ${item.title}`} className={({ isActive }) => `sidebar-step${isActive ? " is-active" : ""}`}><b>{item.id}</b><span>{item.title}</span></NavLink>)}
        </div>
      </aside>
    </div>
  </section>;
}
