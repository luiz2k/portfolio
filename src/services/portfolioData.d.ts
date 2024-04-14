export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: {
    front_end: string[] | null;
    back_end: string[] | null;
  };
  project_link: string;
  source_code: {
    front_end: string | null;
    back_end: string | null;
  };
}

export interface Data {
  about_me: {
    photograph: string;
    description: string;
    name: string;
    location: string;
  };
  skills: {
    main: string[];
    front_end: string[];
    back_end: string[];
    database: string[];
    lint: string[];
  };
  projects: {
    main: Project[];
    others: Project[];
  };
  contacts: {
    title: string;
    description: string;
    link: string | null;
  }[];
}
