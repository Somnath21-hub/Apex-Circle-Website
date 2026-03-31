import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Twitter, Github, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Message sent successfully! (This is a frontend-only demo)');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-32">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
            // Connect_Protocol
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Get in <br /> <span className="text-slate-500">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Have a question, a proposal, or just want to say hello? We're always looking for new
            collaborators and visionaries.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="space-y-8 md:space-y-12 mb-16 md:mb-24">
              <div className="flex items-center gap-6 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-primary transition-all">
                  <Mail className="text-primary" size={24} md:size={32} />
                </div>
                <div>
                  <h4 className="text-primary font-mono text-[10px] uppercase tracking-widest mb-1 md:mb-2">
                    Email_Sync
                  </h4>
                  <p className="text-xl md:text-2xl font-brutal uppercase tracking-tight">
                    hello@apexcircle.io
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-secondary transition-all">
                  <MessageSquare className="text-secondary" size={24} md:size={32} />
                </div>
                <div>
                  <h4 className="text-secondary font-mono text-[10px] uppercase tracking-widest mb-1 md:mb-2">
                    Discord_Node
                  </h4>
                  <p className="text-xl md:text-2xl font-brutal uppercase tracking-tight">
                    discord.gg/apexcircle
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-tertiary transition-all">
                  <Globe className="text-tertiary" size={24} md:size={32} />
                </div>
                <div>
                  <h4 className="text-tertiary font-mono text-[10px] uppercase tracking-widest mb-1 md:mb-2">
                    Global_HQ
                  </h4>
                  <p className="text-xl md:text-2xl font-brutal uppercase tracking-tight">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 md:gap-8">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 md:w-16 md:h-16 bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/30 transition-all"
                >
                  <Icon size={20} md:size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg md:text-xl font-brutal uppercase"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg md:text-xl font-brutal uppercase"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg md:text-xl font-brutal uppercase"
                  placeholder="Collaboration Proposal"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg md:text-xl font-brutal uppercase resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-black px-10 py-6 uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 group"
              >
                Send Message
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24 md:mt-48 mb-24 md:mb-48">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Common_Queries
            </span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Frequently Asked <span className="text-slate-500">Questions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'How can I join the community?',
                a: "You can join by clicking the 'Join Community' button and following the application process.",
              },
              {
                q: 'Are hackathons open to beginners?',
                a: 'Yes, we welcome builders of all skill levels and provide mentors to help you along the way.',
              },
              {
                q: 'How can I sponsor an event?',
                a: "Please reach out via the contact form with the subject 'Sponsorship Proposal'.",
              },
              {
                q: 'What is the membership fee?',
                a: 'Standard membership is free. Premium protocol access is merit-based.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:border-primary transition-colors"
              >
                <h4 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-4 text-primary">
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support / Help Center */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01] text-center">
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-8">
            Need <span className="text-slate-500">Support?</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            Our technical support team is available 24/7 for protocol-related issues and community
            assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
              Access Help Center
            </button>
            <button className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-white transition-colors border-b border-secondary pb-1">
              Open Support Ticket
            </button>
            <button className="text-[10px] font-black uppercase tracking-widest text-tertiary hover:text-white transition-colors border-b border-tertiary pb-1">
              Protocol Documentation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
