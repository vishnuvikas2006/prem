import { ArrowRight } from "lucide-react";
import type { PortfolioCard } from "../data/portfolio";
import { Link } from "react-router-dom";

export function FeatureCard({ card }: { card: PortfolioCard }) {
  const Icon = card.icon;

  return (
    <Link className="feature-card" to={card.route}>
      <span className="feature-icon">
        <Icon size={28} strokeWidth={1.55} />
      </span>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <span className="feature-arrow" aria-hidden="true">
        <ArrowRight size={19} />
      </span>
    </Link>
  );
}
