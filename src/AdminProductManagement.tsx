import React, { useState } from 'react';
import {
  LayoutDashboard, Users, Store, Box, ShoppingCart,
  Handshake, Truck, ShieldAlert, AlertOctagon,
  Megaphone, FileText, CreditCard, BarChart2,
  Search, Bell, Shield, Filter, Download,
  AlertTriangle, CheckCircle, Clock, Zap,
  ChevronRight, ArrowRight, Activity, Target,
  BriefcaseMedical, Globe, Sparkles, Star,
  TrendingUp, Award, FileWarning, History,
  Eye, BookOpen, MessageSquare, Pause, Send,
  FileCheck, Languages, Image, Database, ExternalLink,
  RefreshCw, ChevronDown, X, Info, BarChart3
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminProductManagementProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onOrdersClick: () => void;
  onMatchmakingClick: () => void;
  onDisputesClick: () => void;
  onVendorsClick: () => void;
}

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Advanced 4D Color Doppler Ultrasound System',
    vendor: 'MedTech Precision Instruments',
    category: '影像与诊断',
    status: '已上架',
    riskLevel: '低',
    tags: ['重点推荐', '医院采购', '中亚适配'],
    completeness: 92,
    multiLang: '完整',
    rfq: '支持',
    model: 'MT-Ultra4D-X9',
    overseasSync: true,
    aiKnowledge: true,
    platformTag: '重点推荐商品',
    scores: {
      basic: 95,
      multiLang: 91,
      params: 93,
      images: 90,
      overseas: 94,
      knowledge: 89,
    },
    compliance: {
      passed: ['CE / ISO 13485 展示完整', '产品用途描述较规范', '未发现明显绝对化宣传语'],
      warnings: ['若用于某些国家政府项目，建议补充更正式的招投标资料说明', '医院采购版页面可增加安装培训边界说明'],
    },
    metrics: {
      views: 8420,
      rfqLeads: 14,
      conversionRate: 18.6,
      markets: ['乌兹别克斯坦', '哈萨克斯坦', '吉尔吉斯斯坦'],
      targetGroups: ['医院采购', '私立诊所', '项目型采购'],
    },
    pendingItems: ['补充俄语版安装培训说明', '增加项目型采购资料摘要', '增加1张医院采购场景图'],
    governanceSuggestions: ['推送商家补资料', '同步到 AI 知识库生成 3 条 FAQ', '推送到 AI 营销中心生成俄语版推广图'],
    platformSuggestions: ['将该商品加入中亚影像设备专题', '在高价值医院项目 RFQ 中优先推荐', '推动商家补充俄语版安装培训资料', '生成医院采购版产品页文案'],
    riskReminders: ['当前整体风险低', '若进入政府 / 公共卫生项目场景，建议补充更正式资料', '若用于哈萨克斯坦项目推广，建议补充俄语文件说明'],
    recentActivity: [
      { date: '4月8日', action: '加入重点推荐商品池' },
      { date: '4月7日', action: '推送至乌兹别克斯坦专题' },
      { date: '4月6日', action: '提醒补充俄语资料' },
      { date: '4月4日', action: '通过年度内容审核' },
    ],
  },
  {
    id: 2,
    name: 'Portable Diagnostic Ultrasound Unit',
    vendor: 'SonoVista Medical Systems',
    category: '便携诊断设备',
    status: '待补资料',
    riskLevel: '中',
    tags: ['经销商适配', '俄语资料缺失'],
    completeness: 74,
    multiLang: '部分缺失',
    rfq: '支持',
    model: 'SV-PU200',
    overseasSync: false,
    aiKnowledge: false,
    platformTag: '',
    scores: { basic: 82, multiLang: 64, params: 78, images: 72, overseas: 68, knowledge: 55 },
    compliance: {
      passed: ['基础认证信息已上传'],
      warnings: ['俄语版产品页面缺失', '部分参数信息不完整', '缺少海外端展示配置'],
    },
    metrics: { views: 3210, rfqLeads: 6, conversionRate: 12.1, markets: ['哈萨克斯坦'], targetGroups: ['经销商', '私立诊所'] },
    pendingItems: ['补充俄语版产品页', '完善技术参数表', '配置海外端展示'],
    governanceSuggestions: ['推送商家补充俄语资料', '协助完善参数信息'],
    platformSuggestions: ['待资料补全后可加入便携设备专题', '适合经销商渠道推广'],
    riskReminders: ['俄语资料缺失影响中亚市场展示', '建议尽快补充完整资料'],
    recentActivity: [
      { date: '4月7日', action: '提醒商家补充资料' },
      { date: '4月3日', action: '初次上架审核通过' },
    ],
  },
  {
    id: 3,
    name: 'Smart Patient Monitor',
    vendor: 'Nova Imaging Solutions',
    category: '监护设备',
    status: '高风险待处理',
    riskLevel: '高',
    tags: ['宣传语风险', '认证展示不足'],
    completeness: 68,
    multiLang: '英文完整，俄语不足',
    rfq: '待配置',
    model: 'NV-SPM-300',
    overseasSync: false,
    aiKnowledge: false,
    platformTag: '',
    scores: { basic: 75, multiLang: 58, params: 70, images: 65, overseas: 60, knowledge: 42 },
    compliance: {
      passed: ['基础产品信息已填写'],
      warnings: ['宣传语出现 "guaranteed clinical performance"', '产品认证位置不明显', '俄语版页面缺失', '未明确项目型采购服务边界'],
    },
    metrics: { views: 1850, rfqLeads: 2, conversionRate: 8.3, markets: ['乌兹别克斯坦'], targetGroups: ['医院采购'] },
    pendingItems: ['修改违规宣传语', '调整认证展示位置', '补充俄语版页面', '明确采购服务边界'],
    governanceSuggestions: ['要求商家立即整改宣传语', '暂停海外端展示', '推送合规团队审查'],
    platformSuggestions: ['整改完成前暂停推荐', '完成整改后可加入监护设备专题'],
    riskReminders: ['存在绝对化宣传语风险，需立即整改', '认证信息展示不规范', '俄语版缺失影响中亚市场'],
    recentActivity: [
      { date: '4月8日', action: '标记为高风险商品' },
      { date: '4月7日', action: '发现宣传语违规' },
      { date: '4月5日', action: '初次上架' },
    ],
  },
  {
    id: 4,
    name: 'Hospital Sterilization Kit',
    vendor: 'Central Med Export Alliance',
    category: '医院耗材与配套',
    status: '待审核',
    riskLevel: '中',
    tags: ['认证文件待补', '海外页未开通'],
    completeness: 61,
    multiLang: '仅中文',
    rfq: '未配置',
    model: 'CM-HSK-100',
    overseasSync: false,
    aiKnowledge: false,
    platformTag: '',
    scores: { basic: 70, multiLang: 40, params: 65, images: 68, overseas: 45, knowledge: 30 },
    compliance: {
      passed: ['基础产品信息已提交'],
      warnings: ['认证文件尚未上传', '海外展示页未开通', '仅有中文内容，缺少多语言版本'],
    },
    metrics: { views: 420, rfqLeads: 0, conversionRate: 0, markets: [], targetGroups: ['医院采购'] },
    pendingItems: ['上传认证文件', '开通海外展示页', '补充英文/俄文产品信息', '配置 RFQ 支持'],
    governanceSuggestions: ['审核基础资料后通知商家补充认证', '指导商家开通海外页面'],
    platformSuggestions: ['资料齐全后可进入耗材专题', '建议对接翻译服务'],
    riskReminders: ['认证文件缺失，无法进行海外展示', '建议审核后尽快通知商家补全'],
    recentActivity: [
      { date: '4月8日', action: '提交审核申请' },
      { date: '4月7日', action: '商家创建商品' },
    ],
  },
];

const METRIC_CARDS = [
  { label: '平台商品总数', value: '4,962', icon: Box, color: 'text-slate-700', bg: 'bg-slate-50' },
  { label: '待审核商品', value: '32', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: '待补资料商品', value: '47', icon: FileWarning, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: '高风险商品', value: '11', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: '重点推荐商品', value: '27', icon: Star, color: 'text-teal-600', bg: 'bg-teal-50' },
  { label: '已接入知识库商品', value: '3,814', icon: Database, color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

export default function AdminProductManagement({ onHomeClick, onDashboardClick, onOrdersClick, onMatchmakingClick, onDisputesClick, onVendorsClick }: AdminProductManagementProps) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('全部');
  const [riskFilter, setRiskFilter] = useState('全部');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === '全部' || p.status === statusFilter;
    const matchesRisk = riskFilter === '全部' || p.riskLevel === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">

      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900 border-b border-slate-800 z-50 flex items-center justify-between px-4 lg:px-6 shadow-sm text-white">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              MedSource <span className="text-teal-400 font-medium">Admin</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="hidden lg:flex items-center relative max-w-md w-full mr-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="全局搜索用户、商家、商品、订单、纠纷..."
              className="w-full pl-9 pr-4 py-2 bg-slate-800 border-transparent focus:bg-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg text-sm text-white placeholder-slate-400 transition-all outline-none"
            />
          </div>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
          </button>
          <div className="flex items-center space-x-2 pl-4 border-l border-slate-700 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm shadow-sm">
              AD
            </div>
            <div className="hidden md:block text-sm">
              <p className="font-medium leading-tight">Admin User</p>
              <p className="text-[10px] text-slate-400">超级管理员</p>
            </div>
          </div>
        </div>
      </header>

      {/* LEFT SIDEBAR */}
      <aside className="fixed top-16 left-0 bottom-0 w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto z-40 custom-scrollbar text-slate-300">
        <div className="p-4 space-y-6">
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">总览</p>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard />} label="平台工作台" onClick={onDashboardClick} />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">平台主体</p>
            <div className="space-y-1">
              <SidebarItem icon={<Users />} label="用户管理" />
              <SidebarItem icon={<Store />} label="商家管理" onClick={onVendorsClick} />
              <SidebarItem icon={<Box />} label="商品管理" active />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">交易与履约</p>
            <div className="space-y-1">
              <SidebarItem icon={<ShoppingCart />} label="订单管理" onClick={onOrdersClick} />
              <SidebarItem icon={<Handshake />} label="交易撮合" badge="18" onClick={onMatchmakingClick} />
              <SidebarItem icon={<Truck />} label="物流管理" />
              <SidebarItem icon={<AlertOctagon />} label="售后纠纷" />
              <SidebarItem icon={<ShieldAlert />} label="平台介入纠纷" badge="5" alert onClick={onDisputesClick} />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">运营与增长</p>
            <div className="space-y-1">
              <SidebarItem icon={<Megaphone />} label="营销活动" />
              <SidebarItem icon={<FileText />} label="内容公告" />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">财务与数据</p>
            <div className="space-y-1">
              <SidebarItem icon={<CreditCard />} label="支付财务" />
              <SidebarItem icon={<BarChart2 />} label="数据统计" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 mt-16 flex flex-col h-[calc(100vh-4rem)] bg-slate-50">

        {/* Page Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">商品管理</h1>
              </div>
              <p className="text-slate-500 text-sm">
                统一管理平台商品的审核状态、内容完整度、合规风险与推荐状态，保障海外展示与交易质量。
              </p>
            </div>
            <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-2">
              <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <CheckCircle className="w-4 h-4 mr-1.5" /> 批量审核商品
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Download className="w-4 h-4 mr-1.5" /> 导出商品报表
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <AlertTriangle className="w-4 h-4 mr-1.5 text-rose-500" /> 查看高风险商品
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Star className="w-4 h-4 mr-1.5 text-amber-500" /> 查看重点推荐商品
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {METRIC_CARDS.map((m) => (
              <div key={m.label} className={cn("rounded-xl border border-slate-100 px-4 py-3 flex items-center space-x-3", m.bg)}>
                <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center bg-white shadow-sm border border-slate-100")}>
                  <m.icon className={cn("w-4.5 h-4.5", m.color)} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 leading-tight">{m.label}</p>
                  <p className={cn("text-lg font-bold leading-tight mt-0.5", m.color)}>{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three-Column Layout */}
        <div className="flex-1 flex overflow-hidden">

          {/* LEFT: Product List */}
          <div className="w-80 xl:w-96 border-r border-slate-200 bg-white flex flex-col shrink-0">
            {/* Search & Filter */}
            <div className="p-3 border-b border-slate-100 space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="搜索商品名 / 型号..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg text-sm placeholder-slate-400 transition-all outline-none"
                />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn("px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center", showFilters ? "bg-teal-50 border-teal-200 text-teal-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50")}
                >
                  <Filter className="w-3.5 h-3.5 mr-1" /> 筛选
                </button>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg bg-white text-slate-600 outline-none focus:border-teal-500"
                >
                  <option>全部</option>
                  <option>已上架</option>
                  <option>待审核</option>
                  <option>待补资料</option>
                  <option>高风险待处理</option>
                </select>
                <select
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value)}
                  className="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg bg-white text-slate-600 outline-none focus:border-teal-500"
                >
                  <option>全部</option>
                  <option>低</option>
                  <option>中</option>
                  <option>高</option>
                </select>
              </div>
              {showFilters && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['重点推荐', '支持 RFQ', '已接入知识库'].map(tag => (
                    <button key={tag} className="px-2 py-1 text-[11px] bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 rounded-md transition-colors border border-transparent hover:border-teal-200">
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={cn(
                    "p-3.5 border-b border-slate-100 cursor-pointer transition-all",
                    selectedProduct.id === product.id
                      ? "bg-teal-50/70 border-l-2 border-l-teal-500"
                      : "hover:bg-slate-50 border-l-2 border-l-transparent"
                  )}
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className={cn("text-sm font-semibold leading-snug pr-2", selectedProduct.id === product.id ? "text-teal-800" : "text-slate-800")}>
                      {product.name}
                    </h3>
                    <RiskBadge level={product.riskLevel} />
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2">
                    {product.vendor} · {product.category}
                  </p>
                  <div className="flex items-center space-x-2 mb-2">
                    <StatusBadge status={product.status} />
                    {product.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-500 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">完整度</span>
                      <div className="flex items-center mt-0.5">
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden mr-1.5">
                          <div
                            className={cn("h-full rounded-full", product.completeness >= 90 ? "bg-teal-500" : product.completeness >= 70 ? "bg-amber-500" : "bg-rose-500")}
                            style={{ width: `${product.completeness}%` }}
                          />
                        </div>
                        <span className="font-semibold text-slate-700">{product.completeness}%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400">多语言</span>
                      <p className={cn("font-medium mt-0.5", product.multiLang === '完整' ? "text-teal-600" : "text-amber-600")}>{product.multiLang === '完整' ? '完整' : '缺失'}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">RFQ</span>
                      <p className={cn("font-medium mt-0.5", product.rfq === '支持' ? "text-teal-600" : "text-slate-500")}>{product.rfq}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Product Detail */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-6 space-y-5 max-w-4xl">

              {/* Section 1: Product Overview */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Box className="w-4 h-4 text-teal-600" />
                    </div>
                    <h2 className="text-base font-bold text-slate-900">商品概况</h2>
                  </div>
                  <RiskBadge level={selectedProduct.riskLevel} size="md" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{selectedProduct.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{selectedProduct.vendor}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <InfoItem label="类目" value={selectedProduct.category} />
                    <InfoItem label="状态">
                      <StatusBadge status={selectedProduct.status} />
                    </InfoItem>
                    <InfoItem label="型号" value={selectedProduct.model} />
                    <InfoItem label="风险等级">
                      <RiskBadge level={selectedProduct.riskLevel} />
                    </InfoItem>
                    <InfoItem label="海外展示" value={selectedProduct.overseasSync ? '已同步' : '未同步'} highlight={selectedProduct.overseasSync} />
                    <InfoItem label="RFQ 支持" value={selectedProduct.rfq === '支持' ? '已启用' : selectedProduct.rfq} highlight={selectedProduct.rfq === '支持'} />
                    <InfoItem label="AI 知识库" value={selectedProduct.aiKnowledge ? '已接入' : '未接入'} highlight={selectedProduct.aiKnowledge} />
                    <InfoItem label="平台标签" value={selectedProduct.platformTag || '无'} highlight={!!selectedProduct.platformTag} />
                  </div>
                </div>
              </div>

              {/* Section 2: Content Completeness */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">内容完整度与展示质量</h2>
                </div>
                <div className="p-5">
                  {/* Overall Score */}
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                        <circle
                          cx="40" cy="40" r="34" fill="none"
                          stroke={selectedProduct.completeness >= 90 ? '#14b8a6' : selectedProduct.completeness >= 70 ? '#f59e0b' : '#ef4444'}
                          strokeWidth="6" strokeLinecap="round"
                          strokeDasharray={`${selectedProduct.completeness * 2.136} 213.6`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-slate-900">{selectedProduct.completeness}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">内容完整度评分</p>
                      <p className="text-xs text-slate-500 mt-0.5">{selectedProduct.completeness} / 100</p>
                    </div>
                  </div>

                  {/* Score Breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                    <ScoreBar label="基础资料完整度" value={selectedProduct.scores.basic} />
                    <ScoreBar label="多语言内容完整度" value={selectedProduct.scores.multiLang} />
                    <ScoreBar label="参数信息完整度" value={selectedProduct.scores.params} />
                    <ScoreBar label="图片 / 素材质量" value={selectedProduct.scores.images} />
                    <ScoreBar label="海外端展示质量" value={selectedProduct.scores.overseas} />
                    <ScoreBar label="知识库联动度" value={selectedProduct.scores.knowledge} />
                  </div>

                  {/* Platform Judgement */}
                  {selectedProduct.completeness >= 85 && (
                    <div className="bg-teal-50 border border-teal-100 rounded-lg p-3.5">
                      <p className="text-xs font-semibold text-teal-800 mb-2 flex items-center">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> 平台判断
                      </p>
                      <ul className="space-y-1">
                        <li className="text-xs text-teal-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> 适合海外端重点展示</li>
                        <li className="text-xs text-teal-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> 适合进入中亚市场专题</li>
                        <li className="text-xs text-teal-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> 适合用于高价值 RFQ 推荐</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 3: Compliance & Risk */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                      <ShieldAlert className="w-4 h-4 text-rose-600" />
                    </div>
                    <h2 className="text-base font-bold text-slate-900">合规与宣传风险</h2>
                  </div>
                  <span className={cn(
                    "px-2.5 py-1 text-xs font-semibold rounded-full",
                    selectedProduct.riskLevel === '低' ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                    selectedProduct.riskLevel === '中' ? "bg-amber-50 text-amber-700 border border-amber-200" :
                    "bg-rose-50 text-rose-700 border border-rose-200"
                  )}>
                    当前风险等级：{selectedProduct.riskLevel}
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  {/* Passed */}
                  <div>
                    <p className="text-xs font-semibold text-emerald-700 mb-2 flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5" /> 已通过检查
                    </p>
                    <ul className="space-y-1.5">
                      {selectedProduct.compliance.passed.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start bg-emerald-50/50 rounded-md px-3 py-2 border border-emerald-100/60">
                          <CheckCircle className="w-3.5 h-3.5 mr-2 text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Warnings */}
                  <div>
                    <p className="text-xs font-semibold text-amber-700 mb-2 flex items-center">
                      <AlertTriangle className="w-3.5 h-3.5 mr-1.5" /> 需关注项
                    </p>
                    <ul className="space-y-1.5">
                      {selectedProduct.compliance.warnings.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start bg-amber-50/50 rounded-md px-3 py-2 border border-amber-100/60">
                          <AlertTriangle className="w-3.5 h-3.5 mr-2 text-amber-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High Risk Example (show for high risk products) */}
                  {selectedProduct.riskLevel === '高' && (
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-rose-800 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1.5" /> 高风险商品警告
                      </p>
                      <p className="text-xs text-rose-700 mb-2">该商品存在以下高风险项，需立即处理：</p>
                      <ul className="space-y-1">
                        {selectedProduct.compliance.warnings.map((item, i) => (
                          <li key={i} className="text-xs text-rose-700 flex items-start">
                            <X className="w-3.5 h-3.5 mr-1.5 text-rose-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <button className="px-3 py-1.5 text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors flex items-center">
                      <Send className="w-3.5 h-3.5 mr-1.5" /> 要求商家整改
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors flex items-center">
                      <FileText className="w-3.5 h-3.5 mr-1.5" /> 一键生成风险摘要
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors flex items-center">
                      <Pause className="w-3.5 h-3.5 mr-1.5" /> 暂停推荐
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5" /> 推送到营销中心改写
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 4: Platform Recommendation Value */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">平台推荐价值</h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                    <MetricItem label="最近30天浏览量" value={selectedProduct.metrics.views.toLocaleString()} icon={<Eye className="w-4 h-4" />} />
                    <MetricItem label="最近30天 RFQ 引导数" value={String(selectedProduct.metrics.rfqLeads)} icon={<Target className="w-4 h-4" />} />
                    <MetricItem label="最近30天询盘转化率" value={`${selectedProduct.metrics.conversionRate}%`} icon={<TrendingUp className="w-4 h-4" />} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100">
                      <p className="text-xs font-semibold text-slate-600 mb-2 flex items-center">
                        <Globe className="w-3.5 h-3.5 mr-1.5 text-teal-600" /> 适配市场
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.metrics.markets.length > 0 ? selectedProduct.metrics.markets.map(m => (
                          <span key={m} className="px-2 py-0.5 text-[11px] font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-md">{m}</span>
                        )) : (
                          <span className="text-xs text-slate-400">暂无数据</span>
                        )}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100">
                      <p className="text-xs font-semibold text-slate-600 mb-2 flex items-center">
                        <BriefcaseMedical className="w-3.5 h-3.5 mr-1.5 text-indigo-600" /> 推荐客群
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.metrics.targetGroups.map(g => (
                          <span key={g} className="px-2 py-0.5 text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md">{g}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Platform Suggestions */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3.5">
                    <p className="text-xs font-semibold text-blue-800 mb-2 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5" /> 平台建议
                    </p>
                    <ul className="space-y-1">
                      {selectedProduct.id === 1 ? (
                        <>
                          <li className="text-xs text-blue-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> 建议加入乌兹别克斯坦重点市场专题</li>
                          <li className="text-xs text-blue-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> 建议优先参与影像类高价值 RFQ 撮合</li>
                        </>
                      ) : (
                        selectedProduct.platformSuggestions.map((s, i) => (
                          <li key={i} className="text-xs text-blue-700 flex items-center"><ChevronRight className="w-3 h-3 mr-1 shrink-0" /> {s}</li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5: Pending Items & Governance */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    <FileWarning className="w-4 h-4 text-orange-600" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900">待补项与治理建议</h2>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-orange-700 mb-2 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5" /> 待补项
                    </p>
                    <ul className="space-y-1.5">
                      {selectedProduct.pendingItems.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start bg-orange-50/50 rounded-md px-3 py-2 border border-orange-100/60">
                          <Clock className="w-3.5 h-3.5 mr-2 text-orange-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal-700 mb-2 flex items-center">
                      <Zap className="w-3.5 h-3.5 mr-1.5" /> 治理建议
                    </p>
                    <ul className="space-y-1.5">
                      {selectedProduct.governanceSuggestions.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start bg-teal-50/50 rounded-md px-3 py-2 border border-teal-100/60">
                          <Zap className="w-3.5 h-3.5 mr-2 text-teal-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Platform Sidebar */}
          <div className="w-72 xl:w-80 border-l border-slate-200 bg-white overflow-y-auto custom-scrollbar shrink-0 hidden xl:block">
            <div className="p-4 space-y-5">

              {/* Platform Suggestions */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 p-4">
                <h3 className="text-sm font-bold text-teal-900 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5 text-teal-600" /> 平台建议
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.platformSuggestions.map((s, i) => (
                    <li key={i} className="text-xs text-teal-800 flex items-start bg-white/60 rounded-lg px-3 py-2 border border-teal-100/50">
                      <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-teal-500 mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Reminders */}
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1.5 text-amber-500" /> 风险提醒
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.riskReminders.map((r, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                      <Info className="w-3.5 h-3.5 mr-1.5 text-slate-400 mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform Actions */}
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-1.5 text-indigo-500" /> 平台可执行动作
                </h3>
                <div className="space-y-2">
                  <ActionButton icon={<Star className="w-3.5 h-3.5" />} label="加入重点推荐" color="teal" />
                  <ActionButton icon={<Send className="w-3.5 h-3.5" />} label="推送商家补资料" color="amber" />
                  <ActionButton icon={<Pause className="w-3.5 h-3.5" />} label="暂停推荐" color="rose" />
                  <ActionButton icon={<FileText className="w-3.5 h-3.5" />} label="生成风险摘要" color="slate" />
                  <ActionButton icon={<ExternalLink className="w-3.5 h-3.5" />} label="查看海外展示页" color="blue" />
                  <ActionButton icon={<Database className="w-3.5 h-3.5" />} label="查看关联知识库" color="indigo" />
                  <ActionButton icon={<Target className="w-3.5 h-3.5" />} label="查看相关 RFQ" color="purple" />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <History className="w-4 h-4 mr-1.5 text-slate-500" /> 最近平台互动
                </h3>
                <div className="space-y-0">
                  {selectedProduct.recentActivity.map((a, i) => (
                    <div key={i} className="flex items-start py-2.5 border-b border-slate-50 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 mr-3 shrink-0" />
                      <div>
                        <p className="text-xs text-slate-700">{a.action}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{a.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// --- Helper Components ---

function SidebarItem({ icon, label, active, badge, alert, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors group",
        active ? "bg-teal-500/10 text-teal-400 font-medium" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
      )}
    >
      <div className="flex items-center">
        <span className={cn("w-5 h-5 mr-3 flex items-center justify-center", active ? "text-teal-400" : "text-slate-500 group-hover:text-slate-400")}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
        </span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className={cn(
          "px-1.5 py-0.5 text-[10px] font-bold rounded",
          alert ? "bg-rose-500/20 text-rose-400" : "bg-slate-700 text-slate-300"
        )}>
          {badge}
        </span>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; dot: string }> = {
    '已上架': { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    '待审核': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
    '待补资料': { bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500' },
    '高风险待处理': { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500' },
  };
  const c = config[status] || config['待审核'];
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-full", c.bg, c.text)}>
      <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", c.dot)} />
      {status}
    </span>
  );
}

function RiskBadge({ level, size = 'sm' }: { level: string; size?: 'sm' | 'md' }) {
  const config: Record<string, { bg: string; text: string }> = {
    '低': { bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700' },
    '中': { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-700' },
    '高': { bg: 'bg-rose-50 border-rose-200', text: 'text-rose-700' },
  };
  const c = config[level] || config['中'];
  return (
    <span className={cn(
      "inline-flex items-center font-semibold rounded-full border",
      c.bg, c.text,
      size === 'sm' ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
    )}>
      {level === '高' && <AlertTriangle className={cn("mr-1", size === 'sm' ? "w-3 h-3" : "w-3.5 h-3.5")} />}
      风险{level}
    </span>
  );
}

function InfoItem({ label, value, highlight, children }: { label: string; value?: string; highlight?: boolean; children?: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] text-slate-400 mb-0.5">{label}</p>
      {children || (
        <p className={cn("text-sm font-medium", highlight ? "text-teal-700" : "text-slate-800")}>{value}</p>
      )}
    </div>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] text-slate-500">{label}</span>
        <span className={cn("text-[11px] font-bold", value >= 90 ? "text-teal-600" : value >= 70 ? "text-amber-600" : "text-rose-600")}>{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all", value >= 90 ? "bg-teal-500" : value >= 70 ? "bg-amber-500" : "bg-rose-500")}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function MetricItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100">
      <div className="flex items-center space-x-2 mb-1">
        <span className="text-slate-400">{icon}</span>
        <span className="text-[11px] text-slate-500">{label}</span>
      </div>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function ActionButton({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  const colorMap: Record<string, string> = {
    teal: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
    rose: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100',
    slate: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
  };
  return (
    <button className={cn("w-full flex items-center px-3 py-2 text-xs font-medium rounded-lg border transition-colors", colorMap[color] || colorMap.slate)}>
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
}
