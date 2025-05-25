import Navbar from '@/components/landing-page/Navbar';
import Hero from '@/components/landing-page/Hero';
import Features from '@/components/landing-page/Features';
import Testimonials from '@/components/landing-page/Testimonials';
import HowItWorks from '@/components/landing-page/HowItWorks';
import Pricing from '@/components/landing-page/Pricing';
import Footer from '@/components/landing-page/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}
