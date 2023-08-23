'use client';

import s from './styles.module.scss';

import { skillIcons } from '@/utils/icons';

import Tilt from 'react-parallax-tilt';

import { useEffect, useState } from 'react';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

type SkillsProps = {
  skills: {
    map(
      arg0: (skill: string) => import('react').JSX.Element,
    ): import('react').ReactNode;
    skill: string;
  };
};

export default function Skills({ skills }: SkillsProps) {
  const [mobile, setMobile] = useState<boolean>(true);

  useEffect(() => {
    function device() {
      setMobile(window.matchMedia('(max-width: 1024px)').matches);
    }

    device();

    window.addEventListener('resize', device);
  }, []);

  return (
    <section id="skills">
      <div>
        <h2 className={kalam.className}>Habilidades</h2>
        <div className={s.skills}>
          {skills.map((skill: string) => (
            <Tilt
              key={skill}
              className={s.skills__skill}
              scale={mobile ? 1 : 1.05}
              tiltReverse={mobile ? false : true}
              glareEnable={mobile === true ? false : true}
              tiltEnable={mobile ? false : true}
            >
              <div data-skill={skill}>{skillIcons(skill)}</div>
              <p>{skill}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
