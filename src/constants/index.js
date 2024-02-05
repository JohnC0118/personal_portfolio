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
    epic,
    datatom,
    bytedance,
    carrent,
    jobit,
    tripguide,
    threejs,
    linkedin,
    github_square,
    resume,
    resumeDoc
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

  const contacts = [
    {
      title: "linkedIn",
      link: "https://www.linkedin.com/in/ruoqian-chu/",
      icon: linkedin
    },
    {
      title: "github",
      link: "https://github.com/JohnC0118?tab=repositories",
      icon: github_square
    },
    {
      title:"resume",
      link:resumeDoc,
      icon:resume,
    }

  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Spring Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "DATATOM",
      icon: datatom,
      iconBg: "#FFFFFF",
      date: "June 2021 - August 2021",
      location: "Shanghai, China",
      points: [
        "Implemented a Python application that generates bi-monthly statistical reports for a service agent using openpyxl and docx library. Performed imputation and record merging for data cleansing in a PostgreSQL database.",
        "Designed a Covid-19 Entrance Monitor Dashboard for a Chinese University, integrating real-time high risk city data through web-scraping with BeautifulSoup package and Regex. Conducted analysis by cross-referencing student profiles, gate entry and risk level schemas using SQL queries.",
        "Performed query analysis and optimized query performance through proper indexing and applying optimizer hints."
      ],
    },
    // {
    //   title: "Teaching Assistant",
    //   company_name: "Washington University in St. Louis",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2022 – Jun 2022",
    //   location: "Saint Louis, MO",
    //   points: [
    //     "Hosted studio sessions to guide discussions about data structures and complex algorithms for a group of 20 student in CSE 247: Data Structure and Algorithm."
    //   ],
    // },
    {
      title: "Software Engineer",
      company_name: "Epic",
      icon: epic,
      iconBg: "#FFFFFF",
      date: "May 2023 - Aug 2023",
      location: "Madison, IL",
      points: [
        "Designed a new frontend for hospital billing estimation workflow inside MyChart, a patient medical portal with 100 million+ end-users. Planning to showcase at 2023 Epic’s annual user group meeting.",
        "Implemented a price transparency functionality empowering users to compare prices across providers/hospitals.",
        "Transitioned razor files to React Typescript and SCSS with Redux for state management, enhancing UI.",
        "Modified the C# layer for optimal data retrieval from the M database through ECF commands."
      ],
    },
    {
      title: "Software Engineer (Live-streaming Backend)",
      company_name: "ByteDance",
      icon: bytedance,
      iconBg: "#FFFFFF",
      date: "May 2024 - Present",
      location: "San Jose, CA",
      points: [
        "Incoming Soon ..."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, contacts};