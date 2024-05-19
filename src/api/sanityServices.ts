import { client } from "../../sanity/lib/client";

import type {
  GetAllSkills,
  GetContacts,
  GetMainSkills,
  Me,
  Projects,
} from "./sanityServices.d";

export const getMe = async (): Promise<Me> => {
  const query: string = `*[_type == 'me'] {
    _type,
    name,
    'imageUrl': photograph.asset -> url,
    about_me,
  }`;

  const me: Me[] = await client.fetch(query);

  return me[0];
};

export const getMainSkills = async (): Promise<GetMainSkills> => {
  const query: string = `*[_type == 'skill_categories' && category == 'Principais'] {
    _type,
    'main': skills[] -> {
      _id,
      name,
      'imageUrl': image.asset -> url
    }
  }`;

  const mainSkills: GetMainSkills[] = await client.fetch(query);

  return mainSkills[0];
};

export const getProjects = async (
  project: "main" | "others",
): Promise<Projects[]> => {
  const projectType: boolean = project === "main" ? true : false;

  const query: string = `*[_type == 'projects' && main_project == '${projectType}'] {
    _type,
    title,
    description,
    'imageUrl': image.asset -> url,
    'slug': slug.current,
    main_project,
    'links': {
      'visit': {
        'demo': links.visit.demo,
        'documentation': links.visit.documentation
      },
      'source_code': {
        'front_end': links.source_code.front_end,
        'back_end': links.source_code.back_end
      }
    },
    'technologies': {
      'front_end': technologies.front_end[] -> {
        _id,
        name,
        'imageUrl': image.asset -> url
      },
      'back_end': technologies.back_end[] -> {
        _id,
        name,
        'imageUrl': image.asset -> url
      }
    },
  }`;

  const projects: Projects[] = await client.fetch(query);

  return projects;
};

export const getAllSkills = async (): Promise<GetAllSkills[]> => {
  const query: string = `*[_type == 'skill_categories' && category != 'Principais'] | order(position asc) {
    _type,
    category,
    skills[] -> {
      _id,
      name,
      'imageUrl': image.asset -> url
    }
  }`;

  const skills: GetAllSkills[] = await client.fetch(query);

  return skills;
};

export const getContacts = async (): Promise<GetContacts[]> => {
  const query: string = `*[_type == 'contacts'] {
    _type,
    title,
    description,
    'imageUrl': image.asset -> url,
    has_url,
    url
  }`;

  const skills: GetContacts[] = await client.fetch(query);

  return skills;
};
