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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// NOTE: You can find better icons for your specific tech stack.
// For now, I'm using the default icons as placeholders.
// You might want to find icons for Python, SQL, AWS, etc.
// A great place is: https://react-icons.github.io/react-icons/

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineering & Orchestration",
    icon: backend, // Placeholder Icon
  },
  {
    title: "Backend Web Development",
    icon: web, // Placeholder Icon
  },
  {
    title: "Cloud & MLOps",
    icon: creator, // Placeholder Icon
  },
  {
    title: "Full-Stack Development",
    icon: mobile, // Placeholder Icon
  },
];

const technologies = [
  {
    name: "Python",
    icon: redux, // Placeholder Icon
  },
  {
    name: "SQL",
    icon: shopify, // Placeholder Icon
  },
  {
    name: "dbt",
    icon: starbucks, // Placeholder Icon
  },
  {
    name: "Apache Airflow",
    icon: meta, // Placeholder Icon
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: tesla, // Placeholder Icon
  },
  {
    name: "PostgreSQL",
    icon: mongodb, // Placeholder Icon
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Data Visualization - Web Development Consultant",
    company_name: "Hektoen Institute, LLC (COVID Memorial Monument)",
    icon: meta, // Placeholder Icon
    iconBg: "#E6DEDD",
    date: "Sep 2024 - June 2025",
    points: [
      "Led development of the COVID Memorial Monument website, using React, PHP, and JavaScript to build a responsive, interactive interface on WordPress.",
      "Designed and implemented ETL pipelines on Databricks to process website analytics, delivering actionable insights on user engagement.",
      "Resolved complex technical issues, including custom template integration and REST API communication within WordPress.com hosting constraints.",
    ],
  },
  {
    title: "Data & Software Engineer",
    company_name: "John Deere (JDEP Electrification)",
    icon: tesla, // Placeholder Icon
    iconBg: "#E6DEDD",
    date: "July 2023 - Sep 2024",
    points: [
      "Engineered a Battery Data Analysis Tool using Python and Dash, automating processing of ~300 GB of data and enabling 30% faster decision-making.",
      "Developed an interactive Power BI dashboard for real-time data analysis and reporting.",
      "Improved system performance by 25% by conducting root-cause analysis on 2 TB of production data using SQL and Databricks Delta.",
      "Built and deployed a Python-based data cleaning tool that enhanced analysis precision by 30% and reduced processing time by 40%.",
    ],
  },
  {
    title: "Web Development Consultant",
    company_name: "Hektoen Institute, LLC (Hektoen International)",
    icon: shopify, // Placeholder Icon
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Oct 2024",
    points: [
      "Managed and maintained the Hektoen International website, ensuring performance and security using WordPress, PHP, and CSS.",
      "Reviewed and corrected over 3,000 journal articles with HTML and CSS to enhance formatting and accessibility.",
      "Developed custom WordPress themes and plugins to streamline website operations.",
    ],
  },
    {
    title: "Full-Stack Software Development Apprentice",
    company_name: "Discovery Partners Institute",
    icon: starbucks, // Placeholder Icon
    iconBg: "#E6DEDD",
    date: "Jan 2023 - April 2023",
    points: [
      "Engineered 4 key features for Ruby on Rails web applications, including user authentication, data encryption, and full CRUD functionalities.",
      "Improved overall platform functionality by 25% and increased user satisfaction scores by 20%.",
      "Managed database interactions to ensure data integrity and responsiveness.",
    ],
  },
];

export const projects = [
  {
    name: "Project 1",
    description:
      "A web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
    ],
    image: "https://via.placeholder.com/400x300",
    source_code_link: "https://github.com/",
    category: "Software Engineering"
  },
  {
    name: "Project 2",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "restapi",
        color: "text-green-500",
      },
      {
        name: "scss",
        color: "text-pink-500",
      },
    ],
    image: "https://via.placeholder.com/400x300",
    source_code_link: "https://github.com/",
    category: "Software Engineering"
  },
  {
    name: "Project 3",
    description:
      "A real-time analytics dashboard that provides insights into user behavior, website performance, and business metrics.",
    tags: [
      {
        name: "python",
        color: "text-blue-500",
      },
      {
        name: "pandas",
        color: "text-green-500",
      },
      {
        name: "matplotlib",
        color: "text-pink-500",
      },
    ],
    image: "https://via.placeholder.com/400x300",
    source_code_link: "https://github.com/",
    category: "Data and Analytics"
  },
];

export { services, technologies, experiences, projects };
