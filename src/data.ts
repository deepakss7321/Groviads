import { Service, IndustryData, CaseStudy, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing Solution Suite',
    category: 'marketing',
    shortDesc: 'Scale high-converting inquiries and dominate share of voice with campaigns integrating Enterprise SEO, programmatic PPC, and target landers.',
    longDesc: 'We assemble end-to-end, high-performance digital marketing systems that convert user intent into enterprise revenue. By integrating premium Search Engine Optimization (SEO) as our flagship organic lead acquisition pillar with targeted Google/Meta paid media bidding, authoritative Content Marketing, and custom-engineered high-speed landing funnels, we provide your brand with superior digital dominance.',
    features: [
      'Search Engine Optimization (SEO) - Full dynamic ranking, core index architecture strategy, and semantic intent mapping',
      'Pay-Per-Click Marketing (PPC) - Advanced search ads, paid social scaling loops, and micro-moment intent targeting',
      'Conversion Rate Optimization (CRO) - Structuring responsive forms, interactive calculator pathways, and high-speed viewport layouts',
      'Programmatic Content Marketing - Systematic publishing, native content syndication, and digital publisher backlinks',
      'Advanced Tracking & Cookies - Standard GA4 pipelines, Google Tag Manager layers, and server-side Conversions API (CAPI)'
    ],
    subServices: [
      'Search Engine Optimization (SEO) Sub-Service Strategy',
      'High-ROI Paid Social (Meta, Instagram, LinkedIn campaigns)',
      'Enterprise Google Search/Display Paid Ads (PPC)',
      'Conversion-Optimized Sales Funnels & Multi-Channel Landing Pages',
      'Publisher Link Acquisition & Authority Digital PR'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'local-seo',
    name: 'Local SEO & Google Business Profile Strategy',
    category: 'marketing',
    shortDesc: 'Dominate local service markets, capture Google Maps pack positions, and manage citations.',
    longDesc: 'For businesses operating in specific zip codes, metro areas, or regions, Local SEO is the difference between constant inbound phone calls and digital invisibility. We optimize your GBP profile, align NAP citations across directories, stimulate review velocity, and rank you on map searches.',
    features: [
      'Google Maps 3-Pack permanent positioning audits',
      'Local citation synchronization (NAP completeness validation)',
      'Review acceleration & active generation campaign systems',
      'Hyper-local community landing page creation',
      'Localized schema and spatial geocentric tagging'
    ],
    subServices: [
      'Google Business Profile Setup & Optimization',
      'Google Maps Ranking Optimization',
      'Review Management & Velocity Strategy',
      'Local Citation Architecture & Cleansing',
      'Multi-Location Storefront SEO'
    ],
    icon: 'MapPin'
  },
  {
    id: 'ai-seo-aeo-geo',
    name: 'AI SEO, GEO & AEO (Generative Engine Optimization)',
    category: 'ai',
    shortDesc: 'Be the answer cited by Gemini, ChatGPT, Perplexity, and voice-search engines.',
    longDesc: 'Traditional search engine optimization is shifts toward Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). We reverse-engineer large language model token patterns, ensure your brand assets are stored in verified external knowledge graphs, and layout content using declarative semantic formats that LLMs love to quote.',
    features: [
      'Generative Search Experience (SGE) visibility optimization',
      'Brand entity registry insertion (Wikidata, schema, knowledge base)',
      'Retrieval-Augmented Generation (RAG) format alignment',
      'Direct QA structure & conversational language formatting',
      'LLM preference profiling (ChatGPT, Gemini, Claude, Perplexity citation checks)'
    ],
    subServices: [
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'LLM Entity Citation Strategy',
      'Voice Search Dominance Campaign',
      'Semantic Structured Data Blueprinting'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'performance-marketing',
    name: 'Performance PPC Marketing (Google, Meta, LinkedIN)',
    category: 'performance',
    shortDesc: 'Launch laser-focused lead-generation and high-ROI acquisition campaigns with direct revenue attribution.',
    longDesc: 'We build end-to-end performance marketing loops. This includes hyper-segmented search intent bidding, predictive conversion rate optimization, dynamic lookalike audiences, and high-impact custom ad creative. Every single marketing dollar is tracked, optimized, and recursively allocated for maximum ROI.',
    features: [
      'Hyper-segmented intent bidding on Google Ads Search & Display',
      'Creative-led Facebook & Instagram scale pipelines with dynamic testing',
      'High-ticket B2B company-level targeting on LinkedIn Campaign Manager',
      'Multi-touch programmatic retargeting & funnel sequencing',
      'Continuous Conversion Rate Optimization (CRO) and custom landing page iteration'
    ],
    subServices: [
      'Google Search/Display Ads Management',
      'Meta Paid Social Acquisition Scales',
      'LinkedIn B2B Lead Pipelines',
      'Programmatic Display & Native Retargeting',
      'Sales Funnel & Checkout Optimization'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 'web-app-development',
    name: 'Enterprise Web & App Development',
    category: 'development',
    shortDesc: 'Deploy fast, dynamic, brand-aligned, conversion-optimized responsive web & mobile software.',
    longDesc: 'Your website or mobile application should be a high-performance conversion engine. We write modular, fast-loading, clean, secure software (React, Vue, Node, and native mobile stacks) designed to capture leads, retain attention, and scale elegantly under heavy enterprise traffic loads.',
    features: [
      'Custom React/Vite development or headless E-commerce builds',
      'Android and iOS cross-platform or native application codebases',
      'Continuous website health engineering and responsive code audits',
      'Comprehensive database structures, security protocols, and backends',
      'Integrated APIs, custom payment gateways, CRM connections, and portals'
    ],
    subServices: [
      'Enterprise Custom Web Development',
      'High-converting Ecommerce Stores',
      'Native & Hybrid Mobile Applications',
      'Landing Page Performance Optimization',
      'SaaS Platform MVP engineering'
    ],
    icon: 'Cpu'
  },
  {
    id: 'business-consulting',
    name: 'Business Growth Consulting & Scaling Strategy',
    category: 'strategy',
    shortDesc: 'Unlock operational blockages, scale revenue models, automate workflows, and execute market entries.',
    longDesc: 'Growth is more than just top-of-funnel traffic. Our veteran business consultants collaborate directly with founders and CEOs to optimize unit economics, expand market share, implement sales workflow automations, structure pipeline metrics, and orchestrate international expansion playbooks.',
    features: [
      'Unit economics diagnostics and pricing model upgrades',
      'Operational workflow automation auditing',
      'B2B sales playbook construction and outreach coaching',
      'Market opportunity research and competitor intelligence mapping',
      'Scalable startup MVP planning and go-to-market orchestrations'
    ],
    subServices: [
      'Startup Launch & MVP Strategy',
      'Revenue Operations Optimization',
      'Strategic Expansion Analysis & Playbooks',
      'Sales Pipeline Automation audits',
      'Corporate Turnaround & Scaling Consultation'
    ],
    icon: 'Briefcase'
  }
];

export const INDUSTRIES: IndustryData[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Clinics',
    challenges: [
      'Strict HIPAA compliance and patient data confidentiality requirements',
      'High client acquisition costs via generic ad campaigns',
      'Low local map search presence and fragmented reviews across clinicians'
    ],
    solutions: [
      'We design HIPAA-compliant booking funnels and secure communication tools.',
      'Hyper-localized Maps SEO optimization capturing top 3 spots in the region.',
      'Tailored local doctor/clinic review triggers accelerating organic community validation.'
    ],
    benefits: [
      '3.5x average increase in call volume and online bookings within 90 days',
      'Lower CAC through patient intent optimization on local search'
    ],
    faqs: [
      {
        question: 'Is your digital marketing healthcare compliant?',
        answer: 'Absolutely. We do not store sensitive medical data, we implement secure APIs, and we use patient booking forms that strictly pass verified leads to compliant EHR/CRM software.'
      }
    ],
    caseSnippet: 'Ranked regional dermatology center in top 3 spots for 14 major healthcare map searches.'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property Developers',
    challenges: [
      'Poor quality lead capture leading to wasted agent call hours',
      'Highly competitive localized PPC auctions with high cost-per-click rates',
      'Under-optimized property listings without interactive spatial presence'
    ],
    solutions: [
      'Constructed highly visual property interactive microsites with integrated virtual scheduling.',
      'Engineered target list segments leveraging high-net-worth individual demographics on Meta and LinkedIn.',
      'Automatic CRM routing with instant call trigger integrations.'
    ],
    benefits: [
      '68% increase in qualified property scheduling intent surveys',
      '22% reduction in overall cost-per-lead (CPL) metrics'
    ],
    faqs: [
      {
        question: 'How do you ensure property leads are genuinely qualified buyers?',
        answer: 'We deploy custom verification surveys with field thresholds (such as down-payment availability and timeline metrics) inside our lead pipelines before property details are shared.'
      }
    ],
    caseSnippet: 'Helped luxury developer pre-sell 85% of multi-family high-rise condos using strategic custom landing pages.'
  },
  {
    id: 'e-commerce',
    name: 'E-commerce Brands',
    challenges: [
      'Declining return on ad spend (ROAS) on major social media channels due to ad pixel degradation',
      'High cart abandonment ratios from complex checkout screens',
      'No persistent search engine ranking for major transaction product collections'
    ],
    solutions: [
      'We install Meta Conversions API (CAPI) server-side integration for absolute data attribute accuracy.',
      'One-click checkout UX flows optimizing dynamic UI states.',
      'Intent keyword silos driving sustainable organic traffic directly to product category pages.'
    ],
    benefits: [
      '45% improvement in direct conversions and e-commerce transactions',
      'Up to 4.2x tracked Return on Ad Spend (ROAS) utilizing custom audience loops'
    ],
    faqs: [
      {
        question: 'Do you manage Shopify, WooCommerce, and headless environments?',
        answer: 'Yes. Our team develops across all major platforms, specialize in custom headless React storefronts with lightning-fast performance scoring.'
      }
    ],
    caseSnippet: 'Scaled active ethical apparel brand from $15k per month to over $180k per month in under 12 months.'
  },
  {
    id: 'startups',
    name: 'High-Growth Tech Startups',
    challenges: [
      'Limited runway requiring rapid growth proof to trigger subsequent funding rounds',
      'Ambiguous messaging failing to connect with target user needs',
      'Lack of integrated dashboards for tracking key user metrics'
    ],
    solutions: [
      'GTM framework design aligning minimum viable products to enterprise needs.',
      'Sleek landing page structures with transparent software demos.',
      'High-impact growth marketing loops driving direct user onboarding.'
    ],
    benefits: [
      'Rapid validation of core messaging indicators',
      'Highly predictable organic and performance onboarding pipelines'
    ],
    faqs: [
      {
        question: 'Do you help prepare pitch desks and business models?',
        answer: 'Yes, our Startup Growth Consultation matches strategic digital marketing with deep funding pitch strategy, ensuring operational alignment.'
      }
    ],
    caseSnippet: 'Assisted fintech platform in securing $4.5M Series A funding via clear growth metrics validation.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-global',
    client: 'Nexus Financial Solutions',
    industry: 'Finance',
    title: 'Transforming Enterprise Lead-Generation with Targeted Campaign Frameworks',
    challenge: 'Nexus was experiencing diminishing returns on generalized financial PPC. Their lead cost skyrocketed to over $340 per contact, with less than 4% of those leads converting into verified sales pipeline revenue.',
    strategy: 'We rebuilt their customer funnel. We migrated search intent targeting to high-net-worth transactional keywords, implemented customized interactive calculator modules, and deployed server-side CRM lead triggers.',
    results: [
      'Reduced overall Cost Peer Lead (CPL) from $340 down to $128 in 60 days',
      'Boosted verified qualified sales pipeline by 240%',
      'Achieved an average of 18.2x ROI on advertising spend across search and native networks'
    ],
    roiMetric: '18.2x PPC ROI',
    duration: '4 Months',
    beforeAfter: {
      before: 'Sloppy $340 CPL, anonymous web visits, disjointed CRM tracking.',
      after: 'Highly targeted $128 CPL with full executive sales pipeline visibility and direct automatic routing.'
    },
    logoCode: 'bg-emerald-500'
  },
  {
    id: 'aurora-health',
    client: 'Aurora Orthopedic Center',
    industry: 'Healthcare',
    title: 'Dominating Regional Searches & Generating Patient Bookings Offline-to-Online',
    challenge: 'Aurora was losing clinical market share to larger national networks. Their local search citations were completely fragmented, and their Google Business Profile was outranked by newer practices.',
    strategy: 'We performed complete NAP consistency correction, set up robust local reviews automation directly integrated into patient post-care emails, and published localized schema profiles in highly search-dense suburbs.',
    results: [
      'Captured top 3 local pack map listings for all 25 high-priority regional clinics',
      'Achieved a 310% increase in monthly direct click-to-calls and directions commands',
      'Slashed patient clinic acquisition channels dependency by boosting organic visibility'
    ],
    roiMetric: '310% Map Dominance',
    duration: '6 Months',
    beforeAfter: {
      before: 'Ranked #14 in local maps behind small local clinics, unintegrated web setup.',
      after: 'Ranked solid #1 across all 25 local clinics with immediate call routing dashboard actions.'
    },
    logoCode: 'bg-blue-600'
  },
  {
    id: 'vortex-ecom',
    client: 'Vortex Precision Tools',
    industry: 'E-commerce',
    title: 'Scaling D2C Revenue through AI-SEO, Headless Storefront and Cart Optimization',
    challenge: 'Vortex tools had massive slow load times on their native ecommerce site, resulting in a high bounce rate. Their transactional pages were unoptimized for Generative Engine quotes.',
    strategy: 'Rebuilt the shopping interface as an ultra-fast headless React front-end. Structured all products as semantic schema entities. Optimized copywriting snippets to rank directly inside Gemini/ChatGPT Generative engines.',
    results: [
      'Reduced initial page load speed down to 450ms (Perfect Core Web Vitals score)',
      'Generated over 650 product citations inside generative AI engine audits',
      'Increased direct cart transaction values by 84% through seamless interface design'
    ],
    roiMetric: '+84% Cart Revenue',
    duration: '3 Months',
    beforeAfter: {
      before: '4.8s initial load speed, zero presence inside ChatGPT/Gemini web citations.',
      after: '450ms loading, widely quoted as the top recommended tool inside Generative Search engines.'
    },
    logoCode: 'bg-violet-600'
  }
];

export const FEATURED_BLOGS: BlogPost[] = [
  {
    id: 'generative-engine-optimization-future',
    title: 'The Shift from SEO to GEO: How to Optimize Your Brand for Generative AI Citation',
    category: 'AI SEO',
    excerpt: 'Traditional Google searches are converting to GenAI summaries. Learn how to structures your corporate assets so ChatGPT, Gemini, and Perplexity list your brand as the prime option.',
    content: `
### The New Reality of Generative Search

The search engine marketing world is undergoing its largest shift in 25 years. Traditional Google keyword ranks is no longer the sole gatekeeper of traffic. Generative Engines like ChatGPT search features, Google Gemini, and Perplexity are actively answering consumer queries directly at the zero-click interface. 

To remain visible in this landscape, digital leaders must transition their playbooks from traditional Search Engine Optimization (SEO) to **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)**.

### How Generative Engines Select Sources

Generative models rely on Retrieval-Augmented Generation (RAG). When a user asks: "What are the best scaling agencies for seed-stage startups?", the AI does not just select the top page on standard Google INDEX. It pulls from unstructured web data, cross-references entity directories, reviews semantic schema details, and parses verified authority sites.

Major indicators that prompt a generative AI engine to cite your company include:
1. **Entity Authority & Completeness**: Is your brand registered inside verified knowledge hubs like Wikidata, specialized business directories, and dense schema tags?
2. **Declarative Question-Answer Structuring**: Does your corporate content explicitly structure and answer high-intent consumer questions inside readable HTML structures?
3. **High Contextual Cohesion**: Do trusted niche publishers cite your brand alongside relevant thematic concepts?

### Actionable Action Plan for GEO

*   **Establish Brand Entities**: Register your founders, trademarks, address details, and service lists explicitly. Set up JSON-LD Schema structures showing "Organization" relations.
*   **Format for Direct Retrieval**: Use clear header blocks (e.g., Markdown H3s) containing the query, followed immediately by a direct, authoritative, single-sentence response.
*   **Leverage GROVIADS SEO Systems**: Our strategic SEO teams map out Generative Engine Citations to place your enterprise exactly where the AI searches.
    `,
    date: 'May 28, 2026',
    readTime: '6 Min Read',
    author: 'Deepak Sharma',
    authorRole: 'Chief Growth Officer',
    tags: ['GEO', 'AI-SEO', 'Marketing Strategy']
  },
  {
    id: 'local-maps-secrets-2026',
    title: 'Cracking the Google Maps Algorithm: Why NAP Consistency and Review Velocity Still Dictate Customer Inbound',
    category: 'Local SEO',
    excerpt: 'Is your business invisible to nearby prospects? We reveal the secret local engine signals that rank elite businesses in the coveted Google Maps 3-Pack.',
    content: `
### The Local Search Battleground

When someone near your business searches for a high-priority service under high intent (e.g. "urgent care clinic near me", "best real estate developers Austin"), 60% of all conversion actions happen directly inside the **Google Maps 3-Pack**. If your business ranks at position #4 or below, you are letting competitors claim easily captured revenue.

To win at Local SEO, you must understand Google's two most critical localized indicators: **NAP Consistency** and **Review Velocity**.

### 1. NAP Consistency (Name, Address, Phone)

Google correlates your address details across the internet to check your operational integrity. If your Google Business Profile shows "Suite 100", your Yelp listing displays "Ste 100", and your business homepage lists no suite number, Google's algorithm labels your presence unstable. 

**Fixing the issue:**
*   Sanitize all directory citations to use exact matching characters.
*   Unify your schema tags on the website header matching the GBP setup perfectly.

### 2. High-Intent Review Velocity

It is not just about having a high average rating (e.g., 4.9 stars). Google ranks profiles with high **Review Velocity**—the frequency at which customers post genuine new reviews, complete with descriptive text keywords (e.g., "amazing marketing team", "excellent SEO growth partner").

At Groviads, we integrate automated review feedback surveys directly into your customer journey. When a post-purchase or post-service transaction completes, our CRM integrations trigger an immediate responsive review campaign, driving localized domain authority with absolute precision.
    `,
    date: 'April 15, 2026',
    readTime: '5 Min Read',
    author: 'Amit Verma',
    authorRole: 'Head of Local Search',
    tags: ['Local SEO', 'Google Maps', 'Review Velocity']
  }
];

export const BLOG_CATEGORIES = [
  'All Articles',
  'Business Growth',
  'Digital Marketing',
  'Performance Marketing',
  'AI SEO',
  'GEO',
  'AEO',
  'Branding',
  'Lead Generation',
  'Google Business Profile',
  'Website Development',
  'App Development',
  'Startup Growth',
  'Business Consulting',
  'Automation'
];

export const BLOG_TOPICS_100: Record<string, string[]> = {
  'Business Growth': [
    'How to grow business online in 2026 from scratch',
    'Scaling a local professional service firm to $10M ARR',
    'Understanding the difference between top-line traffic and real revenue scaling',
    'Leveraging high-intent customer acquisition parameters for global market entry',
    'How to identify bottlenecks in your operational and sales conversion funnels',
    'Startup scaling blueprints: Key growth benchmarks before raising Series A'
  ],
  'GEO & AEO (AI SEO)': [
    'What is Generative Engine Optimization (GEO)? Quick introduction',
    'How ChatGPT search constructs its source citation algorithms',
    'AEO: Preparing your business metadata to answer Alexa, Siri, and Gemini queries',
    'The death of traditional search: Creating content that LLMs quote automatically',
    'Reverse engineering Perplexity.ai: The schema structures that guarantee backlinks',
    'How LLMs process brand sentiment across context forums and digital PR channels'
  ],
  'Performance Marketing': [
    'The perfect 2026 B2B Meta Ads system that bypasses ad blocker scripts',
    'Google Ads bidding playbook: Maximizing Conversion Value vs Maximize Clicks',
    'B2B Enterprise Lead Gen: Crafting LinkedIn campaigns targeting C-Suite decision makers',
    'How to combine first-party cookies with Conversions API to recover lost social ads data',
    'Stop wasting money on broad-match Google Ads campaigns',
    'Creating high-impact video ad creatives that hook buyers in 2.5 seconds'
  ],
  'Google Business Profile & Local SEO': [
    'Google maps ranking secrets: Reclaiming the #1 localized position',
    'Review management systems: Generating positive reviews automatically on checkout',
    'How local proximity rankings affect service-based franchises',
    'The correct way to utilize localized geocenters inside neighborhood landing pages',
    'Optimizing multiple addresses under a single consolidated business brand',
    'How to respond to negative Google reviews professionally to win back clients'
  ],
  'Website & App Development': [
    'Why headless React web structures beat standard monolithic WordPress setups',
    'How Core Web Vitals directly impacts your ad cost and organic SEO rank',
    'Dynamic mobile applications: Transitioning D2C buyer funnels into iOS & Android native apps',
    'Security audits for enterprise landing pages: Shielding client submission data',
    'Developing scalable SaaS dashboard architectures for seamless onboarding',
    'Website maintenance frameworks: Eliminating database leaks and script degradation'
  ]
};

export const COUNTRIES = [
  'Worldwide / Remote',
  'United States',
  'India',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'Singapore',
  'United Arab Emirates',
  'Netherlands',
  'South Africa',
  'Ireland',
  'New Zealand',
  'Saudi Arabia'
];

export const BUDGET_RANGES = [
  'Select Budget Range',
  'Under $1,000 / month',
  '$1,000 - $3,000 / month',
  '$3,000 - $5,000 / month',
  '$5,000 - $10,000 / month',
  '$10,000+ / month'
];
