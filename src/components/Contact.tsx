import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Use Formspree's useForm hook to handle form submission
  const [state, handleSubmit] = useForm('mzzddgpo'); // Replace with your Formspree ID

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission logic and Formspree integration
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('idle');

    // Use Formspree's handleSubmit for actual submission
    handleSubmit(e);

    // Handle feedback once Formspree submission completes
    if (state.succeeded) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
      alert("Message Sent Successfully!"); // Show success alert
    } else if (state.errors.length > 0) {
      setFormStatus('error');
      setErrorMessage('Failed to send message.');
      alert("Error: Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-pink-200 flex justify-center items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-1/2">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Contact Me</h2>
        <p className="text-xl text-center text-gray-600 mb-10">Want to connect? My inbox is always open!</p>

        <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <form
            onSubmit={handleFormSubmit} // Custom submit handler
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 border-transparent bg-gradient-to-r from-blue-400 to-green-400 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 border-transparent bg-gradient-to-r from-blue-400 to-green-400 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 transition-all duration-300"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-2 border-transparent bg-gradient-to-r from-blue-400 to-green-400 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 transition-all duration-300"
                placeholder="Your message"
                required
              />
            </div>

            {/* Success/Error Alert */}
            {formStatus !== 'idle' && (
              <div
                className={`mt-4 p-4 rounded-md text-white ${formStatus === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
              >
                <p className="text-center">
                  {formStatus === 'success' ? 'Message Sent Successfully!' : errorMessage}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 ease-in-out"
              disabled={state.submitting} // Disable button when submitting
            >
              Send Message <Send size={20} className="ml-2 animate-bounce" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
