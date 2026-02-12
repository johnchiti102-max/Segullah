import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Palette,
  Smartphone,
  Monitor,
  Megaphone,
  FileText,
  CreditCard,
  Image,
  ShoppingCart,
  Newspaper,
  BookOpen,
  Briefcase,

  MessageSquare,
  Target,
  Rocket,
  Camera,
} from 'lucide-react';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const brandingSolutions = [
    { icon: Globe, title: 'Web Development', color: 'text-orange-500', image: '/branding1.PNG' },
    { icon: Monitor, title: 'Website Design', color: 'text-orange-500', image: '/branding1.PNG' },
    { icon: Megaphone, title: 'Billboard Installation', color: 'text-orange-500', image: '/billboard.jpg' },
    { icon: Image, title: 'Contra Vision', color: 'text-orange-500', image: '/graphic.PNG' },
    { icon: Globe, title: 'Entertainment Websites', color: 'text-orange-500', image: '/branding1.PNG' },
    { icon: FileText, title: 'DTF Printing', color: 'text-orange-500', image: '/large.jpg' },
    { icon: BookOpen, title: 'Informational Websites', color: 'text-orange-500', image: '/branding1.PNG' },
    { icon: ShoppingCart, title: 'E-commerce Websites', color: 'text-orange-500', image: '/branding1.PNG' },
  ];

  const graphicDesign = [
    { icon: MessageSquare, title: 'Social Media Design', image: '/graphic.PNG' },
    { icon: Newspaper, title: 'Blog Graphics', image: '/graphic.PNG' },
    { icon: Target, title: 'Logo Design', image: '/graphic.PNG' },
    { icon: Briefcase, title: 'Portfolios', image: '/branding1.PNG' },
    { icon: FileText, title: 'Flyers', image: '/graphic.PNG' },
    { icon: BookOpen, title: 'Educational Materials', image: '/graphic.PNG' },
    { icon: CreditCard, title: 'Business Cards', image: '/graphic.PNG' },
    { icon: Newspaper, title: 'News Graphics', image: '/graphic.PNG' },
  ];

  const coreServices = [
    {
      title: 'Brand Strategy & Positioning',
      description:
        'Market research, competitor analysis, and positioning frameworks that define clear brand differentiation.',
      icon: Target,
      image: '/branding1.PNG',
    },
    {
      title: 'Visual Identity & Design',
      description:
        'Logo creation, corporate identity systems, packaging, and marketing collateral for consistency and impact.',
      icon: Palette,
      image: '/branding1.PNG',
    },
    {
      title: 'Messaging & Tone of Voice',
      description:
        'Brand narratives, taglines, key messages, and editorial guidelines for clear and engaging communication.',
      icon: MessageSquare,
      image: '/graphic.PNG',
    },
    {
      title: 'Digital Branding & Experience',
      description:
        'Website branding, social media identity, UX/UI consulting, and digital asset creation.',
      icon: Globe,
      image: '/branding1.PNG',
    },
    {
    title: 'Photography & Videography',
    description:
      'Corporate photography, studio photography, product photography, and professional videography to showcase your brand with clarity and impact.',
    icon: Camera,
    image: '/graphic.PNG',
  },
    {
      title: 'Brand Roll-out & Management',
      description:
        'Launch campaigns, internal brand training, and ongoing governance across all brand touchpoints.',
      icon: Rocket,
      image: '/branding1.PNG',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-24 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-orange-500 mb-6 mx-auto"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive branding and visual communication solutions tailored
              to your business needs
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
              >
                View Gallery
              </Link>
            </div>
          </div>

          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12 animate-slide-in-left">
              <div>
                <img
                  src="/branding1.PNG"
                  alt="Branding solutions showcase"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Branding Solutions
                </h2>
                <p className="text-gray-400 mb-8">
                  From web development to signage installation, we provide end-to-end branding solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {brandingSolutions.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveImage(service.image)}
                        className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-orange-500/20"
                      >
                        <Icon
                          size={28}
                          className={`${service.color} mb-3 group-hover:scale-110 transition-transform`}
                        />
                        <h4 className="text-white font-medium text-sm">
                          {service.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-in-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Graphic Design
                </h2>
                <p className="text-gray-400 mb-8">
                  Creative design solutions for all your visual communication needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {graphicDesign.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveImage(service.image)}
                        className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-orange-500/20"
                      >
                        <Icon
                          size={28}
                          className="text-orange-500 mb-3 group-hover:scale-110 transition-transform"
                        />
                        <h4 className="text-white font-medium text-sm">
                          {service.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <img
                  src="/graphic.PNG"
                  alt="Graphic design showcase"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div
              onClick={() => setActiveImage('/branding1.PNG')}
              className="bg-black p-6 rounded-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="flex items-center justify-center space-x-3">
                <Smartphone size={32} className="text-orange-500" />
                <h2 className="text-2xl font-bold text-white">App Development</h2>
              </div>
              <p className="text-center text-gray-400 mt-4">
                Custom mobile and web applications for your business
              </p>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Core Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveImage(service.image)}
                      className="bg-black p-8 rounded-lg hover:border-orange-500 border-2 border-transparent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <Icon size={40} className="text-orange-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Service preview"
            className="max-w-3xl w-full rounded-lg"
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default ServicesPage;
