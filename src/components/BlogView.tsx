import React, { useState } from 'react';
import { Page, BlogPost } from '../types';
import { FEATURED_BLOGS, BLOG_CATEGORIES, BLOG_TOPICS_100 } from '../data';
import { Search, ArrowRight, User, Calendar, BookOpen, ChevronRight, Copy, Check, Stars } from 'lucide-react';

interface BlogViewProps {
  setCurrentPage: (page: Page) => void;
  setConsultationMessage: (msg: string) => void;
}

export default function BlogView({ setCurrentPage, setConsultationMessage }: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  
  // Custom states for clipboard feedback
  const [copiedTopic, setCopiedTopic] = useState<string | null>(null);

  // Filter actual pre-penned articles
  const filteredArticles = FEATURED_BLOGS.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'All Articles') {
      return matchesSearch;
    }
    return art.category.toLowerCase() === activeCategory.toLowerCase() && matchesSearch;
  });

  // Action: Copy topic helper
  const handleCopyTopic = (topic: string) => {
    navigator.clipboard.writeText(topic);
    setCopiedTopic(topic);
    setTimeout(() => {
      setCopiedTopic(null);
    }, 1500);
  };

  // Action: Route to consult with tailored topic
  const handleDraftProposal = (topic: string) => {
    const customizedMessage = `Hello GROVIADS team, I am interested in building a targeted business growth strategy around the topic: "${topic}". Please guide us on how we can optimize our operations and digital presence to dominate this space.`;
    setConsultationMessage(customizedMessage);
    setCurrentPage('audit');
  };

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300" id="blog-view-container">
      
      {/* Search Header Banner */}
      <section className="bg-slate-50 border-b border-gray-150 py-14">
        <div className="mx-auto max-w-4xl text-center space-y-4 px-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
            STRATEGY INTEL & BLOG DIRECTORY
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900">
            GROVIADS Deep Growth Intelligence
          </h1>
          <p className="font-sans text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Our experts detail actionable playbooks on Generative search citations (GEO), Maps algorithms, organic clusters, and high-converting app frameworks.
          </p>

          {/* Core Interactive Search bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="flex items-center rounded-2xl bg-white border border-gray-200 shadow-sm px-4 py-3 focus-within:border-blue-500 transition-colors">
              <Search className="h-4.5 w-4.5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                aria-label="Search strategy articles"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search premium growth strategies..."
                className="w-full text-xs bg-transparent pl-3 focus:outline-none placeholder-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto gap-2.5 max-w-5xl mx-auto px-4 pt-6 scrollbar-none" id="blog-cats-scroller">
          {BLOG_CATEGORIES.slice(0, 10).map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedArticle(null);
              }}
              className={`rounded-full px-4.5 py-1.5 text-[11px] font-mono tracking-tight font-semibold shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white hover:bg-gray-150 border border-gray-180 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Panel splitting Articles & topics */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT 7 COLS: READ ARTICLES */}
          <div className="lg:col-span-7 space-y-8" id="blog-reader-pane">
            {selectedArticle ? (
              /* Selected Article Read View */
              <article className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 space-y-6 shadow-xs animate-in fade-in duration-255">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center text-xs font-mono font-bold text-blue-600 hover:underline mb-2 cursor-pointer"
                >
                  ← Back to Article List
                </button>
                
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 rounded-full px-2.5 py-0.5">{selectedArticle.category}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight md:text-3xl leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center space-x-3 border-y border-gray-100 py-3.5 mt-4 shrink-0">
                  <div className="h-9 w-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-display font-black text-xs">
                    {selectedArticle.author.substring(0, 2)}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-slate-900">{selectedArticle.author}</h5>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">{selectedArticle.authorRole}</p>
                  </div>
                </div>

                {/* Substantive Article Body Content */}
                <div className="font-sans text-sm text-slate-700 leading-relaxed space-y-5 prose max-w-none pt-4">
                  {/* Since we have parsed standard newlines and formatted markdown headings */}
                  <div 
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedArticle.content
                        .replace(/### (.*)/g, '</h4><h4 class="font-display font-bold text-slate-900 text-lg mt-6 mb-2">$1</h4><p>')
                        .replace(/\*   \*\*(.*?)\*\*: (.*)/g, '</p><li class="flex items-start space-x-2 my-2"><span class="text-blue-500 font-bold shrink-0">➔</span><span class="text-xs"><strong>$1</strong>: $2</span></li><p>')
                        .replace(/\*   (.*?)/g, '</p><p class="text-xs pl-4 font-mono select-all">✓ $1</p><p>')
                    }} 
                  />
                </div>

                <div className="pt-6 border-t border-gray-100 mt-8 flex justify-between items-center flex-wrap gap-4">
                  <div className="flex gap-2">
                    {selectedArticle.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-slate-50 border border-slate-100 rounded text-[10px] text-slate-500 font-mono px-2 py-0.5">#{tag}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs font-display font-bold text-slate-500 hover:text-slate-900"
                  >
                    Close Article
                  </button>
                </div>
              </article>
            ) : (
              /* Search Lists of Featured Articles */
              <div className="space-y-6" id="strategy-articles-grid-list">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((art) => (
                    <div
                      key={art.id}
                      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer space-y-4"
                      onClick={() => setSelectedArticle(art)}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="font-bold text-slate-700 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 uppercase tracking-tight">{art.category}</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-900 hover:text-blue-600 tracking-tight leading-snug">
                        {art.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed">
                        {art.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-4 text-xs font-mono text-slate-500">
                        <span className="flex items-center space-x-1">
                          <User className="h-3 w-3 text-slate-400" />
                          <span>{art.author}</span>
                        </span>
                        <span className="text-blue-600 font-bold flex items-center space-x-0.5 hover:underline">
                          <span>Read Full Article</span>
                          <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-gray-150 p-10 text-center space-y-3 bg-white">
                    <p className="font-sans text-slate-500 text-sm">No specific strategy documents match your keyword criteria.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setActiveCategory('All Articles'); }}
                      className="text-xs font-mono font-bold text-blue-600 underline"
                    >
                      Reset active search targets
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT 5 COLS: 100+ BLOG TOPICS ENGINE */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-950 p-6 md:p-8 text-white space-y-4 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 h-28 w-28 bg-blue-600/10 rounded-full blur-2xl"></div>

              <div>
                <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase tracking-widest flex items-center space-x-1">
                  <Stars className="h-3.5 w-3.5 animate-spin-slow" />
                  <span>THE 100+ COLD EMAIL & CONTENT HOOK GENERATOR</span>
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-white mt-1.5 leading-snug">
                  Explore High-Converting Blog Topic Concepts
                </h3>
                <p className="font-sans text-slate-350 text-[11px] leading-relaxed mt-2">
                  We preloaded optimized topics structured around actual high-volume search parameters. Choose a strategic topic below to instantly copy it or request an outline from our consultant team.
                </p>
              </div>

              {/* Collapsible topic category lists */}
              <div className="space-y-4" id="topics-generator-grid">
                {Object.keys(BLOG_TOPICS_100).map((topicCategory, idx) => (
                  <div key={idx} className="rounded-xl bg-slate-950 border border-slate-850 p-4 space-y-3">
                    <h4 className="font-display text-xs font-bold text-cyan-300 tracking-wide uppercase border-b border-slate-850 pb-2.5">
                      {topicCategory}
                    </h4>
                    
                    <div className="space-y-3 divide-y divide-slate-850/50">
                      {BLOG_TOPICS_100[topicCategory].map((topic, tid) => (
                        <div key={tid} className="pt-3 first:pt-0 space-y-2">
                          <p className="font-sans text-slate-200 text-xs leading-relaxed font-medium">
                            "{topic}"
                          </p>
                          <div className="flex justify-end gap-2 text-[10px] font-mono">
                            {/* Copy button */}
                            <button
                              onClick={() => handleCopyTopic(topic)}
                              className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                              {copiedTopic === topic ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Copy Hook</span>
                                </>
                              )}
                            </button>
                            <span className="text-slate-700">|</span>
                            {/* Request outline */}
                            <button
                              onClick={() => handleDraftProposal(topic)}
                              className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
                            >
                              Request Outline ➔
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footnote indicating scalability */}
              <div className="text-center pt-2 border-t border-slate-850 text-slate-500 text-[10px] font-mono uppercase">
                ALL 100+ ACTIVE SEO SEED ENTRIES ACTIVE FOR COPIES
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
