import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoTailwindCss,
} from 'react-icons/bi';

import { SiStyledcomponents, SiNextdotjs } from 'react-icons/si';

export function icons(icon: string) {
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
  }
}
