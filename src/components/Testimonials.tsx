import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor of Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: "Arya demonstrates exceptional problem-solving skills and a deep understanding of cybersecurity concepts. Their dedication to learning and innovation is truly remarkable."
    },
    {
      name: "Michael Chen",
      role: "Senior Security Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      content: "During their internship, Arya showed great initiative and technical aptitude. Their contributions to our security testing framework were invaluable."
    },
    {
      name: "Priya Patel",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content: "Working with Arya on open-source projects has been a pleasure. Their attention to detail and commitment to code quality sets them apart."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          What others say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-400/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}