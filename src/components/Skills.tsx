import React from 'react';
import { Code, Database, Shield, Cpu, Terminal, Globe, Zap, Brain } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="skill-icon" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="skill-icon" />,
      title: "Cybersecurity",
      skills: ["Penetration Testing", "Network Security", "Cryptography", "Security Auditing"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Cpu className="skill-icon" />,
      title: "IoT & Hardware",
      skills: ["Arduino", "Raspberry Pi", "ESP32", "Sensors Integration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database className="skill-icon" />,
      title: "Databases & Cloud",
      skills: ["MySQL", "MongoDB", "Firebase", "AWS Basics"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Brain className="skill-icon" />,
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "OpenCV"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="skill-icon" />,
      title: "Web Technologies",
      skills: ["Node.js", "HTML/CSS", "RESTful APIs"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Mastering the tools of tomorrow, today
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group skill-card backdrop-blur-sm bg-white/80 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br ${category.color} p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {React.cloneElement(category.icon, { className: "w-full h-full text-white" })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{category.title}</h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                          <span className="text-sm font-medium text-gray-500">Advanced</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} transform origin-left scale-x-0 animate-[slideRight_1s_ease-out_forwards]`}
                            style={{ 
                              width: `${85 + Math.random() * 15}%`,
                              animationDelay: `${index * 0.1 + skillIndex * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}