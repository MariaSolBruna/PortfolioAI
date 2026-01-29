export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  gallery?: string[];
  layout?: 'grid' | 'sheet';
}

export interface NavItem {
  label: string;
  href: string;
}