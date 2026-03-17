'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  Gauge,
  Droplet,
  Battery,
  Wind,
  Car,
  CircleSlash,
  Zap,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Engine Repair',
    description: 'Complete engine diagnostics and repairs for all makes and models.',
    features: ['Diagnostics', 'Engine servicing', 'Overhauls']
  },
  {
    icon: CircleSlash,
    title: 'Brake Service',
    description: 'Professional brake inspection, repair, and replacement services.',
    features: ['Brake pads', 'Brake discs', 'Fluid flush']
  },
  {
    icon: Droplet,
    title: 'Oil Change',
    description: 'Fast and affordable oil change service with premium quality oil.',
    features: ['Synthetic oil', 'Filter change', 'Inspection']
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery testing, charging, and replacement for reliable starts.',
    features: ['Testing', 'Replacement', 'Charging']
  },
  {
    icon: Wind,
    title: 'AC Repair',
    description: 'Air conditioning service and repair to keep you cool.',
    features: ['Recharge', 'Leak repair', 'Compressor']
  },
  {
    icon: Gauge,
    title: 'Transmission',
    description: 'Expert transmission service and repair for smooth shifting.',
    features: ['Fluid service', 'Repairs', 'Rebuilds']
  },
  {
    icon: Car,
    title: 'Suspension',
    description: 'Suspension and steering system inspection and repair.',
    features: ['Shocks', 'Struts', 'Alignment']
  },
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Complete electrical system diagnostics and repairs.',
    features: ['Wiring', 'Sensors', 'Diagnostics']
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Comprehensive auto repair and maintenance services to keep your vehicle running smoothly
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-secondary-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-secondary-100"
              >
                <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
