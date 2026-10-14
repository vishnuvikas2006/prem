import type { Thumbnail } from "../data/portfolio";

export function ExperimentThumbnail({ variant }: { variant: Thumbnail }) {
  const visual = {
    table: <><i /><i /><i /><i /><i /><i /></>,
    line: <svg viewBox="0 0 100 52" aria-hidden="true"><path d="M4 43 L25 31 L43 35 L65 12 L94 20" /><path className="faint" d="M4 47H96M4 7V47" /></svg>,
    dots: <svg viewBox="0 0 100 52" aria-hidden="true"><circle cx="20" cy="34" r="4" /><circle cx="34" cy="24" r="4" /><circle cx="48" cy="29" r="4" /><circle cx="64" cy="15" r="4" /><circle cx="80" cy="20" r="4" /></svg>,
    bars: <><b /><b /><b /><b /></>,
    tree: <svg viewBox="0 0 100 52" aria-hidden="true"><path d="M50 5V17M50 17L25 31M50 17L75 31M25 31L14 45M25 31L36 45M75 31L64 45M75 31L86 45" /><g><circle cx="50" cy="7" r="4" /><circle cx="25" cy="31" r="4" /><circle cx="75" cy="31" r="4" /></g></svg>,
    curve: <svg viewBox="0 0 100 52" aria-hidden="true"><path d="M4 38 C20 15, 30 46, 46 25 S75 8, 96 17" /><path className="faint" d="M4 47H96" /></svg>,
    cluster: <svg viewBox="0 0 100 52" aria-hidden="true"><g className="cluster-one"><circle cx="25" cy="19" r="4" /><circle cx="32" cy="27" r="4" /><circle cx="18" cy="31" r="4" /></g><g className="cluster-two"><circle cx="73" cy="18" r="4" /><circle cx="82" cy="25" r="4" /><circle cx="69" cy="33" r="4" /></g></svg>,
    text: <><em>DATA</em><em>LAB</em><em>CODE</em></>,
  }[variant];
  return <div className={`experiment-thumbnail experiment-thumbnail--${variant}`} aria-hidden="true">{visual}</div>;
}
