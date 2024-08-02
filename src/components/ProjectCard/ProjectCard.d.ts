import type { Projects } from "../../api/sanityServices.d";

export interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: Projects["description"];
  links: {
    visit: {
      demo: string;
      documentation: string;
    };
    source_code: {
      front_end: string;
      back_end: string;
      monorepo: string;
    };
  };
  technologies: {
    front_end: {
      _id: string;
      name: string;
      imageUrl: string;
    }[];
    back_end: {
      _id: string;
      name: string;
      imageUrl: string;
    }[];
  };
}
