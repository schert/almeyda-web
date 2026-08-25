import { TranslationDictionary } from './types';

export const itTranslations: TranslationDictionary = {
  common: {
    brandName: "ALMEYDA",
    city: "Siracusa",
    citySubtitle: "Siracusa, IT",
    bookTable: "PRENOTA UN TAVOLO",
    explore: "Esplora",
    close: "Chiudi",
    viewCocktailMenu: "CARTA COCKTAIL DIGITALE",
    viewDiningMenu: "CARTA DINING DIGITALE",
    ingredients: "Ingredienti",
    required: "obbligatorio"
  },
  navbar: {
    home: "HOME",
    cocktail: "COCKTAIL",
    dining: "DINING",
    atmosphere: "ATMOSFERA",
    gallery: "GALLERY",
    siracusa: "SIRACUSA",
    book: "Prenota",
    digitalCocktailMenu: "→ CARTA COCKTAIL DIGITALE",
    digitalDiningMenu: "→ CARTA DINING DIGITALE",
    openFrom: "Dalle 18:30",
    openMenu: "Apri menu di navigazione",
    closeMenu: "Chiudi menu"
  },
  hero: {
    badge: "Cocktail · Dining · Siracusa",
    headline: "Un luogo dove cocktail, cucina e atmosfera si incontrano.",
    description: "Un ambiente contemporaneo e raffinato nel cuore di Siracusa. Dalla mixology d'autore alla cucina da condividere, per vivere la sera con il giusto ritmo.",
    bookCta: "Prenota un Tavolo",
    menuCta: "Scopri il Menu",
    scrollHint: "Scorri per scoprire"
  },
  intro: {
    philosophyBadge: "Filosofia",
    statementLine1: "Non è solo",
    statementLine2: "una cena.",
    description: "Almeyda è uno spazio pensato per vivere la sera con il giusto ritmo: dalla cucina ai cocktail, dall'aperitivo all'ultima conversazione."
  },
  cocktailSection: {
    badge: "Mixology",
    title: "Cocktail",
    subtitle: "Classici, signature e nuove interpretazioni artigianali.",
    viewMenuBtn: "Vedi la carta cocktail"
  },
  diningSection: {
    badge: "Cucina Contemporanea",
    title: "Dining",
    subtitle: "Piatti pensati per essere condivisi e assaporati con calma.",
    exploreMenuBtn: "Esplora il Menu",
    featuredBadge: "In Evidenza",
    categories: {
      antipasti: "Antipasti",
      primi: "Primi",
      secondi: "Secondi",
      dessert: "Dessert"
    }
  },
  atmosphereSection: {
    badge: "Luci & Suoni",
    title: "La Sera, Almeyda",
    description: "Una luce calda, un drink d'autore, la cucina, la musica e il tempo per stare insieme.",
    photos: [
      {
        title: "Luce Calda & Bancone",
        subtitle: "Mixology & Design"
      },
      {
        title: "Intimità dei Tavoli",
        subtitle: "Dining & Convivialità"
      },
      {
        title: "Dettagli & Calici",
        subtitle: "Selezione Vini & Spiriti"
      },
      {
        title: "La Cucina in Movimento",
        subtitle: "Gusto & Creatività"
      }
    ]
  },
  experienceSection: {
    exploreBtn: "Esplora",
    pillars: [
      {
        title: "COCKTAIL",
        subtitle: "Mixology d'autore",
        description: "Signature cocktail e grandi classici reinterpretati con distillati rari, botaniche locali e sciroppi artigianali.",
        iconName: "Wine"
      },
      {
        title: "DINING",
        subtitle: "Cucina contemporanea",
        description: "Una cucina pensata per accompagnare la serata, con piatti d'ispirazione mediterranea da condividere e assaporare con calma.",
        iconName: "Utensils"
      },
      {
        title: "ATMOSPHERE",
        subtitle: "Tempo & Convivialità",
        description: "Un ambiente elegante dove fermarsi più a lungo, immersi in luci soffuse, design essenziale e selezione musicale curata.",
        iconName: "Sparkles"
      }
    ]
  },
  gallerySection: {
    badge: "Racconto Visivo",
    title: "Gallery",
    subtitle: "Istantanee di mixology, cucina, riflessi e dettagli serali.",
    clickToEnlarge: "Clicca per ingrandire",
    modalTitle: "ALMEYDA GALLERY",
    items: [
      {
        id: "gal-1",
        title: "Il Bancone Mixology",
        category: "Cocktail Bar",
        imageUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "La postazione cocktail: marmo scuro, bottiglie selezionate e luce soffusa."
      },
      {
        id: "gal-2",
        title: "Signature Pouring",
        category: "Mixology",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "Cura meticolosa in ogni dosaggio, essenza e guarnizione."
      },
      {
        id: "gal-3",
        title: "Tavoli & Atmosfera Serale",
        category: "Ambiente",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "Intimità contemporanea, tavoli a lume di candela e dettagli in ottone."
      },
      {
        id: "gal-4",
        title: "Dettaglio Dining Contemporaneo",
        category: "Cucina",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "Piatti disegnati per valorizzare la materia prima mediterranea."
      },
      {
        id: "gal-5",
        title: "Bicchieri & Riflessi d'Oro",
        category: "Dettagli",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
        aspect: "landscape",
        caption: "Riflessi caldi e trasparenze che accompagnano le conversazioni serali."
      },
      {
        id: "gal-6",
        title: "Scena Notturna Siracusana",
        category: "Siracusa",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop",
        aspect: "portrait",
        caption: "La magia della pietra chiara e della notte nella città di Siracusa."
      }
    ]
  },
  reservationSection: {
    badge: "Accoglienza & Esperienza",
    title: "Prenota il Tuo Tavolo",
    subtitle: "Consigliamo la prenotazione per garantire la migliore sistemazione e vivere l'esperienza Almeyda con la dovuta calma.",
    form: {
      experienceTypeLabel: "Tipo di Esperienza",
      experienceTypes: {
        aperitivo: {
          title: "Aperitivo",
          desc: "Cocktail & assaggi dello Chef"
        },
        cena: {
          title: "Cena & Dining",
          desc: "Percorso gastronomico completo"
        },
        dopocena: {
          title: "After Dinner",
          desc: "Mixology & atmosfera notturna"
        }
      },
      areaLabel: "Area Preferita",
      areas: {
        cocktail_bar: "Cocktail Bar & Bancone",
        dining_room: "Sala Interna Intima",
        dehors: "Dehors Estivo"
      },
      dateLabel: "Data Desiderata",
      timeLabel: "Orario",
      guestsLabel: "Numero Ospiti",
      guestsOption: "Ospiti",
      nameLabel: "Nome & Cognome",
      namePlaceholder: "Mario Rossi",
      phoneLabel: "Recapito Telefonico",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Email di Contatto",
      emailPlaceholder: "mario.rossi@email.com",
      notesLabel: "Intolleranze, Allergie o Note Speciali",
      notesPlaceholder: "Es. tavolo tranquillo, intolleranza al lattosio...",
      submitBtn: "Conferma Prenotazione"
    },
    confirmation: {
      badge: "Richiesta Ricevuta",
      title: "Grazie, Gentile Ospite.",
      greeting: "Abbiamo ricevuto la tua richiesta di prenotazione per",
      summaryNote: "Verificheremo la disponibilità del tavolo e ti invieremo una conferma al recapito indicato a breve.",
      fastTrackBadge: "Richiesta Immediata WhatsApp",
      whatsappBtn: "Invia Dettagli su WhatsApp",
      callBtn: "Chiama il Locale",
      newRequestBtn: "Nuova Richiesta"
    }
  },
  locationSection: {
    badge: "La Nostra Posizione",
    title: "Siracusa",
    subtitle: "Nel cuore pulsante della serata siracusana.",
    addressTitle: "Indirizzo & Contatti",
    hoursTitle: "Orari di Apertura",
    directionsBtn: "Apri Indicazioni su Google Maps",
    openingHours: [
      { days: "Martedì — Giovedì", hours: "18:30 — 01:30", note: "Aperitivo, Dining & After Dinner" },
      { days: "Venerdì — Sabato", hours: "18:30 — 02:30", note: "Aperitivo, Dining & Cocktail Bar" },
      { days: "Domenica", hours: "18:30 — 01:30", note: "Aperitivo & Dining serale" },
      { days: "Lunedì", hours: "Chiuso", note: "Giorno di riposo" }
    ]
  },
  footer: {
    tagline: "Cocktail · Dining · Siracusa",
    description: "Uno spazio d'atmosfera nel cuore di Siracusa dove la cultura della mixology e la cucina d'autore si uniscono in una serata su misura.",
    exploreTitle: "Esplora",
    contactsTitle: "Contatti",
    hoursTitle: "Orari",
    rights: "Tutti i diritti riservati. Progetto per Almeyda Siracusa.",
    backToTop: "Torna in Cima"
  },
  cocktailModal: {
    badge: "Almeyda Siracusa · Carta Bar",
    title: "Carta Cocktail & Mixology",
    searchPlaceholder: "Cerca cocktail, distillati o ingredienti...",
    filters: {
      all: "Tutti",
      signature: "Signature",
      classic: "Classici",
      twist: "Twist",
      mocktail: "0% Alcol"
    },
    noResults: "Nessun cocktail trovato per la ricerca.",
    bookTable: "Prenota per Degustare"
  },
  diningModal: {
    badge: "Almeyda Siracusa · Cucina",
    title: "Carta Dining & Piatti",
    filters: {
      all: "Tutto il Menu",
      antipasti: "Antipasti",
      primi: "Primi Piatti",
      secondi: "Secondi Piatti",
      dessert: "Dessert"
    },
    noResults: "Nessun piatto trovato in questa categoria.",
    bookTable: "Prenota il Tuo Tavolo"
  },
  cocktails: [
    {
      id: "sig-negroni",
      name: "SIGNATURE NEGRONI",
      category: "signature",
      description: "Gin all'infuso di timo selvatico, vermouth rosso riserva, bitter italiano artigianale, fumo di legno d'ulivo.",
      ingredients: ["Gin Botanico", "Vermouth Rosso Riserva", "Bitter Artigianale", "Scorza d'arancia amara"],
      price: "€ 12",
      profile: "Complesso & Aromatico",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "almeyda-sour",
      name: "ALMEYDA SOUR",
      category: "signature",
      description: "Bourbon affinato, riduzione di agrumi di Sicilia, zucchero di canna integrale, albume e aromatic bitters.",
      ingredients: ["Bourbon Whiskey", "Agrumi di Sicilia", "Zucchero grezzo", "Aromatic Bitters"],
      price: "€ 13",
      profile: "Vellutato & Agrumato",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "paloma",
      name: "PALOMA SIRACUSANO",
      category: "twist",
      description: "Tequila 100% Agave, cordiale al pompelmo rosa chiarificato, succo di lime fresco e soda salina all'origano.",
      ingredients: ["Tequila Blanco", "Pompelmo rosa", "Lime fresco", "Soda salina"],
      price: "€ 12",
      profile: "Fresco & Minerale",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "espresso-martini",
      name: "ESPRESSO MARTINI NOIR",
      category: "classic",
      description: "Vodka premium, estrazione a freddo di caffè tostato a legna, liquore al caffè artigianale e grattugiata di fava tonka.",
      ingredients: ["Vodka Premium", "Cold Brew Coffee", "Kahlúa artigianale", "Fava Tonka"],
      price: "€ 12",
      profile: "Intenso & Avvolgente",
      image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: "sicilian-boulevardier",
      name: "ETNA BOULEVARDIER",
      category: "twist",
      description: "Rye whiskey, amaro siciliano d'erbe, vermouth dry e tintura di cioccolato di Modica.",
      ingredients: ["Rye Whiskey", "Amaro Siciliano", "Vermouth Dry", "Bitter al cacao"],
      price: "€ 13",
      profile: "Speziato & Profondo",
      image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "mediterranean-gin-tonic",
      name: "MEDITERRANEAN TONIC",
      category: "classic",
      description: "Gin distillato con capperi e limone siracusano, tonica premium al bergamotto, rametto di rosmarino.",
      ingredients: ["Gin Mediterraneo", "Tonica Bergamotto", "Rosmarino", "Ginepro"],
      price: "€ 11",
      profile: "Botanico & Rinfrescante",
      image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "botanical-zeroproof",
      name: "GIARDINO DI SIRACUSA (0% VOL)",
      category: "mocktail",
      description: "Distillato analcolico alle erbe, sciroppo di fiori di sambuco, cetriolo chiarificato e top di ginger beer.",
      ingredients: ["Distillato 0.0%", "Fiori di Sambuco", "Cetriolo", "Ginger Beer"],
      price: "€ 9",
      profile: "Analcolico & Floreale",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: "smoked-old-fashioned",
      name: "SMOKED OLD FASHIONED",
      category: "classic",
      description: "Bourbon Single Barrel, zolletta di zucchero muscovado, Angostura e affumicatura istantanea al legno di botte.",
      ingredients: ["Single Barrel Bourbon", "Muscovado", "Angostura", "Fumo di botte"],
      price: "€ 14",
      profile: "Fumoso & Nobile",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop",
      featured: false
    }
  ],
  dishes: [
    {
      id: "ant-1",
      name: "Crudo di Gambero Rosso & Agrumi",
      category: "antipasti",
      description: "Gambero rosso di Mazara del Vallo, emulsione di arance amare siracusane, granita di mandarino tardivo e cialda di riso al nero di seppia.",
      price: "€ 18",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
      dietary: ["Pescato Fresco", "Gluten Free"],
      featured: true
    },
    {
      id: "ant-2",
      name: "Tartare di Fassona al Coltello",
      category: "antipasti",
      description: "Battuta al coltello di fassona piemontese, tuorlo d'uovo bio marinato al soia, maionese leggera al cappero di Salina e chips di topinambur.",
      price: "€ 16",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      dietary: ["Carne Selezionata"],
      featured: false
    },
    {
      id: "ant-3",
      name: "Polpo Croccante su Vellutata di Patate",
      category: "antipasti",
      description: "Tentacolo di polpo scottato alla piastra su crema di patate affumicate al faggio, polvere di olive nere dei monti Iblei e olio al prezzemolo.",
      price: "€ 17",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
      dietary: ["Pescato Locale"],
      featured: false
    },
    {
      id: "pri-1",
      name: "Risotto Carnaroli ai Crostacei & Salicornia",
      category: "primi",
      description: "Riso mantecato al burro acido, bisque profonda di scampi e gamberi, polvere di limone femminello di Siracusa e salicornia croccante.",
      price: "€ 20",
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=800&auto=format&fit=crop",
      dietary: ["Specialità dello Chef"],
      featured: true
    },
    {
      id: "pri-2",
      name: "Tagliolini Fatti a Mano & Tonno Rosso",
      category: "primi",
      description: "Pasta all'uovo tirata a mano, battuto di tonno rosso del Mediterraneo, pomodorini datterini confit, finocchietto selvatico e mollica atturrata.",
      price: "€ 19",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
      dietary: ["Pasta Fresca"],
      featured: false
    },
    {
      id: "pri-3",
      name: "Ravioli di Ricotta Iblea & Tartufo Nero",
      category: "primi",
      description: "Ravioli ripieni di ricotta fresca vaccina dei monti Iblei, fondo bruno vegetale alle erbe spontanee e scaglie di tartufo nero estivo.",
      price: "€ 18",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
      dietary: ["Vegetariano"],
      featured: false
    },
    {
      id: "sec-1",
      name: "Trancio di Ricciola & Riduzione al Nero d'Avola",
      category: "secondi",
      description: "Ricciola scottata su vellutata di finocchi al profumo d'anice stellato, bietolina selvatica saltata e riduzione densa di Nero d'Avola.",
      price: "€ 24",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
      dietary: ["Pescato del Giorno"],
      featured: true
    },
    {
      id: "sec-2",
      name: "Filetto di Manzo al Burro Chiarificato",
      category: "secondi",
      description: "Filetto di scottona cotto a bassa temperatura e rifinito alla brace, scalogno glassato al balsamico e purea di radici invernali.",
      price: "€ 26",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
      dietary: ["Cottura a Bassa Temperatura"],
      featured: false
    },
    {
      id: "sec-3",
      name: "Pancia di Maialino & Mele Cotogne",
      category: "secondi",
      description: "Pancia di maialino da latte a lenta cottura con cotenna croccante, purea speziata di mele cotogne e jus al vermouth ambrato.",
      price: "€ 22",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      dietary: ["Specialità"],
      featured: false
    },
    {
      id: "des-1",
      name: "Sfera al Fondente 70% & Frutto della Passione",
      category: "dessert",
      description: "Guscio croccante di cioccolato amaro monorigine, cuore cremoso al frutto della passione, crumble di nocciole tostate e fior di sale.",
      price: "€ 9",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop",
      dietary: ["Dessert d'Autore"],
      featured: true
    },
    {
      id: "des-2",
      name: "Cannolo Contemporaneo Scomposto",
      category: "dessert",
      description: "Cialda croccante al cacao e marsala, mousse leggera di ricotta fresca setacciata, scorzette di arancia candita bio e granella di pistacchio di Bronte DOP.",
      price: "€ 8",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      dietary: ["Tradizione Reinterpretata"],
      featured: false
    }
  ]
};
