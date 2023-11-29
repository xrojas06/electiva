import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";


export const definitions = [
  {
    "id": "1",
    "title": "Diversidad Sexual",
    "definition": "La diversidad sexual se refiere a la amplia gama de orientaciones sexuales presentes en la sociedad, incluyendo, pero no limitándose a, heterosexualidad, homosexualidad, bisexualidad y pansexualidad."
  },
  {
    "id": "2",
    "title": "Género",
    "definition": "El género se refiere a las características sociales, culturales y psicológicas asociadas a ser hombre o mujer en una sociedad dada. No siempre se alinea con el sexo biológico de una persona."
  },
  {
    "id": "3",
    "title": "Identidad de Género",
    "definition": "La identidad de género es la percepción interna y profunda de ser hombre, mujer, o una identidad de género diferente. Puede o no coincidir con el sexo asignado al nacer."
  },
  {
    "id": "4",
    "title": "Orientación Sexual",
    "definition": "La orientación sexual se refiere al patrón de atracción emocional, romántica y/o sexual hacia personas del mismo y/o del otro género. Algunas orientaciones comunes son heterosexualidad, homosexualidad y bisexualidad."
  },
  {
    "id": "5",
    "title": "Cisgénero",
    "definition": "Una persona cisgénero es aquella cuya identidad de género coincide con el sexo asignado al nacer. Por ejemplo, una persona asignada como mujer al nacer que se identifica y vive como mujer."
  },
  {
    "id": "6",
    "title": "Transgénero",
    "definition": "Una persona transgénero es aquella cuya identidad de género difiere del sexo asignado al nacer. Por ejemplo, una persona asignada como hombre al nacer que se identifica y vive como mujer."
  },
  {
    "id": "7",
    "title": "No-Binario",
    "definition": "El término no-binario se refiere a personas que no se identifican exclusivamente como hombre o mujer. Pueden identificarse con una combinación de géneros, ninguno, o un género diferente."
  },
  {
    "id": "8",
    "title": "Queer",
    "definition": "Queer es un término paraguas que abarca diversas identidades de género y orientaciones sexuales que no se ajustan a las categorías tradicionales. Es una expresión de la diversidad dentro de la comunidad LGBTQ+."
  },
  {
    "id": "10",
    "title": "Pansexualidad",
    "definition": "La pansexualidad se caracteriza por la atracción hacia personas sin importar su género. Las personas pansexuales pueden sentir atracción romántica, emocional y/o sexual hacia individuos de cualquier identidad de género."
  },
  {
    "id": "11",
    "title": "Asexualidad",
    "definition": "La asexualidad se refiere a la falta de atracción sexual hacia cualquier género. Las personas asexuales pueden experimentar atracción romántica o emocional, pero no sienten la necesidad de actividad sexual."
  },
  {
    "id": "12",
    "title": "Homofobia",
    "definition": "La homofobia es la aversión, discriminación o prejuicio hacia personas con orientaciones homosexuales. Puede manifestarse en actitudes negativas, discriminación social o incluso violencia."
  },
  {
    "id": "14",
    "title": "Transfobia",
    "definition": "La transfobia es la aversión, discriminación o prejuicio hacia personas transgénero. Puede manifestarse en diversas formas, como la discriminación laboral, el acoso verbal o la exclusión social."
  },
  {
    "id": "15",
    "title": "Monogamia",
    "definition": "La monogamia se refiere a la práctica de tener una sola pareja sexual o romántica a la vez. Es un concepto relacionado con las elecciones personales y las normas culturales en torno a las relaciones íntimas."
  }
]


export const navLinks = [
  {
    id: "Glosario",
    title: "Glosario",
    path: '/Glosario'
  },
  {
    id: "its",
    title: "ITS",
    path: '/its',

  },
  {
    id: "vgb",
    title: "VGB",
    path: '/vgb',

  },

  {
    id: "Anatomia",
    title: 'Anatomia',
    path: '',
    subnavlinks: [
        {
      id: "Anatomia",
      title: "Anatomía Sexual Femenina",
      path: "/anatomiafe",
    },
      {
        id: "Anatomia M",
        title: "Anatomía Sexual Masculina",
        path: "/anatomia-sexual-Masculina",
      },],
  },

  {
    id: "PCDS",
    title: "PCDS",
    path: '',
    subnavlinks: [
      {
        id: "Parafilias",
        title: "Parafilias",
        path: "/parafilias",
      },
      {
        id: "Cibersexo",
        title: "Cibersexo",
        path: "/cibersexo",
      },
      {
        id: "DisfuncionesSexuales",
        title: "Disfunciones Sexuales",
        path: "/disfunciones-sexuales",
      },]
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Amplia gama",
    content:
      "Suministro de una amplia gama de equipos electrónicos específicamente diseñados para estaciones de peaje",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Soluciones eficientes",
    content:
      "Creación y implementación de soluciones tecnológicas innovadoras que mejoran la eficiencia en la gestión de peajes",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Funcionamiento óptimo",
    content:
      "Venta de partes y componentes esenciales para el funcionamiento óptimo de las estaciones de peaje",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];
export const footer = [
  {
    id : "footer-1",
    title : "Contáctanos",
    subtitle : "+57 315 367095",
  } ,
  {
    id : "footer-2",
    title : "Encuéntranos",
    subtitle : "Calle 93 No. 60B-65 Oficina 301",
  } ,

];
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

