import {
  Search,
  Lightbulb,
  Palette,
  Rocket,
  BarChart3,
  Award,
  Users,
  Layers,
  TrendingUp,
  Zap,
  Building,
  Briefcase,
  Heart,
  DollarSign,
  UtensilsCrossed,
  Laptop,
} from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description:
        'Understanding business objectives, market conditions, and stakeholder expectations through workshops and data analysis.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Strategy Development',
      description:
        'Creating a comprehensive branding blueprint defining positioning and messaging pillars.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Creative Execution',
      description:
        'Translating strategy into logos, style guides, content templates, and web designs.',
      icon: Palette,
    },
    {
      number: '04',
      title: 'Implementation & Launch',
      description:
        'Coordinated roll-out plans, onboarding support, and multi-channel launch initiatives.',
      icon: Rocket,
    },
    {
      number: '05',
      title: 'Measurement & Optimization',
      description:
        'Tracking awareness, engagement, and conversion metrics to refine and optimize brand performance.',
      icon: BarChart3,
    },
  ];

  const whySegullah = [
    {
      title: 'Strategic Rigor',
      description: 'Combining analytics and creativity',
      icon: Award,
    },
    {
      title: 'Collaborative Partnerships',
      description: 'With stakeholder involvement',
      icon: Users,
    },
    {
      title: 'Integrated Expertise',
      description: 'Across branding disciplines',
      icon: Layers,
    },
    {
      title: 'Measurable Results',
      description: 'Focused on ROI and growth',
      icon: TrendingUp,
    },
    {
      title: 'Agile Solutions',
      description: 'Tailored to client needs',
      icon: Zap,
    },
  ];

  const industries = [
    { name: 'Technology', icon: Laptop },
    { name: 'Professional Services', icon: Briefcase },
    { name: 'Consumer Goods', icon: Building },
    { name: 'Healthcare', icon: Heart },
    { name: 'Finance', icon: DollarSign },
    { name: 'Hospitality', icon: UtensilsCrossed },
  ];

  return (
    <section id="process" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div>
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-orange-500 mb-6 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A systematic approach to building brands that resonate and perform
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="grid md:grid-cols-12 gap-6 items-center group"
                >
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="text-6xl font-bold text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Segullah Projects
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySegullah.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  <Icon
                    size={40}
                    className="text-orange-500 mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries Served
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Experience across industries enables adaptation of best practices
              to diverse market dynamics.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg text-center hover:bg-orange-500 transition-all duration-300 group"
                >
                  <Icon
                    size={32}
                    className="text-orange-500 group-hover:text-white mx-auto mb-3 transition-colors"
                  />
                  <p className="text-white text-sm font-medium">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-900 p-8 md:p-12 rounded-lg border-l-4 border-orange-500">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="text-6xl text-orange-500">"</div>
            </div>
            <div>
              <p className="text-xl text-white leading-relaxed mb-6 italic">
                Working with Hava transformed our go-to-market approach. Their
                strategic insights and design execution elevated our brand
                presence and drove a 35% increase in lead generation.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Patel</p>
                  <p className="text-gray-400 text-sm">
                    CMO, TechNova Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
