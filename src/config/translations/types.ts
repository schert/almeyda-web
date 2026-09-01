export type Language = 'it' | 'en';

export interface TranslationDictionary {
  common: {
    brandName: string;
    brandSubtitle: string; // "Antico Bistrot Siciliano"
    city: string;
    citySubtitle: string;
    bookTable: string;
    explore: string;
    close: string;
    viewMenu: string;
    viewCocktailMenu: string;
    viewCafeteriaMenu: string;
    ingredients: string;
    required: string;
  };
  navbar: {
    home: string;
    carta: string;
    menu: string;
    cocktailBar: string;
    caffetteria: string;
    location: string;
    experiences: string;
    spazioArte: string;
    eventi: string;
    contattaci: string;
    book: string;
    openFrom: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string; // "Antico Bistrot Siciliano · Teatro Comunale di Siracusa"
    headline: string;
    tributeTitle: string;
    tributeParagraph1: string;
    tributeParagraph2: string;
    tributeParagraph3: string;
    tributeParagraph4: string;
    tributeParagraph5: string;
    bookCta: string;
    menuCta: string;
    scrollHint: string;
  };
  menuSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    exploreMenuBtn: string;
    featuredBadge: string;
    categories: {
      all: string;
      baguette: string;
      antipasti: string;
      primi: string;
      secondi: string;
      dessert: string;
      viniOli: string;
    };
    dishes: {
      id: string;
      name: string;
      category: 'baguette' | 'antipasti' | 'primi' | 'secondi' | 'dessert' | 'viniOli';
      description: string;
      price: string;
      image: string;
      notes?: string;
      featured?: boolean;
    }[];
  };
  cocktailSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    viewMenuBtn: string;
    categories: {
      all: string;
      signature: string;
      classici: string;
      analcolici: string;
    };
    cocktails: {
      id: string;
      name: string;
      category: 'signature' | 'classici' | 'analcolici';
      description: string;
      ingredients: string[];
      price: string;
      image: string;
      profile: string;
      featured: boolean;
    }[];
  };
  caffetteriaSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    categories: {
      all: string;
      caffe: string;
      pasticceria: string;
      infusi: string;
    };
    items: {
      title: string;
      category: 'caffe' | 'pasticceria' | 'infusi';
      description: string;
      price?: string;
      tag: string;
    }[];
    highlights: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  locationSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    theatreTitle: string;
    theatreDescription: string;
    addressTitle: string;
    hoursTitle: string;
    directionsBtn: string;
    openingHours: {
      days: string;
      hours: string;
      note?: string;
    }[];
    gallery: {
      title: string;
      caption: string;
      imageUrl: string;
    }[];
  };
  experiencesSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    bookBtn: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
      duration: string;
      tag: string;
      iconName: string;
    }[];
  };
  spazioArteSection: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    description1: string;
    description2: string;
    description3: string;
    ctaArtist: string;
    ctaWhatsapp: string;
    features: {
      title: string;
      description: string;
      tag: string;
      iconName: string;
    }[];
  };
  eventiSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaBtn: string;
    salaEventiTitle: string;
    salaEventiDescription: string;
    eventTypes: {
      title: string;
      description: string;
      iconName: string;
    }[];
  };
  contattaciSection: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    hoursLabel: string;
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectOptions: {
        tavolo: string;
        evento: string;
        arte: string;
        informazioni: string;
      };
      dateLabel: string;
      timeLabel: string;
      guestsLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
    };
    confirmation: {
      title: string;
      message: string;
      whatsappBtn: string;
      callBtn: string;
      newRequestBtn: string;
    };
  };
  footer: {
    tagline: string;
    subTagline: string;
    description: string;
    sectionsTitle: string;
    contactsTitle: string;
    hoursTitle: string;
    rights: string;
    backToTop: string;
  };
}

