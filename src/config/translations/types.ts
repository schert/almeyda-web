export type Language = 'it' | 'en';

export interface TranslationDictionary {
  common: {
    brandName: string;
    city: string;
    citySubtitle: string;
    bookTable: string;
    explore: string;
    close: string;
    viewCocktailMenu: string;
    viewDiningMenu: string;
    ingredients: string;
    required: string;
  };
  navbar: {
    home: string;
    cocktail: string;
    dining: string;
    atmosphere: string;
    gallery: string;
    siracusa: string;
    book: string;
    digitalCocktailMenu: string;
    digitalDiningMenu: string;
    openFrom: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    bookCta: string;
    menuCta: string;
    scrollHint: string;
  };
  intro: {
    philosophyBadge: string;
    statementLine1: string;
    statementLine2: string;
    description: string;
  };
  cocktailSection: {
    badge: string;
    title: string;
    subtitle: string;
    viewMenuBtn: string;
  };
  diningSection: {
    badge: string;
    title: string;
    subtitle: string;
    exploreMenuBtn: string;
    featuredBadge: string;
    categories: {
      antipasti: string;
      primi: string;
      secondi: string;
      dessert: string;
    };
  };
  atmosphereSection: {
    badge: string;
    title: string;
    description: string;
    photos: {
      title: string;
      subtitle: string;
    }[];
  };
  experienceSection: {
    exploreBtn: string;
    pillars: {
      title: string;
      subtitle: string;
      description: string;
      iconName: string;
    }[];
  };
  gallerySection: {
    badge: string;
    title: string;
    subtitle: string;
    clickToEnlarge: string;
    modalTitle: string;
    items: {
      id: string;
      title: string;
      category: string;
      caption: string;
      imageUrl: string;
      aspect?: 'landscape' | 'portrait' | 'square';
    }[];
  };
  reservationSection: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      experienceTypeLabel: string;
      experienceTypes: {
        aperitivo: { title: string; desc: string };
        cena: { title: string; desc: string };
        dopocena: { title: string; desc: string };
      };
      areaLabel: string;
      areas: {
        cocktail_bar: string;
        dining_room: string;
        dehors: string;
      };
      dateLabel: string;
      timeLabel: string;
      guestsLabel: string;
      guestsOption: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
      submitBtn: string;
    };
    confirmation: {
      badge: string;
      title: string;
      greeting: string;
      summaryNote: string;
      fastTrackBadge: string;
      whatsappBtn: string;
      callBtn: string;
      newRequestBtn: string;
    };
  };
  locationSection: {
    badge: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    hoursTitle: string;
    directionsBtn: string;
    openingHours: {
      days: string;
      hours: string;
      note?: string;
    }[];
  };
  footer: {
    tagline: string;
    description: string;
    exploreTitle: string;
    contactsTitle: string;
    hoursTitle: string;
    rights: string;
    backToTop: string;
  };
  cocktailModal: {
    badge: string;
    title: string;
    searchPlaceholder: string;
    filters: {
      all: string;
      signature: string;
      classic: string;
      twist: string;
      mocktail: string;
    };
    noResults: string;
    bookTable: string;
  };
  diningModal: {
    badge: string;
    title: string;
    filters: {
      all: string;
      antipasti: string;
      primi: string;
      secondi: string;
      dessert: string;
    };
    noResults: string;
    bookTable: string;
  };
  cocktails: {
    id: string;
    name: string;
    category: 'signature' | 'classic' | 'twist' | 'mocktail';
    description: string;
    ingredients: string[];
    price: string;
    image: string;
    profile: string;
    featured: boolean;
  }[];
  dishes: {
    id: string;
    name: string;
    category: 'antipasti' | 'primi' | 'secondi' | 'dessert';
    description: string;
    price: string;
    image: string;
    dietary: string[];
    featured: boolean;
  }[];
}
