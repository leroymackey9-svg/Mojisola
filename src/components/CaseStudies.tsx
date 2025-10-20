import React, { useState } from 'react';
import { Smartphone, Users, Heart, Trophy, ExternalLink, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      icon: Smartphone,
      title: 'P55 Series Launch',
      subtitle: "Nigeria's First 5G Smartphone",
      category: 'Product Launch',
      year: '2023',
      objective:
        'Launch the P55 as a market disruptor in the competitive Nigerian smartphone market, establishing Itel as a technology innovator.',
      strategy:
        'Orchestrated a comprehensive 360° campaign combining ATL media blitz with experiential BTL activations across major Nigerian cities.',
      execution: [
        'Nationwide roadshow covering 15 cities with interactive demo zones',
        'Strategic partnerships with tech influencers and media outlets',
        'Social media campaign generating 10M+ impressions',
        'In-store activation programs with sales training',
      ],
      tools: ['ATL Media', 'BTL Activations', 'Digital Marketing', 'Influencer Partnerships'],
      results: [
        '20% increase in brand awareness within launch quarter',
        'Record-breaking first-month sales exceeding targets by 35%',
        'Over 5M direct consumer engagements',
        'Positioned Itel as innovation leader in budget 5G segment',
      ],
      color: 'from-blue-500 to-purple-600',
      image: '📱',
    },
    {
      icon: Heart,
      title: 'Future Super Hero CSR',
      subtitle: 'Partnership with Olamide',
      category: 'CSR Initiative',
      year: '2022',
      objective:
        'Create an authentic CSR program that builds emotional connection with youth while delivering tangible community impact.',
      strategy:
        'Partnered with Nigerian music icon Olamide to design a youth empowerment program combining entertainment, education, and social impact.',
      execution: [
        'Multi-city tour with live performances and workshops',
        'Skills development programs for 10,000+ young Nigerians',
        'Scholarship initiative for underprivileged students',
        'Digital content series amplifying youth success stories',
      ],
      tools: ['Celebrity Partnerships', 'Community Engagement', 'Digital Storytelling', 'Event Management'],
      results: [
        '100,000+ lives impacted through direct programs',
        '40% increase in brand affinity among target demographic',
        'Media coverage worth $500K+ in earned value',
        'Industry recognition: Transformation Innovator Award 2023',
      ],
      color: 'from-red-500 to-pink-600',
      image: '❤️',
    },
    {
      icon: Trophy,
      title: 'Itel Brand Relaunch',
      subtitle: 'Beginning of a New Era',
      category: 'Brand Repositioning',
      year: '2023',
      objective:
        'Reposition Itel from budget option to aspirational value brand that delivers quality without compromise.',
      strategy:
        'Comprehensive brand refresh combining new visual identity with integrated marketing campaign showcasing product innovation and customer success stories.',
      execution: [
        'Brand identity redesign with modern, premium aesthetic',
        'Launch campaign across TV, radio, OOH, and digital platforms',
        'Customer testimonial series highlighting real experiences',
        'Retail environment transformation in 500+ stores nationwide',
      ],
      tools: ['Brand Strategy', 'ATL Campaigns', 'Retail Marketing', 'Content Marketing'],
      results: [
        'Brand perception score improved by 45%',
        'Market share growth from 12% to 18% in 12 months',
        'Sales pipeline increase of 35% YoY',
        '2M+ social media followers across platforms',
      ],
      color: 'from-teal-500 to-green-600',
      image: '🚀',
    },
    {
      icon: Users,
      title: 'Play for Power Competition',
      subtitle: 'Football & Brand Engagement',
      category: 'Experiential Marketing',
      year: '2021',
      objective:
        'Leverage football passion to create memorable brand experiences and drive grassroots engagement across Nigeria.',
      strategy:
        'Designed nationwide football tournament combining sports entertainment with product demonstrations and community building.',
      execution: [
        'Regional qualifiers in 20 states engaging 5,000+ participants',
        'Live finals event with celebrity appearances',
        'Mobile charging stations powered by Itel products',
        'Social media contest generating UGC and viral moments',
      ],
      tools: ['Event Marketing', 'Sports Sponsorship', 'Grassroots Activation', 'Social Media'],
      results: [
        'Direct engagement with 50,000+ consumers',
        'Social media reach of 15M+ impressions',
        'Product trial leading to 25% conversion rate',
        'Established template for future sports marketing initiatives',
      ],
      color: 'from-orange-500 to-yellow-600',
      image: '⚽',
    },
  ];

  return (
    <section id="case-studies" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-100 to-transparent rounded-full blur-3xl opacity-30 transform -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#FF6B6B] font-semibold tracking-wider uppercase text-sm">
              Portfolio
            </span>
            <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Case Studies that
            <span className="block text-[#0A4D5C] mt-2">Define Excellence</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            From product launches to CSR initiatives, every campaign tells a story of strategic
            thinking, creative execution, and measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {cases.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeCase === index
                  ? 'border-[#0A4D5C] bg-gradient-to-br from-[#0A4D5C]/5 to-transparent shadow-lg scale-105'
                  : 'border-slate-100 bg-white hover:border-[#0A4D5C]/30 hover:shadow-md'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${caseStudy.color} text-3xl`}
              >
                {caseStudy.image}
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{caseStudy.title}</h3>
              <p className="text-sm text-slate-600">{caseStudy.subtitle}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                  {caseStudy.category}
                </span>
                <span className="text-xs text-slate-500">{caseStudy.year}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 lg:p-16 border border-slate-100 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${cases[activeCase].color} text-4xl shadow-lg`}
                  >
                    {cases[activeCase].image}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">{cases[activeCase].title}</h3>
                    <p className="text-slate-600">{cases[activeCase].subtitle}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-3">
                  Objective
                </h4>
                <p className="text-slate-700 leading-relaxed">{cases[activeCase].objective}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-3">
                  Strategy
                </h4>
                <p className="text-slate-700 leading-relaxed">{cases[activeCase].strategy}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-3">
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cases[activeCase].tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-700 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-4">
                  Execution
                </h4>
                <ul className="space-y-3">
                  {cases[activeCase].execution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <ChevronRight className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-4">
                  Results & Impact
                </h4>
                <div className="space-y-4">
                  {cases[activeCase].results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-[#0A4D5C]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0A4D5C] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 font-medium">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
