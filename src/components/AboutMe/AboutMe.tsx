import s from './styles.module.scss';

import { Kalam, Courgette } from 'next/font/google';

const kalam = Kalam({ subsets: ['latin'], weight: '700' });
const courgette = Courgette({ subsets: ['latin'], weight: '400' });

type aboutMeProps = {
  aboutMe: {
    photograph: string;
    description: string;
    name: string;
    age: string;
    location: string;
    phone: string;
  };
};

function getAge(date: string): number {
  const dateOfBirth: Date = new Date(date);
  const currentDate: Date = new Date();

  const differenceInYears: number =
    currentDate.getTime() - dateOfBirth.getTime();

  const TOTAL_MILLISECONDS_IN_A_YEAR: number = 1000 * 60 * 60 * 24 * 365.25;

  const myAge: number = Math.floor(
    differenceInYears / TOTAL_MILLISECONDS_IN_A_YEAR,
  );

  return myAge;
}

export default function AboutMe({ aboutMe }: aboutMeProps) {
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
            <p>{aboutMe.description}</p>
            <hr />
            <div>
              <p>
                <span>Nome:</span> {aboutMe.name}
              </p>
              <p>
                <span>Idade:</span> {getAge('2000-03-17')}
              </p>
              <p>
                <span>Localização:</span> {aboutMe.location}
              </p>
              <p>
                <span>Telefone:</span> {aboutMe.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
