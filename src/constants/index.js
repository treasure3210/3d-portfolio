import {
  javascript,
  typescript,
  tailwind,
  git,
  docker,
  hcic,
  goa,
  finest,
  mktfy,
  tipcaclulator,
  sleeptimer,
  threejs,
  flask,
  python,
  flutter,
  dart,
  swift,
  react,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "iOS Developer",
    icon: swift,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Python Backend Developer",
    icon: python,
  },
  {
    title: "Front-End Developer",
    icon: react,
  },
];

const technologies = [
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flutter & iOS Developer",
    company_name: "The Finest Artist",
    icon: finest,
    iconBg: "#e7e7e7",
    date: "Aug 2022 - Present",
    points: [
      "Sleep Timer is a timer application that reached over 4 million downloads on Google Play.",
      "Developed a new version of Sleep Timer using Flutter from scratch, implementing custom views and key features such as music and video player controls, notifications and widgets.",
      "Collaborated with experienced professionals, including a Software Engineer from Google, and a Woowa Bros Designer, participating daily engineering design meetings and weekly team product discussions.",
    ],
  },
  {
    title: "Office Administrative Assistant",
    company_name: "Government of Alberta",
    icon: goa,
    iconBg: "#FFF",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Interact professionally with clients, members of the public and internal staff through oral and written communication.",
      "Process and input accounts payable invoices, information into financial payment systems and other government operated programs.",
      "Create and maintain manual and electronic files according to the file standards.",
    ],
  },
  {
    title: "Team Lead Office Administrator | Wordpress Developer",
    company_name: "Hanwood Canada Immigration Consulting (HCIC)",
    icon: hcic,
    iconBg: "#FFF",
    date: "Dec 2017 - Aug 2021",
    points: [
      "Led a group of office administrative and legal assistants, train new staffs and give instrutions, and manage due dates and set priorities.",
      "Directly handled client's complaints and issues, communicated closely with government officials.",
      "Improved customer engagement significantly with online forms and visualization for building friendly user interface.",
      "Implementing responsive design and utilized custom usage of CSS and Javascript for extra features to improve user experience.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MKTFY",
    description:
      "This is a graduation project for the iOS development bootcamp - Launchpad by Vog. It is an iOS app that end-users can perform CRUD on items, browse, buy and sell their belongings via iOS app.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "UIKit",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
    ],
    image: mktfy,
    source_code_link: "https://github.com/treasure3210/MKTFY",
  },
  {
    name: "Tip Calculator",
    description:
      "Tip Calculator using MVVM, Combine, CombineCocoa, Snapkit along with Snapshot/UI/Unit Tests.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "UIKit",
        color: "green-text-gradient",
      },
      {
        name: "MVVM",
        color: "pink-text-gradient",
      },
    ],
    image: tipcaclulator,
    source_code_link: "https://github.com/treasure3210/Tip-Calculator",
  },
  {
    name: "Sleep Timer",
    description:
      "Sleep Timer is a timer application that turns off music, video, or other features, fully customizable. Developed entire app in Android and iOS application that has following main features: Media (Music and Video) off, Screen Off, Silent Mode, Do Not Disturb Mode, Fade-out Volume, and Notification on/off.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Riverpod",
        color: "pink-text-gradient",
      },
    ],
    image: sleeptimer,
    source_code_link: "https://musicoff.co/",
  },
  {
    name: "MKTFY",
    description:
      "This is a graduation project for the iOS development bootcamp - Launchpad by Vog. It is an iOS app that end-users can perform CRUD on items, browse, buy and sell their belongings via iOS app.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "UIKit",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
    ],
    image: mktfy,
    source_code_link: "https://github.com/treasure3210/MKTFY",
  },
  {
    name: "Tip Calculator",
    description:
      "Tip Calculator using MVVM, Combine, CombineCocoa, Snapkit along with Snapshot/UI/Unit Tests.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "UIKit",
        color: "green-text-gradient",
      },
      {
        name: "MVVM",
        color: "pink-text-gradient",
      },
    ],
    image: tipcaclulator,
    source_code_link: "https://github.com/treasure3210/Tip-Calculator",
  },
  {
    name: "Sleep Timer",
    description:
      "Sleep Timer is a timer application that turns off music, video, or other features, fully customizable. Developed entire app in Android and iOS application that has following main features: Media (Music and Video) off, Screen Off, Silent Mode, Do Not Disturb Mode, Fade-out Volume, and Notification on/off.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Riverpod",
        color: "pink-text-gradient",
      },
    ],
    image: sleeptimer,
    source_code_link: "https://musicoff.co/",
  },
];

export { services, technologies, experiences, testimonials, projects };