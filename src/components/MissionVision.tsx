
const MissionVision = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Strategic planning and business strategy"
              className="aspect-[4/3] w-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower businesses by delivering end-to-end branding strategies
              that align purpose, positioning, and performance. We transform
              brands into trusted market leaders through research-driven
              insights, design excellence, and seamless execution.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="text-orange-500 font-semibold">Purpose</div>
                <div className="text-sm text-gray-400">Aligned strategy</div>
              </div>
              <div className="space-y-2">
                <div className="text-orange-500 font-semibold">Performance</div>
                <div className="text-sm text-gray-400">Measurable results</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envision a world where every company, regardless of size or
              industry, commands recognition and loyalty through a cohesive and
              authentic brand presence. Segullah Projects & Designs aims to set
              the standard for strategic branding that elevates how
              organizations communicate value and build lasting relationships.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="text-orange-500 font-semibold">Recognition</div>
                <div className="text-sm text-gray-400">Market leadership</div>
              </div>
              <div className="space-y-2">
                <div className="text-orange-500 font-semibold">Authenticity</div>
                <div className="text-sm text-gray-400">Genuine connections</div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/8147196/pexels-photo-8147196.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Vision and brand strategy"
              className="aspect-[4/3] w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
