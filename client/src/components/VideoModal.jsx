import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoId, 
  productName, 
  benefits = []
}) => {
  const defaultBenefits = [
    "Effective and efficient application",
    "Professional results for all users",
    "Time-saving installation process",
    "Compatible with various surface types"
  ];

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95%] sm:w-full max-h-[95vh] overflow-y-auto p-0 gap-0 bg-white sm:rounded-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-4 sm:p-6 border-b">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight text-left">
              How {productName} Works
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-600 mt-1 hidden sm:block text-left">
              See the product in action - Professional demonstration
            </DialogDescription>
          </DialogHeader>
        </div>
        
        {/* Video Content */}
        <div className="p-4 sm:p-6">
          <div className="aspect-video bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-6">
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
          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
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
          <div className="flex flex-col gap-3">
            <Button
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base rounded-lg"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Got it, Close Video
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                // Scroll to contact section or trigger contact form
                document.querySelector('a[href="/contact"]')?.click();
              }}
              className="w-full border-primary text-primary hover:bg-primary/5 py-6 text-base rounded-lg"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              Get Quote Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;