
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import kernn from "../assets/company/kernn.png";

import cpp from "../assets/tech/cpp.png";
import python from "../assets/tech/python.png";

import lms from "../assets/projects/lms.png";
import libraryhub from "../assets/projects/libraryhub.png";
import weather from "../assets/projects/weather.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++, Python Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },

];

const experiences = [
  {
    title: "Full Developer",
    company_name: "Kernn Automations",
    icon: kernn,
    iconBg: "#383E56",
    date: "July 2025 - now",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "LMS_Full_Stack",
    description:
      "LMS_Full_Stack is a web-based platform that enables users to browse, enroll, and learn from a variety of educational courses. It supports user authentication, role-based access for students and instructors, and course content management. The system ensures smooth interaction between frontend and backend through RESTful APIs. It offers a seamless learning experience with features like progress tracking, assessments, and certifications.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: lms,
    source_code_link: "https://github.com/mchandu454/LMS_FULL_STACK",
  },
  {
    name: "LibraryHub",
    description:
      "LibraryHub is a web-based platform that allows users to search, borrow, and manage books from an online library system. It supports user authentication, role-based access for members and admins, and book inventory management. The platform integrates with external APIs like Google Books for extended search functionality. It offers a smooth experience with features like borrowing history, due date tracking, and personalized dashboards.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: libraryhub,
    source_code_link: "https://github.com/mchandu454/LibraryHub",
  },
  {
    name: "Weather Application",
    description:
      "A weather application that provides real-time weather updates, forecasts, and location-based weather information using modern web technologies.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://github.com/mchandu454/climate", // Add your GitHub link if available
  },
];

export { services, technologies, experiences, testimonials, projects };
