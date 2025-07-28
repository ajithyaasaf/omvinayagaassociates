import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Award,
  Trophy,
  Star,
  PlayCircle,
  GraduationCap,
  Users,
  Megaphone,
  Heart,
} from "lucide-react";
// Import award images
import excellenceAward1 from "@/assets/awards/excellence-award-1-new.png";
import excellenceAward2 from "@/assets/awards/excellence-award-2-new.png";
import womenEntrepreneurAward from "@/assets/awards/women-entrepreneur-award-new.png";
import cidcCertificate from "@/assets/awards/cidc-waterproofing-certificate.png";
import maduraiIconicAward from "@/assets/awards/madurai-iconic-award.png";
import radioCityFmInterview from "@/assets/awards/radio-city-fm-interview.png";
import pudhuyugamTvProgram from "@/assets/awards/pudhuyugam-tv-program.png";
import velammalCollegeAward from "@/assets/awards/velammal-college-award.png";
import velammalCollegeLecture from "@/assets/awards/velammal-college-lecture.png";
import fatimaCollege from "@/assets/awards/fatima-college.png";
import mohamedSathakCollege from "@/assets/awards/mohamed-sathak-college.png";
import kakkaipadiniyarSchool from "@/assets/awards/kakkaipadiniyar-school.png";
import nmssvnCollege from "@/assets/awards/nmssvn-college.png";
import mcubeMouPartnership from "@/assets/awards/mcube-mou-partnership.png";
import amcePongalCelebration from "@/assets/awards/amce-pongal-celebration.png";
import diwaliCelebrations from "@/assets/awards/diwali-celebrations.png";
import teamAchievement from "@/assets/team-achievement.png";

const AchievementsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("awards");

  // Major Awards and Recognition
  const majorAwards = [
    {
      title: "Promotion Pioneer of the Year 2025",
      organization: "Building Doctor",
      description:
        "Recognized for outstanding promotional activities and brand building initiatives",
      year: "2025",
      category: "Business Excellence",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200",
    },
    {
      title: "Best Women Entrepreneur 2025",
      recipient: "Dr. SK Kamaleeswari",
      organization: "Building Doctor Madurai",
      description:
        "Outstanding leadership and entrepreneurial excellence in construction industry",
      year: "2025",
      category: "Leadership",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
      image: womenEntrepreneurAward,
      featured: true,
    },
    {
      title: "Excellence in Building Restoration & Water Proofing",
      organization: "Industry Recognition",
      description:
        "Technical excellence and innovation in building restoration services",
      year: "2024",
      category: "Technical Excellence",
      icon: <Star className="w-8 h-8 text-blue-500" />,
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
      images: [excellenceAward1, excellenceAward2],
      featured: true,
    },
    {
      title: "Madurai Iconic Award",
      specialization: "Water Proofing",
      organization: "Radio City FM & Madurai Citizens Awards 2024",
      description:
        "Recognized as an iconic service provider in water proofing solutions for Madurai city",
      year: "2024",
      category: "Regional Recognition",
      icon: <Trophy className="w-8 h-8 text-green-500" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      image: maduraiIconicAward,
      featured: true,
    },
  ];

  // Professional Certifications
  const certifications = [
    {
      title: "Water Proofing and Insulation Certificate",
      organization: "CIDC (Construction Industry Development Council)",
      recipient: "Ramesh J",
      description:
        "Successfully completed Online (Hybrid) Course on Waterproofing and Insulation (3 Weeks) conducted virtually during November, 2024",
      category: "Technical Certification",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      image: cidcCertificate,
      featured: true,
    },
    {
      title: "Best Product Presentation Award",
      organization: "Forum Presentation",
      presenter: "Mr. Nakeeran Gopal",
      description:
        "Excellence in product demonstration and technical presentation",
      category: "Presentation Excellence",
      icon: <Award className="w-6 h-6 text-green-600" />,
    },
  ];

  // Media Coverage and Outreach
  const mediaActivities = [
    {
      title: "Radio City FM Business Talk",
      type: "Radio Interview",
      description:
        "Live telecast discussing Building Doctor services and industry insights with professional interview setup",
      platform: "Radio City FM",
      icon: <Megaphone className="w-6 h-6 text-red-500" />,
      image: radioCityFmInterview,
      featured: true,
    },
    {
      title: "Pudhuyugam TV Program",
      type: "Television Appearance",
      description: "Featured program showcasing building restoration expertise with award ceremony and recognition",
      platform: "Pudhuyugam TV",
      icon: <PlayCircle className="w-6 h-6 text-blue-500" />,
      image: pudhuyugamTvProgram,
      featured: true,
    },
  ];

  // Educational Outreach
  const educationalOutreach = [
    {
      institution: "Velammal Engineering College",
      activity: "Guest Lecture & Recognition",
      department: "Civil Engineering",
      description:
        "Introduced Building Doctor products to first-year Civil Engineering students as part of their syllabus with formal recognition ceremony",
      images: [velammalCollegeAward, velammalCollegeLecture],
      featured: true,
    },
    {
      institution: "Thiyagarajar Engineering College",
      activity: "Principal Meeting & Presentation",
      description:
        "Official meeting with college principal to discuss industry collaboration",
    },
    {
      institution: "Fatima College",
      activity: "Guest Lecture",
      description:
        "Educational presentation on building restoration techniques with faculty engagement",
      image: fatimaCollege,
      featured: true,
    },
    {
      institution: "Mohamed Sathak Engineering College",
      activity: "Guest Lecture",
      department: "Civil Engineering",
      description:
        "Technical presentation on waterproofing solutions to Civil Engineering students and faculty",
      image: mohamedSathakCollege,
      featured: true,
    },
    {
      institution: "Kakkaipadiniyar Govt. Girls Hr. Sec. School",
      activity: "Educational Outreach",
      description:
        "Awareness program on building maintenance and construction safety for high school students",
      image: kakkaipadiniyarSchool,
      featured: true,
    },
    {
      institution: "NMSSVN College",
      activity: "Guest Lecture & Workshop",
      description:
        "Comprehensive program including guest lecture and hands-on workshop on building restoration techniques",
      image: nmssvnCollege,
      featured: true,
    },
    {
      institution: "Mohammed Sathak Polytechnic College",
      activity: "Guest Lecture",
      description:
        "Technical presentation on modern construction repair methods",
    },
    {
      institution: "Kakkaipadiniyar Govt. Girls Hr. Sec. School",
      activity: "Educational Program",
      description:
        "Inspiring young minds about careers in construction and engineering",
    },
    {
      institution: "NMSSVN College",
      activity: "Student Engagement",
      description: "Interactive session with engineering students",
    },
  ];

  // Community and Business Impact
  const communityImpact = [
    {
      title: "M-Cube MOU Partnership",
      description:
        "Strategic partnership providing BD materials and technical guidance to engineering students for their academic projects with formal MOU documentation",
      category: "Student Support",
      icon: <Users className="w-6 h-6 text-green-500" />,
      image: mcubeMouPartnership,
      featured: true,
    },
    {
      title: "AMCE Pongal Celebration Sponsor",
      description: "Community engagement through traditional Pongal festival sponsorship with cultural celebration support",
      category: "Community Support",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      image: amcePongalCelebration,
      featured: true,
    },
    {
      title: "Diwali Celebrations",
      description: "Team building and community celebration initiatives during Diwali festival with employee engagement activities",
      category: "Team Building",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      image: diwaliCelebrations,
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-24">
      <section 
        className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${teamAchievement})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-white drop-shadow-2xl">
                Our Achievements
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-lg">
                Celebrating excellence, innovation, and leadership in the building restoration industry
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-yellow-400/90 text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Industry Leaders
                </span>
                <span className="bg-blue-500/90 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                  <Award className="w-4 h-4 mr-2 inline" />
                  Award Winners
                </span>
                <span className="bg-green-500/90 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 inline" />
                  Excellence Pioneer
                </span>
              </div>
              
              <p className="text-sm text-gray-300 italic">
                "Together we build excellence, one achievement at a time"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="awards" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white shadow-lg">
              <TabsTrigger value="awards" className="text-sm md:text-base">
                <Trophy className="w-4 h-4 mr-2" />
                Awards
              </TabsTrigger>
              <TabsTrigger value="media" className="text-sm md:text-base">
                <Megaphone className="w-4 h-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm md:text-base">
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger value="community" className="text-sm md:text-base">
                <Heart className="w-4 h-4 mr-2" />
                Community
              </TabsTrigger>
            </TabsList>

            {/* Awards Tab */}
            <TabsContent value="awards">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Featured Awards Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-primary inline-block pb-2">
                      🏆 Major Awards & Recognition
                    </h2>
                    <p className="text-gray-600 text-lg">Our most prestigious accomplishments and industry recognition</p>
                  </div>
                  
                  <div className="space-y-12">
                    {majorAwards
                      .filter((award) => award.featured)
                      .map((award, index) => (
                        <motion.div 
                          key={index} 
                          className="border-l-4 border-primary pl-8 bg-gradient-to-r from-blue-50 to-white rounded-r-2xl shadow-md p-6"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1 text-center lg:text-left">
                              <div className="flex items-center justify-center lg:justify-start mb-4">
                                {award.icon}
                                <Badge className="ml-4 bg-primary text-white font-bold">
                                  {award.year}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {award.title}
                              </h3>
                              {award.recipient && (
                                <p className="text-lg font-semibold text-primary mb-2">
                                  🎖️ {award.recipient}
                                </p>
                              )}
                              <p className="text-gray-700 font-medium mb-3">
                                {award.organization}
                              </p>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {award.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-primary">
                                {award.category}
                              </Badge>
                            </div>
                            
                            <div className="flex-shrink-0">
                              {/* Multiple Award Images */}
                              {award.images && (
                                <div className="flex gap-2 rounded-lg overflow-hidden shadow-lg">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <img
                                        src={award.images[0]}
                                        alt={`${award.title} - Part 1`}
                                        className="w-48 h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                      />
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                      <img
                                        src={award.images[0]}
                                        alt={`${award.title} - Part 1`}
                                        className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                      />
                                    </DialogContent>
                                  </Dialog>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <img
                                        src={award.images[1]}
                                        alt={`${award.title} - Part 2`}
                                        className="w-48 h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                      />
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                      <img
                                        src={award.images[1]}
                                        alt={`${award.title} - Part 2`}
                                        className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                      />
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              )}
                              
                              {/* Single Award Image */}
                              {award.image && !award.images && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                      <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-80 h-64 object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                    <img
                                      src={award.image}
                                      alt={award.title}
                                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                    />
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Professional Certifications Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-secondary inline-block pb-2">
                      🎓 Professional Certifications
                    </h2>
                    <p className="text-gray-600 text-lg">Technical expertise and professional qualifications</p>
                  </div>
                  
                  <div className="space-y-8">
                    {certifications
                      .filter((cert) => cert.featured)
                      .map((cert, index) => (
                        <motion.div 
                          key={index} 
                          className="border-l-4 border-secondary pl-8 bg-gradient-to-r from-blue-50 to-white rounded-r-2xl shadow-md p-6"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1 text-center lg:text-left">
                              <div className="flex items-center justify-center lg:justify-start mb-4">
                                {cert.icon}
                                <Badge className="ml-4 bg-secondary text-white font-bold">
                                  Certified
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {cert.title}
                              </h3>
                              {cert.recipient && (
                                <p className="text-lg font-semibold text-accent mb-2">
                                  👨‍🎓 {cert.recipient}
                                </p>
                              )}
                              <p className="text-gray-700 font-medium mb-3">
                                {cert.organization}
                              </p>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {cert.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-secondary">
                                {cert.category}
                              </Badge>
                            </div>
                            
                            {cert.image && (
                              <div className="flex-shrink-0">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                      <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-80 h-64 object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                    <img
                                      src={cert.image}
                                      alt={cert.title}
                                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Other Awards Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-accent inline-block pb-2">
                      🌟 Additional Recognition
                    </h2>
                    <p className="text-gray-600 text-lg">More achievements and industry recognition</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {majorAwards
                      .filter((award) => !award.featured)
                      .map((award, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="bg-gradient-to-r from-blue-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-primary h-full">
                            <CardHeader className="text-center pb-4">
                              <div className="flex justify-center mb-4 bg-primary/10 rounded-full w-16 h-16 mx-auto items-center">
                                {award.icon}
                              </div>
                              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                                {award.title}
                              </CardTitle>
                              {award.recipient && (
                                <p className="text-lg font-semibold text-primary mb-1">
                                  🏅 {award.recipient}
                                </p>
                              )}
                              <CardDescription className="text-gray-600 font-medium">
                                {award.organization}
                              </CardDescription>
                              <Badge className="mt-2 bg-primary text-white">
                                {award.year}
                              </Badge>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 text-center leading-relaxed mb-4">
                                {award.description}
                              </p>
                              <div className="flex justify-center">
                                <Badge variant="outline" className="bg-white/80 border-accent">
                                  {award.category}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Other Certifications Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-muted-foreground inline-block pb-2">
                      📋 Additional Certifications
                    </h2>
                    <p className="text-gray-600 text-lg">Ongoing professional development and training</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications
                      .filter((cert) => !cert.featured)
                      .map((cert, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300 border-2 border-muted h-full">
                            <CardHeader>
                              <div className="flex items-start space-x-4">
                                <div className="bg-muted p-3 rounded-full flex-shrink-0">
                                  {cert.icon}
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-lg text-gray-900 mb-2">
                                    {cert.title}
                                  </CardTitle>
                                  <CardDescription className="text-gray-600 font-medium">
                                    {cert.organization}
                                    {cert.presenter && ` • Presented by ${cert.presenter}`}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {cert.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-muted-foreground">
                                {cert.category}
                              </Badge>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Media Tab */}
            <TabsContent value="media">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Featured Media Coverage Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-primary inline-block pb-2">
                      📺 Featured Media Coverage
                    </h2>
                    <p className="text-gray-600 text-lg">Our presence in mainstream media and industry publications</p>
                  </div>
                  
                  <div className="space-y-12">
                    {mediaActivities
                      .filter((media) => media.featured)
                      .map((media, index) => (
                        <motion.div 
                          key={index} 
                          className="border-l-4 border-primary pl-8 bg-gradient-to-r from-blue-50 to-white rounded-r-2xl shadow-md p-6"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1 text-center lg:text-left">
                              <div className="flex items-center justify-center lg:justify-start mb-4">
                                {media.icon}
                                <Badge className="ml-4 bg-primary text-white font-bold">
                                  {media.type}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {media.title}
                              </h3>
                              <p className="text-lg font-semibold text-accent mb-3">
                                📻 {media.platform}
                              </p>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {media.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-primary">
                                Media Coverage
                              </Badge>
                            </div>
                            
                            {media.image && (
                              <div className="flex-shrink-0">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                      <img
                                        src={media.image}
                                        alt={media.title}
                                        className="w-80 h-64 object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                    <img
                                      src={media.image}
                                      alt={media.title}
                                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>


              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Featured Educational Programs Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-accent inline-block pb-2">
                      🎓 Featured Educational Programs
                    </h2>
                    <p className="text-gray-600 text-lg">Knowledge sharing and educational outreach in academic institutions</p>
                  </div>
                  
                  <div className="space-y-12">
                    {educationalOutreach
                      .filter((edu) => edu.featured)
                      .map((edu, index) => (
                        <motion.div 
                          key={index} 
                          className="border-l-4 border-accent pl-8 bg-gradient-to-r from-cyan-50 to-white rounded-r-2xl shadow-md p-6"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1 text-center lg:text-left">
                              <div className="flex items-center justify-center lg:justify-start mb-4">
                                <GraduationCap className="w-8 h-8 text-accent" />
                                <Badge className="ml-4 bg-accent text-white font-bold">
                                  Educational
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {edu.institution}
                              </h3>
                              <p className="text-lg font-semibold text-primary mb-3">
                                🏛️ {edu.activity}
                                {edu.department && ` • ${edu.department}`}
                              </p>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {edu.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-accent">
                                Educational Outreach
                              </Badge>
                            </div>
                            
                            <div className="flex-shrink-0">
                              {/* Educational Images */}
                              {edu.images && (
                                <div className="flex gap-2 rounded-lg overflow-hidden shadow-lg">
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <img
                                        src={edu.images[0]}
                                        alt={`${edu.institution} - Award Ceremony`}
                                        className="w-48 h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                      />
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                      <img
                                        src={edu.images[0]}
                                        alt={`${edu.institution} - Award Ceremony`}
                                        className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                      />
                                    </DialogContent>
                                  </Dialog>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <img
                                        src={edu.images[1]}
                                        alt={`${edu.institution} - Student Audience`}
                                        className="w-48 h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                      />
                                    </DialogTrigger>
                                    <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                      <img
                                        src={edu.images[1]}
                                        alt={`${edu.institution} - Student Audience`}
                                        className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                      />
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              )}
                              
                              {/* Single Educational Image */}
                              {edu.image && !edu.images && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                      <img
                                        src={edu.image}
                                        alt={edu.institution}
                                        className="w-80 h-64 object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                    <img
                                      src={edu.image}
                                      alt={edu.institution}
                                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                    />
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Other Educational Activities Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-primary inline-block pb-2">
                      📚 Educational Activities
                    </h2>
                    <p className="text-gray-600 text-lg">Additional educational outreach and knowledge sharing initiatives</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationalOutreach
                      .filter((edu) => !edu.featured)
                      .map((edu, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="bg-gradient-to-r from-cyan-50 to-white hover:shadow-xl transition-all duration-300 border-2 border-accent h-full">
                            <CardHeader>
                              <div className="flex items-start space-x-4">
                                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                                  <GraduationCap className="w-6 h-6 text-accent" />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-lg text-gray-900 mb-2 leading-tight">
                                    {edu.institution}
                                  </CardTitle>
                                  <CardDescription className="text-gray-600 font-medium">
                                    🎯 {edu.activity}
                                    {edu.department && ` • ${edu.department}`}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {edu.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-accent">
                                Education
                              </Badge>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {/* Featured Community Activities Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-secondary inline-block pb-2">
                      ❤️ Featured Community Impact
                    </h2>
                    <p className="text-gray-600 text-lg">Making a positive difference in our community through partnerships and celebrations</p>
                  </div>
                  
                  <div className="space-y-12">
                    {communityImpact
                      .filter((impact) => impact.featured)
                      .map((impact, index) => (
                        <motion.div 
                          key={index} 
                          className="border-l-4 border-secondary pl-8 bg-gradient-to-r from-blue-50 to-white rounded-r-2xl shadow-md p-6"
                          variants={itemVariants}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-1 text-center lg:text-left">
                              <div className="flex items-center justify-center lg:justify-start mb-4">
                                {impact.icon}
                                <Badge className="ml-4 bg-secondary text-white font-bold">
                                  {impact.category}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {impact.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {impact.description}
                              </p>
                              <Badge variant="outline" className="bg-white/80 border-secondary">
                                Community Impact
                              </Badge>
                            </div>
                            
                            {impact.image && (
                              <div className="flex-shrink-0">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                      <img
                                        src={impact.image}
                                        alt={impact.title}
                                        className="w-80 h-64 object-cover hover:scale-105 transition-transform duration-300"
                                      />
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-2 sm:p-4">
                                    <img
                                      src={impact.image}
                                      alt={impact.title}
                                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Other Community Activities Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-accent inline-block pb-2">
                      🤝 Community Activities
                    </h2>
                    <p className="text-gray-600 text-lg">Additional community engagement and social responsibility initiatives</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {communityImpact
                      .filter((impact) => !impact.featured)
                      .map((impact, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="bg-gradient-to-r from-cyan-50 to-white hover:shadow-xl transition-all duration-300 border-2 border-accent h-full">
                            <CardHeader>
                              <div className="flex items-start space-x-4">
                                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                                  {impact.icon}
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-lg text-gray-900 mb-2">
                                    {impact.title}
                                  </CardTitle>
                                  <Badge variant="outline" className="bg-white/80 border-accent">
                                    {impact.category}
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 leading-relaxed">
                                {impact.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
