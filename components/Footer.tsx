'use client';

import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-secondary-200">Abbey Farm, Inishlounaght</p>
                  <p className="text-secondary-200">Clonmel, Co. Tipperary, Ireland</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+353876413038" className="text-secondary-200 hover:text-white transition-colors">
                  +353 87 641 3038
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@kertonsgarage.ie" className="text-secondary-200 hover:text-white transition-colors">
                  info@kertonsgarage.ie
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div className="text-secondary-200">
                  <p><span className="font-medium text-white">Mon - Fri:</span> 8:30 AM - 6:00 PM</p>
                  <p><span className="font-medium text-white">Saturday:</span> 9:00 AM - 4:00 PM</p>
                  <p><span className="font-medium text-white">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/Kertons-Garage-Clonmel-100036617846871/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kertonsgaragecarsales/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://www.google.com/search?sca_esv=608d6234066b0d5b&sxsrf=ANbL-n5L88hXbCMEpwF2a8QqOkrBBkOQfw:1773660609351&q=Kertons+garage+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjE2NDQxMTMwMbQwMzYwMLMw2MDI-IpRzDu1qCQ_r1ghPbEoMT1VISi1LDO1vHgRKw4JAMmfthlMAAAA&rldimm=3431144604186300680&tbm=lcl&hl=en-IE&sa=X&ved=2ahUKEwjk8MnUqKSTAxUbVUEAHbtlIHgQ9fQKegQIKxAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-secondary-900 px-6 py-2 rounded-lg font-medium hover:bg-secondary-100 transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Kertons Garage. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Website by{' '}
            <a
              href="https://pixelflowtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              PixelFlow Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
