const headnav = [
  {
    name: "projecten",
    link: "index.html",
    type: "internal",
  },
  {
    name: "Graduaat Programmeren",
    link: "https:www.pgm.gent/",
    type: "external",
  },
  {
    name: "Programmeren 1",
    link: "https:www.pgm.gent/pgm-1/",
    type: "external",
  },
];

const events = [
  {
    title:
      "Interactieve workshops voor leerlingen laatste graad secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/dienstverlening/diensten-voor-scholen/winterlab",
  },
  {
    title: "Workshops 'Zeg het met 3D, Code, Kleur, Beeld en geluid'",
    link: "https://ahsdevelopers.github.io/zeghetmetkleur/",
  },
  {
    title:
      "Studie-informatiedagen (SID-ins): aanbod aan studie- en beroepsmogelijkheden na je secundair onderwijs",
    link: "https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/sid-ins",
  },
  {
    title: "Infodag zaterdag 11 maart 2023 (10:00 tot 17:00)",
    link: "https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen",
  },
];

const projects = [
  {
    id: "d97d3be8-1fe0-4d95-a189-54962ce2534e",
    title: "Dialectische Gedragstherapie (DGT)",
    synopsis: "Webapp ter ondersteuning van Dialectische Gedragstherapie (DGT)",
    author: {
      firstName: "Charlotte",
      lastName: "Delvaux",
    },
    technologies: [
      {
        id: 1,
        name: "Angular",
      },
      {
        id: 2,
        name: "NestJS",
      },
    ],
    screenshots: [
      "images/delvauxcharlotte/screenshot_01.png",
      "images/delvauxcharlotte/screenshot_02.png",
    ],
  },
  {
    id: "311119bc-6e1c-4ff1-aae1-7e766364ff89",
    title: "Buurtkajaks Gent",
    synopsis: "Native mobile applicatie om kajaks te reserveren in Gent",
    author: {
      firstName: "Dylan",
      lastName: "Cathelijn",
    },
    technologies: [
      {
        id: 3,
        name: "React Native",
      },
      {
        id: 4,
        name: "Firebase",
      },
    ],
    screenshots: [
      "images/cathelijndylan/screenshot_01.png",
      "images/cathelijndylan/screenshot_02.png",
      "images/cathelijndylan/screenshot_03.png",
      "images/cathelijndylan/screenshot_04.png",
    ],
  },
  {
    id: "909c9aa3-ede6-4096-91ee-92d5ee5e2a90",
    title: "Tekst.ai",
    synopsis:
      "Een gebruiksvriendelijk en personaliseerbaar dashboard voor Tekst.ai",
    author: {
      firstName: "Jan",
      lastName: "Deschacht",
    },
    technologies: [
      {
        id: 5,
        name: "NextJS",
      },
      {
        id: 6,
        name: "Strapi",
      },
    ],
    screenshots: [
      "images/deschachtjan/screenshot_01.png",
      "images/deschachtjan/screenshot_02.png",
      "images/deschachtjan/screenshot_03.png",
      "images/deschachtjan/screenshot_04.png",
    ],
  },
  {
    id: "3742b9aa-6379-4b64-94d8-c51fc5dbd95c",
    title: "Virtual Closet",
    synopsis:
      "Sociale applicatie om kleding (uit jouw kledingkast) te matchen tot een goede outfit door andere gebruikers",
    author: {
      firstName: "Thabisa",
      lastName: "Dingani",
    },
    technologies: [
      {
        id: 3,
        name: "React Native",
      },
      {
        id: 4,
        name: "Firebase",
      },
    ],
    screenshots: [
      "images/dinganithabisa/screenshot_01.png",
      "images/dinganithabisa/screenshot_02.png",
      "images/dinganithabisa/screenshot_03.png",
    ],
  },
  {
    id: "32e8c827-6e74-4ac6-873d-8ea18338215d",
    title: "Car expense",
    synopsis:
      "Platform om kosten van een auto te bijhouden inclusief speech-to-text",
    author: {
      firstName: "Thabisa",
      lastName: "Dingani",
    },
    technologies: [
      {
        id: 7,
        name: "ReactJS",
      },
      {
        id: 8,
        name: "Supabase",
      },
    ],
    screenshots: [
      "images/hartjamielee/screenshot_01.png",
      "images/hartjamielee/screenshot_02.png",
      "images/hartjamielee/screenshot_03.png",
    ],
  },
  {
    id: "a2b6523d-5e95-485c-9a08-c34d1370ca88",
    title: "Crypto Tracker",
    synopsis: "Mobiele (native) applicatie voor het tracken van cryptomunten",
    author: {
      firstName: "Aiden",
      lastName: "Soufi",
    },
    technologies: [
      {
        id: 3,
        name: "React Native",
      },
      {
        id: 4,
        name: "Firebase",
      },
    ],
    screenshots: [
      "images/soufiaiden/screenshot_01.png",
      "images/soufiaiden/screenshot_02.png",
      "images/soufiaiden/screenshot_03.png",
    ],
  },
  {
    id: "f85763cd-84b0-451a-8998-1173caccdb2e",
    title: "La Macarena",
    synopsis:
      "Website voor La Macarena, een organisatie die verschillende activeiten organiseert voor jonge vrouwen",
    author: {
      firstName: "Nicolas",
      lastName: "Cnudde",
    },
    technologies: [
      {
        id: 9,
        name: "VueJS",
      },
      {
        id: 10,
        name: "GraphQL",
      },
    ],
    screenshots: [
      "images/cnuddenicolas/screenshot_01.png",
      "images/cnuddenicolas/screenshot_02.png",
      "images/cnuddenicolas/screenshot_03.png",
    ],
  },
  {
    id: "a01bd54c-35ec-4415-8715-9c80e5093258",
    title: "TorchLight",
    synopsis:
      "Mobiele applicatie om characters bij te houden tijdens een Dungeons and Dragons spel",
    author: {
      firstName: "Bram",
      lastName: "Vandenbussche",
    },
    technologies: [
      {
        id: 1,
        name: "Angular",
      },
      {
        id: 4,
        name: "Firebase",
      },
    ],
    screenshots: [
      "images/vandenbusschebram/screenshot_01.png",
      "images/vandenbusschebram/screenshot_02.png",
      "images/vandenbusschebram/screenshot_03.png",
      "images/vandenbusschebram/screenshot_03.png",
    ],
  },
  {
    id: "cfe99947-2561-43dc-8de3-69840b3c41a0",
    title: "DiscoverSound",
    synopsis:
      "Webapplicatie waarbij je willekeurige nummers te horen krijgt van onbekende bands",
    author: {
      firstName: "Bram",
      lastName: "Criel",
    },
    technologies: [
      {
        id: 7,
        name: "ReactJS",
      },
      {
        id: 4,
        name: "Firebase",
      },
    ],
    screenshots: [
      "images/crielbram/screenshot_01.png",
      "images/crielbram/screenshot_02.png",
      "images/crielbram/screenshot_03.png",
    ],
  },
];

const Socials = {
  website: "http://www.pgm.gent",
  linkedin: "https://www.linkedin.com/company/28878545/admin/",
  facebook: "https://www.facebook.com/Programmeren.ahs",
  instagram: "https://www.instagram.com/programmeren.ahs/",
  youtube: "https://www.youtube.com/channel/UCHly8VZULSMWEmvbPJNVtFA",
};

const beginning_YEAR = 1663569900000;
const finish_YEAR = 1695019500000;
