import { Code, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Software & Web Development",
    icon: Code,
    skills: ["Python", "JavaScript", "React", "Node.js", "Django", "C#", "HTML/CSS"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["SQL", "dbt", "Pandas", "NumPy", "PostgreSQL", "MongoDB", "SQL Server", "Power BI"],
  },
  {
    title: "Cloud, DevOps & Orchestration",
    icon: Cloud,
    skills: ["AWS (EC2, Lambda)", "Docker", "Apache Airflow", "Kubernetes", "CI/CD", "Git/GitHub"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technologies I've <span className="text-primary">Mastered</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I work with to deliver robust solutions.
        </p>

        <div className="grid grid-cols-1 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
