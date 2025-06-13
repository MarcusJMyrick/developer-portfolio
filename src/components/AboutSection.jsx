import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Overview <span className="text-primary"> </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software & Data Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a software and data engineer who thrives on transforming complex problems into elegant, high-impact solutions. My experience spans the full development lifecycle, from architecting responsive front-ends in <strong>React</strong> to engineering scalable back-ends with <strong>Node.js</strong> and <strong>Python</strong>.
            </p>

            <p className="text-muted-foreground">
              What truly drives me is the power of data. I specialize in building end-to-end analytics pipelines using modern tools like <strong>dbt</strong>, <strong>Airflow</strong>, and <strong>AWS</strong> to process terabytes of data and uncover actionable insights. Whether it's developing a user-centric web app or a quantitative model, my focus is always on creating technology that is robust, efficient, and data-informed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Software Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Full-stack development with modern frameworks and best practices
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Data & Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Building scalable data pipelines and analytics solutions
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Quantitative Development</h4>
              <p className="text-sm text-muted-foreground">
                Creating data-driven models and quantitative solutions
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
              <p className="text-sm text-muted-foreground">
                Implementing cloud infrastructure and CI/CD pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
