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
    name: "BD Crackstop",
    description:
      "Standard crack filling compound for non-structural cracks in concrete and masonry surfaces.",
    price: 108,
    image:
      "https://api-catalog.owncart.shop/uploads/images/ULBA-0z0gR-crackstop.png",
    rating: 4.6,
    isBestseller: true,
    category: "crack-filling",
  },
  {
    id: 2,
    name: "BD Crackstop X",
    description:
      "Enhanced crack filling compound for wider and deeper cracks with improved bonding properties.",
    price: 350,
    image:
      "https://api-catalog.owncart.shop/uploads/images/TqkyRNGazA-crackstop%20x.png",
    rating: 4.8,
    isBestseller: true,
    category: "crack-filling",
  },
  {
    id: 3,
    name: "BD Crackstop XP",
    description:
      "Premium crack filling solution with advanced polymer technology for structural cracks and movement joints.",
    price: 460,
    image:
      "https://api-catalog.owncart.shop/uploads/images/SQx0nBnkTn-crackstop%20xp.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "crack-filling",
  },
  {
    id: 4,
    name: "BD Crackstop Fibre",
    description:
      "Fiber-reinforced crack filling compound for improved tensile strength and crack resistance.",
    price: 110,
    image:
      "https://api-catalog.owncart.shop/uploads/images/3fgFCzVgWX-crackstop%20fibre.png",
    rating: 4.5,
    isBestseller: false,
    category: "crack-filling",
  },
  {
    id: 5,
    name: "BD Crackstop Mesh",
    description:
      "Specialized crack repair mesh system for large structural cracks, used with other crack stop products.",
    price: 480,
    image:
      "https://api-catalog.owncart.shop/uploads/images/GHTsw1d7l1-crackstop%20mesh.png",
    rating: 4.7,
    isBestseller: false,
    category: "crack-filling",
  },

  // Waterproofing Category
  {
    id: 6,
    name: "BD Aquaseal Tank Guard",
    description:
      "Specialized waterproofing solution for water tanks and storage units, food-grade safe with anti-bacterial properties.",
    price: 1320,
    image:
      "https://api-catalog.owncart.shop/uploads/images/BniyHnRtRw-aqua%20seal%20tank%20guard.png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
  },
  {
    id: 7,
    name: "BD Instant Stop",
    description:
      "Rapid-setting waterproof plug for active water leaks and seepages, hardening in minutes.",
    price: 165,
    image:
      "https://api-catalog.owncart.shop/uploads/images/H3GLOXLHnb-INSTANT%20STOP.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
  },

  // Thermal Insulation Category
  {
    id: 8,
    name: "BD Termoshield Coat",
    description:
      "Advanced thermal insulation coating that reduces indoor temperature by reflecting solar radiation. Energy-efficient solution for roofs and exterior walls.",
    price: 3340,
    image:
      "https://api-catalog.owncart.shop/uploads/images/xUUJUUuOEr-Thermo%20Sheild%20Coat.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "thermal-insulation",
  },

  // Tapes Category
  {
    id: 9,
    name: "BD Sealtape SA",
    description:
      "Self-adhesive sealing tape for joints, edges, and connections in waterproofing applications. High flexibility and durability.",
    price: 510,
    image:
      "https://api-catalog.owncart.shop/uploads/images/JadX8gi2-a-SEAL%20TAPE%20SA.png",
    rating: 4.6,
    isBestseller: false,
    category: "tapes",
  },

  // Bonding Agents Category
  {
    id: 10,
    name: "BD Concrete Bond",
    description:
      "High-performance bonding agent for connecting new concrete to existing surfaces. Improves adhesion and prevents delamination.",
    price: 1258,
    image:
      "https://api-catalog.owncart.shop/uploads/images/DyQRa8nuqu-CONCRETE%20BOND.png",
    rating: 4.7,
    isBestseller: false,
    category: "bonding-agents",
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
      "Professional-grade chemical anchoring system for heavy-duty fixings in concrete and masonry. High load capacity and rapid setting.",
    price: 700,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Bq5FKgu299-NUNGURAM%20ANCHORFIX.png",
    rating: 4.8,
    isBestseller: false,
    isNew: true,
    category: "grouts-anchors",
  },

  // Tiling Aids Category
  {
    id: 13,
    name: "BD Tile Joint Sealer Plus",
    description:
      "Premium grout sealer for tile joints with enhanced water repellency and stain resistance. Ideal for bathroom and kitchen applications.",
    price: 1386,
    image:
      "https://api-catalog.owncart.shop/uploads/images/7NG3j6WZ6x-tile%20joint%20Sealer%20PLUS.png",
    rating: 4.7,
    isBestseller: true,
    category: "tiling-aids",
  },
  {
    id: 14,
    name: "BD Tilejoint Sealer",
    description:
      "Standard grout sealer providing protection against water and stains in tile joints.",
    price: 103,
    image:
      "https://api-catalog.owncart.shop/uploads/images/TbsyvK-SGw-tile%20joint%20Sealer.png",
    rating: 4.5,
    isBestseller: false,
    category: "tiling-aids",
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
      "Polyurethane-based flexible sealant for structural joints and expansion areas with excellent weather resistance.",
    price: 850,
    image:
      "https://api-catalog.owncart.shop/uploads/images/ORuBOVRTxC-SEAL%20PU.png",
    rating: 4.7,
    isBestseller: false,
    category: "sealants",
  },
  {
    id: 18,
    name: "BD Seal AC",
    description:
      "Acrylic-based sealant for interior applications with excellent adhesion to various building materials.",
    price: 720,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Vk4Ozj-5er-SEAL%20AC.png",
    rating: 4.6,
    isBestseller: false,
    category: "sealants",
  },
  // Waterproofing Category
  {
    id: 19,
    name: "BD Dampstop XW",
    description:
      "Advanced damp-proofing solution for walls and foundations with excellent moisture barrier properties.",
    price: 1450,
    image:
      "https://api-catalog.owncart.shop/uploads/images/Y6BQj_tjwU-BD%20DAMPSTOP%20XW.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 20,
    name: "Aqua Seal P",
    description:
      "Premium waterproofing coating for exterior walls and surfaces with superior weather resistance.",
    price: 1680,
    image:
      "https://api-catalog.owncart.shop/uploads/images/FRdbGeLtr7-AQUA%20SEAL%20P%20(1).png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
  },
  // Admixtures Category
  {
    id: 21,
    name: "BD Concrete Power",
    description:
      "High-performance concrete admixture that enhances strength, workability, and durability of concrete mixes.",
    price: 890,
    image:
      "https://api-catalog.owncart.shop/uploads/images/-yl6fsrrqj-concrete%20power.png",
    rating: 4.7,
    isBestseller: false,
    category: "admixtures",
  },
  {
    id: 22,
    name: "BD Plaster Power",
    description:
      "Advanced plastering admixture that improves workability, bond strength, and crack resistance in plaster applications.",
    price: 720,
    image:
      "https://api-catalog.owncart.shop/uploads/images/sAsplyu-l7-plaster%20power.png",
    rating: 4.6,
    isBestseller: false,
    category: "admixtures",
  },
  // Corrosion Treatments Category
  {
    id: 23,
    name: "BD Corroshield CR",
    description:
      "Advanced corrosion protection system for steel reinforcement in concrete structures exposed to chloride attack.",
    price: 1350,
    image:
      "https://api-catalog.owncart.shop/uploads/images/PyK8cch1iE-corrosheild%20cr.png",
    rating: 4.8,
    isBestseller: false,
    category: "corrosion-treatments",
  },
  {
    id: 24,
    name: "BD Termite Stop X",
    description:
      "Effective termite protection system for wooden structures and building foundations with long-lasting action.",
    price: 890,
    image:
      "https://api-catalog.owncart.shop/uploads/images/PSPQNPLNVo-termite%20stop%20x.png",
    rating: 4.7,
    isBestseller: false,
    category: "special-products",
  },

  // Additional Waterproofing Products
  {
    id: 25,
    name: "BD Wall Shield",
    description:
      "Protective waterproofing coating for exterior and interior walls against moisture penetration and weathering.",
    price: 1580,
    image:
      "https://api-catalog.owncart.shop/uploads/images/-Zazf_NSk8-wall%20shield.png",
    rating: 4.6,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 26,
    name: "BD Garden Guard",
    description:
      "Specialized waterproofing solution for garden areas, planters, and landscaped terraces with plant-safe formula.",
    price: 1420,
    image:
      "https://api-catalog.owncart.shop/uploads/images/_m4NEI6aEf-bd%20garden%20guard.png",
    rating: 4.5,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 27,
    name: "BD Aqua Seal Nano",
    description:
      "Nano-technology based waterproofing solution with superior penetration and long-lasting protection.",
    price: 2150,
    image:
      "https://api-catalog.owncart.shop/uploads/images/qDFXlkVuE6-aqua%20seal%20nano.png",
    rating: 4.8,
    isBestseller: true,
    category: "waterproofing",
  },
  {
    id: 28,
    name: "BD Aquaseal 2K",
    description:
      "Two-component waterproofing system for heavy-duty applications with excellent chemical resistance.",
    price: 2840,
    image:
      "https://api-catalog.owncart.shop/uploads/images/l9ScEIv3GE-aqua%20seal%20sk.png",
    rating: 4.9,
    isBestseller: true,
    category: "waterproofing",
  },
  {
    id: 29,
    name: "BD Aquaseal Crystalline",
    description:
      "Crystalline waterproofing technology that penetrates concrete to form permanent waterproof barrier.",
    price: 3250,
    image:
      "https://api-catalog.owncart.shop/uploads/images/C2UWKBVdsN-aqua%20seal%20crystalline.png",
    rating: 4.9,
    isBestseller: false,
    isNew: true,
    category: "waterproofing",
  },
  {
    id: 30,
    name: "BD Leakshield White",
    description:
      "White elastomeric waterproof coating for terraces and roofs with excellent UV resistance and reflectivity.",
    price: 2480,
    image:
      "https://api-catalog.owncart.shop/uploads/images/0yV7Lo60XQ-leaksheild.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 31,
    name: "BD Building All Rounder",
    description:
      "Versatile waterproofing solution suitable for various building surfaces including concrete, masonry, and metal.",
    price: 1890,
    image:
      "https://api-catalog.owncart.shop/uploads/images/w9jwxBL3Yr-building-doctor-all-rounder.png",
    rating: 4.6,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 32,
    name: "BD Damp Stop",
    description:
      "Effective damp-proofing treatment for walls and foundations to prevent moisture-related damage.",
    price: 1180,
    image:
      "https://api-catalog.owncart.shop/uploads/images/l0B1EiR4uD-Dampstop.png",
    rating: 4.5,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 33,
    name: "BD Damp Stop X",
    description:
      "Enhanced damp-proofing solution with superior penetration and long-lasting moisture protection.",
    price: 1650,
    image:
      "https://api-catalog.owncart.shop/uploads/images/X3gelosNH8-BD%20Damp%20stop%20x.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
  },

  // Additional Corrosion Treatment Products
  {
    id: 34,
    name: "BD Corroshield ZR",
    description:
      "Zinc-rich corrosion protection primer for steel reinforcement with cathodic protection properties.",
    price: 1580,
    image:
      "https://api-catalog.owncart.shop/uploads/images/rJVJCKnNSg-corrosheild%20zr.png",
    rating: 4.6,
    isBestseller: false,
    category: "corrosion-treatments",
  },
  {
    id: 35,
    name: "BD Corroshield RCR",
    description:
      "Rapid corrosion repair system for emergency treatment of corroded reinforcement steel.",
    price: 2150,
    image:
      "https://api-catalog.owncart.shop/uploads/images/uMPLWkcBOE-corrosheild%20rcr.png",
    rating: 4.8,
    isBestseller: false,
    category: "corrosion-treatments",
  },

  // Additional Waterproofing Products
  {
    id: 36,
    name: "BD Protectcoat BW500",
    description:
      "Bituminous waterproofing coating for basements and below-grade structures with excellent adhesion.",
    price: 1780,
    image:
      "https://api-catalog.owncart.shop/uploads/images/A5_B6m0qBY-bd%20protect%20coat%20bw500.png",
    rating: 4.5,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 37,
    name: "BD Protectcoat CT600",
    description:
      "Cement-based waterproofing coating for positive and negative side applications on concrete structures.",
    price: 1950,
    image:
      "https://api-catalog.owncart.shop/uploads/images/dAH-Ut6N3z-bd%20protect%20coat%20ct600.png",
    rating: 4.6,
    isBestseller: false,
    category: "waterproofing",
  },
  {
    id: 38,
    name: "BD Aquaseal Magic PU",
    description:
      "Single-component polyurethane waterproofing membrane with self-leveling properties for terraces.",
    price: 3150,
    image:
      "https://api-catalog.owncart.shop/uploads/images/37_Ng5HkjE-aqua%20seal%20magic%20pu.png",
    rating: 4.9,
    isBestseller: true,
    category: "waterproofing",
  },
  {
    id: 39,
    name: "BD Leakshield Terracotta",
    description:
      "Advanced leak protection waterproofing solution in terracotta color, providing innovative protection for lasting durability of structures.",
    price: 3090,
    image:
      "https://api-catalog.owncart.shop/uploads/images/0yV7Lo60XQ-leaksheild.png",
    rating: 4.7,
    isBestseller: false,
    category: "waterproofing",
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
