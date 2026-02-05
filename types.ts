export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  specs: string[];
}

export interface Vacancy {
  id: string;
  title: string;
  salary: string;
  experience: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  schedule: string;
  coords: { lat: number; lng: number };
}