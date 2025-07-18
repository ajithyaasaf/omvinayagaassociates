import { useState, useEffect } from "react";
import { Link } from "wouter";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Loader2,
  Phone,
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// Real Building Doctor Products based on website data
export const PRODUCTS = [
  // Crack Filling Category
  {
    id: 1,
    name: "BD CRACKSTOP",
    description:
      "Polymer Modified Crack Filler For Plastered Surface",
    subtitle: "Cement based polymer modified powder material for filling cracks",
    price: 108,
    image:
      "https://api-catalog.owncart.shop/uploads/images/ULBA-0z0gR-crackstop.png",
    rating: 4.6,
    isBestseller: true,
    category: "crack-filling",
    packageSizes: [
      { size: "1 kg", price: 108 }
    ],
    coverage: "40-45 rft/kg to fill 5mm x 5mm 'V' shaped groove",
    features: [
      "Single component, easy to use",
      "Non-sagging, can be used in horizontal, vertical and overhead applications",
      "Good adhesion and effective bonding with the plastered substrate",
      "High tensile strength, non-shrink and waterproof",
      "Cost saver - As surface leveler before painting it reduces paint consumption and increases the life of the paint making it economical"
    ],
    applications: [
      "To fill the static cracks of 3 to 5 mm sizes in horizontal or vertical areas of buildings & structures",
      "To level the undulation of the unplastered or plastered ceilings and walls before painting"
    ],
    fullDescription: "BD CRACKSTOP is a cement based polymer modified powder material for filling cracks in plastered surface. It is composed of cement, properly selected aggregates, polymer & additives which requires on site addition of water only. It is ideal to fill 3 to 5 mm wider static cracks, for leveling up walls before tiling. A crack filled with CRACK STOP enhances the subsequent paintings quality and life.",
  },
  {
    id: 2,
    name: "BD CRACKSTOP X",
    description:
      "Two Component Cement based polymer modified Crack filler",
    subtitle: "Designed to repair vertical or horizontal cracks with excellent adhesion",
    price: 350,
    image:
      "https://api-catalog.owncart.shop/uploads/images/TqkyRNGazA-crackstop%20x.png",
    rating: 4.8,
    isBestseller: true,
    category: "crack-filling",
    packageSizes: [
      { size: "1kg", price: 350 },
      { size: "5 kg", price: 1400 },
      { size: "25 kg", price: 7000 }
    ],
    coverage: "15 Rft/kg",
    features: [
      "Non-sagging, can be used in horizontal, vertical and overhead applications",
      "Good adhesion and effective bonding with the plastered substrate",
      "High tensile strength, non-shrink and waterproof",
      "UV Resistance"
    ],
    applications: [
      "To fill the static cracks of 5mm to 30 mm sizes in horizontal or vertical areas of buildings & structures"
    ],
    fullDescription: "BD CRACKSTOP X is a Two Component, Designed To Repair Vertical Or Horizontal Cracks. It Has Excellent Adhesion To Concrete and Masonry Surfaces",
  },
  {
    id: 3,
    name: "BD CRACKSTOP XP",
    description:
      "Ready to use crack filler for Internal & External Surface Cracks In Plaster",
    subtitle: "High quality weather durable acrylic emulsion polymer putty",
    price: 460,
    image:
      "https://api-catalog.owncart.shop/uploads/images/SQx0nBnkTn-crackstop%20xp.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "crack-filling",
    packageSizes: [
      { size: "1 kg", price: 460 }
    ],
    coverage: "25-30 Rft/kg (for a depth of 5mm and width of 5mm)",
    features: [
      "Consistency - Paste form, without sagging",
      "Flexibility - Flexible, therefore does not crack & accommodates minor movements in cracks",
      "Paint ability - Over coat able by any type of polymer based paints, after 24 hours",
      "Bonding - Excellent adhesion with cementitious surface",
      "Durability – Excellent resistance to UV & atmospheric conditions"
    ],
    applications: [
      "Internal & external Plastered brick masonry wall cracks of up to 5mm width"
    ],
    fullDescription: "BD CRACKSTOP XP is composed of high quality weather durable acrylic emulsion polymer, properly selected graded fillers, light fast pigment& additives. It is a single pack, ready to use flexible putty for filling the cracks in plastered surfaces because it has excellent bonding, ease of application, water resistance, aesthetic appearance & durability.",
  },
  {
    id: 4,
    name: "BD CRACKSTOP FIBRE",
    description:
      "Fibre Reinforcement for Concrete and Mortar",
    subtitle: "High performance micro polypropylene fibre for crack controlling",
    price: 110,
    image:
      "https://api-catalog.owncart.shop/uploads/images/3fgFCzVgWX-crackstop%20fibre.png",
    rating: 4.5,
    isBestseller: false,
    category: "crack-filling",
    packageSizes: [
      { size: "6 mm", price: 110 },
      { size: "12 mm", price: 110 }
    ],
    coverage: "Add to concrete/mortar during mixing at 125gms per bag of cement",
    features: [
      "Used to prevent hairline cracking"
    ],
    applications: [
      "Can be used in plastering",
      "Concrete", 
      "Chips Screeding compound etc."
    ],
    fullDescription: "BD CRACKSTOP FIBRE is a high performance micro polypropylene fibre developed as a crack controlling additive for cementitious materials. It is available as monofilament 6mm in length for plaster and mortar",
  },
  {
    id: 5,
    name: "BD CRACKSTOP MESH",
    description:
      "Glass fibre mesh for construction joints",
    subtitle: "Made of glass fiber for high mechanical strength to strengthen gypsum plaster",
    price: 480,
    image:
      "https://api-catalog.owncart.shop/uploads/images/GHTsw1d7l1-crackstop%20mesh.png",
    rating: 4.7,
    isBestseller: false,
    category: "crack-filling",
    packageSizes: [
      { size: "4 inch", price: 480 },
      { size: "6 inch", price: 610 }
    ],
    coverage: "3 Rft/Mtr",
    features: [
      "Reduces plastic shrinkage cracking",
      "Improves impact, deformation and abrasion resistance",
      "Increases lifespan",
      "Promotes regular bleeding and reduces bleeding water",
      "Prevents and controls the formation of intrinsic cracks",
      "In concrete Increases unity and reduces separation"
    ],
    applications: [
      "Construction joints",
      "Different surface joints",
      "Minor cracks",
      "Alternate for chicken mesh"
    ],
    fullDescription: "BD CRACKSTOP MESH is made of glass fiber for high mechanical strength Order to strengthen gypsum plaster.",
  },

  // Waterproofing Category
  {
    id: 7,
    name: "BD INSTANT STOP",
    description:
      "Fast setting plugging compound",
    subtitle: "Single part fast setting hydraulic compound that instantly stops flowing water",
    price: 165,
    image:
      "https://api-catalog.owncart.shop/uploads/images/H3GLOXLHnb-INSTANT%20STOP.png",
    rating: 4.7,
    isBestseller: false,
    category: "grouts-anchors",
    packageSizes: [
      { size: "1 kg", price: 165 }
    ],
    coverage: "Depends upon hole size",
    features: [
      "Used to prevent immediate water leakage"
    ],
    applications: [
      "Water tanks",
      "Swimming pool",
      "Lower decks"
    ],
    fullDescription: "BD INSTANT STOP is a single part fast setting hydraulic compound that instantly stops flowing water and seepage through concrete and masonry surfaces",
  },

  // Thermal Insulation Category
  {
    id: 8,
    name: "BD Termoshield Coat",
    description:
      "Thermo Shield Coatis a ready to use, single component water based consist Of special polymer coating with extended polymeric chain to act as a thermal Insulation and waterproofing.",
    subtitle: "Flexible thermal insulation and waterproof coating for roofs and walls",
    price: 3340,
    image:
      "https://api-catalog.owncart.shop/uploads/images/xUUJUUuOEr-Thermo%20Sheild%20Coat.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "thermal-insulation",
    packageSizes: [
      { size: "5 Lit", price: 3340 }
    ],
    coverage: "25 to 28sq.ft / per kg in two coats, depends upon the porosity of substrates",
    features: [
      "Excellent weathering properties",
      "Excellent bond",
      "Resistance to UV rays",
      "Forms flexible film",
      "Nonflammable",
      "Abrasion resistant to light foot traffic",
      "Effective waterproofing properties",
      "Reduce surfaces temperature in the range of 15 - 20% of ambient air Temperature"
    ],
    applications: [
      "Sloped roofs and vertical walls",
      "All types of concrete and masonry surfaces",
      "Thermal insulation applications",
      "Waterproof coating applications"
    ],
    fullDescription: "Thermo Shield Coatis a ready to use, single component water based consist Of special polymer coating with extended polymeric chain to act as a thermal Insulation and waterproofing.",
  },

  // Tapes Category
  {
    id: 9,
    name: "BD Sealtape SA",
    description:
      "BD SEAL TAPE SA tape is simple and highly effective solution for waterproofing, sealing and insulation. BD SEAL TAPE SA is a self-adhesive tape made of special polymer. Self protected by reinforced aluminum.",
    subtitle: "Used for sealing water leakage surfaces by applying over crack/ gap",
    price: 510,
    image:
      "https://api-catalog.owncart.shop/uploads/images/JadX8gi2-a-SEAL%20TAPE%20SA.png",
    rating: 4.6,
    isBestseller: false,
    category: "tapes",
    packageSizes: [
      { size: "1.5 mtr", price: 510 },
      { size: "10 mtr", price: 2700 }
    ],
    coverage: "3 Rft/mtr",
    features: [
      "No Messy Surface",
      "Easy & Quick Application",
      "Economical",
      "Sticks to most HDPE, PP or any substance",
      "Can be over painted Good UV Resistance",
      "Good Weathering Properties",
      "Self-Adhesive"
    ],
    applications: [
      "All Type of Roofing Sheets (Asbestos Cement Sheets, GI Sheets)",
      "Sealing water leakage surfaces",
      "Waterproofing applications",
      "Crack and gap sealing"
    ],
    fullDescription: "BD SEAL TAPE SA tape is simple and highly effective solution for waterproofing, sealing and insulation. BD SEAL TAPE SA is a self-adhesive tape made of special polymer. Self protected by reinforced aluminum.",
  },

  // Bonding Agents Category
  {
    id: 10,
    name: "BD Concrete Bond",
    description:
      "CONCRETE BOND is a two part solvent free bonding agent composed of liquid epoxy resin and hardener. It is used for bonding of structural concrete new to old concrete.",
    subtitle: "Epoxy bonding agent for concrete",
    price: 1258,
    image:
      "https://api-catalog.owncart.shop/uploads/images/DyQRa8nuqu-CONCRETE%20BOND.png",
    rating: 4.7,
    isBestseller: false,
    category: "bonding-agents",
    packageSizes: [
      { size: "1 kg", price: 1258 }
    ],
    coverage: "10- 15 Rft / Kg depends upon surface",
    features: [
      "Improves the bond between new and old concrete",
      "Prevents water leakage",
      "Prevents explosions"
    ],
    applications: [
      "Old and new concrete joint areas"
    ],
    fullDescription: "CONCRETE BOND is a two part solvent free bonding agent composed of liquid epoxy resin and hardener. It is used for bonding of structural concrete new to old concrete.",
  },
  {
    id: 11,
    name: "BD PLASTER BOND BOOSTER",
    description:
      "BD PLASTER BOND BOOSTER is a one-component styrene butadiene rubber latex bonding agent. BD PLASTER BOND BOOSTER is designed to improve the physical properties of cement mixes and slurries.",
    subtitle: "Liquid polymer bonding agent for cement-containing mixes",
    price: 435,
    image:
      "https://api-catalog.owncart.shop/uploads/images/sQTYHG9VdB-PLASTERBOND%20SBR.png",
    rating: 4.6,
    isBestseller: false,
    category: "bonding-agents",
    packageSizes: [
      { size: "1 Lit", price: 435 },
      { size: "5 Lit", price: 1925 },
      { size: "20 Lit", price: 7200 }
    ],
    coverage: "30 to 35 sq. ft/ depending upon surface condition",
    features: [
      "Prevents water leakage",
      "Repairs damaged area",
      "As a compound, it is used to prevent old iron rods rust",
      "Laying the ground floors"
    ],
    applications: [
      "Roof applications",
      "Sunshades", 
      "Terrace waterproofing",
      "Water tanks",
      "Ceiling beam and columns"
    ],
    fullDescription: "BD PLASTER BOND BOOSTER is a one-component styrene butadiene rubber latex bonding agent. BD PLASTER BOND BOOSTER is designed to improve the physical properties of cement mixes and slurries.",
  },

  // Grouts & Anchors Category
  {
    id: 12,
    name: "BD Nanguram Anchor Fix",
    description:
      "NANGURAM ANCHORFIX is two components, high strength, fast cure, polyester resin anchoring grout.",
    subtitle: "High strength polyester grout for anchoring and fixing",
    price: 700,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Bq5FKgu299-NUNGURAM%20ANCHORFIX.png",
    rating: 4.8,
    isBestseller: false,
    isNew: true,
    category: "grouts-anchors",
    packageSizes: [
      { size: "1 kg", price: 700 }
    ],
    coverage: "Approx.18 nos of 8mm rod at 12mm dia, 70mm depth / 1kg",
    features: [
      "Exceptionally rapid strength development",
      "Resistance to dynamic loading",
      "Moisture resistant",
      "Very dense",
      "Exceptional bond to concrete and steel surfaces",
      "Good chemical resistance"
    ],
    applications: [
      "Column anchoring",
      "Beam fixing", 
      "Roof applications"
    ],
    fullDescription: "NANGURAM ANCHORFIX is two components, high strength, fast cure, polyester resin anchoring grout.",
  },

  // Tiling Aids Category
  {
    id: 13,
    name: "BD TILEJOINT SEALER PLUS",
    description:
      "Three component, waterproof epoxy tile joint filler",
    subtitle: "Waterproof epoxy tile joint filler for professional applications",
    price: 1386,
    image:
      "https://api-catalog.owncart.shop/uploads/images/7NG3j6WZ6x-tile%20joint%20Sealer%20PLUS.png",
    rating: 4.7,
    isBestseller: true,
    category: "tiling-aids",
    packageSizes: [
      { size: "1 Kg", price: 1386 }
    ],
    coverage: "30-35 sqft/kg (joint size 2mm)",
    features: [
      "Very good strength properties",
      "Fast setting",
      "Non-shrinkage",
      "Stain and Solvent free",
      "Ease of installation"
    ],
    applications: [
      "Shopping malls & Showrooms",
      "Hotels",
      "Kitchens & Bathrooms",
      "Swimming pools",
      "Residential and commercial buildings"
    ],
    fullDescription: "Tile joint sealer plus is a three-component system base made with specially formulated epoxy resins and hardeners. It is especially used for ceramic tiles, vetrified tiles and stone applications.",
  },
  {
    id: 14,
    name: "BD TILEJOINT SEALER",
    description:
      "Durable, cement-based tile joint filler",
    subtitle: "Polymer modified, cement-based tile joint filler for all types of tiles",
    price: 103,
    image:
      "https://api-catalog.owncart.shop/uploads/images/TbsyvK-SGw-tile%20joint%20Sealer.png",
    rating: 4.5,
    isBestseller: false,
    category: "tiling-aids",
    packageSizes: [
      { size: "1 kg", price: 103 }
    ],
    coverage: "50 to 60 sqft/kg (joint size 2mm)",
    features: [
      "Easy to use & Clean - just mix with water, ready to use",
      "Polymer modified - Crack free, minimum shrinkage & water resistance",
      "Suitable for varied tile and stones – All Ceramic, vitrified tiles, granites etc",
      "Available in range of attractive colors - Available in more colors",
      "Low VOC - For healthy living"
    ],
    applications: [
      "Floor and walls, internal & external area",
      "Domestic applications",
      "Commercial applications",
      "Wider tile joints",
      "All types of ceramic tile, glazed tiles, porcelain tiles",
      "Vitrified & fully vitrified tiles",
      "Natural stones",
      "Glass mosaic tiles"
    ],
    fullDescription: "Tile joint sealer is a polymer modified, cement-based tile joint filler used for filling the joints/gap between the tiles. It effectively fills the gaps and gives water resistant, non-dusting tile joints. It is designed for grouting glazed, ceramic, porcelain, vetrified & fully vetrified tiles & natural stones.",
  },
  {
    id: 15,
    name: "BD Tile Clean Master",
    description:
      "A powerful, heavy duty, acid - based cleaner for ceramic tiled floors and walls. BD TILE CLEAN MASTER is designed for removal of cement film residues, efflorescence and most oxide stains.",
    subtitle: "Heavy Duty Tile Cleaner",
    price: 397,
    image:
      "https://api-catalog.owncart.shop/uploads/images/kcNccGXKvG-CLEANER.jpg",
    rating: 4.6,
    isBestseller: false,
    category: "tiling-aids",
    packageSizes: [
      { size: "500 ml", price: 205 },
      { size: "1 lit", price: 397 }
    ],
    coverage: "30-35 sqft in 500ml, depending upon the surface conditions",
    features: [
      "Remove Tough & difficult Stains",
      "Doesn't affect color & shine of tile",
      "Gives the appearance of a brand new floor",
      "No damage to tiles & Grouts"
    ],
    applications: [
      "Interior tiled floors",
      "Exterior tiled floors", 
      "Ceramic tiled walls",
      "Cement film residue removal",
      "Efflorescence treatment",
      "Oxide stain removal"
    ],
    fullDescription: "A powerful, heavy duty, acid - based cleaner for ceramic tiled floors and walls. BD TILE CLEAN MASTER is designed for removal of cement film residues, efflorescence and most oxide stains. It may also be used as general purpose cleaner on other acid resistant surface.",
  },

  // Special Products Category
  {
    id: 16,
    name: "BD Paint Remover 500",
    description:
      "BD PAINT REMOVER 500 a solvent-based, Non evaporative, instant paint remover.",
    subtitle: "solvent-based, non flammable, instant paint remover",
    price: 251,
    image:
      "https://api-catalog.owncart.shop/uploads/images/woK3K_PsUn-paint%20remover.jpg",
    rating: 4.4,
    isBestseller: false,
    category: "special-products",
    packageSizes: [
      { size: "500 ml", price: 251 },
      { size: "1 lit", price: 431 }
    ],
    coverage: "20 sq.m/litre (Varies depending on paint thickness)",
    features: [
      "Quick Action formula",
      "Effortless results", 
      "Penetrates deeply",
      "Removing several layers at once",
      "Reduced labour",
      "Saves time",
      "Surface preservation without damage",
      "Clean and safe process"
    ],
    applications: [
      "Construction sites",
      "Wooden surfaces", 
      "Metal surfaces",
      "Automotive",
      "Industrial", 
      "Marine",
      "DIY projects"
    ],
    fullDescription: "BD PAINT REMOVER 500 a solvent-based, Non evaporative, instant paint remover.",
  },

  // Sealants Category
  {
    id: 17,
    name: "BD Seal PU",
    description:
      "Seal PU Sealant is a one-part moisture curing Polyurethane Sealant composed of polyurethane polymer, pigments, fillers & additives. It is used for filling and sealing joints in buildings & structures. It is highly elastic & resilient, weather-durable, nonsagging, watertight with excellent adhesion to almost all building construction materials.",
    subtitle: "Single components polyurethane sealants",
    price: 787,
    image:
      "https://api-catalog.owncart.shop/uploads/images/ORuBOVRTxC-SEAL%20PU.png",
    rating: 4.7,
    isBestseller: false,
    category: "sealants",
    packageSizes: [
      { size: "600 ml", price: 787 }
    ],
    coverage: "40 rft/ 600 ml sausage ( Joint size width 5mm)",
    features: [
      "Ready to use - Single pack, it reduces the failure due to heterogeneity while imperfect mixing",
      "Curing – Cures by absorption of moisture from air, (no external curing is required) at ambient temperature with humidity",
      "Elasticity – Elastic & forms a permanent tough rubber seal",
      "Adhesion - Excellent adhesion to concrete, brick work, painted wood, glass, glazed surfaces, aluminum, stainless steel & plastic like polyester & PVC",
      "Staining – No staining of cementitious substrates",
      "Weathering durability – Excellent, may slightly yellow on long exposure to UV light"
    ],
    applications: [
      "Sealing of expansion and construction joints as well as joints between different construction materials in high-rise buildings, basements, floorings etc",
      "Sealing joints in between precast concrete panels",
      "Sealing Joints in between tiles, bricks, and marble etc"
    ],
    fullDescription: "Seal PU Sealant is a one-part moisture curing Polyurethane Sealant composed of polyurethane polymer, pigments, fillers & additives. It is used for filling and sealing joints in buildings & structures. It is highly elastic & resilient, weather-durable, nonsagging, watertight with excellent adhesion to almost all building construction materials.",
  },
  {
    id: 18,
    name: "BD Seal AC",
    description:
      "SEAL AC is a one-part, general purpose acrylic sealant which can be used internally or externally. It cures on exposure to the atmosphere to form a flexible sealant. SEAL AC does not need primer when applied to ducts, concrete stone, marble and aluminum surfaces.",
    subtitle: "General purpose acrylic sealant",
    price: 235,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Vk4Ozj-5er-SEAL%20AC.png",
    rating: 4.6,
    isBestseller: false,
    category: "sealants",
    packageSizes: [
      { size: "1 kg", price: 235 }
    ],
    coverage: "40 to 45 Rft / 600ml",
    features: [
      "Single component ready for use",
      "10% movement accommodation factor",
      "Excellent adhesion to most building substrates",
      "UV resistant"
    ],
    applications: [
      "Sealing joints in concrete, wood, anodized aluminum",
      "Blockwork, marble and natural stone applications",
      "Around windows and door frames",
      "General building industry sealing applications"
    ],
    fullDescription: "SEAL AC is a one-part, general purpose acrylic sealant which can be used internally or externally. It cures on exposure to the atmosphere to form a flexible sealant. SEAL AC does not need primer when applied to ducts, concrete stone, marble and aluminum surfaces.",
  },
  // Waterproofing Category
  {
    id: 19,
    name: "BD DAMPSTOP XW",
    description:
      "A Rising Damp Proofing for Wet walls",
    subtitle: "Ready for use, single component rising damp solution for wet walls",
    price: 680,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Y6BQj_tjwU-BD%20DAMPSTOP%20XW.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "1 Lit", price: 680 },
      { size: "5 Lit", price: 3100 }
    ],
    coverage: "Depend upon the penetration and porosity",
    features: [
      "Low viscosity allowing for high penetration",
      "Non staining",
      "Reduces water and chloride intrusion",
      "Increases freeze thaw resistance",
      "Minimizes efflorescence",
      "Penetrates deeply into wet brick masonry walls"
    ],
    applications: [
      "Rising Damped brick work Area at Wet condition",
      "Brick also"
    ],
    fullDescription: "BD DAMPSTOP XW is a ready for use, single component, which has been specifically formulated to penetrate into well walls, water repellent coating rising dampness wet walls which permanently stops rising damp.",
  },
  {
    id: 20,
    name: "Aqua seal P",
    description:
      "A range of epoxy resin based primer for tile surface",
    subtitle: "High performance primer for BUILDING DOCTOR epoxy range coatings",
    price: 1320,
    image:
      "https://api-catalog.owncart.shop/uploads/images/FRdbGeLtr7-AQUA%20SEAL%20P%20(1).png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
    packageSizes: [
      { size: "1 kg", price: 1320 }
    ],
    coverage: "50-60 sq.ft/Kg depend upon the porosity of substrate",
    features: [
      "Used over the tiles in the tank",
      "This bd aqua seal p is used as a primer for applying the bd aqua seal tank guard"
    ],
    applications: [
      "Water Tank",
      "Sump",
      "All type of closed water storage area"
    ],
    fullDescription: "BD AQUASEAL P is a clear high performance primer designed to improve Adhesion of various types of BUILDING DOCTOR epoxy range including Coatings, self-smoothing and trowel applied products. The products are Available, a solvent free primer \"BD AQUA SEAL P\"",
  },
  // Admixtures Category
  {
    id: 21,
    name: "BD CONCRETE POWER",
    description:
      "Integral waterproofing admixture for concrete",
    subtitle: "Liquid waterproofing admixture for concrete and mortar",
    price: 207,
    packageSizes: [
      { size: "1 lit", price: 207 },
      { size: "5 lit", price: 838 },
      { size: "20 lit", price: 2970 }
    ],
    coverage: "Add to concrete during mixing at 200 – 250 ml per bag",
    features: [
      "Improves durability by minimizing penetration of moisture and water based chemicals",
      "No additional water into dry or semi-dry mixes",
      "Reduces efflorescence and pigment leaching from cement mortars",
      "Chloride free",
      "Improves plasticity cohesion",
      "Better compaction and finishing"
    ],
    applications: [
      "CONCRETE POWER is a waterproofing admixture for use in all cement based screeds and concrete"
    ],
    fullDescription: "CONCRETE POWER is Liquid waterproofing admixture for concrete and mortar formulated from selected polymers specially designed to reduce water permeability by reducing capillary voids, which will last for the life of the concrete and mortar.",
    image:
      "https://api-catalog.owncart.shop/uploads/images/-yl6fsrrqj-concrete%20power.png",
    rating: 4.6,
    isBestseller: false,
    category: "admixtures",
  },
  {
    id: 22,
    name: "BD PLASTER POWER",
    description:
      "Air Entraining Plasticizer for Cement Mortar",
    subtitle: "Liquid air entraining admixture with plasticizing properties",
    price: 215,
    image:
      "https://api-catalog.owncart.shop/uploads/images/sAsplyu-l7-plaster%20power.png",
    rating: 4.6,
    isBestseller: false,
    category: "admixtures",
    packageSizes: [
      { size: "1 Lit", price: 215 },
      { size: "5 Lit", price: 868 },
      { size: "20 Lit", price: 3010 }
    ],
    coverage: "Add to mortar during mixing at 200 – 250 ml per bag of cement",
    features: [
      "Greatly improves cohesion, reduces segregation and bleeding",
      "Improves workability and plasticity",
      "Exceptionally effective with aggregates with high fine content",
      "Suitable for mixes containing PFA, GGBFS and micro silica, Chloride free",
      "Can also be used for waterproofing Purpose",
      "Can also be used for M-Sand and Fly ash"
    ],
    applications: [
      "PLASTER POWER is a waterproofing admixture for use in all cement based mortars"
    ],
    fullDescription: "PLASTER POWER is a liquid air entraining admixture with plasticizing properties specially designed to create microscopic air bubbles that are uniformly distributed in the cement mortar mix. It also permits reductions in the free water content to be made. PLASTER POWER is formulated from selected water reducer polymers and synthetic surfactants.",
  },
  // Corrosion Treatments Category
  {
    id: 23,
    name: "BD CORROSHIELD CR",
    description:
      "Corrosion inhibitor admixture for concrete & plaster",
    subtitle: "Liquid concrete admixture for corrosion protection",
    price: 230,
    image:
      "https://api-catalog.owncart.shop/uploads/images/PyK8cch1iE-corrosheild%20cr.png",
    rating: 4.8,
    isBestseller: false,
    category: "corrosion-treatments",
    packageSizes: [
      { size: "1 lit", price: 230 },
      { size: "5 lit", price: 878 },
      { size: "20 lit", price: 3400 }
    ],
    coverage: "Add to (concrete/mortar) during mixing at 200 – 250 ml",
    features: [
      "BD CORROSHIELD CR gives 6 times better durability of concrete compared to normal cement mortar",
      "Protects against the harmful effects of corrosion",
      "Does not change physical properties of concrete mix (air entrainment, set time and strength)",
      "Safe to handle",
      "Cost effective"
    ],
    applications: [
      "All Commercial And Domestic Reinforced Concrete Structures",
      "Reinforced Marine Concrete Structures And Concrete Piers",
      "Pillars",
      "Pipe And Utility Poles"
    ],
    fullDescription: "CORROSHIELD CR is a liquid concrete admixture; Corrosion induced by carbonation, chloride and atmospheric attack can be prevented using CORROSHIELD CR. When incorporated into the concrete mix, CORROSHIELD CR instantly forms a thin and stable protective layer on the metal.",
  },
  {
    id: 24,
    name: "BD Termite Stop X",
    description:
      "TERMITE STOP X is a highly effective against Termites and Borers. It increases the life of the Structure.",
    subtitle: "Organic formulation for effective against termites",
    price: 490,
    image:
      "https://api-catalog.owncart.shop/uploads/images/PSPQNPLNVo-termite%20stop%20x.png",
    rating: 4.7,
    isBestseller: false,
    category: "special-products",
    packageSizes: [
      { size: "1 Lit", price: 490 },
      { size: "5 Lit", price: 1990 }
    ],
    coverage: "Depending upon holes size",
    features: [
      "Protects and prevents from termite attack",
      "Ready to use",
      "Product Non Hazardous chemicals",
      "No license required for storage",
      "Mixes with oil based paints and Primers",
      "Very suitable for new buildings"
    ],
    applications: [
      "4 to 5 feet from the ground inside and outside the building or basement level",
      "Mix 20 liters of water for 1 liter Termite stop",
      "Termite and borer protection for wooden structures",
      "Building foundation protection"
    ],
    fullDescription: "TERMITE STOP X is a highly effective against Termites and Borers. It increases the life of the Structure.",
  },

  // Additional Waterproofing Products
  {
    id: 25,
    name: "BD WALL SHIELD",
    description:
      "Water-based high-performance acrylic protective and decorative coating",
    subtitle: "Ready-for-use, single-component, acrylic-based coating for external and internal applications",
    price: 2600,
    image:
      "https://api-catalog.owncart.shop/uploads/images/-Zazf_NSk8-wall%20shield.png",
    rating: 4.6,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "5 kg", price: 2600 },
      { size: "20 kg", price: 9800 }
    ],
    coverage: "30-40 sq.ft/kg/coat to give a DFT between 100-150 microns depending on the substrate texture",
    features: [
      "Protective barrier against chloride ions, carbon dioxide and water",
      "Durable - highly resistant to UV rays and weathering",
      "Non-toxic/non-flammable",
      "Anti-fungus forms a flexible film"
    ],
    applications: [
      "Retaining walls",
      "Bridge abutments",
      "External concrete of storage tanks",
      "Multistory buildings and villas",
      "Pre-cast elements and concrete cladding"
    ],
    fullDescription: "BD WALL SHIELD is a ready-for-use,single-component, acrylic-based coating for external and internal applications over a variety of concrete and masonry substrates. BD WALL SHIELD exhibits excellent long-term weathering and UV resistance",
  },
  {
    id: 26,
    name: "BD GARDEN GUARD",
    description:
      "Waterproofing Coating for Garden Area",
    subtitle: "Available in two types for internal and external waterproofing applications",
    price: 3350,
    image:
      "https://api-catalog.owncart.shop/uploads/images/_m4NEI6aEf-bd%20garden%20guard.png",
    rating: 4.5,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "5 kg", price: 3350 },
      { size: "25 kg", price: 11850 }
    ],
    coverage: "25 to 30 sq.ft/per kg in single coats, depending upon the porosity of substrate surface",
    features: [
      "Waterproofing",
      "Soil Corrosion Resistance",
      "UV Resistance and plant roof Resistance"
    ],
    applications: [
      "Balcony Garden waterproofing and protection",
      "Terrace Garden waterproofing and protection",
      "Plant Tank waterproofing and protection",
      "Interior and Exterior waterproofing and protection"
    ],
    fullDescription: "BD GARDEN GUARD is available in two types of Waterproofing. One for Internal Waterproofing and another one for external waterproofing.",
  },
  {
    id: 27,
    name: "BD AQUA SEAL NANO",
    description:
      "Water based, ready for use, Single component, water repellent protective Penetration for concrete, Natural stone and cementitious products",
    subtitle: "Water repellent protective penetration for concrete and natural stone",
    price: 563,
    image:
      "https://api-catalog.owncart.shop/uploads/images/qDFXlkVuE6-aqua%20seal%20nano.png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
    packageSizes: [
      { size: "1 lit", price: 563 },
      { size: "5 lit", price: 2515 },
      { size: "20 lit", price: 9660 }
    ],
    coverage: "30 sq.ft/1 litre depends on the porosity of the substrate",
    features: [
      "Prevents water Leakage",
      "Highly penetrating",
      "Colorless"
    ],
    applications: [
      "All types of concrete areas and natural stones"
    ],
    fullDescription: "BUILDING DOCTOR AQUASEAL NANO is water based, ready for use, Single component, water repellent protective Penetration for concrete, Natural stone and cementitious products",
  },
  {
    id: 28,
    name: "BD AQUASEAL 2K",
    description:
      "Two component highly flexible cementitious waterproofing coating",
    subtitle: "Polymer-modified, flexible cementitious waterproofing coating for concrete and masonry surfaces",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/l9ScEIv3GE-aqua%20seal%20sk.png",
    rating: 4.9,
    isBestseller: true,
    category: "waterproofing",
    packageSizes: [
      { size: "20 kg", price: null }
    ],
    coverage: "150 sq.ft/20 kg kit depends on the porosity of the substrate",
    features: [
      "Resistant – Cracking of bridges on concrete/surfaces",
      "Apply easily with a brush/roller",
      "Excellent adhesion to concrete and masonry substrates",
      "Provides a waterproof surface and eliminates water seepage",
      "Complies with small water contact parameters",
      "Low VOC - for a healthy life"
    ],
    applications: [
      "Wet areas such as bathrooms, showers, kitchen, etc",
      "Water bodies like swimming pools, water tanks, fountains, etc",
      "Concrete Roof, cement-based screeds, concrete, masonry surface"
    ],
    fullDescription: "BD AQUASEAL 2K is a two-component, polymer-modified, flexible Cementitious waterproofing coating specially formulated for Concrete and Masonry surfaces which are supplied in ready-mix kits (2 parts).",
  },
  {
    id: 29,
    name: "BD AQUASEAL CRYSTALLINE",
    description:
      "One component acrylic cement modified waterproof coating",
    subtitle: "Single component polymer modified cementitious waterproof coating suitable for internal and external applications",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/C2UWKBVdsN-aqua%20seal%20crystalline.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "waterproofing",
    packageSizes: [
      { size: "25 kg", price: null }
    ],
    coverage: "6 to 8 sq.ft/per kg in single coats, depends upon the porosity of substrate and will vary from site",
    features: [
      "It works on the principle of crystallization process",
      "High penetration into the pores of concrete",
      "Resistant to water penetration and spills",
      "Provides strong water barrier",
      "Prevents water seepage from the positive and negative sides of the structure",
      "Easy to use brush/Roller"
    ],
    applications: [
      "Waterproof coating for concrete water tanks, sunken floors, bathrooms and toilets, foundations, etc",
      "Lift walls, inspection pits, and underground structures",
      "The negative side is great for waterproofing solution to moisture in the concrete"
    ],
    fullDescription: "BUIDLING DOCTOR AQUA SEAL CRYSTALLINE is a single components; polymer modified cementitious waterproof coating suitable for internal and external applications.",
  },


  // Additional Corrosion Treatment Products
  {
    id: 34,
    name: "BD CORROSHIELD ZR",
    description:
      "Two component epoxy based Anti-corrosive coating for steel",
    subtitle: "Epoxy solvent-based, zinc-rich coating for active anti-corrosion protection",
    price: 1294,
    image:
      "https://api-catalog.owncart.shop/uploads/images/rJVJCKnNSg-corrosheild%20zr.png",
    rating: 4.6,
    isBestseller: false,
    category: "corrosion-treatments",
    packageSizes: [
      { size: "1 kg", price: 1294 }
    ],
    coverage: "40 - 60 rft/kg in single coats, depends upon the rods dia.",
    features: [
      "Protects iron rod from rust",
      "It does not affect concrete mix and iron rod bond",
      "Necessary for coastal constructions"
    ],
    applications: [
      "Column",
      "Roof",
      "Beam",
      "All types of steel surface"
    ],
    fullDescription: "Corroshield ZR is a two-component, epoxy solvent-based, zinc-rich coating, Designed to provide an active anti-corrosion coating to steel reinforcement, Steel structure, tanks, pipes, plant components etc.",
  },
  {
    id: 35,
    name: "BD CORROSHIELD RCR",
    description:
      "Single Component Pre-Packed Rust Convertor/Remover",
    subtitle: "Triple action chemical for degreasing, destroying rust and phosphate coating",
    price: 250,
    image:
      "https://api-catalog.owncart.shop/uploads/images/uMPLWkcBOE-corrosheild%20rcr.png",
    rating: 4.8,
    isBestseller: false,
    category: "corrosion-treatments",
    packageSizes: [
      { size: "300 ml", price: 250 },
      { size: "500 ml", price: 400 }
    ],
    coverage: "30 - 35 rft/500 ml in single coats, depends upon the rods dia.",
    features: [
      "Converts rust in rod to iron",
      "Suitable for damaged concrete areas"
    ],
    applications: [
      "Column",
      "Roof", 
      "Beam",
      "All types of steel Surfaces"
    ],
    fullDescription: "CORROSHIELD RCR is a triple action chemical degreasing nature, Destroys and forms a light phosphate coating on the surface of the metal. This liquid can be applied to corroded reinforcing steel and other steel surfaces",
  },

  // Additional Waterproofing Products
  {
    id: 36,
    name: "BD PROTECTCOAT BW500",
    description:
      "Bitumen Emulsion Coat",
    subtitle: "Emulsified thixotropic bitumen protective coating",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/A5_B6m0qBY-bd%20protect%20coat%20bw500.png",
    rating: 4.5,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "5 kg", price: null },
      { size: "25 kg", price: null }
    ],
    coverage: "30-40 sq.ft/per kg in single coats, depends upon the porosity of substrate surface",
    features: [
      "Resists the attack of salts like chlorides and sulphates that are present in the soil",
      "Cold applied",
      "Adheres to concrete",
      "Can be applied in closed or confined spaces",
      "Water-based",
      "Non-flammable",
      "Versatile",
      "Economical"
    ],
    applications: [
      "Seawater Tanks, Canals and Intakes",
      "Sewage and sewage plants",
      "Chemical processing areas",
      "Building foundations"
    ],
    fullDescription: "BD PROTECTCOAT BW500 is an emulsified thixotropic bitumen protective coating. The coating dries to form a black flexible protective film. The finished film forms a tough barrier to vapor transmission.",
  },
  {
    id: 37,
    name: "BD PROTECTCOAT CT600",
    description:
      "Epoxy Based Bitumen Emulsion Coat",
    subtitle: "Two component, solvent free, amine cured coal tar epoxy",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/dAH-Ut6N3z-bd%20protect%20coat%20ct600.png",
    rating: 4.6,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "10kg", price: null }
    ],
    coverage: "17 to 20 sq.ft/per kg in single coats, depends upon the porosity of substrate surface",
    features: [
      "Prevents soil erosion and water seepage on floors and walls of basements",
      "Excellent adhesion to concrete and steel surfaces",
      "Suitable for use with waterproof coating",
      "High chemical resistance",
      "Does not support bacterial growth",
      "High abrasion resistance",
      "Can be used on green concrete"
    ],
    applications: [
      "Seawater Tanks, Canals and Intakes",
      "Sewage and sewage plants",
      "Chemical processing areas",
      "Building foundations, Basements"
    ],
    fullDescription: "BUILDING DOCTOR PROTECTCOAT CT600 is a two component, solvent free, amine cured coal tar epoxy. The product has excellent water and chemical resistance properties which makes it particularly suitable for aggressive environments such as sewage treatment plants and sewage man holes. BUILDING DOCTOR PROTECTCOAT CT600 is suitable for use on concrete and steel surfaces",
  },
  {
    id: 38,
    name: "BD AQUASEAL MAGIC PU",
    description:
      "Polyurethane resin based injection on system",
    subtitle: "Two-component, low viscosity moisture reactive polyurethane system",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/37_Ng5HkjE-aqua%20seal%20magic%20pu.png",
    rating: 4.9,
    isBestseller: true,
    category: "waterproofing",
    packageSizes: [
      { size: "5 kg", price: null }
    ],
    coverage: "Depending upon the concrete porosity",
    features: [
      "Rapid reaction with water; will stop water leakage problems",
      "Outstanding resistance to hydrostatic pressure",
      "Low-viscosity polyurethane system formulated to allow cracks Penetration"
    ],
    applications: [
      "Roof",
      "Water tanks",
      "Ceiling",
      "Beams and columns",
      "Structural concrete elements"
    ],
    fullDescription: "BD AQUASEAL MAGIC PU is a two-component; low viscosity moisture reactive polyurethane system which when reacts with water and expands to form a closed-cell foam barrier. Bd Aquaseal magic PU is used in conjunction with Bd AQUASEAL MAGIC PU for permanent and effective sealing of live cracks.",
  },
  {
    id: 30,
    name: "BD LEAKSHIELD WHITE",
    description:
      "Elastomeric modified acrylic waterproof coating",
    subtitle: "Acrylic based elastomeric waterproof coating for roofs and walls",
    price: 645,
    image:
      "https://api-catalog.owncart.shop/uploads/images/0yV7Lo60XQ-leaksheild.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "1 kg", price: 645 },
      { size: "5 kg", price: 2980 },
      { size: "25 kg", price: 10077 }
    ],
    coverage: "25 to 30 sq.ft/per kg in two coats, depends upon the porosity of substrate surface",
    features: [
      "Elastomeric with increased tensile strength",
      "Improved adhesion",
      "Single component, easy to apply",
      "Non-toxic and nonflammable",
      "Available in different colors",
      "UV stable and resistant",
      "Will not support fungus growth",
      "Easy maintenance",
      "Environment friendly"
    ],
    applications: [
      "Concrete, Masonry, Plaster, Terrazzo Tiles",
      "Asbestos Cement Sheets",
      "Clay Tiles, Aac Blocks Etc"
    ],
    fullDescription: "BUILDING DOCTOR LEAKSHIELD is an acrylic based elastomeric, waterproof coating for roofs and walls",
  },
  {
    id: 31,
    name: "BD LEAKSHIELD TERRACOTTA",
    description:
      "Elastomeric modified acrylic waterproof coating",
    subtitle: "Acrylic based elastomeric waterproof coating for roofs and walls in terracotta color",
    price: 670,
    image:
      "https://api-catalog.owncart.shop/uploads/images/0yV7Lo60XQ-leaksheild.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "1 kg", price: 670 },
      { size: "5 kg", price: 3090 },
      { size: "25 kg", price: 10407 }
    ],
    coverage: "25 to 30 sq.ft/per kg in two coats, depends upon the porosity of substrate surface",
    features: [
      "Elastomeric with increased tensile strength",
      "Improved adhesion",
      "Single component, easy to apply",
      "Non-toxic and nonflammable",
      "Available in different colors",
      "UV stable and resistant",
      "Will not support fungus growth",
      "Easy maintenance",
      "Environment friendly"
    ],
    applications: [
      "Concrete, Masonry, Plaster, Terrazzo Tiles",
      "Asbestos Cement Sheets",
      "Clay Tiles, Aac Blocks Etc"
    ],
    fullDescription: "BUILDING DOCTOR LEAKSHIELD is an acrylic based elastomeric, waterproof coating for roofs and walls.",
  },
  {
    id: 32,
    name: "BD BUILDING ALL ROUNDER",
    description:
      "Water-based polymer compound in multi-purpose applications for bonding Plasters and cement/building materials for waterproofing works",
    subtitle: "Multi-purpose water-based polymer compound for bonding and waterproofing applications",
    price: 635,
    image:
      "https://api-catalog.owncart.shop/uploads/images/BniyHnRtRw-aqua%20seal%20tank%20guard.png",
    rating: 4.6,
    isBestseller: false,
    category: "bonding-agents",
    packageSizes: [
      { size: "1 lit", price: 635 },
      { size: "5 lit", price: 2875 },
      { size: "20 lit", price: 9950 }
    ],
    coverage: "30 sq.ft/1 litre depends on the porosity of the substrate",
    features: [
      "It Prevents Water Leakage",
      "Repairs The Damaged Area"
    ],
    applications: [
      "All types of concrete areas and natural stones"
    ],
    fullDescription: "Water-based polymer compound in multi-purpose applications for bonding Plasters and cement/building materials for waterproofing works",
  },
  {
    id: 33,
    name: "BD DAMP STOP",
    description:
      "Epoxy Damp Proof coating",
    subtitle: "Two component, high performance, water-based epoxy waterproof vapour barrier membrane",
    price: 950,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Y6BQj_tjwU-BD%20DAMPSTOP%20XW.png",
    rating: 4.8,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "1 kg", price: 950 },
      { size: "10 kg", price: 7400 }
    ],
    coverage: "20 to 25 sq.ft/per kg in single coats, depends upon the porosity of substrate surface",
    features: [
      "Application - It can be used on wet concrete and plaster surfaces and provides an excellent water resistant coating with a hard and tough film",
      "Adhesion – Provides excellent adhesion to all cementitious substrates",
      "Chemical resistance – Excellent resistance to water, salt water, mild acids and soap water",
      "Environmentally friendly - non-hazardous and non-flammable",
      "Economy – Dilutable water with high coverage is therefore economical. Paintable"
    ],
    applications: [
      "For interior and exterior drywall treatments and ceilings",
      "Toilet and kitchen walls"
    ],
    fullDescription: "BD DAMP STOP is two component, high performance, water-based epoxy waterproof vapour barrier membrane to prevent water seepage and permeation for floors, walls, water tanks, reservoirs and water retaining structures.",
  },
  {
    id: 34,
    name: "BD DAMP STOP X",
    description:
      "A Low viscosity, highly penetrating silane, silanol – siloxane solution",
    subtitle: "Low-viscosity, highly penetrating solution for permanent rising damp prevention",
    price: null, // No pricing information available
    image:
      "https://api-catalog.owncart.shop/uploads/images/Y6BQj_tjwU-BD%20DAMPSTOP%20XW.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
    packageSizes: [
      { size: "5", price: null },
      { size: "25", price: null }
    ],
    coverage: "Depending upon penetration and porosity",
    features: [
      "Penetrates deeply into brick and other masonry substrates",
      "Form a durable polysiloxane damp course via chemical bonding",
      "Easy to use, non-corrosive and non-toxic formulation"
    ],
    applications: [
      "BD DAMP STOP X is used to install a durable polymer damp course into brickwork or other masonry walls to permanently stop rising dampness",
      "Rising damp is a major cause of decay in masonry materials such as stone, brick and mortar",
      "When severe it is a potential health hazard to building occupants due to high humidity levels and the growth of molds"
    ],
    fullDescription: "BD DAMP STOP X is a low-viscosity, highly penetrating silane, silanol-siloxane solution, which has been specifically formulated to permeate into walls affected by rising dampness. Once impregnated into a course of brickwork, BD DAMP STOP X reacts with minerals present to form a durable polymer damp course, which permanently stops rising damp.",
  },
  {
    id: 39,
    name: "BD AQUASEAL TANK GUARD",
    description:
      "Water based epoxy resin floor and wall Food Grade coating",
    subtitle: "High performance two component, water dispersible, epoxy resin coating for food grade applications",
    price: 1320,
    image:
      "https://api-catalog.owncart.shop/uploads/images/BniyHnRtRw-aqua%20seal%20tank%20guard.png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
    packageSizes: [
      { size: "1 kg", price: 1320 },
      { size: "5 kg", price: 5750 }
    ],
    coverage: "30 to 35 sq.ft/per kg in single coats, depends upon the porosity of substrate surface",
    features: [
      "Water-based; Moisture Tolerant",
      "Solvent-free, stain-free",
      "Dust free surfaces",
      "Easy application",
      "Resistant to fungal attack"
    ],
    applications: [
      "Swimming pool",
      "Pharmaceutical factory walls",
      "Water tank and sump"
    ],
    fullDescription: "BUILDING DOCTOR AQUA SEAL TANK GUARD is a high performance two Component, water dispersible, epoxy resin coating, designed to provide a hard, Semi-matte seal to concrete floors, walls, ceiling and other substrates.",
  },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Loading state for product cards suspense effect
  const [isLoading, setIsLoading] = useState(true);
  const error = null;

  // Simulate loading delay for initial load and when category/search changes
  useEffect(() => {
    setIsLoading(true); // Set to loading whenever filters change

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Increased to 2 seconds to make it more noticeable

    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]); // Re-trigger loading when these change

  useEffect(() => {
    document.title = "Our Products | OM Vinayaga Associates";
    setCurrentPage(1); // Reset to first page when category changes
  }, [activeCategory, searchTerm]);

  // Filter products based on search term and category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setIsLoading(true);
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Clear loading state after a short delay
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="pt-24">
      <section className="bg-[#2b4c7e] py-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              Our Products
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-200">
              Premium quality construction chemicals and building solutions
            </p>
          </div>
        </div>
      </section>



      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-28">
                <h2 className="font-bold text-xl mb-4">Categories</h2>
                <div className="space-y-2">
                  {PRODUCT_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      className={cn(
                        "w-full text-left py-2 px-3 rounded-md transition text-sm font-medium",
                        activeCategory === category.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100 text-gray-600"
                      )}
                      onClick={() => {
                        setIsLoading(true);
                        setActiveCategory(category.id);
                      }}
                    >
                      {category.name}
                      {activeCategory === category.id && (
                        <i className="fas fa-check ml-2"></i>
                      )}
                    </button>
                  ))}
                </div>



                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our experts are available to help you choose the right
                    products for your building needs.
                  </p>
                  <a
                    href="tel:+919342968038"
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    <Phone className="mr-2" size={16} /> Contact our team
                  </a>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              {/* Header with Search - Always Visible */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                <h2 className="font-bold text-xl">
                  {isLoading ? (
                    <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <>
                      {filteredProducts.length}{" "}
                      {filteredProducts.length === 1 ? "Product" : "Products"}
                    </>
                  )}
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  {/* Simple Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => {
                        setIsLoading(true);
                        setSearchTerm(e.target.value);
                      }}
                      className="w-full sm:w-64 pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-sm"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => {
                          setIsLoading(true);
                          setSearchTerm("");
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    {isLoading ? (
                      <div className="h-8 w-36 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Popularity</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating</option>
                      </select>
                    )}
                  </div>
                </div>
              </div>

              {isLoading ? (
                <>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
                      >
                        <div className="relative h-64 bg-gray-200"></div>
                        <div className="p-5 space-y-3">
                          <div className="flex justify-between">
                            <div className="h-6 w-2/3 bg-gray-200 rounded"></div>
                            <div className="h-6 w-10 bg-gray-200 rounded"></div>
                          </div>
                          <div className="h-4 w-full bg-gray-200 rounded"></div>
                          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                          <div className="flex justify-between items-center pt-2">
                            <div className="h-6 w-20 bg-gray-200 rounded"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Error Loading Products
                  </h3>
                  <p className="text-red-600">
                    There was an error loading the products. Please try again
                    later.
                  </p>
                </div>
              ) : (
                <>

                  {filteredProducts.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                      <Search className="text-gray-300 w-16 h-16 mb-4 mx-auto" />
                      <h3 className="text-xl font-bold mb-2">
                        No products found
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Try changing your search criteria or browse all products
                      </p>
                      <button
                        onClick={() => {
                          setIsLoading(true);
                          setSearchTerm("");
                          setActiveCategory("all");
                        }}
                        className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition"
                      >
                        View All Products
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group"
                          >
                            <div className="relative h-64 overflow-hidden">
                              {product.image ? (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
                              )}
                              {product.isBestseller && (
                                <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
                                  BESTSELLER
                                </div>
                              )}
                              {product.isNew && (
                                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                  NEW
                                </div>
                              )}
                            </div>
                            <div className="p-5">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="font-montserrat font-semibold text-lg">
                                  {product.name}
                                </h3>
                                <div className="flex items-center">
                                  <Star className="text-yellow-400" size={14} />
                                  <span className="text-sm ml-1">
                                    {product.rating?.toFixed(1) || "N/A"}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {product.description}
                              </p>
                              <div className="flex justify-end items-center">
                                <Link
                                  href={`/products/${product.id}`}
                                  className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded text-sm transition"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="mt-10 flex justify-center">
                          <div className="flex space-x-1">
                            <button
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                              className="px-4 py-2 border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <ChevronLeft size={16} />
                            </button>

                            {[...Array(totalPages)].map((_, i) => {
                              const pageNum = i + 1;

                              // Show first page, last page, current page and one page before and after current
                              if (
                                pageNum === 1 ||
                                pageNum === totalPages ||
                                (pageNum >= currentPage - 1 &&
                                  pageNum <= currentPage + 1)
                              ) {
                                return (
                                  <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={cn(
                                      "px-4 py-2 border rounded-md text-sm font-medium",
                                      currentPage === pageNum
                                        ? "bg-primary text-white"
                                        : "hover:bg-gray-50"
                                    )}
                                  >
                                    {pageNum}
                                  </button>
                                );
                              } else if (
                                pageNum === 2 ||
                                pageNum === totalPages - 1
                              ) {
                                return (
                                  <span key={pageNum} className="px-4 py-2">
                                    ...
                                  </span>
                                );
                              }

                              return null;
                            })}

                            <button
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              className="px-4 py-2 border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Download Catalog Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12">
                <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">Download Our Complete Product Catalog</h2>
                <p className="text-gray-600 mb-6">
                  Get detailed information about our full range of 100+ specialized building repair and maintenance products, including specifications, applications, and benefits.
                </p>
                <a 
                  href="#download-catalog" 
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  <i className="fas fa-download mr-2"></i> Download Catalog
                </a>
              </div>
              <div className="md:col-span-2 relative h-60 md:h-auto">
                <div className="absolute inset-0 w-full h-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ProductsPage;
