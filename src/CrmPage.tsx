import React, { useState } from 'react';
import { 
  LayoutDashboard, TrendingUp, MessageSquare, ShoppingCart, 
  Settings, Box, FileText, Globe, Shield, CreditCard, 
  Bot, Bell, Search, HelpCircle, User, Plus, ArrowRight, 
  Activity, CheckCircle, Package, Truck, HeadphonesIcon, 
  FileQuestion, UploadCloud, Zap, Image as ImageIcon, Video, 
  FileEdit, Share2, Linkedin, Send, Instagram, Youtube, 
  Facebook, Music, MessageCircle, MapPin, Building2, Target, 
  Briefcase, PieChart, Download, ChevronRight, Sparkles, FileBarChart,
  FolderTree, ChevronDown, Filter, MoreHorizontal, Eye, Edit3, Link,
  AlertTriangle, Check, X, FileUp, BarChart2, Database,
  Languages, AlertOctagon, FileCheck, RefreshCw, ExternalLink,
  Wand2, Clock, Mail, Phone, Calendar, AlertCircle, FilePlus
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CrmPageProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
}

export default function CrmPage({ 
  onHomeClick, 
  onDashboardClick, 
  onAiMarketingClick, 
  onAiKnowledgeClick, 
  onProductManagementClick,
  onAiManagerClick,
  onAiRecruitmentClick
}: CrmPageProps) {
  const [activeLead, setActiveLead] = useState(1);

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
            <Building2 className="w-4 h-4 text-slate-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">MedTech Precision Instruments</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="hidden lg:flex items-center relative max-w-md w-full mr-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input 
              type="text" 
              placeholder="搜索客户、线索、RFQ..." 
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
          {/* Group 1 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">总览</p>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard />} label="工作台" onClick={onDashboardClick} />
            </div>
          </div>
          {/* Group 2 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">经营增长</p>
            <div className="space-y-1">
              <SidebarItem icon={<Sparkles />} label="AI营销中心" badge="新" onClick={onAiMarketingClick} />
              <SidebarItem icon={<TrendingUp />} label="营销活动" />
              <SidebarItem icon={<User />} label="客户 / 线索 / RFQ" />
              <SidebarItem icon={<HeadphonesIcon />} label="客服管理" />
            </div>
          </div>
          {/* Group 3 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">商品与内容</p>
            <div className="space-y-1">
              <SidebarItem icon={<Box />} label="商品管理" onClick={onProductManagementClick} />
              <SidebarItem icon={<Package />} label="服务管理" />
              <SidebarItem icon={<FileQuestion />} label="AI 客服" onClick={onAiKnowledgeClick} />
              <SidebarItem icon={<FileText />} label="店铺 / 品牌资料" />
            </div>
          </div>
          {/* Group 4 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">交易与履约</p>
            <div className="space-y-1">
              <SidebarItem icon={<ShoppingCart />} label="订单管理" active />
              <SidebarItem icon={<Truck />} label="物流管理" />
              <SidebarItem icon={<Shield />} label="售后管理" />
            </div>
          </div>
          {/* Group 5 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">财务与运营</p>
            <div className="space-y-1">
              <SidebarItem icon={<FileBarChart />} label="财务数据" />
              <SidebarItem icon={<CreditCard />} label="结算提现" />
              <SidebarItem icon={<LayersIcon />} label="库存与供货" />
            </div>
          </div>
          {/* Group 6 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">跨境支持</p>
            <div className="space-y-1">
              <SidebarItem icon={<Globe />} label="跨境法规" />
              <SidebarItem icon={<MapIcon />} label="市场与渠道" />
              <SidebarItem icon={<FileCheckIcon />} label="税务 / 合规支持" />
            </div>
          </div>
          {/* Group 7 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">智能助手</p>
            <div className="space-y-1">
              <SidebarItem icon={<Bot />} label="AI管理机器人" onClick={onAiManagerClick} />
              <SidebarItem icon={<User />} label="AI招人中心" onClick={onAiRecruitmentClick} />
              <SidebarItem icon={<Search />} label="AI搜索 / 市场情报" />
            </div>
          </div>
          {/* Group 8 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">设置</p>
            <div className="space-y-1">
              <SidebarItem icon={<Settings />} label="店铺设置" />
              <SidebarItem icon={<UsersIcon />} label="账号权限" />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA - THREE COLUMNS */}
      <main className="flex-1 ml-64 mt-16 flex flex-col overflow-hidden bg-slate-50">
        
        {/* Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">客户 / 线索 / RFQ</h1>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-md flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" /> AI 增强
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                统一管理海外客户、采购线索与 RFQ，借助 AI 完成多语言沟通、资料发送与跟进推进。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<Plus className="w-4 h-4" />} label="新建线索" />
              <ActionButton icon={<FileUp className="w-4 h-4" />} label="导入线索" />
              <ActionButton icon={<FileText className="w-4 h-4" />} label="查看全部RFQ" />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
                <Bot className="w-4 h-4 mr-2" /> AI 批量处理
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <MiniMetric title="新客户线索" value="12" highlight />
            <MiniMetric title="待处理RFQ" value="5" alert />
            <MiniMetric title="高优先级机会" value="3" alert />
            <MiniMetric title="今日待回复消息" value="9" />
            <MiniMetric title="AI已生成回复" value="14" highlight />
            <MiniMetric title="已发送资料包" value="7" />
          </div>
        </div>

        {/* Three Columns Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Column 1: Lead List */}
          <div className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
            <div className="p-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="搜索客户、国家..." 
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md text-sm transition-all outline-none"
                />
              </div>
              <button className="ml-2 p-1.5 text-slate-500 hover:bg-slate-200 rounded"><Filter className="w-4 h-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-slate-100">
              
              <LeadCard 
                active={activeLead === 1}
                onClick={() => setActiveLead(1)}
                name="Tashkent Women’s Health Hospital Group"
                location="乌兹别克斯坦｜塔什干"
                source="RFQ Basket"
                product="Advanced 4D Color Doppler Ultrasound System"
                status="待报价"
                priority="高"
                lastMsg="Need Russian brochures and installation support"
                aiTip="建议发送医院采购版资料包，并补问安装地点数量"
              />
              
              <LeadCard 
                active={activeLead === 2}
                onClick={() => setActiveLead(2)}
                name="Central Med Distribution LLP"
                location="哈萨克斯坦｜阿拉木图"
                source="LinkedIn触达回流"
                product="Portable Diagnostic Ultrasound Unit"
                status="待确认合作模式"
                priority="中"
                lastMsg="Interested in distributor pricing and certification package"
                aiTip="建议发送经销商合作包，并确认年度采购预期"
              />

              <LeadCard 
                active={activeLead === 3}
                onClick={() => setActiveLead(3)}
                name="Bishkek Diagnostic Clinic Network"
                location="吉尔吉斯斯坦"
                source="商品页询盘"
                product="Smart Patient Monitor"
                status="待回复"
                priority="中"
                lastMsg="Can you support delivery in 30 days?"
                aiTip="建议先确认数量与交付城市，再生成物流建议"
              />

            </div>
          </div>

          {/* Column 2: Chat & AI Workspace */}
          <div className="flex-1 flex flex-col bg-slate-50/50 min-w-[400px]">
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">
              
              {/* Customer Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  TW
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="font-bold text-slate-900 text-sm">Tashkent Women’s Health Hospital Group</span>
                    <span className="text-xs text-slate-500">12 分钟前</span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm text-sm text-slate-700 leading-relaxed max-w-2xl">
                    We are interested in one advanced 4D color Doppler ultrasound system for a women’s hospital project in Tashkent. Please share Russian brochures, installation support scope, and estimated delivery timeline.
                  </div>
                  
                  {/* AI Translation & Summary */}
                  <div className="mt-3 bg-blue-50/50 border border-blue-100 rounded-xl p-4 max-w-2xl">
                    <div className="flex items-center text-blue-700 font-bold text-xs mb-2">
                      <Bot className="w-4 h-4 mr-1.5" /> AI 中文摘要与意图识别
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-xs">
                      <div className="flex"><span className="text-slate-500 w-16">项目地点：</span><span className="font-medium text-slate-800">塔什干</span></div>
                      <div className="flex"><span className="text-slate-500 w-16">产品需求：</span><span className="font-medium text-slate-800">1 台高端 4D 彩超</span></div>
                      <div className="flex"><span className="text-slate-500 w-16">额外需求：</span><span className="font-medium text-slate-800">俄语产品册、安装支持、交付周期</span></div>
                      <div className="flex"><span className="text-slate-500 w-16">采购场景：</span><span className="font-medium text-indigo-600 bg-indigo-50 px-1.5 rounded">医院项目采购</span></div>
                      <div className="flex"><span className="text-slate-500 w-16">优先级：</span><span className="font-medium text-rose-600 bg-rose-50 px-1.5 rounded">高</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Material Recommendation */}
              <div className="ml-11 max-w-2xl">
                <div className="flex items-center text-teal-700 font-bold text-xs mb-2">
                  <Sparkles className="w-4 h-4 mr-1.5" /> AI 推荐发送资料
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <MaterialItem name="俄语版产品册" type="PDF" />
                    <MaterialItem name="医院采购版产品参数摘要" type="PDF" />
                    <MaterialItem name="安装培训服务说明" type="DOCX" />
                    <MaterialItem name="CE / ISO 13485 认证资料" type="PDF" />
                    <MaterialItem name="官网产品页链接" type="LINK" />
                    <MaterialItem name="RFQ 补充表单" type="FORM" />
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <button className="text-xs font-medium text-teal-600 hover:text-teal-700 flex items-center">
                      <Wand2 className="w-3.5 h-3.5 mr-1" /> AI 生成个性化引导语
                    </button>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded">逐个选择发送</button>
                      <button className="px-3 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 rounded shadow-sm">一键全部发送</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* AI Reply Composer */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-blue-700 font-bold text-xs">
                  <Bot className="w-4 h-4 mr-1.5" /> AI 生成回复草稿
                </div>
                <div className="flex space-x-2">
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-200">改写为更正式</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-200">插入产品册</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-200">插入官网链接</span>
                  <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-200">插入 RFQ 表单</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                {/* English Draft */}
                <div className="border border-blue-200 bg-blue-50/30 rounded-lg overflow-hidden flex flex-col">
                  <div className="bg-blue-50 px-3 py-1.5 border-b border-blue-100 text-xs font-bold text-blue-800 flex justify-between items-center">
                    <span>英文版 (English)</span>
                  </div>
                  <textarea 
                    className="w-full flex-1 p-3 text-sm text-slate-700 bg-transparent resize-none focus:outline-none custom-scrollbar"
                    defaultValue="Thank you for your interest. We can provide a Russian-language brochure, installation support options, and an estimated delivery plan based on your final configuration. For hospital project procurement, we recommend confirming probe requirements, installation site details, and preferred delivery timeline so we can prepare a more accurate quotation package."
                  />
                  <div className="p-2 border-t border-blue-100 bg-white flex justify-end">
                    <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm flex items-center">
                      <Send className="w-3 h-3 mr-1" /> 一键发送英文
                    </button>
                  </div>
                </div>

                {/* Russian Draft */}
                <div className="border border-indigo-200 bg-indigo-50/30 rounded-lg overflow-hidden flex flex-col">
                  <div className="bg-indigo-50 px-3 py-1.5 border-b border-indigo-100 text-xs font-bold text-indigo-800 flex justify-between items-center">
                    <span>俄语版 (Русский)</span>
                  </div>
                  <textarea 
                    className="w-full flex-1 p-3 text-sm text-slate-700 bg-transparent resize-none focus:outline-none custom-scrollbar"
                    defaultValue="Спасибо за ваш интерес. Мы можем предоставить брошюру на русском языке, варианты поддержки по установке и примерный план доставки в зависимости от вашей окончательной конфигурации. Для закупок по проектам больниц мы рекомендуем подтвердить требования к датчикам, детали места установки и предпочтительные сроки доставки, чтобы мы могли подготовить более точный пакет предложений."
                  />
                  <div className="p-2 border-t border-indigo-100 bg-white flex justify-end">
                    <button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow-sm flex items-center">
                      <Send className="w-3 h-3 mr-1" /> 一键发送俄语
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Profile & RFQ */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            
            {/* Customer Profile */}
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600" /> 客户画像
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">客户名称</p>
                  <p className="text-sm font-bold text-slate-800">Tashkent Women’s Health Hospital Group</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">国家</p>
                    <p className="text-sm font-medium text-slate-800 flex items-center"><MapPin className="w-3 h-3 mr-1 text-slate-400" /> 乌兹别克斯坦</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">客户类型</p>
                    <p className="text-sm font-medium text-slate-800">私立医院集团</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">关注产品</p>
                  <p className="text-sm font-medium text-blue-600">Advanced 4D Color Doppler Ultrasound System</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">来源渠道</p>
                    <p className="text-sm font-medium text-slate-800">RFQ Basket</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">最近互动</p>
                    <p className="text-sm font-medium text-slate-800">12 分钟前</p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mt-2">
                  <p className="text-xs text-emerald-800 mb-0.5">预计机会金额</p>
                  <p className="text-lg font-bold text-emerald-700">USD 80,000 – 110,000</p>
                </div>
              </div>
            </div>

            {/* RFQ Summary & Missing Items */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-indigo-600" /> RFQ 摘要与缺失项
                </h3>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">完整度 76%</span>
              </div>
              
              <div className="mb-4">
                <p className="text-xs font-bold text-slate-700 mb-2 flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-500" /> 已明确：</p>
                <div className="flex flex-wrap gap-1.5">
                  <Tag text="产品型号" type="success" />
                  <Tag text="国家" type="success" />
                  <Tag text="项目类型" type="success" />
                  <Tag text="需要俄语资料" type="success" />
                  <Tag text="需要安装支持" type="success" />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-rose-700 mb-2 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1 text-rose-500" /> 缺失项：</p>
                <ul className="space-y-1.5">
                  <MissingItem text="探头配置未明确" />
                  <MissingItem text="最终交付城市数量未明确" />
                  <MissingItem text="期望质保条款未明确" />
                  <MissingItem text="是否需要注册支持未明确" />
                  <MissingItem text="是否属于最终用户直采未明确" />
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-medium rounded-lg transition-colors border border-indigo-200 flex items-center justify-center">
                  <Wand2 className="w-3.5 h-3.5 mr-1" /> AI 生成补问问题
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">插入到回复中</button>
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">转成 RFQ 表单</button>
                </div>
              </div>
            </div>

            {/* Risk & AI Next Steps */}
            <div className="p-5">
              <div className="bg-rose-50 border border-rose-100 rounded-lg p-3 mb-4">
                <p className="text-xs font-bold text-rose-800 mb-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" /> 风险提示</p>
                <ul className="list-disc list-inside text-xs text-rose-700 space-y-0.5">
                  <li>当地注册责任未确认</li>
                  <li>安装范围未明确</li>
                  <li>交付城市可能不止 1 个</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-lg p-4">
                <p className="text-xs font-bold text-teal-800 mb-3 flex items-center"><Sparkles className="w-4 h-4 mr-1.5 text-teal-600" /> AI 下一步建议</p>
                <div className="space-y-3 relative before:absolute before:inset-y-0 before:left-[7px] before:w-0.5 before:bg-teal-100">
                  <StepItem text="发送俄语产品册" />
                  <StepItem text="补问探头配置与安装地点" />
                  <StepItem text="推荐加入安装培训服务" />
                  <StepItem text="如客户确认项目型采购，生成正式报价包" />
                </div>
              </div>

              <div className="mt-4 flex flex-col space-y-2">
                <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                  添加跟进任务
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">加入重点客户</button>
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">推送给销售</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

// --- Subcomponents ---

function SidebarItem({ icon, label, active, badge, onClick }: any) {
  return (
    <div onClick={onClick} className={cn(
      "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors group",
      active ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    )}>
      <div className="flex items-center">
        <span className={cn("w-5 h-5 mr-3 flex items-center justify-center", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
        </span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="px-1.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded">
          {badge}
        </span>
      )}
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
      <span className="mr-2 text-slate-500">{icon}</span>
      {label}
    </button>
  );
}

function MiniMetric({ title, value, highlight, alert }: any) {
  return (
    <div className={cn("bg-white p-3 rounded-lg border shadow-sm flex flex-col justify-center", highlight ? "border-blue-200 bg-blue-50/30" : "border-slate-200", alert ? "border-rose-200 bg-rose-50/30" : "")}>
      <p className="text-[10px] font-medium text-slate-500 mb-1 truncate">{title}</p>
      <h3 className={cn("text-lg font-bold", highlight ? "text-blue-700" : alert ? "text-rose-700" : "text-slate-900")}>{value}</h3>
    </div>
  );
}

function LeadCard({ active, onClick, name, location, source, product, status, priority, lastMsg, aiTip }: any) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 cursor-pointer transition-colors border-l-4",
        active ? "bg-blue-50/50 border-blue-500" : "bg-white border-transparent hover:bg-slate-50"
      )}
    >
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-sm font-bold text-slate-900 line-clamp-1 flex-1 pr-2" title={name}>{name}</h4>
        <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-bold shrink-0", priority === '高' ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700")}>{priority}</span>
      </div>
      <p className="text-xs text-slate-500 mb-2 flex items-center"><MapPin className="w-3 h-3 mr-1" /> {location}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-2">
        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{source}</span>
        <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 truncate max-w-[120px]" title={product}>{product}</span>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100">{status}</span>
      </div>

      <div className="bg-slate-50 rounded p-2 mb-2 border border-slate-100">
        <p className="text-xs text-slate-600 line-clamp-2"><span className="font-bold text-slate-400">Msg:</span> {lastMsg}</p>
      </div>

      <div className="flex items-start text-[10px] text-teal-700 bg-teal-50/50 p-1.5 rounded">
        <Sparkles className="w-3 h-3 mr-1 shrink-0 mt-0.5" />
        <span className="line-clamp-2 leading-tight">{aiTip}</span>
      </div>
    </div>
  );
}

function MaterialItem({ name, type }: { name: string, type: 'PDF' | 'DOCX' | 'LINK' | 'FORM' }) {
  const getIcon = () => {
    switch(type) {
      case 'PDF': return <FileText className="w-3.5 h-3.5 text-rose-500" />;
      case 'DOCX': return <FileText className="w-3.5 h-3.5 text-blue-500" />;
      case 'LINK': return <Link className="w-3.5 h-3.5 text-indigo-500" />;
      case 'FORM': return <FilePlus className="w-3.5 h-3.5 text-emerald-500" />;
    }
  };

  return (
    <div className="flex items-center p-1.5 border border-slate-100 rounded bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors group">
      <div className="mr-2 shrink-0">{getIcon()}</div>
      <span className="text-[10px] text-slate-700 truncate flex-1" title={name}>{name}</span>
      <div className="w-3.5 h-3.5 rounded-full border border-slate-300 group-hover:border-teal-500 flex items-center justify-center shrink-0 ml-1">
        <Check className="w-2.5 h-2.5 text-transparent group-hover:text-teal-500" />
      </div>
    </div>
  );
}

function Tag({ text, type }: { text: string, type: 'success' | 'warning' }) {
  return (
    <span className={cn(
      "text-[10px] px-2 py-1 rounded border",
      type === 'success' ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-amber-50 text-amber-700 border-amber-100"
    )}>
      {text}
    </span>
  );
}

function MissingItem({ text }: { text: string }) {
  return (
    <li className="text-xs text-rose-600 flex items-start">
      <span className="w-1 h-1 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></span>
      <span className="leading-tight">{text}</span>
    </li>
  );
}

function StepItem({ text }: { text: string }) {
  return (
    <div className="flex items-start relative z-10">
      <div className="w-4 h-4 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center shrink-0 mr-2 mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
      </div>
      <p className="text-xs text-teal-900 leading-tight pt-0.5">{text}</p>
    </div>
  );
}

// Extra Icons
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
