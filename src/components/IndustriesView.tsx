import React, { useState } from 'react';
import { Page, IndustryData } from '../types';
import { INDUSTRIES } from '../data';
import { AlertCircle, Lightbulb, TrendingUp, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface IndustriesViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function IndustriesView({ setCurrentPage }: IndustriesViewProps) {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTREIS_SAFE_ID());

  function INDUSTREIS_SAFE_ID() {
    return INDUSTRIES && INDUSTRIES.length > 0 ? INDUSTRIES[0].id : '';
  }

  const activeIndustry = INDUSTRIES.find(ind => ind.id === activeIndustryId) || INDUSTRIES[0];

  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setExpandedFAQIndex(expandedFAQIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="industries-view-container">
      
      {/* Banner Intro */}
      <section className="bg-slate-50 border-b border-gray-150 py-14 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          GLOBAL INDUSTRES WE SERVE
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Laser-Focused Growth Blueprints in Your Niche Industry
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          Generalist agencies fail because they do not understand your operational models or industry compliance terms. We deploy custom architectures built specifically to solve your unique domain challenges.
        </p>

        {/* Industry selector tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 pt-6 max-w-4xl mx-auto px-4" id="industries-selector-tabs">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setActiveIndustryId(ind.id);
                setExpandedFAQIndex(null);
              }}
              className={`rounded-xl px-4.5 py-2.5 text-xs font-display font-semibold transition-all cursor-pointer ${
                activeIndustryId === ind.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>
      </section>

      {/* Main interactive diagnostic grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {activeIndustry && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" id="active-industry-card-panel">
            
            {/* Column Left (Col 7): Challenges, Solutions & Benefits */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Challenge Panel block */}
              <div className="rounded-2xl border border-red-100 bg-red-50/20 p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2.5 text-red-700 font-display font-bold text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>INDUSTRY-SPECIFIC OBSTACLES</span>
                </div>
                <ul className="space-y-4 text-xs font-sans text-slate-600">
                  {activeIndustry.challenges.map((ch, idx) => (
                    <li key={idx} className="flex space-x-2.5">
                      <span className="font-mono font-bold text-red-500 shrink-0">0{idx + 1}.</span>
                      <p className="leading-relaxed">{ch}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution architecture panel */}
              <div className="rounded-2xl border border-blue-150 bg-blue-50/10 p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2.5 text-blue-700 font-display font-bold text-sm">
                  <Lightbulb className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>THE GROVIADS SOLUTION ARCHITECTURE</span>
                </div>
                <ul className="space-y-4 text-xs font-sans text-slate-700">
                  {activeIndustry.solutions.map((sol, idx) => (
                    <li key={idx} className="flex space-x-2.5 items-start">
                      <span className="h-4.5 w-4.5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold font-mono mt-0.5 shrink-0">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{sol}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Column Right (Col 5): ROI, CaseSnippet & FAQs */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* ROI and Benefits Card */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 text-white p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2.5 text-cyan-400 font-display font-bold text-xs font-mono uppercase tracking-widest">
                  <TrendingUp className="h-4.5 w-4.5" />
                  <span>Measurable Growth Impact</span>
                </div>
                <div className="grid grid-cols-1 gap-4 divide-y divide-slate-800 pt-2">
                  {activeIndustry.benefits.map((ben, idx) => (
                    <p key={idx} className="font-sans text-slate-350 text-xs py-2 first:pt-0 leading-relaxed">
                      ✓ {ben}
                    </p>
                  ))}
                </div>
                
                {/* Client case snippet indicator */}
                <div className="rounded-xl bg-slate-950 p-4 border border-slate-850 mt-4 space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">verified index success:</span>
                  <p className="font-sans italic text-slate-300 text-xs leading-relaxed">
                    "{activeIndustry.caseSnippet}"
                  </p>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4" id="industry-faqs-accordion">
                <h4 className="font-display font-bold text-slate-900 text-sm flex items-center space-x-2">
                  <HelpCircle className="h-4.5 w-4.5 text-blue-600" />
                  <span>Frequently Asked Questions</span>
                </h4>
                <div className="space-y-3.5">
                  {activeIndustry.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="flex w-full items-center justify-between font-display font-semibold text-slate-800 hover:text-blue-600 text-xs text-left cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[14px] text-blue-500 font-bold ml-2">
                          {expandedFAQIndex === idx ? '−' : '+'}
                        </span>
                      </button>
                      {expandedFAQIndex === idx && (
                        <p className="font-sans text-slate-500 text-[11.5px] leading-relaxed mt-2.5 animate-in fade-in duration-200">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Big redirect action CTA */}
              <button
                onClick={() => setCurrentPage('audit')}
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 p-4 font-display text-xs font-bold shadow-lg flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Audit My {activeIndustry.name} Strategy</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </div>

          </div>
        )}
      </section>

    </div>
  );
}
