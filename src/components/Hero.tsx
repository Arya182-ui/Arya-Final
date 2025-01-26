import { ChevronDown, Code, Shield, Cpu } from 'lucide-react';
import logo from '../assets/images/logo.jpg';
import Cv from '../assets/pdf/Resume 2022.pdf'

export function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        role="presentation"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/demo/image/fetch/q_auto,f_auto/https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&h=800&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/90" />
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-1/4 left-1/4 text-blue-400/20 w-24 h-24 animate-float" style={{ animationDelay: '0s' }} aria-hidden="true" />
        <Shield className="absolute top-1/3 right-1/4 text-cyan-400/20 w-32 h-32 animate-float" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
        <Cpu className="absolute bottom-1/4 left-1/3 text-blue-400/20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5.5xl font-extrabold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Arya
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Aspiring Security Consultant | Passionate About Cybersecurity, AI, & IoT
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-in-right">
            I’m a passionate BTech 3rd-semester student with a focus on <span className="font-bold">Cybersecurity, AI, and IoT development</span>. My work revolves around designing <span className="font-bold">secure, scalable systems</span> and creating <span className="font-bold">innovative solutions</span> that address real-world challenges. Let’s connect, collaborate, and bring cutting-edge ideas to life!
          </p>

          <div className="space-y-4 md:space-y-6">
            <a
              href="#projects"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full 
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition-transform duration-300 animate-pulse"
            >
              Explore My Work
            </a>

            {/* Download CV Button */}
            <a
              href={Cv}  // Replace with the actual path to your CV
              download="Arya_CV"  // This will set the filename of the downloaded CV
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full 
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition-transform duration-300 animate-pulse"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image on the Left */}
        <div className="mt-8 md:mt-0 order-last md:order-first">
          <img
            src={logo}  // Replace with your actual image URL
            alt="Arya - Security Consultant"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
