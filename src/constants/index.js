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


const projects = [
  {
    name: "AgentConnect – Full-Stack HR Dashboard",
    description:
      "A cloud-native HR platform simulating State Farm’s SSAA application to manage agents, teams, and assignments, featuring a responsive UI and a robust RESTful API.",
    category: "Software Engineering",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
       {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: carrent, // Placeholder Image
    source_code_link: "https://github.com/MarcusJMyrick/agentconnect",
  },
  {
    name: "Marketing ROI Intelligence Platform",
    description:
      "An end-to-end media analytics pipeline delivering marketing ROI insights by processing, modeling, and visualizing customer data with attribution and forecasting models.",
    category: "Data and Analytics",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "prophet",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: jobit, // Placeholder Image
    source_code_link: "https://github.com/MarcusJMyrick/mpad-analytics",
  },
  {
    name: "MMM Data Pipeline Prototype",
    description:
      "A production-style, end-to-end ELT data pipeline for a Media Mix Model, automating data ingestion, transformation, and validation using a modern, file-based data stack.",
    category: "Quantitative Development",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "dbt",
        color: "green-text-gradient",
      },
      {
        name: "duckdb",
        color: "pink-text-gradient",
      },
      {
        name: "bash",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide, // Placeholder Image
    source_code_link: "https://github.com/MarcusJMyrick/mmm-data-pipeline",
  },
];

export { services, technologies, experiences, projects };
