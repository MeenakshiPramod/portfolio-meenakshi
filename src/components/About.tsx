import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to complex problems.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive business value.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and its potential to improve lives.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section with Cool Animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
            
            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-20 right-10 w-3 h-3 bg-purple-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [-5, 15, -5],
                x: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-20 left-20 w-2 h-2 bg-pink-500 rounded-full opacity-60"
            />

            {/* Main Photo Container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="relative z-10"
            >
              {/* Animated Border Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary-100 to-white" />
                </div>
              </motion.div>

              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
              >
                <img
                  src="/WhatsApp Image 2025-06-15 at 19.33.52_7053b591.jpg"
                  alt="Meenakshi Pramod"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20"
                />
              </motion.div>

              {/* Skill Icons Floating Around Photo */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Code className="w-6 h-6 text-blue-500" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Lightbulb className="w-6 h-6 text-purple-500" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Target className="w-6 h-6 text-pink-500" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6"
            >
              Building Intelligent Systems with AI/ML
            </motion.h3>
            
            <div className="space-y-6 text-secondary-700 leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Versatile and innovative Computer Science undergraduate student with a strong academic background 
                and hands-on experience in developing AI/ML-powered solutions. Interested in building intelligent 
                systems using Python, Java, and modern frameworks.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Strong team collaborator with leadership experience in tech communities and a continuous learner 
                eager to contribute to cutting-edge research and development initiatives. I have hands-on experience 
                with machine learning, deep learning, and natural language processing.
              </motion.p>
              
              
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-4"
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg text-white mr-4 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <value.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900">
                  {value.title}
                </h4>
              </motion.div>
              <p className="text-secondary-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
