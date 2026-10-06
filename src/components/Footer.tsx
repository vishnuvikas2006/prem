import { Github, Linkedin, MoveUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>Data Science Laboratory <span>·</span> Student Portfolio</p>
        <div className="social-links">
          <a
            className="social-link"
            href={SITE_CONFIG.githubUrl}
            aria-label="GitHub profile"
          >
            <Github size={17} />
            <span>GitHub</span>
            <MoveUpRight size={12} />
          </a>
          <a
            className="social-link"
            href={SITE_CONFIG.linkedinUrl}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={17} />
            <span>LinkedIn</span>
            <MoveUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
