export interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  technologies: {
    front_end: string[] | null;
    back_end: string[] | null;
  };
  source_code: {
    front_end: string | null;
    back_end: string | null;
  };
  project_link: string;
}
