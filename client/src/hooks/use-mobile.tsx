import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current viewport is mobile
 * 
 * @param {number} breakpoint - Width threshold to consider mobile (default: 768px)
 * @returns {boolean | null} True if viewport width is below the breakpoint, null during initialization
 */
export function useIsMobile(breakpoint: number = 768): boolean | null {
  // Start with null to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Set the initial value
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Run once to set initial value
    checkMobile();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  
  return isMobile;
}

/**
 * Custom hook to track current viewport width
 * 
 * @returns {number | null} Current viewport width, null during initialization
 */
export function useViewportWidth(): number | null {
  // Start with null to avoid hydration mismatch
  const [width, setWidth] = useState<number | null>(null);
  
  useEffect(() => {
    // Set the initial value
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    
    // Run once to set initial value
    updateWidth();
    
    // Set up event listener for window resize
    window.addEventListener('resize', updateWidth);
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  return width;
}

export default useIsMobile;
