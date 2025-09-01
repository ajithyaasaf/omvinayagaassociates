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

// Products Categories
export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "admixtures", name: "Admixtures" },
  { id: "bonding-agents", name: "Bonding Agents" },
  { id: "corrosion-treatments", name: "Corrosion Treatments" },
  { id: "crack-filling", name: "Crack Filling" },
  { id: "grouts-anchors", name: "Grouts & Anchors" },
  { id: "sealants", name: "Sealants" },
  { id: "special-products", name: "Special Products" },
  { id: "tapes", name: "Tapes" },
  { id: "thermal-insulation", name: "Thermal Insulation" },
  { id: "tiling-aids", name: "Tiling Aids" },
  { id: "waterproofing", name: "Waterproofing" },
];

// Featured Products based on the Building Doctor website
export const FEATURED_PRODUCTS = [
  // Crack Filling Products
  {
    id: 3,
    name: "Crack Stop XP",
    description:
      "Premium crack filling solution with advanced polymer technology for structural cracks and movement joints.",
    price: 460,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/gaIIbPM5-D-crackstop%20xp.webp",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "crack-filling",
  },
  {
    id: 4,
    name: "Crack Stop Plus",
    description:
      "Advanced crack filling compound for hairline to moderate cracks with excellent adhesion and flexibility.",
    price: 380,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/gaIIbPM5-D-crackstop%20xp.webp",
    rating: 4.7,
    isBestseller: true,
    category: "crack-filling",
  },
  
  // Waterproofing Products
  {
    id: 7,
    name: "Instant Stop",
    description:
      "Rapid-setting waterproof plug for active water leaks and seepages, hardening in minutes.",
    price: 165,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/HJnjDJZPJ7-instastop.webp",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 13,
    name: "Aqua Shield Pro",
    description:
      "Premium liquid waterproofing membrane for terraces, bathrooms, and external walls. Long-lasting protection.",
    price: 1250,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/HJnjDJZPJ7-instastop.webp",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
  },
  {
    id: 14,
    name: "Leak Seal Ultra",
    description:
      "High-performance waterproof sealant for joints, gaps, and penetrations. Weather-resistant formula.",
    price: 890,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/HJnjDJZPJ7-instastop.webp",
    rating: 4.6,
    category: "waterproofing",
  },
  {
    id: 15,
    name: "Hydro Block",
    description:
      "Crystalline waterproofing admixture that becomes integral part of concrete structure.",
    price: 2100,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/HJnjDJZPJ7-instastop.webp",
    rating: 4.9,
    isNew: true,
    category: "waterproofing",
  },
  
  // Grouts & Anchors
  {
    id: 12,
    name: "Nanguram Anchor Fix",
    description:
      "Professional-grade chemical anchoring system for heavy-duty fixings in concrete and masonry. High load capacity and rapid setting.",
    price: 700,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/7BJUO_YDt--nanguram%20anchorfix.webp",
    rating: 4.8,
    isBestseller: false,
    isNew: true,
    category: "grouts-anchors",
  },
  {
    id: 16,
    name: "Micro Grout HF",
    description:
      "High-flow micro grout for precision grouting applications. Excellent workability and strength development.",
    price: 850,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/7BJUO_YDt--nanguram%20anchorfix.webp",
    rating: 4.7,
    category: "grouts-anchors",
  },
  {
    id: 17,
    name: "Epoxy Anchor Kit",
    description:
      "Complete epoxy anchoring system for structural connections and heavy-duty fixings.",
    price: 1200,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/7BJUO_YDt--nanguram%20anchorfix.webp",
    rating: 4.9,
    isBestseller: true,
    category: "grouts-anchors",
  },
  
  // Tapes
  {
    id: 9,
    name: "Seal Tape SA",
    description:
      "Self-adhesive sealing tape for joints, edges, and connections in waterproofing applications. High flexibility and durability.",
    price: 510,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/RV2zw1fIn4-seal%20tape%20sa.webp",
    rating: 4.6,
    isBestseller: false,
    category: "tapes",
  },
  {
    id: 18,
    name: "Joint Seal Tape",
    description:
      "Weather-resistant joint sealing tape for expansion joints and construction joints.",
    price: 320,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/RV2zw1fIn4-seal%20tape%20sa.webp",
    rating: 4.5,
    category: "tapes",
  },
  {
    id: 19,
    name: "Butyl Flash Tape",
    description:
      "High-performance butyl rubber flashing tape for waterproofing and air sealing applications.",
    price: 450,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/RV2zw1fIn4-seal%20tape%20sa.webp",
    rating: 4.7,
    category: "tapes",
  },
  
  // Thermal Insulation
  {
    id: 8,
    name: "Thermoshield Coat",
    description:
      "Advanced thermal insulation coating that reduces indoor temperature by reflecting solar radiation. Energy-efficient solution for roofs and exterior walls.",
    price: 3340,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/zEKKw5xPht-thermoshield-coat.webp",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "thermal-insulation",
  },
  {
    id: 20,
    name: "Heat Block Pro",
    description:
      "Professional-grade heat reflective coating for industrial and residential applications.",
    price: 2890,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/zEKKw5xPht-thermoshield-coat.webp",
    rating: 4.8,
    category: "thermal-insulation",
  },
  {
    id: 21,
    name: "Insul Board",
    description:
      "Rigid insulation boards for walls and roofs with excellent thermal resistance properties.",
    price: 1560,
    image:
      "https://buildingdoctor.owncart.shop/uploads/images/zEKKw5xPht-thermoshield-coat.webp",
    rating: 4.6,
    category: "thermal-insulation",
  },
  
  // Admixtures
  {
    id: 22,
    name: "Concrete Plus",
    description:
      "High-performance concrete admixture for enhanced strength, durability, and workability.",
    price: 280,
    rating: 4.7,
    isBestseller: true,
    category: "admixtures",
  },
  {
    id: 23,
    name: "Plasticizer Pro",
    description:
      "Water-reducing admixture that improves concrete workability and reduces water content.",
    price: 195,
    rating: 4.6,
    category: "admixtures",
  },
  {
    id: 24,
    name: "Set Controller",
    description:
      "Retarding admixture for controlling concrete setting time in hot weather conditions.",
    price: 315,
    rating: 4.5,
    category: "admixtures",
  },
  {
    id: 25,
    name: "Air Guard",
    description:
      "Air-entraining admixture for freeze-thaw protection and improved concrete durability.",
    price: 225,
    rating: 4.8,
    isNew: true,
    category: "admixtures",
  },
  
  // Bonding Agents
  {
    id: 26,
    name: "Bond Master SBR",
    description:
      "Styrene Butadiene Rubber bonding agent for excellent adhesion between old and new concrete.",
    price: 420,
    rating: 4.8,
    isBestseller: true,
    category: "bonding-agents",
  },
  {
    id: 27,
    name: "Epoxy Bond",
    description:
      "Two-component epoxy bonding agent for structural repairs and bonding applications.",
    price: 780,
    rating: 4.9,
    category: "bonding-agents",
  },
  {
    id: 28,
    name: "Acrylic Bond",
    description:
      "Multi-purpose acrylic bonding agent for plaster, render, and tile adhesive applications.",
    price: 290,
    rating: 4.6,
    category: "bonding-agents",
  },
  
  // Corrosion Treatments
  {
    id: 29,
    name: "Rebar Guard",
    description:
      "Corrosion inhibiting primer for steel reinforcement protection in concrete structures.",
    price: 650,
    rating: 4.8,
    isBestseller: true,
    category: "corrosion-treatments",
  },
  {
    id: 30,
    name: "Rust Converter Pro",
    description:
      "Advanced rust converter that transforms rust into a protective coating for steel surfaces.",
    price: 485,
    rating: 4.7,
    category: "corrosion-treatments",
  },
  {
    id: 31,
    name: "Anti-Corr Shield",
    description:
      "Long-term corrosion protection coating for exposed steel and metal surfaces.",
    price: 890,
    rating: 4.9,
    isNew: true,
    category: "corrosion-treatments",
  },
  
  // Sealants
  {
    id: 32,
    name: "Poly Seal MS",
    description:
      "Modified silicone sealant with excellent adhesion and weather resistance for construction joints.",
    price: 340,
    rating: 4.7,
    isBestseller: true,
    category: "sealants",
  },
  {
    id: 33,
    name: "Structural Glaze",
    description:
      "High-strength structural glazing sealant for curtain wall and facade applications.",
    price: 580,
    rating: 4.8,
    category: "sealants",
  },
  {
    id: 34,
    name: "Weather Seal Ultra",
    description:
      "Premium weatherproofing sealant with 25-year durability guarantee for exterior applications.",
    price: 720,
    rating: 4.9,
    isNew: true,
    category: "sealants",
  },
  {
    id: 35,
    name: "Joint Flex",
    description:
      "Flexible polyurethane sealant for moving joints and connections with high movement capability.",
    price: 395,
    rating: 4.6,
    category: "sealants",
  },
  
  // Special Products
  {
    id: 36,
    name: "Fungicide Treatment",
    description:
      "Anti-fungal treatment for walls and surfaces affected by mold and fungal growth.",
    price: 520,
    rating: 4.7,
    category: "special-products",
  },
  {
    id: 37,
    name: "Salt Attack Guard",
    description:
      "Specialized treatment for concrete structures affected by salt attack and efflorescence.",
    price: 680,
    rating: 4.8,
    category: "special-products",
  },
  {
    id: 38,
    name: "Carbon Fiber Wrap",
    description:
      "High-strength carbon fiber reinforcement system for structural strengthening applications.",
    price: 2500,
    rating: 4.9,
    isBestseller: true,
    category: "special-products",
  },
  
  // Tiling Aids
  {
    id: 39,
    name: "Tile Adhesive Plus",
    description:
      "Premium tile adhesive with enhanced bonding strength for wall and floor tile applications.",
    price: 380,
    rating: 4.6,
    isBestseller: true,
    category: "tiling-aids",
  },
  {
    id: 40,
    name: "Grout Shield",
    description:
      "Water-resistant tile grout with anti-microbial properties and color consistency.",
    price: 240,
    rating: 4.7,
    category: "tiling-aids",
  },
  {
    id: 41,
    name: "Tile Spacer System",
    description:
      "Professional tile spacing system for perfect tile alignment and consistent joint spacing.",
    price: 150,
    rating: 4.5,
    category: "tiling-aids",
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
