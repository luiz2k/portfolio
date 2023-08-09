'use client';

import s from './styles.module.scss';

import { AiFillPhone, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import Waves from '../Waves/Waves';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

export default function Contacts() {
  return (
    <section id="contacts">
      <div>
        <h2 className={kalam.className}>Contatos</h2>
        <div className={s.contacts}>
          <div className={s.contacts__contact}>
            <div>
              <MdEmail />
            </div>

            <div>
              <p>E-Mail</p>
              <p>luizteles934@gmail.com</p>
            </div>
          </div>

          <div className={s.contacts__contact}>
            <div>
              <AiFillPhone />
            </div>

            <div>
              <p>Telefone</p>
              <p>(11) 96434-9354</p>
            </div>
          </div>

          <div className={s.contacts__contact}>
            <div>
              <AiFillLinkedin />
            </div>

            <div>
              <p>Linkedin</p>
              <div className={s.contacts__contact__link}>
                <a
                  href="https://linkedin.com/in/luiz2k"
                  target="_blank"
                  rel="noreferrer"
                >
                  @luiz2k
                  <BiLink />
                </a>
              </div>
            </div>
          </div>

          <div className={s.contacts__contact}>
            <div>
              <AiOutlineGithub />
            </div>

            <div>
              <p>GitHub</p>
              <div className={s.contacts__contact__link}>
                <a
                  href="https://github.com/luiz2k"
                  target="_blank"
                  rel="noreferrer"
                >
                  @luiz2k
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Waves />
    </section>
  );
}
