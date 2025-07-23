import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, User, Play } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1); // mobile
      } else if (width < 1024) {
        setItemsPerView(2); // tablet
      } else {
        setItemsPerView(3); // desktop
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  // Adjust current index when items per view changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex, maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && maxIndex > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev === maxIndex ? 0 : prev + 1);
      }, 5000); // Change slide every 5 seconds
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlay(false); // Stop auto-play on manual navigation
    setCurrentIndex((prev) => prev === 0 ? maxIndex : prev - 1);
  };

  const goToNext = () => {
    setIsAutoPlay(false); // Stop auto-play on manual navigation
    setCurrentIndex((prev) => prev === maxIndex ? 0 : prev + 1);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false); // Stop auto-play on manual navigation
    const adjustedIndex = Math.min(index, maxIndex);
    setCurrentIndex(adjustedIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [maxIndex]); // Add maxIndex as dependency

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setIsAutoPlay(false); // Stop auto-play on swipe
      goToNext();
    } else if (isRightSwipe) {
      setIsAutoPlay(false); // Stop auto-play on swipe
      goToPrevious();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary bg-opacity-10 rounded-full mb-3">
            <p className="text-xs font-semibold text-primary  uppercase tracking-wider">
              Happy Customers
            </p>
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners, businesses, and institutions across Madurai.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden" role="region" aria-label="Customer testimonials">
          <div
            ref={sliderRef}
            className="transition-transform duration-500 ease-in-out flex"
            style={{ 
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              touchAction: 'pan-y pinch-zoom'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                role="tabpanel"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-[280px] flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <User className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="mb-4" role="img" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`inline-block w-4 h-4 mr-1 ${
                          star <= Math.floor(testimonial.rating)
                            ? "text-yellow-400"
                            : star === Math.ceil(testimonial.rating) && testimonial.rating % 1 !== 0
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        {star <= Math.floor(testimonial.rating) ? "★" : 
                         star === Math.ceil(testimonial.rating) && testimonial.rating % 1 !== 0 ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {testimonial.hasVideo && (
                    <div className="text-primary font-medium text-sm cursor-pointer hover:text-primary/80 transition-colors flex items-center">
                      <Play size={16} className="mr-2" />
                      Watch Video Testimonial
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                aria-label="Previous testimonial"
                tabIndex={0}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={goToNext}
                disabled={currentIndex === maxIndex}
                aria-label="Next testimonial"
                tabIndex={0}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Testimonial navigation">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200 hover:scale-110",
                  index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial group ${index + 1}`}
                role="tab"
                aria-selected={index === currentIndex}
                tabIndex={0}
              />
            ))}
          </div>
        )}

        {/* Swipe indicator for mobile */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-500">
            Swipe left or right to see more testimonials
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
