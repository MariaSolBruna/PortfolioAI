
export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  gallery?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}