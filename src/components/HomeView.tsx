import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { SERVICES } from '../data';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Building2, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  Search, 
  MousePointer, 
  Sliders, 
  Globe, 
  ShieldCheck, 
  Check,
  ChevronRight,
  TrendingDown,
  Activity,
  Cpu
} from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  // Startup growth diagnostic stage selector
  const [startupStage, setStartupStage] = useState<'bootstrap' | 'growth' | 'enterprise'>('bootstrap');
  
  // Tab selector for performance sandbox widget
  const [sandboxTab, setSandboxTab] = useState<'seo' | 'ppc' | 'cro'>('seo');

  // Interactive local list of simulated live active ranking targets for SEO Showcase
  const [activeRankTerm, setActiveRankTerm] = useState(0);
  const searchTermsList = [
    { term: 'enterprise pipeline scaling', rank: '#1 on Google', traffic: '+410%', kd: 'High' },
    { term: 'digital marketing services', rank: '#2 on Google', traffic: '+360%', kd: 'Very High' },
    { term: 'local business lead capture', rank: '#1 Maps Pack', traffic: '+480%', kd: 'Medium' },
    { term: 'generative AI search answer', rank: 'Cited Answer', traffic: '+520%', kd: 'High' },
    { term: 'performance ad optimization', rank: '#1 Sponsored', traffic: '+290%', kd: 'High' }
  ];

  useEffect(() => {
    const rankTimer = setInterval(() => {
      setActiveRankTerm(prev => (prev + 1) % searchTermsList.length);
    }, 4000);
    return () => clearInterval(rankTimer);
  }, []);

  // Dynamic counter increment emulation safely configured to prevent infinite loop errors
  const [counters, setCounters] = useState({ clients: 12, leads: 1350, avgRoi: 3.1 });
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => {
        const nextClients = prev.clients >= 19 ? 19 : prev.clients + 1;
        const nextLeads = prev.leads >= 1840 ? 1840 : prev.leads + 8;
        const nextRoi = prev.avgRoi >= 3.6 ? 3.6 : prev.avgRoi + 0.1;
        return { clients: nextClients, leads: nextLeads, avgRoi: parseFloat(nextRoi.toFixed(1)) };
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-28 pb-24 animate-in fade-in duration-300" id="home-view-container">
      
      {/* 1. HERO PRESTIGE BLOCK - High-Impact Layout */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-950 text-white py-24 lg:py-36">
        
        {/* Abstract Background Grid Layer & Ambient Radiance Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 rounded-full bg-blue-600/15 blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[130px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[25%] h-80 w-80 rounded-full bg-purple-500/10 blur-[110px] -z-10"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
            
            {/* Hero Left Content Text Block */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              
              {/* Premier Brand Category Label */}
              <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-1.5 text-xs text-blue-400 font-mono font-extrabold tracking-wide mx-auto lg:mx-0 select-none shadow-inner">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span className="uppercase tracking-widest">Enterprise Digital Marketing & Scaling Partners</span>
              </div>

              {/* Display Typography Header */}
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6.5xl leading-[1.08] drop-shadow-sm">
                Scale Active Inquiries with <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Digital Marketing</span> That Compounds
              </h1>

              {/* Sub-Headline description */}
              <p className="font-sans text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Forget traditional cookie-cutter tactics. We build high-performance pipelines that integrate **Enterprise SEO**, programmatic media buying, and custom Web Speedware to convert active user intent into predictable cash margins.
              </p>

              {/* Core Promise Slogan badges */}
              <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start py-1.5 font-mono text-[12.5px] font-bold text-slate-400 tracking-wider">
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/55"></span>
                  <span>PRECISE ORGANIC SEARCH</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/55"></span>
                  <span>HIGH-ROI ACQUISITION</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/55"></span>
                  <span>SPEED OPTIMIZED CONVERSION</span>
                </span>
              </div>

              {/* Core CTA Block */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setCurrentPage('audit')}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-7 py-4.5 font-display text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 hover:shadow-cyan-400/10 active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center space-x-2"
                  id="hero-primary-cta"
                >
                  <span>Claim Your Free Growth Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('interactive-growth-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 px-7 py-4.5 font-display text-sm font-semibold text-slate-200 transition-all text-center cursor-pointer"
                >
                  Project ROI Metrics
                </button>
              </div>

              {/* Trust markers */}
              <div className="pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Certified Operations Integration:</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 font-mono text-[11px] text-slate-400 font-bold">
                  <span className="hover:text-blue-400 transition-colors cursor-default">Google Premier Partner</span>
                  <span>•</span>
                  <span className="hover:text-blue-400 transition-colors cursor-default">Meta Conversions API (CAPI)</span>
                  <span>•</span>
                  <span className="hover:text-blue-400 transition-colors cursor-default">GA4 Enterprise Analytics</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Interface: Dynamic LIVE Channel Performance Sandbox */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 rounded-3xl blur-2xl"></div>
              
              {/* Glass container mimicking sleek Enterprise SaaS application */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-5 shadow-2xl relative overflow-hidden" id="hero-sandbox-dashboard">
                <div className="flex items-center justify-between border-b border-slate-850 pb-3 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    <span className="pl-1.5 font-mono text-[10px] font-bold text-slate-500 tracking-wider">SANDBOX: CHANNEL METRICS</span>
                  </div>
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 border border-blue-500/20 font-mono text-[9px] font-bold text-blue-400 animate-pulse">● FEED: ACTIVE</span>
                </div>

                {/* Simulated Segment Toggles inside visual dashboard */}
                <div className="grid grid-cols-3 gap-1 bg-slate-900 border border-slate-850 p-1 rounded-xl mb-4 text-[11px] font-mono font-bold select-none">
                  <button 
                    onClick={() => setSandboxTab('seo')}
                    className={`rounded-lg py-2 transition-all cursor-pointer text-center ${sandboxTab === 'seo' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    SEO Pillars
                  </button>
                  <button 
                    onClick={() => setSandboxTab('ppc')}
                    className={`rounded-lg py-2 transition-all cursor-pointer text-center ${sandboxTab === 'ppc' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    Paid Search
                  </button>
                  <button 
                    onClick={() => setSandboxTab('cro')}
                    className={`rounded-lg py-2 transition-all cursor-pointer text-center ${sandboxTab === 'cro' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    Crawl Speed
                  </button>
                </div>

                {/* Interactive State content switches */}
                {sandboxTab === 'seo' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="rounded-xl bg-slate-900 border border-slate-850 p-3.5 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span>ORGANIC TRACTION KEYWORD CLUSTERS</span>
                        <span className="text-emerald-400 font-bold">STATUS: DOMINATING</span>
                      </div>
                      
                      {/* Active running terms rotation simulation */}
                      <div className="flex items-center justify-between py-1 border-b border-slate-850/60">
                        <span className="font-mono text-xs text-slate-300">Target Segment:</span>
                        <span className="text-xs text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          {searchTermsList[activeRankTerm].term}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-850/60">
                        <span className="font-mono text-xs text-slate-400">Search Engine Rank:</span>
                        <span className="text-xs text-white font-mono font-bold">{searchTermsList[activeRankTerm].rank}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="font-mono text-xs text-slate-400">Quarterly Traffic Growth:</span>
                        <span className="text-xs text-emerald-400 font-mono font-semibold">{searchTermsList[activeRankTerm].traffic}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-lg bg-slate-900 border border-slate-850 p-2.5 text-center">
                        <span className="text-[9px] text-slate-500 font-mono block">DOMAIN HEALTH</span>
                        <span className="text-base text-cyan-400 font-bold font-mono">98% Perfect</span>
                      </div>
                      <div className="rounded-lg bg-slate-900 border border-slate-850 p-2.5 text-center">
                        <span className="text-[9px] text-slate-500 font-mono block">INDEXED PAGES</span>
                        <span className="text-base text-blue-400 font-bold font-mono">4.2k Active</span>
                      </div>
                    </div>
                  </div>
                )}

                {sandboxTab === 'ppc' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="rounded-xl bg-slate-900 border border-slate-850 p-3.5 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span>attribution PPC bidding matrices</span>
                        <span className="text-cyan-400 font-bold">ROI COMPRESSION STATE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="text-center rounded bg-slate-950 p-2 border border-slate-850">
                          <p className="text-[8.5px] text-slate-500 font-mono font-bold">TOTAL SPENT</p>
                          <p className="text-xs text-white font-mono font-extrabold mt-0.5">$32,040</p>
                        </div>
                        <div className="text-center rounded bg-slate-950 p-2 border border-slate-850">
                          <p className="text-[8.5px] text-slate-500 font-mono font-bold">CPL AVERAGE</p>
                          <p className="text-xs text-emerald-400 font-mono font-extrabold mt-0.5">$18.42</p>
                        </div>
                        <div className="text-center rounded bg-slate-950 p-2 border border-slate-850">
                          <p className="text-[8.5px] text-slate-500 font-mono font-bold">ROAS MULTIPLIER</p>
                          <p className="text-xs text-blue-400 font-mono font-extrabold mt-0.5">4.8x</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-900 border border-slate-850 p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-6.5 w-6.5 rounded-full bg-blue-500/25 flex items-center justify-center border border-blue-500/20">
                          <TrendingUp className="h-3.5 w-3.5 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-slate-400 font-semibold font-mono">META RETARGETING FEED</p>
                          <p className="text-[9px] text-slate-500">Pixel & server CAPI active</p>
                        </div>
                      </div>
                      <span className="text-emerald-500 text-xs font-bold font-mono">100% Attributed</span>
                    </div>
                  </div>
                )}

                {sandboxTab === 'cro' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="rounded-xl bg-slate-900 border border-slate-850 p-3.5 space-y-2.5">
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                        <span>Lighthouse Web Performance Scores</span>
                        <span className="text-emerald-400 font-bold">AUDITED GREEN</span>
                      </div>
                      <div className="space-y-2 pt-1">
                        <div>
                          <div className="flex justify-between text-[9.5px] font-mono text-slate-400 mb-1">
                            <span>Largest Contentful Paint (LCP)</span>
                            <span className="text-emerald-400 font-bold">0.42s (Fast)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[94%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9.5px] font-mono text-slate-400 mb-1">
                            <span>Cumulative Layout Shift (CLS)</span>
                            <span className="text-emerald-400 font-bold">0.01 (Stable)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[97%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-slate-900 border border-slate-850 p-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Interactive Dynamic Schema Code:</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold">VALIDATED JSON-LD</span>
                    </div>
                  </div>
                )}

                {/* Bottom Live Pulse Activity */}
                <div className="flex items-center justify-between border-t border-slate-850 pt-3.5 mt-3 text-[10.5px] text-slate-400 font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Globe className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span className="uppercase text-[9.5px]">GLOBAL INTENT CACHE</span>
                  </div>
                  <span className="text-blue-400 font-bold">PROCESSED {(counters.leads).toLocaleString()} QUERIES</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NUMERICAL SUCCESS METRICS BAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="stats-banner">
        <div className="rounded-2xl border border-slate-100 bg-white p-7 md:p-10 shadow-lg shadow-slate-100/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-blue-600 via-indigo-600 to-cyan-500"></div>
          
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-2 sm:pt-0">
              <span className="font-display text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block tracking-tight">
                {counters.clients} Active
              </span>
              <span className="font-sans text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1.5 block">
                Launch Partners Scaled
              </span>
            </div>
            <div className="pt-8 sm:pt-0">
              <span className="font-display text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block tracking-tight">
                {counters.leads.toLocaleString()}+
              </span>
              <span className="font-sans text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1.5 block">
                Verified Funnel Leads Grown
              </span>
            </div>
            <div className="pt-8 sm:pt-0">
              <span className="font-display text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent block tracking-tight">
                avg {counters.avgRoi}x
              </span>
              <span className="font-sans text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1.5 block">
                Acquisition Campaign Return
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID (THE FLAGSHIP DIGITAL MARKETING ENGINE) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50">
            INTEGRATED WEALTH GENERATORS
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4.5xl leading-tight">
            Flagship Client Acquisition Engines Powered by Real Data
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
            By shifting from unconvincing, isolated marketing tasks to automated search capture, performance media, and next-generation answering systems, we sustain enterprise revenue.
          </p>
        </div>

        {/* Beautiful modular grid for services */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="pillars-cards-grid">
          {SERVICES.map((service, sidx) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Dynamic Icon layout setup containing high visual appeal */}
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-55 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {sidx === 0 ? <TrendingUp className="h-5.5 w-5.5" /> : 
                   sidx === 2 ? <Sparkles className="h-5.5 w-5.5" /> :
                   sidx === 1 ? <Globe className="h-5.5 w-5.5" /> :
                   sidx === 4 ? <Cpu className="h-5.5 w-5.5" /> : <Rocket className="h-5.5 w-5.5" />}
                </div>
                
                {/* Header title */}
                <h3 className="font-display text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                
                <p className="font-sans text-xs.5 text-slate-500 mt-3.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Sub-services mapping to explicitly highlight SEO in Digital Marketing */}
                <div className="mt-5 pt-5 border-t border-slate-50 space-y-2">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    Featured Capabilities:
                  </span>
                  
                  {service.features.slice(0, 3).map((feat, fi) => (
                    <div key={fi} className="flex items-start space-x-2 text-[11.5px] text-slate-650">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat.split(' - ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-50">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="w-full inline-flex items-center justify-between rounded-xl bg-slate-55 hover:bg-blue-600 hover:text-white text-slate-700 font-display text-xs font-bold py-2.5 px-4 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Sub-Services Blueprint</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DEDICATED SPOTLIGHT VIEW: SEO AS THE ENGINE OF DIGITAL MARKETING */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-slate-950 text-white p-8 md:p-14 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Neon background overlays */}
          <div className="absolute top-[-20%] right-[-10%] h-96 w-96 rounded-full bg-indigo-500/10 blur-[110px] -z-10"></div>
          <div className="absolute bottom-[-10%] left-[-10%] h-80 w-80 rounded-full bg-emerald-500/5 blur-[90px] -z-10 animate-pulse"></div>

          {/* Left Text details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1 text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-widest">
              <Search className="h-3.5 w-3.5 text-emerald-400" />
              <span>Digital Marketing: SEO Flagship Engine</span>
            </div>
            
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
              Why Search Engine Optimization (SEO) Dictates Modern Acquisition Success
            </h2>
            
            <p className="font-sans text-slate-300 text-sm.5 leading-relaxed">
              Paid ads provide temporary spikes, but organic presence builds capital authority. As a prime sub-service within our **Digital Marketing Suite**, our technical and semantic SEO framework secures permanent citation spots across standard Google indices and modern generative AI engines like Gemini or ChatGPT.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">1. Semantic keyword clusters</span>
                <p className="text-[12.5px] text-slate-200">
                  We analyze intent hierarchies, creating silos that answer transactions.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-1.5">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">2. Publisher backlink outreach</span>
                <p className="text-[12.5px] text-slate-200">
                  Direct digital PR links from legitimate, context-rich domains.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
              >
                <span>Read technical SEO sub-service deliverables</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 duration-200" />
              </button>
            </div>
          </div>

          {/* Right Visual Diagram - interactive success roadmap */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 md:p-7 space-y-5 shadow-inner">
              <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                STAGED SEO GROWTH PIPELINE OVERVIEWS
              </span>

              {/* Dynamic steps showing clear timelines */}
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex items-start space-x-3.5 pb-3 border-b border-slate-850">
                  <div className="h-7 w-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-display text-xs.5 font-bold text-white uppercase tracking-wider">Crawl Audit & Speed Sanitization</h4>
                    <p className="text-[11.5px] text-slate-400 mt-0.5">We eliminate indexing blocks, accelerate viewport loads to &lt;500ms, and format JSON-LD schema.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-3.5 pb-3 border-b border-slate-850">
                  <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-display text-xs.5 font-bold text-white uppercase tracking-wider">Intent Clustering & Siloing</h4>
                    <p className="text-[11.5px] text-slate-400 mt-0.5">Map primary search keywords to transactional collections and construct contextual semantic hubs.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-3.5">
                  <div className="h-7 w-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-display text-xs.5 font-bold text-white uppercase tracking-wider">Generative Engine Optimization (GEO)</h4>
                    <p className="text-[11.5px] text-slate-400 mt-0.5">We align unstructured data structures so ChatGPT, Google Gemini, and Perplexity list your brand as the prime option.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE STARTUP GROWTH CONFIGURATOR (REPLACES CALCULATOR) */}
      <section 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 rounded-3xl bg-slate-900 text-slate-100 border border-slate-800 space-y-12 relative overflow-hidden shadow-2xl" 
        id="interactive-growth-section"
      >
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl -z-10"></div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Custom Description & Selectors (Left Column) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 pl-2.5 py-1 rounded-full border border-cyan-800/40 inline-flex items-center gap-1.5 select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Interactive Growth Configurator</span>
              </span>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl leading-snug">
                Configure Your Matching Acquisition Track
              </h3>
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                As a startup, every single dollar of digital marketing budget must contribute directly to sales. Choose your current startup growth phase below to unlock a matching strategy.
              </p>
            </div>

            {/* Custom Interactive Stage Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setStartupStage('bootstrap')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  startupStage === 'bootstrap'
                    ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-950/45 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-display text-[14px] font-bold">1. Early Bootstrapping Phase</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${startupStage === 'bootstrap' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>0-12 MONTHS</span>
                </div>
                <p className="font-sans text-xs text-slate-400 mt-1.5">For pre-revenue/seed teams validating localized keywords, optimizing core index crawls, and building initial organic momentum.</p>
              </button>

              <button
                onClick={() => setStartupStage('growth')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  startupStage === 'growth'
                    ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-950/45 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-display text-[14px] font-bold">2. Brand Expansion Phase</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${startupStage === 'growth' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>1-3 YEARS</span>
                </div>
                <p className="font-sans text-xs text-slate-400 mt-1.5">For growing brands seeking active inquiries. Integrates custom content clustering, highly specialized semantic SEO, and low-waste targeted paid social Retargeting.</p>
              </button>

              <button
                onClick={() => setStartupStage('enterprise')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  startupStage === 'enterprise'
                    ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-950/45 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-display text-[14px] font-bold">3. Multi-Channel Domination</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${startupStage === 'enterprise' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>SCALE / VENTURE</span>
                </div>
                <p className="font-sans text-xs text-slate-400 mt-1.5">Maximize permanent site authority. Custom programmatic search funnels, server-side attribution loops, generative engine optimization, and publisher backlinks.</p>
              </button>
            </div>

          </div>

          {/* Diagnostic Action Plan Checklist & Timeline (Right Column) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-850 p-6 md:p-8 space-y-6 shadow-inner relative transition-all duration-300">
              
              {/* Dynamic Header Metrics Based on selected startup stage */}
              <div className="flex flex-wrap gap-4 items-center justify-between border-b border-slate-850 pb-4">
                <div>
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest block">RECOMMENDED ACQUISITION BUDGET</span>
                  <span className="font-mono text-sm.5 font-extrabold text-blue-400">
                    {startupStage === 'bootstrap' ? '$1,000 - $3,000 /mo' :
                     startupStage === 'growth' ? '$3,000 - $8,000 /mo' : '$8,000+ /mo'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest block">LAUNCH TIMELINE</span>
                  <span className="font-mono text-sm.5 font-extrabold text-emerald-400">
                    {startupStage === 'bootstrap' ? '12 - 14 Days Setup' :
                     startupStage === 'growth' ? '15 - 20 Days Setup' : '20 - 30 Days Setup'}
                  </span>
                </div>
              </div>

              {/* Strategy Focus */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                  ACTION PLAN STEPS FOR YOUR TEAM
                </span>
                
                <div className="space-y-4.5">
                  {startupStage === 'bootstrap' && (
                    <>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">1</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Technical Crawl Sanitization</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Remove search engines' crawling bottlenecks and speed up loading for mobile visitors.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">2</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Zero-In on High-Intent Local Searches</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Set up Google Maps listings, localized meta descriptions, and regional reviews framework.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">3</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Implement Basic JSON-LD Markup</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Format correct organizational structural markups so search crawlers parse details perfectly on day one.</p>
                        </div>
                      </div>
                    </>
                  )}

                  {startupStage === 'growth' && (
                    <>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-400 shrink-0">1</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Deep Context Semantic Silos</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Engineer dense content topical maps and interlink related informational pages to build massive niche hierarchy authority.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-400 shrink-0">2</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">ROI retargeting & Segment Meta campaigns</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Stop firing costly broad-targeting ads. Use specific pixels and server event triggers to recapture warm prospects.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-indigo-400 shrink-0">3</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">High-converting Interactive Calculator Funnel</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Integrate low-friction forms and responsive valuation tools matching user inquiries instantly.</p>
                        </div>
                      </div>
                    </>
                  )}

                  {startupStage === 'enterprise' && (
                    <>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">1</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Generative Engine Optimization (GEO)</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Construct unstructured information sets to make ChatGPT, Copilot, and Gemini cite and propose your products first.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">2</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">White-Hat Publisher Authority Digital PR</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Acquire high-quality, editorial links from high-ranking news media and respected professional source blogs.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-400 shrink-0">3</div>
                        <div>
                          <h4 className="text-[13.5px] font-bold text-white leading-tight">Advanced tracking with server-side CAPI</h4>
                          <p className="text-xs text-slate-400 mt-0.5">Circumvent standard web browser cookie blockers via server-proxy API conversions mapping attribution with 100% precision.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Secondary stats metrics visual block */}
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>ESTIMATED SETUP PHASE: 100% COLLABORATIVE</span>
                <span className="text-blue-400 font-bold tracking-wider">DIAGNOSTIC BLUEPRINT recommendation</span>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Consultation callout redirecting to target lead sheet */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-7 border-t border-slate-800 space-y-4 sm:space-y-0" id="growth-cta-box">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-white font-extrabold text-sm.5">Request a customized growth blueprint session</p>
            <p className="text-slate-400 text-xs">Our core marketing consultants map out index opportunities, PPC segments, and speed blocks.</p>
          </div>
          <button
            onClick={() => setCurrentPage('audit')}
            className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-6 py-3.5 font-display text-xs.5 font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-500/10 cursor-pointer"
          >
            Claim Free Audit Profile ➔
          </button>
        </div>

      </section>

      {/* 6. TRUST EVIDENCE: ELITE BRAND LOGOS ROW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <h4 className="text-center font-display text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400">
          WE ARE ACTIVE MEMBERS & CITED INDUSTRY VOICES
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 opacity-55 select-none grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center space-x-1.5 font-display font-black text-slate-650 text-base md:text-lg">
            <Building2 className="h-4.5 w-4.5 text-blue-600" />
            <span>FORBES COUNCIL</span>
          </div>
          <div className="flex items-center space-x-1.5 font-display font-black text-slate-650 text-base md:text-lg">
            <Zap className="h-4.5 w-4.5 text-indigo-500 animate-pulse" />
            <span>TECHCRUNCH INC.</span>
          </div>
          <div className="flex items-center space-x-1.5 font-display font-black text-slate-650 text-base md:text-lg">
            <Award className="h-4.5 w-4.5 text-cyan-500" />
            <span>INC FAST 5000</span>
          </div>
          <div className="flex items-center space-x-1.5 font-display font-black text-slate-650 text-base md:text-lg">
            <Activity className="h-4.5 w-4.5 text-purple-500" />
            <span>MARKETWATCH CO.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
