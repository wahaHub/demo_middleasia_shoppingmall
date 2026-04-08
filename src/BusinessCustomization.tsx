import React from 'react';
import {
  LayoutDashboard, TrendingUp, ShoppingCart,
  Settings, Box, FileText, Globe, Shield, CreditCard,
  Bot, Bell, Search, HelpCircle, User, Package,
  Truck, HeadphonesIcon, FileQuestion,
  Activity, ChevronRight, ArrowRight,
  FileBarChart, Briefcase, Building2, Users,
  MapPin, Calendar, Phone, Star, CheckCircle,
  Handshake, Award, Target, Plane
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BusinessCustomizationProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
}

// Unsplash placeholder images - high quality, commercially usable
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=700&fit=crop&q=80',
  cityscape: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=500&fit=crop&q=80',
  meeting: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop&q=80',
  handshake: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop&q=80',
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&q=80',
  conference: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&q=80',
  expo: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop&q=80',
  officeTeam: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
  boardroom: 'https://images.unsplash.com/photo-143154001586-65f5643bc8e1?w=800&h=500&fit=crop&q=80',
  translator: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop&q=80',
  architecture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80',
  businessDistrict: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&q=80',
  roundtable: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80',
  planeDeparture: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&h=500&fit=crop&q=80',
  carService: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afe?w=800&h=500&fit=crop&q=80',
  medicalDevice: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop&q=80',
  scenicCity: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&h=600&fit=crop&q=80',
  govBuilding: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&h=500&fit=crop&q=80',
};

const RESOURCE_CARDS = [
  { title: '本地经销商与渠道伙伴', desc: '精准对接中亚各国医疗器械经销商、代理商和渠道资源，帮助您快速建立本地分销网络。', icon: Handshake, image: IMAGES.handshake },
  { title: '医疗机构与潜在采购方', desc: '安排医院、诊所、公立卫生系统的采购负责人会面，推动从考察到订单的转化。', icon: Building2, image: IMAGES.hospital },
  { title: '商会 / 行业协会', desc: '链接目标国家医疗器械行业协会、中国商会和跨境贸易组织，获取行业一手信息。', icon: Award, image: IMAGES.roundtable },
  { title: '园区 / 产业资源', desc: '对接当地医疗产业园区、自贸区、特殊经济区，获取政策支持与入驻机会。', icon: Target, image: IMAGES.architecture },
  { title: '展会 / 商务活动', desc: '专业策划中亚地区医疗展会参展、商务论坛出席和行业交流活动行程。', icon: Calendar, image: IMAGES.expo },
  { title: '本地服务伙伴', desc: '法务、税务、物流、翻译等一站式本地化服务伙伴网络，为您的商务落地保驾护航。', icon: Users, image: IMAGES.officeTeam },
];

const SCENARIO_CARDS = [
  { title: '医疗器械出海前的本地市场考察', desc: '深入了解目标市场准入、竞品格局、渠道结构和价格体系，为出海决策提供一手市场信息。', image: IMAGES.medicalDevice, tag: '市场考察' },
  { title: '经销商渠道开发之旅', desc: '高密度会见本地经销商和渠道伙伴，快速建立合作关系，签署代理或分销意向。', image: IMAGES.meeting, tag: '渠道开发' },
  { title: '医院与诊所访问行程', desc: '安排终端用户拜访，展示产品、了解需求、收集反馈，推动采购决策。', image: IMAGES.hospital, tag: '终端拜访' },
  { title: '政商资源对接行程', desc: '拜访政府采购部门、商会组织和行业监管机构，打通政策通道和项目资源。', image: IMAGES.govBuilding, tag: '政商对接' },
  { title: '展会期间高密度商务安排', desc: '围绕中亚医疗展会，定制展前、展中、展后的完整商务日程和客户接待方案。', image: IMAGES.conference, tag: '展会商务' },
  { title: '项目机会深度拜访', desc: '针对具体政府采购项目或医院设备更新需求，安排深度拜访与方案对接。', image: IMAGES.boardroom, tag: '项目落地' },
];

const SERVICE_ITEMS = [
  { title: '定制考察路线设计', desc: '根据您的行业、产品和目标市场，规划最高效的商务考察路线和节点安排。', icon: MapPin },
  { title: '本地商务接待与翻译陪同', desc: '专业俄语 / 当地语商务翻译全程陪同，确保沟通准确、会谈高效。', icon: Users },
  { title: '商业会谈安排', desc: '从议程设计到场地安排，帮您把每一次商务会面都做到专业、有成果。', icon: Briefcase },
  { title: '商会 / 行业组织对接', desc: '利用平台本地资源网络，帮您链接核心行业组织和关键人物。', icon: Award },
  { title: '医院 / 渠道 / 项目方约访', desc: '提前沟通需求、匹配资源、确认意向，确保拜访质量和效率。', icon: Phone },
  { title: '本地市场信息 Briefing', desc: '出发前获取目标市场最新行业数据、政策动态和竞争情报。', icon: FileText },
  { title: '会后纪要与资源跟进', desc: '每次会面后输出详细纪要，协助后续合作推进和资源对接。', icon: CheckCircle },
];

const DIFF_POINTS = [
  { title: '不是简单的接送机和酒店预订', desc: '我们的服务起点是您的商业目标，不是出行需求。行程设计围绕谁值得见、什么机会值得追。' },
  { title: '不是泛泛的旅游式商务陪同', desc: '每一个行程节点都经过行业研究和资源匹配，确保您见到的人和机会与您的业务高度相关。' },
  { title: '围绕"拿机会、谈合作、见关键人、落地业务"设计', desc: '我们理解医疗器械出海的业务逻辑，从渠道结构到准入路径，帮您抓住真正有价值的商业机会。' },
  { title: '有本地资源、行业理解和会后跟进能力', desc: '不止于安排行程——我们有本地团队持续跟进会后事项，推动合作从意向到落地。' },
];

const PROCESS_STEPS = [
  { step: '01', title: '提交目标与需求', desc: '告知目标市场、产品类型、希望对接的资源类型和行程时间。' },
  { step: '02', title: '平台评估行业与国家机会', desc: '结合实时市场数据和本地资源网络，评估最佳对接方向和路线。' },
  { step: '03', title: '定制商务路线与对接名单', desc: '输出完整的行程方案、拜访名单、会谈议程和后勤安排。' },
  { step: '04', title: '执行本地行程与商务接待', desc: '专业团队全程执行，翻译陪同、商务接待、灵活调度。' },
  { step: '05', title: '输出会后跟进与合作推进建议', desc: '会后纪要、资源清单、合作推进建议，持续跟进到结果。' },
];

export default function BusinessCustomization({ onHomeClick, onDashboardClick, onAiMarketingClick, onAiKnowledgeClick, onProductManagementClick, onCrmClick, onAiManagerClick, onAiRecruitmentClick }: BusinessCustomizationProps) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4 lg:px-6 shadow-sm">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
              MedSource
            </span>
          </div>
          <div className="hidden md:flex items-center px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200">
            <BuildingIcon className="w-4 h-4 text-slate-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">MedTech Precision Instruments</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="hidden lg:flex items-center relative max-w-md w-full mr-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="搜索订单、RFQ、商品或客户..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-sm transition-all outline-none"
            />
          </div>
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm cursor-pointer shadow-sm border-2 border-white ring-2 ring-slate-100">
            MT
          </div>
        </div>
      </header>

      {/* LEFT SIDEBAR */}
      <aside className="fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-slate-200 overflow-y-auto z-40 custom-scrollbar">
        <div className="p-4 space-y-6">
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">总览</p>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard />} label="工作台" onClick={onDashboardClick} />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">经营增长</p>
            <div className="space-y-1">
              <SidebarItem icon={<SparklesIcon />} label="AI营销中心" badge="新" onClick={onAiMarketingClick} />
              <SidebarItem icon={<TrendingUp />} label="营销活动" />
              <SidebarItem icon={<User />} label="客户 / 线索 / RFQ" />
              <SidebarItem icon={<HeadphonesIcon />} label="客服管理" />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">商品与内容</p>
            <div className="space-y-1">
              <SidebarItem icon={<Box />} label="商品管理" onClick={onProductManagementClick} />
              <SidebarItem icon={<Package />} label="服务管理" />
              <SidebarItem icon={<FileQuestion />} label="AI 客服" onClick={onAiKnowledgeClick} />
              <SidebarItem icon={<FileText />} label="店铺 / 品牌资料" />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">交易与履约</p>
            <div className="space-y-1">
              <SidebarItem icon={<ShoppingCart />} label="订单管理" onClick={onCrmClick} />
              <SidebarItem icon={<Truck />} label="物流管理" />
              <SidebarItem icon={<Shield />} label="售后管理" />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">财务与运营</p>
            <div className="space-y-1">
              <SidebarItem icon={<FileBarChart />} label="财务数据" />
              <SidebarItem icon={<CreditCard />} label="结算提现" />
              <SidebarItem icon={<LayersIcon />} label="库存与供货" />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">跨境支持</p>
            <div className="space-y-1">
              <SidebarItem icon={<Globe />} label="跨境法规" />
              <SidebarItem icon={<MapIcon />} label="市场与渠道" />
              <SidebarItem icon={<FileCheckIcon />} label="税务 / 合规支持" />
              <SidebarItem icon={<Plane />} label="商务定制" active />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">智能助手</p>
            <div className="space-y-1">
              <SidebarItem icon={<Bot />} label="AI管理机器人" onClick={onAiManagerClick} />
              <SidebarItem icon={<User />} label="AI招人中心" onClick={onAiRecruitmentClick} />
              <SidebarItem icon={<Search />} label="AI搜索 / 市场情报" />
            </div>
          </div>
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">设置</p>
            <div className="space-y-1">
              <SidebarItem icon={<Settings />} label="店铺设置" />
              <SidebarItem icon={<UsersIcon />} label="账号权限" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT - Full width landing page (no right sidebar) */}
      <main className="flex-1 ml-64 mt-16 overflow-y-auto custom-scrollbar bg-[#0c1425]">

        {/* ============================================ */}
        {/* SECTION 1: HERO */}
        {/* ============================================ */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1425]/95 via-[#0c1425]/75 to-[#0c1425]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1425] via-transparent to-transparent opacity-80" />
          </div>
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-12 lg:px-20 max-w-5xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2.5 animate-pulse" />
              <span className="text-amber-300 text-sm font-medium tracking-wide">MedSource 高端出海服务</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 tracking-tight">
              中亚商务定制服务
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              不仅帮您出海，更帮您进入当地商业机会网络。
            </p>
            <p className="text-sm text-slate-400 mb-10 max-w-xl leading-relaxed">
              为中国医疗器械企业提供从市场考察、渠道开发、医院拜访到政商资源对接的全链路商务定制服务，让每一次出差都更有结果。
            </p>
            <div className="flex items-center space-x-4 mb-12">
              <button className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center text-sm tracking-wide">
                <Phone className="w-4 h-4 mr-2.5" /> 预约商务咨询
              </button>
              <button className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center text-sm tracking-wide">
                查看定制方案 <ArrowRight className="w-4 h-4 ml-2.5" />
              </button>
            </div>
            {/* Value Tags */}
            <div className="flex items-center space-x-6">
              {[
                { icon: Globe, text: '本地商业资源连接' },
                { icon: MapPin, text: '商务定制行程' },
                { icon: Star, text: '高端接待与会后跟进' },
              ].map((tag) => (
                <div key={tag.text} className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <tag.icon className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-slate-300 font-medium">{tag.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: WHAT WE CAN CONNECT */}
        {/* ============================================ */}
        <section className="bg-[#0f1a2e] py-24 px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Resource Connection</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">我们能帮您对接什么</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">深度链接中亚六国商业资源，从渠道到政商，从医院到行业组织</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCE_CARDS.map((card) => (
                <div key={card.title} className="group rounded-2xl overflow-hidden bg-[#162037] border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
                  <div className="h-48 overflow-hidden relative">
                    <img src={card.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162037] to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: TYPICAL SCENARIOS */}
        {/* ============================================ */}
        <section className="relative py-24 px-12 lg:px-20">
          <div className="absolute inset-0">
            <img src={IMAGES.scenicCity} alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1425] via-[#0c1425]/95 to-[#0c1425]" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Business Scenarios</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">典型商务场景</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">针对不同出海阶段和商务目标，我们提供高度定制的行程方案</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCENARIO_CARDS.map((card) => (
                <div key={card.title} className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer">
                  <img src={card.image} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-amber-500/90 text-white rounded-full">{card.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">{card.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: SERVICE CONTENT */}
        {/* ============================================ */}
        <section className="bg-[#0f1a2e] py-24 px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">服务内容</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">从出发前的信息准备到回国后的持续跟进，全链路商务支持</p>
            </div>
            {/* Two-column image + list layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: stacked images */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 relative">
                  <img src={IMAGES.boardroom} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-white font-semibold text-lg">专业商务会谈安排</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <img src={IMAGES.translator} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white font-medium text-sm">翻译陪同</span>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <img src={IMAGES.carService} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white font-medium text-sm">商务接待</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: service list */}
              <div className="space-y-4">
                {SERVICE_ITEMS.map((item, i) => (
                  <div key={item.title} className="flex items-start space-x-4 p-4 rounded-xl bg-[#162037] border border-slate-700/40 hover:border-amber-500/20 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: WHY THIS IS DIFFERENT */}
        {/* ============================================ */}
        <section className="py-24 px-12 lg:px-20 bg-[#0c1425]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Why Different</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">为什么这不是普通出差服务</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">我们做的不是旅行安排，而是商业机会的精准对接</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIFF_POINTS.map((point, i) => (
                <div key={point.title} className="relative rounded-2xl p-8 bg-gradient-to-br from-[#162037] to-[#1a2744] border border-slate-700/40 hover:border-amber-500/20 transition-all group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-sm">0{i + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{point.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pl-13">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: SERVICE PROCESS */}
        {/* ============================================ */}
        <section className="bg-[#0f1a2e] py-24 px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">服务流程</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">从需求提交到成果落地，五步完成您的中亚商务之旅</p>
            </div>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.step} className="relative text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-5 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all relative z-10 backdrop-blur-sm">
                      <span className="text-amber-400 font-bold text-lg">{step.step}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="hidden lg:flex absolute top-7 -right-3 z-20">
                        <ChevronRight className="w-5 h-5 text-amber-500/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 7: CTA */}
        {/* ============================================ */}
        <section className="relative py-28 px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={IMAGES.planeDeparture} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1425]/95 via-[#0c1425]/85 to-[#0c1425]/70" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8 backdrop-blur-sm">
              <Plane className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-300 text-sm font-medium">开始您的中亚商务之旅</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              准备去中亚找机会？<br />
              <span className="text-amber-400">让每一次出差都更有结果。</span>
            </h2>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              无论您是首次考察中亚市场，还是已有合作伙伴需要深度拜访，我们都能为您定制最高效的商务行程。
            </p>
            <div className="flex items-center justify-center space-x-4 flex-wrap gap-y-3">
              <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:shadow-xl hover:shadow-amber-500/30 flex items-center text-base tracking-wide">
                <Phone className="w-5 h-5 mr-2.5" /> 预约专属咨询
              </button>
              <button className="px-10 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center text-base tracking-wide">
                <FileText className="w-5 h-5 mr-2.5" /> 获取商务定制方案
              </button>
              <button className="px-10 py-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium rounded-xl border border-white/10 backdrop-blur-sm transition-all flex items-center text-base tracking-wide">
                <Briefcase className="w-5 h-5 mr-2.5" /> 提交出差需求
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#080e1c] py-10 px-12 lg:px-20 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">MedSource</span>
              <span className="text-slate-500 text-sm ml-3">中亚商务定制服务</span>
            </div>
            <p className="text-slate-500 text-sm">MedSource Global Business Services. 专注医疗器械中亚出海。</p>
          </div>
        </footer>

      </main>
    </div>
  );
}

// --- Sidebar Helper Components (same as other supplier pages) ---

function SidebarItem({ icon, label, active, badge, onClick }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={cn(
      "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors group",
      active ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    )}>
      <div className="flex items-center">
        <span className={cn("w-5 h-5 mr-3 flex items-center justify-center", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-[18px] h-[18px]" })}
        </span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">{badge}</span>
      )}
    </div>
  );
}

function BuildingIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> }
function SparklesIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> }
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
