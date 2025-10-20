import React from 'react';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Aligning marketing initiatives with business objectives to drive measurable growth',
    },
    {
      icon: Sparkles,
      title: 'Creative Excellence',
      description: 'Crafting campaigns that captivate audiences and build lasting brand affinity',
    },
    {
      icon: Users,
      title: 'People-Centered',
      description: 'Building authentic connections through consumer insights and empathetic engagement',
    },
    {
      icon: Zap,
      title: 'Results-Driven',
      description: 'Delivering consistent performance with data-backed strategies and execution',
    },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#FF6B6B] font-semibold tracking-wider uppercase text-sm">
                About Me
              </span>
              <div className="w-20 h-1 bg-[#FF6B6B] mt-2"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Transforming Brands,
              <span className="block text-[#0A4D5C] mt-2">One Story at a Time</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                With over 9 years of experience in the dynamic worlds of telecom and FMCG, I've
                had the privilege of leading marketing initiatives that don't just reach
                audiences—they resonate with them. From launching Nigeria's first 5G smartphone to
                designing CSR programs that touched over 100,000 lives, every campaign is an
                opportunity to create meaningful impact.
              </p>
              <p>
                My approach blends strategic thinking with creative storytelling. I believe in the
                power of data to inform decisions and the magic of human connection to inspire
                action. Whether orchestrating nationwide activations or building digital communities
                of 2M+ followers, I'm driven by one mission: helping brands discover their voice and
                amplify their influence.
              </p>
              <p>
                Beyond the metrics and milestones, I'm passionate about mentoring teams, fostering
                innovation, and proving that marketing, when done right, can be a force for both
                business growth and social good.
              </p>
            </div>

            <div className="pt-4">
              <div className="relative inline-block">
                <p className="font-signature text-4xl text-[#0A4D5C]" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Taiwo Mojisola
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#0A4D5C] via-[#FF6B6B] to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:border-[#0A4D5C]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0A4D5C] to-[#083d49] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
