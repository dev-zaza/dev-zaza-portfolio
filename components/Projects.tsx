'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Video } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Dorge World',
      description: 'A web experience that blends playful visuals with a smooth landing flow. Visit the live site to explore the world.',
      tech: ['Web Development', 'Interactive Design'],
      github: null,
      demo: 'https://wurld.dorge.xyz/',
      video: null,
      category: 'Web Development',
    },
    {
      title: 'Unicorn Arena',
      description: 'Arena-style gameplay centered on fast, satisfying combat. Watch the gameplay reel for a peek at the action.',
      tech: ['Game Development', 'Unity', 'C#'],
      github: null,
      demo: null,
      video: 'https://www.loom.com/share/b8a6500b139b41018a27396e7e4c1811',
      category: 'Game Development',
    },
    {
      title: 'Chaos Arena',
      description: 'An action-packed arena game featuring intense combat mechanics and engaging gameplay. Play now on Itch.io!',
      tech: ['Game Development', 'Unity', 'C#'],
      github: null,
      demo: 'https://dev-zaza.itch.io/choasarena',
      video: null,
      category: 'Game Development',
    },
    {
      title: 'Candy Cascade Slots',
      description: 'A delightful slot game with vibrant visuals and exciting gameplay mechanics. Experience the sweet cascade!',
      tech: ['Game Development', 'Slot Game'],
      github: null,
      demo: 'https://dev-zaza.itch.io/candy-cascade-slots',
      video: null,
      category: 'Game Development',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-purple-400 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Play</span>
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Video size={18} />
                      <span className="text-sm">Watch</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/dev-zaza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

