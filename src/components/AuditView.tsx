import React, { useState, useEffect } from 'react';
import { Page, LeadSubmission, AuditResult } from '../types';
import { COUNTRIES, BUDGET_RANGES, SERVICES } from '../data';
import { CheckCircle2, AlertCircle, Stars, Clock, Calendar, Sparkles, Send, ShieldAlert, ArrowRight, Check } from 'lucide-react';

interface AuditViewProps {
  setCurrentPage: (page: Page) => void;
  preFilledMessage: string;
  setPreFilledMessage: (msg: string) => void;
  selectedServiceFilter: string;
  setSelectedServiceFilter: (service: string) => void;
}

export default function AuditView({ 
  setCurrentPage, 
  preFilledMessage, 
  setPreFilledMessage,
  selectedServiceFilter,
  setSelectedServiceFilter 
}: AuditViewProps) {
  
  // Lead Form state
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: COUNTRIES[0],
    service: selectedServiceFilter || SERVICES[0].name,
    budget: BUDGET_RANGES[0],
    message: preFilledMessage || ''
  });

  // Sync state if pre-filled triggers change
  useEffect(() => {
    if (preFilledMessage) {
      setFormData(prev => ({ ...prev, message: preFilledMessage }));
    }
  }, [preFilledMessage]);

  useEffect(() => {
    if (selectedServiceFilter) {
      setFormData(prev => ({ ...prev, service: selectedServiceFilter }));
    }
  }, [selectedServiceFilter]);

  // Loading States and step logs
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const loadingStepsText = [
    'Initializing GROVIADS Digital Footprint Crawler...',
    'Analyzing organizational brand entities on Wikidata networks...',
    'Parsing LLM indices (ChatGPT, Claude, Gemini citation databases)...',
    'Auditing tech stack, responsive metadata headers & layout shifts...',
    'Diagnosing performance acquisition metrics and PPC campaigns...',
    'Structuring custom growth roadmap metrics via Gemini models...'
  ];

  // Report state
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [noticeMsg, setNoticeMsg] = useState('');
  
  // Booking Appointment state
  const [bookedDate, setBookedDate] = useState('');
  const [bookedTime, setBookedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Trigger loading progression effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      timer = setInterval(() => {
        setLoadingStep(prev => {
          if (prev < loadingStepsText.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 1400);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(timer);
  }, [loading]);

  const handleSubmitAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyName || !formData.email) return;

    setLoading(true);
    setAuditResult(null);
    setNoticeMsg('');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data && data.result) {
        setAuditResult(data.result);
        if (data.notice) {
          setNoticeMsg(data.notice);
        }
      } else {
        throw new Error('Audit processing failed');
      }
    } catch (err) {
      console.error('Audit processing error:', err);
    } finally {
      setLoading(false);
      // Clear routing states
      setPreFilledMessage('');
      setSelectedServiceFilter('');
    }
    
    // Smooth scroll down to view results
    setTimeout(() => {
      const el = document.getElementById('audit-assessment-report-card');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookedDate && bookedTime) {
      setBookingSuccess(true);
    }
  };

  const resetAudit = () => {
    setAuditResult(null);
    setBookingSuccess(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: COUNTRIES[0],
      service: SERVICES[0].name,
      budget: BUDGET_RANGES[0],
      message: ''
    });
  };

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="audit-view-container">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 border-b border-gray-150 py-14 text-center space-y-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          FREE 30-MINUTE GROWTH AUDIT
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Get Your Bespoke Multi-Phase Action Audit
        </h1>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed px-4">
          Provide your details below to activate our crawler. Receive concrete technical diagnostics and a chronological roadmap outlining quick wins to scale your bottom-line.
        </p>
      </section>

      {/* 2. Form Panel & Processing Loader */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {!auditResult && !loading && (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-lg relative overflow-hidden" id="audit-lead-form-box">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

            <div className="flex items-center space-x-2 text-slate-400 mb-6 font-mono text-[11px] font-bold">
              <Sparkles className="h-4.5 w-4.5 text-blue-500 animate-spin-slow" />
              <span>CRAWLER IS ACTIVE: 100% SECURE & PRIVATE ENCRYPTION</span>
            </div>

            <form onSubmit={handleSubmitAudit} className="space-y-6" id="lead-audit-data-form">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                
                {/* Full name */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-fullName" className="text-xs font-semibold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    id="aud-fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="E.g. Deepak Sharma"
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-companyName" className="text-xs font-semibold text-slate-700">Company / Website Name *</label>
                  <input
                    type="text"
                    id="aud-companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="E.g. Nexus Financial / nexuscorp.com"
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-email" className="text-xs font-semibold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    id="aud-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. contact@groviads.com"
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-phone" className="text-xs font-semibold text-slate-700">Phone Number (WhatsApp Direct)</label>
                  <input
                    type="tel"
                    id="aud-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g. +91 92899 17204"
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Country dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-country" className="text-xs font-semibold text-slate-700">Target Region / Country</label>
                  <select
                    id="aud-country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    {COUNTRIES.map((ct) => (
                      <option key={ct} value={ct}>{ct}</option>
                    ))}
                  </select>
                </div>

                {/* Target service select */}
                <div className="space-y-1.5">
                  <label htmlFor="aud-service" className="text-xs font-semibold text-slate-700">Service Area of Focus</label>
                  <select
                    id="aud-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.name}>{serv.name}</option>
                    ))}
                    <option value="Complete Growth Transformation">Complete Growth Transformation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget Select dropdown */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="aud-budget" className="text-xs font-semibold text-slate-700">Current Monthly Marketing Budget</label>
                  <select
                    id="aud-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    {BUDGET_RANGES.map((rng) => (
                      <option key={rng} value={rng}>{rng}</option>
                    ))}
                  </select>
                </div>

                {/* Textarea message box */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="aud-message" className="text-xs font-semibold text-slate-700">Website URLs, Objectives, & Existing Bottlenecks</label>
                  <textarea
                    id="aud-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please inventory your active web URLs (e.g. yourcompany.com), priority target keywords, or organizational challenges so our AI structures more precise advice."
                    className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-3 focus:outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {/* Glowing CTA submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-display text-[14px] font-bold py-4 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Book My Free Consultation & Generate Audit</span>
                </button>
              </div>

              <p className="text-center text-[10px] text-slate-400 font-sans mt-3">
                100% Free of Cost. No credit credentials required. We fully safeguard proprietary data.
              </p>
            </form>

          </div>
        )}

        {/* LOADING SCREEN SYSTEM */}
        {loading && (
          <div className="rounded-3xl border border-gray-200 bg-slate-950 p-8 md:p-14 text-center text-white shadow-xl space-y-8 animate-pulse" id="crawler-progress-loader">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500 mx-auto text-blue-400">
              <Sparkles className="h-6 w-6 animate-spin-slow" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-lg font-bold text-slate-100">AI Diagnostic Engine is Auditing...</h3>
              <p className="font-sans text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                Please stand by while we analyze entity graphs, loading times, and crawl meta indicators.
              </p>
            </div>

            {/* Stepped progress indicators log box */}
            <div className="max-w-md mx-auto text-left rounded-xl bg-slate-900 border border-slate-850 p-5 font-mono text-[11px] text-cyan-400 space-y-2.5">
              {loadingStepsText.map((stepText, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className={`${loadingStep === idx ? 'text-emerald-400 animate-pulse font-bold' : loadingStep > idx ? 'text-emerald-500' : 'text-slate-650'}`}>
                    {loadingStep > idx ? '✓' : '●'}
                  </span>
                  <span className={loadingStep === idx ? 'text-slate-200 font-bold' : loadingStep > idx ? 'text-slate-400' : 'text-slate-650'}>
                    {stepText}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] font-mono text-slate-500">OPTIMIZATION SEQUENCE: DURATION APPROX 10 SECONDS</p>
          </div>
        )}
      </section>

      {/* 3. GENERATED DYNAMIC REPORT SHEET */}
      {auditResult && !loading && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in zoom-in-95 duration-320">
          
          {/* Main Assessment Header & Dial Card */}
          <div 
            className="rounded-3xl border border-gray-250/85 bg-white p-6 md:p-10 shadow-2xl relative overflow-hidden" 
            id="audit-assessment-report-card"
          >
            
            {/* Top glowing identifier bar */}
            <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Dial score indicators (Col 4) */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-3 border-b md:border-b-0 md:border-r border-gray-150 pb-6 md:pb-0 md:pr-6 md:pr-8">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-black">Digital Performance Ranking</span>
                
                {/* Circular visual Dial score ring */}
                <div className="relative h-32 w-32 flex items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  {/* Glowing text center */}
                  <div className="text-center">
                    <span className="font-display text-4xl font-black text-slate-800 leading-none">{auditResult.score}</span>
                    <span className="text-slate-400 text-xs block font-mono font-bold mt-0.5">/ 100</span>
                  </div>
                  {/* Inline visual ring markers */}
                  <span className="absolute top-1 right-2 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span className="absolute bottom-4 left-1 h-1.5 w-1.5 rounded-full bg-teal-400 animate-ping"></span>
                </div>

                <div className="rounded-full bg-amber-50 border border-amber-100 px-3.5 py-0.5 mt-2">
                  <p className="font-mono text-[10px] text-amber-700 font-bold uppercase">GRADE: REQUIRES OPTIMIZATION</p>
                </div>
              </div>

              {/* Executive Summary (Col 8) */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-slate-900 md:text-2xl">
                    Growth Engine Profiling Result
                  </h3>
                  <span className="rounded bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 font-mono text-[9px] font-bold">100% SPECIFIC</span>
                </div>

                <p className="font-sans text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {auditResult.executiveSummary}
                </p>

                {noticeMsg && (
                  <p className="font-mono text-[11px] text-slate-400 select-none italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    * {noticeMsg}
                  </p>
                )}
              </div>

            </div>

          </div>

          {/* 3Audited Pillar Details Grid */}
          <div className="grid grid-cols-1 gap-8" id="audit-pillars-analysis-rows">
            {auditResult.pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="rounded-3xl border border-gray-250 bg-white p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative group hover:shadow-md transition-shadow"
              >
                {/* Visual scorecard indicator */}
                <div className="lg:col-span-3 lg:border-r lg:border-gray-150 lg:pr-6 space-y-3 h-full flex flex-col justify-between pb-4 lg:pb-0">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block">PILLAR DIAGNOSTIC 0{pIdx + 1}</span>
                    <h4 className="font-display text-base font-bold text-slate-900 mt-1">{pillar.title}</h4>
                  </div>
                  
                  {/* Pillar Score Badge */}
                  <div className="flex items-center space-x-2.5 pt-2">
                    <span className="font-display font-black text-2xl text-blue-600">{pillar.score}</span>
                    <div className="w-full bg-slate-100 h-2 rounded overflow-hidden">
                      <div className="bg-blue-600 h-full rounded" style={{ width: `${pillar.score}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Findings (Col 4) */}
                <div className="lg:col-span-4 space-y-3 md:border-r md:border-gray-150 md:pr-4">
                  <div className="flex items-center space-x-1.5 text-xs font-display font-black text-red-600 uppercase tracking-wider">
                    <ShieldAlert className="h-4 w-4" />
                    <span>Technical Discoveries</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-650 font-sans" id={`findings-${pIdx}`}>
                    {pillar.findings.map((finding, fId) => (
                      <li key={fId} className="flex items-start space-x-2">
                        <span className="text-red-500 font-bold shrink-0">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations (Col 5) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center space-x-1.5 text-xs font-display font-black text-emerald-600 uppercase tracking-wider">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Immediate Corrections</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700 font-sans" id={`recoms-${pIdx}`}>
                    {pillar.recommendations.map((rec, rId) => (
                      <li key={rId} className="flex items-start space-x-2.5">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

          {/* Chronological Action Roadmap Timeline */}
          <div className="rounded-3xl border border-slate-900 bg-slate-950 text-white p-6 md:p-10 shadow-xl space-y-8 relative">
            <span className="text-[9px] font-mono text-slate-500 uppercase font-bold tracking-widest block">TACTICAL SEQUENCE MAP</span>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">Chronological Implementation Timeline</h3>
              <p className="font-sans text-slate-400 text-xs max-w-xl">
                The strategic steps required to restore score points, deploy search schemas, and activate organic inbound performance flows.
              </p>
            </div>

            <div className="relative border-l border-slate-800 ml-3.5 space-y-8 pt-2" id="timeline-roadmap-nodes">
              {auditResult.roadmap.map((node, nIdx) => (
                <div key={nIdx} className="relative pl-7 group">
                  
                  {/* Timeline dot */}
                  <span className="absolute left-[-6px] top-1 h-3 w-3 rounded-full bg-cyan-400 border border-slate-950 ring-2 ring-cyan-500/30 group-hover:scale-125 transition-transform"></span>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    
                    {/* Timing Badge (Col 3) */}
                    <div className="md:col-span-3 flex items-center space-x-2">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">{node.term}</span>
                    </div>

                    {/* Task details (Col 7) */}
                    <p className="md:col-span-7 font-sans text-slate-200 text-xs leading-relaxed">
                      {node.action}
                    </p>

                    {/* Impact ranking tag (Col 2) */}
                    <div className="md:col-span-2 flex justify-end">
                      <span className={`text-[10px] font-mono font-bold rounded px-2.5 py-0.5 uppercase ${
                        node.impact === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {node.impact} Impact
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SOLIDIFY BOOKING SCHEDULER BLOCK */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-lg space-y-6" id="appointment-scheduler-block">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">SCHEDULER DESK</span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">Secure Strategy Briefing & Audit Review</h3>
              <p className="font-sans text-slate-500 text-xs">
                Review these visual findings alongside GROVIADS strategic engineers in an absolute free 30-minute online Zoom meeting. Select a time below to secure your booking.
              </p>
            </div>

            {bookingSuccess ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-100 p-6 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h4 className="font-display font-extrabold text-slate-900 text-base leading-none">Your Strategy Briefing is Confirmed!</h4>
                <p className="font-sans text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                  We scheduled your session for <strong>{bookedDate}</strong> at <strong>{bookedTime} (GMT/Local Time)</strong>. Review outlines have been logged under email <strong>{formData.email}</strong>. Our scaling analyst will transmit direct video bridge details shortly!
                </p>
                <div className="pt-2">
                  <button
                    onClick={resetAudit}
                    className="text-xs font-mono font-bold text-blue-600 underline"
                  >
                    Generate another digital audit diagnostic profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="max-w-md mx-auto space-y-4" id="simulated-booking-form">
                <div className="grid grid-cols-2 gap-4">
                  {/* Date slot */}
                  <div className="space-y-1.5">
                    <label htmlFor="sch-date" className="text-xs font-bold text-slate-700 block select-none">Preferred Date</label>
                    <input
                      type="date"
                      id="sch-date"
                      required
                      value={bookedDate}
                      onChange={(e) => setBookedDate(e.target.value)}
                      className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  {/* Time slot select */}
                  <div className="space-y-1.5">
                    <label htmlFor="sch-time" className="text-xs font-bold text-slate-700 block select-none">Preferred Time Slot</label>
                    <select
                      id="sch-time"
                      required
                      value={bookedTime}
                      onChange={(e) => setBookedTime(e.target.value)}
                      className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 bg-white"
                    >
                      <option value="">Select Time Slot</option>
                      <option value="10:00 AM">10:00 AM (Morning slots)</option>
                      <option value="12:30 PM">12:30 PM (Midday logs)</option>
                      <option value="03:00 PM">03:00 PM (Afternoon sync)</option>
                      <option value="05:30 PM">05:30 PM (Late slot)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display text-xs font-bold py-3.5 tracking-wider transition-colors cursor-pointer"
                >
                  Finalize Strategy Booking Briefing ➔
                </button>
              </form>
            )}
          </div>

        </section>
      )}

    </div>
  );
}
