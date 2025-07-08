import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 p-3 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors duration-300 shadow-lg"
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2">Meenakshi Pramod</h3>
            <p className="text-secondary-400">Software Developer & Technology Enthusiast</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Divider */}
          <div className="w-full h-px bg-secondary-700 mb-6" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center text-secondary-400"
          >
            <span>© 2025 Meenakshi Pramod. Made with</span>
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;