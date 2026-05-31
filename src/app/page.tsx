import HomeHero from '@/components/home/HomeHero';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeAbout from '@/components/home/HomeAbout';
import HomeServices from '@/components/home/HomeServices';
import HomeWork from '@/components/home/HomeWork';
import HomeProjects from '@/components/home/HomeProjects';
import HomePricing from '@/components/home/HomePricing';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HomeBlog from '@/components/home/HomeBlog';
import CTABanner from '@/components/CTABanner';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Preloader />
      <HomeHero />
      <HomeFeatures />
      <HomeAbout />
      <HomeServices />
      <HomeWork />
      <HomeProjects />
      <HomePricing />
      <TestimonialsCarousel />
      <HomeBlog />
      <CTABanner />
    </div>
  );
}

