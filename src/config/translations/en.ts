import { TranslationDictionary } from './types';

export const enTranslations: TranslationDictionary = {
  common: {
    brandName: "ALMEYDA",
    city: "Syracuse",
    citySubtitle: "Syracuse, Sicily",
    bookTable: "BOOK A TABLE",
    explore: "Explore",
    close: "Close",
    viewCocktailMenu: "DIGITAL COCKTAIL MENU",
    viewDiningMenu: "DIGITAL DINING MENU",
    ingredients: "Ingredients",
    required: "required"
  },
  navbar: {
    home: "HOME",
    cocktail: "COCKTAIL",
    dining: "DINING",
    atmosphere: "ATMOSPHERE",
    gallery: "GALLERY",
    siracusa: "LOCATION",
    book: "Reserve",
    digitalCocktailMenu: "→ DIGITAL COCKTAIL LIST",
    digitalDiningMenu: "→ DIGITAL DINING MENU",
    openFrom: "From 6:30 PM",
    openMenu: "Open navigation menu",
    closeMenu: "Close menu"
  },
  hero: {
    badge: "Cocktail · Dining · Syracuse",
    headline: "Where bespoke mixology, cuisine, and atmosphere converge.",
    description: "A contemporary and refined sanctuary in the heart of Syracuse, Sicily. From artisanal mixology to sharing cuisine, crafted to experience the night at the right tempo.",
    bookCta: "Reserve a Table",
    menuCta: "Discover Menu",
    scrollHint: "Scroll to explore"
  },
  intro: {
    philosophyBadge: "Philosophy",
    statementLine1: "More than just",
    statementLine2: "dinner.",
    description: "Almeyda is a space conceived to embrace the evening with elegance: from signature cocktails to refined dishes, from the first aperitivo to the late-night conversation."
  },
  cocktailSection: {
    badge: "Mixology",
    title: "Cocktails",
    subtitle: "Classics, signatures, and handcrafted modern interpretations.",
    viewMenuBtn: "View cocktail list"
  },
  diningSection: {
    badge: "Contemporary Cuisine",
    title: "Dining",
    subtitle: "Dishes thoughtfully curated to be shared and savored with time.",
    exploreMenuBtn: "Explore the Menu",
    featuredBadge: "Featured",
    categories: {
      antipasti: "Starters",
      primi: "First Courses",
      secondi: "Mains",
      dessert: "Desserts"
    }
  },
  atmosphereSection: {
    badge: "Lights & Sounds",
    title: "The Evening at Almeyda",
    description: "Warm amber glow, signature sips, inspired dining, curated sounds, and timeless conviviality.",
    photos: [
      {
        title: "Warm Glow & Bar Counter",
        subtitle: "Mixology & Design"
      },
      {
        title: "Intimate Dining Spaces",
        subtitle: "Dining & Conviviality"
      },
      {
        title: "Details & Glassware",
        subtitle: "Fine Wine & Rare Spirits"
      },
      {
        title: "The Kitchen in Motion",
        subtitle: "Taste & Creativity"
      }
    ]
  },
  experienceSection: {
    exploreBtn: "Explore",
    pillars: [
      {
        title: "COCKTAILS",
        subtitle: "Bespoke Mixology",
        description: "Signature cocktails and reimagined classics featuring rare spirits, Sicilian botanicals, and artisanal house-made cordials.",
        iconName: "Wine"
      },
      {
        title: "DINING",
        subtitle: "Contemporary Cuisine",
        description: "A culinary journey designed to accompany your evening, featuring Mediterranean-inspired courses to share and savor at leisure.",
        iconName: "Utensils"
      },
      {
        title: "ATMOSPHERE",
        subtitle: "Time & Conviviality",
        description: "An intimate ambiance to linger longer, surrounded by dim lighting, understated aesthetic design, and an evocative soundtrack.",
        iconName: "Sparkles"
      }
    ]
  },
  gallerySection: {
    badge: "Visual Story",
    title: "Gallery",
    subtitle: "Snapshots of mixology, cuisine, golden reflections, and nocturnal details.",
    clickToEnlarge: "Click to enlarge",
    modalTitle: "ALMEYDA GALLERY",
    items: [
      {
        id: "gal-1",
        title: "The Mixology Counter",
        category: "Cocktail Bar",
        imageUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "The cocktail station: dark marble, selected spirits, and soft ambient glow."
      },
      {
        id: "gal-2",
        title: "Signature Pouring",
        category: "Mixology",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "Meticulous precision in every measure, botanical essence, and garnish."
      },
      {
        id: "gal-3",
        title: "Evening Table Ambiance",
        category: "Ambiance",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "Contemporary intimacy, candlelight settings, and polished brass accents."
      },
      {
        id: "gal-4",
        title: "Contemporary Dining Detail",
        category: "Cuisine",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "Plates created to celebrate prime local Mediterranean ingredients."
      },
      {
        id: "gal-5",
        title: "Glassware & Golden Reflections",
        category: "Details",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "Warm reflections and delicate transparencies framing nocturnal conversations."
      },
      {
        id: "gal-6",
        title: "Syracuse Night Scene",
        category: "Syracuse",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "The charm of Sicilian limestone and starry night skies in Syracuse."
      }
    ]
  },
  reservationSection: {
    badge: "Hospitality & Experience",
    title: "Reserve Your Table",
    subtitle: "We recommend booking in advance to ensure the best table arrangement and enjoy the Almeyda experience with ease.",
    form: {
      experienceTypeLabel: "Type of Experience",
      experienceTypes: {
        aperitivo: {
          title: "Aperitivo",
          desc: "Cocktails & Chef's bites"
        },
        cena: {
          title: "Dinner & Dining",
          desc: "Full gastronomic tasting"
        },
        dopocena: {
          title: "After Dinner",
          desc: "Mixology & evening mood"
        }
      },
      areaLabel: "Preferred Seating Area",
      areas: {
        cocktail_bar: "Cocktail Bar & Counter",
        dining_room: "Intimate Dining Room",
        dehors: "Summer Dehors / Terrace"
      },
      dateLabel: "Preferred Date",
      timeLabel: "Time",
      guestsLabel: "Number of Guests",
      guestsOption: "Guests",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Contact Email",
      emailPlaceholder: "john.doe@email.com",
      notesLabel: "Dietary Requirements or Special Requests",
      notesPlaceholder: "e.g. quiet corner, lactose intolerance, anniversary...",
      submitBtn: "Confirm Reservation"
    },
    confirmation: {
      badge: "Request Received",
      title: "Thank you, Dear Guest.",
      greeting: "We have received your reservation request for",
      summaryNote: "We will check table availability and send you a confirmation message to your contact details shortly.",
      fastTrackBadge: "Instant WhatsApp Fast-Track",
      whatsappBtn: "Send Details via WhatsApp",
      callBtn: "Call the Venue",
      newRequestBtn: "New Request"
    }
  },
  locationSection: {
    badge: "Our Location",
    title: "Syracuse",
    subtitle: "In the vibrant heart of the Syracuse evening scene.",
    addressTitle: "Address & Contacts",
    hoursTitle: "Opening Hours",
    directionsBtn: "Open Directions on Google Maps",
    openingHours: [
      { days: "Tuesday — Thursday", hours: "6:30 PM — 1:30 AM", note: "Aperitivo, Dining & After Dinner" },
      { days: "Friday — Saturday", hours: "6:30 PM — 2:30 AM", note: "Aperitivo, Dining & Cocktail Bar" },
      { days: "Sunday", hours: "6:30 PM — 1:30 AM", note: "Aperitivo & Evening Dining" },
      { days: "Monday", hours: "Closed", note: "Weekly Rest Day" }
    ]
  },
  footer: {
    tagline: "Cocktail · Dining · Syracuse",
    description: "An atmospheric haven in the heart of Syracuse where bespoke mixology and inspired gastronomy unite into an unforgettable night.",
    exploreTitle: "Explore",
    contactsTitle: "Contacts",
    hoursTitle: "Hours",
    rights: "All rights reserved. Dedicated to Almeyda Syracuse.",
    backToTop: "Back to Top"
  },
  cocktailModal: {
    badge: "Almeyda Syracuse · Bar Menu",
    title: "Cocktail & Mixology List",
    searchPlaceholder: "Search cocktails, spirits or ingredients...",
    filters: {
      all: "All",
      signature: "Signature",
      classic: "Classics",
      twist: "Twists",
      mocktail: "0% Alcohol"
    },
    noResults: "No cocktails match your search query.",
    bookTable: "Reserve to Taste"
  },
  diningModal: {
    badge: "Almeyda Syracuse · Cuisine",
    title: "Dining Menu & Courses",
    filters: {
      all: "Full Menu",
      antipasti: "Starters",
      primi: "First Courses",
      secondi: "Main Courses",
      dessert: "Desserts"
    },
    noResults: "No dishes found in this category.",
    bookTable: "Reserve Your Table"
  },
  cocktails: [
    {
      id: "sig-negroni",
      name: "SIGNATURE NEGRONI",
      category: "signature",
      description: "Wild thyme-infused gin, reserve sweet vermouth, artisanal Italian bitter, and olive wood smoke aroma.",
      ingredients: ["Botanical Gin", "Sweet Vermouth Riserva", "Artisanal Bitter", "Bitter Orange Peel"],
      price: "€ 12",
      profile: "Complex & Aromatic",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "almeyda-sour",
      name: "ALMEYDA SOUR",
      category: "signature",
      description: "Aged bourbon, Sicilian citrus reduction, unrefined cane sugar, organic egg white, and aromatic bitters.",
      ingredients: ["Bourbon Whiskey", "Sicilian Citrus", "Raw Cane Sugar", "Aromatic Bitters"],
      price: "€ 13",
      profile: "Silky & Citrusy",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "paloma",
      name: "SYRACUSE PALOMA",
      category: "twist",
      description: "100% Blue Agave Tequila, clarified ruby grapefruit cordial, fresh lime juice, and oregano saline soda.",
      ingredients: ["Tequila Blanco", "Ruby Grapefruit", "Fresh Lime", "Saline Soda"],
      price: "€ 12",
      profile: "Fresh & Mineral",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "espresso-martini",
      name: "ESPRESSO MARTINI NOIR",
      category: "classic",
      description: "Premium vodka, cold brew extraction of wood-roasted coffee, artisanal coffee liqueur, and grated tonka bean.",
      ingredients: ["Premium Vodka", "Cold Brew Coffee", "Craft Coffee Liqueur", "Tonka Bean"],
      price: "€ 12",
      profile: "Rich & Velvety",
      image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "sicilian-boulevardier",
      name: "ETNA BOULEVARDIER",
      category: "twist",
      description: "Rye whiskey, Sicilian herbal amaro, dry vermouth, and Modica chocolate bitter tincture.",
      ingredients: ["Rye Whiskey", "Sicilian Amaro", "Dry Vermouth", "Cacao Bitters"],
      price: "€ 13",
      profile: "Spicy & Deep",
      image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "mediterranean-gin-tonic",
      name: "MEDITERRANEAN TONIC",
      category: "classic",
      description: "Distilled gin with Sicilian lemon and caper leaves, premium bergamot tonic water, and fresh rosemary sprig.",
      ingredients: ["Mediterranean Gin", "Bergamot Tonic", "Rosemary", "Juniper"],
      price: "€ 11",
      profile: "Botanical & Crisp",
      image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "botanical-zeroproof",
      name: "SYRACUSE GARDEN (0% ABV)",
      category: "mocktail",
      description: "Non-alcoholic botanical distillate, elderflower cordial, clarified cucumber essence, and ginger beer float.",
      ingredients: ["0.0% Distillate", "Elderflower", "Cucumber", "Ginger Beer"],
      price: "€ 9",
      profile: "Zero-Proof & Floral",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "smoked-old-fashioned",
      name: "SMOKED OLD FASHIONED",
      category: "classic",
      description: "Single Barrel Bourbon, muscovado sugar cube, Angostura bitters, and instant oak barrel smoking.",
      ingredients: ["Single Barrel Bourbon", "Muscovado", "Angostura", "Oak Smoke"],
      price: "€ 14",
      profile: "Smoky & Noble",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop",
      featured: false
    }
  ],
  dishes: [
    {
      id: "ant-1",
      name: "Red Prawn Crudo & Sicilian Citrus",
      category: "antipasti",
      description: "Mazara del Vallo red prawns, bitter orange emulsion, late-harvest mandarin granita, and squid-ink rice crisp.",
      price: "€ 18",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
      dietary: ["Fresh Catch", "Gluten Free"],
      featured: true
    },
    {
      id: "ant-2",
      name: "Knife-Cut Fassona Beef Tartare",
      category: "antipasti",
      description: "Hand-chopped Piedmontese Fassona beef, soy-cured organic egg yolk, Salina caper light aioli, and sunchoke crisps.",
      price: "€ 16",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      dietary: ["Prime Beef"],
      featured: false
    },
    {
      id: "ant-3",
      name: "Crispy Octopus on Potato Velouté",
      category: "antipasti",
      description: "Seared octopus tentacle over beech-smoked potato cream, Hyblaean black olive dust, and fresh parsley oil.",
      price: "€ 17",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
      dietary: ["Local Catch"],
      featured: false
    },
    {
      id: "pri-1",
      name: "Carnaroli Risotto with Shellfish & Sea Asparagus",
      category: "primi",
      description: "Acid butter risotto, intense scampi and red prawn bisque, Syracuse Femminello lemon zest, and crunchy samphire.",
      price: "€ 20",
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800&auto=format&fit=crop",
      dietary: ["Chef's Signature"],
      featured: true
    },
    {
      id: "pri-2",
      name: "Handmade Tagliolini & Red Tuna",
      category: "primi",
      description: "Fresh egg pasta, Mediterranean red tuna battuto, confit datterini tomatoes, wild fennel fronds, and toasted breadcrumbs.",
      price: "€ 19",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
      dietary: ["Fresh Pasta"],
      featured: false
    },
    {
      id: "pri-3",
      name: "Hyblaean Ricotta Ravioli & Black Truffle",
      category: "primi",
      description: "Handmade ravioli stuffed with mountain cow ricotta, wild herbal reduction, and shaved summer black truffle.",
      price: "€ 18",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
      dietary: ["Vegetarian"],
      featured: false
    },
    {
      id: "sec-1",
      name: "Seared Amberjack & Nero d'Avola Glaze",
      category: "secondi",
      description: "Wild amberjack fillet over anise-scented fennel puree, sautéed wild chard, and thick Nero d'Avola wine reduction.",
      price: "€ 24",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
      dietary: ["Catch of the Day"],
      featured: true
    },
    {
      id: "sec-2",
      name: "Beef Fillet in Clarified Brown Butter",
      category: "secondi",
      description: "Slow-cooked prime beef tenderloin finished over hot coals, balsamic-glazed shallots, and winter root puree.",
      price: "€ 26",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
      dietary: ["Low-Temperature Cooked"],
      featured: false
    },
    {
      id: "sec-3",
      name: "Crisp Suckling Pork Belly & Quince",
      category: "secondi",
      description: "Slow-roasted suckling pork belly with crackling crust, spiced quince compote, and amber vermouth jus.",
      price: "€ 22",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      dietary: ["House Specialty"],
      featured: false
    },
    {
      id: "des-1",
      name: "70% Dark Chocolate Sphere & Passion Fruit",
      category: "dessert",
      description: "Crispy single-origin dark chocolate sphere, creamy passion fruit center, toasted hazelnut crumble, and sea salt flakes.",
      price: "€ 9",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop",
      dietary: ["Artisanal Dessert"],
      featured: true
    },
    {
      id: "des-2",
      name: "Deconstructed Contemporary Cannolo",
      category: "dessert",
      description: "Crispy cocoa & Marsala wafer, delicate sieved fresh sweet ricotta mousse, organic candied orange peel, and Bronte DOP pistachios.",
      price: "€ 8",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      dietary: ["Reinvented Classic"],
      featured: false
    }
  ]
};
