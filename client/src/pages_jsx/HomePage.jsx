import { useEffect, useState, Suspense, lazy } from "react";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/home/Services"));
const VideoSection = lazy(() => import("@/components/home/VideoSection"));
const BeforeAfter = lazy(() => import("@/components/home/BeforeAfter"));
const Products = lazy(() => import("@/components/home/Products"));
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
    document.title = "OM Vinayaga Associates | Building Doctor Franchise";
    // Show the form after a delay when the page loads
    // Increased delay to 10s to prioritize LCP and mobile performance
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Benefits />

      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <VideoSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <BeforeAfter />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Products />
      </Suspense>

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
