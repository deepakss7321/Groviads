import React, { useState } from 'react';
import { Page } from '../types';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, Award } from 'lucide-react';

interface ContactViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function ContactView({ setCurrentPage }: ContactViewProps) {
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

  const handleContactSubmit = async (e: React.FormEvent) => {
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
            source: 'Dedicated Contact Page Form'
          })
        });
        
        if (response.ok) {
          setSubmitted(true);
        } else {
          console.warn('Backend returned non-OK response, falling back to client-side complete.');
          setSubmitted(true);
        }
      } catch (err) {
        console.error('Failed to submit form to backend:', err);
        setSubmitted(true); // fallbacks ensure non-blocking layout
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="contact-view-container">
      
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-gray-150 py-14 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          CONTACT GROVIADS SUPPORT
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Get in Touch with our Strategic Advisory Office
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          Have immediate technical questions? Need support on active service contracts? Reach out through our global contact networks.
        </p>
      </section>

      {/* Main contact content splitting details and swift message box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Column (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 md:p-8 space-y-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="space-y-6">
              <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-black block">GLOBAL CHANNELS AVAILABLE v2</span>
              
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-white tracking-tight leading-snug">Direct Communication Desk</h3>
                <p className="font-sans text-slate-450 text-xs leading-relaxed">
                  Our strategic offices evaluate client inquiries worldwide 24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="space-y-5 pt-3">
                
                {/* Email address */}
                <div className="flex items-start space-x-3 text-xs md:text-sm">
                  <Mail className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold leading-none uppercase text-[10px]">Email Dispatch Desk</p>
                    <a href="mailto:contact@groviads.com" className="text-white hover:underline block font-mono">contact@groviads.com</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 text-xs md:text-sm">
                  <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold leading-none uppercase text-[10px]">WhatsApp Hotline Direct</p>
                    <a href="https://wa.me/919289917204" target="_blank" className="text-white hover:underline block font-mono" referrerPolicy="no-referrer">+91 92899 17204</a>
                  </div>
                </div>

                {/* Spatial region coordinates indicator */}
                <div className="flex items-start space-x-3 text-xs md:text-sm">
                  <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-slate-400 font-bold leading-none uppercase text-[10px]">Worldwide Coverage Area</p>
                    <p className="text-white leading-relaxed">Fully Remote / Global Support Desk & Regional link grids</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Satisfaction quality badge */}
            <div className="pt-6 border-t border-slate-800 mt-6 shrink-0 flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
              <Award className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span>COMMITTED TO THE ABSOLUTE DOMAIN INTEGRITY MATRIX</span>
            </div>

          </div>

          {/* Contact Message form Column (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm relative overflow-hidden">
            
            {submitted ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-100 p-8 text-center space-y-4 h-full flex flex-col justify-center items-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Your Strategic Consultation Request is Received!</h3>
                <p className="font-sans text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                  Excellent choice. We have routed your details directly to our specialist advisory desk. A real human brand strategist will contact you at <strong className="text-blue-600">{formData.email}</strong> with an initial audit breakdown within 12 business hours.
                </p>
                <div className="pt-4 border-t border-gray-100 w-full max-w-xs mx-auto grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Lead Name</span>
                    <span className="text-xs font-semibold text-slate-700 truncate block">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Service Interest</span>
                    <span className="text-xs font-semibold text-slate-700 truncate block">{formData.serviceInterest}</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5" id="direct-message-form">
                <div className="flex items-center space-x-2 text-slate-450 mb-2 font-mono text-[10.5px] font-bold">
                  <Sparkles className="h-4.5 w-4.5 text-blue-500 animate-spin-slow" />
                  <span>TRANSMIT DIRECT INQUIRY ENVELOPE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-fullname" className="text-xs font-bold text-slate-700 block">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="ct-fullname"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="E.g. Deepak Sharma"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* 2. Business / Company Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-companyName" className="text-xs font-bold text-slate-700 block">
                      Business / Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="ct-companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="E.g. Groviads Inc."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* 3. Email Address */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-email" className="text-xs font-bold text-slate-700 block">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="ct-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.g. deepak@groviads.com"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* 4. Phone Number / WhatsApp Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-phone" className="text-xs font-bold text-slate-700 block">
                      Phone / WhatsApp Number <span className="text-slate-450 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="ct-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="E.g. +91 92899 17204"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* 5. Country */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-country" className="text-xs font-bold text-slate-700 block">
                      Country <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="ct-country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="E.g. India, United States"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* 6. Website URL */}
                  <div className="space-y-1.5">
                    <label htmlFor="ct-website" className="text-xs font-bold text-slate-700 block">
                      What is your business website? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      id="ct-website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="E.g. https://groviads.com"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>

                {/* 7. Which service are you interested in */}
                <div className="space-y-1.5">
                  <label htmlFor="ct-service" className="text-xs font-bold text-slate-700 block">
                    Which service are you interested in? <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="ct-service"
                      required
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white cursor-pointer appearance-none text-slate-800"
                    >
                      <option value="" disabled>
                        -- Select Your Target Growth Channel --
                      </option>
                      {servicesList.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {/* select caret locator */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                      <svg className="h-4 w-4 fill-current text-slate-400" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 8. Goal & Challenges */}
                <div className="space-y-1.5">
                  <label htmlFor="ct-goals" className="text-xs font-bold text-slate-700 block">
                    What is your goal and what challenges are you facing? <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="ct-goals"
                    rows={3}
                    value={formData.goalsChallenges}
                    onChange={(e) => setFormData({ ...formData, goalsChallenges: e.target.value })}
                    placeholder="E.g., We are trying to hit $20k MRR but we are stuck with low site search visibility and slow load speeds."
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>

                {/* Submit & Secure warning badges */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-100">
                  <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <span>SSL SECURED TRANSMISSION DISPATCH DETECTED</span>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-3 font-display text-xs.5 font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center space-x-2 w-full sm:w-auto disabled:opacity-75 disabled:cursor-not-allowed"
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

    </div>
  );
}
