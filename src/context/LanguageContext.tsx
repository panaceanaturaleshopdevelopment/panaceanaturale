"use client";

import { createContext, useContext, useState } from "react";

type Language = "sr" | "en";

type NavItem = {
  id: string;
  label: string;
  children?: NavItem[];
};

type Translations = {
  hero: { quote: string; attribution: string };
  about: { label: string; p1: string; p2: string; p3: string };
  juice: {
    label: string;
    heading: string;
    facts: { value: string; label: string }[];
    intro: { p1: string; p2: string; p3: string };
    zelenoZdravlje: { heading: string; text: string };
    nutritivniSastav: {
      heading: string;
      intro: string;
      colNutrient: string;
      colPer100: string;
      note: string;
    };
    hladnoCedjenje: { heading: string; p1: string; p2: string };
    zastoBiraju: { heading: string; p1: string; p2: string };
  };
  gallery: { label: string };
  usage: {
    label: string;
    intro: string;
    kako: { heading: string; p1: string; p2: string; p3: string; p4: string };
    kolicina: { heading: string; p1: string; p2: string; p3: string };
    koMoze: { heading: string; p1: string; p2: string };
  };
  stockists: {
    label: string;
    map: string;
    phone: { heading: string; text: string };
    email: { heading: string; text: string; button: string; subject: string };
  };
  faq: {
    label: string;
    items: { question: string; answer: string; link?: { text: string; url: string } }[];
  };
  footer: {
    tagline: string;
    address: string;
    contactHeading: string;
    followHeading: string;
    copyright: string;
  };
};

const nav: Record<Language, NavItem[]> = {
  sr: [
    { id: "home", label: "Početna" },
    { id: "about", label: "O nama" },
    {
      id: "juice",
      label: "O soku",
      children: [
        { id: "juice-zeleno-zdravlje", label: "Zeleno zdravlje" },
        { id: "juice-nutritivni-sastav", label: "Nutritivni sastav" },
        { id: "juice-hladno-cedjenje", label: "Hladno ceđenje" },
        { id: "juice-zasto-biraju", label: "Zašto ga biraju?" },
      ],
    },
    { id: "gallery", label: "Galerija" },
    { id: "usage", label: "Upotreba" },
    {
      id: "where",
      label: "Dostupnost",
      children: [
        { id: "where-map", label: "Mapa prodajnih mesta" },
        { id: "where-phone", label: "Poruči telefonom" },
        { id: "where-email", label: "Poruči emailom" },
      ],
    },
    { id: "faq", label: "Česta pitanja" },
  ],
  en: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    {
      id: "juice",
      label: "The juice",
      children: [
        { id: "juice-zeleno-zdravlje", label: "Green health" },
        { id: "juice-nutritivni-sastav", label: "Nutrition" },
        { id: "juice-hladno-cedjenje", label: "Cold pressing" },
        { id: "juice-zasto-biraju", label: "Why people choose it" },
      ],
    },
    { id: "gallery", label: "Gallery" },
    { id: "usage", label: "How to use" },
    {
      id: "where",
      label: "Stockists",
      children: [
        { id: "where-map", label: "Stockists map" },
        { id: "where-phone", label: "Order by phone" },
        { id: "where-email", label: "Order by email" },
      ],
    },
    { id: "faq", label: "FAQ" },
  ],
};

const translations: Record<Language, Translations> = {
  sr: {
    hero: {
      quote: "„Snaga tvoga tela leži u sokovima biljaka.“",
      attribution: "Otac kineske medicine · Shin-Nongu",
    },
    about: {
      label: "O nama",
      p1: "Panacea Naturale je porodična priča iz Čačka, nastala iz ličnog iskustva i želje da se prirodna podrška zdravlju približi što većem broju ljudi.",
      p2: "Od 2013. godine proizvodimo hladno ceđeni sok od pšenične trave, najpre za sebe i svoju porodicu, a zatim i za sve one koji žele da u svoju svakodnevicu unesu svež, prirodan i pažljivo pripremljen proizvod.",
      p3: "Vodimo se jednostavnom idejom: da kvalitetan sok od pšenične trave, poznat i kao **zeleno zdravlje**, bude dostupan što većem broju ljudi širom Srbije.",
    },
    juice: {
      label: "O soku",
      heading: "O soku od pšenične trave",
      facts: [
        { value: "100%", label: "čist sok od pšenične trave" },
        { value: "30 ml", label: "preporučena dnevna količina" },
        { value: "10-12", label: "dana starosti biljke pri berbi" },
      ],
      intro: {
        p1: "Sok od pšenične trave dobija se hladnim ceđenjem mladih izdanaka pšenice, najčešće starih između 10 i 12 dana. Za proizvodnju koristimo pažljivo uzgojenu pšeničnu travu od **organske spelte**, ubranu u fazi kada je biljka bogata svojim prirodnim zelenim sastojcima.",
        p2: "Odmah nakon ceđenja, sok se brzo zamrzava kako bi se što bolje očuvali njegova svežina, prirodna boja i nutritivna svojstva. Ne pasterizuje se, ne suši i ne sadrži **aditive, veštačke boje ni konzervanse**, u flašici se nalazi samo čist sok od pšenične trave.",
        p3: "Pšenična trava prirodno sadrži hlorofil, vitamine, minerale, enzime, aminokiseline i antioksidativna jedinjenja. Zbog toga se sok od pšenične trave u literaturi često opisuje kao nutritivno bogata funkcionalna namirnica.",
      },
      zelenoZdravlje: {
        heading: "Zašto „zeleno zdravlje“?",
        text: "Prepoznatljiva intenzivno zelena boja soka potiče od **hlorofila**, prirodnog pigmenta koji se nalazi u zelenim biljkama. Pored hlorofila, sok od pšenične trave sadrži i antioksidativna jedinjenja, vitamine i minerale, zbog čega ga mnogi koriste kao deo uravnotežene ishrane i zdravih životnih navika.",
      },
      nutritivniSastav: {
        heading: "Nutritivni sastav",
        intro: "Prema podacima iz naučne literature, sok od pšenične trave može sadržati značajne količine prirodnih nutrijenata. U prikazu nutritivnog profila na 100 ml navode se, između ostalog:",
        colNutrient: "Nutrijent",
        colPer100: "na 100 ml",
        note: "Napomena: nutritivne vrednosti mogu varirati u zavisnosti od sorte, uslova uzgoja, starosti biljke, načina obrade i čuvanja. Navedene vrednosti su podaci iz objavljene naučne literature, a ne laboratorijska deklaracija konkretnog proizvoda.",
      },
      hladnoCedjenje: {
        heading: "Hladno ceđenje i brzo zamrzavanje",
        p1: "Hladno ceđeni sok zadržava prirodan, svež oblik biljke, bez potrebe za sušenjem ili termičkom obradom. Brzo zamrzavanje neposredno nakon ceđenja pomaže očuvanju prirodnih sastojaka i svežine soka, bez dodavanja konzervanasa.",
        p2: "Upravo zato se sok čuva u zamrzivaču i do korisnika stiže u zamrznutom stanju.",
      },
      zastoBiraju: {
        heading: "Zašto ljudi biraju sok od pšenične trave?",
        p1: "Sok od pšenične trave je jednostavan način da se u svakodnevnu ishranu uključi svež, biljni napitak bogat prirodnim zelenim sastojcima. Zbog praktične upotrebe i čistog sastava, često ga biraju ljudi koji žele da podrže zdravije navike, bez komplikovane pripreme i dodataka.",
        p2: "Može se piti samostalno, kao jutarnja rutina, ili dodati u smoothie i druge hladne napitke.",
      },
    },
    gallery: {
      label: "Galerija",
    },
    usage: {
      label: "Upotreba",
      intro: "Sok od pšenične trave čuva se u zamrzivaču i vadi neposredno pre upotrebe. Pošto se zamrzava odmah nakon ceđenja, na taj način se čuvaju njegova svežina, prirodna boja i kvalitet, bez potrebe za **konzervansima, veštačkim bojama ili dodatim aditivima**.",
      kako: {
        heading: "Kako koristiti",
        p1: "Flašicu možete otopiti na sobnoj temperaturi ili u posudi sa mlakom vodom. Voda ne bi trebalo da bude toplija od **39°C**, kako se sok ne bi izlagao visokim temperaturama.",
        p2: "Nakon otapanja, sok je najbolje popiti odmah. Ne preporučuje se ponovno zamrzavanje već odmrznutog soka.",
        p3: "Preporučuje se da se sok pije ujutru, na prazan stomak, oko **15-30 minuta pre obroka**. Ukoliko vam više odgovara, možete ga konzumirati i kasnije tokom dana, prema sopstvenoj rutini.",
        p4: "Zbog intenzivnog ukusa, u početku se može razblažiti sa malo vode ili soka od jabuke. Kada se organizam navikne, može se piti nerazblažen.",
      },
      kolicina: {
        heading: "Preporučena dnevna količina",
        p1: "Preporučena dnevna količina je **30 ml, odnosno jedna flašica dnevno**.",
        p2: "Osobe koje imaju zdravstvene tegobe, koriste terapiju, trudnice, dojilje i roditelji koji žele da sok daju deci trebalo bi da se prethodno posavetuju sa lekarom ili nutricionistom.",
        p3: "Rok upotrebe označen je na pakovanju. Proizvod čuvati u zamrzivaču do upotrebe.",
      },
      koMoze: {
        heading: "Ko može koristiti sok?",
        p1: "Sok od pšenične trave mogu koristiti odrasli kao dodatak raznovrsnoj i uravnoteženoj ishrani.",
        p2: "Osobe alergične na pšenicu treba da budu oprezne. Iako se mlada pšenična trava uglavnom smatra bezglutenskom kada se bere pre formiranja zrna, kod osoba sa celijakijom ili izraženom osetljivošću na gluten preporučuje se dodatni oprez i konsultacija sa stručnim licem.",
      },
    },
    stockists: {
      label: "Dostupnost",
      map: "Mapa prodajnih mesta",
      phone: {
        heading: "Poruči telefonom",
        text: "Dostupni smo svakog radnog dana od 9 do 20h. Poručite svoj sok od pšenične trave pozivom na naš broj telefona ili nam pošaljite poruku i odgovorićemo u najkraćem mogućem roku.",
      },
      email: {
        heading: "Poruči emailom",
        text: "Pošaljite nam poruku i odgovorićemo u najkraćem mogućem roku.",
        button: "Pošalji email",
        subject: "Poruka sa sajta Panacea Naturale",
      },
    },
    faq: {
      label: "Česta pitanja",
      items: [
        {
          question: "Da li mogu da poručim putem Vibera ili WhatsApp-a?",
          answer: "Da, pored telefonskog poziva, dostupni smo i putem Vibera, WhatsApp-a i SMS poruka.",
        },
        {
          question: "Da li je moguće lično preuzimanje?",
          answer: "Da, moguće je i lično preuzimanje. Za više informacija i dogovor oko preuzimanja, kontaktirajte nas direktno.",
        },
        {
          question: "Kako se proizvod šalje i da li stiže zaleđen?",
          answer: "Proizvod se šalje pažljivo upakovan u zaštitnu i izolovanu ambalažu, kako bi se očuvao kvalitet tokom transporta. Sok stiže zaleđen, a način pakovanja i slanja obezbeđuje proizvođač.",
        },
        {
          question: "Da li je sok zdravstveno ispitan i bezbedan za upotrebu?",
          answer: "Da. Sok od pšenične trave Panacea Naturale ispitan je i ocenjen kao zdravstveno bezbedan za upotrebu, na osnovu izvršenih analiza i stručnog mišljenja.",
        },
        {
          question: "Ko potvrđuje zdravstvenu bezbednost proizvoda?",
          answer: "Sok od pšenične trave Panacea Naturale ispitan je od strane Instituta za javno zdravlje Kragujevac.",
        },
        // {
        //   question: "Da li proizvod poseduje sertifikat o zdravstvenoj bezbednosti?",
        //   answer: "Da. Sertifikat možete pogledati ",
        //   link: { text: "ovde", url: "/documents/cert_panacea.pdf" },
        // },
      ],
    },
    footer: {
      tagline: "Hladno ceđeni sok od pšenične trave",
      address: "Milana Radosavljevića Abaza 28/1, Čačak",
      contactHeading: "Kontakt info",
      followHeading: "Pronađite nas",
      copyright: "© 2025 Panacea Naturale. Sva prava zadržana.",
    },
  },
  en: {
    hero: {
      quote: "“The strength of your body lies in the juices of plants.”",
      attribution: "Father of Chinese Medicine · Shin-Nongu",
    },
    about: {
      label: "About us",
      p1: "Panacea Naturale is a family story from Čačak, born from personal experience and the desire to bring natural health support to as many people as possible.",
      p2: "Since 2013, we have been producing cold-pressed wheatgrass juice, first for ourselves and our family, and then for all those who want to bring a fresh, natural and carefully prepared product into their everyday lives.",
      p3: "We are guided by a simple idea: that quality wheatgrass juice, also known as **green health**, should be available to as many people as possible throughout Serbia.",
    },
    juice: {
      label: "The juice",
      heading: "About wheatgrass juice",
      facts: [
        { value: "100%", label: "pure wheatgrass juice" },
        { value: "30 ml", label: "recommended daily dose" },
        { value: "10-12", label: "days old at harvest" },
      ],
      intro: {
        p1: "Wheatgrass juice is obtained by cold-pressing young wheat sprouts, usually between 10 and 12 days old. For production, we use carefully grown wheatgrass from **organic spelt**, harvested at the stage when the plant is rich in its natural green constituents.",
        p2: "Immediately after pressing, the juice is quickly frozen to best preserve its freshness, natural color and nutritional properties. It is not pasteurized, dried, or contains **additives, artificial colors or preservatives**; the bottle contains only pure wheatgrass juice.",
        p3: "Wheatgrass naturally contains chlorophyll, vitamins, minerals, enzymes, amino acids and antioxidant compounds. This is why wheatgrass juice is often described in the literature as a nutritionally rich functional food.",
      },
      zelenoZdravlje: {
        heading: "Why “green health”?",
        text: "The distinctive intensely green color of the juice comes from **chlorophyll**, the natural pigment found in green plants. In addition to chlorophyll, wheatgrass juice contains antioxidant compounds, vitamins and minerals, which is why many people use it as part of a balanced diet and healthy lifestyle.",
      },
      nutritivniSastav: {
        heading: "Nutritional composition",
        intro: "According to data from scientific literature, wheatgrass juice may contain significant amounts of natural nutrients. The nutritional profile per 100 ml includes, among others:",
        colNutrient: "Nutrient",
        colPer100: "per 100 ml",
        note: "Note: nutritional values may vary depending on variety, growing conditions, plant age, processing method and storage. The values shown are data from published scientific literature, not a laboratory declaration of a specific product.",
      },
      hladnoCedjenje: {
        heading: "Cold pressing and quick freezing",
        p1: "Cold-pressed juice retains the natural, fresh form of the plant, without the need for drying or heat treatment. Quick freezing immediately after pressing helps preserve the natural ingredients and freshness of the juice, without the addition of preservatives.",
        p2: "That is why the juice is stored in the freezer and reaches customers in frozen form.",
      },
      zastoBiraju: {
        heading: "Why do people choose wheatgrass juice?",
        p1: "Wheatgrass juice is a simple way to include a fresh, plant-based drink rich in natural green constituents in your daily diet. Due to its practical use and clean composition, it is often chosen by people who want to support healthier habits, without complicated preparation or additives.",
        p2: "It can be drunk on its own, as a morning routine, or added to smoothies and other cold drinks.",
      },
    },
    gallery: {
      label: "Gallery",
    },
    usage: {
      label: "How to use",
      intro: "Wheatgrass juice is stored in the freezer and taken out just before use. Since it is frozen immediately after pressing, this preserves its freshness, natural color and quality, without the need for **preservatives, artificial colors or added additives**.",
      kako: {
        heading: "How to use",
        p1: "The bottle can be thawed at room temperature or in a bowl of lukewarm water. The water should not be warmer than **39°C**, so that the juice is not exposed to high temperatures.",
        p2: "After thawing, the juice is best consumed immediately. Re-freezing already thawed juice is not recommended.",
        p3: "It is recommended to drink the juice in the morning, on an empty stomach, about **15-30 minutes before a meal**. If it suits you better, you can also consume it later in the day, according to your own routine.",
        p4: "Due to the intense taste, it can initially be diluted with a little water or apple juice. Once the body gets used to it, it can be drunk undiluted.",
      },
      kolicina: {
        heading: "Recommended daily amount",
        p1: "The recommended daily amount is **30 ml, or one bottle per day**.",
        p2: "People with health conditions, those on therapy, pregnant women, breastfeeding mothers and parents who want to give the juice to children should consult a doctor or nutritionist beforehand.",
        p3: "The expiry date is marked on the packaging. Store the product in the freezer until use.",
      },
      koMoze: {
        heading: "Who can use the juice?",
        p1: "Wheatgrass juice can be used by adults as a supplement to a varied and balanced diet.",
        p2: "People allergic to wheat should be cautious. Although young wheatgrass is generally considered gluten-free when harvested before grain formation, people with celiac disease or pronounced gluten sensitivity are advised to exercise additional caution and consult a professional.",
      },
    },
    stockists: {
      label: "Availability",
      map: "Map of stockists",
      phone: {
        heading: "Order by phone",
        text: "We are available every working day from 9 am to 8 pm. Order your wheatgrass juice by calling our phone number or send us a message and we will respond as soon as possible.",
      },
      email: {
        heading: "Order by email",
        text: "Send us a message and we will respond as soon as possible.",
        button: "Send email",
        subject: "Message from Panacea Naturale website",
      },
    },
    faq: {
      label: "FAQ",
      items: [
        {
          question: "Can I order via Viber or WhatsApp?",
          answer: "Yes, in addition to a phone call, we are also available via Viber, WhatsApp and SMS messages.",
        },
        {
          question: "Is it possible to pick up the order in person?",
          answer: "Yes, personal pickup is also possible. For more information and to arrange a pickup, contact us directly.",
        },
        {
          question: "How is the product shipped and does it arrive frozen?",
          answer: "The product is carefully packaged in protective and insulated packaging to preserve quality during transport. The juice arrives frozen, and the packaging and shipping method is ensured by the manufacturer.",
        },
        {
          question: "Is the juice health-tested and safe for consumption?",
          answer: "Yes. Panacea Naturale wheatgrass juice has been tested and assessed as safe for consumption, based on analyses performed and expert opinion.",
        },
        {
          question: "Who confirms the health safety of the product?",
          answer: "Panacea Naturale wheatgrass juice has been tested by the Institute of Public Health Kragujevac.",
        },
        // {
        //   question: "Does the product have a health safety certificate?",
        //   answer: "Yes. You can view the certificate ",
        //   link: { text: "here", url: "/documents/cert_panacea.pdf" },
        // },
      ],
    },
    footer: {
      tagline: "Cold-pressed wheatgrass juice",
      address: "Milana Radosavljevića Abaza 28/1, Čačak",
      contactHeading: "Contact info",
      followHeading: "Find us",
      copyright: "© 2025 Panacea Naturale. All rights reserved.",
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  navItems: NavItem[];
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("sr");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        navItems: nav[language],
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
