import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FeatureCard } from "../components/FeatureCard";
import { ASSETS } from "../config/upload";
import { portfolioCards, studentDetails } from "../data/portfolio";

export function Home() {
  return (
    <>
      <section className="hero">
        <div
          className="hero__backdrop"
          style={{ backgroundImage: `url("${ASSETS.campusBackground}")` }}
          role="img"
          aria-label="Mohan Babu University campus"
        />
        <div className="hero__inner page-container">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              Student portfolio <span className="eyebrow-rule" />
            </p>
            <h1>R.Prem Kumar</h1>
            <p className="hero__motto">Data <i /> Analysis <i /> Insights <i /> Impact</p>
            <dl className="student-details">
              {studentDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div className="student-detail" key={detail.label}>
                    <Icon size={17} aria-hidden="true" />
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
          <aside className="student-card" aria-label="Student profile">
            <div className="student-card__photo-wrap">
              <img
                className="student-card__photo"
                src={ASSETS.profile}
                alt="Portrait of R. Prem Kumar"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
            </div>
            <p>R.Prem Kumar</p>
            <span className="student-card__signature" aria-hidden="true" />
          </aside>
        </div>
      </section>

      <div className="curved-divider curved-divider--hero" aria-hidden="true" />

      <section className="feature-section page-container" aria-labelledby="explore-title">
        <div className="feature-section__intro">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> Laboratory portfolio</span>
            <h2 id="explore-title">Explore the laboratory</h2>
          </div>
          <Link className="text-link" to="/experiments">
            Browse experiments <ArrowRight size={16} />
          </Link>
        </div>
        <div className="feature-grid">
          {portfolioCards.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </section>
      <div className="curved-divider curved-divider--footer" aria-hidden="true" />
    </>
  );
}
