import React from 'react';

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoId, 
  productName, 
  benefits = []
}) => {
  if (!isOpen) return null;

  const defaultBenefits = [
    "Effective and efficient application",
    "Professional results for all users",
    "Time-saving installation process",
    "Compatible with various surface types"
  ];

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg sm:rounded-2xl max-w-5xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-3 sm:p-6 border-b">
          <div className="flex justify-between items-start sm:items-center">
            <div className="flex-1 pr-3">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
                How {productName} Works
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 hidden sm:block">
                See the product in action - Professional demonstration
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-white/50 rounded-full p-1.5 sm:p-2 transition-all duration-200 flex-shrink-0"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
              title={`${productName} Application Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Video Description */}
          <div className="mt-4 sm:mt-6 bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Key Benefits of {productName}
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
              {displayBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Got it, Close Video
            </button>
            <button
              onClick={() => {
                onClose();
                // Scroll to contact section or trigger contact form
                document.querySelector('a[href="/contact"]')?.click();
              }}
              className="w-full bg-white border border-primary text-primary hover:bg-primary/5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;