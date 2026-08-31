import { TranslationDictionary } from './types';

export const enTranslations: TranslationDictionary = {
  common: {
    brandName: "ALMEYDA",
    brandSubtitle: "Antico Bistrot Siciliano",
    city: "Syracuse",
    citySubtitle: "Ortigia · Syracuse, Sicily",
    bookTable: "BOOK A TABLE",
    explore: "Explore more",
    close: "Close",
    viewMenu: "FULL BISTROT MENU",
    viewCocktailMenu: "COCKTAIL LIST",
    viewCafeteriaMenu: "COFFEE BAR MENU",
    ingredients: "Ingredients",
    required: "required"
  },
  navbar: {
    home: "Home",
    menu: "Menu",
    cocktailBar: "Cocktail Bar",
    caffetteria: "Cafeteria",
    location: "Location",
    experiences: "Experiences",
    eventi: "Events",
    contattaci: "Contact Us",
    book: "Book",
    openFrom: "Open every day",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },
  hero: {
    badge: "Antico Bistrot Siciliano · Municipal Theatre of Syracuse",
    headline: "A timeless sanctuary where historical charm meets warm Sicilian hospitality.",
    tributeTitle: "Tribute to Giuseppe Damiani Almeyda (1834 - 1911)",
    tributeParagraph1: "We decided to pay tribute to one of the most celebrated architects in Sicily between the second half of the 19th century and the early 20th century, Giuseppe Damiani Almeyda (1834 - 1911).",
    tributeParagraph2: "Crossing the threshold of Almeyda means stepping into a place suspended in time, where the allure of history embraces the warmth of true hospitality.",
    tributeParagraph3: "You are inside the Municipal Theatre of Syracuse, in the authentic heart of Ortigia: a sanctuary guarding memory, art, and beauty, today welcoming you to a sensory journey that captivates all five senses.",
    tributeParagraph4: "An international meeting place, a unique atmosphere, and a dedicated events hall make Almeyda an authentic Antico Bistrot Siciliano.",
    tributeParagraph5: "All our creations are homemade, mindful of seasonality and genuine flavors. Fine wines and curated olive oils, warm crisp baguettes, and above all, love and imagination.",
    bookCta: "Book a Table",
    menuCta: "Discover the Menu",
    scrollHint: "Scroll to explore"
  },
  menuSection: {
    badge: "Authentic Flavors & Heritage",
    title: "Menu",
    subtitle: "Fresh homemade delicacies, seasonal produce, and true Sicilian soul.",
    description: "Every item is handcrafted with passion: artisanal cheese and charcuterie boards, warm fragrant baguettes, traditional first and second courses, and classic desserts paired with our curated olive oils and regional wines.",
    exploreMenuBtn: "View Full Menu",
    featuredBadge: "House Specialty",
    categories: {
      all: "All Dishes",
      baguette: "Warm Baguettes & Bites",
      antipasti: "Starters & Boards",
      primi: "Traditional Pasta",
      secondi: "Mains & Daily Catch",
      dessert: "Desserts & Pastry",
      viniOli: "Curated Oils & Wines"
    },
    dishes: [
      {
        id: "m-1",
        name: "Warm Baguette Ortigia",
        category: "baguette",
        description: "Freshly baked artisan baguette with Sicilian capocollo, fresh stracciatella cheese, confit datterini tomatoes, and Monti Iblei extra virgin olive oil.",
        price: "€ 11.00",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop",
        notes: "Artisanal preparation · Served warm",
        featured: true
      },
      {
        id: "m-2",
        name: "Theatre Warm Baguette",
        category: "baguette",
        description: "Crisp warm baguette with homemade preserved red tuna, caramelized Giarratana sweet onion, Salina capers, and Syracuse lemon zest.",
        price: "€ 13.00",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop",
        notes: "Signature house recipe",
        featured: true
      },
      {
        id: "m-3",
        name: "Antico Bistrot Tasting Board",
        category: "antipasti",
        description: "Noble selection of raw-milk historic Sicilian cheeses (Ragusano DOP, Piacentinu Ennese), black swine cured meats, organic preserves, and warm wood-fired bread.",
        price: "€ 22.00",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop",
        notes: "Ideal for two to share",
        featured: true
      },
      {
        id: "m-4",
        name: "Historic Caponata with Noto Almonds",
        category: "antipasti",
        description: "Golden fried eggplants, crunchy celery, Nocellara olives from Mount Etna, toasted pine nuts, and local wildflower honey vinegar reduction.",
        price: "€ 12.00",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
        notes: "Timeless recipe",
        featured: false
      },
      {
        id: "m-5",
        name: "Ancient Grain Busiate alla Siracusana",
        category: "primi",
        description: "Bronze-die fresh pasta with slow-cooked sweet datterino tomatoes, Sciacca anchovies, wild fennel, and crunchy toasted breadcrumbs.",
        price: "€ 16.00",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
        notes: "Organic ancient Sicilian grains",
        featured: true
      },
      {
        id: "m-6",
        name: "Ricotta & Saffron Handcrafted Tortelli",
        category: "primi",
        description: "Handmade pasta parcels filled with fresh sheep's milk ricotta from the Iblei hills, herb-infused butter, and pure Sicilian saffron.",
        price: "€ 17.00",
        image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=1000&auto=format&fit=crop",
        notes: "Fresh egg pasta",
        featured: false
      },
      {
        id: "m-7",
        name: "Catch of the Day all'Acqua Pazza",
        category: "secondi",
        description: "Fresh fish fillet from Syracuse harbor, gently cooked in a fragrant broth of Pachino cherry tomatoes, Nubia red garlic, and fresh basil.",
        price: "€ 24.00",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
        notes: "Local sustainable catch",
        featured: true
      },
      {
        id: "m-8",
        name: "Deconstructed Cannolo with Iblean Ricotta",
        category: "dessert",
        description: "Crisp fried cinnamon pastry shards, velvety sweetened sheep's milk ricotta cream, Modica dark chocolate drops, and Bronte pistachios.",
        price: "€ 8.00",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        notes: "Prepared to order",
        featured: true
      },
      {
        id: "m-9",
        name: "Curated Oils & Wine Flight",
        category: "viniOli",
        description: "Guided tasting flight featuring three monovarietal extra virgin olive oils (Tonda Iblea, Nocellara, Biancolilla) and select volcanic wines.",
        price: "€ 18.00",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        notes: "Organic & biodynamic labels",
        featured: true
      }
    ]
  },
  cocktailSection: {
    badge: "Artisanal Mixology & Rare Spirits",
    title: "Cocktail Bar",
    subtitle: "Art Nouveau inspired creations, island botanicals, and classic milestones.",
    description: "Our bar celebrates the craft of fine bartending in an enchanting setting. From vintage recipes revitalized with local citrus and Mediterranean herbs to internationally renowned classics prepared to perfection.",
    viewMenuBtn: "View Cocktail List",
    categories: {
      all: "All Cocktails",
      signature: "Signature Creations",
      classici: "Great Classics",
      analcolici: "Zero Proof Mocktails"
    },
    cocktails: [
      {
        id: "c-1",
        name: "Almeyda 1834",
        category: "signature",
        description: "An aromatic tribute with Sicilian bitter orange notes, vintage red vermouth, refined agave spirit, and smoked Anapo river rosemary.",
        ingredients: ["Agave Spirit", "Sicilian Red Vermouth", "Bitter Orange Liqueur", "Smoked Wild Rosemary"],
        price: "€ 14.00",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        profile: "Complex · Spiced · Citrusy",
        featured: true
      },
      {
        id: "c-2",
        name: "Night in Ortigia",
        category: "signature",
        description: "Artisanal bay leaf & Mount Etna juniper gin, orange blossom liqueur, fresh Syracuse lemon cordial, and Mediterranean tonic.",
        ingredients: ["Etna Gin", "Orange Blossom Elixir", "Femminello Lemon", "Mediterranean Tonic"],
        price: "€ 13.00",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        profile: "Fresh · Floral · Herbal",
        featured: true
      },
      {
        id: "c-3",
        name: "The Royal Box",
        category: "signature",
        description: "Aged small batch bourbon, artisanal blood orange amaro, drops of Modica dark chocolate bitters, and toasted almond mist.",
        ingredients: ["Reserve Bourbon", "Sicilian Amaro", "Modica Chocolate Bitters", "Orange Essential Mist"],
        price: "€ 15.00",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop",
        profile: "Rich · Velvety · Golden",
        featured: true
      },
      {
        id: "c-4",
        name: "Antico Bistrot Negroni",
        category: "classici",
        description: "Our signature take on the classic Negroni featuring bitter infused with Syracuse carob, amber vermouth, and botanical gin.",
        ingredients: ["Botanical Gin", "Carob Artisanal Bitter", "Riserva Vermouth"],
        price: "€ 12.00",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1000&auto=format&fit=crop",
        profile: "Bittersweet · Timeless · Bold",
        featured: false
      },
      {
        id: "c-5",
        name: "Zagara & Pomegranate 0%",
        category: "analcolici",
        description: "Distilled non-alcoholic herbal botanicals, fresh pressed pomegranate, late mandarin juice, and basil-infused soda.",
        ingredients: ["Non-Alcoholic Botanicals", "Fresh Pomegranate", "Late Mandarin", "Basil Soda"],
        price: "€ 10.00",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1000&auto=format&fit=crop",
        profile: "Fruity · Crisp · Silky",
        featured: false
      }
    ]
  },
  caffetteriaSection: {
    badge: "The Theatre Lounge",
    title: "Cafeteria",
    subtitle: "Artisan coffee roasts, historical breakfasts, and leisurely moments inside the Theatre.",
    description: "The aroma of freshly ground beans welcomes guests from early morning: 100% single-origin arabica, freshly baked pastries, organic loose-leaf infusions, and spiced hot chocolate served in the grandeur of the Municipal Theatre.",
    categories: {
      all: "All Selections",
      caffe: "Coffee & Specialties",
      pasticceria: "Pastries & Sweets",
      infusi: "Teas & Granita"
    },
    items: [
      {
        title: "Theatre Espresso",
        category: "caffe",
        description: "Wood-fire roasted single origin blend with toasted almond and bittersweet cocoa notes.",
        price: "€ 1.80",
        tag: "Exclusive Roast"
      },
      {
        title: "Almond Cream Cappuccino",
        category: "caffe",
        description: "Velvety steamed micro-foam paired with organic Avola almond milk and cocoa dusting.",
        price: "€ 3.50",
        tag: "Specialty"
      },
      {
        title: "Artisan Sicilian Croissant & Brioche",
        category: "pasticceria",
        description: "Golden flaky butter pastry filled with Sicilian vanilla cream or pure green pistachio cream.",
        price: "€ 2.50",
        tag: "Homemade"
      },
      {
        title: "Loose Leaf Teas & Botanical Infusions",
        category: "infusi",
        description: "Selection of green tea, smoked black tea, hibiscus, and orange blossom tisanes.",
        price: "€ 5.00",
        tag: "Fine Selection"
      },
      {
        title: "Traditional Sicilian Granita (Seasonal)",
        category: "infusi",
        description: "Handcrafted granita made from Avola almonds, Syracuse lemons, or espresso with fresh cream.",
        price: "€ 4.50",
        tag: "Pure Heritage"
      },
      {
        title: "Modica Hot Chocolate in Cup",
        category: "pasticceria",
        description: "Rich stone-ground chocolate served thick and warm with cinnamon or chili.",
        price: "€ 5.50",
        tag: "Winter Classic"
      }
    ],
    highlights: [
      {
        title: "Breakfast in the Foyer",
        description: "Begin your morning surrounded by historic marble, Art Nouveau details, and gentle light.",
        iconName: "Sun"
      },
      {
        title: "Artisanal Baking",
        description: "Fresh pastries baked daily honoring ancient Sicilian confectionery heritage.",
        iconName: "Coffee"
      },
      {
        title: "Afternoon Sanctuary",
        description: "A calm retreat with curated fine teas, art books, and relaxed conversation.",
        iconName: "Feather"
      }
    ]
  },
  locationSection: {
    badge: "In the Heart of Ortigia",
    title: "Location",
    subtitle: "Inside the magnificent Municipal Theatre of Syracuse.",
    description: "Stepping inside Almeyda means entering a historic monument guarding memories, art, and timeless aesthetics. Designed by 19th-century masters, it is the quintessential setting for a Sicilian bistrot.",
    theatreTitle: "The Municipal Theatre of Syracuse",
    theatreDescription: "Inaugurated at the close of the 19th century in Ortigia, the Theatre is an architectural masterpiece. Almeyda breathes in harmony with its historic halls, offering an intimate period salon and an elegant outdoor terrace.",
    addressTitle: "Address & How to Reach Us",
    hoursTitle: "Opening Hours",
    directionsBtn: "Get Directions on Map",
    openingHours: [
      { days: "Wednesday — Sunday", hours: "10:00 AM — 03:00 PM | 06:30 PM — 00:30 AM", note: "Cafeteria, Lunch, Aperitivo & Cocktail Bar" },
      { days: "Monday", hours: "12:00 PM — 03:00 PM | 07:00 PM — 11:30 PM", note: "Lunch, Aperitivo & Dining" },
      { days: "Tuesday", hours: "Closed", note: "Weekly closing day" }
    ],
    gallery: [
      {
        title: "The Historic Facade",
        caption: "The Municipal Theatre of Syracuse, Ortigia's architectural crown jewel.",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "The Antico Bistrot Salon",
        caption: "Curated vintage furnishings, golden lighting, and historic ceilings.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "The Mixology Bar",
        caption: "Dedicated corner for artisanal cocktail craft and rare spirit collections.",
        imageUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Ortigia Terrace",
        caption: "Outdoor tables set between white limestone alleys and the sea breeze.",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  experiencesSection: {
    badge: "Engaging All Five Senses",
    title: "Experiences",
    subtitle: "Custom-curated culinary, sensory, and cultural journeys.",
    description: "Every experience at Almeyda is crafted to unveil the deep essence of Sicily: from premium extra virgin olive oil flights to volcanic wine pairings and private cocktail sessions.",
    bookBtn: "Inquire About Experience",
    items: [
      {
        title: "Journey Through Fine Oils & Wines",
        subtitle: "Guided Sicilian Terroir Tasting",
        description: "A sensory masterclass featuring three monovarietal extra virgin olive oils and four Sicilian volcanic wines, served with warm baguettes and artisan cheeses.",
        duration: "Approx. 90 minutes",
        tag: "Sensory",
        iconName: "Wine"
      },
      {
        title: "The Theatre Aperitivo",
        subtitle: "Signature Cocktails & Chef's Bites",
        description: "Two bespoke cocktails of your choice served with the Antico Bistrot sharing board, freshly baked warm baguettes, and traditional Sicilian delicacies.",
        duration: "Sunset or early evening",
        tag: "Convivial",
        iconName: "Sparkles"
      },
      {
        title: "Five Senses Gourmet Dinner",
        subtitle: "Tasting Menu Between History and Gastronomy",
        description: "A five-course culinary journey enriched with historical insights into the Theatre and Giuseppe Damiani Almeyda, paired with selected fine wines.",
        duration: "Full evening dining",
        tag: "Exclusive",
        iconName: "Utensils"
      }
    ]
  },
  eventiSection: {
    badge: "Unforgettable Theatre Moments",
    title: "Events",
    subtitle: "Our private events hall and historic spaces for your memorable occasions.",
    description: "An international meeting place, a unique atmosphere, and a dedicated events hall make Almeyda a prestigious backdrop for private receptions, live acoustic music, art vernissages, and company gatherings.",
    ctaBtn: "Inquire for Hall Availability",
    salaEventiTitle: "The Private Events Hall",
    salaEventiDescription: "A captivating salon with exceptional acoustics, bespoke lighting, dedicated catering, and private bar counter to host your guests in absolute elegance and discretion.",
    eventTypes: [
      {
        title: "Private Receptions & Celebrations",
        description: "Intimate birthdays, anniversaries, and milestones with custom culinary menus and cocktail pairings.",
        iconName: "PartyPopper"
      },
      {
        title: "Live Music & Cultural Performances",
        description: "Live jazz nights, acoustic sessions, and literary encounters within the historic Theatre.",
        iconName: "Music"
      },
      {
        title: "Corporate Gatherings & Presentations",
        description: "Fully equipped venue for brand showcases, executive meetings, press launches, and wine presentations.",
        iconName: "Users"
      },
      {
        title: "Art Exhibitions & Vernissages",
        description: "Temporary exhibitions of painting, sculpture, and photography interacting with period architecture.",
        iconName: "Palette"
      }
    ]
  },
  contattaciSection: {
    badge: "We Are at Your Service",
    title: "Contact Us",
    subtitle: "Reserve your table or plan your private event with us.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    whatsappLabel: "Direct WhatsApp",
    emailLabel: "Email Address",
    hoursLabel: "Opening Hours",
    form: {
      title: "Send an Inquiry",
      subtitle: "Complete the form below and our hospitality team will respond promptly.",
      nameLabel: "Full Name",
      namePlaceholder: "John Smith",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Email Address",
      emailPlaceholder: "john.smith@email.com",
      subjectLabel: "Inquiry Type",
      subjectOptions: {
        tavolo: "Table Reservation (Lunch / Dinner / Drinks)",
        evento: "Private Event Organization",
        informazioni: "General Information Inquiry"
      },
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      guestsLabel: "Number of Guests",
      messageLabel: "Special Notes or Requests",
      messagePlaceholder: "Mention dietary needs, seating preferences or event details...",
      submitBtn: "Send Inquiry"
    },
    confirmation: {
      title: "Inquiry Sent Successfully",
      message: "Thank you. We have received your request and will contact you shortly to confirm availability.",
      whatsappBtn: "Message Us on WhatsApp for Instant Reply",
      callBtn: "Call Directly",
      newRequestBtn: "Send Another Inquiry"
    }
  },
  footer: {
    tagline: "Antico Bistrot Siciliano",
    subTagline: "Municipal Theatre of Syracuse · Ortigia",
    description: "A tribute to Giuseppe Damiani Almeyda: history, art, authentic tastes, warm baguettes, and artisanal mixology in Syracuse.",
    sectionsTitle: "Sections",
    contactsTitle: "Contacts & Info",
    hoursTitle: "Opening Hours",
    rights: "All rights reserved. Almeyda — Antico Bistrot Siciliano.",
    backToTop: "Back to Top"
  }
};
