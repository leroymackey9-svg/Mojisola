import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ogunpaimotaiwo@gmail.com',
      href: 'mailto:ogunpaimotaiwo@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234-703-865-3060',
      href: 'tel:+2347038653060',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'taiwo-mojisola-ogunpaimo',
      href: 'https://www.linkedin.com/in/taiwo-mojisola-ogunpaimo',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-100 to-transparent rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#FF6B6B] font-semibold tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mt-2"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Let's Create
            <span className="block text-[#0A4D5C] mt-2">Something Extraordinary</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Ready to elevate your brand? Whether you're looking for strategic consultation,
            campaign leadership, or partnership opportunities, let's connect and explore how we can
            drive exceptional results together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-[#0A4D5C] to-[#083d49] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.label === 'LinkedIn' ? '_blank' : undefined}
                            rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                            className="text-white font-medium hover:text-[#FF6B6B] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Open to Opportunities</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={18} />
                  <span>Strategic Marketing Consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={18} />
                  <span>Brand Leadership Roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={18} />
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={18} />
                  <span>Partnership Opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#0A4D5C] flex-shrink-0 mt-0.5" size={18} />
                  <span>Mentorship & Advisory</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
              <p className="text-slate-600 mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A4D5C] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A4D5C] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A4D5C] focus:border-transparent transition-all"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A4D5C] focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A4D5C] text-white py-4 rounded-xl font-semibold hover:bg-[#083d49] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl px-8 py-6">
            <p className="text-slate-600">
              © 2025 Taiwo Mojisola Ogunpaimo. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Award-Winning Marketing & Brand Communications Strategist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
