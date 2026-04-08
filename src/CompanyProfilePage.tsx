import React from 'react';
import { 
  Building2, CheckCircle2, Award, Globe, MapPin, ShieldCheck, 
  FileText, Settings, Users, ArrowRight, ChevronRight, Download, 
  Mail, Phone, PlayCircle, Star, Factory, Truck, HeadphonesIcon,
  Microscope, Activity, HeartPulse, FileSearch, BriefcaseMedical
} from 'lucide-react';

interface CompanyProfilePageProps {
  onHomeClick: () => void;
  onProductClick?: () => void;
  onRfqClick?: () => void;
}

export default function CompanyProfilePage({ onHomeClick, onProductClick, onRfqClick }: CompanyProfilePageProps) {
  return (
    <div className="bg-slate-50 pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-xs text-slate-500">
          <button onClick={onHomeClick} className="hover:text-blue-700 transition-colors">Home</button>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="hover:text-blue-700 transition-colors cursor-pointer">Verified Manufacturers</span>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-slate-900 font-medium">MedTech Precision Instruments</span>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  M
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                    MedTech Precision Instruments
                  </h1>
                  <p className="text-lg text-blue-700 font-medium mt-1 flex items-center">
                    <Activity className="w-5 h-5 mr-2" /> Imaging & Diagnostics
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Park Certified
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified Manufacturer
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                  CE Certified
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                  ISO 13485
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                  <Globe className="w-3.5 h-3.5 mr-1" /> CIS Market Experience
                </span>
              </div>

              {/* Core Data */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Main Markets</p>
                  <p className="font-semibold text-slate-900">Europe, CIS, Central Asia</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Response Rate</p>
                  <p className="font-semibold text-emerald-600 text-lg">98%</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Years in Business</p>
                  <p className="font-semibold text-slate-900">12+ Years</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Factory Area</p>
                  <p className="font-semibold text-slate-900">8,500 m²</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-md flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> Contact Manufacturer
                </button>
                <button onClick={onRfqClick} className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors shadow-md flex items-center">
                  <FileText className="w-4 h-4 mr-2" /> Upload RFQ
                </button>
                <button className="px-6 py-3 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-medium rounded-xl transition-colors flex items-center">
                  <Download className="w-4 h-4 mr-2" /> Company Profile
                </button>
                <button className="px-6 py-3 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-medium rounded-xl transition-colors flex items-center">
                  <Globe className="w-4 h-4 mr-2" /> Ask About Distribution
                </button>
              </div>
            </div>

            {/* Right: Main Visual */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Medical Equipment Showroom" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <p className="font-semibold text-lg">Next-Gen Imaging Showroom</p>
                  <p className="text-sm text-slate-200">Headquarters & Innovation Center</p>
                </div>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-colors border border-white/30">
                  <PlayCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Highlights */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
            alt="Production Floor" 
            className="w-full h-full object-cover"
            style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-white mb-8">Company Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Medical Manufacturing', value: '12+ Years' },
              { label: 'Production Facility', value: '8,500 m²' },
              { label: 'R&D Engineers', value: '46' },
              { label: 'Systems / Year', value: '1,200' },
              { label: 'Export Countries', value: '28' },
              { label: 'Response Rate', value: '98%' },
              { label: 'Certified', value: 'CE & ISO 13485' },
              { label: 'Support Available', value: 'Russian-language' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About the Manufacturer */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Manufacturer</h2>
            <div className="prose prose-slate prose-lg text-slate-600">
              <p>
                MedTech Precision Instruments is a park-certified manufacturer specializing in imaging and diagnostic systems for hospitals, specialty clinics, and distributor networks. With over 12 years of experience in medical equipment development and export, the company focuses on ultrasound platforms, diagnostic imaging solutions, and application-specific workflow systems designed for international markets.
              </p>
              <p>
                The company serves buyers across Europe, CIS, and selected Central Asia markets, with strong capabilities in product customization, export documentation, multilingual support, and project-based procurement response.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /> Export-ready Product Lines
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" /> Multilingual Documentation
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600" 
              alt="R&D Team" 
              className="w-full h-full object-cover rounded-2xl shadow-md"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600" 
              alt="Product Testing" 
              className="w-full h-full object-cover rounded-2xl shadow-md mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 4. Certifications & Compliance */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              { title: 'CE Certification', icon: Award },
              { title: 'ISO 13485 Quality', icon: ShieldCheck },
              { title: 'Export Documentation', icon: FileText },
              { title: 'Local Registration', icon: Globe },
              { title: 'Tender Documentation', icon: FileSearch },
            ].map((cert, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{cert.title}</h3>
              </div>
            ))}
          </div>
          <div className="h-64 md:h-96 rounded-3xl overflow-hidden relative shadow-lg max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=1200" 
              alt="Compliance Documents" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/20"></div>
          </div>
        </div>
      </section>

      {/* 5. Product Portfolio */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Product Lines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: '4D Color Doppler Ultrasound Systems', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400' },
            { name: 'Portable Ultrasound Devices', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400' },
            { name: 'Diagnostic Imaging Platforms', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400' },
            { name: 'Clinical Workstation Accessories', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' },
            { name: 'OB/GYN Imaging Solutions', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=400' },
          ].map((product, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-lg transition-all cursor-pointer" onClick={onProductClick}>
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Manufacturing Capability */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 h-[500px]">
             <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=600" 
              alt="Assembly Line" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" 
              alt="QC Inspection" 
              className="w-full h-full object-cover rounded-2xl shadow-lg mt-12"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Manufacturing Capability</h2>
            <div className="space-y-4">
              {[
                { label: 'Production Facility', value: '8,500 m²' },
                { label: 'Assembly Lines', value: '4' },
                { label: 'QC Inspection Stations', value: '6' },
                { label: 'R&D Engineers', value: '46' },
                { label: 'Annual Capacity', value: '1,200 systems' },
                { label: 'OEM/ODM Capability', value: 'Available' },
                { label: 'Demo Unit Support', value: 'Available for selected markets' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-700 last:border-0">
                  <span className="text-slate-400 flex items-center">
                    <Factory className="w-4 h-4 mr-3 text-slate-500" /> {item.label}
                  </span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Market & Export Support */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">International Market Support</h2>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8">
              <MapPin className="w-4 h-4 mr-2" /> Main Markets: Europe, CIS, Central Asia
            </div>
            <ul className="space-y-4">
              {[
                'Russian-language sales support',
                'Export packaging and documentation',
                'Distributor onboarding support',
                'Tender / institutional procurement response',
                'Training and after-sales coordination',
                'Cross-border shipping assistance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
              alt="Global Shipping" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 8. Service & After-sales Support */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Service & After-sales Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Installation Guidance', icon: Settings },
                { title: 'Remote Training', icon: PlayCircle },
                { title: 'Spare Parts Support', icon: Settings },
                { title: 'Warranty Coverage', icon: ShieldCheck },
                { title: 'Manuals (EN/RU)', icon: FileText },
                { title: 'After-sales Coordination', icon: HeadphonesIcon },
                { title: 'Registration Assistance', icon: FileSearch },
                { title: 'Distributor Tech Support', icon: Users },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-800 text-sm">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1588196749597-9ff0464b83cb?auto=format&fit=crop&q=80&w=800" 
              alt="Remote Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">Dedicated remote support and training for international distributors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
          <button onClick={onProductClick} className="text-blue-700 font-medium hover:text-blue-800 flex items-center">
            View all products <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Advanced 4D Color Doppler Ultrasound System', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400' },
            { name: 'Smart Portable Ultrasound Unit', img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400' },
            { name: 'Multi-Application Diagnostic Ultrasound Platform', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400' },
          ].map((product, idx) => (
            <div key={idx} onClick={onProductClick} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
              <div className="h-56 overflow-hidden bg-slate-100">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors line-clamp-2">{product.name}</h3>
                <button className="w-full py-2 bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-lg text-sm group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" 
              alt="Global Medical Manufacturing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 p-12 lg:p-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Source from MedTech Precision?</h2>
            <p className="text-lg text-blue-100 mb-10">
              Connect directly with the manufacturer for customized quotations, distributor partnerships, and tender support in Central Asia and Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg">
                Contact Manufacturer
              </button>
              <button onClick={onRfqClick} className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl transition-colors shadow-lg">
                Upload RFQ
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-xl transition-colors backdrop-blur-sm">
                Request Certifications
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium rounded-xl transition-colors backdrop-blur-sm">
                Ask About Central Asia Distribution
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
