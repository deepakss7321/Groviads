import React from 'react';
import { Page } from '../types';
import { Check, Shield, Globe, Award, Target, Rocket } from 'lucide-react';

interface AboutViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const values = [
    {
      title: 'Global Business Integration',
      desc: 'We operate across borders, providing continuous support and insights to capture worldwide customer segments.',
      icon: Globe
    },
    {
      title: 'Absolute Performance Focus',
      desc: 'Every keyword clustered, line of code written, and advertising dollar allocated is tracked directly to conversion KPIs.',
      icon: Target
    },
    {
      title: 'Pioneering AI Technology',
      desc: 'Our AEO, GEO, and search algorithms ensure our partners remain cited globally as Generative AI tools grow.',
      icon: Rocket
    }
  ];

  return (
    <div className="space-y-20 pb-20 animate-in fade-in duration-300" id="about-view-container">
      
      {/* Hero Header Banner */}
      <section className="bg-slate-50 border-b border-gray-150 py-16 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          WHO WE ARE
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          We Are Your Global Business Growth Partner
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          GROVIADS was created to solve a singular problem: standard digital marketing agencies focus purely on surface metrics (such as clicks or impressions) while businesses require compound bottom-line revenue.
        </p>
      </section>

      {/* Corporate Promise & Pitch Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Grow Smarter, Build Stronger, and Scale Faster alongside Veterans.
            </h2>
            
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              We compile decades of collective expertise in web development, programmatic advertising, local spatial optimization, and advanced search systems to position your startup or enterprise atop the market curve.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <div className="rounded bg-blue-50 p-1 text-blue-600 shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 leading-none">Bespoke Technology Architectures</p>
                  <p className="text-xs text-slate-500">We do not use generic WordPress templates. We write secure modular software.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <div className="rounded bg-blue-50 p-1 text-blue-600 shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 leading-none">Direct CRM & Pipeline Synchronization</p>
                  <p className="text-xs text-slate-500">We route high-intent leads to your CRM instantly to minimize follow-up friction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <div className="rounded bg-blue-50 p-1 text-blue-600 shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-900 leading-none">Generative Search Dominance (GEO)</p>
                  <p className="text-xs text-slate-500">Our custom models optimize your entity citation layout so AI recommenders cite you.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('audit')}
              className="rounded-xl bg-blue-600 hover:bg-blue-500 px-5.5 py-3.5 font-display text-xs font-bold text-white shadow-md cursor-pointer"
            >
              Get Free Growth Audit
            </button>
          </div>

          {/* Graphical Concept Box */}
          <div className="relative">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-tr from-blue-50 to-indigo-50/50 p-6 shadow-lg min-h-[300px] flex flex-col justify-between">
              <span className="font-mono text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-4">OUR LEADERSHIP COMMITMENT</span>
              <blockquote className="text-slate-700 italic font-sans text-sm md:text-base leading-relaxed">
                "Our purpose at GROVIADS is simple: we represent our clients as unified scaling partners. When local businesses, startups, or global manufacturers scale, we win alongside them. We bypass legacy SEO and generic PPC to formulate complete corporate dominance across the modern digital spectrum."
              </blockquote>
              <div className="flex items-center space-x-3 pt-6 border-t border-blue-100 mt-6 shrink-0">
                <div className="h-10 w-10 rounded-full bg-slate-300 flex items-center justify-center font-display font-black text-xs text-slate-700">DS</div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900">Deepak Sharma</h4>
                  <p className="font-mono text-[9px] text-slate-400 uppercase font-semibold">Chief Growth Officer & Executive Director</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <h2 className="text-center font-display text-xl font-extrabold text-slate-900 sm:text-2xl">
          Universal Core Value Pillars We Carry For Your Business
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v, index) => {
            const IconComp = v.icon;
            return (
              <div key={index} className="rounded-xl border border-gray-150 bg-white p-5 space-y-3 shadow-xs">
                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <IconComp className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-[15px]">{v.title}</h3>
                <p className="font-sans text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
