export interface Cocktail {
  id: string;
  name: string;
  category: 'signature' | 'classic' | 'twist' | 'mocktail';
  description: string;
  ingredients: string[];
  price: string;
  image?: string;
  profile?: string; // e.g. "Aromatico & Speziato", "Fresco & Citrico"
  featured?: boolean;
}

export interface Dish {
  id: string;
  name: string;
  category: 'antipasti' | 'primi' | 'secondi' | 'dessert';
  description: string;
  price: string;
  image?: string;
  dietary?: string[]; // e.g. ["Pescato Locale", "Gluten Free Friendly"]
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  caption?: string;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  city: string;
  heroHeadline: string;
  heroDescription: string;
  introHeading1: string;
  introHeading2: string;
  introText: string;
  
  // Contacts & Location (Easily customizable placeholders)
  address: string;
  addressNote: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  reservationUrl: string;
  
  openingHours: {
    days: string;
    hours: string;
    note?: string;
  }[];

  experiences: {
    title: string;
    subtitle: string;
    description: string;
    iconName: string;
  }[];
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'cocktail_bar' | 'dining_room' | 'dehors';
  experienceType: 'aperitivo' | 'cena' | 'dopocena';
  notes?: string;
}
