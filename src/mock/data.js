import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alina | Développeuse', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello!',
  name: "Moi c'est Alina",
  subtitle: 'Software developer',
  cta: 'A propos',
};

// ABOUT DATA
export const aboutData = {
  img: 'favicon.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'php.jpg',
    title: 'Réseau Social en PHP',
    info: 'Site web dynamique',
    info2:
      'Un petit réseau social en PHP hébergé sur un serveur MAMP avec des requêtes vers la base de données phpMyAdmin faites en MySQL.',
    url: 'https://github.com/alinabudukina/PC-reseau-social-ali-cam-lau-nol',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'extension.png',
    title: 'Bouclier contre la haine en ligne',
    info: 'Extension Firefox',
    info2:
      'Projet d’extension navigateur pour Firefox qui remplace les insultes racistes, sexistes et homophobes par des fleurs. Le bouclier permet de faire progresser l égalité femmes/hommes appliquant l écriture inclusive. Vous pouvez signaler les contenus racistes, sexistes et homophobes sur la plateforme PHAROS. Option de personnaliser le pointeur de la souris',
    url: 'https://github.com/alinabudukina/pc-extension-mar-jul-ali-lau',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iss.png',
    title: "Position de l'ISS en direct",
    info: 'Data visualization',
    info2:
      "Une page Web affiche la position de la Station spatiale internationale en temps réel à l'aide de deux API, une pour les coordonnées et une pour la carte.",
    url: 'https://github.com/alinabudukina/ISS-API',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'woman.png',
    title: 'Educated Women',
    info: 'Data visualization',
    info2:
      "Réalisation d'une animation en CSS/Javascript. L'objectif est de présenter les diplômes et réalisations des femmes hautement qualifiées pour célébrer l'accès des femmes à l'éducation",
    url: 'https://github.com/alinabudukina/Educated-women',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pico-8.png',
    title: 'Jeu de Pong',
    info: 'En langage Lua',
    info2:
      "Un petit jeu de ping pong rétro en langage Lua réalisé dans l'environnement de développement PICO-8.",
    url: 'https://github.com/alinabudukina/Pong-Pico8',
    repo: 'https://alina-ale.itch.io/ada-pong', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alinabudukina@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alina-budukina/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alinabudukina',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
