import { motion } from "framer-motion";
import logo from "@/assets/Logo.png";
import buildingIcon from "@/assets/building-doctor-icon.png";

const LoadingSpinner = ({ size = "large", showText = true, variant = "logo" }) => {
  // Animation variants for different spinner types
  const spinnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const ringVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const reverseRingVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Size configurations
  const sizeConfig = {
    small: {
      container: "w-16 h-16",
      logo: "w-8 h-8",
      ring: "border-2",
      text: "text-xs"
    },
    medium: {
      container: "w-24 h-24",
      logo: "w-12 h-12",
      ring: "border-3",
      text: "text-sm"
    },
    large: {
      container: "w-32 h-32",
      logo: "w-16 h-16",
      ring: "border-4",
      text: "text-base"
    }
  };

  const config = sizeConfig[size];

  if (variant === "simple") {
    // Simple spinning ring with logo
    return (
      <motion.div
        variants={spinnerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center"
      >
        <div className={`relative ${config.container}`}>
          {/* Single spinning ring */}
          <motion.div
            variants={ringVariants}
            animate="animate"
            className={`absolute inset-0 ${config.ring} border-primary/20 border-t-primary rounded-full`}
          />
          
          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logo} 
              alt="OM Vinayaga Associates" 
              className={`${config.logo} object-contain filter drop-shadow-sm`}
            />
          </div>
        </div>
        
        {showText && (
          <motion.p 
            variants={pulseVariants}
            animate="animate"
            className={`mt-4 ${config.text} font-medium text-primary/80`}
          >
            Loading...
          </motion.p>
        )}
      </motion.div>
    );
  }

  if (variant === "building") {
    // Building icon with animated rings
    return (
      <motion.div
        variants={spinnerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center"
      >
        <div className={`relative ${config.container}`}>
          {/* Outer ring */}
          <motion.div
            variants={ringVariants}
            animate="animate"
            className={`absolute inset-0 ${config.ring} border-primary/15 border-t-primary border-r-primary/60 rounded-full`}
          />
          
          {/* Inner ring - reverse rotation */}
          <motion.div
            variants={reverseRingVariants}
            animate="animate"
            className={`absolute inset-2 border-2 border-primary/10 border-b-primary border-l-primary/40 rounded-full`}
          />
          
          {/* Building icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={buildingIcon} 
              alt="Building Doctor" 
              className={`${config.logo} object-contain`}
            />
          </div>
        </div>
        
        {showText && (
          <motion.p 
            variants={pulseVariants}
            animate="animate"
            className={`mt-4 ${config.text} font-medium text-primary/80`}
          >
            Processing...
          </motion.p>
        )}
      </motion.div>
    );
  }

  // Default: Professional logo spinner
  return (
    <motion.div
      variants={spinnerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center"
    >
      <div className={`relative ${config.container}`}>
        {/* Outer gradient ring */}
        <motion.div
          variants={ringVariants}
          animate="animate"
          className={`absolute inset-0 ${config.ring} border-transparent rounded-full`}
          style={{
            background: `conic-gradient(from 0deg, #19b5ff, #19b5ff40, transparent, transparent, #19b5ff)`,
            borderRadius: '50%'
          }}
        />
        
        {/* Inner static ring for depth */}
        <div className={`absolute inset-1 border border-primary/10 rounded-full bg-white/50 backdrop-blur-sm`} />
        
        {/* Logo with subtle animation */}
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src={logo} 
            alt="OM Vinayaga Associates" 
            className={`${config.logo} object-contain filter drop-shadow-lg`}
          />
        </motion.div>
      </div>
      
      {showText && (
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="mt-6 text-center"
        >
          <p className={`${config.text} font-medium text-primary mb-1`}>
            OM Vinayaga Associates
          </p>
          <p className="text-xs text-primary/60 font-medium">
            Building Excellence...
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingSpinner;