import s from './style.module.scss';

import AboutMe from '@/components/AboutMe/AboutMe';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contacts from '@/components/Contacts/Contacts';

export default function Home() {
  return (
    <main className={s.main}>
      <AboutMe />

      <Skills />

      <Projects />

      <Contacts />
    </main>
  );
}
