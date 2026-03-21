'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '353876413038';
  const whatsappMessage = encodeURIComponent('Hi Kertons Garage, I need help with my vehicle.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 to-secondary-100 pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 1000+ Happy Customers</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6"
          >
            Expert Auto Repair
            <span className="block text-primary-600">Trusted Mechanic in Clonmel</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl text-secondary-600 mb-10 max-w-2xl mx-auto"
          >
            Professional automotive service with 30+ years of experience.
            Get a quick quote on WhatsApp in minutes!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us Now
            </a>
            <a
              href="tel:+353876413038"
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '5000+', label: 'Repairs Done' },
              { number: '4.9/5', label: 'Google Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-secondary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
