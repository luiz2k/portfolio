'use client';

import s from './styles.module.scss';

import Link from 'next/link';

import { BsPerson } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { IoLibraryOutline } from 'react-icons/io5';
import { TbPhoneCall } from 'react-icons/tb';

import { MouseEvent } from 'react';

function handleAnchorClick(event: MouseEvent) {
  event.preventDefault();

  const target = event.currentTarget;
  const targetAttribute = target.getAttribute('href') as string;
  const section = document.querySelector(targetAttribute) as HTMLElement;

  if (window.matchMedia('(min-width:768px)').matches) {
    return window.scroll({
      top: section.offsetTop - 60,
      behavior: 'smooth',
    });
  }

  window.scroll({
    top: section.offsetTop,
    behavior: 'smooth',
  });
}

export default function Header() {
  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <ul>
          <li>
            <Link href={'#aboutMe'} onClick={handleAnchorClick}>
              <BsPerson /> Sobre-Mim
            </Link>
          </li>

          <li>
            <Link href={'#skills'} onClick={handleAnchorClick}>
              <BiBrain /> Habilidades
            </Link>
          </li>

          <li>
            <Link href={'#projects'} onClick={handleAnchorClick}>
              <IoLibraryOutline /> Projetos
            </Link>
          </li>

          <li>
            <Link href={'#contacts'} onClick={handleAnchorClick}>
              <TbPhoneCall /> Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
