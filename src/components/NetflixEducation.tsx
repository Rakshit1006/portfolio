"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Bharati Vidyapeeth College of Engineering",
    location: "Delhi, India",
    duration: "2019 - 2022",
    grade: "9.02 CGPA/10",
    achievements: [
      "Merit (First Class)",
      "Led a 3-member team to design and deploy a malicious URL detection framework",
      "Social Media Head for Aagaaz Music Society",
      "Published research paper on Malware Detection in URL using Machine Learning",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Web Development",
      "E-commerce",
    ],
  },
  {
    degree: "12th CBSE",
    institution: "The Maurya School",
    location: "Gurgaon, India",
    duration: "2017 - 2019",
    grade: "95.2 %",
    achievements: [
      "School Topper",
      "Awarded 100% scholarship in 11th and 50% in 12th Grade for academic excellence.",
      "2nd Position in Inter-School Drama Competition",
    ],
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
];

const certifications = [
  {
    title: "VTEX Certified Developer",
    issuer: "VTEX",
    date: "2022",
    icon: <Image src="/VTEX_icon.svg" alt="VTEX" width={40} height={40} />,
  },
  {
    title: "Mirakl Developer & Solution Architect Certification",
    issuer: "Mirakl",
    date: "2022",
    icon: <Image src="/Mirakl_icon.png" alt="Mirakl" width={40} height={40} />,
  },
  {
    title: "Spryker Developer Certification",
    issuer: "Spryker",
    date: "2022",
    icon: (
      <Image src="/Spryker_icon.jpeg" alt="Spryker" width={40} height={40} />
    ),
  },
  {
    title: "ML and AI Specialization",
    issuer: "Stanford Online, Deeplearning.ai",
    date: "2025",
    icon: "💻",
  },
];

export function NetflixEducation() {
  return (
    <section
      id="education"
      className="relative py-16 bg-background min-h-screen"
    >
      {/* Background layers bound to this section */}
      <StarsBackground className="absolute inset-0 z-0 pointer-events-none" />
      <ShootingStars
        starHeight={3}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning through professional
            certifications and advanced courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 "
          >
            <Card className="bg-card border-border netflix-card-hover h-fit overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />

              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-1">
                        {educationData[0].degree}
                      </CardTitle>
                      <p className="text-lg text-blue-400 font-semibold">
                        {educationData[0].field}
                      </p>
                      <p className="text-gray-400">
                        {educationData[0].institution}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-green-500 text-green-400 bg-green-500/10"
                  >
                    {educationData[0].grade}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {educationData[0].duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {educationData[0].location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    <h4 className="text-white font-semibold">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {educationData[0].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-yellow-500 mr-3 mt-1">★</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    <h4 className="text-white font-semibold">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {educationData[0].courses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-blue-500/30 text-blue-400 bg-blue-500/10"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="bg-card border-border netflix-card-hover h-fit overflow-hidden mt-2 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500" />

              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-1">
                        {educationData[1].degree}
                      </CardTitle>
                      <p className="text-lg text-blue-400 font-semibold">
                        {educationData[1].field}
                      </p>
                      <p className="text-gray-400">
                        {educationData[1].institution}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-green-500 text-green-400 bg-green-500/10"
                  >
                    {educationData[1].grade}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {educationData[1].duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {educationData[1].location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    <h4 className="text-white font-semibold">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {educationData[1].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-yellow-500 mr-3 mt-1">★</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    <h4 className="text-white font-semibold">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {educationData[1].courses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-blue-500/30 text-blue-400 bg-blue-500/10"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Certifications
              </h3>
              <p className="text-gray-400">
                Professional credentials and continuous learning
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border netflix-card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">
                          {/* <img src={cert.icon} alt="" /> */}
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-gray-400 text-xs mb-2">
                            {cert.issuer}
                          </p>
                          <Badge
                            variant="outline"
                            className="text-xs border-red-500/30 text-red-400 bg-red-500/10"
                          >
                            {cert.date}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border-red-500/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-500">4+</div>
                      <div className="text-xs text-gray-400">
                        Certifications
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-500">
                        9.02
                      </div>
                      <div className="text-xs text-gray-400">GPA/10</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
