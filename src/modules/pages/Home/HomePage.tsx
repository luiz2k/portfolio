import { AboutMe } from "./components/AboutMe/AboutMe";
import { Introductory } from "./components/Introductory/Introductory";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Skills } from "./components/Skills/Skills";

export function HomePage() {
  return (
    <section className="grid gap-10">
      <Introductory />

      <AboutMe />

      <Skills />

      <Services />

      <Projects />
    </section>
  );
}
