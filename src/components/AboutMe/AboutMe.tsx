'use client';

import s from './styles.module.scss';

import { Kalam, Courgette } from 'next/font/google';

const kalam = Kalam({ subsets: ['latin'], weight: '700' });
const courgette = Courgette({ subsets: ['latin'], weight: '400' });

export default function AboutMe() {
  return (
    <section id="aboutMe">
      <div>
        <h2 className={kalam.className}>Sobre-Mim</h2>
        <div className={s.aboutMe}>
          <div className={s.aboutMe__myPicture}>
            <div className="imageBG"></div>
          </div>

          <div className={s.aboutMe__Text}>
            <h3 className={courgette.className}>
              Desenvolvedor <span>Front-End</span>
            </h3>
            <p></p>
            <hr />
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, em busca da
              primeira oportunidade como desenvolvedor front-end. Sou focado e
              prestativo.
            </p>
            <hr />
            <div>
              <p>
                <span>Nome:</span> Luiz Teles
              </p>
              <p>
                <span>Idade:</span> 23 Anos
              </p>
              <p>
                <span>Localização:</span> Mauá, SP
              </p>
              <p>
                <span>Telefone:</span> (11) 96434-9354
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
