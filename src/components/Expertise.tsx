import React from 'react';
import {
  Megaphone,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Globe,
  Heart,
  Target,
} from 'lucide-react';

const Expertise = () => {
  const skills = [
    {
      icon: Megaphone,
      title: 'Brand & Marketing Leadership',
      items: ['Multi-channel Campaigns', 'Brand Positioning', 'Competitive Strategy', 'Market Penetration'],
      level: 95,
    },
    {
      icon: Target,
      title: 'ATL & BTL Campaigns',
      items: ['Product Launches', 'Experiential Events', 'Nationwide Activations', 'Roadshows'],
      level: 98,
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      items: ['Social Media Strategy', 'SEO/SEM', 'Influencer Marketing', 'Paid Media'],
      level: 92,
    },
    {
      icon: Heart,
      title: 'CSR & Partnerships',
      items: ['Community Engagement', 'Sponsorship Strategy', 'Impact Initiatives', 'Stakeholder Relations'],
      level: 96,
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Analytics',
      items: ['KPI Tracking', 'ROI Measurement', 'Market Research', 'Campaign Optimization'],
      level: 90,
    },
    {
      icon: Users,
      title: 'Team Leadership',
      items: ['Cross-functional Collaboration', 'Talent Development', 'Performance Management', 'Coaching'],
      level: 94,
    },
    {
      icon: Lightbulb,
      title: 'Product Launch Excellence',
      items: ['Go-to-Market Strategy', 'Consumer Insights', 'Launch Events', 'Market Testing'],
      level: 97,
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      items: ['Workflow Efficiency', 'Budget Management', 'Resource Allocation', 'Quality Assurance'],
      level: 88,
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-gradient-to-br from-slate-50 to-teal-50/30 relative overflow-hidden">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-coral-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#FF6B6B] font-semibold tracking-wider uppercase text-sm">
              Core Competencies
            </span>
            <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Strategic Expertise that
            <span className="block text-[#0A4D5C] mt-2">Delivers Results</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A comprehensive skill set honed through years of driving successful campaigns,
            launching iconic products, and building brands that resonate with millions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#0A4D5C]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0A4D5C]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A4D5C] to-[#083d49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <skill.icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0A4D5C] transition-colors">
                  {skill.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Proficiency</span>
                    <span className="text-[#0A4D5C] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0A4D5C] to-[#FF6B6B] rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animation: `growWidth 1.5s ease-out ${index * 0.1}s both`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#0A4D5C] to-[#083d49] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B6B]/10 rounded-full blur-3xl"></div>

          <div className="relative text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Certifications & Continuous Learning</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-bold mb-3 text-[#FF6B6B]">Professional Certifications</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Advanced Brand Management (2025)</li>
                  <li>• PMP - Project Management Professional (2023)</li>
                  <li>• Certified Digital Marketing Professional (2022)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-[#FF6B6B]">Academic Excellence</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• MBA, Business Administration (2024)</li>
                  <li>• PG Diploma in Business Foundation (2024)</li>
                  <li>• HND in Food Science & Technology (2016)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-[#FF6B6B]">Specialized Training</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Digital Marketing Mastery</li>
                  <li>• Marketing Communications</li>
                  <li>• SEO & Content Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
