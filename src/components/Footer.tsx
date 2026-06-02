import React, { useState } from 'react';
import { Page } from '../types';
import { Sparkles, Mail, Phone, Clock, ArrowRight, Linkedin, MessageSquare } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setEmailSubscribed(true);
      setSubEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 relative overflow-hidden" id="footer-section">
      {/* Decorative subtle ambient cyan blur */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl -z-10"></div>
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Brand block */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                GROVI<span className="text-blue-400">ADS</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              Global Business Growth Partner. Accelerating startups, SMEs, and enterprises through AI-powered search optimization, performance marketing, and high-converting technology solutions.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-3.5 w-3.5 text-cyan-500" />
                <span>Availability: 24/7 Worldwide Services</span>
              </div>
              <p className="pl-5 text-emerald-400 font-semibold">● 100% Free Preliminary Audits</p>
            </div>
          </div>

          {/* Quick links pages */}
          <div>
            <h3 className="font-display text-[15px] font-bold uppercase tracking-wider text-white mb-5">
              Service Pillars
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 text-slate-400 transition-colors text-left"
                >
                  AI SEO, GEO & AEO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 text-slate-400 transition-colors text-left"
                >
                  Google & Meta Performance Ads
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 text-slate-400 transition-colors text-left"
                >
                  Web Maintenance & Redesign
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 text-slate-400 transition-colors text-left"
                >
                  Cross-Platform App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="hover:text-blue-400 text-slate-400 transition-colors text-left"
                >
                  Business Growth Advising
                </button>
              </li>
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <h3 className="font-display text-[15px] font-bold uppercase tracking-wider text-white mb-5">
              Global Offices & Contact
            </h3>
            <ul className="space-y-3.5 text-sm" id="footer-contact-info">
              <li>
                <a 
                  href="mailto:contact@groviads.com" 
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>contact@groviads.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919289917204" 
                  target="_blank"
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors animate-pulse"
                  referrerPolicy="no-referrer"
                >
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: +91 9289917204</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/groviads/" 
                  target="_blank"
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                  referrerPolicy="no-referrer"
                >
                  <span className="text-blue-400 font-bold text-xs font-mono shrink-0">In /</span>
                  <span>LinkedIn Page</span>
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-xs block pt-2 font-mono">
                  Supported Tags: Google Analytics 4, Meta Pixel, Tag Manager
                </span>
              </li>
            </ul>
          </div>

          {/* Business growth newsletter */}
          <div>
            <h3 className="font-display text-[15px] font-bold uppercase tracking-wider text-white mb-5">
              Get Growth Insights
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Get weekly strategies on GEO, search marketing trends, conversion optimization tips, and startup metrics benchmarks.
            </p>
            {emailSubscribed ? (
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-xs text-center">
                🎉 Welcome to GROVIADS Insights! We will transmit strategy briefs directly.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" id="footer-newsletter-form">
                <div className="flex overflow-hidden rounded-xl bg-slate-800 border border-slate-700 focus-within:border-blue-500 transition-colors">
                  <input
                    type="email"
                    required
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-transparent px-3 py-2 text-xs text-white focus:outline-none placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 font-sans block">
                  Unsubscribe with 1-click. Compliance with global opt-out logs.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:flex md:items-center md:justify-between text-xs text-slate-500" id="footer-legal-bar">
          <p>© 2026 GROVIADS Global. All rights reserved. Registered Business Consultancies.</p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0 font-display">
            <button 
              onClick={() => setCurrentPage('privacy')} 
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')} 
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
