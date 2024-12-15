import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaPython,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import { TbBrandCpp } from 'react-icons/tb';
import {FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
// import {DiCss3} from 'react-icons/di'
import {SiMysql, SiPostgresql, SiTailwindcss} from 'react-icons/si'
import {BiLogoMongodb, BiChip} from 'react-icons/bi'
import {LuBrainCircuit} from 'react-icons/lu'
import {BsFillAwardFill} from 'react-icons/bs'
import { FaAngular } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Harsh',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Gaur',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+919873493657',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Hindi, English',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'gaurharsh012@gmail.com',
  },

  {
    id: 9,
    title: 'LinkdIn : ',
    description: 'linkedin.com/in/harsh-gaur144/',
  },

  
];

export const stats = [
  {
    id: 1,
    no: 'Experience',
    title: `Senior Analyst [Data-Engineer Capgemini] <br/> Sept 3 2024 - Current <br/> <br/>
    Full Stack Developer Intern [Exeevo-Bangalore] <br/> Jan 8 2024 - June 28 2024`,
  },


  // {
  //   id: 2,
  //   no: '5+',
  //   title: 'Completed <br /> Projects',
  // },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'achievement',
    icon: <BsFillAwardFill />,
    // year: '201',
    title: 'Technothlon <span> IIT Guwahati </span>',
    desc: 'Secured All India 2nd rank winning a trip to ISRO, Bangalore.',
  },
  {
    id: 2,
    category: 'achievement',
    icon: <BsFillAwardFill />,
    year: 'Current',
    title: 'Competitive Programming/DSA<span>(900+ problems solved)</span>',
    desc: 'Codeforces(1323), Codechef(1768), Leetcode(1622).',
  },

  {
    id: 3,
    category: 'achievement',
    icon: <BsFillAwardFill />,
    year: '2022 - PRESENT',
    title: 'Hackathons/Coding competitions',
    desc: 'Flipkart GRiD 5.0- Information Security Challenge:: Top 250 among 0.5 million,Algo University Graph Educational Contest : AIR 3,Codechef Starters 119 :: Global Rank 134 out of 25651 participants',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2024',
    title: 'Indian Institute of Information Technology Guwahati <span> Btech CSE </span>',
    desc: '7.81/10',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: 'Modern Delhi Public School, Sector 87, Faridabad  <span> 12th Standard </span>',
    desc: '79.2/100',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2017',
    title: 'Modern Delhi Public School, Sector 87, Faridabad <span> 10th Standard </span>',
    desc: '9.6/10',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
    url: <FaHtml5 className='skills-icons' />
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
    url: <FaJs className ='skills-icons' />
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
    url: <FaCss3Alt className ='skills-icons' />
  },

  {
    id: 4,
    title: 'Mysql',
    percentage: '95',
    url: <SiMysql className ='skills-icons' />
  },

  {
    id: 5,
    title: 'MongoDB',
    percentage: '90',
    url: <BiLogoMongodb className ='skills-icons' />
  },

  {
    id: 6,
    title: 'Python',
    percentage: '80',
    url: <FaPython className ='skills-icons' />
  },

  {
    id: 7,
    title: 'React',
    percentage: '75',
    url: <FaReact className ='skills-icons' />
  },

  {
    id: 8,
    title: 'NodeJS',
    percentage: '10',
    url: <FaNodeJs className ='skills-icons' />
  },

  {
    id: 9,
    title: 'TypeScript',
    percentage: '30',
    url: <SiTypescript className='skills-icons'/>
  },

  {
    id: 10,
    title: 'Angular',
    percentage:'100',
    url: <FaAngular className='skills-icons'/>
  },

  {
    id: 11,
    title: 'Tailwind',
    percentage: '100',
    url: <SiTailwindcss className='skills-icons'/>
  },

  {
    id: 12,
    title: 'C++',
    url: <TbBrandCpp className='skills-icons' />
  }
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'You :-)',
      },
      {
        icon: <FaCode />,
        title: 'Tech Stacks : ',
        desc: 'ReactJS, CSS, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: ';-)',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Large Language Model',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'LLM Log Analyser',
      },
      {
        icon: <FiUser />,
        title: 'Video : ',
        desc: 'http://surl.li/myanl',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Falcon-7b,Qlora,Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: 'https://github.com/Ch1efEag/flipkart2',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Youtube Users',
      },
      {
        icon: <FaCode />,
        title: 'Tool : ',
        desc: 'Filmora',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://www.youtube.com/@mr.chirpy203',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'NLP(Sentiment Analysis)',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'NLP Project',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Tech Stack : ',
        desc: 'Python, NLTK, Vader',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: 'https://github.com/Ch1efEag/sentiment_analysis',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Full Stack Development',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        title: 'Language : ',
        desc: 'CSS, Js, Express JS, MongoDB, Node JS',
      },
      {
        title: 'Github : ',
        desc: 'https://github.com/Ch1efEag/Bankwiz',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'NLP ( Haruna )',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Voice Bot',
      },
      {
        icon: <FiUser />,
        title: 'Tech Stack : ',
        desc: 'Pyttsx3',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Github : ',
        desc: 'https://github.com/Ch1efEag/haruna_1',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
