import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award, Trophy, Star, PlayCircle, GraduationCap, Users, Megaphone, Heart } from "lucide-react";
// Import award images
import excellenceAward1 from "@/assets/awards/excellence-award-1.png";
import excellenceAward2 from "@/assets/awards/excellence-award-2.png";

const AchievementsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("awards");

  // Major Awards and Recognition
  const majorAwards = [
    {
      title: "Promotion Pioneer of the Year 2025",
      organization: "Building Doctor",
      description: "Recognized for outstanding promotional activities and brand building initiatives",
      year: "2025",
      category: "Business Excellence",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
    },
    {
      title: "Best Women Entrepreneur 2025",
      recipient: "Dr. SK Kamaleeswari",
      organization: "Building Doctor Madurai",
      description: "Outstanding leadership and entrepreneurial excellence in construction industry",
      year: "2025",
      category: "Leadership",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
    },
    {
      title: "Excellence in Building Restoration & Water Proofing",
      organization: "Industry Recognition",
      description: "Technical excellence and innovation in building restoration services",
      year: "2024",
      category: "Technical Excellence",
      icon: <Star className="w-8 h-8 text-blue-500" />,
      color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200",
      images: [excellenceAward1, excellenceAward2],
      featured: true
    },
    {
      title: "Madurai City Iconic Award",
      specialization: "Water Proofing",
      organization: "Madurai City",
      description: "Recognized as an iconic service provider in water proofing solutions",
      year: "2024",
      category: "Regional Recognition",
      icon: <Trophy className="w-8 h-8 text-green-500" />,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
    }
  ];

  // Professional Certifications
  const certifications = [
    {
      title: "Water Proofing and Insulation Certificate",
      organization: "CIDC (Construction Industry Development Council)",
      description: "Professional certification in advanced water proofing techniques",
      category: "Technical Certification",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Best Product Presentation Award",
      organization: "Forum Presentation",
      presenter: "Mr. Nakeeran Gopal",
      description: "Excellence in product demonstration and technical presentation",
      category: "Presentation Excellence",
      icon: <Award className="w-6 h-6 text-green-600" />
    }
  ];

  // Media Coverage and Outreach
  const mediaActivities = [
    {
      title: "Radio City FM Business Talk",
      type: "Radio Interview",
      description: "Live telecast discussing Building Doctor services and industry insights",
      platform: "Radio City FM",
      icon: <Megaphone className="w-6 h-6 text-red-500" />
    },
    {
      title: "Pudhuyugham TV Program",
      type: "Television Appearance",
      description: "Featured program showcasing building restoration expertise",
      platform: "Pudhuyugham TV",
      icon: <PlayCircle className="w-6 h-6 text-blue-500" />
    }
  ];

  // Educational Outreach
  const educationalOutreach = [
    {
      institution: "Velammal Engineering College",
      activity: "Guest Lecture",
      department: "Civil Engineering",
      description: "Introduced Building Doctor products to first-year Civil Engineering students as part of their syllabus"
    },
    {
      institution: "Thiyagarajar Engineering College",
      activity: "Principal Meeting & Presentation",
      description: "Official meeting with college principal to discuss industry collaboration"
    },
    {
      institution: "Fatima College",
      activity: "Guest Lecture",
      description: "Educational presentation on building restoration techniques"
    },
    {
      institution: "Mohammed Sathak Polytechnic College",
      activity: "Guest Lecture",
      description: "Technical presentation on modern construction repair methods"
    },
    {
      institution: "Kakkaipadiniyar Govt. Girls Hr. Sec. School",
      activity: "Educational Program",
      description: "Inspiring young minds about careers in construction and engineering"
    },
    {
      institution: "NMSSVN College",
      activity: "Student Engagement",
      description: "Interactive session with engineering students"
    }
  ];

  // Community and Business Impact
  const communityImpact = [
    {
      title: "M-Cube MOU Partnership",
      description: "Provided BD materials and guidance to engineering students for their projects",
      category: "Student Support",
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: "AMCE Pongal Celebration Sponsor",
      description: "Community engagement through festival sponsorship",
      category: "Community Support",
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Diwali Celebrations",
      description: "Team building and community celebration initiatives",
      category: "Team Building",
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
                <Trophy className="w-16 h-16 text-yellow-300" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"
            >
              Our Achievements
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-blue-100 leading-relaxed"
            >
              Celebrating excellence, innovation, and leadership in the building restoration industry
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Award className="w-5 h-5 mr-2" />
                Industry Leader
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Trophy className="w-5 h-5 mr-2" />
                Award Winner
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
                <Star className="w-5 h-5 mr-2" />
                Excellence Pioneer
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
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
                className="space-y-8"
              >
                {/* Featured Excellence Award */}
                {majorAwards.filter(award => award.featured).map((award, index) => (
                  <motion.div key={index} variants={itemVariants} className="mb-12">
                    <div className="text-center mb-8">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        🏆 Featured Achievement
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our most prestigious recognition for outstanding excellence in the construction industry
                      </p>
                    </div>
                    
                    <Card className={`${award.color} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 max-w-6xl mx-auto`}>
                      <CardHeader className="text-center pb-4">
                        <div className="flex justify-center mb-6">
                          <div className="bg-white p-4 rounded-full shadow-lg">
                            {award.icon}
                          </div>
                        </div>
                        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                          {award.title}
                        </CardTitle>
                        <CardDescription className="text-xl text-gray-700 font-medium">
                          {award.organization} • {award.year}
                        </CardDescription>
                        <Badge variant="outline" className="bg-white/70 text-lg px-4 py-2 mt-4">
                          {award.category}
                        </Badge>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-gray-800 text-center text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                          {award.description}
                        </p>
                        
                        {/* Award Images Gallery */}
                        {award.images && (
                          <div className="flex flex-col md:flex-row mt-8 rounded-xl overflow-hidden shadow-lg">
                            {award.images.map((image, imgIndex) => (
                              <Dialog key={imgIndex}>
                                <DialogTrigger asChild>
                                  <div className="cursor-pointer flex-1">
                                    <img
                                      src={image}
                                      alt={`${award.title} - Image ${imgIndex + 1}`}
                                      className="w-full h-80 md:h-96 object-cover"
                                    />
                                  </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                                  <img
                                    src={image}
                                    alt={`${award.title} - Image ${imgIndex + 1}`}
                                    className="w-full h-full object-contain rounded-lg"
                                  />
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        )}
                        
                        <div className="text-center mt-8">
                          <p className="text-sm text-gray-600 italic">
                            Click on images to view in full size
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Other Major Awards */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Other Awards & Recognition
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {majorAwards.filter(award => !award.featured).map((award, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className={`${award.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                          <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                              {award.icon}
                            </div>
                            <CardTitle className="text-xl font-bold text-gray-900">
                              {award.title}
                            </CardTitle>
                            {award.recipient && (
                              <p className="text-lg font-semibold text-gray-700">
                                {award.recipient}
                              </p>
                            )}
                            <CardDescription className="text-gray-600">
                              {award.organization} • {award.year}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 text-center leading-relaxed">
                              {award.description}
                            </p>
                            <div className="flex justify-center mt-4">
                              <Badge variant="outline" className="bg-white/50">
                                {award.category}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Professional Certifications */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Professional Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-start space-x-4">
                              <div className="bg-blue-100 p-3 rounded-full">
                                {cert.icon}
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg text-gray-900">
                                  {cert.title}
                                </CardTitle>
                                <CardDescription className="text-gray-600">
                                  {cert.organization}
                                  {cert.presenter && ` • Presented by ${cert.presenter}`}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700">{cert.description}</p>
                            <Badge variant="outline" className="mt-3">
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
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Media Coverage & Outreach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaActivities.map((media, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="bg-red-100 p-3 rounded-full">
                              {media.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg text-gray-900">
                                {media.title}
                              </CardTitle>
                              <CardDescription className="text-gray-600">
                                {media.platform} • {media.type}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{media.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Educational Outreach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {educationalOutreach.map((edu, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-start space-x-3">
                            <div className="bg-green-100 p-2 rounded-full">
                              <GraduationCap className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg text-gray-900 leading-tight">
                                {edu.institution}
                              </CardTitle>
                              <CardDescription className="text-gray-600">
                                {edu.activity}
                                {edu.department && ` • ${edu.department}`}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Community Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {communityImpact.map((impact, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 p-3 rounded-full">
                              {impact.icon}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg text-gray-900">
                                {impact.title}
                              </CardTitle>
                              <Badge variant="outline" className="mt-2">
                                {impact.category}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{impact.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
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