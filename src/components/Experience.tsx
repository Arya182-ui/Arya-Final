import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "BTech Student",
      organization: "Institute of Technology",
      duration: "2022 - Present",
      location: "Mumbai, India",
      description: "Pursuing Bachelor's in Technology with focus on Computer Science and Security",
      achievements: [
        "Maintained 8.5 CGPA throughout the program",
        "Led technical workshops on cybersecurity",
        "Participated in multiple hackathons"
      ]
    },
    {
      title: "Security Research Intern",
      organization: "TechSecure Solutions",
      duration: "Summer 2023",
      location: "Remote",
      description: "Conducted security research and vulnerability assessments",
      achievements: [
        "Identified and reported 3 critical vulnerabilities",
        "Developed automated security testing scripts",
        "Contributed to security documentation"
      ]
    },
    {
      title: "Open Source Contributor",
      organization: "Various Projects",
      duration: "2023 - Present",
      location: "Remote",
      description: "Active contributor to security and IoT open source projects",
      achievements: [
        "Contributed to multiple security tools",
        "Created educational content for beginners",
        "Collaborated with global developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and achievements
        </p>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-cyan-500" />
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-4 border-blue-500" />

              <div className="bg-white rounded-lg shadow-lg p-6 ml-4">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-blue-600 font-medium">{exp.organization}</span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}