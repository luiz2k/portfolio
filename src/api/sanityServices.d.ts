export interface Projects {
  _type: string;
  title: string;
  imageUrl: string;
  description: {
    children: {
      _type: string;
      marks: string[];
      text: string;
      _key: string;
    }[];
    _type: string;
    style: string;
    _key: string;
  }[];
  slug: string;
  links: {
    visit: {
      demo: string;
      documentation: string;
    };
    source_code: {
      front_end: string;
      back_end: string;
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
  importance: string;
}

export interface Me {
  _type: string;
  name: string;
  imageUrl: string;
  about_me: BlockContent[];
}

export interface GetMainSkills {
  _type: string;
  main: {
    _id: string;
    name: string;
    imageUrl: string;
  }[];
}

export interface GetAllSkills {
  _type: string;
  category: string;
  skills: {
    _id: string;
    name: string;
    imageUrl: string;
  }[];
}

export interface GetContacts {
  _type: string;
  title: string;
  description: string;
  imageUrl: string;
  has_url: boolean | null;
  url: string;
}
