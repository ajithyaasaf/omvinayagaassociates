import { useEffect, useState, Suspense, lazy } from "react";
import Hero from "@/components/home/Hero";
import SEO from "@/components/layout/SEO";
import Benefits from "@/components/home/Benefits";

import Services from "@/components/home/Services";
import VideoSection from "@/components/home/VideoSection";
import BeforeAfter from "@/components/home/BeforeAfter";
import Products from "@/components/home/Products";

// Lazy load below-the-fold components
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const Faq = lazy(() => import("@/components/home/Faq"));
const About = lazy(() => import("@/components/home/About"));
const ContactSection = lazy(() => import("@/components/home/ContactSection"));
const Cta = lazy(() => import("@/components/home/Cta"));
// HomePageForm is small and conditional, can stay or be lazy loaded
import HomePageForm from "@/components/HomePageForm";

// Simple Loading Fallback
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    // Show the form after a delay when the page loads
    // Increased delay to 10s to prioritize LCP and mobile performance
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <SEO
        title="Home"
        description="Official Building Doctor Franchise in Madurai. Expert waterproofing, crack filling, and structural repair services."
        keywords="building doctor, waterproofing, crack filling, madurai, construction chemicals"
      />
      <Hero />
      <Benefits />

      <Services />

      <VideoSection />

      <BeforeAfter />

      <Products />

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Faq />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Cta />
      </Suspense>

      {/* Pass showForm as isOpen prop and handle close event */}
      <HomePageForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};
export default HomePage;
