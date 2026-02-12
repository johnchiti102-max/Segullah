import { Building2, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Segullah
                <br />
                Projects & Designs
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Based in <span className="text-orange-500 font-medium">Greenhills, Randfontein, South Africa</span>, we are a professional signage and branding company serving local and regional businesses.
              </p>
              <p>
                Focused on delivering visual communication solutions that strengthen brand presence and recognition, we combine strategic thinking with creative excellence.
              </p>
              <p>
                Our approach transforms businesses by creating cohesive brand experiences that resonate with audiences and drive meaningful engagement.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Building2 size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-400">Professional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-400">Strategic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-400">Collaborative</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/graphic.PNG"
              alt="Modern office workspace"
              className="aspect-square w-full object-cover rounded-lg"
            />
            <section className="relative">
        <video
          controls
          className="w-full max-h-[70vh] object-cover"
          poster="/segu.jpg"
        >
          <source src="/segulavid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 opacity-20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
