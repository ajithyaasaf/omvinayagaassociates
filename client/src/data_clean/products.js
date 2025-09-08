export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "waterproofing", name: "Waterproofing" },
  { id: "admixtures", name: "Admixtures" },
  { id: "bonding-agents", name: "Bonding Agents" },
  { id: "crack-filling", name: "Crack Filling" },
  { id: "sealants", name: "Sealants" },
  { id: "tile-aids", name: "Tile Aids" },
  { id: "corrosion-treatments", name: "Corrosion Treatments" },
  { id: "thermal-insulations", name: "Thermal Insulations" }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "BD WaterSeal Pro",
    description: "Premium acrylic waterproofing coating for terraces and external walls. Provides excellent protection against water leakage and has UV resistance for long-lasting performance.",
    price: 1250,
    image: "https://buildingdoctor.org/assets/products/waterseal-pro.jpg",
    rating: 4.8,
    isBestseller: true,
    isNew: false,
    category: "waterproofing"
  },
  {
    id: 2,
    name: "BD CrackFix Ultimate",
    description: "High-performance crack filling compound for structural and non-structural cracks. Bonds strongly with concrete and provides flexible, waterproof repair.",
    price: 850,
    image: "https://buildingdoctor.org/assets/products/crackfix-ultimate.jpg",
    rating: 4.7,
    isBestseller: true,
    isNew: false,
    category: "crack-filling"
  },
  {
    id: 3,
    name: "BD BathSeal Total",
    description: "Specialized waterproofing system for bathrooms and wet areas. Prevents leakage and provides protection against fungal growth.",
    price: 1450,
    image: "https://buildingdoctor.org/assets/products/bathseal-total.jpg",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "waterproofing"
  },
  {
    id: 4,
    name: "BD Concrete Bond",
    description: "High-strength bonding agent for joining new concrete with old concrete. Ensures excellent adhesion and durability in construction joints.",
    price: 950,
    image: "https://buildingdoctor.org/assets/products/concrete-bond.jpg",
    rating: 4.6,
    isBestseller: false,
    isNew: false,
    category: "bonding-agents"
  },
  {
    id: 5,
    name: "BD SuperPlast",
    description: "Advanced concrete plasticizer that improves workability without adding extra water. Increases strength and durability of concrete.",
    price: 1100,
    image: "https://buildingdoctor.org/assets/products/superplast.jpg",
    rating: 4.7,
    isBestseller: false,
    isNew: false,
    category: "admixtures"
  },
  {
    id: 6,
    name: "BD TileBond Flex",
    description: "Flexible tile adhesive for interior and exterior applications. Provides excellent bonding strength for ceramic, vitrified, and natural stone tiles.",
    price: 750,
    image: "https://buildingdoctor.org/assets/products/tilebond-flex.jpg",
    rating: 4.5,
    isBestseller: false,
    isNew: false,
    category: "tile-aids"
  },
  {
    id: 7,
    name: "BD RustGuard",
    description: "Specialized treatment for preventing and treating reinforcement corrosion in concrete structures. Extends the life of buildings by protecting steel reinforcement.",
    price: 1350,
    image: "https://buildingdoctor.org/assets/products/rustguard.jpg",
    rating: 4.8,
    isBestseller: false,
    isNew: true,
    category: "corrosion-treatments"
  },
  {
    id: 8,
    name: "BD ThermoCoat",
    description: "Heat-reflective thermal insulation coating for roofs and walls. Reduces indoor temperature by up to 5-7°C and provides energy savings.",
    price: 1650,
    image: "https://buildingdoctor.org/assets/products/thermocoat.jpg",
    rating: 4.9,
    isBestseller: true,
    isNew: false,
    category: "thermal-insulations"
  },
  {
    id: 9,
    name: "BD PolyFlex Sealant",
    description: "High-performance polyurethane-based sealant for joints and gaps. Provides excellent flexibility and adhesion to various construction materials.",
    price: 890,
    image: "https://buildingdoctor.org/assets/products/polyflex-sealant.jpg",
    rating: 4.6,
    isBestseller: false,
    isNew: false,
    category: "sealants"
  },
  {
    id: 10,
    name: "BD CrystalProof",
    description: "Crystalline waterproofing system that penetrates concrete to form crystals in pores and capillaries. Provides permanent waterproofing solution.",
    price: 1450,
    image: "https://buildingdoctor.org/assets/products/crystalproof.jpg",
    rating: 4.8,
    isBestseller: false,
    isNew: true,
    category: "waterproofing"
  },
  {
    id: 11,
    name: "BD TileGrout Premium",
    description: "Water-resistant, non-shrink tile grout with anti-fungal properties. Available in multiple colors for beautiful tile joints.",
    price: 680,
    image: "https://buildingdoctor.org/assets/products/tilegrout-premium.jpg",
    rating: 4.5,
    isBestseller: false,
    isNew: false,
    category: "tile-aids"
  },
  {
    id: 12,
    name: "BD QuickSet Admix",
    description: "Rapid-setting concrete admixture for urgent repair works. Reduces setting time while maintaining workability.",
    price: 950,
    image: "https://buildingdoctor.org/assets/products/quickset-admix.jpg",
    rating: 4.7,
    isBestseller: false,
    isNew: false,
    category: "admixtures"
  },
  {
    id: 13,
    name: "BD ElastoBridge",
    description: "Elastomeric crack bridging coating for terraces and walls. Accommodates movement in the structure while providing waterproofing.",
    price: 1350,
    image: "https://buildingdoctor.org/assets/products/elastobridge.jpg",
    rating: 4.8,
    isBestseller: true,
    isNew: false,
    category: "waterproofing"
  },
  {
    id: 14,
    name: "BD MultiSeal Tape",
    description: "Self-adhesive waterproofing tape for joints, corners, and pipe penetrations. Provides instant sealing in critical areas.",
    price: 550,
    image: "https://buildingdoctor.org/assets/products/multiseal-tape.jpg",
    rating: 4.6,
    isBestseller: false,
    isNew: false,
    category: "waterproofing"
  },
  {
    id: 15,
    name: "BD EpoxyBond Strong",
    description: "High-strength epoxy-based structural adhesive for bonding concrete, metal, stone, and wood. Provides exceptional strength and durability.",
    price: 1250,
    image: "https://buildingdoctor.org/assets/products/epoxybond-strong.jpg",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "bonding-agents"
  },
  {
    id: 16,
    name: "BD DAMP STOP XW",
    description: "Rising Damp Proofing solution specially designed for wet walls. Low viscosity, highly penetrating silane solution that permanently stops rising dampness in masonry walls.",
    price: 680,
    image: "@assets/image_1757336208385.png",
    rating: 4.7,
    isBestseller: false,
    isNew: true,
    category: "waterproofing",
    features: [
      "Low viscosity allowing for high penetration",
      "Non staining",
      "Reduces water and chloride intrusion",
      "Increases freeze thaw resistance",
      "Minimizes efflorescence",
      "Penetrates deeply into wet brick masonry walls"
    ],
    applicationAreas: [
      "Rising Damped brick work Area at Wet condition Brick also",
      "RISING DAMPNESS இருக்கக்கூடிய செங்கல் சுவர்கள்",
      "Wet brick masonry walls",
      "Ground floor and basement walls"
    ],
    applicationMethod: [
      "Remove skirting or floor board and plaster till the 1st and 2nd layer of brick exposes",
      "Drifting method may vary little depending upon type of brick", 
      "12 mm or 14 mm holes are to be drilled at 1st and 2nd brick at 45° angle to center of the wall",
      "Insert the tube in drilled hole and Drip tubes are inserted in the holes of brick previously made",
      "Inject by Pressure Grouting on the holes till the 2 layer of brick is fully saturated with BD DAMP STOP XW",
      "Product will over flow from the mouth of drilled whole, once the 1st and 2nd layer of brick is fully saturated",
      "Pressure Grouting injection is continued till brick get saturated with BD DAMP STOP XW liquid and wall is allowed to dry",
      "Plug the hole with cement mortar",
      "Re-plaster the mortar containing BD BUILDING ALL ROUNDER Modify mortar"
    ],
    tamilApplicationMethod: [
      "Rising Dampness உள்ள சுவற்றில் தரையிலிருந்து 4 Inch – க்கு ஒரு அடிக்கு ஒரு அடி துளையிடவேண்டும்",
      "4 Inch லிருந்து 6 Inch –க்கு ஒரு அடிக்கு ஒரு அடி துளையிடவேண்டும். 9 Inch துளைகளுக்கு இடையில் 4 Inch துளைகள் வரவேண்டும்",
      "6 Inch துளைகளை 45° க்கும் 12 mm Bit Rod – யை பயன்படுத்தி 3 Inch -க்கு துளையிட வேண்டும்",
      "10 mm Dia கொண்ட HDP Nozzle -லை 9 Inch துளைகளில் BD Instant Stop – பை கொண்டு பொறுத்த வேண்டும்",
      "BD Damp Stop X W– யை நேரடியாக Pressure Grouting Machine – யை பயன்படுத்தி Injection முறையில் செலுத்த வேண்டும்",
      "24 மணிநேரம் கழித்து Nozzles எடுத்து விடுவேண்டும்",
      "Nozzles வைத்த துளைகளை சிமெண்ட் மற்றும் BD Building All Rounder கலந்து அடைக்கவேண்டும்"
    ],
    applicationTools: ["Pressure Grouting Machine", "Bucket", "Measuring Jar"],
    specifications: {
      "Self Life": "12 Month",
      "Pot Life": "4 to 5 Hours", 
      "Analysis": "No Dilution with water",
      "Available Package": "5 kg, 20 Lit",
      "Coverage": "Depend upon the penetration and porosity"
    },
    benefits: [
      "Permanently stops rising dampness",
      "Works effectively on wet walls", 
      "Deep penetration into masonry",
      "Non-staining application",
      "Increases structural durability",
      "Prevents efflorescence formation"
    ],
    tamilBenefits: [
      "இவை சுவர்களில் ஏற்படக்கூடிய RISING DAMPNESS - யை தடுக்கக்கூடிய பிரத்யேக பொருளாகும்",
      "ஈரமான சுவர்களில் பயன்படுத்தலாம்"
    ],
    hasVideo: true,
    videoId: "rUNM-IWmhxA",
    autoPlayVideo: true
  }
];

// Featured products for homepage
export const FEATURED_PRODUCTS = PRODUCTS.filter(product => product.isBestseller || product.isNew).slice(0, 6);