import React from 'react';
import { Page } from '../types';
import { CASE_STUDIES } from '../data';
import { Check, Calendar, Activity, ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudiesViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function CaseStudiesView({ setCurrentPage }: CaseStudiesViewProps) {
  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="case-studies-view-container">
      
      {/* Intro block */}
      <section className="bg-slate-50 border-b border-gray-150 py-14 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          CLIENT CASE FILES & RESULTS
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Real Revenue Scaling Reports Proven with Accurate Audits
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          We don't deal with hypothetical traffic numbers. Our clients measure growth in terms of inbound calls, lower acquisition costs, and millions of dollars in completed transaction value.
        </p>
      </section>

      {/* Case studies listing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16" id="case-studies-list-container">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden"
            >
              
              {/* Left Column (Col 7): Client overview, Challenge & Strategy */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className={`h-6.5 px-3 rounded-full text-white ${study.logoCode} font-bold flex items-center justify-center`}>
                    {study.client.substring(0, 2).toUpperCase()}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-700 font-bold uppercase bg-slate-50 border border-slate-100 rounded-full px-3 py-0.5">{study.industry}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-500 flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{study.duration}</span>
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold md:text-2xl text-slate-900 tracking-tight leading-snug">
                  {study.title}
                </h3>

                {/* Challenge Block */}
                <div className="space-y-2">
                  <h4 className="font-display font-black text-xs text-red-600 uppercase tracking-wide">Client Obstacles:</h4>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Strategy Block */}
                <div className="space-y-2">
                  <h4 className="font-display font-black text-xs text-blue-600 uppercase tracking-wide">Our Optimization Strategy:</h4>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {study.strategy}
                  </p>
                </div>

                {/* Before and After comparative grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-150 pt-6">
                  <div className="rounded-xl border border-red-100 bg-red-50/10 p-4 space-y-1">
                    <span className="text-[10px] font-mono text-red-500 font-bold uppercase tracking-wider block">PRE-GROVIADS STATE</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{study.beforeAfter.before}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/10 p-4 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider block">POST-SYSTEM STATE</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">{study.beforeAfter.after}</p>
                  </div>
                </div>

              </div>

              {/* Right Column (Col 5): ROI, Results & Direct consultations call */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 text-white p-6 md:p-8 space-y-6 relative overflow-hidden flex flex-col justify-between">
                
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl"></div>

                <div className="space-y-6">
                  {/* Top Glowing Metric Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-wider font-bold">Compound yield attribution</span>
                    <div className="rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 px-3 py-1 font-mono text-xs font-bold flex items-center space-x-1 animate-pulse">
                      <Activity className="h-3 w-3" />
                      <span>verified</span>
                    </div>
                  </div>

                  {/* Gigantic ROI Number Representation */}
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 uppercase">Tracked ROI standard:</span>
                    <h4 className="font-display text-3xl font-extrabold text-white tracking-tight flex items-center space-x-2">
                      <TrendingUp className="h-7 w-7 text-emerald-400" />
                      <span>{study.roiMetric}</span>
                    </h4>
                  </div>

                  {/* Bullet results checklist */}
                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <h5 className="font-display text-xs font-bold text-slate-300 uppercase tracking-wide">Key Scaled Results:</h5>
                    <ul className="space-y-3 font-sans text-xs text-slate-300" id={`case-metrics-${study.id}`}>
                      {study.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Redirection Consultation Panel Action */}
                <div className="pt-6 border-t border-slate-800 mt-6 md:mt-10">
                  <button
                    onClick={() => setCurrentPage('audit')}
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display text-xs font-bold py-3.5 flex items-center justify-center space-x-1 px-4 tracking-wide cursor-pointer"
                  >
                    <span>Request Similar Case Strategy</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
