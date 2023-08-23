import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLink,
} from 'react-icons/bi';

import { AiFillPhone, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { SiStyledcomponents, SiNextdotjs } from 'react-icons/si';

export function skillIcons(icon: string) {
  switch (icon) {
    case 'HTML':
      return <BiLogoHtml5 fill="#f06529" />;
    case 'CSS':
      return <BiLogoCss3 fill="#2965f1" />;
    case 'JavaScript':
      return <BiLogoJavascript fill="#e8d44d" />;
    case 'TypeScript':
      return <BiLogoTypescript fill="#3178C6" />;
    case 'React.JS':
      return <BiLogoReact fill="#61DBFB" />;
    case 'Next.JS':
      return <SiNextdotjs fill="#000000" />;
    case 'Sass':
      return <BiLogoSass fill="#cc6699" />;
    case 'Bootstrap':
      return <BiLogoBootstrap fill="#563d7c" />;
    case 'Styled Components':
      return <SiStyledcomponents fill="#a96f52" />;
    case 'Tailwind CSS':
      return <BiLogoTailwindCss color="#38bdf8" />;
    case 'E-Mail':
      return <MdEmail />;
    case 'Telefone':
      return <AiFillPhone />;
    case 'LinkedIn':
      return <AiFillLinkedin />;
    case 'GitHub':
      return <AiOutlineGithub />;
  }
}

export function contactIcons(icon: string) {
  switch (icon) {
    case 'E-Mail':
      return <MdEmail />;
    case 'Telefone':
      return <AiFillPhone />;
    case 'LinkedIn':
      return <AiFillLinkedin />;
    case 'GitHub':
      return <AiOutlineGithub />;
    case 'Link':
      return <BiLink />;
  }
}
