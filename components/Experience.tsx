'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance / Personal Projects',
      period: 'Present',
      description: [
        'Developing full-stack web applications using modern technologies',
        'Creating game projects with Unity and Godot Engine',
        'Building responsive and performant user interfaces',
        'Working with various databases and cloud services',
      ],
    },
    {
      title: 'Game Developer',
      company: 'Personal Projects',
      period: 'Present',
      description: [
        'Designing and implementing game mechanics',
        'Creating immersive gaming experiences',
        'Working with game engines and development tools',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My journey and professional experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 pb-8 border-l-2 border-purple-500/30"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <Briefcase size={16} />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

