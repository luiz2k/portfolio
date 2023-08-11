'use client';

import s from './styles.module.scss';
import skills from '@/utils/skills';
import { icons } from '@/utils/icons';

import Tilt from 'react-parallax-tilt';

import { useEffect, useState } from 'react';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

export default function Skills() {
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
          {skills.map((skill) => (
            <Tilt
              key={skill}
              className={s.skills__skill}
              scale={mobile ? 1 : 1.05}
              tiltReverse={mobile ? false : true}
              glareEnable={mobile === true ? false : true}
              tiltEnable={mobile ? false : true}
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
