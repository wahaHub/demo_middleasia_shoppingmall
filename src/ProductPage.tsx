import React, { useState } from 'react';
import { 
  ChevronRight, ShieldCheck, FileText, Download, MessageSquare, 
  Upload, CheckCircle2, Award, Truck, Settings, Activity, HeartPulse, 
  Building2, Globe, FileSearch, BriefcaseMedical, Wrench, FileBadge,
  Check, Info
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ProductPage({ onHomeClick }: { onHomeClick?: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600'
  ];

  return (
    <div className="bg-slate-50 pb-20">
      {/* 2. Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center">
        <button onClick={onHomeClick} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3 h-3 mx-2" />
        <a href="#" className="hover:text-blue-600">Medical Devices</a>
        <ChevronRight className="w-3 h-3 mx-2" />
        <a href="#" className="hover:text-blue-600">Ultrasound Equipment</a>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-slate-900 font-medium">Advanced 4D Color Doppler Ultrasound System</span>
      </div>

      {/* 3. Main Product Hero */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col lg:flex-row gap-8">
          
          {/* Left: Gallery */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={images[activeImage]} alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-colors",
                    activeImage === idx ? "border-blue-600" : "border-transparent hover:border-slate-300"
                  )}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Center: Info */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-2">
              Advanced 4D Color Doppler Ultrasound System
            </h1>
            <p className="text-sm text-slate-500 mb-4">High-resolution diagnostic imaging for comprehensive clinical applications.</p>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-100">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Park Certified
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline font-medium flex items-center">
                <Building2 className="w-4 h-4 mr-1" /> MedTech Precision Instruments Co., Ltd.
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium border border-slate-200">CE Certified</span>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium border border-slate-200">ISO 13485</span>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium border border-slate-200">Export: Global</span>
            </div>

            <p className="text-sm text-slate-700 mb-4 leading-relaxed">
              A premium cart-based ultrasound system delivering exceptional image quality, advanced 4D rendering, and intelligent workflow tools for demanding hospital environments.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                '4D real-time imaging with advanced rendering',
                'Highly sensitive color Doppler capability',
                'Multi-probe support (Convex, Linear, Transvaginal, Phased Array)',
                'OB/GYN, abdominal, cardiac, and vascular applications',
                '21-inch high-resolution medical display',
                'AI-assisted measurement and workflow software'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-700">
                  <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Action Panel */}
          <div className="w-full lg:w-1/3">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Procurement Actions</h3>
              
              <div className="space-y-3 mb-6">
                <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-2" /> Request Quote
                </button>
                <button className="w-full py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-300 transition-colors shadow-sm flex items-center justify-center">
                  <Upload className="w-4 h-4 mr-2" /> Upload RFQ
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-300 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" /> Brochure
                  </button>
                  <button className="py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-300 transition-colors flex items-center justify-center">
                    <FileBadge className="w-4 h-4 mr-2" /> Certs
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Manufacturer</span>
                  <span className="font-medium text-slate-900 flex items-center"><ShieldCheck className="w-4 h-4 text-teal-600 mr-1"/> Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Response Time</span>
                  <span className="font-medium text-slate-900">&lt; 12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pricing</span>
                  <span className="font-medium text-slate-900">Project-based</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Time</span>
                  <span className="font-medium text-slate-900">15-30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Quick Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 justify-between items-center py-4 border-y border-slate-200">
          {[
            { icon: ShieldCheck, text: 'Manufacturer Certified' },
            { icon: FileText, text: 'Supports RFQ Procurement' },
            { icon: Building2, text: 'Tender Ready' },
            { icon: Settings, text: 'Installation Available' },
            { icon: FileBadge, text: 'Export Compliance' },
            { icon: Globe, text: 'Global Shipping' }
          ].map((item, i) => (
            <div key={i} className="flex items-center text-sm font-medium text-slate-700">
              <item.icon className="w-4 h-4 text-blue-600 mr-2" />
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* 5. Product Overview */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Product Overview</h2>
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed">
              <p className="mb-4">
                The Advanced 4D Color Doppler Ultrasound System is a state-of-the-art diagnostic imaging platform engineered for high-volume hospitals and specialized clinics. Combining exceptional image clarity with intelligent workflow automation, it provides clinicians with the confidence needed for complex diagnoses.
              </p>
              <p>
                Designed with international procurement standards in mind, this system is fully CE and ISO 13485 certified, making it an ideal choice for institutional tenders, government healthcare projects, and private hospital upgrades across Central Asia, Europe, and emerging markets.
              </p>
            </div>
          </section>

          {/* 6. Applications */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Clinical Applications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'OB/GYN', icon: Activity },
                { name: 'Cardiology', icon: HeartPulse },
                { name: 'Vascular', icon: Activity },
                { name: 'Abdominal', icon: Activity },
                { name: 'Small Parts', icon: Activity },
                { name: 'General Imaging', icon: Activity },
              ].map((app, i) => (
                <div key={i} className="flex items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-blue-600 mr-3">
                    <app.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{app.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Technical Specs */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Technical Specifications</h2>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-slate-200">
                  {[
                    ['Display', '21.5" High-Resolution LED Monitor, Articulating Arm'],
                    ['Imaging Modes', 'B, M, Color Doppler, PDI, PW, CW, 3D/4D'],
                    ['Probe Ports', '4 Active Transducer Ports'],
                    ['Connectivity', 'DICOM 3.0, USB 3.0, Ethernet, HDMI'],
                    ['Storage', '1TB Integrated Hard Drive'],
                    ['Power Requirements', '100-240V~, 50/60Hz'],
                    ['Dimensions', '1350mm(H) x 520mm(W) x 720mm(D)'],
                    ['Weight', 'Approx. 65 kg']
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <th className="px-6 py-3 font-medium text-slate-900 w-1/3">{row[0]}</th>
                      <td className="px-6 py-3 text-slate-700">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11. After-sales */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">After-Sales & Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Warranty', desc: 'Standard 24-month comprehensive warranty.' },
                { title: 'Training', desc: 'On-site clinical and technical training available.' },
                { title: 'Spare Parts', desc: 'Guaranteed 10-year spare parts availability.' },
                { title: 'Remote Support', desc: '24/7 remote diagnostic and software support.' }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl">
                  <Wrench className="w-5 h-5 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          
          {/* 8. Certifications */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" /> Certifications
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-medium text-sm text-slate-800">CE Mark</span>
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-medium text-sm text-slate-800">ISO 13485:2016</span>
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-medium text-sm text-slate-800">FSC (Free Sale Cert)</span>
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>
            </div>
            <button className="w-full py-2 text-sm text-blue-700 font-medium hover:bg-blue-50 rounded transition-colors">
              Request Compliance Docs
            </button>
          </section>

          {/* 9. Manufacturer Profile */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-600" /> Manufacturer Info
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center text-xl font-bold text-slate-400">
                M
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm leading-tight">MedTech Precision Instruments</h4>
                <span className="text-xs text-teal-700 font-medium flex items-center mt-0.5">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Park Certified
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-slate-600 mb-4">
              <div className="flex justify-between"><span className="text-slate-500">Established</span><span className="font-medium text-slate-900">2005</span></div>
              <div className="flex justify-between"><span className="text-slate-500">R&D Staff</span><span className="font-medium text-slate-900">150+</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Main Markets</span><span className="font-medium text-slate-900">Europe, CIS, Asia</span></div>
            </div>
            <button className="w-full py-2 text-sm border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 rounded transition-colors">
              View Full Profile
            </button>
          </section>

          {/* 10. Trade Support */}
          <section className="bg-slate-900 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-4 flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-teal-400" /> Procurement Support
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0 mt-0.5" /> Payment Security & Escrow</li>
              <li className="flex items-start"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0 mt-0.5" /> Shipping & Customs Assistance</li>
              <li className="flex items-start"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0 mt-0.5" /> Tax Exemption Guidance</li>
              <li className="flex items-start"><Check className="w-4 h-4 text-teal-400 mr-2 shrink-0 mt-0.5" /> Tender Documentation Support</li>
            </ul>
          </section>

        </div>
      </div>

      {/* 12. RFQ Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need a customized quotation or project-based procurement support?</h2>
            <p className="text-blue-100 mb-6">Submit your hospital requirements, tender specifications, or distributor inquiries for priority processing.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors flex items-center">
                <Upload className="w-5 h-5 mr-2" /> Upload RFQ
              </button>
              <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-xl hover:bg-blue-800 border border-blue-500 transition-colors">
                Request Project Quotation
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <FileSearch className="w-32 h-32 text-blue-400/50" />
          </div>
        </div>
      </div>

      {/* 13 & 14. Related Services & Products */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Related Services & Alternative Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 p-5 rounded-xl hover:shadow-md transition-shadow">
            <BriefcaseMedical className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-1">Registration Support</h4>
            <p className="text-xs text-slate-500 mb-3">Fast-track medical device registration in CIS.</p>
            <a href="#" className="text-sm font-medium text-blue-700 hover:underline">Learn more</a>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-teal-600 mb-3" />
            <h4 className="font-semibold text-slate-900 mb-1">Distributor Matching</h4>
            <p className="text-xs text-slate-500 mb-3">Connect with verified local distributors.</p>
            <a href="#" className="text-sm font-medium text-blue-700 hover:underline">Learn more</a>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="h-32 bg-slate-100"><img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=300" alt="Portable" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer"/></div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Portable Color Doppler</h4>
              <p className="text-xs text-slate-500 mb-3">Compact design for point-of-care.</p>
              <a href="#" className="text-sm font-medium text-blue-700 hover:underline mt-auto">View Product</a>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="h-32 bg-slate-100"><img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400&h=300" alt="Premium" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer"/></div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Premium 4D Ultrasound</h4>
              <p className="text-xs text-slate-500 mb-3">Flagship model with AI tools.</p>
              <a href="#" className="text-sm font-medium text-blue-700 hover:underline mt-auto">View Product</a>
            </div>
          </div>
        </div>
      </div>

      {/* 15. Bottom CTA Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center">
            <span className="font-semibold text-slate-900 mr-4">Advanced 4D Color Doppler Ultrasound System</span>
            <span className="text-sm text-slate-500 flex items-center"><ShieldCheck className="w-4 h-4 text-teal-600 mr-1"/> Park Certified Manufacturer</span>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors text-sm">
              Contact Manufacturer
            </button>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm shadow-sm">
              Request a Quote
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
