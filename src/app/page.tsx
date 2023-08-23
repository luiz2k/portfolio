import s from './style.module.scss';

import AboutMe from '@/components/AboutMe/AboutMe';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contacts from '@/components/Contacts/Contacts';

async function getData() {
  const data = await fetch(
    'https://gist.githubusercontent.com/luiz2k/fc206c250b0e5567722773315588d511/raw/',
    { next: { revalidate: 3600 } },
  );

  return await data.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={s.main}>
      <AboutMe aboutMe={data.aboutMe} />

      <Skills skills={data.skills} />

      <Projects projects={data.projects} />

      <Contacts contacts={data.contacts} />
    </main>
  );
}
