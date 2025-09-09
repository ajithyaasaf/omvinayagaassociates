import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Shield,
  Droplets,
  Hammer,
  Zap,
  Award,
  Play,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  Sparkles,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/utils/animations";

// Import the uploaded images
import kavashImage1 from "@assets/WhatsApp Image 2025-09-03 at 2.11.10 PM (1)_1757398652784.jpeg";
import kavashImage2 from "@assets/WhatsApp Image 2025-09-03 at 2.11.10 PM_1757398662949.jpeg";
import kavashImage3 from "@assets/WhatsApp Image 2025-09-03 at 2.11.11 PM_1757398668192.jpeg";
import kavashImage4 from "@assets/WhatsApp Image 2025-09-03 at 2.11.10 PM (1)_1757398672762.jpeg";

const KavashPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Kavash Solutions | OM Vinayaga Associates";
  }, []);

  // Image carousel for the uploaded images
  const kavashImages = [kavashImage1, kavashImage2, kavashImage3, kavashImage4];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % kavashImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [kavashImages.length]);

  // Kavash service categories based on typical building solutions
  const kavashServices = [
    {
      id: 1,
      title: "Advanced Waterproofing",
      icon: <Droplets className="w-8 h-8" />,
      description: "Cutting-edge waterproofing solutions for lasting protection against water damage and seepage issues.",
      features: ["Membrane waterproofing", "Liquid applied systems", "Injection waterproofing", "Crystalline technology"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Structural Solutions",
      icon: <Building2 className="w-8 h-8" />,
      description: "Comprehensive structural repair and strengthening solutions for building integrity and safety.",
      features: ["Crack injection", "Carbon fiber strengthening", "Structural grouting", "Foundation repair"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      title: "Protective Coatings",
      icon: <Shield className="w-8 h-8" />,
      description: "High-performance protective coatings for enhanced durability and aesthetic appeal.",
      features: ["Anti-corrosion coatings", "Thermal barriers", "Chemical resistant coatings", "Decorative finishes"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Repair & Restoration",
      icon: <Hammer className="w-8 h-8" />,
      description: "Expert repair and restoration services to bring buildings back to their optimal condition.",
      features: ["Concrete repair", "Joint sealing", "Surface preparation", "Heritage restoration"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Tab content
  const tabContent = {
    overview: {
      title: "Kavash Excellence",
      content: "Our Kavash solutions represent the pinnacle of building repair and protection technology. With years of expertise and innovative approaches, we deliver solutions that exceed expectations."
    },
    technology: {
      title: "Advanced Technology",
      content: "Utilizing state-of-the-art materials and application techniques, our Kavash solutions are engineered for superior performance and longevity in challenging environments."
    },
    applications: {
      title: "Diverse Applications",
      content: "From residential buildings to industrial complexes, our Kavash solutions are versatile and adaptable to meet the unique requirements of every project."
    },
    benefits: {
      title: "Key Benefits",
      content: "Experience enhanced building performance, reduced maintenance costs, and long-term protection with our comprehensive Kavash solution portfolio."
    }
  };

  // Statistics
  const kavashStats = [
    { label: "Projects Completed", value: "500+", icon: <Target className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users className="w-6 h-6" /> },
    { label: "Years Experience", value: "15+", icon: <Award className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.5%", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero Section with Image Carousel */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={kavashImages[currentImageIndex]}
                alt={`Kavash Solution ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              <motion.div
                variants={fadeInUp(0.1)}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold">Premium Kavash Solutions</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp(0.2)}
                className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
              >
                Revolutionary
                <span className="block text-primary">Kavash</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Technology
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp(0.3)}
                className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed"
              >
                Transforming building protection with innovative solutions that deliver
                exceptional performance, durability, and aesthetic excellence.
              </motion.p>

              <motion.div
                variants={fadeInUp(0.4)}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link href="/contact">
                  <span className="relative inline-flex group">
                    <span className="absolute inset-0 translate-x-2 translate-y-2 bg-primary/30 rounded-lg transform transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="relative inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold transition shadow-xl hover:shadow-2xl">
                      Explore Solutions
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </Link>
                <button className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  <Play className="mr-3 w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Image Carousel Indicators */}
            <motion.div
              variants={fadeInRight(0.3)}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex justify-center space-x-3 mb-6">
                  {kavashImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-white font-bold text-xl mb-4 text-center">
                  Advanced Kavash Applications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {kavashStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp(0.1)} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Kavash Innovation</span>
              </div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Discover the Power of
                <span className="text-primary"> Kavash Solutions</span>
              </h2>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
              variants={fadeInUp(0.2)}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <h3 className="font-bold text-2xl mb-4 text-center">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed text-center">
                  {tabContent[activeTab].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
          >
            <motion.div variants={fadeInUp(0.1)} className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Comprehensive Kavash Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our complete range of Kavash solutions covers every aspect of building protection and enhancement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kavashServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp(index * 0.1)}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Link href="/contact">
                        <span className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-2 transform duration-300">
                          Learn More
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center text-white"
          >
            <motion.div variants={fadeInUp(0.1)}>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Get Started Today</span>
              </div>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp(0.2)}
              className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Ready to Experience Kavash Excellence?
            </motion.h2>
            
            <motion.p
              variants={fadeInUp(0.3)}
              className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
            >
              Contact our experts for a personalized consultation and discover how Kavash solutions can transform your building projects.
            </motion.p>
            
            <motion.div
              variants={fadeInUp(0.4)}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/contact">
                <span className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                  <Phone className="mr-3 w-5 h-5" />
                  Contact Expert
                </span>
              </Link>
              <a href="mailto:info@omvinayagaassociates.com" className="inline-flex items-center bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                <Mail className="mr-3 w-5 h-5" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KavashPage;