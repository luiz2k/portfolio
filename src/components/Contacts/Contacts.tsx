import s from './styles.module.scss';

import Waves from '../Waves/Waves';

import { Kalam } from 'next/font/google';
import { contactIcons } from '@/utils/icons';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

type ContactsProps = {
  contacts: [
    {
      link: boolean;
      category: string;
      categoryInfo: string;
    },
  ];
};

export default function Contacts({ contacts }: ContactsProps) {
  return (
    <section id="contacts">
      <article>
        <h2 className={kalam.className}>Contatos</h2>
        <div className={s.contacts}>
          {contacts.map((contact) => (
            <div className={s.contacts__contact} key={contact.category}>
              <div>{contactIcons(contact.category)}</div>
              <div>
                <p>{contact.category}</p>
                {contact.link ? (
                  <div className={s.contacts__contact__link}>
                    <a
                      href={contact.categoryInfo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @luiz2k {contactIcons('Link')}
                    </a>
                  </div>
                ) : (
                  <p>{contact.categoryInfo}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </article>

      <Waves />
    </section>
  );
}
