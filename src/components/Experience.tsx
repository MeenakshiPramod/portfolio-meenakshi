import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Indian Space Research Organization (ISRO)',
      department: 'Telemetry Checkout Systems Division (TCSD)',
      location: 'Thiruvananthapuram, India',
      period: 'May–June 2025',
      description: [
        'Developed and implemented a LabVIEW-based solution to configure the ETHICS-V2 module for dynamic RS485 communication with DAU-1 telemetry systems across varying data rates',
        'Contributed to real-time telemetry testing for launch vehicle systems, enhancing data handling efficiency and scalability',
        'Demonstrated strong adaptability and fast learning by quickly mastering complex hardware interfacing, PXI systems, and real-time telemetry protocols',
        'Worked with cutting-edge space technology and contributed to India\'s space missions'
      ],
      technologies: ['LabVIEW', 'RS485', 'PXI Systems', 'Real-time Systems', 'Hardware Interfacing'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Enterprise Building Training Solutions',
      location: 'Remote',
      period: 'May 2025',
      description: [
        'Developed a machine learning model for PCOS prediction using clinical data from 10 hospitals, achieving an accuracy of 92% in classification',
        'Enhanced model accuracy and efficiency by identifying high-impact biomarkers through comprehensive exploratory data analysis and feature engineering',
        'Implemented various ML algorithms including Random Forest, SVM, and Neural Networks for comparative analysis',
        'Created comprehensive documentation and presentation materials for stakeholders'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A journey of growth, learning, and contributing to innovative projects across space technology and AI/ML domains.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white border border-secondary-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Briefcase className="text-primary-600 mr-2" size={20} />
                        <h3 className="text-xl font-bold text-secondary-900">
                          {exp.title}
                        </h3>
                      </div>
                      <h4 className="text-lg font-semibold text-primary-600 mb-1">
                        {exp.company}
                      </h4>
                      {exp.department && (
                        <p className="text-md text-secondary-600 mb-2">
                          {exp.department}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-secondary-700 flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;