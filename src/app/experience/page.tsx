'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Mathematics & Computer Science Teacher",
      company: "The Smart School",
      logo: "/school.png",
      duration: "2019 - Present",
      points: [
        "Developed and implemented innovative curriculum for mathematics and computer science courses",
        "Integrated technology tools and programming concepts to enhance student learning",
        "Achieved 90% student success rate in AP Computer Science examinations",
        "Mentored students in robotics club and coding competitions",
        "Created interactive learning materials using Python and JavaScript"
      ],
      technologies: ["Python", "JavaScript", "Typescript", "Educational Software", "Web Development"]
    },
    {
      title: "Call Center Representative",
      company: "TCS.",
      logo: "/tcs.png",
      duration: "2015 - 2017",
      points: [
        "Handled 100+ customer inquiries daily with 95% satisfaction rate",
        "Resolved complex customer issues and maintained detailed documentation",
        "Received 'Best Customer Service Representative' award twice",
        "Trained new team members on company protocols and systems"
      ],
      technologies: ["CRM Software", "Call Management Systems", "Microsoft Office", "Help Desk Tools"]
    },
    {
      title: "Data Entry Operator",
      company: "DataTech Solutions",
      logo: "/data.png",
      duration: "2014 - 2015",
      points: [
        "Processed and verified 1000+ records daily with 99.9% accuracy",
        "Maintained and updated customer databases",
        "Implemented data validation procedures reducing errors by 40%",
        "Collaborated with team members to meet project deadlines"
      ],
      technologies: ["Excel", "Data Management Tools"]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20"
    >
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-16 tracking-[20px] text-gray-300 uppercase"
      >
        Experience
      </motion.h3>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
            >
              <div className="grid md:grid-cols-[200px,1fr] gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                  />
                </motion.div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {experience.title}
                    </h4>
                    <p className="text-xl font-medium text-gray-300 mt-1">{experience.company}</p>
                    <p className="text-gray-400 mt-1">{experience.duration}</p>
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    {experience.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}




