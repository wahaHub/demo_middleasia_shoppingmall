import React, { useState } from 'react';
import { 
  ChevronRight, ShieldCheck, FileText, Upload, CheckCircle2, 
  Building2, Globe, Settings, Activity, Trash2, 
  Paperclip, Edit3, Plus, Info, Check, ArrowRight, FileSearch,
  BriefcaseMedical, Truck, Award, FileUp
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function RfqBasketPage({ onHomeClick }: { onHomeClick?: () => void }) {
  const [scenario, setScenario] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className="bg-slate-50 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center">
        <button onClick={onHomeClick} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-slate-900 font-medium">Procurement Workspace</span>
      </div>

      {/* Page Title Area */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Procurement Workspace</h1>
        <p className="text-slate-600 max-w-3xl">
          Organize products, services, specifications, and project requirements before submitting your formal sourcing request.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Products Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" /> Selected Products (2)
              </h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                <Plus className="w-4 h-4 mr-1" /> Add More
              </button>
            </div>

            {/* Product Card 1 */}
            <div className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-200 rounded-xl mb-4 hover:border-blue-300 transition-colors">
              <div className="w-full sm:w-40 h-32 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=300" alt="Ultrasound" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg leading-tight">Advanced 4D Color Doppler Ultrasound System</h3>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Building2 className="w-3.5 h-3.5 mr-1" /> MedTech Precision Instruments
                      <span className="mx-2 text-slate-300">|</span>
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-teal-600" /> <span className="text-teal-700 font-medium">Park Certified</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 my-3 text-sm">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Quantity</label>
                    <input type="number" defaultValue={2} className="w-20 px-2 py-1 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Target Lead Time</label>
                    <select className="w-full px-2 py-1 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-blue-500">
                      <option>Within 30 days</option>
                      <option>1-3 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex gap-3">
                  <button className="text-xs font-medium text-slate-600 hover:text-blue-600 flex items-center">
                    <Edit3 className="w-3.5 h-3.5 mr-1" /> Add Specs/Notes
                  </button>
                  <button className="text-xs font-medium text-slate-600 hover:text-blue-600 flex items-center">
                    <Paperclip className="w-3.5 h-3.5 mr-1" /> Attach Requirement
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="flex flex-col sm:flex-row gap-6 p-4 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="w-full sm:w-40 h-32 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400&h=300" alt="Monitor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg leading-tight">Multi-Parameter ICU Patient Monitor</h3>
                    <div className="flex items-center text-xs text-slate-500 mt-1">
                      <Building2 className="w-3.5 h-3.5 mr-1" /> SinoCare Medical Devices
                      <span className="mx-2 text-slate-300">|</span>
                      <ShieldCheck className="w-3.5 h-3.5 mr-1 text-teal-600" /> <span className="text-teal-700 font-medium">Park Certified</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 my-3 text-sm">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Quantity</label>
                    <input type="number" defaultValue={15} className="w-20 px-2 py-1 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">Target Lead Time</label>
                    <select className="w-full px-2 py-1 border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-blue-500">
                      <option>Within 30 days</option>
                      <option>1-3 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex gap-3">
                  <button className="text-xs font-medium text-slate-600 hover:text-blue-600 flex items-center">
                    <Edit3 className="w-3.5 h-3.5 mr-1" /> Add Specs/Notes
                  </button>
                  <button className="text-xs font-medium text-slate-600 hover:text-blue-600 flex items-center">
                    <Paperclip className="w-3.5 h-3.5 mr-1" /> Attach Requirement
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center">
                <BriefcaseMedical className="w-5 h-5 mr-2 text-blue-600" /> Related Services
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">Select the support services required for this procurement project.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Installation & Training', icon: Settings, selected: true },
                { title: 'Registration Support', icon: FileText, selected: true },
                { title: 'Cross-border Logistics', icon: Truck, selected: false },
                { title: 'Tender Support', icon: FileSearch, selected: false },
                { title: 'Tax Exemption Guidance', icon: Award, selected: false },
                { title: 'Distributor Matching', icon: Globe, selected: false },
              ].map((service, idx) => (
                <div key={idx} className={cn(
                  "flex items-start p-4 rounded-xl border cursor-pointer transition-colors",
                  service.selected ? "border-blue-600 bg-blue-50/30" : "border-slate-200 hover:border-blue-300 bg-white"
                )}>
                  <div className={cn(
                    "w-5 h-5 rounded border flex items-center justify-center mr-3 mt-0.5 shrink-0 transition-colors",
                    service.selected ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 bg-white text-transparent"
                  )}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className={cn("font-medium text-sm mb-1", service.selected ? "text-blue-900" : "text-slate-700")}>
                      {service.title}
                    </h4>
                    {service.selected && (
                      <button className="text-xs text-blue-600 hover:underline flex items-center mt-2">
                        <Edit3 className="w-3 h-3 mr-1" /> Add details
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Procurement Scenario & Destination */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-600" /> Project Context & Destination
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Procurement Scenario</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Hospital Procurement', 'Clinic Purchase', 'Distributor Sourcing',
                    'Government / Institutional', 'Tender Preparation', 'Private Import'
                  ].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => setScenario(opt)}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium rounded-lg border text-left transition-colors",
                        scenario === opt ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Delivery Country</label>
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select country...</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Europe">Europe (Other)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Target Market / Region</label>
                  <input type="text" placeholder="e.g., Almaty Region" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-sm font-medium text-slate-900 mb-3">Compliance & Documentation Needs</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="ml-3 text-sm text-slate-700">Local medical device registration required</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="ml-3 text-sm text-slate-700">Import documentation support needed</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="ml-3 text-sm text-slate-700">Tax exemption / government support program applicable</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Document Upload */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
              <FileUp className="w-5 h-5 mr-2 text-blue-600" /> Upload Technical Documents
            </h2>
            <p className="text-sm text-slate-600 mb-6">Attach tender documents, technical specifications, or hospital purchase lists for accurate quotations.</p>
            
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-900 mb-1">Click to upload or drag and drop</h3>
              <p className="text-xs text-slate-500 text-center max-w-xs">
                PDF, DOCX, XLSX supported. Max file size 50MB. Upload technical specs for more accurate manufacturer matching.
              </p>
            </div>
          </section>

          {/* Additional Notes */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">
              Additional Requirements
            </h2>
            <textarea 
              rows={4}
              placeholder="Specify preferred payment terms, target budget range, warranty expectations, or any other project conditions..."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
            ></textarea>
          </section>

        </div>

        {/* Right Column: Summary Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            
            {/* Summary Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg shadow-slate-200/50">
              <h2 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">RFQ Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Products</span>
                  <span className="font-medium text-slate-900">2 items</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Services</span>
                  <span className="font-medium text-slate-900">2 selected</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Procurement Type</span>
                  <span className="font-medium text-slate-900 text-right">{scenario || 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Destination</span>
                  <span className="font-medium text-slate-900">{country || 'Not selected'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Attached Files</span>
                  <span className="font-medium text-slate-900">0 files</span>
                </div>
              </div>

              {/* Validation Checklist */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Submission Readiness</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-teal-700">
                    <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> Products selected
                  </li>
                  <li className={cn("flex items-center", scenario ? "text-teal-700" : "text-slate-400")}>
                    {scenario ? <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> : <div className="w-4 h-4 rounded-full border border-slate-300 mr-2 shrink-0" />} 
                    Scenario defined
                  </li>
                  <li className={cn("flex items-center", country ? "text-teal-700" : "text-slate-400")}>
                    {country ? <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> : <div className="w-4 h-4 rounded-full border border-slate-300 mr-2 shrink-0" />} 
                    Destination set
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-sm flex items-center justify-center">
                  Submit RFQ <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="w-full py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-300 transition-colors shadow-sm">
                  Save Draft
                </button>
              </div>
              
              <div className="mt-4 flex justify-center gap-4 text-xs font-medium text-slate-500">
                <button className="hover:text-blue-600">Share RFQ</button>
                <span>|</span>
                <button className="hover:text-blue-600">Export PDF</button>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center mb-4">
                <Info className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="font-semibold text-white">What happens next?</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 shrink-0" />
                  Your RFQ is securely routed to verified manufacturers.
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 shrink-0" />
                  Matching suppliers prepare project-based quotations.
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 shrink-0" />
                  Our team coordinates requested logistics and compliance services.
                </li>
              </ul>
            </div>

            {/* Trust Strip Vertical */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-3 shrink-0" />
                <span className="font-medium">Verified Manufacturers Only</span>
              </div>
              <div className="flex items-center text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                <FileSearch className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <span className="font-medium">Tender & Institutional Support</span>
              </div>
              <div className="flex items-center text-sm text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                <Truck className="w-5 h-5 text-indigo-600 mr-3 shrink-0" />
                <span className="font-medium">Logistics & Customs Assistance</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
