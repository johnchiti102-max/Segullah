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

const Services = () => {
  const brandingSolutions = [
    { icon: Globe, title: 'Web Development', color: 'text-orange-500' },
    { icon: Monitor, title: 'Website Design', color: 'text-orange-500' },
    { icon: Megaphone, title: 'Billboard Installation', color: 'text-orange-500' },
    { icon: Image, title: 'Contra Vision', color: 'text-orange-500' },
    { icon: Globe, title: 'Entertainment Websites', color: 'text-orange-500' },
    { icon: FileText, title: 'DTF Printing', color: 'text-orange-500' },
    { icon: BookOpen, title: 'Informational Websites', color: 'text-orange-500' },
    { icon: ShoppingCart, title: 'E-commerce Websites', color: 'text-orange-500' },
  ];

  const graphicDesign = [
    { icon: MessageSquare, title: 'Social Media Design' },
    { icon: Newspaper, title: 'Blog Graphics' },
    { icon: Target, title: 'Logo Design' },
    { icon: Briefcase, title: 'Portfolios' },
    { icon: FileText, title: 'Flyers' },
    { icon: BookOpen, title: 'Educational Materials' },
    { icon: CreditCard, title: 'Business Cards' },
    { icon: Newspaper, title: 'News Graphics' },
  ];

  const coreServices = [
    {
      title: 'Brand Strategy & Positioning',
      description:
        'Market research, competitor analysis, and positioning frameworks that define clear brand differentiation.',
      icon: Target,
    },
    {
      title: 'Visual Identity & Design',
      description:
        'Logo creation, corporate identity systems, packaging, and marketing collateral for consistency and impact.',
      icon: Palette,
    },
    {
      title: 'Messaging & Tone of Voice',
      description:
        'Brand narratives, taglines, key messages, and editorial guidelines for clear and engaging communication.',
      icon: MessageSquare,
    },
    {
      title: 'Digital Branding & Experience',
      description:
        'Website branding, social media identity, UX/UI consulting, and digital asset creation.',
      icon: Globe,
    },
    {
    title: 'Photography & Videography',
    description:
      'Corporate photography, studio photography, product photography, and professional videography to showcase your brand with clarity and impact.',
    icon: Camera,
  },
    {
      title: 'Brand Roll-out & Management',
      description:
        'Launch campaigns, internal brand training, and ongoing governance across all brand touchpoints.',
      icon: Rocket,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-1 w-20 bg-orange-500 mb-6 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive branding and visual communication solutions tailored
            to your business needs
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="public/segu.jpg"
                alt="Branding solutions showcase"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Branding Solutions
              </h3>
              <p className="text-gray-400 mb-8">
                From web development to signage installation, we provide end-to-end branding solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {brandingSolutions.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Graphic Design
              </h3>
              <p className="text-gray-400 mb-8">
                Creative design solutions for all your visual communication needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {graphicDesign.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
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
                src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Graphic design showcase"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg">
            <div className="flex items-center justify-center space-x-3">
              <Smartphone size={32} className="text-orange-500" />
              <h3 className="text-2xl font-bold text-white">App Development</h3>
            </div>
            <p className="text-center text-gray-400 mt-4">
              Custom mobile and web applications for your business
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Core Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-black p-8 rounded-lg hover:border-orange-500 border-2 border-transparent transition-all duration-300"
                  >
                    <Icon size={40} className="text-orange-500 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h4>
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
  );
};

export default Services;
