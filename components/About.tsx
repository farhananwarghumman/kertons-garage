'use client';

import { motion } from 'framer-motion';
import { Award, Users, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'ASE-certified mechanics with years of experience'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '12-month warranty on all repairs and parts'
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Same-day service available for most repairs'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Transparent pricing and honest recommendations'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl h-[400px] shadow-2xl overflow-hidden">
              <Image
                src="/mechanic-worker.avif"
                alt="Professional mechanic at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">15+ Years</h3>
                <p className="text-xl drop-shadow-lg">of Expert Service</p>
                <p className="text-sm mt-3 opacity-90 drop-shadow-lg">Professional automotive repair you can trust</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-50 blur-xl"></div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About Kerton Garage
            </h2>
            <div className="space-y-4 text-secondary-700 text-lg">
              <p>
                With over 15 years of experience in the automotive industry, Kerton Garage has been the
                trusted choice for vehicle repair and maintenance in our community.
              </p>
              <p>
                We take pride in providing honest, reliable service with transparent pricing. Our team of
                certified technicians uses state-of-the-art diagnostic equipment to ensure your vehicle
                receives the best care possible.
              </p>
              <p>
                From routine maintenance to complex repairs, we treat every vehicle as if it were our own.
                Your satisfaction and safety are our top priorities.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-secondary-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
