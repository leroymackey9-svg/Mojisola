import React from 'react';
import { ArrowRight, Award, Briefcase, TrendingUp } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pt-32 pb-20"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-coral-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-100 animate-fadeInUp">
              <Award className="text-[#D4AF37]" size={18} />
              <span className="text-sm font-medium text-slate-700">
                Award-Winning Marketing Strategist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight animate-fadeInUp animation-delay-200">
                Taiwo Mojisola
                <span className="block text-[#0A4D5C] mt-2">Ogunpaimo</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 font-light animate-fadeInUp animation-delay-400">
                Transforming brands through strategic marketing excellence
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl animate-fadeInUp animation-delay-600">
              Senior Marketing & Brand Communications Strategist with 9+ years driving
              high-impact campaigns across telecom and FMCG sectors. Proven track record of
              delivering 35% YoY growth and engaging millions of consumers nationwide.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-800">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-[#0A4D5C] text-white px-8 py-4 rounded-full hover:bg-[#083d49] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="font-semibold">Let's Connect</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#case-studies"
                className="flex items-center gap-2 bg-white text-[#0A4D5C] px-8 py-4 rounded-full border-2 border-[#0A4D5C] hover:bg-[#0A4D5C] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="font-semibold">View Work</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp animation-delay-1000">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 text-3xl font-bold text-[#0A4D5C]">
                  <TrendingUp size={28} className="text-[#FF6B6B]" />
                  9+
                </div>
                <p className="text-sm text-slate-600 mt-1">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 text-3xl font-bold text-[#0A4D5C]">
                  <Briefcase size={28} className="text-[#FF6B6B]" />
                  15+
                </div>
                <p className="text-sm text-slate-600 mt-1">Major Campaigns</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 text-3xl font-bold text-[#0A4D5C]">
                  <Award size={28} className="text-[#FF6B6B]" />
                  6+
                </div>
                <p className="text-sm text-slate-600 mt-1">Awards Won</p>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fadeIn animation-delay-400"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A4D5C] to-[#083d49] aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1 group-hover:border-l-[#FF6B6B] transition-colors"></div>
                  </div>
                  <p className="text-white/90 font-medium">Watch Introduction</p>
                  <p className="text-white/60 text-sm max-w-xs mx-auto">
                    Discover how strategic marketing transforms brands and drives exceptional growth
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D5C]/90 to-transparent"></div>

              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">2:30</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF6B6B] rounded-3xl opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-3xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
