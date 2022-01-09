
import restaurant from './images/project thumbnails/restaurant site.png'
import game from './images/project thumbnails/2048 game.png'
import calculator from './images/project thumbnails/js calculator.png'
import pomodoro from './images/project thumbnails/pomodoro timer.png'
import drum from './images/project thumbnails/drum machine.png'

export const projects=[
  { 
    title: 'Restaurant Site',
    img: restaurant,
    link: 'https://bg-party.netlify.app/',
    description: 'This project is built using React Hooks and represents a restaurant website. The site is bilingual, its content available in Bulgarian and English. The translation from Bulgarian to English is done extremely with self designed dictionaries and functionality. The project hold many features like navigation submenus, tooltip frame, google map, an extensive responsiveness, where elements can assume completely different shape,form and behavior, based on screen size. React components are written using JSX and additional utilities are included like React Router, context, callback, custom hooks & more.'
  },
  { 
    title: '2048 Game',
    img: game,
    link: 'https://sylvant.github.io/2048/',
    description: 'This is my first major self-driven project. Its idea is based on the 2048 game and represents a fully fledged browser game. The project is built using entirely basic JS and DOM manipulations, without the assistance of additional frameworks. Some style sheets are done using advanced SCSS syntax. The app offers both interaction for keyboard users and swipe direction detection for touchscreens. Animation effect on squares movement is done using smart CSS translate and transition rules paired with additional DOM manipulations.'
  },
  { 
    title: 'JavaScript Calculator',
    img: calculator,
    link: 'https://codepen.io/Sylvant/full/abBorrg',
    description: 'This project represents a calculator app and fits requirements set by a Free Code Camp challenge. The project is built using React Class syntax. I created the javascript logic, which performs the calculations, relying on extensive conditions and regular expressions. The calculator consists of various functionality buttons and supports keyboard interaction.'
  },
  { 
    title: 'Pomodoro Timer',
    img: pomodoro,
    link: 'https://codepen.io/Sylvant/full/WNoodVo',
    description: 'The Pomodoro Timer is classic technique to manage productive time. The project is designed to fit the Free Code Camp challenge criteria. This is the first app i designed using React Hooks. It also relies on the JS setTimeout and setInternal functions, which require fine tuning to behave accurately in the current context. The app also offers the small functionality to change appearance between "day" and "night" mode.'
  },
  { 
    title: 'Drum Machine',
    img: drum,
    link: 'https://codepen.io/Sylvant/full/RwGmaRZ',
    description: 'Drum Machine app created based on the Free Code Camp challenge criteria. It consists of drum pads, which produce an audio sound on click. Several functionalities are present like small display and volume control. The project is created relying on React class syntax. Some SCSS is utilized for styling.'
  },

]

