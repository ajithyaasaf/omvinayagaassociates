import { useEffect } from "react";
import { Link } from "wouter";
import { CONTACT, STATS, DIRECTORS } from "@/lib/constants";
import directorImage from "@/assets/jeyaram.jpg";
import drKamaleeswariImage from "@/assets/dr_kamaleeswari.jpg";
import buildingDoctorIcon from "@/assets/building-doctor-icon.png";
import {
  FaSearch,
  FaClipboardList,
  FaTools,
  FaAward,
  FaEnvelope,
  FaDraftingCompass,
  FaHeadset
} from "react-icons/fa";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | OM Vinayaga Associates";
  }, []);

  return (
    <div className="pt-24">
      <section className="bg-[#2b4c7e] py-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              About Us
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-200 font-medium">
              Building Doctor Franchise in Madurai - Your trusted partner for
              building repairs
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary bg-opacity-10 rounded-full mb-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Our Story
                </p>
              </div>
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                Building Trust Through{" "}
                <span className="text-primary">Quality Solutions</span>
              </h2>
              <p className="text-gray-600 mb-4">
                OM Vinayaga Associates was established as an authorized
                franchise of Building Doctor with a mission to provide
                professional building repair and maintenance solutions to
                Madurai and surrounding areas.
              </p>
              <p className="text-gray-600 mb-6">
                Led by {CONTACT.director}, our team combines technical expertise
                with a customer-first approach to deliver exceptional results.
                We have successfully completed over 2000 projects, helping both
                residential and commercial property owners address their
                building repair needs.
              </p>

              <div className="grid grid-cols-2 gap-6 my-8">
                {STATS.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white p-4 rounded-lg shadow text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-4 rounded-xl shadow-xl relative z-20 overflow-hidden">
                <img
                  src={buildingDoctorIcon}
                  alt={CONTACT.director}
                  className="w-full h-[400px] rounded-lg object-contain bg-gray-100"
                />
              </div>
              <div className="absolute top-8 -right-8 w-72 h-72 bg-primary rounded-full opacity-10 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[#2b4c7e] rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary bg-opacity-10 rounded-full mb-3">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                Our Approach
              </p>
            </div>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600">
              We believe in providing comprehensive solutions that address the
              root causes of building problems, not just their symptoms. Our
              methodical approach ensures long-lasting results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaSearch className="text-primary text-xl" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">
                1. Thorough Assessment
              </h3>
              <p className="text-gray-600">
                We conduct detailed inspections to identify the underlying
                causes of building issues, ensuring our solutions address the
                root problems rather than just the symptoms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaClipboardList className="text-primary text-xl" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">
                2. Customized Solutions
              </h3>
              <p className="text-gray-600">
                Every building is unique. We develop tailored solutions that
                consider your specific requirements, building conditions, and
                budget constraints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaTools className="text-primary text-xl" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">
                3. Quality Implementation
              </h3>
              <p className="text-gray-600">
                Our trained applicators use premium quality products and follow
                industry best practices to ensure high-quality workmanship and
                durable results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary bg-opacity-10 rounded-full mb-3">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Leadership
              </p>
            </div>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6">
              Meet Our Directors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our company is led by experienced directors who bring diverse
              expertise in business development, education, and technical
              engineering to deliver exceptional building repair and maintenance
              solutions.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Directors Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DIRECTORS.map((director, index) => (
                <div
                  key={director.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="bg-primary p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-16 -ml-16"></div>

                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 mb-4 rounded-full mx-auto relative overflow-hidden border-4 border-white/30">
                        <img
                          src={
                            index === 0 ? drKamaleeswariImage : directorImage
                          }
                          alt={director.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <h3 className="text-white font-montserrat font-bold text-xl mb-1">
                        {director.name}
                      </h3>
                      <p className="text-white/80 font-medium text-sm mb-2">
                        {director.title}
                      </p>
                      {director.credentials && (
                        <p className="text-white/70 text-xs mb-4">
                          {director.credentials}
                        </p>
                      )}

                      <div className="w-16 h-1 bg-white/50 mx-auto"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {director.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm">
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {director.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-montserrat font-semibold text-gray-800 mb-2 text-sm">
                          Key Achievements
                        </h4>
                        <ul className="text-gray-600 text-xs space-y-1">
                          {director.awards.slice(0, 3).map((award, i) => (
                            <li key={i} className="flex items-start">
                              <FaAward className="text-primary mr-2 mt-1 text-xs" />
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                <FaEnvelope className="mr-2" /> Get in Touch with Our
                Team
              </Link>
            </div>

            {/* Team Specialties */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <FaTools className="text-2xl" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  Technical Specialists
                </h3>
                <p className="text-gray-600">
                  Our team of technical specialists brings extensive knowledge
                  in waterproofing, structural repairs, and building
                  diagnostics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <FaDraftingCompass className="text-2xl" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  Repair Consultants
                </h3>
                <p className="text-gray-600">
                  Experienced consultants who assess building conditions and
                  develop customized solutions for long-lasting results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <FaHeadset className="text-2xl" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600">
                  Dedicated support staff ensuring excellent communication and
                  service throughout your project lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Our Building Doctor Franchise
            </h2>
            <p className="text-gray-600 mb-8">
              Being a part of the Building Doctor network enables us to bring
              the latest technologies and proven solutions to Madurai. We
              combine the national expertise of Building Doctor with our local
              understanding to provide superior services.
            </p>
            <div className="aspect-video w-full mb-8 bg-gray-200 rounded-xl"></div>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
