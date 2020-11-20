import { nanoid } from 'nanoid';
// Head Data

export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// NAVBAR DATA
export const navData = {
  items: [
    {
      id: nanoid(),
      name: 'Resume',
      path: 'https://drive.google.com/file/d/1JDSmXMsVfRpXkPOaiK6KQ0vMN1ANKNYv/view?usp=sharing',
    },
  ],
};

// HERO DATA
export const heroData = {
  title: 'Hello',
  name: `I'm Calvin`,
  subtitle: 'Front End Engineer',
  cta: '',
};

// ABOUT
export const aboutData = {
  img: 'portrait.jpg',
  paragraphOne: `I’m a 22 year old recent graduate from Rochester Institute of Technology with a B.S. in New Media Interactive Development (NMID) and a minor in Digital Business.`,
  paragraphTwo: `The NMID program is a mix of design and programming, where I studied UI/UX design and Front End Development.`,
  paragraphThree: `As I’ve grown as a developer and learned from senior and lead developers from both enterprise and start-ups, I figured out that my mission is to use code to help people.`,
  paragraphFour: `With this realization, I’ve taken the opportunity to give back by creating unique experiences one website, one web application, at a time.`,
};

// WORK EXPERIENCE
export const workData = [
  {
    id: nanoid(),
    img: 'qronus.png',
    title: 'Q-ronus',
    type: 'Contract',
    date: 'Sept - Oct 2020',
    paragraph: `Qronus is digitizing the way students queue. I redesigned the entire web application from the ground up, designing for different screen sizes and use cases.  I learned more about CSS modules and reinforced my React knowledge, in addition to UI/UX and visual design.`,
    url: 'https://q-ronus.com',
    backgroundColor: '#F2A83D',
  },
  {
    id: nanoid(),
    img: 'ibm1.png',
    title: 'IBM',
    type: 'Internship',
    date: 'Summer 2020',
    paragraph: `Watson Discovery is a ML driven tool to understand and parse large quantities of documents. I implemented a redesign of a core feature in the application. Here I learned more about accessibility design.`,
    url: 'https://www.ibm.com/cloud/watson-discovery',
    backgroundColor: '#4F4F4F',
  },
  {
    id: nanoid(),
    img: 'ibm2.png',
    title: 'IBM',
    type: 'Internship',
    date: 'Summer 2019',
    paragraph: `As part of their Digital Technical Engagement team, I was responsible for developing new React components to perfect the experience an IBMer has in registering meetings with potential clients. I learned React + Redux and solidified RESTful API concepts.`,
    url: 'https://ibm.com/demos',
    backgroundColor: '#1746CD',
  },
  {
    id: nanoid(),
    img: 'inspirave.png',
    title: 'Inspirave',
    type: 'Internship',
    date: 'Summer 2018',
    paragraph: `Dedicated to helping people save money for large purchases, Inspirave pushed my comfort zone by developing their UI/UX. I learned better communications skills and developed an eye for better UX practices.`,
    url: 'https://inspirave.com/',
    backgroundColor: '#D2EDF7',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'referrals.png',
    title: 'helllo.dev',
    paragraph: 'Solo project; Creating a web application to bring awareness to the different branches of programming for high school juniors and seniors who know they want to get into the industry.',
    url: '#',
    type: 'Work in Progress',
    repo: '',
    backgroundColor: '#FFD80E',
  },
  {
    id: nanoid(),
    img: 'referrals.png',
    title: 'Referrals.fyi',
    paragraph: 'Team of 3; Creating a platform to democratize the technical interview process for software engineering jobs.',
    url: 'https://dev.referral.fyi/',
    type: 'Work in Progress',
    repo: '',
    backgroundColor: '#3CE0C6',
  },
  {
    id: nanoid(),
    img: 'Net-Zero.png',
    title: 'Net Zero',
    paragraph: 'Team of 8; Desktop-only site to showcase a vision of technology in the future',
    url: 'https://net-zero.surge.sh/#',
    repo: '',
    backgroundColor: '#FBDDD0',
  },
  {
    id: nanoid(),
    img: 'foodfestlive.png',
    title: 'Foodfest live',
    paragraph: 'Team of 12; Developed the first version of their website. Original built with GatsbyJS. It has been then switched to Wix for company reasons.',
    url: 'https://foodfestlive.com',
    repo: '',
    backgroundColor: '#D2EDF7',
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/calvintoes',
      img: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/calvintoes',
      img: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/calvintoes',
      img: '',
    },
  ],
};
