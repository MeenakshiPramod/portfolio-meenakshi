import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 88 },
        { name: 'C++', level: 85 },
        { name: 'C', level: 82 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'AI/ML & Frameworks',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'Keras', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'NLP', level: 82 },
      ],
    },
    {
      icon: Database,
      title: 'Data & Backend',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 92 },
        { name: 'FastAPI', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Supabase', level: 78 },
      ],
    },
    {
      icon: Palette,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 85 },
        { name: 'Jupyter', level: 95 },
        { name: 'VS Code', level: 92 },
        { name: 'Streamlit', level: 88 },
        { name: 'LabVIEW', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to build intelligent systems and solve complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg text-white mr-4">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-secondary-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                  </motion.div>
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