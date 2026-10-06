import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="not-found page-container">
      <span className="eyebrow">Page not found</span>
      <h1>This page isn’t in the lab notebook.</h1>
      <Link className="button button--primary" to="/">Return home</Link>
    </section>
  );
}
