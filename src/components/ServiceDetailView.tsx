import React, { useState } from 'react';
import { Page, Service } from '../types';
import { SERVICES } from '../data';
import { 
  ArrowLeft, Check, Sparkles, TrendingUp, Cpu, 
  Briefcase, MapPin, ShieldCheck, Target, BarChart3, 
  Clock, Zap, ExternalLink, HelpCircle, ChevronDown, ChevronUp 
} from 'lucide-react';

interface ServiceDetailViewProps {
  serviceId: string;
  setCurrentPage: (page: Page) => void;
  setSelectedServiceFilter: (serviceName: string) => void;
}

// Custom curated mock deep dive content for each service to maintain architectural integrity & authenticity.
const SERVICE_DEEP_DIVES: Record<string, {
  tagline: string;
  idealFor: string;
  metrics: { label: string; value: string; desc: string }[];
  process: { phase: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  caseHighlight: { title: string; desc: string; stat: string };
}> = {
  'digital-marketing': {
    tagline: 'Supercharge your organic and paid acquisition engines for maximum growth velocity.',
    idealFor: 'B2B software platforms, high-growth startups, and multi-regional commerce operations looking to build a repeatable lead engine.',
    metrics: [
      { label: 'Avg organic traffic uptick', value: '+142%', desc: 'Within first 90-120 days of strategic index crawler optimization.' },
      { label: 'Tracked ad cost reduction', value: '-35%', desc: 'Via precise semantic click filtering and exact landing page sync.' },
      { label: 'Lead form volume increase', value: '+84%', desc: 'With one-click verification field triggers.' }
    ],
    process: [
      { phase: '01', title: 'Audit & Semantic Mapping', desc: 'We scan your competitors, find coverage gaps, and catalog high-intent transactional search words.' },
      { phase: '02', title: 'Speed & Architecture Tuning', desc: 'We speed up page-loads and style responsive landers that decrease checkout abandonment.' },
      { phase: '03', title: 'Campaign & Funnel Execution', desc: 'We launch high-ROI Paid search patterns paired with automated remarketing loops.' },
      { phase: '04', title: 'Continuous CAPI Optimization', desc: 'We track every conversion using server-side pixels for perfect revenue attribution.' }
    ],
    caseHighlight: {
      title: 'Global Fintech Platform Scales High-Intent Inbounds',
      desc: 'By cleaning technical index crawl errors and matching paid social retargeting ads with dynamic customized price calculators.',
      stat: '18.2x Return on Ad Spend (ROAS)'
    },
    faqs: [
      { q: 'How long before we see organic search traffic increases?', a: 'Structural fixes inside crawling indexing show index results in 14-25 days. Compound SEO content starts capturing major conversions around weeks 8-12.' },
      { q: 'What makes your paid ads management different under the GROVIADS platform?', a: 'We never bid on broad broad match terms. We construct hyper-segmented single keyword ad groups (SKAGs) and build a distinct landing page for every single keyword group for 100% relevance.' }
    ]
  },
  'local-seo': {
    tagline: 'Map pack domination and local search citations designed to capture premium nearby customers.',
    idealFor: 'Multi-location dental groups, regional clinics, developers, and local professional service providers commanding a local physical market.',
    metrics: [
      { label: 'GBP Proximity Dominance', value: '3-Pack', desc: 'Capture top local map rankings across multiple physical operating zip codes.' },
      { label: 'Direct click-to-call growth', value: '+210%', desc: 'Direct, validated phone calls generated via local action triggers.' },
      { label: 'Completed review velocity', value: '4.8x', desc: 'Average increase in natural client rating counts post-checkout.' }
    ],
    process: [
      { phase: '01', title: 'Citation Audit & Cleansing', desc: 'We fix mismatched NAP (Name, Address, Phone) details across all web listings.' },
      { phase: '02', title: 'GBP Proximity Optimization', desc: 'We map hyper-local coordinates and keyword categories for maximum map relevance.' },
      { phase: '03', title: 'Automatic Review Loops', desc: 'We connect automated feedback forms into your CRM to prompt post-visit feedback.' },
      { phase: '04', title: 'Regional Cover Pages', desc: 'We launch mobile-first neighborhood directory indexes on your central site.' }
    ],
    caseHighlight: {
      title: 'Aurora Clinic Dominates Map Packs',
      desc: 'Corrected inconsistent suite listings across directories and automated clinic reviews via patient post-care emails.',
      stat: '310% More Maps Clicks'
    },
    faqs: [
      { q: 'How do you handle multiple physical office addresses?', a: 'We construct dedicated local child-landing pages for each operating address, implement localized Schema markup, and sync individual Google Business profiles for each location.' },
      { q: 'Can you help cleanse historical bad citations?', a: 'Absolutely. We track down duplicate or outdated listings and systematically update them to maintain structural integrity across directories.' }
    ]
  },
  'ai-seo-aeo-geo': {
    tagline: 'Establish entity authority and secure your spot as the primary answer cited in LLMs.',
    idealFor: 'Forward-looking SaaS teams, technology startups, and knowledge agencies preparing for the zero-click generative search search era.',
    metrics: [
      { label: 'Generative search quote volume', value: '+450%', desc: 'Times your brand is listed as the recommended solution by Gemini & ChatGPT.' },
      { label: 'Semantic entity confidence', value: '98%', desc: 'Clean, verified registration of your brand inside primary external knowledge graphs.' },
      { label: 'Conversational index coverage', value: 'Top-3', desc: 'We optimize questions to answer intent structures perfectly for Alexa & Siri.' }
    ],
    process: [
      { phase: '01', title: 'LLM Response Profiling', desc: 'We test Gemini, ChatGPT, and Perplexity to see how they currently respond to your vertical queries.' },
      { phase: '02', title: 'Knowledge Graph Insertion', desc: 'We insert your brand entities into verified hubs like Wikidata and semantic schema headers.' },
      { phase: '03', title: 'RAG Structure Layout', desc: 'We reformat content into conversational questions and concise statements LLMs retrieve easily.' },
      { phase: '04', title: 'Digital PR Citation Loops', desc: 'We secure back-links inside major trusted industry source reports to boost AI trust scores.' }
    ],
    caseHighlight: {
      title: 'Precision D2C Brand Cited via Perplexity and Gemini',
      desc: 'Deployed structured Q&As and micro-schema tables, making our client the leading quoted recommendation for technical tools.',
      stat: '+650 Citations Inside AI Engines'
    },
    faqs: [
      { q: 'What is the main difference between traditional SEO and GEO?', a: 'SEO focuses on ranking links inside search results. GEO (Generative Engine Optimization) focuses on getting your brand named, cited, and summarized inside AI-generated conversational response boxes.' },
      { q: 'Is conversational markup required?', a: 'Yes. Structured QA blocks, JSON-LD Schema definitions, and low-complexity semantic structures are required to help LLM crawlers parse and recommend your business.' }
    ]
  },
  'performance-marketing': {
    tagline: 'Stop wasting marketing dollars. Run laser-focused acquisition scales with server-side proxy tracking.',
    idealFor: 'E-commerce storefronts, software platforms, and B2B leaders wanting immediate lead volume under rigid CAC guardrails.',
    metrics: [
      { label: 'Attributed Return on Ad Spend', value: '4.2x', desc: 'Average calculated ROAS within 90 days across active client campaigns.' },
      { label: 'Server tracking accuracy', value: '100%', desc: 'Circumvent client browser cookie blocks using Meta Conversions API (CAPI).' },
      { label: 'Lead form completion rate', value: '+3.1%', desc: 'Conversion increase via highly focused single-problem landing forms.' }
    ],
    process: [
      { phase: '01', title: 'Bidding Re-segmentation', desc: 'We bypass broad search matching to map absolute commercial high-intent buyers.' },
      { phase: '02', title: 'Creative Hook Testing', desc: 'We iterate dynamic high-contrast ad copy and visual hooks every week.' },
      { phase: '03', title: 'Server CAPI Integration', desc: 'We map events directly from the database server to capture lost browser attributions.' },
      { phase: '04', title: 'Dynamic Retargeting Funnels', desc: 'We sequence low-waste remarketing ads to warm buyers who engaged recently.' }
    ],
    caseHighlight: {
      title: 'Apparel E-com Brand Triple Monthly Inbound Rate',
      desc: 'Implemented server-side Conversions API (CAPI) mapping and tested high-contrast custom landing checkouts.',
      stat: '+$165,000 Monthly Revenue Growth'
    },
    faqs: [
      { q: 'How does server-side Conversions API (CAPI) protect my tracking data?', a: 'Traditional browser cookies are often blocked by ad blockers and browser privacy tools. CAPI sends raw purchase events directly from our server to Meta/Google, guaranteeing accurate attribution.' },
      { q: 'What is your minimum monthly ad budget recommendation?', a: 'We recommend starting with an ad budget of at least $1,500/month to guarantee sufficient signal data and run high-efficiency tests quickly.' }
    ]
  },
  'web-app-development': {
    tagline: 'Lightning-fast, highly custom React and Mobile application builds made to convert.',
    idealFor: 'Startups building their first MVP product, SaaS teams migrating old monolithic tech, and businesses requiring seamless client flows.',
    metrics: [
      { label: 'Initial viewport load speed', value: '450ms', desc: 'Absolute lightning loading times that achieve perfect Core Web Vitals grades.' },
      { label: 'Completed mobile transition', value: '100%', desc: 'Responsive view scoring designed for all touch devices.' },
      { label: 'Security scan compliance', value: 'Perfect', desc: 'Secure database layers with automated SSL checks and clean API logic.' }
    ],
    process: [
      { phase: '01', title: 'Interface UX Wireframing', desc: 'We map clean user journeys to minimize the steps required to buy or submit.' },
      { phase: '02', title: 'Modular Tech Selection', desc: 'We build with fast, modern stacks like React, Vite, Node, and Tailwind CSS.' },
      { phase: '03', title: 'Dynamic Calculators & Widgets', desc: 'We code interactive tools to keep visitors active and interested.' },
      { phase: '04', title: 'Optimization & API Hookups', desc: 'We integrate your core CRMs, analytics pipelines, and secure payment setups.' }
    ],
    caseHighlight: {
      title: 'Headless React Shopify Build Boosts Mobile Conversion',
      desc: 'By migrating an old slow WooCommerce backend to custom modular React viewport codes.',
      stat: 'Perfect Core Web Vitals Score'
    },
    faqs: [
      { q: 'Do you work with custom databases and backends?', a: 'Yes. We build responsive full-stack setups using Cloud Databases, custom Express route proxies, and robust API endpoints that shield keys.' },
      { q: 'Do you provide ongoing technical site maintenance?', a: 'Of course. We provide full code reviews, package upgrades, speed monitoring, and scheduled security checks to prevent downtime.' }
    ]
  },
  'business-consulting': {
    tagline: 'Vet your unit economics, refine your sales pitch, and unlock the next phase of client growth.',
    idealFor: 'Seed-stage founders, startup CEOs, and local brands wanting to systematize sales pipelines.',
    metrics: [
      { label: 'Average startup ARR growth', value: '2.5x', desc: 'Compound ARR jump within 12 months under active diagnostic mentorship.' },
      { label: 'Sales workflow time saved', value: '12hr', desc: 'Weekly automated time saved by replacing slow manuals with automated CRM tasks.' },
      { label: 'Client acquisition cost (CAC)', value: '-22%', desc: 'Improvement in customer metrics via calculated market targeting audits.' }
    ],
    process: [
      { phase: '01', title: 'Unit Economics Diagnostics', desc: 'We analyze your pricing, margins, customer lifetime value (LTV), and CAC targets.' },
      { phase: '02', title: 'Sales Workflow Automation', desc: 'We design custom automated tracking tasks to eliminate slow response times.' },
      { phase: '03', title: 'Competitor Intelligence Maps', desc: 'We catalog and scan rival offers, keywords, and unique value propositions.' },
      { phase: '04', title: 'Scale & Expansion Playbooks', desc: 'We define exact localized milestones to help you capture seed or venture rounds easily.' }
    ],
    caseHighlight: {
      title: 'Fintech Secure series-A funding round',
      desc: 'Refined complex GTM pricing metrics and built verifiable acquisition maps for high-growth venture pitches.',
      stat: '$4.5M Secure Series-A Runway'
    },
    faqs: [
      { q: 'Who leads the strategic consulting calls?', a: 'All sessions are led directly by our veteran chief growth director, ensuring you receive immediate, high-value tactical feedback.' },
      { q: 'Do you help prepare investment assets?', a: 'Yes. We support with metric structuring, go-to-market forecasting, and landing page demos to validate value propositions.' }
    ]
  }
};

export default function ServiceDetailView({ serviceId, setCurrentPage, setSelectedServiceFilter }: ServiceDetailViewProps) {
  const service = SERVICES.find(s => s.id === serviceId);
  const deepDive = SERVICE_DEEP_DIVES[serviceId] || SERVICE_DEEP_DIVES['digital-marketing'];
  
  // Accordion state tracker for detailed FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center space-y-6">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <button 
          onClick={() => setCurrentPage('services')}
          className="rounded-xl bg-slate-900 text-white px-6 py-2.5 text-xs font-bold"
        >
          Return to Services
        </button>
      </div>
    );
  }

  // Choose the visual theme accents dynamically for high-fidelity rhythmic layout
  const isAiService = service.category === 'ai';
  const themeColorClass = isAiService ? 'text-cyan-500 bg-cyan-950/40 border-cyan-800/40' : 'text-blue-600 bg-blue-50 border-blue-200';

  const handleRequestAudit = () => {
    setSelectedServiceFilter(service.name);
    setCurrentPage('audit');
  };

  return (
    <div className="space-y-16 pb-24 animate-in fade-in duration-300" id="service-detail-view-shell">
      
      {/* Top Breadcrumb Navigation Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => setCurrentPage('services')}
          className="group inline-flex items-center space-x-2 text-xs font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          id="back-to-services-btn"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL SERVICES</span>
        </button>
      </section>

      {/* Hero Header Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-14 border border-slate-800 relative overflow-hidden shadow-2xl">
          {/* Subtle background nodes */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] -z-10"></div>
          
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-950/70 border border-slate-800 rounded-full px-3 py-1 text-[10.5px] text-cyan-400 font-mono font-bold uppercase tracking-wider select-none">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{service.category.toUpperCase()} GROWTH ENGINE</span>
            </div>
            
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              {service.name}
            </h1>
            
            <p className="font-display text-lg text-slate-300 font-medium max-w-3xl leading-relaxed">
              {deepDive.tagline}
            </p>
            
            <p className="font-sans text-sm text-slate-400 leading-relaxed max-w-4xl">
              {service.longDesc}
            </p>

            {/* Quick target details */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 font-bold shrink-0">IDEAL FOR:</span>
                <span className="text-slate-300 font-sans tracking-wide">{deepDive.idealFor}</span>
              </div>
              <div className="flex items-start space-x-2 justify-start md:justify-end">
                <span className="text-emerald-400 font-bold shrink-0">LAUNCH TILES:</span>
                <span className="text-slate-300 font-sans tracking-wide">Accelerated 12-25 day initial onboarding setup maps.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analytics Block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {deepDive.metrics.map((metric, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="font-display text-4xl font-extrabold text-blue-600 tracking-tight block">
                {metric.value}
              </span>
              <span className="font-display font-bold text-xs text-slate-800 uppercase tracking-wide mt-2 block">
                {metric.label}
              </span>
              <p className="font-sans text-xs text-slate-500 mt-1 lines-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Roadmap Phases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center md:text-left space-y-2">
          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
            HOW WE DEPLOY THIS PILLAR
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-950 tracking-tight sm:text-3xl">
            Strategic Growth Execution Blueprint
          </h2>
          <p className="font-sans text-xs.5 text-slate-550 max-w-2xl leading-relaxed">
            Our step-by-step technical pathway designed to remove architectural leaks, maximize query alignment, and secure repeatable sales pipeline scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {deepDive.process.map((step, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-150 bg-slate-50/50 p-6 space-y-4 relative">
              <div className="font-mono text-4xl font-extrabold text-gray-200 select-none">
                {step.phase}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-slate-900">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Sub-Services grid & Deliverables Checklist */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Sub-Services Block (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-indigo-600 font-bold uppercase tracking-widest block">
                SPECIFIC SUB-SERVICE INTEGRATIONS
              </span>
              <h3 className="font-display text-2xl font-extrabold text-slate-950 tracking-tight">
                Ancillary Scope and Deliverables Included
              </h3>
              <p className="font-sans text-slate-500 text-xs.5 leading-relaxed">
                We handle the complete strategic scope of work. No external third-party tools, code handovers, or hidden agency retainers required.
              </p>
            </div>

            <div className="space-y-3" id="subservices-detailed-list">
              {service.subServices.map((sub, idx) => (
                <div key={idx} className="flex gap-3.5 p-4 rounded-xl border border-gray-150 bg-white hover:border-blue-300 transition-colors">
                  <div className="h-5.5 w-5.5 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs.5 text-slate-950">{sub}</h4>
                    <p className="font-sans text-[11.5px] text-slate-400 mt-0.5">Fully optimized matching our standard high-performance delivery roadmap.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High-Impact Checklist & Diagnostic Accent Card (Col 6) */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-950 text-white p-6 md:p-10 border border-slate-900 shadow-xl space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest block">
                HOW WE COMMITTED TO YIELD
              </span>
              <h4 className="font-display font-bold text-sm text-slate-100 uppercase tracking-wide">
                Our Action Deliverables Checklist
              </h4>
            </div>

            <ul className="space-y-4 font-sans text-xs text-slate-300" id="service-specific-highlights">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">✓</span>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Case Highlight snippet */}
            <div className="pt-6 border-t border-slate-900 space-y-3">
              <span className="font-mono text-[9px] text-slate-500 uppercase block">ACTIVE CLIENT BENCHMARK HIGHLIGHT</span>
              <h5 className="font-display font-semibold text-xs text-slate-200">
                {deepDive.caseHighlight.title}
              </h5>
              <p className="font-sans text-[11px] text-slate-400 italic">
                "{deepDive.caseHighlight.desc}"
              </p>
              <div className="inline-flex text-xs.5 font-mono font-bold text-emerald-400 bg-emerald-950/45 px-2.5 py-1 rounded">
                Result: {deepDive.caseHighlight.stat}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Accordion FAQs Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <HelpCircle className="h-7 w-7 text-indigo-600 mx-auto" />
          <h2 className="font-display text-2xl font-extrabold text-slate-950 tracking-tight text-center">
            Frequently Asked Questions Specific to This Asset
          </h2>
          <p className="font-sans text-xs text-slate-500 max-w-xl mx-auto">
            Get clear, jargon-free answers to critical inquiries regarding implementation, cost matrices, and expectations.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl bg-white divide-y divide-gray-150 overflow-hidden" id="service-deep-accordion">
          {deepDive.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="transition-all">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-[13.5px] font-bold text-slate-900 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" /> : <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 bg-slate-50/50 font-sans text-xs text-slate-600 leading-relaxed border-t border-gray-100 select-all">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion CTA Form Trigger block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
              Ready to Activate Custom High-ROI Performance Tracking?
            </h3>
            <p className="font-sans text-xs md:text-sm text-blue-100 leading-relaxed">
              Book your complimentary technical audit of your {service.name} stack today. Receive a specialized semantic gap analysis map and target growth dashboard parameters within 12 business hours.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleRequestAudit}
                className="rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-950 px-8 py-3.5 font-display text-xs.5 font-bold uppercase tracking-wider text-white shadow-xl transition-all cursor-pointer inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Free {service.name} Audit</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
              
              <button
                onClick={() => setCurrentPage('services')}
                className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-8 py-3.5 font-display text-xs.5 font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                View Other Services
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
