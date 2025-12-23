'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular.js', 'SolidJS', 'Svelte', 'TailwindCSS', 'Styled Components', 'Three.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'NestJS', 'Laravel', 'PHP', 'Python', 'C#', '.Net'],
    },
    {
      category: 'Game Development',
      skills: ['Unity', 'Godot Engine', 'C#', 'Lua', 'Three.js'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite', 'Supabase', 'Prisma', 'Sequelize'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'AWS', 'Firebase', 'Vercel', 'Netlify', 'Cloudflare', 'Nginx', 'Jenkins'],
    },
    {
      category: 'Blockchain',
      skills: ['Solidity', 'Web3'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:border-purple-500/60 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

