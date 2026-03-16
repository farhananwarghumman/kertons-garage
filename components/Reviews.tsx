'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    name: 'Ashar A',
    rating: 5,
    text: 'A man you can rely on 24/7 & 365. Rapid and instant help and support. Understands your situation well and does the job beyond your expectations. Very justified rates and very transparent person. He gives you respect and values his customers. Always pleasure to see Evan and his team.',
    date: '2 months ago'
  },
  {
    name: 'Marie Ramkumar',
    rating: 5,
    text: 'Evan is wonderful and so reliable! I was stuck in a situation with my car and needed it to be jumpstarted and Evan was able to make time to call down the same evening and help me out. Without his help I would have been left stranded without means of transport. I would highly recommend his services and kerton\'s garage for any automobile needs! 10/10 service!',
    date: '3 weeks ago'
  },
  {
    name: 'Andrew Duggan',
    rating: 5,
    text: 'Today I got my car repaired by kertons garage even though they were very busy with other customers they found time to pick up my car repair it and returned it to me today at a very reasonable cost. Very happy customer. Thanks guys.',
    date: '2 months ago'
  },
  {
    name: 'Liam O\'Keefe',
    rating: 5,
    text: 'Car broke down Sunday evening but Kertons got the alternator replaced by Monday afternoon and got me back on the road. Very helpful and reliable service. Highly recommend it.',
    date: '4 months ago'
  },
  {
    name: 'Tony Miller',
    rating: 5,
    text: 'I\'ve dealt with a lot of garages over the years through my own work in the motor trade, and I can honestly say Kertons Garage stands out as one of the most reliable I\'ve come across. The lads here really know their stuff – the standard of work is top class, and you can see the pride they take in what they do. Very impressed with the level of skill and service. Highly recommended.',
    date: '6 months ago'
  },
  {
    name: 'Nicola Barnett',
    rating: 5,
    text: 'We have been going to Kerton\'s for a few years now and their customer service has been exemplary. Our car is 20 years old and no job is too small for Evan and his team take on. Before beginning any work, Evan keeps us updated and sends us quotes before starting. Very reasonably priced and an extremely professional service, I couldn\'t recommend Kerton\'s Garage more.',
    date: 'a year ago'
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="reviews" className="py-20 bg-white">
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
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-2xl font-bold text-secondary-900 ml-2">4.9/5</span>
          </div>
          <p className="text-xl text-secondary-600">
            Based on 200+ Google Reviews
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-700 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-secondary-900">{review.name}</p>
                  <p className="text-sm text-secondary-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.google.com/search?sca_esv=608d6234066b0d5b&sxsrf=ANbL-n5L88hXbCMEpwF2a8QqOkrBBkOQfw:1773660609351&q=Kertons+garage+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjE2NDQxMTMwMbQwMzYwMLMw2MDI-IpRzDu1qCQ_r1ghPbEoMT1VISi1LDO1vHgRKw4JAMmfthlMAAAA&rldimm=3431144604186300680&tbm=lcl&hl=en-IE&sa=X&ved=2ahUKEwjk8MnUqKSTAxUbVUEAHbtlIHgQ9fQKegQIKxAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Star className="w-5 h-5" />
            Read More Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
