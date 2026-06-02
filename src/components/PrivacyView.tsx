import React from 'react';

export default function PrivacyView() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-6 font-sans text-sm text-slate-705 leading-relaxed" id="privacy-policy-document">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="text-xs text-slate-400 font-mono">Last modified: June 2, 2026</p>
      
      <p>
        At GROVIADS Global, we hold ourselves to the highest benchmarks of proprietary confidentiality and user data shielding. This privacy disclosure outlines how we index, process, and protect corporate and individual identity indicators captured across our website, audits, and CRM communication pipelines.
      </p>

      <h2 className="font-display text-lg font-bold text-slate-900 pt-4">1. Data We Index & Process</h2>
      <p>
        During audits requests, contact desk messages, or chatbot session interactions, we collect necessary organizational profiles including your Contact Name, Email, Corporate/Website URL, Phone details, geographic region, and planned budget variables.
      </p>

      <h2 className="font-display text-lg font-bold text-slate-900 pt-4">2. Integration Scripts Compliance (GA4, CAPI)</h2>
      <p>
        We deploy measurement indicators (Google Analytics 4, Meta Conversions API) to understand user navigation behavior. These services rely on first-party cookies and anonymized parameters. No medical, financial, or sensitive transaction details are ever broadcasted to third-party ad networks.
      </p>

      <h2 className="font-display text-lg font-bold text-slate-900 pt-4">3. Data Retention and Guardrails</h2>
      <p>
        Website diagnostic logs and lead information are retained for a max period of 24 months to help us deliver follow-up consultations. You retain full privilege to request 1-click database subtraction. To register opt-out indices, transmit a message to contact@groviads.com.
      </p>
    </div>
  );
}
