import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-emerald-600" />
            <span>(661) 549-1473</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-emerald-600" />
            <span>tim@tjdorpers.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span>Bakersfield, CA</span>
          </div>
          <div className="mt-6">
            <iframe
              title="Farm Location"
              className="w-full h-64 rounded-lg"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.073013073073!2d-119.0433666847696!3d35.37336698027469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6f4b3b3b3b3b%3A0x1b1b1b1b1b1b1b1b!2sBakersfield%2C%20CA%2093307!5e0!3m2!1sen!2sus!4v1632213660006!5m2!1sen!2sus"
            />
          </div>
        </div>
      </div>
    </div>
  );
}