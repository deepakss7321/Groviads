import React, { useState } from 'react';
import { Page } from '../types';
import { Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Streamlined desktop layout links - neat, ultra-clean, proportional spacing
  const navigationItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Blog', page: 'blog' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  // Inclusive mobile links
  const mobileNavigationItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Our Services', page: 'services' },
    { label: 'Case Studies', page: 'case-studies' },
    { label: 'Growth Blog', page: 'blog' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact Us', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <div 
          onClick={() => setCurrentPage('home')}
          className="flex cursor-pointer items-center space-x-2.5 w-48 group select-none"
          id="hdr-logo-container"
        >
          <div className="flex h-9.5 w-9.5 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/15 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <Sparkles className="h-4.5 w-4.5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              GROVI<span className="text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">ADS</span>
            </span>
            <span className="font-mono text-[8.5px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
              Growth Partner
            </span>
          </div>
        </div>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-4" id="hdr-desktop-nav">
          {navigationItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`rounded-lg px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === item.page
                  ? 'text-blue-600 font-bold bg-blue-50/50'
                  : 'text-slate-650 hover:bg-slate-50 hover:text-slate-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Streamlined Call to Actions (CTA) */}
        <div className="hidden md:flex items-center space-x-4 w-56 justify-end" id="hdr-desktop-ctas">
          <button
            onClick={() => setCurrentPage('audit')}
            className="rounded-xl bg-slate-900 border border-slate-950 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-slate-850 hover:opacity-95 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
          >
            Book Your Free Audit
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2" id="hdr-mobile-controls">
          <button
            onClick={() => setCurrentPage('audit')}
            className="rounded-lg bg-slate-900 px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-white cursor-pointer"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 text-slate-600 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-3 duration-200" id="hdr-mobile-menu">
          <div className="space-y-1 px-4 py-4">
            {mobileNavigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 font-display text-[13.5px] font-semibold tracking-wide transition-all cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-blue-50/70 text-blue-600 font-bold'
                    : 'text-slate-650 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.page && <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  setCurrentPage('audit');
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer"
              >
                Book Your Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
