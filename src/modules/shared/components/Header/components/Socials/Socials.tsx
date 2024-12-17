import { Github, Linkedin } from "lucide-react";

export function Socials() {
  return (
    <div className="flex gap-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acessar Github"
        href="http://github.com/luiz2k/"
        className="hover:text-accent"
      >
        <Github size="24" strokeWidth="1.5" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acessar Linkedin"
        href="https://www.linkedin.com/in/luiz2k/"
        className="hover:text-accent"
      >
        <Linkedin size="24" strokeWidth="1.5" />
      </a>
    </div>
  );
}
