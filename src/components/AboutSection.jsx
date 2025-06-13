import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-foreground/80 mb-6">
            I am a passionate full-stack developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            user experiences and robust server-side solutions.
          </p>
          <p className="text-lg text-foreground/80">
            My journey in software development has equipped me with a diverse skill set,
            allowing me to tackle complex problems and deliver high-quality solutions.
            I am constantly learning and adapting to new technologies to stay at the
            forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
