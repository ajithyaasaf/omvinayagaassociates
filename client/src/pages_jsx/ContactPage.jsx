import { useEffect, useState } from "react";
import { CONTACT, SOCIAL_MEDIA } from "@/data/company";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | OM Vinayaga Associates";
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the processing of your personal data.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await apiRequest("POST", "/api/contacts", formData);

      const responseData = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you shortly!",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false
        });
      } else {
        // Check for validation errors from the server
        if (responseData.errors && responseData.errors.length > 0) {
          throw {
            message: responseData.errors[0].message || responseData.message || "Validation error",
            response: { data: responseData }
          };
        } else {
          throw new Error(responseData.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);

      let errorMessage = "Failed to send your message. Please try again.";

      // Handle error response with validation errors
      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        if (validationErrors.length > 0) {
          errorMessage = validationErrors[0].message || errorMessage;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Form Validation Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="bg-[#2b4c7e] py-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 font-medium">
              Reach out to our experts for consultations, quotes, or to schedule a site visit
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="font-montserrat font-bold text-lg md:text-xl mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium mb-3">Our Locations</h4>
                    {CONTACT.locations.map((location) => (
                      <div key={location.id} className="border-l-3 border-primary/40 pl-4 py-3 bg-gray-100/50 rounded-r-lg">
                        <p className="text-xs text-primary font-semibold mb-2">
                          {location.area}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {location.address}
                        </p>
                        <div className="flex items-center">
                          <Phone className="text-primary mr-2" size={14} strokeWidth={2.5} />
                          <a
                            href={`tel:${location.phone.replace(/\s+/g, "")}`}
                            className="text-primary hover:text-primary/80 transition text-sm font-medium"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition">
                        {CONTACT.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-600">{CONTACT.workingHours}</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_MEDIA.facebook}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} strokeWidth={2.5} />
                  </a>
                  <a
                    href={SOCIAL_MEDIA.twitter}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} strokeWidth={2.5} />
                  </a>
                  <a
                    href={SOCIAL_MEDIA.instagram}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={2.5} />
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-green-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-montserrat font-bold text-xl mb-6">Send Us A Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="structural-repairs">Structural Repairs</option>
                      <option value="sealants">Sealants & Adhesives</option>
                      <option value="waterproof-coatings">Waterproof Coatings</option>
                      <option value="construction-chemicals">Construction Chemicals</option>
                      <option value="technical-consultation">Technical Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your building problem or requirements (min. 10 characters)"
                    required
                    minLength={10}
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.message.length < 10 ?
                      `Please enter at least ${10 - formData.message.length} more character${10 - formData.message.length === 1 ? '' : 's'}` :
                      '✓ Message length valid'}
                  </p>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the processing of my personal data to receive communications about products and services.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition w-full md:w-auto disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Maps Section with Tabs */}
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b">
              <div className="flex">
                {CONTACT.locations.map((location) => (
                  <button
                    key={location.id}
                    className={`flex-1 px-6 py-4 font-medium transition ${selectedLocation === location.id
                      ? 'border-b-2 border-primary text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{location.area}</div>
                      <div className="text-sm opacity-75">{location.phone}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="h-96">
                {selectedLocation === 1 ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9!2d78.123!3d9.936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnMTAuMyJOIDc4wrAwNycyMi44IkU!5e0!3m2!1sen!2sin!4v1684758905019!5m2!1sen!2sin&q=No.6,+North+Gate,+Opp.Devaki+Scan,+Near+Balaji+Gas,+S.S+Colony,+Madurai+-625016"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OM Vinayaga Associates - S.S Colony Location"
                  ></iframe>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7!2d78.134!3d9.933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTkuMCJOIDc4wrAwOCcwMi40IkU!5e0!3m2!1sen!2sin!4v1684758905020!5m2!1sen!2sin&q=Door+No.+131,+Shop+No.+12,+Kallazhagar+Complex,+Thallakulam+Main+Road,+Madurai"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OM Vinayaga Associates - Thallakulam Location"
                  ></iframe>
                )}
              </div>
              <div className="absolute bottom-4 right-4">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT.locations.find(loc => loc.id === selectedLocation)?.address || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition shadow-lg flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">Need Immediate Assistance?</h2>
              <p className="text-gray-600 mb-8">Our expert team is ready to help you with urgent building issues. Connect with us directly.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${CONTACT.phone[0].replace(/\s+/g, '')}`}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center"
                >
                  <Phone className="mr-2" size={18} strokeWidth={2.5} /> Call Now
                </a>
                <a
                  href={CONTACT.whatsapp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;