'use client';

import { motion } from 'framer-motion';
import { Code, Gamepad2, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with engaging mechanics and beautiful visuals.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'Turning complex challenges into elegant solutions through innovative thinking.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm ZaZa, a passionate full stack and game developer diving deep into creating immersive worlds and fun mechanics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Whether it's coding, designing, or brainstorming the next big idea, I'm always up for a challenge.
            Let's share knowledge, inspiration, and maybe some debugging woes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

