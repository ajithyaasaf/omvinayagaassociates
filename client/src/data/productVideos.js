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