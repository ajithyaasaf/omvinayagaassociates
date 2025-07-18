// Central configuration for product videos
// Easy to manage all video links and benefits in one place

export const PRODUCT_VIDEOS = {
  // Paint Remover 500 Video Configuration
  "BD Paint Remover 500": {
    videoId: "LHJzA-gFEs8",
    benefits: [
      "Effective paint removal without surface damage",
      "Reduces labor and time in renovation projects", 
      "Easy application and user-friendly process",
      "Compatible with various surfaces and paint types"
    ]
  },
  
  // Tile Clean Master Video Configuration
  "BD Tile Clean Master": {
    videoId: "uXBlYJAL9xo", // YouTube shorts ID from the provided link
    benefits: [
      "Removes tough stains and cement residue effectively",
      "Preserves tile color and shine during cleaning",
      "Restores tiles to brand new appearance",
      "Safe for tiles and grout without damage"
    ]
  },
  
  // BD Plaster Bond Booster Video Configuration
  "BD PLASTER BOND BOOSTER": {
    videoId: "Lq2e5-gQ0ek", // YouTube video ID from the provided link
    benefits: [
      "Prevents water leakage effectively",
      "Repairs damaged areas with strong bonding",
      "Prevents old iron rods from rusting as compound",
      "Ideal for laying ground floors and structural work"
    ]
  },
  
  // BD Concrete Bond Video Configuration
  "BD Concrete Bond": {
    videoId: "pqB-SAB-8SM", // YouTube shorts ID from the provided link
    benefits: [
      "Improves the bond between new and old concrete",
      "Prevents water leakage in concrete joints",
      "Prevents explosions in structural applications",
      "Two-part solvent-free bonding system for reliability"
    ]
  },
  
  // BD Nanguram Anchor Fix Video Configuration
  "BD Nanguram Anchor Fix": {
    videoId: "D5qV43nogwU", // YouTube shorts ID from the provided link
    benefits: [
      "Exceptionally rapid strength development",
      "Resistance to dynamic loading for structural integrity",
      "Moisture resistant for long-lasting performance",
      "Exceptional bond to concrete and steel surfaces"
    ]
  },
  
  // BD Seal PU Video Configuration
  "BD Seal PU": {
    videoId: "_-YKBUJRE2w", // YouTube video ID from the provided link
    benefits: [
      "Ready to use single pack reduces mixing failures",
      "Cures by moisture absorption without external curing",
      "Excellent adhesion to concrete, brick, wood, glass and metals",
      "Weather-durable with permanent tough rubber seal"
    ]
  },
  
  // BD Seal AC Video Configuration
  "BD Seal AC": {
    videoId: "_-YKBUJRE2w", // YouTube video ID from the provided link
    benefits: [
      "Single component ready for use application",
      "10% movement accommodation factor for flexibility",
      "Excellent adhesion to most building substrates",
      "UV resistant for long-lasting exterior performance"
    ]
  },
  
  // BD Termite Stop X Video Configuration
  "BD Termite Stop X": {
    videoId: "_RKhbRl2Jcc", // YouTube shorts ID from the provided link
    benefits: [
      "Protects and prevents from termite attack effectively",
      "Ready to use with no license required for storage",
      "Non-hazardous chemicals for safe application",
      "Mixes with oil based paints and primers for versatility"
    ]
  },
  
  // BD Sealtape SA Video Configuration
  "BD Sealtape SA": {
    videoId: "qh1cf9POk8Q", // YouTube video ID from the provided link
    benefits: [
      "No messy surface with easy and quick application",
      "Economical solution for waterproofing and sealing",
      "Sticks to most HDPE, PP or any substance effectively",
      "Self-adhesive with good UV resistance and weathering properties"
    ]
  },
  
  // BD Termoshield Coat Video Configuration
  "BD Termoshield Coat": {
    videoId: "Jg_RWndFmeM", // YouTube shorts ID from the provided link
    benefits: [
      "Excellent weathering properties with UV resistance",
      "Forms flexible film with excellent bond strength",
      "Reduces surface temperature by 15-20% of ambient air temperature",
      "Effective waterproofing with thermal insulation properties"
    ]
  },
  
  // Add more products as needed
  // "BD Product Name": {
  //   videoId: "YOUTUBE_VIDEO_ID",
  //   benefits: [
  //     "Benefit 1",
  //     "Benefit 2", 
  //     "Benefit 3",
  //     "Benefit 4"
  //   ]
  // }
};

// Helper function to get video config for a product
export const getVideoConfig = (productName) => {
  return PRODUCT_VIDEOS[productName] || null;
};

// Helper function to check if a product has video
export const hasVideo = (productName) => {
  return !!PRODUCT_VIDEOS[productName];
};