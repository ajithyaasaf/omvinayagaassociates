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

const KavashPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.title = "Kavash Solutions | OM Vinayaga Associates";
  }, []);

  // Kavash content based on the WhatsApp images you provided
  // This is a placeholder structure - please provide the actual content from your images
  const kavashContent = {
    title: "KAVASH",
    subtitle: "Premium Building Solutions",
    description: "Revolutionary waterproofing and construction solutions for modern buildings",
    
    // Main sections that would typically be in such content
    sections: [
      {
        id: "products",
        title: "Kavash Products",
        items: [
          "Premium Waterproofing Systems",
          "Advanced Sealants & Adhesives", 
          "Structural Repair Solutions",
          "Weather Protection Coatings"
        ]
      },
      {
        id: "features",
        title: "Key Features",
        items: [
          "Long-lasting Performance",
          "Weather Resistant",
          "Easy Application",
          "Cost-Effective Solutions"
        ]
      },
      {
        id: "applications",
        title: "Applications",
        items: [
          "Residential Buildings",
          "Commercial Complexes",
          "Industrial Structures",
          "Infrastructure Projects"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {kavashContent.title}
              </span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            >
              {kavashContent.subtitle}
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {kavashContent.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                  Get Quote <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kavashContent.sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Display Section for WhatsApp Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed specifications and information about our Kavash product range
            </p>
          </motion.div>

          {/* Placeholder for actual image content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="bg-gray-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center"
            >
              <div className="text-center">
                <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kavash Product Image 1
                </h3>
                <p className="text-gray-600">
                  Content from WhatsApp Image 1 will be displayed here
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-gray-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center"
            >
              <div className="text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kavash Product Image 2
                </h3>
                <p className="text-gray-600">
                  Content from WhatsApp Image 2 will be displayed here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center text-white"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Get Started with Kavash?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
            >
              Contact us today for detailed product information, pricing, and expert consultation
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </Link>
              <a href="tel:+919876543210">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KavashPage;