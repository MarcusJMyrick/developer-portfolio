import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
