import React, { useState } from 'react';
import { 
  X, Maximize2, Minimize2, Sparkles, Send, Bot, 
  ClipboardList, CheckCircle2, AlertTriangle, MapPin, 
  Package, Building2, FileText
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FloatingChatWidgetProps {
  currentView: string;
}

export default function FloatingChatWidget({ currentView }: FloatingChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Determine context based on currentView
  const getContextText = () => {
    switch (currentView) {
      case 'home': return 'Browsing Homepage';
      case 'product': return 'Viewing Advanced 4D Color Doppler Ultrasound System';
      case 'rfq': return 'Managing RFQ Basket';
      case 'company': return 'Viewing MedTech Precision Instruments Profile';
      case 'ai-search': return 'Using AI Procurement Copilot';
      default: return 'Browsing Marketplace';
    }
  };

  const renderSummary = () => (
    <div className="h-full flex flex-col bg-slate-50/50">
      <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between sticky top-0">
        <h4 className="font-bold text-slate-900 flex items-center">
          <ClipboardList className="w-4 h-4 mr-2 text-blue-600"/> 
          Confirmed Sourcing Details
        </h4>
      </div>
      <div className="p-4 overflow-y-auto space-y-4 flex-1">
        {/* Target Product */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-1 flex items-center"><Package className="w-3 h-3 mr-1"/> Target Product</p>
          <p className="text-sm font-medium text-slate-900">Advanced 4D Color Doppler Ultrasound</p>
          <p className="text-xs text-slate-500 mt-1">Qty: 1 Unit</p>
        </div>
        
        {/* Destination */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-1 flex items-center"><MapPin className="w-3 h-3 mr-1"/> Destination</p>
          <p className="text-sm font-medium text-slate-900">Tashkent, Uzbekistan</p>
          <p className="text-xs text-slate-500 mt-1">Incoterm: CIF (Suggested)</p>
        </div>
        
        {/* Shortlisted Suppliers */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-1 flex items-center"><Building2 className="w-3 h-3 mr-1"/> Shortlisted Suppliers</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm font-medium text-slate-900">MedTech Precision</p>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">92% Match</span>
          </div>
        </div>

        {/* Required Services */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-2 flex items-center"><FileText className="w-3 h-3 mr-1"/> Required Services</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md">Installation</span>
            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md">Russian Docs</span>
            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md">Registration</span>
          </div>
        </div>
        
        {/* RFQ Status */}
        <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold text-slate-900">RFQ Completeness</p>
            <span className="text-xs font-bold text-blue-600">78%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mb-3">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <p className="text-xs text-amber-700 flex items-start"><AlertTriangle className="w-3 h-3 mr-1.5 mt-0.5 shrink-0"/> Missing warranty terms & payment preferences</p>
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 z-50 group"
      >
        <Sparkles className="w-6 h-6" />
        {/* Optional tooltip */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Ask AI Assistant
        </span>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop for expanded mode */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <div className={cn(
        "fixed z-50 transition-all duration-300 ease-in-out flex flex-col bg-white shadow-2xl overflow-hidden border border-slate-200",
        isExpanded 
          ? "inset-4 md:inset-10 lg:inset-x-32 lg:inset-y-10 rounded-2xl" 
          : "bottom-6 right-6 w-[380px] h-[600px] rounded-2xl"
      )}>
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-inner shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm truncate">Sourcing Assistant</h3>
              <p className="text-[10px] text-blue-300 flex items-center mt-0.5 truncate">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 shrink-0 animate-pulse"></span>
                <span className="truncate">Context: {getContextText()}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1 shrink-0 ml-2">
            {!isExpanded && (
              <button 
                onClick={() => setShowSummary(!showSummary)}
                className={cn(
                  "px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors mr-1 flex items-center",
                  showSummary ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                )}
              >
                <ClipboardList className="w-3.5 h-3.5 mr-1.5" />
                {showSummary ? "Back to Chat" : "Summary"}
              </button>
            )}
            <button 
              onClick={() => {
                setIsExpanded(!isExpanded);
                if (!isExpanded) setShowSummary(false); // Reset summary toggle when expanding
              }}
              className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-300 hover:text-white"
              title={isExpanded ? "Minimize" : "Expand"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => { setIsOpen(false); setIsExpanded(false); setShowSummary(false); }}
              className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-300 hover:text-white"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Area (Chat + Optional Summary) */}
        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
          
          {/* Chat Area */}
          <div className={cn(
            "flex flex-col h-full transition-all",
            isExpanded ? "w-full md:w-2/3 border-r border-slate-200" : "w-full",
            !isExpanded && showSummary ? "hidden" : "flex"
          )}>
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm leading-relaxed">
                  Hi! I see you are currently <span className="font-semibold text-blue-700">{getContextText().toLowerCase()}</span>. How can I help you with your procurement process today?
                </div>
              </div>
              
              {/* Contextual Suggestions */}
              <div className="pl-11 flex flex-wrap gap-2">
                {currentView === 'home' && (
                  <>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Find ultrasound manufacturers</button>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Explain Park Certification</button>
                  </>
                )}
                {currentView === 'product' && (
                  <>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Compare with similar models</button>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Check CE certification validity</button>
                  </>
                )}
                {currentView === 'company' && (
                  <>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Summarize company strengths</button>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Request distributor terms</button>
                  </>
                )}
                {currentView === 'rfq' && (
                  <>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Review my RFQ for missing details</button>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Suggest logistics options</button>
                  </>
                )}
                {currentView === 'ai-search' && (
                  <>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Explain the match score</button>
                    <button className="text-xs bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 px-3 py-1.5 rounded-full transition-colors shadow-sm">Generate a supplier outreach email</button>
                  </>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask anything..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-inner"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Summary Area */}
          <div className={cn(
            "flex flex-col h-full bg-slate-50",
            isExpanded ? "hidden md:flex md:w-1/3" : "w-full",
            !isExpanded && !showSummary ? "hidden" : "flex"
          )}>
            {renderSummary()}
          </div>

        </div>
      </div>
    </>
  );
}
