import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="h-1 w-20 bg-orange-500 mb-6 mx-auto"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            SEGULLAH
            <br />
            <span className="text-white">PROJECTS & DESIGNS</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto">
            Strategic Branding, Signage & Visual Communication
          </p>

          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Custom indoor and outdoor signage, branding solutions, and visual
            communication systems that elevate business visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-orange-500 text-white font-medium rounded-none hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-medium rounded-none hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
