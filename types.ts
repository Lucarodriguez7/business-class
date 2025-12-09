import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  logoUrl?: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}