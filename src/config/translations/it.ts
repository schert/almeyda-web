import { TranslationDictionary } from './types';

export const itTranslations: TranslationDictionary = {
  common: {
    brandName: "ALMEYDA",
    brandSubtitle: "Antico Bistrot Siciliano",
    city: "Siracusa",
    citySubtitle: "Ortigia · Siracusa",
    bookTable: "PRENOTA UN TAVOLO",
    explore: "Scopri di più",
    close: "Chiudi",
    viewMenu: "CARTA COMPLETA DEL MENÙ",
    viewCocktailMenu: "LISTINO COCKTAIL",
    viewCafeteriaMenu: "LISTINO CAFFETTERIA",
    ingredients: "Ingredienti",
    required: "obbligatorio"
  },
  navbar: {
    home: "Home",
    carta: "La Carta",
    menu: "Menù",
    cocktailBar: "Cocktail Bar",
    caffetteria: "Caffetteria",
    location: "Ambientazione",
    experiences: "Esperienze",
    spazioArte: "Spazio all'Arte",
    eventi: "Eventi",
    contattaci: "Contattaci",
    book: "Prenota",
    openFrom: "Aperto tutti i giorni",
    openMenu: "Apri navigazione",
    closeMenu: "Chiudi navigazione"
  },
  hero: {
    badge: "Antico Bistrot Siciliano · Teatro Comunale di Siracusa",
    headline: "Un luogo sospeso nel tempo, dove il fascino della storia incontra il piacere dell’ospitalità.",
    tributeTitle: "Omaggio a Giuseppe Damiani Almeyda (1834 - 1911)",
    tributeParagraph1: "Abbiamo deciso di rendere omaggio ad uno dei più celebri rappresentanti del panorama architettonico in Sicilia tra la seconda metà dell’Ottocento ed i primi del Novecento, Giuseppe Damiani Almeyda (1834 - 1911).",
    tributeParagraph2: "Varcare la soglia di Almeyda significa entrare in un luogo sospeso nel tempo, dove il fascino della storia incontra il piacere dell’ospitalità.",
    tributeParagraph3: "Siete all’interno del Teatro Comunale di Siracusa, nel cuore autentico di Ortigia: uno spazio che custodisce memoria, arte e bellezza, e che oggi si apre a una nuova esperienza capace di coinvolgere e sorprendere tutti i cinque sensi.",
    tributeParagraph4: "Luogo di incontro internazionale, atmosfera unica e sala eventi fanno di Almeyda un autentico Antico Bistrot Siciliano.",
    tributeParagraph5: "Tutti i nostri prodotti sono homemade, siamo attenti alla stagione ed ai sapori autentici. Vini e oli ricercati, baguette calde e soprattutto amore e fantasia.",
    bookCta: "Prenota un Tavolo",
    menuCta: "Scopri il Menù",
    scrollHint: "Scorri per esplorare"
  },
  menuSection: {
    badge: "Sapori Autentici & Tradizione",
    title: "Menù",
    subtitle: "Prodotti freschi fatti in casa, attenti alla stagione e alla bontà siciliana.",
    description: "Tutti i nostri prodotti sono preparati artigianalmente con passione quotidiana: taglieri ricercati, baguette calde fragranti, primi e secondi della memoria e dolci tradizionali accompagnati da una preziosa carta di oli e vini del territorio.",
    exploreMenuBtn: "Visualizza il Menù",
    featuredBadge: "Specialità della Casa",
    categories: {
      all: "Tutte le Proposte",
      baguette: "Baguette Calde & Sfizi",
      antipasti: "Antipasti & Taglieri",
      primi: "Primi della Tradizione",
      secondi: "Secondi & Pescato",
      dessert: "Dolci & Pasticceria",
      viniOli: "Oli & Vini Ricercati"
    },
    dishes: [
      {
        id: "m-1",
        name: "Baguette Calda Ortigia",
        category: "baguette",
        description: "Baguette artigianale appena sfornata con capocollo siciliano, stracciatella fresca, pomodorini confit e olio extravergine d'oliva dei Monti Iblei.",
        price: "€ 11,00",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop",
        notes: "Preparazione artigianale · Servita calda",
        featured: true
      },
      {
        id: "m-2",
        name: "Baguette del Teatro",
        category: "baguette",
        description: "Baguette calda croccante con tonno rosso sott'olio fatto in casa, cipolla caramellata di Giarratana, capperi di Salina e scorzetta di limone siracusano.",
        price: "€ 13,00",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop",
        notes: "Ricetta della casa",
        featured: true
      },
      {
        id: "m-3",
        name: "Tagliere dell'Antico Bistrot",
        category: "antipasti",
        description: "Selezione nobile di formaggi storici siciliani a latte crudo (Ragusano DOP, Piacentinu Ennese), salumi artigianali di maialino nero, confetture biologiche e pane caldo cotto a legna.",
        price: "€ 22,00",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop",
        notes: "Ideale per due persone",
        featured: true
      },
      {
        id: "m-4",
        name: "Caponata Storica con Mandorle di Noto",
        category: "antipasti",
        description: "Melanzane dorate, sedano croccante, olive nocellara dell'Etna, pinoli e riduzione di aceto di vino e miele millefiori locale.",
        price: "€ 12,00",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
        notes: "Tradizione secolare",
        featured: false
      },
      {
        id: "m-5",
        name: "Busiate di Grano Antico alla Siracusana",
        category: "primi",
        description: "Pasta fresca trafilata al bronzo con pomodoro datterino cotto a fuoco lento, acciughe di Sciacca, finocchietto selvatico e mollica atturrata tostate.",
        price: "€ 16,00",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
        notes: "Grani antichi siciliani",
        featured: true
      },
      {
        id: "m-6",
        name: "Tortelli di Ricotta e Zafferano",
        category: "primi",
        description: "Pasta fatta a mano ripiena di ricotta fresca di pecora iblea, burro aromatizzato alle erbe officinali e zafferano siciliano.",
        price: "€ 17,00",
        image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=1000&auto=format&fit=crop",
        notes: "Pasta fresca all'uovo",
        featured: false
      },
      {
        id: "m-7",
        name: "Pescato del Giorno all'Acqua Pazza",
        category: "secondi",
        description: "Filetto di pesce fresco dal porto di Siracusa, cotti in brodetto profumato di pomodorini di Pachino, aglio rosso di Nubia e basilico fresco.",
        price: "€ 24,00",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
        notes: "Pescato sostenibile locale",
        featured: true
      },
      {
        id: "m-8",
        name: "Cannolo Scomposto con Ricotta Iblea",
        category: "dessert",
        description: "Cialda croccante alla cannella fritta a mano, crema vellutata di ricotta dolce di pecora, gocce di cioccolato di Modica e pistacchio di Bronte.",
        price: "€ 8,00",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        notes: "Fatto al momento",
        featured: true
      },
      {
        id: "m-9",
        name: "Selezione di Oli & Vini d'Autore",
        category: "viniOli",
        description: "Percorso di degustazione con tre eccellenze olearie monocultivar (Tonda Iblea, Nocellara, Biancolilla) e calici di vini vulcanici dell'Etna e Val di Noto.",
        price: "€ 18,00",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        notes: "Etichette biologiche e naturali",
        featured: true
      }
    ]
  },
  cocktailSection: {
    badge: "Miscelazione d'Autore & Spiriti Rari",
    title: "Cocktail Bar",
    subtitle: "Creazioni d'ispirazione Liberty, botaniche isolane e grandi pietre miliari.",
    description: "Il nostro bancone celebra l'arte della miscelazione in una cornice senza tempo. Dalle ricette d'epoca rivisitate con agrumi e infusi della macchia mediterranea fino ai grandi classici internazionali preparati a regola d'arte.",
    viewMenuBtn: "Consulta la Carta Cocktail",
    categories: {
      all: "Tutti i Cocktail",
      signature: "Creazioni Esclusive",
      classici: "Grandi Classici",
      analcolici: "Analcolici della Casa"
    },
    cocktails: [
      {
        id: "c-1",
        name: "Almeyda 1834",
        category: "signature",
        description: "Un tributo aromatico con note d'arancia amara siciliana, vermouth rosso antico, distillato d'agave e profumo di rosmarino dell'Anapo affumicato.",
        ingredients: ["Distillato d'Agave", "Vermouth Rosso Siciliano", "Liquore all'Arancia Amara", "Rosmarino Affumicato"],
        price: "€ 14,00",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        profile: "Complesso · Speziato · Agrumato",
        featured: true
      },
      {
        id: "c-2",
        name: "Notte ad Ortigia",
        category: "signature",
        description: "Gin artigianale all'alloro e ginepro dell'Etna, liquore ai fiori di zagara, cordiale al limone di Siracusa e tonica mediterranea.",
        ingredients: ["Gin Etneo", "Elisir di Zagara", "Limone Femminello", "Tonica Mediterranea"],
        price: "€ 13,00",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        profile: "Fresco · Floreale · Balsamico",
        featured: true
      },
      {
        id: "c-3",
        name: "Il Palco Reale",
        category: "signature",
        description: "Bourbon invecchiato, amaro artigianale all'arancia rossa, gocce di bitter al cioccolato fondente di Modica e velluto di mandorla tostata.",
        ingredients: ["Bourbon Reserve", "Amaro Siciliano", "Bitter al Cioccolato Modicano", "Olio Essenziale d'Arancia"],
        price: "€ 15,00",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000&auto=format&fit=crop",
        profile: "Intenso · Avvolgente · Dorato",
        featured: true
      },
      {
        id: "c-4",
        name: "Negroni dell'Antico Bistrot",
        category: "classici",
        description: "La nostra interpretazione del Negroni classico con bitter rosso infuso alla carruba siracusana, vermouth ambrato e gin alle erbe.",
        ingredients: ["Gin alle Botaniche", "Bitter Artigianale alla Carruba", "Vermouth Riserva"],
        price: "€ 12,00",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1000&auto=format&fit=crop",
        profile: "Amaricato · Intramontabile · Deciso",
        featured: false
      },
      {
        id: "c-5",
        name: "Zagara & Melograno 0%",
        category: "analcolici",
        description: "Distillato analcolico alle erbe aromatiche, spremuta di melograno fresco, succo di mandarino tardivo e soda al basilico.",
        ingredients: ["Botaniche Analcoliche", "Melograno Fresco", "Mandarino Tardivo", "Soda al Basilico"],
        price: "€ 10,00",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1000&auto=format&fit=crop",
        profile: "Fruttato · Rinfrescante · Vellutato",
        featured: false
      }
    ]
  },
  caffetteriaSection: {
    badge: "Il Salotto del Teatro",
    title: "Caffetteria",
    subtitle: "Miscele ricercate, colazioni tradizionali e momenti di pausa all'interno del Teatro.",
    description: "Il profumo del caffè appena macinato accoglie gli ospiti fin dal mattino: selezioni 100% arabica, lievitati artigianali da forno, tisane biologiche in foglie e cioccolate calde speziate servite nella splendida cornice del Teatro Comunale.",
    categories: {
      all: "Tutte le Selezioni",
      caffe: "Caffè & Specialità",
      pasticceria: "Lievitati & Dolci",
      infusi: "Tè, Tisane & Granite"
    },
    items: [
      {
        title: "Espresso del Teatro",
        category: "caffe",
        description: "Miscela monorigine tostata a legna con note di mandorla tostata e cacao amaro.",
        price: "€ 1,80",
        tag: "Miscela Esclusiva"
      },
      {
        title: "Cappuccino alla Crema di Mandorla",
        category: "caffe",
        description: "Latte montato a regola d'arte con latte di mandorla d'Avola biologica e polvere di cacao.",
        price: "€ 3,50",
        tag: "Specialità"
      },
      {
        title: "Cornetto Tradizionale & Fagottini",
        category: "pasticceria",
        description: "Sfoglia fragrante al burro con ripieno di crema alla vaniglia di Sicilia o pistacchio puro.",
        price: "€ 2,50",
        tag: "Fatto in Casa"
      },
      {
        title: "Tè in Foglie & Infusi Botanici",
        category: "infusi",
        description: "Selezione di foglie intere di tè verde, nero affumicato, karkadè e tisane ai fiori di zagara.",
        price: "€ 5,00",
        tag: "Selezione Pregiata"
      },
      {
        title: "Granita Tradizionale Siciliana (in stagione)",
        category: "infusi",
        description: "Granita artigianale alla mandorla pizzuta, limone di Siracusa o caffè con panna montata.",
        price: "€ 4,50",
        tag: "Tradizione Pura"
      },
      {
        title: "Cioccolata Calda di Modica in Tazza",
        category: "pasticceria",
        description: "Pura cioccolata artigianale servita densa con cannella o peperoncino.",
        price: "€ 5,50",
        tag: "Invernale"
      }
    ],
    highlights: [
      {
        title: "Colazione nel Foyer",
        description: "Inizia la giornata circondato da marmi storici, dettagli Liberty e luce naturale.",
        iconName: "Sun"
      },
      {
        title: "Pasticceria Artigianale",
        description: "Dolci sfornati quotidianamente seguendo ricette storiche siciliane.",
        iconName: "Coffee"
      },
      {
        title: "Pausa Pomeridiana",
        description: "Un momento di relax con tè ricercati, libri d'arte e atmosfera tranquilla.",
        iconName: "Feather"
      }
    ]
  },
  locationSection: {
    badge: "Nel Cuore di Ortigia",
    title: "Ambientazione",
    subtitle: "All'interno del magnifico Teatro Comunale di Siracusa.",
    description: "Varcare la soglia di Almeyda significa entrare in uno spazio monumentale che custodisce memoria, arte e bellezza. L'edificio, progettato e decorato sotto la guida dei grandi maestri dell'Ottocento, è la cornice ideale per un antico bistrot d'eccellenza.",
    theatreTitle: "Il Teatro Comunale di Siracusa",
    theatreDescription: "Inaugurato alla fine dell'Ottocento nel cuore di Ortigia, il Teatro è un capolavoro di architettura e decorazione. Almeyda vive in armonia con questi ambienti storici, offrendo una sala interna d'epoca e un elegante spazio all'aperto.",
    addressTitle: "Indirizzo & Come Raggiungerci",
    hoursTitle: "Orari di Apertura",
    directionsBtn: "Indicazioni Stradali su Mappa",
    openingHours: [
      { days: "Mercoledì — Domenica", hours: "10:00 — 15:00 | 18:30 — 00:30", note: "Caffetteria, Pranzo, Aperitivo & Cocktail Bar" },
      { days: "Lunedì", hours: "12:00 — 15:00 | 19:00 — 23:30", note: "Pranzo, Aperitivo & Dining" },
      { days: "Martedì", hours: "Chiuso", note: "Giorno di riposo settimanale" }
    ],
    gallery: [
      {
        title: "La Facciata Storica",
        caption: "Il Teatro Comunale di Siracusa, gioiello architettonico di Ortigia.",
        imageUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "La Sala dell'Antico Bistrot",
        caption: "Arredi curati, luci dorate e soffitti d'epoca in una dimensione intima.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Il Bancone della Miscelazione",
        caption: "L'angolo dedicato alla mixology e alle selezioni di spiriti rari.",
        imageUrl: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Dehors in Ortigia",
        caption: "I tavoli esterni tra la pietra bianca di Siracusa e la brezza marina.",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  experiencesSection: {
    badge: "Coinvolgere Tutti i Cinque Sensi",
    title: "Esperienze",
    subtitle: "Percorsi gastronomici, sensoriali e culturali creati su misura.",
    description: "Ogni esperienza da Almeyda è pensata per far scoprire l'anima profonda della Sicilia: dall'olio extravergine d'oliva d'eccellenza alla degustazione dei vini, fino alle lezioni private di miscelazione.",
    bookBtn: "Richiedi Esperienza",
    items: [
      {
        title: "Viaggio tra Oli & Vini Ricercati",
        subtitle: "Degustazione Guidata dei Terroir Siciliani",
        description: "Un percorso sensoriale con assaggio guidato di tre oli extravergini monocultivar e quattro vini etnei e siracusani, abbinati a baguette calde e formaggi storici.",
        duration: "Circa 90 minuti",
        tag: "Sensoriale",
        iconName: "Wine"
      },
      {
        title: "L'Aperitivo del Teatro",
        subtitle: "Cocktail d'Autore & Sfizi dello Chef",
        description: "Due signature drink a scelta accompagnati dal tagliere dell'Antico Bistrot con calde baguette fragranti e assaggi tipici della tradizione siciliana.",
        duration: "Al tramonto o in prima serata",
        tag: "Conviviale",
        iconName: "Sparkles"
      },
      {
        title: "Cena Sensoriale a Cinque Sensi",
        subtitle: "Menù Degustazione tra Storia e Cucina",
        description: "Percorso gastronomico di cinque portate con narrazione della storia del Teatro e di Giuseppe Damiani Almeyda, in abbinamento a calici di vino selezionati.",
        duration: "Cena completa",
        tag: "Esclusivo",
        iconName: "Utensils"
      }
    ]
  },
  spazioArteSection: {
    badge: "Residenza Creativa & Accoglienza",
    title: "Spazio all'Arte",
    subtitle: "Una casa nel cuore del Teatro per musicisti, pittori, scrittori e spiriti creativi.",
    quote: "Contribuisci nel dare colore ad Almeyda: crediamo nella socializzazione viva e nello scambio autentico di idee e cultura che fa arte.",
    description1: "Almeyda è un luogo vivo che respira l'eredità artistica del Teatro Comunale di Siracusa. Per questo apriamo con entusiasmo le nostre porte a tutti gli artisti, di passaggio o residenti, che desiderano condividere la propria sensibilità.",
    description2: "Che tu sia alla ricerca di uno spazio intimo per un'esibizione acustica, una lettura poetica, un'esposizione temporanea o semplicemente di un appoggio logistico sicuro dove custodire i tuoi strumenti musicali e materiali di scena durante le prove o le tue giornate in Ortigia, da noi troverai sempre disponibilità e rispetto.",
    description3: "Fermati per un ristoro, lasciati offrire un caffè al bancone in cambio di una chiacchierata, un racconto, uno spartito o un'idea condivisa. Insieme diamo forma a uno spazio dove la cultura si incontra e si rinnova ogni giorno.",
    ctaArtist: "Presenta la tua Idea",
    ctaWhatsapp: "Contatto Diretto Artisti",
    features: [
      {
        title: "Spazio di Esibizione & Live",
        description: "Palco intimo per set acustici, improvvisazioni musicali, reading teatrali e performance tra i tavoli del bistrot.",
        tag: "Palco Aperto",
        iconName: "Music"
      },
      {
        title: "Appoggio Logistico & Custodia",
        description: "Un rifugio sicuro e custodito dove posare chitarre, custodie, tele, attrezzi di scena e zaini durante la tua sosta a Siracusa.",
        tag: "Punto di Appoggio",
        iconName: "ShieldCheck"
      },
      {
        title: "Un Caffè per una Chiacchierata",
        description: "Punto di ristoro sincero: un espresso o un calice offerto al banco per conoscersi, scambiare aneddoti e seminare nuove idee.",
        tag: "Accoglienza",
        iconName: "Coffee"
      },
      {
        title: "Socializzazione & Connessione Culturale",
        description: "Incontra altri creativi e connettiti con il pubblico sensibile del Teatro in un'atmosfera calda e senza formalismi.",
        tag: "Scambio Culturale",
        iconName: "Users"
      }
    ]
  },
  eventiSection: {
    badge: "Momenti Unici al Teatro",
    title: "Eventi",
    subtitle: "La sala eventi e gli spazi storici a disposizione per le tue occasioni speciali.",
    description: "Luogo di incontro internazionale, atmosfera unica e sala eventi fanno di Almeyda una cornice prestigiosa per ricevimenti privati, serate musicali dal vivo, incontri culturali, mostre e presentazioni aziendali.",
    ctaBtn: "Richiedi Disponibilità Sala",
    salaEventiTitle: "La Sala Eventi Privata",
    salaEventiDescription: "Uno spazio suggestivo con acustica d'eccezione, illuminazione architettonica regolabile, servizio catering dedicato e bancone bar privato per accogliere i tuoi ospiti con la massima riservatezza e stile.",
    eventTypes: [
      {
        title: "Ricevimenti & Feste Private",
        description: "Compleanni eleganti, anniversari e celebrazioni con menù personalizzato e cocktail list dedicata.",
        iconName: "PartyPopper"
      },
      {
        title: "Serate Musicali & Performance",
        description: "Concerti jazz dal vivo, musica d'atmosfera acustica e appuntamenti artistici all'interno del Teatro.",
        iconName: "Music"
      },
      {
        title: "Incontri Aziendali & Presentazioni",
        description: "Spazio attrezzato per riunioni esclusive, presentazioni di prodotto, degustazioni stampa e conferenze.",
        iconName: "Users"
      },
      {
        title: "Vernissage & Mostre d'Arte",
        description: "Esposizioni temporanee di pittura, scultura e fotografia in dialogo con l'architettura storica.",
        iconName: "Palette"
      }
    ]
  },
  contattaciSection: {
    badge: "Siamo a Tua Disposizione",
    title: "Contattaci",
    subtitle: "Prenota il tuo tavolo o richiedi informazioni per il tuo evento.",
    addressLabel: "Indirizzo",
    phoneLabel: "Telefono",
    whatsappLabel: "WhatsApp Diretto",
    emailLabel: "Posta Elettronica",
    hoursLabel: "Orari di Apertura",
    form: {
      title: "Invia una Richiesta",
      subtitle: "Compila il modulo sottostante, il nostro personale ti risponderà con tempestività.",
      nameLabel: "Nome e Cognome",
      namePlaceholder: "Mario Rossi",
      phoneLabel: "Numero di Telefono",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Indirizzo Email",
      emailPlaceholder: "mario.rossi@email.it",
      subjectLabel: "Oggetto della Richiesta",
      subjectOptions: {
        tavolo: "Prenotazione Tavolo (Pranzo / Cena / Drink)",
        evento: "Organizzazione Evento Privato",
        arte: "Proposta Artistica / Spazio all'Arte",
        informazioni: "Richiesta Informazioni Generali"
      },
      dateLabel: "Data Desiderata",
      timeLabel: "Orario Indicativo",
      guestsLabel: "Numero di Persone",
      messageLabel: "Messaggio o Richieste Particolari",
      messagePlaceholder: "Segnala eventuali intolleranze, preferenze di tavolo o dettagli dell'evento...",
      submitBtn: "Invia Richiesta"
    },
    confirmation: {
      title: "Richiesta Inviata con Successo",
      message: "Grazie. Abbiamo registrato la tua richiesta. Ti ricontatteremo a breve per confermare la disponibilità.",
      whatsappBtn: "Scrivici su WhatsApp per Risposta Immediata",
      callBtn: "Chiama Direttamente",
      newRequestBtn: "Invia un'Altra Richiesta"
    }
  },
  footer: {
    tagline: "Antico Bistrot Siciliano",
    subTagline: "Teatro Comunale di Siracusa · Ortigia",
    description: "Un omaggio a Giuseppe Damiani Almeyda: storia, arte, sapori autentici, calde baguette e miscelazione d'autore nel cuore di Siracusa.",
    sectionsTitle: "Sezioni",
    contactsTitle: "Contatti & Recapiti",
    hoursTitle: "Orari di Apertura",
    rights: "Tutti i diritti riservati. Almeyda — Antico Bistrot Siciliano.",
    backToTop: "Torna in Cima"
  }
};
