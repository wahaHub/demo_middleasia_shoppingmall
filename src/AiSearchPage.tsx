import React, { useState } from 'react';
import { 
  Sparkles, MapPin, Building2, Calendar, DollarSign, Package, 
  Settings, FileText, Upload, File, Search, ChevronRight, 
  CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Truck, 
  Globe, Plus, Download, MessageSquare, RefreshCw, Layers,
  ListChecks, AlertCircle, FileSearch, BriefcaseMedical
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AiSearchPageProps {
  onHomeClick: () => void;
  onRfqClick: () => void;
  onCompanyClick?: () => void;
}

export default function AiSearchPage({ onHomeClick, onRfqClick, onCompanyClick }: AiSearchPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Title Area */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">AI Procurement Copilot</h1>
            </div>
            <p className="text-sm text-slate-500 ml-11">
              Turn product requirements, RFQs, and market questions into a structured procurement plan.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center">
              <RefreshCw className="w-4 h-4 mr-2" /> New Session
            </button>
            <button className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center">
              <Upload className="w-4 h-4 mr-2" /> Upload RFQ
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
              <Download className="w-4 h-4 mr-2" /> Export Summary
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="max-w-[1600px] mx-auto px-4 py-6 flex gap-6 items-start">
        
        {/* LEFT COLUMN: Procurement Context */}
        <div className="w-80 shrink-0 flex flex-col gap-4 sticky top-24">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
            <Layers className="w-4 h-4 mr-2 text-slate-400" /> Procurement Context
          </h2>

          {/* Project Snapshot */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Project Snapshot</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-500 text-xs mb-0.5">Project Name</p>
                <p className="font-medium text-slate-900 leading-tight">Uzbekistan Women’s Health Imaging Upgrade</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><MapPin className="w-3 h-3 mr-1"/> Destination</span>
                <span className="font-medium text-slate-900">Uzbekistan</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><Building2 className="w-3 h-3 mr-1"/> Buyer Type</span>
                <span className="font-medium text-slate-900">Private Hospital</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><BriefcaseMedical className="w-3 h-3 mr-1"/> Type</span>
                <span className="font-medium text-slate-900">Project-based</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><AlertCircle className="w-3 h-3 mr-1"/> Priority</span>
                <span className="font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-xs">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><Calendar className="w-3 h-3 mr-1"/> Delivery</span>
                <span className="font-medium text-slate-900">Within 45 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs flex items-center"><DollarSign className="w-3 h-3 mr-1"/> Budget</span>
                <span className="font-medium text-slate-900">$180k – 250k</span>
              </div>
            </div>
          </div>

          {/* Target Products */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Target Products</h3>
            <div className="space-y-2">
              <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg text-sm font-medium text-slate-700 flex items-center justify-between cursor-pointer hover:border-blue-200 transition-colors">
                <span className="truncate pr-2">Advanced 4D Color Doppler Ultrasound</span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
              <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg text-sm font-medium text-slate-700 flex items-center justify-between cursor-pointer hover:border-blue-200 transition-colors">
                <span className="truncate pr-2">Portable Ultrasound Unit</span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
              <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg text-sm font-medium text-slate-700 flex items-center justify-between cursor-pointer hover:border-blue-200 transition-colors">
                <span className="truncate pr-2">Ultrasound Probes & Accessories</span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* Requested Services */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Requested Services</h3>
            <div className="flex flex-wrap gap-2">
              {['Installation & Training', 'Russian Docs', 'Customs Assistance', 'Registration', 'Warranty Planning'].map(svc => (
                <span key={svc} className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Uploaded Files */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Uploaded Files</h3>
              <button className="text-blue-600 hover:text-blue-700"><Plus className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'uzb_hospital_rfq_ultrasound_v2.pdf', type: 'pdf' },
                { name: 'clinical_requirements_obgyn.docx', type: 'doc' },
                { name: 'target_delivery_sites.xlsx', type: 'xls' }
              ].map((file, idx) => (
                <div key={idx} className="flex items-start group">
                  <File className="w-4 h-4 text-slate-400 mr-2 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-slate-700 truncate">{file.name}</p>
                    <div className="flex items-center space-x-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[10px] text-blue-600 hover:underline">View</button>
                      <button className="text-[10px] text-slate-500 hover:underline">Replace</button>
                      <button className="text-[10px] text-purple-600 hover:underline flex items-center"><Sparkles className="w-3 h-3 mr-0.5"/> Summarize</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: AI Chat & Cards */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          
          {/* AI Capability Hint Strip */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center text-sm text-blue-800">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-medium mr-2">What AI can help with:</span>
              <span className="text-blue-600/80">Match manufacturers • Suggest logistics • Identify risks • Check RFQ gaps • Generate drafts</span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col">
            
            {/* View Tabs */}
            <div className="border-b border-slate-200 px-4 flex overflow-x-auto hide-scrollbar">
              {['Overview', 'Suppliers', 'Logistics', 'Compliance', 'RFQ Gaps', 'Suggested Services'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={cn(
                    "px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                    activeTab === tab.toLowerCase() ? "border-blue-600 text-blue-700" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-8">
              {/* User Message 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium text-slate-600">U</span>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 text-slate-800 text-sm leading-relaxed">
                    We are sourcing one advanced 4D color Doppler ultrasound system for a private hospital group in Uzbekistan. We need Russian-language documentation, installation support, and guidance on import and registration requirements. Please recommend suitable manufacturers and identify any major compliance or logistics risks.
                  </div>
                </div>
              </div>

              {/* AI Response 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-slate-800 text-sm leading-relaxed">
                    I analyzed your procurement context for Uzbekistan and identified three park-certified manufacturers that are suitable for OB/GYN and diagnostic imaging procurement. Based on your requested delivery timeline and support needs, this RFQ is best handled as a project-based procurement rather than a standard product inquiry.
                    <br/><br/>
                    The main commercial considerations are local registration support, Russian-language documentation, installation coordination, and warranty clarity. I also recommend including spare parts planning and on-site training in the RFQ to improve quotation quality.
                  </div>

                  {/* Embedded Cards 1 */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                    {/* Card A */}
                    <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Top Match</p>
                          <h4 className="font-bold text-slate-900 cursor-pointer hover:text-blue-700" onClick={onCompanyClick}>MedTech Precision Instruments</h4>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded border border-emerald-200">
                          92% Match
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-600 mb-4">
                        <p><span className="text-slate-400 w-20 inline-block">Category:</span> Imaging & Diagnostics</p>
                        <p><span className="text-slate-400 w-20 inline-block">Certs:</span> CE, ISO 13485</p>
                        <p><span className="text-slate-400 w-20 inline-block">Markets:</span> Europe, CIS, Central Asia</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-900 mb-1">Strengths:</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                          <li>Strong OB/GYN ultrasound portfolio</li>
                          <li>Russian-language support available</li>
                          <li>Supports installation and training</li>
                        </ul>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <button className="flex-1 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded transition-colors">Add to RFQ</button>
                        <button onClick={onCompanyClick} className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded transition-colors">View Profile</button>
                      </div>
                    </div>

                    {/* Card B */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Secondary Match</p>
                          <h4 className="font-bold text-slate-900">SonoVista Medical Systems</h4>
                        </div>
                        <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded border border-blue-200">
                          87% Match
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-slate-600 mb-4">
                        <p><span className="text-slate-400 w-20 inline-block">Category:</span> Diagnostic Imaging</p>
                        <p><span className="text-slate-400 w-20 inline-block">Certs:</span> CE, ISO 13485</p>
                        <p><span className="text-slate-400 w-20 inline-block">Markets:</span> Eastern Europe, Central Asia</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-900 mb-1">Risk:</p>
                        <p className="text-xs text-amber-600 flex items-start"><AlertTriangle className="w-3 h-3 mr-1 mt-0.5 shrink-0"/> Limited on-site service network in Uzbekistan</p>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <button className="flex-1 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded transition-colors">Add to RFQ</button>
                      </div>
                    </div>
                  </div>

                  {/* Card C: Services */}
                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5 shadow-sm mt-4">
                    <div className="flex items-center mb-3">
                      <Settings className="w-4 h-4 text-indigo-600 mr-2" />
                      <h4 className="font-bold text-slate-900">Recommended Service Bundle</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Installation & Initial Training', 'Registration Support', 'Russian Manuals', 'Customs Clearance', 'Spare Parts (12mo)'].map(svc => (
                        <span key={svc} className="inline-flex items-center px-2.5 py-1 rounded bg-white text-slate-700 text-xs border border-slate-200 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-indigo-500" /> {svc}
                        </span>
                      ))}
                    </div>
                    <button className="text-sm font-medium text-indigo-700 hover:text-indigo-800 flex items-center">
                      Add Services to RFQ <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                </div>
              </div>

              {/* User Message 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium text-slate-600">U</span>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 text-slate-800 text-sm leading-relaxed">
                    Can you give me a logistics recommendation and highlight any policy or legal risks?
                  </div>
                </div>
              </div>

              {/* AI Response 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-slate-800 text-sm leading-relaxed">
                    For this equipment class, a direct air shipment may reduce delivery time but increase cost substantially. For Uzbekistan, a controlled multimodal or air-plus-ground route may be appropriate depending on final packaging size and urgency.
                    <br/><br/>
                    On the regulatory side, the main risk is assuming the product can be imported and put into clinical use without additional local registration review. You should verify whether the selected model requires local registration, local representative support, labeling adaptation, or specific document legalization.
                  </div>

                  {/* Embedded Cards 2 */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
                    {/* Card D: Logistics */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center mb-4 pb-3 border-b border-slate-100">
                        <Truck className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-bold text-slate-900">Suggested Logistics Plan</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-xs text-slate-500">Recommended Incoterm</p>
                          <p className="font-medium text-slate-900">CIF Tashkent or DAP Tashkent</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Shipping Mode</p>
                          <p className="font-medium text-slate-900">Air + Ground (Urgent) / Rail + Ground</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Estimated Delivery</p>
                          <p className="font-medium text-slate-900">12–18 days (Air) / 22–35 days (Rail)</p>
                        </div>
                      </div>
                      <button className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded transition-colors">
                        Add Logistics Support
                      </button>
                    </div>

                    {/* Card E: Policy & Legal */}
                    <div className="bg-white border border-amber-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                        <div className="flex items-center">
                          <ShieldCheck className="w-5 h-5 text-amber-600 mr-2" />
                          <h4 className="font-bold text-slate-900">Policy / Legal Alerts</h4>
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Moderate Risk</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4">
                        <li>Local registration or import authorization may be required before clinical deployment</li>
                        <li>Russian-language user materials expected by local buyers</li>
                        <li>Warranty and service response commitments should be written into quotation</li>
                        <li>Clarify importer-of-record responsibility</li>
                      </ul>
                      <button className="mt-4 w-full py-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-medium rounded transition-colors">
                        Add Compliance Support
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl">
              <div className="relative">
                <textarea 
                  placeholder="Ask a question, request a draft, or refine requirements..."
                  className="w-full bg-white border border-slate-300 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  rows={2}
                ></textarea>
                <button className="absolute right-3 bottom-3 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Compare Suppliers Module (Conditional based on tab or just placed below) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Compare Recommended Suppliers</h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                Ask AI to explain ranking <Sparkles className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-y border-slate-200">
                  <tr>
                    <th className="px-4 py-3 font-medium">Manufacturer</th>
                    <th className="px-4 py-3 font-medium">Match</th>
                    <th className="px-4 py-3 font-medium">Certs</th>
                    <th className="px-4 py-3 font-medium">CIS Exp.</th>
                    <th className="px-4 py-3 font-medium">RU Support</th>
                    <th className="px-4 py-3 font-medium">Lead Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-semibold text-slate-900">MedTech Precision</td>
                    <td className="px-4 py-4"><span className="text-emerald-600 font-bold">92%</span></td>
                    <td className="px-4 py-4 text-slate-600">CE, ISO 13485</td>
                    <td className="px-4 py-4 text-slate-600">Strong</td>
                    <td className="px-4 py-4 text-slate-600">Yes</td>
                    <td className="px-4 py-4 text-slate-600">15–30 days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-semibold text-slate-900">SonoVista Medical</td>
                    <td className="px-4 py-4"><span className="text-blue-600 font-bold">87%</span></td>
                    <td className="px-4 py-4 text-slate-600">CE, ISO 13485</td>
                    <td className="px-4 py-4 text-slate-600">Moderate</td>
                    <td className="px-4 py-4 text-slate-600">Yes</td>
                    <td className="px-4 py-4 text-slate-600">10–20 days</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-semibold text-slate-900">Nova Imaging</td>
                    <td className="px-4 py-4"><span className="text-slate-600 font-bold">81%</span></td>
                    <td className="px-4 py-4 text-slate-600">CE</td>
                    <td className="px-4 py-4 text-slate-600">Limited</td>
                    <td className="px-4 py-4 text-slate-600">No</td>
                    <td className="px-4 py-4 text-slate-600">14–28 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors">
                Add Top 2 to RFQ
              </button>
            </div>
          </div>

          {/* AI-generated RFQ Draft Preview */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="bg-white rounded-xl p-6 relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">AI-Generated RFQ Draft</h3>
                    <p className="text-sm text-slate-500">Ultrasound System Procurement for Private Hospital Group in Uzbekistan</p>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">Draft Ready</span>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Products</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>1 x Advanced 4D Color Doppler Ultrasound</li>
                    <li>2 x Additional Probe Sets</li>
                    <li>1 x Accessories Package</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Services</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>Installation & Initial Training</li>
                    <li>Russian-language Documentation</li>
                    <li>Registration Support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" /> Open Items to Define
                </h4>
                <ul className="text-sm text-amber-700 list-disc pl-4 space-y-1">
                  <li>Warranty expectations to be confirmed</li>
                  <li>Registration responsibility to be assigned</li>
                  <li>Final payment term to be defined</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button onClick={onRfqClick} className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
                  Send to RFQ Basket
                </button>
                <button className="px-6 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors">
                  Save Draft
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Dynamic Decision Panel */}
        <div className="w-80 shrink-0 flex flex-col gap-4 sticky top-24">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
            <ListChecks className="w-4 h-4 mr-2 text-slate-400" /> Decision Panel
          </h2>

          {/* Current RFQ Readiness */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">RFQ Readiness</h3>
              <span className="text-lg font-bold text-blue-600">78%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2"/> Product selected</li>
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2"/> Destination market selected</li>
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2"/> Installation defined</li>
              <li className="flex items-center text-amber-600"><AlertTriangle className="w-3.5 h-3.5 mr-2"/> Warranty terms missing</li>
              <li className="flex items-center text-amber-600"><AlertTriangle className="w-3.5 h-3.5 mr-2"/> Registration responsibility</li>
            </ul>
            <button className="mt-4 w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded transition-colors">
              Auto-complete RFQ Draft
            </button>
          </div>

          {/* Recommended Manufacturers */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Top Manufacturers</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">MedTech Precision</p>
                  <p className="text-[10px] text-emerald-600 font-bold">92% Match</p>
                </div>
                <button className="text-xs text-blue-600 hover:underline">Add</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">SonoVista Medical</p>
                  <p className="text-[10px] text-blue-600 font-bold">87% Match</p>
                </div>
                <button className="text-xs text-blue-600 hover:underline">Add</button>
              </div>
            </div>
          </div>

          {/* Suggested Services */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Suggested Services</h3>
            <div className="space-y-2 mb-3">
              <div className="flex items-center text-xs text-slate-700"><Plus className="w-3 h-3 text-slate-400 mr-2"/> Registration Support</div>
              <div className="flex items-center text-xs text-slate-700"><Plus className="w-3 h-3 text-slate-400 mr-2"/> Installation & Training</div>
              <div className="flex items-center text-xs text-slate-700"><Plus className="w-3 h-3 text-slate-400 mr-2"/> RU Documentation Pack</div>
            </div>
            <button className="w-full py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded transition-colors">
              Add All Services
            </button>
          </div>

          {/* Logistics Snapshot */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Logistics Snapshot</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Route:</span> <span className="font-medium text-slate-900">Air + Ground</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Incoterm:</span> <span className="font-medium text-slate-900">CIF Tashkent</span></div>
              <div className="flex justify-between"><span className="text-slate-500">ETA:</span> <span className="font-medium text-slate-900">12–18 days</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Customs Risk:</span> <span className="font-medium text-amber-600">Moderate</span></div>
            </div>
          </div>

          {/* Next Best Actions */}
          <div className="bg-slate-900 rounded-xl p-4 shadow-lg text-white">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Next Best Actions</h3>
            <ul className="space-y-3 text-sm mb-4">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 shrink-0 mt-0.5"><span className="text-[10px] font-bold text-blue-300">1</span></div>
                <span className="text-slate-200">Add MedTech Precision to RFQ</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 shrink-0 mt-0.5"><span className="text-[10px] font-bold text-blue-300">2</span></div>
                <span className="text-slate-200">Upload warranty expectation doc</span>
              </li>
            </ul>
            <button onClick={onRfqClick} className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center justify-center">
              Continue to RFQ Basket <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
