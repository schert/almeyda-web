export type Language = 'it' | 'en';

export type ContactSubject = 'tavolo' | 'esperienze' | 'evento' | 'arte' | 'store' | 'informazioni';

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
    about: string;
    carta: string;
    menu: string;
    cocktailBar: string;
    caffetteria: string;
    location: string;
    experiences: string;
    spazioArte: string;
    eventi: string;
    store: string;
    contattaci: string;
    book: string;
    openFrom: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string; // "Antico Bistrot Siciliano · Teatro Comunale di Siracusa"
    headline: string;
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
    visitCta: string;
    gallery: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
      highlight?: string;
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
    tributeText: string;
    roomsTitle: string;
    roomsSubtitle: string;
    rooms: {
      name: string;
      description: string;
      iconName: string;
      tag: string;
    }[];
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
  aboutSection: {
    badge: string;
    title: string;
    subtitle: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    ideaTitle: string;
    ideaSubtitle: string;
    ideaQuote: string;
    ideaPoints: {
      title: string;
      description: string;
      iconName: string;
    }[];
    offerTitle: string;
    offerSubtitle: string;
    offerText1: string;
    offerText2: string;
    staffTitle: string;
    staffSubtitle: string;
    staffQuote: string;
    staffMembers: {
      role: string;
      name: string;
      iconName: string;
      department: string;
    }[];
    languagesLabel: string;
    languages: string[];
  };
  experiencesSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    offerAtmosphere: string;
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
  storeSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    inStoreNotice: string;
    ctaWhatsapp: string;
    ctaInquire: string;
    categories: {
      all: string;
      oli: string;
      dispensa: string;
      vini: string;
      ceramiche: string;
    };
    products: {
      id: string;
      title: string;
      category: 'oli' | 'dispensa' | 'vini' | 'ceramiche';
      description: string;
      origin: string;
      tag: string;
      imageUrl: string;
      details?: string;
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
    cateringLogisticaTitle: string;
    cateringLogisticaDescription: string;
    tourOperatorTitle: string;
    tourOperatorDescription: string;
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
        esperienze: string;
        evento: string;
        arte: string;
        store: string;
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

