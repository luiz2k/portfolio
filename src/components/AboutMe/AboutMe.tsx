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
              Estudante de Análise e Desenvolvimento de Sistemas (ADS), e estou
              em busca da minha primeira oportunidade como desenvolvedor
              front-end. Sou uma pessoa focado, prestativo e tenho
              comprometimento com o trabalho. Gosto bastante de estudar e
              aprender sobre novas tecnologias, além de estar sempre atualizado
              com as novidades.
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
