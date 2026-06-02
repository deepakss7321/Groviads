import React, { useState, useRef, useEffect } from 'react';
import { Page } from '../types';
import { MessageSquare, X, Send, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';

interface AIChatWidgetProps {
  setCurrentPage: (page: Page) => void;
}

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function AIChatWidget({ setCurrentPage }: AIChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: "Hello! I'm your Groviads Scaling Advisor. Ask me anything about scaling your audience, capturing AI search citations (GEO), optimizing maps rankings, or generating leads. How can I help you grow today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unread, setUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestionChips = [
    'What is Generative Engine Optimization (GEO)?',
    'How do we rank in Google Maps 3-Pack?',
    'What are the steps to set up a Growth Audit?'
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: updatedMessages,
          userContext: { locale: 'Worldwide', timestamp: new Date().toISOString() }
        })
      });

      const data = await response.json();
      if (data && data.text) {
        setMessages([...updatedMessages, { role: 'model', content: data.text }]);
      } else {
        throw new Error('Invalid chat text');
      }
    } catch (err) {
      console.error('Chat widget error:', err);
      // Fail-proof fallback
      setMessages([
        ...updatedMessages,
        {
          role: 'model',
          content: "I'm temporarily experiencing service delays. Our consultations are 100% free! Why don't you head over to our Growth Audit panel or tap 'Free Strategy Call' to explore options directly?"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <>
      {/* Floating button trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleChat}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-200 group"
          id="chat-toggle-floating-btn"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}

          {unread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-cyan-500 border-2 border-white text-[9px] text-white font-bold items-center justify-center">1</span>
            </span>
          )}
        </button>
      </div>

      {/* Floating chat card */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-40 w-[360px] sm:w-[380px] h-[500px] flex flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
          id="chat-floating-container"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-4 shrink-0 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Sparkles className="h-4 w-4 animate-spin-slow" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">GROVIADS Scale Advisor</h4>
                <div className="flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <p className="text-[10px] text-slate-300 font-mono">Generative Assistant Online</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50" id="chat-messages-scroll">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex max-w-[85%] flex-col rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 border border-gray-150 rounded-tl-none shadow-sm'
                }`}
              >
                <p className="font-sans whitespace-pre-line">{m.content}</p>
                <span className={`text-[9px] mt-1 text-right block ${m.role === 'user' ? 'text-blue-200' : 'text-gray-400'}`}>
                  {m.role === 'user' ? 'You' : 'Advisor'}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex max-w-[85%] rounded-2xl rounded-tl-none bg-white border border-gray-150 p-3 shadow-sm items-center space-x-1.5">
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions tracker and input footer */}
          <div className="p-3 border-t border-gray-150 bg-white shrink-0 space-y-3">
            {/* Quick Suggestions Chips */}
            {messages.length < 3 && (
              <div className="flex overflow-x-auto gap-1.5 pb-1 select-none scrollbar-none">
                {suggestionChips.map((chip, cid) => (
                  <button
                    key={cid}
                    onClick={() => handleSendMessage(chip)}
                    className="text-[10.5px] whitespace-nowrap bg-gray-55 hover:bg-blue-50 border border-gray-200 hover:border-blue-100 text-slate-600 hover:text-blue-700 rounded-full px-2.5 py-1 text-left shrink-0 transition-all font-sans cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Direct Audit Callout Card */}
            <div className="rounded-xl bg-orange-50/70 border border-orange-100 p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-orange-600 shrink-0" />
                <span className="text-slate-700 font-medium">Ready for website diagnostic score?</span>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('audit');
                  setIsOpen(false);
                }}
                className="text-orange-600 font-bold flex items-center space-x-0.5 hover:underline text-[11px]"
              >
                <span>Free Audit</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            {/* Input bar */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage(input);
                }}
                disabled={isLoading}
                placeholder="Ask your growth question..."
                className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500 disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="flex items-center justify-center p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-30 cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
