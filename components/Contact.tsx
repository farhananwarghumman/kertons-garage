'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '353876413038';
  const whatsappMessage = encodeURIComponent('Hi Kertons Garage, I would like to schedule a service.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-secondary-50">
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
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Contact us today for a free quote or to schedule your service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp CTA - Primary */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quick Response on WhatsApp</h3>
              <p className="mb-6 opacity-90">
                Get an instant quote and schedule your service in minutes!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Phone</h3>
                  <a href="tel:+353876413038" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    +353 87 641 3038
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Email</h3>
                  <a href="mailto:info@kertonsgarage.ie" className="text-secondary-700 hover:text-primary-600 transition-colors">
                    info@kertonsgarage.ie
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Location</h3>
                  <p className="text-secondary-700">
                    Abbey Farm, Inishlounaght<br />
                    Clonmel, Co. Tipperary, Ireland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">Business Hours</h3>
                  <div className="text-secondary-700 space-y-1">
                    <p><span className="font-medium">Mon - Fri:</span> 8:30 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call button */}
            <a
              href="tel:+353876413038"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full min-h-[600px]"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full relative">
              {/* Google Maps Embed with specific search for Kertons garage */}
              <iframe
                src="https://maps.google.com/maps?q=Kertons+garage,+Abbey+Farm,+Inishlounaght,+Clonmel,+Co.+Tipperary,+Ireland&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kertons Garage - Abbey Farm, Inishlounaght, Clonmel, Ireland"
              />
              {/* Additional link for exact directions */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.app.goo.gl/sGWzkoetXmg6JsCE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
