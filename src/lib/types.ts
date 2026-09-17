export interface Bike {
  name: string;
  image: string;
}

export interface Celebrity {
  name: string;
  image: string;
  age: number;
  achievements: number;
  victoryFieldName: string;
  country: string;
  wikipediaLink?: string;
}

export interface Sport {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  speeds: string;
  terrain: string;
  equipment: string[];
  bikeDescription: string;
  bikes: Bike[];
  celebrities: Celebrity[];
}

export interface SportSummary {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  bikeCount: number;
  celebrityCount: number;
}
