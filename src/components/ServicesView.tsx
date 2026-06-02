import React, { useState } from 'react';
import { Page, Service } from '../types';
import { SERVICES } from '../data';
import { Check, ArrowRight, Stars, Sparkles, Flame, CheckSquare } from 'lucide-react';

interface ServicesViewProps {
  setCurrentPage: (page: Page) => void;
  setSelectedServiceFilter: (serviceId: string) => void;
  setSelectedServiceId: (id: string) => void;
}

export default function ServicesView({ setCurrentPage, setSelectedServiceFilter, setSelectedServiceId }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marketing' | 'performance' | 'development' | 'ai'>('all');

  const categories: { label: string; id: 'all' | 'marketing' | 'performance' | 'development' | 'ai' }[] = [
    { label: 'All Growth Pillars', id: 'all' },
    { label: 'Search & Marketing', id: 'marketing' },
    { label: 'Paid Ads Performance', id: 'performance' },
    { label: 'Web & App Engineering', id: 'development' },
    { label: 'AI Growth Solutions', id: 'ai' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const startAuditingForService = (serviceName: string) => {
    setSelectedServiceFilter(serviceName);
    setCurrentPage('audit');
  };

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="services-view-container">
      
      {/* Header section */}
      <section className="bg-slate-50 border-b border-gray-150 py-14 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          OUR SERVICE PILLARS
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Complete, ROI-Driven Solutions for Modern Businesses
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          From capturing targeted user queries inside LLMs to deploying high-transaction custom digital storefronts, we build the growth assets that deliver enterprise-grade performance.
        </p>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-6 max-w-4xl mx-auto px-4" id="services-categories-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4.5 py-2 text-xs font-display font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid list */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12" id="filtered-services-list">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative group overflow-hidden"
            >
              {/* Dynamic visual indicator badge */}
              <div className="absolute top-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-cyan-400 w-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Service Identifier and Description (Col 7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-bold font-mono">
                    {idx + 1}
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
                    {service.category === 'ai' ? '💡 AI & NEXT-GEN' : '✓ ENTERPRISE CAPABILITY'}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>

                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {service.longDesc}
                </p>

                {/* Technical service breakdown list */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-display font-bold text-xs text-slate-800 uppercase tracking-wide">Included Sub-Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub, sidx) => (
                      <span
                        key={sidx}
                        className="rounded-lg bg-gray-55 border border-gray-200 text-slate-600 font-mono text-[10.5px] px-2.5 py-1"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary redirection CTA targeting the service detail sheet */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setCurrentPage('service-detail');
                    }}
                    className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 font-display text-[13px] font-bold shadow-md inline-flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

              {/* Bulleted High-Impact Features Card (Col 5) */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-indigo-50/20 p-6 md:p-8 border border-gray-150 space-y-6">
                <div>
                  <h4 className="font-display font-extrabold text-slate-900 text-sm leading-none flex items-center space-x-1.5">
                    <Stars className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>How We Drive Results</span>
                  </h4>
                  <p className="text-[11.5px] text-slate-500 font-sans mt-1">Our specific deliverables for this pillar block:</p>
                </div>

                <ul className="space-y-4 text-xs font-sans text-slate-700" id={`service-features-list-${service.id}`}>
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start space-x-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro satisfaction badge */}
                <div className="pt-4 border-t border-gray-200/60 text-[10px] text-emerald-600 font-mono flex items-center space-x-1.5">
                  <CheckSquare className="h-3.5 w-3.5" />
                  <span>100% COMPLIANT WITH INDUSTRY COMPLIANCE BEST-PRACTICES</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
