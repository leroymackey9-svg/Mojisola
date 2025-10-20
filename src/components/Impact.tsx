import React from 'react';
import { Award, TrendingUp, Users, Target, Star, Trophy } from 'lucide-react';

const Impact = () => {
  const awards = [
    {
      title: '35 Under 35 Marketing Professionals',
      organization: 'Brand Communications Award',
      year: '2024',
      icon: Star,
    },
    {
      title: 'Transformation Innovator of the Year',
      organization: 'Transsion Holdings',
      year: '2023',
      icon: Trophy,
    },
    {
      title: 'Fearless Pioneer of the Year',
      organization: 'Transsion Holdings',
      year: '2022',
      icon: Award,
    },
    {
      title: 'Best Marketing Staff of the Year',
      organization: 'Itel Mobile Nigeria',
      year: '2018-2021, 2023',
      icon: Trophy,
    },
    {
      title: 'Progressive Staff Award',
      organization: 'Itel Mobile',
      year: '2020',
      icon: Star,
    },
  ];

  const metrics = [
    {
      value: '5M+',
      label: 'Consumers Engaged',
      description: 'Direct brand interactions nationwide',
      icon: Users,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      value: '35%',
      label: 'YoY Growth',
      description: 'Sales pipeline increase delivered',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      value: '100K+',
      label: 'Lives Impacted',
      description: 'Through CSR initiatives',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
    },
    {
      value: '2M+',
      label: 'Social Followers',
      description: 'Built across digital platforms',
      icon: Star,
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="impact" className="py-32 bg-gradient-to-br from-slate-50 via-teal-50/30 to-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-[#0A4D5C]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#FF6B6B] font-semibold tracking-wider uppercase text-sm">
              Track Record
            </span>
            <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Impact Measured in
            <span className="block text-[#0A4D5C] mt-2">Numbers & Recognition</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A proven track record of delivering exceptional results while earning industry
            recognition for innovation and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#0A4D5C]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${metric.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <metric.icon className="text-white" size={24} />
                </div>

                <div className="text-4xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-[#0A4D5C] mb-2">{metric.label}</div>
                <p className="text-sm text-slate-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-10 lg:p-16 border border-slate-100 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Awards & Recognition</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Honored for excellence, innovation, and leadership in marketing and brand communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <award.icon className="text-white" size={28} />
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#B8941F] text-xs font-bold px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {award.title}
                  </h4>

                  <p className="text-sm text-slate-600">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0A4D5C] to-[#083d49] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led nationwide campaigns reaching 5M+ consumers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered 35% YoY growth in sales pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Managed 3 major product launches exceeding targets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built social media presence to 2M+ followers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved marketing ROI by 20% through data-driven optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FF6B6B] to-[#E85A5A] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Industry Impact</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pioneered 5G smartphone launch in Nigerian market</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Set new benchmarks for CSR community engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Established brand as leader in social responsibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced campaign costs by 15% through strategic partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Increased lead-to-sale conversion by 30%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
