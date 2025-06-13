import { Github, ExternalLink, ArrowRight } from "lucide-react";

// Paste the new 'projects' array from Step 1 here
const projects = [
  {
    id: 1,
    title: "Marketing ROI Intelligence Platform",
    description: "A media analytics platform simulating marketing ROI tracking, featuring an automated ETL pipeline with Airflow and an interactive Streamlit dashboard.",
    image: "/projects/project2.png",
    tags: ["Python", "Apache Airflow", "Streamlit", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/MarcusJMyrick/mpad-analytics",
  },
  {
    id: 2,
    title: "AgentConnect HR Dashboard",
    description: "A full-stack HR dashboard inspired by State Farm's SSAA, allowing users to manage agents, team members, and assignments in one streamlined interface.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Docker", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/MarcusJMyrick/agentconnect",
  },
  {
    id: 3,
    title: "MMM Data Pipeline Prototype",
    description: "An end-to-end ELT data pipeline for a Media Mix Model case study, automating data ingestion, transformation, and validation using dbt and DuckDB.",
    image: "/projects/project1.png",
    tags: ["Python", "dbt", "DuckDB", "Pandas", "Bash"],
    demoUrl: "#",
    githubUrl: "https://github.com/MarcusJMyrick/mmm-data-pipeline",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A standalone, offline application to help users track transactions, set spending limits, and generate reports for budgeting insights using local data storage.",
    image: "/projects/project4.png",
    tags: ["React", "TypeScript", "Python", "Flask", "SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/CSC478B-CPG9/pft",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {/* This link will only appear if demoUrl is not '#' */}
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* This link now points to your GitHub profile */}
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MarcusJMyrick"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};