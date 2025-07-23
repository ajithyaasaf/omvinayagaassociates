import React from 'react';
import { X } from 'lucide-react';

const TestimonialVideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl
}) => {
  if (!isOpen || !videoUrl) return null;

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);

  if (!videoId) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg sm:rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-3 sm:p-6 border-b">
          <div className="flex justify-between items-start sm:items-center">
            <div className="flex-1 pr-3">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
                Customer Video Testimonial
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 hidden sm:block">
                Hear directly from our satisfied customers
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-full p-1.5 sm:p-2 transition-all duration-200 flex-shrink-0"
              aria-label="Close video"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
        
        {/* Video Content */}
        <div className="p-3 sm:p-6">
          <div className="aspect-video bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Customer Video Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Description */}
          <div className="mt-4 sm:mt-6 bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Why Choose OM Vinayaga Associates?
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700">Expert diagnosis and permanent solutions</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700">High-quality Building Doctor products</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700">Professional application and support</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-gray-700">Long-lasting results with warranty</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              Close Video
            </button>
            <button
              onClick={() => {
                onClose();
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback: navigate to contact page
                  window.location.href = '/contact';
                }
              }}
              className="w-full bg-white border border-primary text-primary hover:bg-primary/5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              Get Similar Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoModal;