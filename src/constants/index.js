export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
    icon: "/logos/home.svg",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
    icon: "/logos/about.svg",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
    icon: "/logos/project.svg",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
    icon: "/logos/exp.svg",
  },
  {
    id: 5,
    href: "https://github.com/raiiankit/Portfolio",
    type: "github",
  },
];

export const myProjects = [
  {
    title: "StudySphere",
    desc: "A powerful SaaS platform that enables users to generate dynamic content using advanced AI tools including image generation, video creation, code generation, music composition, and conversational AI. To unlock unlimited access, a subscription-based model is integrated using Stripe.",
    subdesc:
      "The platform is developed using Next.js, Tailwind CSS, and React.js. It uses Prisma as the ORM for managing user subscriptions and tracking API usage limits.",
    href: "NA",
    githubHref: "https://github.com/raiiankit/StudySphere",
    texture: "/textures/project/project1.png",
    logo: "/assets/project-logo1.png",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "assets/nextjs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Node js",
        path: "/other-logos/node.svg",
      },
    ],
  },

  {
    title: "Power Card",
    desc: "A robust backend architecture built for a video streaming platform, featuring well-structured APIs, secure request handling, and optimized file uploads using Multer and Cloudinary. Integrated advanced Mongoose schemas and aggregation pipelines for efficient data processing.",
    subdesc:
      "Developed using Node.js, Express.js, and MongoDB, with a focus on scalable code structure, modular design, and industry-level backend practices.",
    href: "NA",
    githubHref: "https://github.com/raiankitsr/PowerCard",
    texture: "/textures/project/project2.png",
    logo: "/assets/open-source.svg",
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/other-logos/node.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/other-logos/mongodb.svg",
      },
    ],
  },

  {
    title: "Ticket Booking Service - SpringBoot",
    desc: "A ticket booking platform built to manage and streamline event reservations efficiently. It enables users to browse events, book tickets, and receive confirmations, ensuring a smooth and intuitive booking experience.",
    subdesc: "This application is developed using Spring Boot, with RESTful APIs for handling booking requests, user management, and event listings. It ensures secure transactions and real-time ticket availability tracking.",
    href: "NA",
    githubHref: "https://github.com/raiiankit/Ticket-Booking-Service",

    texture: "/textures/project/project3.png",
    logo: "/assets/spring.jpeg",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Spring Boot",
        path: "/assets/spring-.svg",
      }
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.7 : isMobile ? 0.9 : 1.3,
    deskPosition: isMobile ? [0.8, -3.5, 0] : [2.1, -5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Oasis Infobyte",
    pos: "React Js",
    duration: "Feb 2024 - Oct 2024",
    title:
      "Worked on a full-stack application with Java, Spring Boot and Spring Security enabling role-based access control for employees and admins. Integrated REST APIs for handling complex data sets securely. Governed the backend data management with MySQL",
    href: "https://www.excelr.com/",
    icon: "/assets/excelr.png",
  },
  {
    id: 2,
    name: "bypeople Technologies",
    pos: "Software Engineer Intern",
    duration: "Jan 2025 - Present",
    title:
    "Contributed to the development of responsive and interactive web modules using HTML, CSS, JavaScript, and React.js, enhancing user experience and interface consistency across projects.",
    href: "https://bypeopletechnologies.com/",
    icon: "/assets/bws.png",
  },
];
