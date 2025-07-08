import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'PCOS Prediction Using Machine Learning',
      description: 'Designed a predictive model to detect Polycystic Ovary Syndrome (PCOS) using clinical and lifestyle features, achieving 92% accuracy with data from 10 hospitals.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/MeenakshiPramod/PCOS_Prediction',
      featured: true,
    },
    {
      title: 'StockX: Stock Price Prediction using Deep Learning',
      description: 'Developed an interactive Streamlit dashboard to forecast stock trends using LSTM, BiLSTM, GRU, and CNN-BiLSTM models with real-time data visualization.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Streamlit', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/MeenakshiPramod/StockPricePrediction',
      featured: true,
    },
    {
      title: 'Codesteps: Personalized Learning Platform',
      description: 'Developed a full-stack personalized learning platform using Flask and React with AI-powered content recommendations and progress tracking.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Flask', 'Gemini API', 'Python', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/MeenakshiPramod/PEGASUS/tree/frontend',
      featured: false,
    },
    {
      title: 'Legal-GPT: AI-Powered Legal Chatbot',
      description: 'Developed an intelligent legal chatbot using Groq API and LangChain for automated legal assistance and document analysis.',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Streamlit', 'LangChain', 'ChatGroq', 'Python', 'NLP'],
      liveUrl: '#',
      githubUrl: 'https://github.com/MeenakshiPramod/SatHackNight-LangChain.git',
      featured: false,
    },
    {
      title: 'Smart ATS Resume Analyzer',
      description: 'A Streamlit application that leverages Google\'s Gemini 1.5 Flash model to analyze resumes against job descriptions with keyword matching and profile optimization.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Streamlit', 'Gemini API', 'Python', 'NLP', 'PDF Processing'],
      liveUrl: '#',
      githubUrl: 'https://github.com/MeenakshiPramod/Smart-ATS-Resume-Analyzer',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A showcase of my AI/ML projects, demonstrating various technologies and problem-solving approaches in healthcare, finance, and automation.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="lg:w-1/2"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white border border-secondary-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h4>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-600 hover:text-secondary-700 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;