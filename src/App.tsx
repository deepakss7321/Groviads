import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

// Lazy-loaded Views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import IndustriesView from './components/IndustriesView';
import CaseStudiesView from './components/CaseStudiesView';
import BlogView from './components/BlogView';
import AuditView from './components/AuditView';
import ContactView from './components/ContactView';
import PrivacyView from './components/PrivacyView';
import TermsView from './components/TermsView';
import BottomContactForm from './components/BottomContactForm';
import ServiceDetailView from './components/ServiceDetailView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('digital-marketing');
  
  // High-conversion prefill hooks
  const [preFilledMessage, setPreFilledMessage] = useState('');
  const [selectedServiceFilter, setSelectedServiceFilter] = useState('');

  // Back-to-top transition scroll trigger when navigation shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Main Dynamic Page Router Matching
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView setCurrentPage={setCurrentPage} />;
      case 'services':
        return (
          <ServicesView 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceFilter={setSelectedServiceFilter} 
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case 'service-detail':
        return (
          <ServiceDetailView 
            serviceId={selectedServiceId} 
            setCurrentPage={setCurrentPage} 
            setSelectedServiceFilter={setSelectedServiceFilter} 
          />
        );
      case 'industries':
        return <IndustriesView setCurrentPage={setCurrentPage} />;
      case 'case-studies':
        return <CaseStudiesView setCurrentPage={setCurrentPage} />;
      case 'blog':
        return (
          <BlogView 
            setCurrentPage={setCurrentPage} 
            setConsultationMessage={setPreFilledMessage} 
          />
        );
      case 'audit':
        return (
          <AuditView 
            setCurrentPage={setCurrentPage} 
            preFilledMessage={preFilledMessage}
            setPreFilledMessage={setPreFilledMessage}
            selectedServiceFilter={selectedServiceFilter}
            setSelectedServiceFilter={setSelectedServiceFilter}
          />
        );
      case 'contact':
        return <ContactView setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <PrivacyView />;
      case 'terms':
        return <TermsView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/30 selection:bg-blue-100 selection:text-blue-800" id="main-application-shell">
      
      {/* Dynamic Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Central View Sheet Container */}
      <main className="flex-1">
        {renderPageContent()}
      </main>

      {/* Global Interactive Bottom Lead Form */}
      <BottomContactForm />

      {/* Global Bottom Footer Card */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Persistent floating AI-Powered Sales Chatbot Widget */}
      <AIChatWidget setCurrentPage={setCurrentPage} />

    </div>
  );
}
