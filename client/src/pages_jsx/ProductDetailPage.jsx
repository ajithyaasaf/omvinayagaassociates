import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import VideoModal from "@/components/VideoModal";
import { getVideoConfig, hasVideo } from "@/data/productVideos";

// Import PRODUCTS array from ProductsPage for direct access
// This ensures we can access product details without API calls
import { PRODUCTS } from "./ProductsPage"; // All products hardcoded in ProductsPage
import {
  FaStar,
  FaCheck,
  FaInfoCircle,
  FaArrowRight,
  FaTools,
  FaCheckCircle,
  FaYoutube
} from "react-icons/fa";

const ProductDetailPage = () => {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id;
  const { toast } = useToast();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    document.title = product ? `${product.name} | OM Vinayaga Associates` : "Product Details | OM Vinayaga Associates";
  }, [product]);

  // Show video popup after 3 seconds for products with video
  useEffect(() => {
    if (product && hasVideo(product.name)) {
      const timer = setTimeout(() => {
        setShowVideoPopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [product]);

  useEffect(() => {
    // Using hardcoded data instead of API call
    const loadProductDetails = () => {
      if (!productId) return;

      setIsLoading(true);

      try {
        // Find product by ID in our local PRODUCTS array
        const foundProduct = PRODUCTS.find(p => p.id === parseInt(productId));

        if (foundProduct) {
          setProduct(foundProduct);

          // Find related products from the same category
          const related = PRODUCTS
            .filter(p => p.category === foundProduct.category && p.id !== parseInt(productId))
            .slice(0, 4);

          setRelatedProducts(related);
        } else {
          toast({
            title: "Error",
            description: "Product not found",
            variant: "destructive"
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load product details",
          variant: "destructive"
        });
        console.error("Error loading product details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductDetails();
  }, [productId, toast]);

  if (isLoading) {
    return (
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="h-96 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist or has been removed.</p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90">Browse All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Find category name
  const category = PRODUCT_CATEGORIES.find(cat => cat.id === product.category);

  return (
    <div className="pt-28 pb-16">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
              {product.isBestseller && (
                <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded z-10">BESTSELLER</div>
              )}
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded z-10">NEW</div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {category?.name || product.category}
                </span>
                <div className="flex items-center ml-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">{product.name}</h1>
              {product.subtitle && (
                <p className="text-lg text-gray-800 font-medium mb-2">{product.subtitle}</p>
              )}
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            {/* Package Sizes */}
            {product.packageSizes && (
              <div className="border-t border-b py-4 my-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">📦 Available Package Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.packageSizes.map((pkg, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">{pkg.size}</span>
                      <span className="text-primary font-bold">₹{pkg.price}</span>
                    </div>
                  ))}
                </div>
                {product.coverage && (
                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Coverage Area:</strong> {product.coverage}
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            <div className="border-t border-b py-4 my-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">⭐ Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features ? product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <FaCheck className="text-primary text-sm" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                )) : (
                  <>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <FaCheck className="text-primary text-sm" />
                      </div>
                      <p className="text-gray-700">Effectively prevents water leakage</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <FaCheck className="text-primary text-sm" />
                      </div>
                      <p className="text-gray-700">Superior bonding and durability</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <FaCheck className="text-primary text-sm" />
                      </div>
                      <p className="text-gray-700">Easy application with brush or roller</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <FaCheck className="text-primary text-sm" />
                      </div>
                      <p className="text-gray-700">UV resistant and weatherproof</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Applications Area */}
            {product.applications && (
              <div className="border-t border-b py-4 my-6">
                <h3 className="font-semibold text-lg mb-4 text-primary">🏗️ Area of Application</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}



            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FaInfoCircle className="text-primary mr-2" />
                <h4 className="font-semibold">Need technical assistance?</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Our experts can help you select the right product and provide application guidance.</p>
              <Link href="/contact" className="text-primary font-medium text-sm hover:underline flex items-center">
                Contact our technical team <FaArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-3 px-4 md:px-6 border-b-2 font-medium text-sm md:text-base whitespace-nowrap flex-shrink-0 ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-3 px-4 md:px-6 border-b-2 font-medium text-sm md:text-base whitespace-nowrap flex-shrink-0 ${activeTab === 'specifications' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('application')}
                className={`py-3 px-4 md:px-6 border-b-2 font-medium text-sm md:text-base whitespace-nowrap flex-shrink-0 ${activeTab === 'application' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                Application Guide
              </button>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            {activeTab === 'description' && (
              <>
                <h3 className="text-primary">📋 Product Description</h3>
                <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <strong>Description:</strong> {product.fullDescription || product.description}
                </p>

                {product.name.includes('Paint Remover') && (
                  <>
                    <h3 className="text-primary mt-6">🏗️ Key Benefits in Renovation Projects</h3>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Effective Paint Removal:</strong> Efficiently strips paint from various surfaces, simplifying renovation and reducing labor time.</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Surface Preservation:</strong> Removes paint without damaging the underlying surface, maintaining material integrity.</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Ease of Application:</strong> User-friendly application process that saves time and effort during renovation.</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Compatibility:</strong> Suitable for different surfaces and paint types, making it versatile for various renovation needs.</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Clean Process:</strong> Leads to cleaner work environments with less mess and fewer hazardous chemicals.</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-sm text-green-800"><strong>Surface Preparation:</strong> Prepares surfaces effectively for repainting, ensuring better adhesion and appearance.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {product.applications && (
                  <>
                    <h3 className="text-primary mt-6">🏗️ Application Areas</h3>
                    <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                      <strong>Suitable for:</strong> {product.applications.join(', ')}.
                    </p>
                  </>
                )}

                {!product.applications && !product.name.includes('Paint Remover') && (
                  <>
                    <h3 className="text-primary mt-6">📋 Application Areas</h3>
                    <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                      <strong>Suitable for:</strong> Terraces, water tanks, sunken slabs, balconies, swimming pools, podiums,
                      concrete structures, natural stones, and all types of surfaces requiring waterproof protection.
                    </p>
                  </>
                )}
              </>
            )}

            {activeTab === 'specifications' && (
              <>
                <h3 className="text-primary">📦 Technical Specifications</h3>

                {product.packageSizes && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Package Sizes & Rates</h4>
                    {product.packageSizes.map((pkg, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span>{pkg.size}</span>
                        <span className="font-bold">₹{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {product.coverage && (
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800">Coverage Area</h4>
                    <p>{product.coverage}</p>
                  </div>
                )}

                {/* Custom Specifications for specific products */}
                {product.specifications ? (
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Product Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="font-medium">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800">Product Properties</h4>
                    <ul className="space-y-1 mt-2">
                      <li>• Type: {product.name.includes('Paint Remover') ? 'Solvent-based, Non-flammable' : 'Chemical resistant coating'}</li>
                      <li>• Form: {product.name.includes('Paint Remover') ? 'Liquid' : 'Paste/Liquid'}</li>
                      <li>• Application: {product.name.includes('Paint Remover') ? 'Brush or spray' : 'Brush, roller, or spray'}</li>
                      <li>• Shelf Life: 12 months from manufacturing date</li>
                    </ul>
                  </div>
                )}

                {/* Application Tools */}
                {product.applicationTools && (
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-purple-800 mb-2">🛠️ Application Tools Required</h4>
                    <ul className="space-y-1">
                      {product.applicationTools.map((tool, index) => (
                        <li key={index} className="flex items-center">
                          <FaTools className="text-purple-600 text-sm mr-2" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {product.benefits && (
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">✨ Product Benefits</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-green-600 text-sm mr-2 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tamil Benefits */}
                {product.tamilBenefits && (
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">🌟 பயன்கள் (Tamil)</h4>
                    <ul className="space-y-1">
                      {product.tamilBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <FaStar className="text-yellow-600 text-sm mr-2 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {activeTab === 'application' && (
              <>
                <h3 className="text-primary">🔧 Application Method</h3>

                {/* Custom Application Method for specific products */}
                {product.applicationMethod ? (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-3">📋 Step-by-Step Instructions</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {product.applicationMethod.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          <span className="font-medium text-gray-800">Step {index + 1}:</span> {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <ol className="list-decimal list-inside space-y-2">
                      {product.name.includes('Paint Remover') ? (
                        <>
                          <li><strong>Surface Preparation:</strong> Clean the surface to remove loose dirt and debris. Ensure adequate ventilation.</li>
                          <li><strong>Application:</strong> Apply Paint Remover evenly using brush or spray. Allow penetration time as per coating thickness.</li>
                          <li><strong>Removal:</strong> Scrape off softened paint using putty knife or scraper. For stubborn areas, reapply and wait.</li>
                          <li><strong>Cleaning:</strong> Clean the surface with water or appropriate solvent to remove residue.</li>
                        </>
                      ) : (
                        <>
                          <li><strong>Surface Preparation:</strong> Clean thoroughly using wire brush to remove dust, loose particles, moss, and cement droppings. Wash with water and let dry completely.</li>
                          <li><strong>Mixing:</strong> For two-component products, mix Base and Hardener in recommended ratio using mechanical mixer until smooth and homogeneous.</li>
                          <li><strong>Application:</strong> Apply first coat using brush or roller in circular motion. Apply second coat in cross direction after first coat is tacky but not fully dried.</li>
                          <li><strong>Protection:</strong> Cover with cement plaster or tiles after application to protect from direct sunlight and rain.</li>
                        </>
                      )}
                    </ol>
                  </div>
                )}

                {/* Tamil Application Method */}
                {product.tamilApplicationMethod && (
                  <div className="bg-orange-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-3">📋 பயன்படுத்தும் முறை (Tamil Instructions)</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      {product.tamilApplicationMethod.map((step, index) => (
                        <li key={index} className="text-orange-700">
                          <span className="font-medium text-orange-800">படி {index + 1}:</span> {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <h3 className="text-primary mt-6">⚠️ Important Notes</h3>
                <ul className="bg-yellow-50 p-4 rounded-lg space-y-1">
                  {product.name.includes('Paint Remover') ? (
                    <>
                      <li>• Use in well-ventilated area</li>
                      <li>• Wear protective gloves and eyewear</li>
                      <li>• Keep away from heat sources and open flames</li>
                      <li>• Store in cool, dry place away from direct sunlight</li>
                      <li>• Dispose of waste material according to local regulations</li>
                    </>
                  ) : (
                    <>
                      <li>• Allow minimum 12 hours drying time between coats</li>
                      <li>• Do not apply during rain or extreme weather conditions</li>
                      <li>• Store in cool, dry place away from direct sunlight</li>
                      <li>• Use protective equipment during application</li>
                      <li>• Suitable for both positive and negative water pressure applications</li>
                    </>
                  )}
                </ul>

                {hasVideo(product.name) && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2">🎥 Watch Application Video</h4>
                    <p className="text-gray-700 mb-3">See step-by-step application process and professional tips for best results.</p>
                    <button
                      onClick={() => setShowVideoPopup(true)}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      <FaYoutube className="mr-2" />
                      View Product Application Video
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-montserrat font-bold text-2xl mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div key={relProduct.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {relProduct.isBestseller && (
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">BESTSELLER</div>
                    )}
                    {relProduct.isNew && (
                      <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded">NEW</div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-montserrat font-semibold text-lg">{relProduct.name}</h3>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 text-xs" />
                        <span className="text-sm ml-1">{relProduct.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{relProduct.description.substring(0, 60)}...</p>
                    <div className="flex justify-end items-center">
                      <Link href={`/products/${relProduct.id}`} className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded text-sm transition">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoPopup && product && hasVideo(product.name) && (
        <VideoModal
          isOpen={showVideoPopup}
          onClose={() => setShowVideoPopup(false)}
          videoId={getVideoConfig(product.name)?.videoId}
          productName={product.name}
          benefits={getVideoConfig(product.name)?.benefits}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;