// Company Information
export const COMPANY_NAME = "OM Vinayaga Associates";
export const COMPANY_TITLE = "Building Doctor Franchise";
export const COMPANY_DESCRIPTION =
  "Your trusted partner for all building repair and maintenance needs in Madurai and surrounding areas.";

// Contact Information
export const CONTACT = {
  addresses: [
    "No.6, North Gate, Opp.Devaki Scan, Near Balaji Gas, S.S Colony, Madurai -625016",
    "Door No. 131, Shop No. 12, Kallazhagar Complex, Thallakulam Main Road, Madurai",
  ],
  address: "No.6, North Gate, Opp.Devaki Scan, Near Balaji Gas, S.S Colony, Madurai -625016", // Keeping for backward compatibility
  director: "Er.Ramesh Jeyaraman B.E",
  title: "Director",
  phone: ["+91 81 90 09 00 59", "+91 78 73 73 23 23"],
  email: "omvinayagaassociates@gmail.com",
  workingHours: "Monday to Saturday from 09.00 AM to 07.00 PM",
  website: "www.buildingdoctor.org",
  social: {
    facebook: "BuildingDoctor Madurai",
    twitter: "@BuildingDoctor3",
    instagram: "building__doctor",
    whatsapp: "https://wa.me/917873732323",
  },
};

// Directors Information
export const DIRECTORS = [
  {
    id: 1,
    name: "Dr. S.K. Kamaleeswari",
    title: "Director",
    credentials: "M.Sc, M.Phil.",
    description:
      "Passionate entrepreneur with extensive experience in developing and launching new business ventures. An accomplished educationist and motivational speaker with over 15 years of teaching experience across India and Saudi Arabia.",
    image: "dr_kamaleeswari.jpg",
    education: [
      "AVC College Mayiladuthurai (Gold Medalist) - UG",
      "J.J College - Micro Biology - PG",
      "Bharathidasan University - Trichy - M.Phil - Bio-technology",
    ],
    experience: [
      "Teaching field - Both India and Saudi Arabia (CBSE & ICSE) - 15+ Years",
      "President of MEWE (Madurai Empowered Women Entrepreneur) Forum",
      "Motivational Speaker and Business Consultant",
    ],
    awards: [
      "South India Women Achievers Awards (SIWAA)",
      "The Best Emerging Women Entrepreneur",
      "The Best Product Presentation Award",
      "The Best Business Posting Award",
      "Excellence in Building Restoration Water Proofing - Madurai City Iconic Award",
    ],
    phone: "9629929700",
    email: "skkamaleswari@gmail.com",
    specialties: [
      "Business Development",
      "Entrepreneurship",
      "Team Leadership",
      "Strategic Planning",
    ],
  },
  {
    id: 2,
    name: "Er. Ramesh Jeyaraman B.E",
    title: "Director",
    credentials: "B.E",
    description:
      "Engineering expert with extensive experience in building repair and waterproofing solutions. Leader of OM Vinayaga Associates since its inception with over 15 years of hands-on experience in the construction industry.",
    image: "jeyaram.jpg",
    education: [
      "Bachelor of Engineering",
      "Certified Building Doctor Franchise Owner",
      "Continuous training in latest industry innovations",
    ],
    experience: [
      "15+ years in construction and building repair industry",
      "Successfully led over 2000+ projects throughout Tamil Nadu",
      "Authorized Building Doctor Franchise Owner",
    ],
    awards: [
      "Construction Industry Development Council (CIDC) certified",
      "Excellence in Building Repair Solutions",
      "Outstanding Customer Service Award",
      "Best Franchise Performance Award",
    ],
    specialties: [
      "Waterproofing Solutions",
      "Structural Repairs",
      "Building Diagnostics",
      "Project Management",
    ],
  },
];

// Service Categories
export const SERVICES = [
  {
    id: 1,
    title: "Waterproofing Solutions",
    description:
      "Comprehensive waterproofing for terraces, bathrooms, basements, and external walls to prevent leakage and seepage issues.",
    image:
      "https://images.unsplash.com/photo-1584463623578-44c958d8a8c0?q=80&w=600&auto=format&fit=crop",
    features: [
      "Terrace waterproofing",
      "Bathroom waterproofing",
      "External wall treatments",
    ],
    slug: "waterproofing",
  },
  {
    id: 2,
    title: "Structural Repairs",
    description:
      "Expert repair solutions for concrete structures, including crack repairs, reinforcement protection, and structural strengthening.",
    image:
      "https://images.unsplash.com/photo-1541976498898-289b7b5c978c?q=80&w=600&auto=format&fit=crop",
    features: [
      "Concrete crack repairs",
      "Reinforcement protection",
      "Structural strengthening",
    ],
    slug: "structural-repairs",
  },
  {
    id: 3,
    title: "Sealants & Adhesives",
    description:
      "High-performance sealants and adhesives for various construction needs, including joint sealing and bonding applications.",
    image:
      "https://images.unsplash.com/photo-1582210384932-520604081492?q=80&w=600&auto=format&fit=crop",
    features: [
      "Joint sealing solutions",
      "Bonding applications",
      "Polyurethane & silicone sealants",
    ],
    slug: "sealants",
  },
  {
    id: 4,
    title: "Waterproof Coatings",
    description:
      "Specialized coatings for internal and external surfaces to protect against water damage, dampness, and weather deterioration.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    features: [
      "Acrylic waterproof coatings",
      "Elastomeric membranes",
      "Weather-resistant finishes",
    ],
    slug: "coatings",
  },
  {
    id: 5,
    title: "Construction Chemicals",
    description:
      "Quality construction chemicals including additives, primers, bonding agents, and concrete admixtures for improved durability.",
    image:
      "https://images.unsplash.com/photo-1553786803-86dcd7070c84?q=80&w=600&auto=format&fit=crop",
    features: [
      "Concrete admixtures",
      "Bonding agents & primers",
      "Specialized additives",
    ],
    slug: "chemicals",
  },
  {
    id: 6,
    title: "Technical Consultation",
    description:
      "Expert advice and technical guidance for building-related problems, including site inspections and customized solutions.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=600&auto=format&fit=crop",
    features: [
      "Building condition assessments",
      "Solution recommendation",
      "Preventive maintenance plans",
    ],
    slug: "consultation",
  },
];

// Products Categories - Only categories that have products
export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "bonding-agents", name: "Bonding Agents" },
  { id: "crack-filling", name: "Crack Filling" },
  { id: "grouts-anchors", name: "Grouts & Anchors" },
  { id: "sealants", name: "Sealants" },
  { id: "special-products", name: "Special Products" },
  { id: "tapes", name: "Tapes" },
  { id: "thermal-insulation", name: "Thermal Insulation" },
  { id: "tiling-aids", name: "Tiling Aids" },
  { id: "waterproofing", name: "Waterproofing" },
];

// Real verified Building Doctor products with unique sequential IDs
export const FEATURED_PRODUCTS = [
  // Crack Filling Products
  {
    id: 1,
    name: "BD CRACKSTOP",
    description: "Polymer Modified Crack Filler For Plastered Surface",
    price: 108,
    image: "https://api-catalog.owncart.shop/uploads/images/ULBA-0z0gR-crackstop.png",
    rating: 4.6,
    isBestseller: true,
    category: "crack-filling",
  },
  {
    id: 2,
    name: "BD CRACKSTOP X",
    description: "Two Component Cement based polymer modified Crack filler",
    price: 350,
    image: "https://api-catalog.owncart.shop/uploads/images/TqkyRNGazA-crackstop%20x.png",
    rating: 4.8,
    isBestseller: true,
    category: "crack-filling",
  },
  {
    id: 3,
    name: "BD CRACKSTOP XP",
    description: "Ready to use crack filler for Internal & External Surface Cracks In Plaster",
    price: 460,
    image: "https://api-catalog.owncart.shop/uploads/images/SQx0nBnkTn-crackstop%20xp.png",
    rating: 4.9,
    isNew: true,
    category: "crack-filling",
  },
  {
    id: 4,
    name: "BD CRACKSTOP FIBRE",
    description: "Fibre Reinforcement for Concrete and Mortar",
    price: 110,
    image: "https://api-catalog.owncart.shop/uploads/images/3fgFCzVgWX-crackstop%20fibre.png",
    rating: 4.5,
    category: "crack-filling",
  },
  {
    id: 5,
    name: "BD CRACKSTOP MESH",
    description: "Glass fibre mesh for construction joints",
    price: 480,
    image: "https://api-catalog.owncart.shop/uploads/images/GHTsw1d7l1-crackstop%20mesh.png",
    rating: 4.7,
    category: "crack-filling",
  },

  // Grouts & Anchors
  {
    id: 6,
    name: "BD INSTANT STOP",
    description: "Fast setting plugging compound",
    price: 165,
    image: "https://api-catalog.owncart.shop/uploads/images/H3GLOXLHnb-INSTANT%20STOP.png",
    rating: 4.7,
    category: "grouts-anchors",
  },
  {
    id: 7,
    name: "BD Nanguram Anchor Fix",
    description: "Two components, high strength, fast cure, polyester resin anchoring grout",
    price: 700,
    image: "https://api-catalog.owncart.shop/uploads/images/Bq5FKgu299-NUNGURAM%20ANCHORFIX.png",
    rating: 4.8,
    isNew: true,
    category: "grouts-anchors",
  },

  // Thermal Insulation
  {
    id: 8,
    name: "BD Termoshield Coat",
    description: "Ready to use thermal insulation and waterproofing coating",
    price: 3340,
    image: "https://api-catalog.owncart.shop/uploads/images/xUUJUUuOEr-Thermo%20Sheild%20Coat.png",
    rating: 4.9,
    isNew: true,
    category: "thermal-insulation",
  },

  // Tapes
  {
    id: 9,
    name: "BD Sealtape SA",
    description: "Self-adhesive waterproofing and sealing tape made of special polymer",
    price: 510,
    image: "https://api-catalog.owncart.shop/uploads/images/JadX8gi2-a-SEAL%20TAPE%20SA.png",
    rating: 4.6,
    category: "tapes",
  },

  // Bonding Agents
  {
    id: 10,
    name: "BD Concrete Bond",
    description: "Two part solvent free epoxy bonding agent for concrete",
    price: 1258,
    image: "https://api-catalog.owncart.shop/uploads/images/DyQRa8nuqu-CONCRETE%20BOND.png",
    rating: 4.7,
    category: "bonding-agents",
  },
  {
    id: 11,
    name: "BD PLASTER BOND BOOSTER",
    description: "Styrene butadiene rubber latex bonding agent for cement mixes",
    price: 435,
    image: "https://api-catalog.owncart.shop/uploads/images/sQTYHG9VdB-PLASTERBOND%20SBR.png",
    rating: 4.6,
    category: "bonding-agents",
  },

  // Tiling Aids
  {
    id: 12,
    name: "BD TILEJOINT SEALER PLUS",
    description: "Three component, waterproof epoxy tile joint filler",
    price: 1386,
    image: "https://api-catalog.owncart.shop/uploads/images/7NG3j6WZ6x-tile%20joint%20Sealer%20PLUS.png",
    rating: 4.7,
    isBestseller: true,
    category: "tiling-aids",
  },
  {
    id: 13,
    name: "BD TILEJOINT SEALER",
    description: "Durable, cement-based tile joint filler",
    price: 103,
    image: "https://api-catalog.owncart.shop/uploads/images/TbsyvK-SGw-tile%20joint%20Sealer.png",
    rating: 4.5,
    category: "tiling-aids",
  },
  {
    id: 14,
    name: "BD Tile Clean Master",
    description: "Heavy duty acid-based cleaner for ceramic tiles and walls",
    price: 397,
    image: "https://api-catalog.owncart.shop/uploads/images/kcNccGXKvG-CLEANER.jpg",
    rating: 4.6,
    category: "tiling-aids",
  },

  // Special Products
  {
    id: 15,
    name: "BD Paint Remover 500",
    description: "Solvent-based, non evaporative, instant paint remover",
    price: 251,
    image: "https://api-catalog.owncart.shop/uploads/images/woK3K_PsUn-paint%20remover.jpg",
    rating: 4.4,
    category: "special-products",
  },

  // Sealants
  {
    id: 16,
    name: "BD Seal PU",
    description: "One-part moisture curing Polyurethane Sealant",
    price: 787,
    image: "https://api-catalog.owncart.shop/uploads/images/ORuBOVRTxC-SEAL%20PU.png",
    rating: 4.7,
    category: "sealants",
  },
  {
    id: 17,
    name: "BD Seal AC",
    description: "One-part general purpose acrylic sealant for internal and external use",
    price: 235,
    image: "https://api-catalog.owncart.shop/uploads/images/Vk4Ozj-5er-SEAL%20AC.png",
    rating: 4.6,
    category: "sealants",
  },

  // Waterproofing
  {
    id: 18,
    name: "BD DAMPSTOP XW",
    description: "Rising Damp Proofing solution for wet walls",
    price: 680,
    image: "https://api-catalog.owncart.shop/uploads/images/Y6BQj_tjwU-BD%20DAMPSTOP%20XW.png",
    rating: 4.7,
    category: "waterproofing",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mr. Kiran",
    location: "Professor, Madambakkam",
    rating: 5,
    content:
      "My 25-year-old house had multiple structural issues - water seepage through the roof, dampness in the walls, and cracks falling from the ceiling. Building Doctor's comprehensive solutions completely transformed my home. Their expert team identified the root causes and provided lasting repairs that have eliminated all these problems.",
    hasVideo: true,
    videoUrl: "https://youtu.be/0UHX04UvguE?si=Yi6LhNQP4-tG6AwW",
  },
  {
    id: 2,
    name: "Mr. Krishna Moorthy",
    location: "Senior Executive, Indian Overseas Bank, KK Nagar",
    rating: 5,
    content:
      "As a banking professional, I understand the importance of reliable solutions. When wall deterioration issues threatened my property's structural integrity, Building Doctor provided expert analysis and effective remediation. Their systematic approach and quality materials restored my walls to perfect condition, giving me complete peace of mind.",
    hasVideo: true,
    videoUrl: "https://youtu.be/iRz9kVHwsqE?si=KBZPvFg3l-8dOcPk",
  },
  {
    id: 3,
    name: "Mrs. Flora Nalini",
    location: "Ramalinga Nagar, Trichy",
    rating: 5,
    content:
      "We had persistent water leakage issues that were causing significant damage to our home. Multiple contractors suggested expensive solutions that didn't work. Building Doctor's innovative approach using their specialized products completely solved our leakage problems. The results have been outstanding and long-lasting.",
    hasVideo: true,
    videoUrl: "https://youtu.be/9uVRbT57P80?si=iO1HNy3TrAKKpAqi",
  },
  {
    id: 4,
    name: "Mr. Madanagopal",
    location: "Chrompet",
    rating: 5,
    content:
      "When water leakage damaged our property, everyone told us to demolish and rebuild the affected walls. Building Doctor provided an innovative solution that fixed the problem without any demolition. Their expertise saved us significant time, money, and hassle while delivering superior results.",
    hasVideo: true,
    videoUrl: "https://youtu.be/AOzIal0FnkM?si=CxfdhSpMYcQxF3Va",
  },
  {
    id: 5,
    name: "Mr. Jagadeesh",
    location: "Plumbing & Electricals",
    rating: 5,
    content:
      "As a professional in the plumbing and electrical field, I've seen many waterproofing solutions fail over time. Building Doctor's products and application techniques are exceptional. Their systematic approach to addressing structural issues has impressed me greatly, and I now recommend their services to all my clients.",
    hasVideo: true,
    videoUrl: "https://youtu.be/mw1FsYqYcUI?si=7HwRvdPUeKkPBHKH",
  },
];

// FAQ Questions
export const FAQS = [
  {
    id: 1,
    question: "What causes building cracks?",
    answer:
      "Building cracks can occur due to various reasons such as foundation settlement, temperature changes, moisture, and structural issues. These factors can lead to stress on the building materials, resulting in cracks forming over time. Regular maintenance and addressing underlying issues promptly can help prevent and mitigate the impact of cracks on buildings.",
  },
  {
    id: 2,
    question: "What are the common reasons for roof leakages?",
    answer:
      "Common reasons for roof leakages include cracks in the terrace surface, damaged or improperly installed waterproofing membranes, gaps or deterioration around edges and joints, and insufficient drainage leading to water pooling. These issues can be effectively addressed with proper waterproofing solutions and regular maintenance.",
  },
  {
    id: 3,
    question: "How often should waterproofing be done?",
    answer:
      "The frequency of waterproofing depends on factors like the quality of the previous application, climate conditions, and building usage. Generally, a good quality waterproofing treatment should last 5-7 years. However, it's recommended to have annual inspections to identify and address any issues before they become serious problems.",
  },
  {
    id: 4,
    question: "How do you prevent dampness in walls?",
    answer:
      "Preventing dampness in walls involves identifying and addressing the source of moisture, applying appropriate waterproof coatings or treatments, ensuring proper ventilation, fixing plumbing leaks promptly, and maintaining exterior surfaces. Our specialized damp-proofing solutions create effective barriers against moisture penetration.",
  },
  {
    id: 5,
    question: "Can you waterproof an old building?",
    answer:
      "Yes, old buildings can be effectively waterproofed with the right approach. This typically involves thorough assessment of the structure, repair of existing damage, appropriate surface preparation, and application of suitable waterproofing systems. Our experts specialize in providing customized waterproofing solutions for buildings of all ages.",
  },
  {
    id: 6,
    question: "What is the warranty for your services?",
    answer:
      "We provide warranties ranging from 2-7 years for our services, depending on the type of treatment and application. Our waterproofing solutions typically come with a 5-year warranty, while structural repairs and other services have varying warranty periods. All warranties include periodic inspections and necessary maintenance services.",
  },
];

// Before-After Showcases
export const BEFORE_AFTER = [
  {
    id: 1,
    title: "Terrace Waterproofing",
    description:
      "Eliminated persistent leakage issues in a 10-year-old residential building using our advanced waterproofing system.",
    beforeImage:
      "https://images.unsplash.com/photo-1569847205387-ec7215f54da1?q=80&w=800&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1590902657701-a8bc6a873740?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Wall Crack Repair",
    description:
      "Permanently fixed structural cracks in walls using our specialized crack-filling compounds and strengthening treatments.",
    beforeImage:
      "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=800&auto=format&fit=crop",
  },
];

// Company Stats
export const STATS = [
  { id: 1, value: "2000+", label: "Projects Completed" },
  { id: 2, value: "1950+", label: "Happy Customers" },
  { id: 3, value: "100+", label: "Products" },
  { id: 4, value: "75+", label: "Services" },
];

// Benefits
export const BENEFITS = [
  {
    id: 1,
    title: "Certified Expertise",
    description:
      "ISO 9001:2000 certified company with trained professionals and specialized equipment for all building repair services.",
    icon: "certificate",
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Premium quality products and application methods with guaranteed solutions and post-service support.",
    icon: "shield-alt",
  },
  {
    id: 3,
    title: "Comprehensive Solutions",
    description:
      "One-stop solution for all building repair needs with customized approaches for each unique problem.",
    icon: "tools",
  },
];