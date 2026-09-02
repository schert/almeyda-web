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
    about: "Chi Siamo",
    carta: "Sapori",
    menu: "Menù",
    cocktailBar: "Cocktail Bar",
    caffetteria: "Caffetteria",
    location: "Ambientazione",
    experiences: "Esperienze",
    spazioArte: "Arte",
    store: "Negozio",
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
    bookCta: "Prenota un Tavolo",
    menuCta: "Scopri i Sapori",
    scrollHint: "Scorri per esplorare"
  },
  menuSection: {
    badge: "Homemade & Sapori Autentici",
    title: "Sapori",
    subtitle: "Scopri il nostro menu' homemade, vieni a trovarci.",
    description: "Tutti i nostri prodotti sono homemade, siamo attenti alla stagione ed ai sapori autentici: baguette calde fragranti, taglieri ricercati, primi della memoria, pasticceria artigianale, vini e oli ricercati preparati con passione e fantasia.",
    exploreMenuBtn: "Vieni a Trovarci",
    visitCta: "Scopri il nostro menu' homemade, vieni a trovarci.",
    gallery: [
      {
        id: "g-1",
        title: "Baguette Calde & Sfizi",
        description: "Baguette artigianali appena sfornate con capocollo siciliano, tonno locale, stracciatella e olio dei Monti Iblei.",
        imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop",
        highlight: "Sfornate al Momento"
      },
      {
        id: "g-2",
        title: "Taglieri dell'Antico Bistrot",
        description: "Selezione nobile di formaggi storici siciliani a latte crudo, salumi del territorio e confetture biologiche.",
        imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000&auto=format&fit=crop",
        highlight: "Eccellenze Locali"
      },
      {
        id: "g-3",
        title: "Pasta Fresca & Primi Tradizionali",
        description: "Pasta fatta in casa trafilata al bronzo, pomodorini datterini cotti lenti, finocchietto selvatico e profumi di Sicilia.",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
        highlight: "Fatta a Mano"
      },
      {
        id: "g-4",
        title: "Pescato & Pietanze di Stagione",
        description: "Piatti freschi del pescato del giorno di Siracusa e ingredienti selezionati con rispetto del ciclo delle stagioni.",
        imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
        highlight: "Pescato Fresco"
      },
      {
        id: "g-5",
        title: "Pasticceria & Dolci Homemade",
        description: "Cannoli croccanti con ricotta fresca iblea, creme vellutate al pistacchio puro e dolci tradizionali.",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        highlight: "Dolci della Casa"
      },
      {
        id: "g-6",
        title: "Cocktail Bar & Miscelazione d'Autore",
        description: "Drink d'ispirazione Liberty, agrumi di Siracusa, erbe botaniche isolane e spiriti rari sapientemente dosati.",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        highlight: "Mixology d'Autore"
      },
      {
        id: "g-7",
        title: "Oli Pregiati & Cantina Ricercata",
        description: "Monocultivar siciliani d'eccellenza, vini naturali e calici vulcanici dell'Etna e del Val di Noto.",
        imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        highlight: "Oli & Vini"
      },
      {
        id: "g-8",
        title: "Caffetteria & Foyer Storico",
        description: "Espresso della tradizione, tè pregiati in foglie, granite artigianali e relax tra le mura storiche del Teatro.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
        highlight: "Atmosfera Storica"
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
    subtitle: "All'interno delle suggestive sale del Teatro Comunale di Siracusa.",
    description: "Situato nel cuore del centro storico, nell'isola di Ortigia e all'interno delle suggestive sale del Teatro Comunale di Siracusa. Almeyda e il Teatro Massimo, in omaggio ad uno dei più celebri rappresentanti del panorama architettonico in Sicilia tra la seconda metà dell’Ottocento ed i primi del Novecento, Giuseppe Damiani Almeyda (1834 - 1911).",
    theatreTitle: "Il Teatro Comunale & Giuseppe Damiani Almeyda",
    theatreDescription: "Situato nel cuore del centro storico, nell'isola di Ortigia e all'interno delle suggestive sale del Teatro Comunale di Siracusa. Almeyda e il Teatro Massimo, in omaggio ad uno dei più celebri rappresentanti del panorama architettonico in Sicilia tra la seconda metà dell’Ottocento ed i primi del Novecento, Giuseppe Damiani Almeyda (1834 - 1911).",
    tributeText: "Situato nel cuore del centro storico, nell'isola di Ortigia e all'interno delle suggestive sale del Teatro Comunale di Siracusa. Almeyda e il Teatro Massimo, in omaggio ad uno dei più celebri rappresentanti del panorama architettonico in Sicilia tra la seconda metà dell’Ottocento ed i primi del Novecento, Giuseppe Damiani Almeyda (1834 - 1911).",
    roomsTitle: "Le Sale & Gli Spazi del Teatro",
    roomsSubtitle: "Un viaggio attraverso le sei sale storiche tra architettura Liberty, arte e atmosfera",
    rooms: [
      {
        name: "Sala Liberty",
        description: "Eleganza floreale, dettagli d'epoca in ferro battuto, decori raffinati e luce calda per un'accoglienza senza tempo.",
        iconName: "Sparkles",
        tag: "Fascino Liberty"
      },
      {
        name: "Salone delle Arti",
        description: "Lo spazio maestoso dedicato a mostre, vernissage, incontri culturali e convivialità nobile.",
        iconName: "Palette",
        tag: "Esposizioni & Arte"
      },
      {
        name: "Passa Carrozza",
        description: "L'antico e suggestivo passaggio d'accesso che conserva la memoria dei cocchi storici e il respiro di Ortigia.",
        iconName: "Compass",
        tag: "Memoria Storica"
      },
      {
        name: "Foyer",
        description: "Il sontuoso atrio d'ingresso del Teatro, perfetto per un caffè mattutino, una lettura o un aperitivo serale.",
        iconName: "Landmark",
        tag: "Atrio d'Epoca"
      },
      {
        name: "Sala prove",
        description: "Ambiente intimo e raccolto dove l'arte prende forma tra prove d'autore, note musicali e scambi creativi.",
        iconName: "Music",
        tag: "Creatività & Suono"
      },
      {
        name: "Il Palco",
        description: "La ribalta scenica del Teatro, fulcro delle emozioni, performance dal vivo e serate speciali.",
        iconName: "Theater",
        tag: "Spettacolo & Live"
      }
    ],
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
        title: "Sessioni Jazz & Contrabbasso",
        caption: "Note jazz dal vivo e improvvisazioni d'autore nell'atmosfera calda del bistrot.",
        imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Il Pianoforte a Coda",
        caption: "Accordi classici e melodie intime che accompagnano gli aperitivi e le serate al teatro.",
        imageUrl: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Pareti Espositive & Mostre d'Autore",
        caption: "Dipinti e opere d'arte contemporanea allestite sulle storiche volte in pietra.",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Sassofono & Atmosfere Swing",
        caption: "Assoli avvolgenti e ritmi swing tra le luci soffuse e gli arredi d'epoca.",
        imageUrl: "https://images.unsplash.com/photo-1525994886773-080587e161c2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Vernissage & Incontri d'Arte",
        caption: "Brindisi d'autore tra artisti, collezionisti e appassionati durante le inaugurazioni.",
        imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Set Acustico & Chitarra Live",
        caption: "Performance unplugged e cantautorato intimo nel cuore del Ridotto teatrale.",
        imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Vinyl Corner & Selezione Sonora",
        caption: "Dischi in vinile a 33 giri e cocktail d'autore shakerati a ritmo di musica.",
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Voce & Canto d'Autore",
        caption: "Echi vocali retrò e standard americani ed europei interpretati dal vivo con microfoni d'epoca.",
        imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Sculture & Installazioni nel Foyer",
        caption: "Forme plastiche e creazioni tridimensionali integrate nell'architettura teatrale.",
        imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Tromba & Night Sessions",
        caption: "Brillantezza di ottoni e dialoghi musicali nel salotto notturno del bistrot.",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Dettagli Pittorici & Tele in Mostra",
        caption: "Tratti materici, pigmenti puri e tele in esposizione temporanea tra i tavoli.",
        imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Musica da Camera & Archi",
        caption: "Momenti cameristici d'eccellenza che risuonano nell'acustica perfetta delle sale storiche.",
        imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Ceramiche d'Autore & Sculture",
        caption: "Pezzi unici forgiati a mano e smalti d'artista esposti negli angoli Liberty.",
        imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Calici & Sound Atmosphere",
        caption: "La degustazione di vini etnei e creazioni homemade scandita da sottofondi curati.",
        imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Live Performance & Palco d'Arte",
        caption: "L'energia dei concerti intimi e delle serate culturali al Teatro Comunale.",
        imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "Notte di Note in Ortigia",
        caption: "L'incanto delle lanterne del bistrot e la musica che si diffonde nella quiete di Ortigia.",
        imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  aboutSection: {
    badge: "Storia, Visione & Accoglienza",
    title: "Chi Siamo & L'Idea",
    subtitle: "Un Antico Arts Café Bistrot nel cuore del Teatro Comunale di Siracusa.",
    aboutTitle: "La Nostra Storia",
    aboutText1: "Un gruppo di giovani imprenditori provenienti da settori diversi: soggiorni, ristorazione, mare e musica, la specialità di ognuno di loro.",
    aboutText2: "Insieme, un progetto che parte dai luoghi in cui realizzare i loro sogni di impresa ed anche il sogno dei nostri clienti.",
    ideaTitle: "L'Idea: Un Antico Arts Café Bistrot",
    ideaSubtitle: "Un luogo ove studiare, leggere, sposarsi, cenare, ascoltare buona musica.",
    ideaQuote: "Ma soprattutto creare atmosfera e benessere: unire ai nostri percorsi food una vera e propria esperienza sensoriale completa.",
    ideaPoints: [
      {
        title: "Incontro per Artisti",
        description: "Punto di riferimento e di incontro di tutti gli artisti di passaggio.",
        iconName: "Palette"
      },
      {
        title: "Arte, Manufatti & Teatro",
        description: "Dare vita a mostre d'arte e di manufatti, avvicinare i giovani ai luoghi del teatro.",
        iconName: "Sparkles"
      },
      {
        title: "Punto di Riferimento",
        description: "Diventare punto di riferimento turistico e cittadino per Siracusa e Ortigia.",
        iconName: "Compass"
      },
      {
        title: "Eventi Unici & Territorio",
        description: "Offrire il nostro mood ed il nostro buon cibo per eventi unici sul territorio.",
        iconName: "HeartHandshake"
      }
    ],
    offerTitle: "L'Offerta Poliedrica",
    offerSubtitle: "Dalla sosta informale all'esclusiva Food & Wine Experience",
    offerText1: "Poliedrica e variegata, la nostra offerta spazia da una semplice sosta durante la giornata, per gustare il nostro cibo e i nostri drink, ma anche la ricerca di un esclusivo Food and Wine Experience.",
    offerText2: "Atmosfera suggestiva, ambiente multiculturale e bellissime selezioni musicali fermano il tempo e ti proiettano in una storia d'altri tempi.",
    staffTitle: "Lo Staff",
    staffSubtitle: "L'orologio che scandisce il tempo del vostro benessere",
    staffQuote: "Magari i nomi nel tempo si avvicenderanno, ma noi siamo l'orologio che scandisce il tempo del vostro benessere.",
    staffMembers: [
      { role: "Regia", name: "Barbara", iconName: "Clapperboard", department: "Direzione & Visione" },
      { role: "Accoglienza", name: "Mabel", iconName: "Heart", department: "Hospitality & Sala" },
      { role: "Beverage", name: "Roberta", iconName: "Wine", department: "Cocktail Bar & Cantina" },
      { role: "Pass", name: "Syria", iconName: "Flame", department: "Coordinamento Servizio" },
      { role: "Laboratorio", name: "Simone", iconName: "Sparkles", department: "Ricerca & Produzione" },
      { role: "Chef", name: "Enrico", iconName: "UtensilsCrossed", department: "Cucina & Territorio" },
      { role: "Manutenzione", name: "Malboro", iconName: "Wrench", department: "Cura & Struttura" }
    ],
    languagesLabel: "Parliamo",
    languages: ["Italiano", "Inglese", "Spagnolo", "Portoghese", "Francese"]
  },
  experiencesSection: {
    badge: "Coinvolgere Tutti i Cinque Sensi",
    title: "Esperienze",
    subtitle: "Percorsi gastronomici, sensoriali e culturali creati su misura.",
    description: "Ogni esperienza da Almeyda è pensata per far scoprire l'anima profonda della Sicilia: dall'olio extravergine d'oliva d'eccellenza alla degustazione dei vini, fino alle lezioni private di miscelazione.",
    offerAtmosphere: "Poliedrica e variegata, la nostra offerta spazia da una semplice sosta durante la giornata per gustare il nostro cibo e i nostri drink, fino a esclusive Food & Wine Experiences con selezioni musicali che fermano il tempo.",
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
  storeSection: {
    badge: "Bottega & Custodia del Territorio",
    title: "Negozio",
    subtitle: "Porta a casa i sapori autentici e l'artigianato d'eccellenza della Sicilia.",
    description: "Una selezione d'autore di eccellenze siciliane: oli extravergini d'oliva monocultivar dai Monti Iblei, conserve e pesti homemade, vini vulcanici e biodinamici, ceramiche d'arte dipinte a mano ed esclusive gift box del Teatro.",
    inStoreNotice: "Tutti i prodotti sono disponibili per l'acquisto e il ritiro diretto presso il nostro Bistrot al Teatro, con eleganti confezioni regalo e packaging da viaggio.",
    ctaWhatsapp: "Ordina o Richiedi Info via WhatsApp",
    ctaInquire: "Richiedi Informazioni & Spedizioni",
    categories: {
      all: "Tutti i Prodotti",
      oli: "Oli Monocultivar",
      dispensa: "Dispensa & Conserve",
      vini: "Vini & Liquori",
      ceramiche: "Ceramiche & Arte"
    },
    products: [
      {
        id: "prod-1",
        title: "Olio EVO Monocultivar Tonda Iblea",
        category: "oli",
        description: "Estratto a freddo dai secolari uliveti dei Monti Iblei. Sentori intensi di pomodoro verde, erbe di campo e carciofo. Confezione con sigillo numerato.",
        origin: "Buccheri / Monti Iblei (SR)",
        tag: "Eccellenza Siciliana",
        imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop",
        details: "Bottiglia in vetro scuro 500ml · Acidità < 0.18%"
      },
      {
        id: "prod-2",
        title: "Olio EVO Biologico Nocellara dell'Etna",
        category: "oli",
        description: "Olio extravergine da suoli vulcanici, armonioso ed elegante, con note di mandorla fresca, mela verde e una piacevole speziatura piccante.",
        origin: "Pendici dell'Etna",
        tag: "Biologico & Vulcanico",
        imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop",
        details: "Bottiglia 500ml · Raccolta a mano 2025"
      },
      {
        id: "prod-3",
        title: "Caponata Storica Siciliana Almeyda",
        category: "dispensa",
        description: "Preparata a mano nella nostra cucina secondo la ricetta della memoria: melanzane dorate, mandorle di Noto tostate, olive Nocellara e agrodolce al miele d'arancio.",
        origin: "Homemade Almeyda",
        tag: "Ricetta Tradizionale",
        imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
        details: "Vaso in vetro 314g · 100% Artigianale"
      },
      {
        id: "prod-4",
        title: "Crema Pura di Pistacchio di Bronte DOP",
        category: "dispensa",
        description: "Crema spalmabile artigianale con 65% di pistacchi verdi di Bronte DOP tostati a pietra, senza aromi artificiali né olio di palma.",
        origin: "Bronte (CT)",
        tag: "65% Pistacchio Puro",
        imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
        details: "Vaso 200g · Bronte DOP"
      },
      {
        id: "prod-5",
        title: "Etna Rosso DOC Contrada & Carricante",
        category: "vini",
        description: "Selezione di vini da vecchie vigne ad alberello su sabbie laviche. Mineralità vibrante, frutti rossi di bosco e persistenza balsamica.",
        origin: "Versante Nord Etna",
        tag: "Cantina d'Autore",
        imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop",
        details: "Bottiglia 75cl · Affinamento in rovere"
      },
      {
        id: "prod-6",
        title: "Amaro dell'Etna & Liquori agli Agrumi di Siracusa",
        category: "vini",
        description: "Infusi artigianali di erbe spontanee della macchia mediterranea e scorze di Limone di Siracusa IGP e arance amare.",
        origin: "Siracusa & Etna",
        tag: "Infuso Botanico",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        details: "Bottiglia 50cl / 70cl · Ricetta segreta"
      },
      {
        id: "prod-7",
        title: "Pumo Portafortuna & Ceramiche di Caltagirone",
        category: "ceramiche",
        description: "Autentiche ceramiche siciliane modellate a mano e smaltate nei toni caldi dell'ocra, verde rame e blu cobalto dai maestri ceramisti.",
        origin: "Caltagirone & Ortigia",
        tag: "Fatto a Mano",
        imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1000&auto=format&fit=crop",
        details: "Pezzo unico numerato · Argilla smaltata"
      },
      {
        id: "prod-8",
        title: "Gift Box 'Memorie del Teatro Comunale'",
        category: "dispensa",
        description: "Elegante cofanetto in legno con sigillo in ceralacca Almeyda contenente una bottiglia di EVO pregiato, due conserve artigianali, vino vulcanico e dedica calligrafica.",
        origin: "Selezione Esclusiva Almeyda",
        tag: "Confezione Regalo",
        imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop",
        details: "Scatola personalizzabile · Ideale per regali di prestigio"
      }
    ]
  },
  eventiSection: {
    badge: "Momenti Unici al Teatro",
    title: "Eventi & Catering",
    subtitle: "La sala eventi, la logistica e gli allestimenti per le tue occasioni speciali.",
    description: "Location ideale per feste esclusive, ricorrenze, meeting, wedding. Forniamo Catering d'eccellenza, Allestimenti e Logistica completa per creare momenti indimenticabili.",
    ctaBtn: "Richiedi Disponibilità & Catering",
    salaEventiTitle: "La Sala Eventi Privata",
    salaEventiDescription: "Uno spazio suggestivo con acustica d'eccezione, illuminazione architettonica regolabile, servizio catering dedicato e bancone bar privato per accogliere i tuoi ospiti con la massima riservatezza e stile.",
    cateringLogisticaTitle: "Catering, Allestimenti & Logistica",
    cateringLogisticaDescription: "Curiamo ogni dettaglio delle tue ricorrenze, matrimoni, meeting aziendali e feste private: menù sartoriali, allestimenti floreali e scenografici, service audio-luci e logistica impeccabile.",
    tourOperatorTitle: "Collaborazione con Agenzie & Tour Operator",
    tourOperatorDescription: "Collaboriamo con Agenzie e Tour Operator per qualsivoglia esigenza dei vostri clienti, fornendo servizi indoor nel Teatro ed outdoor nelle location più suggestive della Sicilia.",
    eventTypes: [
      {
        title: "Wedding & Ricorrenze",
        description: "Matrimoni intimi, anniversari e celebrazioni indimenticabili con catering dedicato e scenografie nel cuore di Ortigia.",
        iconName: "PartyPopper"
      },
      {
        title: "Feste Esclusive & Ricevimenti",
        description: "Party privati con cocktail list su misura, musica selezionata e atmosfera d'altri tempi.",
        iconName: "Sparkles"
      },
      {
        title: "Meeting Aziendali & B2B",
        description: "Spazio attrezzato e logistica per convention aziendali, presentazioni e servizi per tour operator ed agenzie.",
        iconName: "Users"
      },
      {
        title: "Vernissage, Arte & Musica",
        description: "Esposizioni temporanee, concerti dal vivo ed eventi culturali in armonia con l'architettura del Teatro.",
        iconName: "Palette"
      }
    ]
  },
  contattaciSection: {
    badge: "Prenotazioni & Contatto via WhatsApp",
    title: "Contattaci",
    subtitle: "Interazione diretta su WhatsApp: seleziona i dettagli della richiesta e invia il messaggio già precompilato al nostro staff.",
    addressLabel: "Indirizzo",
    phoneLabel: "Telefono",
    whatsappLabel: "WhatsApp Diretto",
    emailLabel: "Posta Elettronica",
    hoursLabel: "Orari di Apertura",
    form: {
      title: "Componi Richiesta",
      subtitle: "Inserisci i tuoi dettagli: cliccando sul pulsante si aprirà direttamente WhatsApp con il testo già formattato in ogni dettaglio.",
      nameLabel: "Nome e Cognome",
      namePlaceholder: "Mario Rossi",
      phoneLabel: "Numero di Telefono (Facoltativo)",
      phonePlaceholder: "+39 333 1234567",
      emailLabel: "Indirizzo Email (Facoltativo)",
      emailPlaceholder: "mario.rossi@email.it",
      subjectLabel: "Oggetto della Richiesta",
      subjectOptions: {
        tavolo: "Prenotazione Tavolo (Pranzo / Cena / Drink)",
        esperienze: "Degustazioni & Esperienze Sensoriali",
        evento: "Organizzazione Evento / Catering & B2B",
        arte: "Proposta Artistica / Spazio all'Arte",
        store: "Negozio, Bottega & Spedizioni",
        informazioni: "Richiesta Informazioni Generali"
      },
      dateLabel: "Data Desiderata",
      timeLabel: "Orario Indicativo",
      guestsLabel: "Numero di Persone",
      messageLabel: "Messaggio o Note Particolari",
      messagePlaceholder: "Segnala intolleranze, preferenze di tavolo, richieste o dettagli...",
      submitBtn: "Invia Richiesta su WhatsApp",
      previewLabel: "Anteprima Messaggio WhatsApp Precompilato",
      whatsappNotice: "Nessuna attesa o modulo da registrare: verrai reindirizzato direttamente alla chat WhatsApp ufficiale di Almeyda per la conferma immediata."
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
