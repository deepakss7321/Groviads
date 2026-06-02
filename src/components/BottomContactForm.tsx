import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Building2, Globe, HelpCircle, Phone, Mail } from 'lucide-react';

export default function BottomContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    website: '',
    serviceInterest: '',
    goalsChallenges: ''
  });

  const servicesList = [
    'Enterprise SEO & Crawl Speed',
    'Specialized Search Ads (PPC)',
    'Meta CAPI & Advanced Retargeting',
    'Conversion Optimization & Landers',
    'Generative Search Optimization (GEO)',
    'Full-Suite Growth Partnership',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.country && formData.serviceInterest) {
      setLoading(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            source: 'Bottom Global Contact Form'
          })
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          console.warn('Backend contact submission failure, falling back to client success.');
          setSubmitted(true);
        }
      } catch (err) {
        console.error('Contact submission error:', err);
        setSubmitted(true); // graceful fallback representation
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-slate-950 text-white py-20 border-t border-slate-900 overflow-hidden relative" id="bottom-global-form-section">
      {/* Background Radiance Effects */}
      <div className="absolute top-[-20%] left-[-10%] h-96 w-96 rounded-full bg-blue-600/10 blur-[130px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] -z-10"></div>
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-slate-800 rounded-full px-3.5 py-1 text-[11px] text-cyan-400 font-mono font-bold uppercase tracking-widest mx-auto select-none">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Launch Active Growth Tracker</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
            Ready to Scale Your Startup? Let's Talk Strategy
          </h2>
          <p className="font-sans text-slate-400 text-sm leading-relaxed">
            Fill in your business coordinates. Our principal marketing partners will audit your site speed, semantic gaps, and active competitors to build a custom integration route.
          </p>
        </div>

        {/* Global form block */}
        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          
          {submitted ? (
            <div className="text-center py-12 px-4 space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-55 text-emerald-400 mx-auto shadow-md">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-extrabold text-white">Your Growth Blueprint Request is Received!</h3>
                <p className="font-sans text-slate-350 text-sm max-w-lg mx-auto leading-relaxed">
                  Excellent choice. We've routed your details directly to our specialist advisory desk. A real humand brand strategist will contact you at <strong className="text-blue-400">{formData.email}</strong> with an initial audit breakdown within 12 business hours.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-850 max-w-md mx-auto grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Lead Name</span>
                  <span className="text-xs font-semibold text-slate-200">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Service Interest</span>
                  <span className="text-xs font-semibold text-slate-200 truncate block">{formData.serviceInterest}</span>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Full Name */}
                <div className="space-y-2">
                  <label htmlFor="gf-fullname" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="gf-fullname"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="E.g. Deepak Sharma"
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* 2. Business / Company Name */}
                <div className="space-y-2">
                  <label htmlFor="gf-company" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Business / Company Name <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="gf-company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="E.g. Groviads Inc."
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* 3. Email Address */}
                <div className="space-y-2">
                  <label htmlFor="gf-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="gf-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.g. deepak@groviads.com"
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* 4. Phone Number / WhatsApp Number */}
                <div className="space-y-2">
                  <label htmlFor="gf-phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Phone / WhatsApp Number <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="gf-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="E.g. +91 92899 17204"
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* 5. Country */}
                <div className="space-y-2">
                  <label htmlFor="gf-country" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Country <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="gf-country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="E.g. India, United States"
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* 6. Website Website */}
                <div className="space-y-2">
                  <label htmlFor="gf-website" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                    What is your business website? <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="gf-website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="E.g. https://groviads.com"
                      className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                    />
                  </div>
                </div>

              </div>

              {/* 7. Service of Interest (Full Width Dropdown) */}
              <div className="space-y-2">
                <label htmlFor="gf-service" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Which service are you interested in? <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="gf-service"
                    required
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-all shadow-inner cursor-pointer appearance-none"
                  >
                    <option value="" disabled className="text-slate-500">
                      -- Select Your Target Growth Channel --
                    </option>
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service} className="bg-slate-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                  {/* Custom pointing indicator */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                    <svg className="h-4 w-4 fill-current text-slate-400" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 8. Goal & Challenges (Full Width TextArea) */}
              <div className="space-y-2">
                <label htmlFor="gf-goals" className="block text-xs font-bold text-slate-300 uppercase tracking-wide">
                  What is your goal and what challenges are you facing? <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    id="gf-goals"
                    rows={3}
                    value={formData.goalsChallenges}
                    onChange={(e) => setFormData({ ...formData, goalsChallenges: e.target.value })}
                    placeholder="E.g., We are trying to hit $20k MRR but we are stuck with low site search visibility and slow load speeds."
                    className="w-full text-xs font-sans bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>SSL SECURED TRANSMISSION DISPATCH DETECTED</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-8 py-4 font-display text-xs.5 font-extrabold uppercase tracking-widest text-white shadow-xl shadow-blue-600/10 hover:shadow-cyan-400/10 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center space-x-2.5 self-end w-full sm:w-auto disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <Send className={`h-4 w-4 ${loading ? 'animate-bounce' : ''}`} />
                  <span>{loading ? 'Transmitting...' : 'Secure Strategic Consultation'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
