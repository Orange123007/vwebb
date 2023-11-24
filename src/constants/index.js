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
    //redux,
    tailwind,
    wordpress,
    nodejs,
    //mongodb,
    //git,
    //figma,
    //docker,
    meta,
    starbucks,
    tesla,
    shopify,
    //carrent,
    vwebb,
    baloni,
    prime,
    //jobit,
    //tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "End-to-end SaaS development",
      icon: web,
    },
    {
      title: "App & Web development",
     // title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Content update",
      //title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Maintenance & Service",
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
      name: "wordpress",
      icon: wordpress,
    },
   //{
    //  name: "Redux Toolkit",
    //  icon: redux,
    //},
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    //{
    //  name: "MongoDB",
    //  icon: mongodb,
    //},
    {
      name: "Three JS",
      icon: threejs,
    },
    //{
    //  name: "git",
    //  icon: git,
    //},
    //{
    //  name: "figma",
    //  icon: figma,
    //},
    //{
    //  name: "docker",
    //  icon: docker,
    //},
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
  
  const projectsCoded = [
    {
      name: "VWEBB - digital agency",
      //description:
        //" ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: vwebb,
      source_code_link: "https://github.com/Orange123007/vwebb",
      link: "https://vwebb.com"
    },
  ];

  const projectsWP = [
    {
      name1: "N2O store",
      //description1:
        //" ",
      tags1: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        }
      ],
      image1: baloni,
      source_code_link1: "https://balonisofia.com",
      link1: "https://balonisofia.com"
    },
    {
      name1: "Prime drink store",
      //description1:
        //" ",
      tags1: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
        {
          name: "ninja-forms",
          color: "pink-text-gradient",
        },
      ],
      image1: prime,
      source_code_link1: "https://primebulgaria.com",
      link1: "https://primebulgaria.com"
    }
  ]
  
  export { services, technologies, experiences, testimonials, projectsCoded, projectsWP };