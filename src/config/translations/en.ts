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
    about: "About Us",
    carta: "Flavors",
    menu: "Menu",
    cocktailBar: "Cocktail Bar",
    caffetteria: "Cafeteria",
    location: "Setting",
    experiences: "Experiences",
    spazioArte: "Art",
    store: "Store",
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
    bookCta: "Book a Table",
    menuCta: "Discover the Flavors",
    scrollHint: "Scroll to explore"
  },
  menuSection: {
    badge: "Homemade & Authentic Flavors",
    title: "Flavors",
    subtitle: "Discover our homemade menu, come visit us.",
    description: "All our creations are homemade, mindful of seasonality and genuine flavors: warm fragrant baguettes, noble tasting boards, traditional pasta, artisan pastries, fine oils and wines prepared with passion and flair.",
    exploreMenuBtn: "Come Visit Us",
    visitCta: "Discover our homemade menu, come visit us.",
    gallery: [
      {
        id: "g-1",
        title: "Warm Artisan Baguettes",
        description: "Freshly baked artisan baguettes filled with Sicilian capocollo, local tuna, stracciatella, and Iblean olive oil.",
        imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop",
        highlight: "Freshly Baked"
      },
      {
        id: "g-2",
        title: "Antico Bistrot Tasting Boards",
        description: "Noble selection of raw-milk historic Sicilian cheeses, artisanal cured meats, and organic preserves.",
        imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop",
        highlight: "Local Excellence"
      },
      {
        id: "g-3",
        title: "Fresh Handmade Pasta",
        description: "Bronze-extruded homemade pasta with slow-simmered datterino tomatoes, wild fennel, and fragrant Sicilian aromatics.",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
        highlight: "Handcrafted"
      },
      {
        id: "g-4",
        title: "Daily Catch & Seasonal Dishes",
        description: "Fresh daily catch from the harbor of Syracuse and selected seasonal produce.",
        imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
        highlight: "Fresh Catch"
      },
      {
        id: "g-5",
        title: "Homemade Pastry & Desserts",
        description: "Crispy cannoli with fresh sheep's milk ricotta, pure green pistachio creams, and timeless desserts.",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        highlight: "House Pastry"
      },
      {
        id: "g-6",
        title: "Artisanal Cocktail Bar",
        description: "Art Nouveau inspired drinks, Syracuse citrus, island botanical essences, and balanced rare spirits.",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        highlight: "Signature Mixology"
      },
      {
        id: "g-7",
        title: "Curated Oils & Wine Cellar",
        description: "Single-cultivar Sicilian olive oils, organic wines, and volcanic pours from Etna and Val di Noto.",
        imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        highlight: "Oils & Wines"
      },
      {
        id: "g-8",
        title: "Cafeteria & Historic Foyer",
        description: "Traditional espresso, whole leaf teas, artisan granitas, and peaceful moments in the Theatre.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
        highlight: "Historic Setting"
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
    title: "Setting",
    subtitle: "Inside the evocative halls of the Municipal Theatre of Syracuse.",
    description: "Located in the heart of the historic center, on the island of Ortigia and within the evocative halls of the Municipal Theatre of Syracuse. Almeyda and the Teatro Massimo, paying tribute to one of the most celebrated figures in Sicilian architectural history between the late 19th and early 20th centuries, Giuseppe Damiani Almeyda (1834 - 1911).",
    theatreTitle: "The Municipal Theatre & Giuseppe Damiani Almeyda",
    theatreDescription: "Located in the heart of the historic center, on the island of Ortigia and within the evocative halls of the Municipal Theatre of Syracuse. Almeyda and the Teatro Massimo, paying tribute to one of the most celebrated figures in Sicilian architectural history between the late 19th and early 20th centuries, Giuseppe Damiani Almeyda (1834 - 1911).",
    tributeText: "Located in the heart of the historic center, on the island of Ortigia and within the evocative halls of the Municipal Theatre of Syracuse. Almeyda and the Teatro Massimo, paying tribute to one of the most celebrated figures in Sicilian architectural history between the late 19th and early 20th centuries, Giuseppe Damiani Almeyda (1834 - 1911).",
    roomsTitle: "The Halls & Historical Spaces of the Theatre",
    roomsSubtitle: "A journey through six iconic rooms celebrating Art Nouveau charm, architecture, and live culture",
    rooms: [
      {
        name: "Sala Liberty",
        description: "Floral elegance, antique wrought iron details, refined period decor, and warm ambient light.",
        iconName: "Sparkles",
        tag: "Art Nouveau Charm"
      },
      {
        name: "Salone delle Arti",
        description: "The majestic hall dedicated to art exhibitions, vernissages, cultural salons, and noble gatherings.",
        iconName: "Palette",
        tag: "Exhibitions & Art"
      },
      {
        name: "Passa Carrozza",
        description: "The ancient carriage passageway preserving the romantic memory of historical coaches and Ortigia's soul.",
        iconName: "Compass",
        tag: "Historic Gateway"
      },
      {
        name: "Foyer",
        description: "The sumptuous theatre entrance foyer, ideal for morning coffee, reading, or an evening aperitivo.",
        iconName: "Landmark",
        tag: "Period Foyer"
      },
      {
        name: "Sala prove",
        description: "An intimate and creative chamber where art takes shape through musical notes and rehearsals.",
        iconName: "Music",
        tag: "Rehearsals & Music"
      },
      {
        name: "Il Palco",
        description: "The theatrical stage, the heart of emotion, live performances, and unforgettable evenings.",
        iconName: "Theater",
        tag: "Stage & Live"
      }
    ],
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
        title: "Live Jazz & Double Bass Sessions",
        caption: "Live jazz notes and soulful improvisations in the warm, evocative atmosphere of the bistrot.",
        imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "The Grand Piano",
        caption: "Classical chords and intimate melodies accompanying evening aperitifs at the theatre.",
        imageUrl: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Art Exhibitions & Gallery Walls",
        caption: "Contemporary paintings and artworks exhibited along the historic stone arches.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Saxophone & Swing Nights",
        caption: "Soulful saxophone solos and swing rhythms amidst soft lighting and vintage decor.",
        imageUrl: "https://images.unsplash.com/photo-1525994886773-080587e161c2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Vernissages & Art Gatherings",
        caption: "Artful toasts connecting artists, collectors, and culture lovers during openings.",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Acoustic Set & Live Guitar",
        caption: "Unplugged performances and intimate songwriting in the heart of the Ridotto hall.",
        imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Vinyl Corner & Sound Selection",
        caption: "33-rpm analog vinyl records and artisanal cocktails shaken to the rhythm of sound.",
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Vocal Jazz & Retro Mic",
        caption: "Vintage vocal echoes and timeless jazz standards performed live on vintage microphones.",
        imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Sculptures & Foyer Installations",
        caption: "Artistic sculptures and three-dimensional works harmonized with theatre architecture.",
        imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Trumpet & Late Night Sessions",
        caption: "Brass brilliance and musical dialogues in the theatre's late-night lounge.",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Art Details & Exhibited Canvases",
        caption: "Textured brushwork, rich pigments, and rotating exhibitions displayed between tables.",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Chamber Music & Strings",
        caption: "Chamber music moments resonating within the flawless acoustics of the historic halls.",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Fine Art Ceramics & Sculptures",
        caption: "Unique hand-crafted pieces and artisan glazes showcased in Art Nouveau corners.",
        imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Fine Wine & Sound Atmosphere",
        caption: "Etna wine tastings and homemade delicacies accompanied by curated acoustic ambiance.",
        imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Live Performances & Art Stage",
        caption: "The vibrant energy of intimate concerts and cultural evenings at the Municipal Theatre.",
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Night of Notes in Ortigia",
        caption: "The bistrot's warm lanterns with enchanting music echoing through ancient alleys.",
        imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  aboutSection: {
    badge: "Heritage, Vision & Hospitality",
    title: "About Us & The Vision",
    subtitle: "An Antico Arts Café Bistrot in the heart of the Municipal Theatre of Syracuse.",
    aboutTitle: "Our Story",
    aboutText1: "A group of young entrepreneurs from different sectors: hospitality, gastronomy, the sea, and music—the unique specialty of each of us.",
    aboutText2: "Together, a vision rooted in iconic places where we bring our business dreams to life, along with the dreams of our valued guests.",
    ideaTitle: "The Concept: An Antico Arts Café Bistrot",
    ideaSubtitle: "A place to study, read, get married, dine, and listen to great music.",
    ideaQuote: "Above all, to create atmosphere and well-being: pairing our culinary journeys with a complete, immersive sensory experience.",
    ideaPoints: [
      {
        title: "Crossroads for Artists",
        description: "A gathering point and safe haven for all passing artists and performers.",
        iconName: "Palette"
      },
      {
        title: "Art, Craft & Theatre",
        description: "Bringing art exhibitions and craft showcases to life, connecting youth with the magic of the theatre.",
        iconName: "Sparkles"
      },
      {
        title: "Iconic Landmark",
        description: "Becoming a cultural and gastronomic reference point for travelers and Syracuse locals alike.",
        iconName: "Compass"
      },
      {
        title: "Bespoke Regional Events",
        description: "Sharing our distinctive mood and authentic culinary creations for unique events across Sicily.",
        iconName: "HeartHandshake"
      }
    ],
    offerTitle: "Our Multifaceted Offering",
    offerSubtitle: "From a casual daytime stop to exclusive Food & Wine Experiences",
    offerText1: "Versatile and multifaceted, our offering ranges from a simple daytime pause to savor our cuisine and drinks, to curated, exclusive Food and Wine Experiences.",
    offerText2: "A captivating atmosphere, a multicultural spirit, and refined musical selections stop time and immerse you in a tale of bygone eras.",
    staffTitle: "The Team",
    staffSubtitle: "The clock that sets the tempo of your well-being",
    staffQuote: "Names may shift over time, but we remain the clock that marks the rhythm of your well-being.",
    staffMembers: [
      { role: "Direction", name: "Barbara", iconName: "Clapperboard", department: "General Direction & Vision" },
      { role: "Hospitality", name: "Mabel", iconName: "Heart", department: "Guest Welcome & Front of House" },
      { role: "Beverage", name: "Roberta", iconName: "Wine", department: "Mixology & Cellar" },
      { role: "Pass", name: "Syria", iconName: "Flame", department: "Service Coordination" },
      { role: "Laboratory", name: "Simone", iconName: "Sparkles", department: "Research & Production" },
      { role: "Chef", name: "Enrico", iconName: "UtensilsCrossed", department: "Cuisine & Terroir" },
      { role: "Maintenance", name: "Malboro", iconName: "Wrench", department: "Care & Structural Upkeep" }
    ],
    languagesLabel: "We Speak",
    languages: ["Italian", "English", "Spanish", "Portuguese", "French"]
  },
  experiencesSection: {
    badge: "Engaging All Five Senses",
    title: "Experiences",
    subtitle: "Custom-curated culinary, sensory, and cultural journeys.",
    description: "Every experience at Almeyda is crafted to unveil the deep essence of Sicily: from premium extra virgin olive oil flights to volcanic wine pairings and private cocktail sessions.",
    offerAtmosphere: "Versatile and multifaceted, our offering spans from a relaxing daytime stop to enjoy food and drinks, to exclusive Food & Wine Experiences with musical selections that stand the test of time.",
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
  spazioArteSection: {
    badge: "Creative Residency & Welcoming",
    title: "Art Space",
    subtitle: "A home within the Theatre for musicians, painters, writers, and creative spirits.",
    quote: "Contribute to bringing color to Almeyda: we believe in vibrant socialization and the authentic exchange of ideas and culture that creates art.",
    description1: "Almeyda is a living venue that breathes the artistic legacy of the Municipal Theatre of Syracuse. We warmly open our doors to all artists, whether traveling through or residing in Syracuse, who wish to share their creative expression.",
    description2: "Whether you are looking for an intimate setting for an acoustic performance, a poetry reading, an art showcase, or simply a safe logistical shelter to store your musical instruments and stage equipment during rehearsals or walks in Ortigia, you will always find warmth and respect here.",
    description3: "Stop by for refreshment, enjoy a complimentary coffee at the bar in exchange for a pleasant conversation, a story, a sheet of music, or a shared vision. Together, we shape a vibrant sanctuary where culture thrives daily.",
    ctaArtist: "Submit Your Proposal",
    ctaWhatsapp: "Direct Artist Line",
    features: [
      {
        title: "Performance & Live Stage",
        description: "An intimate acoustic stage for musical sets, jam sessions, poetic readings, and performances among the bistrot tables.",
        tag: "Open Stage",
        iconName: "Music"
      },
      {
        title: "Logistical Shelter & Instrument Care",
        description: "A secure, guarded place to store your guitars, cases, canvases, props, and backpacks during your day in Ortigia.",
        tag: "Logistical Base",
        iconName: "ShieldCheck"
      },
      {
        title: "A Coffee for a Conversation",
        description: "Warm hospitality: an espresso or a drink on the house to get to know each other, exchange anecdotes, and foster new ideas.",
        tag: "Hospitality",
        iconName: "Coffee"
      },
      {
        title: "Socialization & Cultural Networking",
        description: "Meet fellow creatives and connect with our theater-loving community in an inviting, unpretentious setting.",
        tag: "Cultural Exchange",
        iconName: "Users"
      }
    ]
  },
  storeSection: {
    badge: "Boutique & Sicilian Craftsmanship",
    title: "Store",
    subtitle: "Bring home the authentic flavors and artisan heritage of Sicily.",
    description: "A master selection of Sicilian excellence: single-cultivar extra virgin olive oils from the Iblean mountains, homemade preserves and pestos, volcanic natural wines, hand-painted ceramics, and exclusive Theatre gift sets.",
    inStoreNotice: "All items are available for purchase and direct collection at our Bistrot in the Theatre, with elegant gift boxes and travel packaging.",
    ctaWhatsapp: "Order or Inquire via WhatsApp",
    ctaInquire: "Inquire for Shipping & Gift Boxes",
    categories: {
      all: "All Products",
      oli: "Monovarietal Oils",
      dispensa: "Pantry & Preserves",
      vini: "Wines & Spirits",
      ceramiche: "Ceramics & Art"
    },
    products: [
      {
        id: "prod-1",
        title: "Monocultivar Tonda Iblea Extra Virgin Olive Oil",
        category: "oli",
        description: "Cold-extracted from century-old Iblean olive groves. Intense aromas of green tomato leaf, wild Mediterranean herbs, and artichoke. Numbered seal.",
        origin: "Buccheri / Monti Iblei (SR)",
        tag: "Sicilian Excellence",
        imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
        details: "500ml dark glass bottle · Acidity < 0.18%"
      },
      {
        id: "prod-2",
        title: "Organic Nocellara dell'Etna Extra Virgin Olive Oil",
        category: "oli",
        description: "Extra virgin olive oil from volcanic volcanic slopes, harmonious and refined with fresh almond notes, green apple, and pleasant peppery finish.",
        origin: "Slopes of Mount Etna",
        tag: "Organic & Volcanic",
        imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        details: "500ml bottle · Hand-harvested 2025"
      },
      {
        id: "prod-3",
        title: "Historic Sicilian Caponata Almeyda",
        category: "dispensa",
        description: "Handcrafted in our kitchen according to the ancestral recipe: golden eggplants, toasted Noto almonds, Nocellara olives, and orange honey sweet-and-sour reduction.",
        origin: "Homemade Almeyda",
        tag: "Traditional Recipe",
        imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
        details: "314g glass jar · 100% Artisanal"
      },
      {
        id: "prod-4",
        title: "Pure Bronte DOP Pistachio Cream",
        category: "dispensa",
        description: "Artisan spread made with 65% stone-toasted green pistachios from Bronte DOP, with no artificial flavors or palm oil.",
        origin: "Bronte (CT)",
        tag: "65% Pure Pistachio",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        details: "200g jar · Bronte DOP"
      },
      {
        id: "prod-5",
        title: "Etna Rosso DOC Contrada & Carricante",
        category: "vini",
        description: "Selection of wines from bush-trained old vines on volcanic sands. Vibrant minerality, wild red berry notes, and balsamic finish.",
        origin: "Etna North Slope",
        tag: "Artisan Cellar",
        imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
        details: "75cl bottle · French oak maturation"
      },
      {
        id: "prod-6",
        title: "Etna Herbal Amaro & Syracuse Citrus Liqueurs",
        category: "vini",
        description: "Artisanal infusion of wild Mediterranean herbs and Syracuse IGP Lemon and bitter orange peels.",
        origin: "Syracuse & Etna",
        tag: "Botanical Spirit",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        details: "50cl / 70cl bottle · Secret family recipe"
      },
      {
        id: "prod-7",
        title: "Lucky Sicilian Pumo & Caltagirone Ceramics",
        category: "ceramiche",
        description: "Authentic Sicilian ceramics hand-molded and glazed in warm ochre, copper green, and cobalt blue tones by master potters.",
        origin: "Caltagirone & Ortigia",
        tag: "Handcrafted",
        imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop",
        details: "Unique numbered piece · Glazed clay"
      },
      {
        id: "prod-8",
        title: "Gift Box 'Memories of the Municipal Theatre'",
        category: "dispensa",
        description: "Elegant wooden box with Almeyda wax seal containing a bottle of premium EVO, two artisanal preserves, volcanic wine, and calligraphic message.",
        origin: "Exclusive Almeyda Selection",
        tag: "Gift Set",
        imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
        details: "Customizable box · Ideal for distinguished gifting"
      }
    ]
  },
  eventiSection: {
    badge: "Unforgettable Theatre Moments",
    title: "Events & Catering",
    subtitle: "Our private events hall, logistics, and styling for your special occasions.",
    description: "The ideal setting for exclusive parties, milestones, corporate meetings, and weddings. We provide full catering excellence, bespoke styling, and flawless logistics.",
    ctaBtn: "Inquire for Hall & Catering",
    salaEventiTitle: "The Private Events Hall",
    salaEventiDescription: "A captivating salon with exceptional acoustics, bespoke lighting, dedicated catering, and private bar counter to host your guests in absolute elegance and discretion.",
    cateringLogisticaTitle: "Catering, Styling & Logistics",
    cateringLogisticaDescription: "We curate every nuance of your weddings, corporate meetings, and private celebrations: tailor-made menus, floral decor, audio-lighting services, and seamless logistics.",
    tourOperatorTitle: "Collaboration with Agencies & Tour Operators",
    tourOperatorDescription: "We actively partner with Travel Agencies and Tour Operators for any client requirement, delivering indoor services in the Theatre and outdoor experiences across Sicily.",
    eventTypes: [
      {
        title: "Weddings & Milestones",
        description: "Intimate weddings, anniversaries, and unforgettable celebrations with bespoke catering in the heart of Ortigia.",
        iconName: "PartyPopper"
      },
      {
        title: "Exclusive Parties & Receptions",
        description: "Private gatherings featuring custom cocktail menus, selected music, and timeless historic atmosphere.",
        iconName: "Sparkles"
      },
      {
        title: "Corporate Meetings & B2B",
        description: "Equipped venue and logistics for corporate conventions, brand launches, and services for tour operators.",
        iconName: "Users"
      },
      {
        title: "Art Exhibitions & Live Music",
        description: "Temporary exhibitions, live acoustic concerts, and cultural gatherings interacting with period architecture.",
        iconName: "Palette"
      }
    ]
  },
  contattaciSection: {
    badge: "Reservations & Contact via WhatsApp",
    title: "Contact Us",
    subtitle: "Direct WhatsApp interaction: select request details and send a ready-to-send precompiled message to our team.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    whatsappLabel: "Direct WhatsApp",
    emailLabel: "Email Address",
    hoursLabel: "Opening Hours",
    form: {
      title: "Compose Inquiry",
      subtitle: "Enter your details: clicking the button will open WhatsApp directly with the message pre-filled in every detail.",
      nameLabel: "Full Name",
      namePlaceholder: "John Smith",
      phoneLabel: "Phone Number (Optional)",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Email Address (Optional)",
      emailPlaceholder: "john.smith@email.com",
      subjectLabel: "Inquiry Type",
      subjectOptions: {
        tavolo: "Table Reservation (Lunch / Dinner / Drinks)",
        esperienze: "Tastings & Sensory Experiences",
        evento: "Private Events, Catering & B2B",
        arte: "Artistic Proposal / Art Space",
        store: "Boutique Store & Shipping",
        informazioni: "General Information Inquiry"
      },
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      guestsLabel: "Number of Guests",
      messageLabel: "Special Notes or Details",
      messagePlaceholder: "Mention dietary needs, seating preferences or custom requests...",
      submitBtn: "Send Inquiry via WhatsApp",
      previewLabel: "Pre-filled WhatsApp Message Preview",
      whatsappNotice: "No waiting or form processing: you will be directed directly to Almeyda's official WhatsApp chat for instant confirmation."
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
