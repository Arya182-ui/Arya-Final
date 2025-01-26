import { Book, Award, Target, Coffee } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: "Academic Excellence",
      description: "Maintaining top academic performance in BTech program"
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-500" />,
      title: "Project Success",
      description: "Completed 10+ successful projects in security and AI"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Technical Skills",
      description: "Mastered multiple programming languages and frameworks"
    },
    {
      icon: <Coffee className="w-8 h-8 text-cyan-500" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about technology and committed to making the digital world more secure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* About Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated BTech student, I'm deeply passionate about the intersection of cybersecurity, artificial intelligence, and IoT. My journey in technology began with a curiosity about how things work, which has evolved into a commitment to creating secure and innovative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in the power of technology to transform lives and businesses, while ensuring security remains at the forefront of digital innovation. My goal is to contribute to making the digital world safer and more efficient through cutting-edge solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding or learning about new security vulnerabilities, you'll find me participating in CTF competitions, contributing to open-source projects, or mentoring fellow students in programming and security concepts.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {achievements.map((achievement, index) => (
              <div key={index} className="gradient-border bg-white p-6">
                <div className="flex flex-col items-center text-center">
                  {achievement.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="mt-2 text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}