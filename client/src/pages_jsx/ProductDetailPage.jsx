import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Import PRODUCTS array from ProductsPage for direct access
// This ensures we can access product details without API calls
import { PRODUCTS } from "./ProductsPage"; // All products hardcoded in ProductsPage

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

  // Show video popup after 3 seconds for Paint Remover 500
  useEffect(() => {
    if (product && product.name.includes('Paint Remover 500')) {
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
            <Link href="/">
              <a className="text-gray-600 hover:text-primary">Home</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products">
              <a className="text-gray-600 hover:text-primary">Products</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
              {product.isBestseller && (
                <div className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1 rounded z-10">BESTSELLER</div>
              )}
              {product.isNew && (
                <div className="absolute top-4 right-4 bg-green-600 text-white text-sm px-3 py-1 rounded z-10">NEW</div>
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
                      <i 
                        key={i}
                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      ></i>
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
                      <i className="fas fa-check text-primary text-sm"></i>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                )) : (
                  <>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <i className="fas fa-check text-primary text-sm"></i>
                      </div>
                      <p className="text-gray-700">Effectively prevents water leakage</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <i className="fas fa-check text-primary text-sm"></i>
                      </div>
                      <p className="text-gray-700">Superior bonding and durability</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <i className="fas fa-check text-primary text-sm"></i>
                      </div>
                      <p className="text-gray-700">Easy application with brush or roller</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <i className="fas fa-check text-primary text-sm"></i>
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

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <i className="fas fa-shopping-cart mr-2"></i> Request Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <i className="fas fa-download mr-2"></i> Download Specifications
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-info-circle text-primary mr-2"></i>
                <h4 className="font-semibold">Need technical assistance?</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">Our experts can help you select the right product and provide application guidance.</p>
              <Link href="/contact">
                <a className="text-primary font-medium text-sm hover:underline">
                  Contact our technical team <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex">
              <button 
                onClick={() => setActiveTab('description')}
                className={`py-3 px-6 border-b-2 font-medium ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('specifications')}
                className={`py-3 px-6 border-b-2 font-medium ${activeTab === 'specifications' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('application')}
                className={`py-3 px-6 border-b-2 font-medium ${activeTab === 'application' ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
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
                
                {product.applications && (
                  <>
                    <h3 className="text-primary mt-6">🏗️ Application Areas</h3>
                    <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                      <strong>Suitable for:</strong> {product.applications.join(', ')}.
                    </p>
                  </>
                )}
                
                {!product.applications && (
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
                
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-orange-800">Product Properties</h4>
                  <ul className="space-y-1 mt-2">
                    <li>• Type: {product.name.includes('Paint Remover') ? 'Solvent-based, Non-flammable' : 'Chemical resistant coating'}</li>
                    <li>• Form: {product.name.includes('Paint Remover') ? 'Liquid' : 'Paste/Liquid'}</li>
                    <li>• Application: {product.name.includes('Paint Remover') ? 'Brush or spray' : 'Brush, roller, or spray'}</li>
                    <li>• Shelf Life: 12 months from manufacturing date</li>
                  </ul>
                </div>
              </>
            )}

            {activeTab === 'application' && (
              <>
                <h3 className="text-primary">🔧 Application Method</h3>
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

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary mb-2">🎥 Watch Application Video</h4>
                  <p className="text-gray-700 mb-3">See step-by-step application process and professional tips for best results.</p>
                  <button 
                    onClick={() => setShowVideoPopup(true)}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <i className="fab fa-youtube mr-2"></i>
                    View Product Application Video
                  </button>
                </div>
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
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <span className="text-sm ml-1">{relProduct.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{relProduct.description.substring(0, 60)}...</p>
                    <div className="flex justify-end items-center">
                      <Link href={`/products/${relProduct.id}`}>
                        <a className="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded text-sm transition">
                          View Details
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Popup Modal */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">How BD Paint Remover 500 Works</h3>
              <button
                onClick={() => setShowVideoPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RUaBBkE69E0?autoplay=1"
                  title="BD Paint Remover 500 Application Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 mb-4">
                  Watch how BD Paint Remover 500 effectively removes paint coatings with its quick-action formula.
                </p>
                <button
                  onClick={() => setShowVideoPopup(false)}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;