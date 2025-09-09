import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Shield,
  Home,
  Hammer,
  Droplets,
  Award,
  Phone,
  Mail,
  CheckCircle2,
  Building2,
  Users,
  MapPin,
  Wrench,
  Layers,
  Square,
  Waves,
  HardHat,
  Palette,
  TrendingUp,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/utils/animations";

const KavashPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    document.title =
      "KAVASH - Protection for Footing to Finishing | OM Vinayaga Associates";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'KAVASH by Building Doctor offers complete building protection solutions – from footing to finishing. Waterproofing, crack solutions, tile fixing, wall protection and more.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'KAVASH by Building Doctor offers complete building protection solutions – from footing to finishing. Waterproofing, crack solutions, tile fixing, wall protection and more.';
      document.head.appendChild(meta);
    }
  }, []);

  // Accordion-style: only one section open at a time for better mobile UX
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Solutions by Area data with only Tamil content
  const solutionAreas = [
    {
      id: "wall",
      title: "FOR WALL AREAS",
      icon: <Shield className="w-6 h-6" />,
      products: [
        {
          name: "BD CRACK STOP (OR) BD CRACK STOP XP",
          tamil: "சுவரில் ஏற்படும் விரிசல்களை சரிசெய்ய பயன்படும்"
        },
        {
          name: "BD WALLSHIELD - EXTERIOR DECORATIVE COATING", 
          tamil: "வெளிப்புற அலங்கார பூச்சு கலவை"
        }
      ],
    },
    {
      id: "terrace",
      title: "FOR TERRACE AREAS", 
      icon: <Home className="w-6 h-6" />,
      products: [
        {
          name: "BD AQUA SEAL NANO",
          tamil: "காஞ்சிக்ரீட் கல்லங்கள், தரைகள் போன்ற இடங்களில் பயன்படும்"
        },
        {
          name: "SUNKEN SLAB மற்றும் சிறப்பு நீர் தேங்காமல் இருக்க",
          tamil: "BD AQUA SEAL 2K (OR) BD BUILDING ALL ROUNDER (OR) BD GARDEN GUARD"
        },
        {
          name: "BD AQUA SEAL 2K (OR) BD BUILDING ALL ROUNDER (OR) BD GARDEN GUARD",
          tamil: "சிறிய நீர் அடைப்புக்கள் மற்றும் நீர் தாங்கல் தருவதற்கு"
        }
      ],
    },
    {
      id: "concrete",
      title: "FOR CONCRETE AREAS", 
      icon: <HardHat className="w-6 h-6" />,
      products: [
        {
          name: "BD CONCRETE POWER",
          tamil: "சுரமீட் கலவையில் சேர்க்கும் சிமெந்து பவுடர்"
        },
        {
          name: "BD CORROSHIELD CR (OR) COATING BD CORROSHIELD BR",
          tamil: "RCC இரும்பு தண்டுகளின் அரிப்பு தடுக்க பயன்படும்"
        },
        {
          name: "BD CORROSHIELD ZR",
          tamil: "இரும்பு அரிப்பு தடுக்கும் பூச்சு கலவை"
        },
        {
          name: "BD CRACK STOP MESH",
          tamil: "மெஷ் வலையால் கிராக்குகள் தடுக்கும் தொழில்நுட்பம்"
        },
        {
          name: "BD SHUTTERING SEALER",
          tamil: "SHUTTERING SHEET - கட்டிட பணிகளில் பூச்சு முடிப்பு வேலைகளுக்கு"
        }
      ],
    },
    {
      id: "water-storage", 
      title: "FOR WATER STORAGE AREAS",
      icon: <Waves className="w-6 h-6" />,
      products: [
        {
          name: "BD AQUA SEAL TANK GUARD - EPOXY FOOD GRADE",
          tamil: "உணவு பாதுகாப்பான நீர் தொட்டிகளுக்கான எபாக்சி பூச்சு"
        },
        {
          name: "BD PROTECT COAT CT 600", 
          tamil: "SEPTIC TANK - கழிவு நீர் தொட்டிகளுக்கான பாதுகாப்பு பூச்சு"
        },
        {
          name: "BD AQUA SEAL 2K (OR) BD AQUA SEAL NANO & BD BUILDING ALL ROUNDER",
          tamil: "சிறு நீர் கசிவுகள் மற்றும் நீர் தாங்கல் தருவதற்கு"
        }
      ],
    },
    {
      id: "building-joints",
      title: "FOR BUILDING JOINTS AREAS",
      icon: <Layers className="w-6 h-6" />,
      products: [
        {
          name: "BD CONCRETE BOND",
          tamil: "பழைய மற்றும் புதிய கிராக்குகளுக்கு பயன்படும்"
        },
        {
          name: "BD NANGURAM ANCHOR FIX (OR) BD NANGURAM ANCHOR FIX POWER",
          tamil: "கற்கள் மற்றும் சுவர்களில் துளைகள் அடைக்க பயன்படும்"
        },
        {
          name: "BD SEAL TAPE EJ",
          tamil: "EXPANSION JOINT - விரிவடையும் இணைப்புகளுக்கு"
        },
        {
          name: "BD PLASTER BOND SBR (OR) BD BUILDING ALL ROUNDER",
          tamil: "பிளாஸ்டர் பணிகளில் ஒட்டுதல் மற்றும் வலுவூட்டல்"
        },
        {
          name: "BD SEAL TAPE SA",
          tamil: "ROOFING SHEET - மேற்கூரை தகடுகளின் இணைப்புகளுக்கு"
        }
      ],
    },
    {
      id: "basement",
      title: "FOR BASEMENT AREAS",
      icon: <Building2 className="w-6 h-6" />,
      products: [
        {
          name: "BD PROTECT COAT BW 500",
          tamil: "கீழ் மாடி ஈரப்பதம் மற்றும் கசிவு தடுக்க பயன்படும்"
        },
        {
          name: "BD TERMITE STOP X",
          tamil: "RISING DAMP - கீழிருந்து வரும் ஈரப்பதம் தடுக்க"
        },
        {
          name: "BD PROTECT COAT CT 600 B",
          tamil: "சுவர், தரை போன்ற இடங்களில் பாதுகாப்பு பூச்சு"
        }
      ],
    }
  ];

  // Quick stats data
  const stats = [
    { number: "50+", label: "Outlets" },
    { number: "100+", label: "Products" },
    { number: "200+", label: "Applicators" },
    { number: "10,000+", label: "Projects" },
    { number: "1,00,00,000+", label: "Sq.ft Protected" },
  ];

  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-primary"
        aria-labelledby="kavash-hero-title"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 right-10 opacity-10">
            <Shield className="w-64 h-64" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <Home className="w-48 h-48" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
            className="text-center text-white max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="text-6xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  KAVASH
                </span>
              </div>
              <h1 id="kavash-hero-title" className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6">
                Protection for Footing to Finishing
              </h1>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Special Scheme for New Buildings
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-yellow-200 font-medium">
                உங்கள் புதிய கட்டிடங்களை காலம் கடந்து காத்திடும் எங்களின்
                அதிநவீன சிகிச்சைகள்..!
              </p>
              <p className="text-lg md:text-xl text-blue-100">
                Protecting your new building for generations with our ultimate
                solutions!
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-lg text-xl font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-xl">
                  Get Offer <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section 
        className="py-16 bg-gradient-to-r from-gray-50 to-blue-50"
        aria-labelledby="kavash-stats-title"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-gray-800"
            >
              <h2 id="kavash-stats-title" className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                "Prevention is Better than Cure"
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Area Section */}
      <section 
        className="py-20 bg-white"
        aria-labelledby="solutions-title"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 id="solutions-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Protection Solutions by Area
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive building protection solutions for every area of your
              construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {solutionAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-100 hover:border-primary/30 transition-all shadow-lg hover:shadow-xl"
              >
                <button
                  onClick={() => toggleSection(area.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-t-xl transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-primary">
                    {expandedSection === area.id ? (
                      <ChevronDown className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedSection === area.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <ul className="space-y-4">
                            {area.products.map((product, productIndex) => (
                              <li
                                key={productIndex}
                                className="border-l-4 border-primary/30 pl-4 py-2"
                              >
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <div className="flex-1">
                                    <span className="text-gray-900 font-semibold block">
                                      {typeof product === 'string' ? product : product.name}
                                    </span>
                                    {typeof product === 'object' && product.tamil && (
                                      <span className="text-gray-600 text-sm mt-1 block leading-relaxed">
                                        {product.tamil}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Protect Your Dream Building with KAVASH
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl mb-10 opacity-90">
              From footing to finishing, we safeguard every corner of your
              building.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl">
                  <Mail className="w-6 h-6" />
                  Contact Us
                </button>
              </Link>
              <a href="tel:+917873732323">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3 transition-all transform hover:scale-105">
                  <Phone className="w-6 h-6" />
                  Get Free Consultation
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
              Visit Our Office
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">
                  OM Vinayaga Associates
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience KAVASH protection solutions at our office. Our
                experts are ready to help you choose the right protection system
                for your building.
              </p>
              <Link to="/contact">
                <button className="mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all">
                  Get Directions <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-8 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-white">
              <span className="text-yellow-400">Explore KAVASH</span> – A
              complete protection system for your building.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default KavashPage;