import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  EE,
  nbyula,
  welivdit,
  adaptiveLearning,
  videoEncoding,
  chess,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: " Software Engineer (Backend)",
    company_name: "Eccentric Engine",
    icon: EE,
    iconBg: "#000000",
    date: "November 2022 - Present",
    points: [
      "Designed and implemented a scalable notification service using Kafka and CDC, enabling millions of requests per minute and improving overall system efficiency.",
      "Designed and implemented an appointment module, resulting in the ability for users to easily schedule and manage appointments.",
      "Developed and built the complete backend for an Admin CMS, resulting in a robust and efficient system for managing and organizing content.",
      "Added a Jenkins-based CI/CD pipeline to automate key development and deployment tasks, increasing efficiency and streamlining multiple projects.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nbyula",
    icon: nbyula,
    iconBg: "#D3D3D3",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Successfully reduced the cost of OTP messaging by 50% by implementing WhatsApp login as a more cost-effective solution.",
      "Developed and implemented a Kafka-Middleware architecture to facilitate tracking of failures between microservices, enhancing overall system efficiency.",
      "Led the design, development, deployment, and maintenance of a unique ID generator that serves as a critical component of the payments service.",
      "Architected, built, and maintained the Nbyula assessment platform, ensuring its reliability and scalability.",
      "Initiated and executed the migration of the microservice architecture from a push modal to a pull modal, optimizing system performance.",
      "Implemented Micro Frontend Architecture, improving scalability and enabling more efficient development and maintenance of services.",
    ],
  },
  {
    title: "Full Stack Internship",
    company_name: "Welivdit",
    icon: welivdit,
    iconBg: "#D3D3D3",
    date: "April 2021 - Jan 2022",
    points: [
      "Built Marketplace product from scratch.",
      "Wrote a matching algorithm that matches a mentor with a mentee according to credentials.",
      "Deployed a Container Web APP on Amazon ECS.",
    ],
  },
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
    name: "Adaptive Learning Platform",
    description:
      "A learning platform where a teacher can manage courses, add questions to a course, and can publish Quizzes for a particular course. Whereas a student can take the quiz for a particular course enrolled in.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "oAuth 2.0",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: adaptiveLearning,
    source_code_link: "https://github.com/Parteeksachdeva/Quiz-client",
  },
  {
    name: "Video Encoding",
    description:
      "Video-Encoding is a video encoding software that encodes any video file format to mp4. It has features like hovering to play video, adding thumbnails, etc. Additionally, It offers users the ability to adjust video quality and The software is user-friendly, making it easy for even novice users to navigate.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: videoEncoding,
    source_code_link: "https://github.com/Parteeksachdeva/Video-Encoding",
  },
  {
    name: "Chess Game",
    description:
      "A real-time multiplayer chess web app is a product that allows users to play chess board games across the internet. The application runs on a web server, which hosts the app and facilitates communication between players, allowing them to see the board in real time and make moves.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Web Sockets",
        color: "blue-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Parteeksachdeva/chess-app.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
