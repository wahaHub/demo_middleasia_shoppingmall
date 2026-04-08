import React, { useState } from 'react';
import { 
  Search, Sparkles, MapPin, Globe, User, ShoppingCart, Upload, 
  ChevronRight, ArrowRight, ShieldCheck, FileText, Truck, 
  Settings, Building2, TrendingUp, Award, CheckCircle2, 
  Stethoscope, Activity, Microchip, HeartPulse, FileSearch,
  BriefcaseMedical, Shield, ChevronLeft
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ProductPage from './ProductPage';
import RfqBasketPage from './RfqBasketPage';
import CompanyProfilePage from './CompanyProfilePage';
import AiSearchPage from './AiSearchPage';
import FloatingChatWidget from './FloatingChatWidget';
import BusinessDashboard from './BusinessDashboard';
import AiMarketingCenter from './AiMarketingCenter';
import AiKnowledgeBase from './AiKnowledgeBase';
import ProductManagement from './ProductManagement';
import CrmPage from './CrmPage';
import AiManagerBot from './AiManagerBot';
import AiRecruitmentCenter from './AiRecruitmentCenter';
import AdminDashboard from './AdminDashboard';
import AdminOrderManagement from './AdminOrderManagement';
import AdminMatchmaking from './AdminMatchmaking';
import AdminDisputes from './AdminDisputes';
import AdminVendors from './AdminVendors';
import AdminProductManagement from './AdminProductManagement';
import BusinessCustomization from './BusinessCustomization';

// Utility for tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- MOCK DATA ---

const CATEGORIES = [
  { name: 'Medical Devices', icon: Stethoscope },
  { name: 'Diagnostics / IVD', icon: Activity },
  { name: 'Medical Consumables', icon: HeartPulse },
  { name: 'Hospital Equipment', icon: Building2 },
  { name: 'Rehabilitation Equipment', icon: User },
  { name: 'Aesthetic Medical Devices', icon: Sparkles },
  { name: 'Digital Health', icon: Microchip },
  { name: 'Export & Logistics Services', icon: Truck },
  { name: 'Compliance & Registration', icon: FileCheck },
  { name: 'Distributor / Market Entry', icon: Globe },
];

// Helper component for missing icon
function FileCheck(props: any) {
  return <FileText {...props} />;
}

const QUICK_SEARCHES = [
  'Patient Monitor', 'Ultrasound', 'ECG', 'Diagnostics Reagents', 
  'Hospital Bed', 'Rehabilitation Equipment', 'Kazakhstan Tender', 
  'Uzbekistan Registration', 'Distributor Matching', 'Tax Exemption Program'
];

const PRODUCTS = [
  {
    name: 'Advanced 4D Color Doppler Ultrasound System',
    supplier: 'MedTech Precision Instruments Co., Ltd.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=300',
    certs: ['CE', 'ISO13485'],
    region: 'Central Asia, Europe',
  },
  {
    name: 'Multi-Parameter ICU Patient Monitor',
    supplier: 'SinoCare Medical Devices',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400&h=300',
    certs: ['CE', 'FDA'],
    region: 'Global',
  },
  {
    name: 'Automated Biochemistry Analyzer',
    supplier: 'BioTest Diagnostics Park',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400&h=300',
    certs: ['CE', 'FSC'],
    region: 'CIS Region',
  },
  {
    name: 'Electric Adjustable Hospital Bed',
    supplier: 'CareEquip Manufacturing',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400&h=300',
    certs: ['ISO9001'],
    region: 'Central Asia, Middle East',
  },
];

const SERVICES = [
  { title: 'Certification Guidance', desc: 'CE, FDA, and local CIS certifications', icon: Award, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Registration Support', desc: 'Fast-track medical device registration', icon: FileText, image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Cross-border Logistics', desc: 'Cold chain and specialized medical transport', icon: Truck, image: 'https://images.unsplash.com/photo-1586528116311-ad8ed79abdfa?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Installation & Training', desc: 'On-site technical support and staff training', icon: Settings, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Distributor Matching', desc: 'Connect with verified local distributors', icon: UsersIcon, image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Tender Support', desc: 'Assistance with government procurement bids', icon: FileSearch, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Recruitment Support', desc: 'Hire local medical sales and technical staff', icon: BriefcaseMedical, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=250' },
  { title: 'Localization & Translation', desc: 'Medical document and manual translation', icon: Globe, image: 'https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?auto=format&fit=crop&q=80&w=400&h=250' },
];

function UsersIcon(props: any) {
  return <User {...props} />;
}

const SUPPLIERS = [
  { name: 'MedTech Precision Instruments', specialty: 'Imaging & Diagnostics', certs: 'CE, ISO13485', markets: 'Europe, CIS', response: '98%', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=300' },
  { name: 'SinoCare Medical Devices', specialty: 'Patient Monitoring', certs: 'CE, FDA', markets: 'Global', response: '99%', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=300' },
  { name: 'BioTest Diagnostics Park', specialty: 'IVD Reagents', certs: 'CE, FSC', markets: 'CIS, Asia', response: '95%', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600&h=300' },
  { name: 'CareEquip Manufacturing', specialty: 'Hospital Furniture', certs: 'ISO9001', markets: 'Middle East, CIS', response: '100%', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600&h=300' },
];

const COUNTRIES = [
  { name: 'Kazakhstan', desc: 'Hub for Central Asia medical distribution' },
  { name: 'Uzbekistan', desc: 'Fast-growing healthcare infrastructure' },
  { name: 'Kyrgyzstan', desc: 'Emerging market for medical devices' },
  { name: 'Tajikistan', desc: 'Focus on essential medical supplies' },
  { name: 'Turkmenistan', desc: 'Government tender opportunities' },
];

const INSIGHTS = [
  { title: 'New Medical Device Registration Rules in Uzbekistan', type: 'Compliance', date: 'Oct 12, 2023' },
  { title: 'Ministry of Health Kazakhstan Announces Q4 Tender Schedule', type: 'Tender Notice', date: 'Oct 10, 2023' },
  { title: 'Guide to Tax Exemption for Medical Imports in Central Asia', type: 'Market Report', date: 'Oct 05, 2023' },
];

// --- COMPONENTS ---

const TopHeader = ({ onHomeClick, onRfqClick, onBusinessClick }: { onHomeClick?: () => void, onRfqClick?: () => void, onBusinessClick?: () => void }) => (
  <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
    {/* Top Utility Bar */}
    <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button className="flex items-center hover:text-slate-900 transition-colors">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Deliver to: <span className="font-medium ml-1 text-slate-900">Kazakhstan</span>
          </button>
          <button className="flex items-center hover:text-slate-900 transition-colors">
            <Globe className="w-3.5 h-3.5 mr-1.5" />
            English - USD
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={onBusinessClick} className="flex items-center hover:text-blue-700 transition-colors font-medium text-blue-600">
            <Building2 className="w-3.5 h-3.5 mr-1" /> Supplier Portal
          </button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'admin-dashboard' }))} className="flex items-center hover:text-blue-700 transition-colors font-medium text-slate-700">
            <Shield className="w-3.5 h-3.5 mr-1" /> Admin Portal
          </button>
          <a href="#" className="hover:text-slate-900 transition-colors">Help Center</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Buyer Central</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Sell on Platform</a>
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-300">
            <button className="hover:text-slate-900 transition-colors">Sign In</button>
            <button className="font-medium text-blue-700 hover:text-blue-800 transition-colors">Create Account</button>
          </div>
        </div>
      </div>
    </div>

    {/* Main Header */}
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight tracking-tight">MedSource</h1>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Industrial Park</p>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <a href="#" className="flex items-center hover:text-blue-700 transition-colors">
            All Categories <ChevronRight className="w-4 h-4 ml-1 rotate-90 opacity-50" />
          </a>
          <a href="#" className="hover:text-blue-700 transition-colors">Verified Manufacturers</a>
          <a href="#" className="hover:text-blue-700 transition-colors">Trade Support</a>
          <a href="#" className="hover:text-blue-700 transition-colors">Tax Exemption</a>
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <button className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">
          <Upload className="w-4 h-4 mr-2" />
          Upload RFQ
        </button>
        <button onClick={onRfqClick} className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Inquiry Basket
        </button>
      </div>
    </div>
  </header>
);

const GlobalSearchSection = ({ onAiSearchClick }: { onAiSearchClick?: () => void }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'products' | 'services'>('ai');

  return (
    <section className="bg-white border-b border-slate-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
          The Premium Gateway for <span className="font-semibold">Medical Sourcing</span>
        </h2>

        {/* Search Module */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-100">
            <button 
              onClick={() => setActiveTab('ai')}
              className={cn(
                "flex-1 py-4 text-sm font-medium flex items-center justify-center transition-colors relative",
                activeTab === 'ai' ? "text-blue-700 bg-blue-50/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              <Sparkles className={cn("w-4 h-4 mr-2", activeTab === 'ai' ? "text-blue-600" : "text-slate-400")} />
              AI Search
              {activeTab === 'ai' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={cn(
                "flex-1 py-4 text-sm font-medium flex items-center justify-center transition-colors relative",
                activeTab === 'products' ? "text-slate-900 bg-slate-50/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              <Search className="w-4 h-4 mr-2 text-slate-400" />
              Products
              {activeTab === 'products' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('services')}
              className={cn(
                "flex-1 py-4 text-sm font-medium flex items-center justify-center transition-colors relative",
                activeTab === 'services' ? "text-slate-900 bg-slate-50/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              <BriefcaseMedical className="w-4 h-4 mr-2 text-slate-400" />
              Services
              {activeTab === 'services' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"></div>}
            </button>
          </div>

          {/* Input Area */}
          <div className="p-2 flex items-center">
            <div className="flex-1 relative">
              {activeTab === 'ai' && <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />}
              {activeTab !== 'ai' && <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />}
              <input 
                type="text" 
                placeholder={
                  activeTab === 'ai' ? "Ask about regulations, tenders, tax exemptions, or market entry..." :
                  activeTab === 'products' ? "Search medical devices, IVD, hospital equipment..." :
                  "Search certification, logistics, distributor matching..."
                }
                className="w-full pl-12 pr-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none text-lg"
              />
            </div>
            <button 
              onClick={activeTab === 'ai' ? onAiSearchClick : undefined}
              className={cn(
              "px-8 py-4 rounded-xl font-medium text-white transition-all shadow-sm",
              activeTab === 'ai' ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-900 hover:bg-slate-800"
            )}>
              Search
            </button>
          </div>
        </div>

        {/* Quick Searches */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-500 mr-2">Trending:</span>
          {QUICK_SEARCHES.slice(0, 6).map((term, idx) => (
            <a key={idx} href="#" className="text-xs text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors border border-slate-200">
              {term}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Left Category Menu */}
        <div className="w-64 shrink-0 hidden lg:block">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 bg-slate-50 border-b border-slate-200">
              <h2 className="font-semibold text-slate-900">Categories</h2>
            </div>
            <ul className="py-2">
              {CATEGORIES.map((cat, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 group transition-colors">
                    <cat.icon className="w-4 h-4 mr-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span className="flex-1">{cat.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Promo Banner Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-slate-900 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group min-h-[400px]">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
                <Award className="w-3.5 h-3.5 mr-1.5" />
                Park Certified Excellence
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Next-Generation <br/>Imaging Systems
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Direct sourcing from top-tier manufacturers. CE and FDA certified diagnostic equipment ready for global export.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-blue-900/20">
                  Source Now
                </button>
                <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-colors backdrop-blur-sm">
                  View Catalog
                </button>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-8 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-1.5 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer transition-colors"></div>
              <div className="w-2 h-1.5 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer transition-colors"></div>
              <div className="w-2 h-1.5 bg-white/30 rounded-full hover:bg-white/50 cursor-pointer transition-colors"></div>
            </div>

            {/* Carousel Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const UtilityStrip = () => (
  <section className="max-w-7xl mx-auto px-4 mb-12">
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-2 flex flex-wrap lg:flex-nowrap gap-2">
      <a href="#" className="flex-1 flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors group">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
          <Upload className="w-6 h-6 text-blue-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Upload RFQ</h3>
          <p className="text-xs text-slate-500 mt-0.5">Get customized medical quotes</p>
        </div>
      </a>
      <div className="w-px bg-slate-100 hidden lg:block my-2"></div>
      <a href="#" className="flex-1 flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors group">
        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors">
          <ShieldCheck className="w-6 h-6 text-teal-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Verified Manufacturers</h3>
          <p className="text-xs text-slate-500 mt-0.5">Park-certified direct suppliers</p>
        </div>
      </a>
      <div className="w-px bg-slate-100 hidden lg:block my-2"></div>
      <a href="#" className="flex-1 flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors group">
        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mr-4 group-hover:bg-amber-100 transition-colors">
          <FileText className="w-6 h-6 text-amber-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Tax Exemption</h3>
          <p className="text-xs text-slate-500 mt-0.5">Explore cross-border benefits</p>
        </div>
      </a>
      <div className="w-px bg-slate-100 hidden lg:block my-2"></div>
      <a href="#" className="flex-1 flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors group">
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mr-4 group-hover:bg-indigo-100 transition-colors">
          <TrendingUp className="w-6 h-6 text-indigo-700" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Tender Updates</h3>
          <p className="text-xs text-slate-500 mt-0.5">Latest Central Asia opportunities</p>
        </div>
      </a>
    </div>
  </section>
);

const ProductDiscovery = ({ onProductClick }: { onProductClick?: () => void }) => (
  <section className="max-w-7xl mx-auto px-4 mb-16">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Discover Medical Products</h2>
        <p className="text-slate-500 mt-1">Direct from certified industrial park manufacturers</p>
      </div>
      <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800 flex items-center">
        View all products <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {PRODUCTS.map((product, idx) => (
        <div key={idx} onClick={onProductClick} className="cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
          <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 flex gap-1">
              {product.certs.map(cert => (
                <span key={cert} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-700 rounded shadow-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-semibold text-slate-900 leading-tight mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
              {product.name}
            </h3>
            <div className="mt-auto">
              <p className="text-xs text-slate-500 flex items-center mb-1">
                <Building2 className="w-3 h-3 mr-1" /> {product.supplier}
              </p>
              <p className="text-xs text-slate-500 flex items-center mb-4">
                <Globe className="w-3 h-3 mr-1" /> Export: {product.region}
              </p>
              <button className="w-full py-2.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-blue-200 transition-colors flex items-center justify-center">
                Add to RFQ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FeaturedServices = () => (
  <section className="max-w-7xl mx-auto px-4 mb-16">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Cross-Border Services</h2>
        <p className="text-slate-500 mt-1">Comprehensive support for international medical procurement</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service, idx) => (
        <a key={idx} href="#" className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all group flex flex-col">
          <div className="h-40 overflow-hidden relative bg-slate-100">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-80"></div>
            <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-700 shadow-sm">
              <service.icon className="w-5 h-5" />
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

const TradeSupport = () => (
  <section className="max-w-7xl mx-auto px-4 mb-16">
    <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-1/3 p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Trade & Fulfillment Support</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            End-to-end support for medical procurement, payment, delivery, and after-sales execution.
          </p>
          <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center">
            Learn more <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
      <div className="lg:w-2/3 bg-slate-800 p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700/50 border border-slate-600/50 p-6 rounded-2xl">
          <ShieldCheck className="w-8 h-8 text-teal-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Payment Security</h3>
          <p className="text-slate-400 text-sm">Escrow services and secure milestone payments for large medical equipment orders.</p>
        </div>
        <div className="bg-slate-700/50 border border-slate-600/50 p-6 rounded-2xl">
          <Truck className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Shipping & Customs</h3>
          <p className="text-slate-400 text-sm">Specialized cold-chain logistics and streamlined customs clearance for medical goods.</p>
        </div>
        <div className="bg-slate-700/50 border border-slate-600/50 p-6 rounded-2xl">
          <FileText className="w-8 h-8 text-amber-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Tax Exemption Program</h3>
          <p className="text-slate-400 text-sm">Guidance on utilizing cross-border tax exemptions for Central Asia and Europe.</p>
        </div>
        <div className="bg-slate-700/50 border border-slate-600/50 p-6 rounded-2xl">
          <Settings className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Installation & After-sales</h3>
          <p className="text-slate-400 text-sm">Guaranteed local installation, training, and maintenance support networks.</p>
        </div>
      </div>
    </div>
  </section>
);

const VerifiedSuppliers = ({ onCompanyClick }: { onCompanyClick?: () => void }) => (
  <section className="max-w-7xl mx-auto px-4 mb-16">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Park-Certified Manufacturers</h2>
        <p className="text-slate-500 mt-1">Vetted suppliers with proven international track records</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SUPPLIERS.map((supplier, idx) => (
        <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col cursor-pointer" onClick={onCompanyClick}>
          {/* Large Image Header */}
          <div className="h-36 sm:h-40 relative overflow-hidden bg-slate-100">
            <img 
              src={supplier.image} 
              alt={supplier.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-90"></div>
            
            {/* Verified Badge */}
            <div className="absolute top-3 right-3">
              <div className="flex items-center bg-amber-400 text-amber-950 px-2.5 py-1 rounded-md text-[10px] font-bold shadow-sm uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified
              </div>
            </div>

            {/* Supplier Name & Specialty overlaid on image */}
            <div className="absolute bottom-4 left-5 right-5">
              <h3 className="font-bold text-white text-lg leading-tight drop-shadow-md mb-0.5">{supplier.name}</h3>
              <p className="text-blue-200 text-xs font-medium drop-shadow-sm flex items-center">
                <Award className="w-3 h-3 mr-1 opacity-80" /> {supplier.specialty}
              </p>
            </div>
          </div>
          
          {/* Content Body */}
          <div className="p-5 flex flex-col flex-1">
            <div className="space-y-3 text-xs text-slate-600 mb-6 flex-1">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-slate-400">Certifications</span>
                <span className="font-medium text-slate-900">{supplier.certs}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-slate-400">Main Markets</span>
                <span className="font-medium text-slate-900">{supplier.markets}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Response Rate</span>
                <span className="font-medium text-emerald-600">{supplier.response}</span>
              </div>
            </div>
            
            <button className="w-full py-2.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white font-medium rounded-xl text-sm transition-colors flex items-center justify-center group/btn">
              View Profile <ArrowRight className="w-4 h-4 ml-1.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const MarketAndInsights = () => (
  <section className="max-w-7xl mx-auto px-4 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Central Asia Market */}
    <div className="lg:col-span-2">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Central Asia Market Access</h2>
          <p className="text-slate-500 mt-1">Strategic intelligence and local support</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COUNTRIES.map((country, idx) => (
          <a key={idx} href="#" className="bg-slate-50 border border-slate-200 p-5 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-slate-400 group-hover:text-blue-500" />
                {country.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{country.desc}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
          </a>
        ))}
      </div>
    </div>

    {/* Insights */}
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Market Insights</h2>
          <p className="text-slate-500 mt-1">Powered by AI Search</p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {INSIGHTS.map((insight, idx) => (
          <a key={idx} href="#" className="block p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                {insight.type}
              </span>
              <span className="text-xs text-slate-400">{insight.date}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-900 leading-snug hover:text-blue-700 transition-colors">
              {insight.title}
            </h3>
          </a>
        ))}
        <a href="#" className="block p-4 text-center text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors bg-slate-50 border-t border-slate-200">
          View all insights
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      <div className="col-span-2 lg:col-span-2 pr-8">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">MedSource</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
          The premium B2B medical sourcing marketplace connecting international buyers with certified manufacturers from the medical industrial park.
        </p>
        <div className="flex space-x-4">
          {/* Social placeholders */}
          <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"></div>
          <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"></div>
          <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors"></div>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-4">About Us</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">About MedSource</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Industrial Park</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Buyer Help</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">How to Source</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Trade Assurance</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Submit RFQ</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Suppliers</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Join as Manufacturer</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Park Certification</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Supplier Portal</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Policies & Rules</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
      <p>&copy; 2026 MedSource Industrial Park. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'rfq' | 'company' | 'ai-search' | 'business' | 'ai-marketing' | 'ai-knowledge' | 'product-management' | 'crm' | 'ai-manager' | 'ai-recruitment' | 'admin-dashboard' | 'admin-orders' | 'admin-matchmaking' | 'admin-disputes' | 'admin-vendors' | 'admin-products' | 'business-customization'>('home');

  React.useEffect(() => {
    const handleNavigate = (e: any) => {
      if (e.detail) {
        setCurrentView(e.detail);
      }
    };
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  if (currentView === 'admin-dashboard') {
    return <AdminDashboard onHomeClick={() => setCurrentView('home')} onOrdersClick={() => setCurrentView('admin-orders')} onMatchmakingClick={() => setCurrentView('admin-matchmaking')} onDisputesClick={() => setCurrentView('admin-disputes')} onVendorsClick={() => setCurrentView('admin-vendors')} onProductsClick={() => setCurrentView('admin-products')} />;
  }

  if (currentView === 'admin-orders') {
    return <AdminOrderManagement onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('admin-dashboard')} onMatchmakingClick={() => setCurrentView('admin-matchmaking')} onDisputesClick={() => setCurrentView('admin-disputes')} onVendorsClick={() => setCurrentView('admin-vendors')} onProductsClick={() => setCurrentView('admin-products')} />;
  }

  if (currentView === 'admin-matchmaking') {
    return <AdminMatchmaking onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('admin-dashboard')} onOrdersClick={() => setCurrentView('admin-orders')} onDisputesClick={() => setCurrentView('admin-disputes')} onVendorsClick={() => setCurrentView('admin-vendors')} onProductsClick={() => setCurrentView('admin-products')} />;
  }

  if (currentView === 'admin-disputes') {
    return <AdminDisputes onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('admin-dashboard')} onOrdersClick={() => setCurrentView('admin-orders')} onMatchmakingClick={() => setCurrentView('admin-matchmaking')} onVendorsClick={() => setCurrentView('admin-vendors')} onProductsClick={() => setCurrentView('admin-products')} />;
  }

  if (currentView === 'admin-vendors') {
    return <AdminVendors onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('admin-dashboard')} onOrdersClick={() => setCurrentView('admin-orders')} onMatchmakingClick={() => setCurrentView('admin-matchmaking')} onDisputesClick={() => setCurrentView('admin-disputes')} onProductsClick={() => setCurrentView('admin-products')} />;
  }

  if (currentView === 'admin-products') {
    return <AdminProductManagement onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('admin-dashboard')} onOrdersClick={() => setCurrentView('admin-orders')} onMatchmakingClick={() => setCurrentView('admin-matchmaking')} onDisputesClick={() => setCurrentView('admin-disputes')} onVendorsClick={() => setCurrentView('admin-vendors')} />;
  }

  if (currentView === 'business') {
    return <BusinessDashboard onHomeClick={() => setCurrentView('home')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'ai-marketing') {
    return <AiMarketingCenter onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'ai-knowledge') {
    return <AiKnowledgeBase onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'product-management') {
    return <ProductManagement onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'crm') {
    return <CrmPage onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'ai-manager') {
    return <AiManagerBot onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'ai-recruitment') {
    return <AiRecruitmentCenter onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onBusinessCustomizationClick={() => setCurrentView('business-customization')} />;
  }

  if (currentView === 'business-customization') {
    return <BusinessCustomization onHomeClick={() => setCurrentView('home')} onDashboardClick={() => setCurrentView('business')} onAiMarketingClick={() => setCurrentView('ai-marketing')} onAiKnowledgeClick={() => setCurrentView('ai-knowledge')} onProductManagementClick={() => setCurrentView('product-management')} onCrmClick={() => setCurrentView('crm')} onAiManagerClick={() => setCurrentView('ai-manager')} onAiRecruitmentClick={() => setCurrentView('ai-recruitment')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <TopHeader 
        onHomeClick={() => setCurrentView('home')} 
        onRfqClick={() => setCurrentView('rfq')} 
        onBusinessClick={() => setCurrentView('business')}
      />
      <main>
        {currentView === 'home' && (
          <>
            <GlobalSearchSection onAiSearchClick={() => setCurrentView('ai-search')} />
            <HeroSection />
            <UtilityStrip />
            <ProductDiscovery onProductClick={() => setCurrentView('product')} />
            <FeaturedServices />
            <TradeSupport />
            <VerifiedSuppliers onCompanyClick={() => setCurrentView('company')} />
            <MarketAndInsights />
          </>
        )}
        {currentView === 'product' && (
          <ProductPage onHomeClick={() => setCurrentView('home')} />
        )}
        {currentView === 'rfq' && (
          <RfqBasketPage onHomeClick={() => setCurrentView('home')} />
        )}
        {currentView === 'company' && (
          <CompanyProfilePage 
            onHomeClick={() => setCurrentView('home')} 
            onProductClick={() => setCurrentView('product')}
            onRfqClick={() => setCurrentView('rfq')}
          />
        )}
        {currentView === 'ai-search' && (
          <AiSearchPage 
            onHomeClick={() => setCurrentView('home')}
            onRfqClick={() => setCurrentView('rfq')}
            onCompanyClick={() => setCurrentView('company')}
          />
        )}
      </main>
      <Footer />
      <FloatingChatWidget currentView={currentView} />
    </div>
  );
}
