import React from 'react';
import Camera from '../assets/images/camera.jpeg';
import Face from '../assets/images/face.png'
import Network from '../assets/images/network.png'
import Password from '../assets/images/Password maneger.jpeg'
import Voice from '../assets/images/voice_Recocnize.jpeg'
import Attandance from '../assets/images/images.jpeg'

export function Projects() {

  const projects = [
    {
      title: "Supriya An Desktop Assistant",
      description: "A powerful Python-based virtual assistant designed to streamline a variety of tasks and enhance productivity.",
      date: "May 2023 - Ongoing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
      github: "https://github.com/Arya182-ui/Supriya-An-desktop-assistant-",
      tags: ["Python", "AI", "NLP", "Speech Recognition"]
    },
    {
      title: "Inviculter (A Farmer Helping App)",
      description: "A comprehensive consultation platform connecting farmers with agronomists, fostering collaboration and real-time decision-making.",
      date: "Jul 2023",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
      github: "https://github.com/Arya182-ui/INVICULTURE",
      tags: ["KIVI", "Python" , "KV", "MongoDB", "AI"]
    },
    {
      title: "Advance Password Manager",
      description: "An advanced password manager built using Python and SQLite. Store passwords securely with encryption.",
      date: "Nov 2023",
      image: Password ,
      github: "https://github.com/Arya182-ui/Password-Manager",
      tags: ["Python", "SQLite3", "Encryption", "Tkinter"]
    },
    {
      title: "Brute Force Camera",
      description: "A Python application conducting a quiz and capturing user images in the background, uploading them to a database.",
      date: "Feb 2024",
      image: Camera ,
      github: "https://github.com/Arya182-ui/Brute_force_camera",
      tags: ["Python", "OpenCV", "Firebase", "Quiz System"]
    },
    {
      title: "Face Recognition Model",
      description: "A face recognition model built with TensorFlow, Keras, and OpenCV, capable of real-time face recognition using a webcam.",
      date: "Aug 2024",
      image: Face ,
      github: "https://github.com/Arya182-ui/Face_Recognition_Model",
      tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"]
    },
    {
      title: "Smart Attandance System",
      description: "A Smart Attandance System With Advanced Face Recognition Model",
      date: "Nov 2024",
      image: Attandance ,
      github: "https://github.com/Arya182-ui/Smart_Attendance",
      tags: ["Python", "AI", "CSV" , "Squlite3"]
    },
    {
      title: "Voice Recognition Model",
      description: "A custom voice recognition model that supports various commands and integrates with other applications for enhanced automation.",
      date: "Jan 2025",
      image: Voice,
      github: "https://github.com/Arya182-ui/Voice-Recognition-Model",
      tags: ["Python", "AI", "Voice Recognition", "Machine Learning"]
    },
    {
    title: "Network Scanner",
    description: "Python made a normaly scanner it scan all ports and provide open port",
    date: "Jan 2025",
    image: Network,
    github: "https://github.com/Arya182-ui/Network_Scanner",
    tags: ["Python", "Tinker"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">Projects</h2>
        <p className="section-subtitle text-gray-300">
          Featured works and personal projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                {/* Floating Tags */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-600/80 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-blue-400">{project.date}</span>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
