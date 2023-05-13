export interface User {
  name: string;
  presentation: string;
  avatar: string;
  importants: Important[];
  social: Social;
  zones: string[];
  career: Career[];
}

export interface Career {
  name: string;
  school: string;
}

export interface Important {
  time: number;
  description: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
  blog: string;
}
