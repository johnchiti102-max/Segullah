import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Thank
                <br />
                <span className="text-orange-500">You</span>
              </h2>
              <p className="text-2xl text-white mb-4">
                Will be great to hear from you!
              </p>
              <p className="text-gray-400 leading-relaxed">
                Ready to elevate your brand? Let's start a conversation about
                how we can help your business stand out and succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">
                    Greenhills, Randfontein
                    <br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">info@segullah.co.za</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-500 mb-2">
                    SEGULLAH
                  </div>
                  <div className="text-white text-sm">
                    Building Brands To Prosper
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Start Your Project
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <CheckCircle size={64} className="text-orange-500" />
                <p className="text-white text-xl font-semibold">
                  Thank you for reaching out!
                </p>
                <p className="text-gray-400 text-center">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-none text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-none text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-none text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-orange-500 text-white font-medium rounded-none hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 Segullah Projects & Designs. All rights reserved.</p>
          <p className="mt-2">Strategic Branding, Signage & Visual Communication</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
