import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load components below the fold
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96" />,
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96" />,
});
const Reviews = dynamic(() => import('@/components/Reviews'), {
  loading: () => <div className="h-96" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-20" />,
});
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
