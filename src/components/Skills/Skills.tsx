'use client';

import s from './styles.module.scss';
import skills from '@/utils/skills';
import { icons } from '@/utils/icons';

import Tilt from 'react-parallax-tilt';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <h2 className={kalam.className}>Habilidades</h2>
        <div className={s.skills}>
          {skills.map((skill) => (
            <Tilt
              key={skill}
              className={s.skills__skill}
              scale={1.05}
              tiltReverse={true}
              glareEnable={true}
            >
              <div data-skill={skill}>{icons(skill)}</div>
              <p>{skill}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
