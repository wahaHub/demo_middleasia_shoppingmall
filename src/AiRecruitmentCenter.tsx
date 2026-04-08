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
  Wand2, Clock, Mail, Phone, Calendar, AlertCircle, FilePlus,
  History, MessageSquarePlus, FileOutput, ListTodo, ShieldAlert,
  Users, UserPlus, FileSignature, Award, ThumbsUp
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AiRecruitmentCenterProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
}

export default function AiRecruitmentCenter({ 
  onHomeClick, 
  onDashboardClick, 
  onAiMarketingClick, 
  onAiKnowledgeClick, 
  onProductManagementClick,
  onCrmClick,
  onAiManagerClick
}: AiRecruitmentCenterProps) {
  const [activeJdLang, setActiveJdLang] = useState('zh');
  const [activeJobType, setActiveJobType] = useState('sales');

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
              placeholder="搜索候选人、岗位、渠道..." 
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
              <SidebarItem icon={<User />} label="客户 / 线索 / RFQ" onClick={onCrmClick} />
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
              <SidebarItem icon={<ShoppingCart />} label="订单管理" />
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
              <SidebarItem icon={<Users />} label="AI招人中心" active />
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 mt-16 flex flex-col overflow-hidden bg-slate-50">
        
        {/* Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">AI招人中心</h1>
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-md flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" /> 跨境团队搭建
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                围绕销售、安装、售后与本地运营，帮助商家快速搭建适合中亚市场的本地团队。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<UserPlus className="w-4 h-4" />} label="新建招聘任务" primary />
              <ActionButton icon={<FileSignature className="w-4 h-4" />} label="生成岗位JD" />
              <ActionButton icon={<Send className="w-4 h-4" />} label="一键发布招聘" />
              <ActionButton icon={<FileOutput className="w-4 h-4" />} label="导出招聘方案" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <MiniMetric title="进行中岗位" value="6" />
            <MiniMetric title="已生成 JD" value="14" />
            <MiniMetric title="已发布渠道" value="9" />
            <MiniMetric title="新候选人" value="23" highlight />
            <MiniMetric title="高匹配候选人" value="7" highlight />
            <MiniMetric title="待安排面试" value="4" alert />
            <MiniMetric title="推荐招聘预算" value="¥96,000 / 月" />
            <MiniMetric title="AI 团队建议" value="3 条" highlight />
          </div>
        </div>

        {/* Two Columns Layout for Workspace */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Middle: Main Workspace */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6 bg-slate-50/50">
            
            {/* 1. 岗位需求与团队建议区 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-indigo-600" /> 当前业务背景与 AI 团队建议
                </h2>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  <RefreshCw className="w-4 h-4 mr-1" /> 重新评估
                </button>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 col-span-1 border-r border-slate-100 pr-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2">当前产品</p>
                    <div className="space-y-1.5">
                      <div className="text-sm text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded border border-slate-100 truncate" title="Advanced 4D Color Doppler Ultrasound System">Advanced 4D Color Doppler...</div>
                      <div className="text-sm text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded border border-slate-100 truncate" title="Portable Diagnostic Ultrasound Unit">Portable Diagnostic Ultrasound...</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2">目标国家 & 阶段</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">乌兹别克斯坦</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">哈萨克斯坦</span>
                    </div>
                    <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded border border-amber-200">市场启动阶段</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2">当前能力缺口</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded border border-rose-100">本地销售</span>
                      <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded border border-rose-100">安装支持</span>
                      <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded border border-rose-100">售后跟进</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <p className="text-xs font-bold text-indigo-600 mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-1.5" /> AI 推荐岗位组合 (按优先级排序)
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mr-3">1</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">区域销售代表 <span className="text-indigo-600 ml-1">× 2</span></p>
                          <p className="text-xs text-slate-500 mt-0.5">优先建立本地医院与诊所触达能力</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">去招聘</button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold mr-3">2</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">渠道合作经理 <span className="text-slate-600 ml-1">× 1</span></p>
                          <p className="text-xs text-slate-500 mt-0.5">拓展当地经销商网络</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">去招聘</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center p-3 bg-white border border-slate-200 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3">3</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">安装培训工程师 <span className="text-slate-600 ml-1">× 1</span></p>
                          <p className="text-[10px] text-slate-500 mt-0.5">建议前期兼职/外包</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white border border-slate-200 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mr-3">4</div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">售后支持协调 <span className="text-slate-600 ml-1">× 1</span></p>
                          <p className="text-[10px] text-slate-500 mt-0.5">可由客服兼任</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. JD 与招聘内容生成区 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <FileSignature className="w-5 h-5 mr-2 text-teal-600" /> AI 招聘内容生成
                </h2>
              </div>
              <div className="flex flex-1 min-h-[400px]">
                {/* Left: Job Types */}
                <div className="w-48 border-r border-slate-100 bg-slate-50/30 p-3 space-y-1">
                  <JobTypeItem label="销售岗位" active={activeJobType === 'sales'} onClick={() => setActiveJobType('sales')} />
                  <JobTypeItem label="安装工程师" active={activeJobType === 'install'} onClick={() => setActiveJobType('install')} />
                  <JobTypeItem label="售后技术支持" active={activeJobType === 'support'} onClick={() => setActiveJobType('support')} />
                  <JobTypeItem label="渠道合作经理" active={activeJobType === 'channel'} onClick={() => setActiveJobType('channel')} />
                  <JobTypeItem label="客服 / 翻译支持" active={activeJobType === 'cs'} onClick={() => setActiveJobType('cs')} />
                </div>
                
                {/* Middle: JD Content */}
                <div className="flex-1 border-r border-slate-100 p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-900">中亚区域医疗设备销售代表（乌兹别克斯坦）</h3>
                    <div className="flex bg-slate-100 p-0.5 rounded-lg">
                      <LangTab label="中文版" active={activeJdLang === 'zh'} onClick={() => setActiveJdLang('zh')} />
                      <LangTab label="英文版" active={activeJdLang === 'en'} onClick={() => setActiveJdLang('en')} />
                      <LangTab label="俄语版" active={activeJdLang === 'ru'} onClick={() => setActiveJdLang('ru')} />
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 overflow-y-auto custom-scrollbar font-mono leading-relaxed">
                    {activeJdLang === 'zh' && (
                      <>
                        <p className="font-bold mb-2">岗位职责：</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                          <li>负责公司超声影像设备在乌兹别克斯坦市场的销售与推广。</li>
                          <li>开发和维护当地公立医院、私立诊所及医疗机构客户关系。</li>
                          <li>收集市场信息，分析竞品动态，制定区域销售策略。</li>
                          <li>协助完成产品注册、招投标及本地化营销活动。</li>
                        </ul>
                        <p className="font-bold mb-2">任职要求：</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>本科及以上学历，医学、生物医学工程或市场营销相关专业优先。</li>
                          <li>具备 3 年以上医疗器械（影像类优先）销售经验。</li>
                          <li>精通俄语和乌兹别克语，能作为工作语言；英语良好者优先。</li>
                          <li>熟悉乌兹别克斯坦医疗采购流程及当地市场网络。</li>
                        </ul>
                      </>
                    )}
                    {activeJdLang === 'en' && (
                      <>
                        <p className="font-bold mb-2">Responsibilities:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                          <li>Responsible for the sales and promotion of ultrasound imaging equipment in Uzbekistan.</li>
                          <li>Develop and maintain relationships with local public hospitals, private clinics, and medical institutions.</li>
                          <li>Collect market information, analyze competitor dynamics, and formulate regional sales strategies.</li>
                        </ul>
                        <p className="text-slate-400 italic mt-4">... AI generated English content ...</p>
                      </>
                    )}
                    {activeJdLang === 'ru' && (
                      <>
                        <p className="font-bold mb-2">Обязанности:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                          <li>Ответственность за продажу и продвижение ультразвукового оборудования в Узбекистане.</li>
                          <li>Развитие и поддержание отношений с местными государственными больницами, частными клиниками.</li>
                        </ul>
                        <p className="text-slate-400 italic mt-4">... AI generated Russian content ...</p>
                      </>
                    )}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 text-xs font-medium rounded-md flex items-center">
                      <RefreshCw className="w-3.5 h-3.5 mr-1" /> AI 优化润色
                    </button>
                    <button className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md flex items-center">
                      <Edit3 className="w-3.5 h-3.5 mr-1" /> 手动编辑
                    </button>
                  </div>
                </div>

                {/* Right: Marketing Materials */}
                <div className="w-72 p-5 bg-slate-50/50 flex flex-col">
                  <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                    <ImageIcon className="w-4 h-4 mr-1.5 text-slate-500" /> 招聘素材预览
                  </h3>
                  <div className="flex-1 space-y-4">
                    <div className="aspect-[3/4] bg-slate-200 rounded-lg border border-slate-300 overflow-hidden relative group">
                      <img src="https://picsum.photos/seed/job1/300/400" alt="Job Poster" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                        <p className="text-white font-bold text-sm">Менеджер по продажам</p>
                        <p className="text-white/80 text-[10px]">Ташкент, Узбекистан</p>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="px-3 py-1.5 bg-white text-slate-900 text-xs font-bold rounded-md shadow-sm">编辑海报</button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <MaterialButton icon={<Linkedin className="w-4 h-4 text-[#0A66C2]" />} label="LinkedIn 招聘文案" />
                      <MaterialButton icon={<Send className="w-4 h-4 text-[#229ED9]" />} label="Telegram 招聘贴文" />
                      <MaterialButton icon={<Mail className="w-4 h-4 text-slate-500" />} label="邮件邀约模板" />
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
                    加入发布计划
                  </button>
                </div>
              </div>
            </section>

            {/* 3. 招聘渠道与发布区 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <Share2 className="w-5 h-5 mr-2 text-blue-600" /> 推荐招聘渠道
                </h2>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ChannelCard 
                  name="LinkedIn" 
                  icon={<Linkedin className="w-6 h-6 text-[#0A66C2]" />}
                  fit="医院 BD、渠道合作经理、管理类岗位"
                  lang="英语 / 俄语"
                  reason="适合寻找有跨国公司经验的中高端医疗人才。"
                />
                <ChannelCard 
                  name="Telegram" 
                  icon={<Send className="w-6 h-6 text-[#229ED9]" />}
                  fit="本地销售、客服、轻量技术支持"
                  lang="俄语 / 当地语"
                  reason="中亚地区渗透率极高，适合快速触达基层和社群人才。"
                />
                <ChannelCard 
                  name="本地招聘网站 (hh.uz)" 
                  icon={<Globe className="w-6 h-6 text-rose-500" />}
                  fit="安装工程师、售后工程师、运营支持"
                  lang="俄语"
                  reason="本地最大的招聘平台，简历库丰富，适合技术与运营岗。"
                />
                <ChannelCard 
                  name="猎头 / 合作伙伴" 
                  icon={<Briefcase className="w-6 h-6 text-slate-700" />}
                  fit="国家经理、核心渠道负责人"
                  lang="中文 / 英语"
                  reason="针对关键岗位，利用本地资源进行精准定向挖角。"
                />
              </div>
            </section>

            {/* 4. 候选人筛选区 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-emerald-600" /> AI 候选人匹配与筛选
                </h2>
                <button className="text-sm text-slate-600 hover:text-slate-900 font-medium flex items-center">
                  查看全部 (23) <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <CandidateCard 
                  name="Aibek S."
                  role="区域销售代表"
                  country="哈萨克斯坦"
                  match={91}
                  lang="俄语 / 英语"
                  advantage="医疗设备销售经验，熟悉私立诊所网络"
                  avatar="https://picsum.photos/seed/user1/100/100"
                />
                <CandidateCard 
                  name="Dilshod R."
                  role="安装培训工程师"
                  country="乌兹别克斯坦"
                  match={88}
                  lang="俄语 / 乌兹别克语"
                  advantage="有影像设备安装维护经验"
                  avatar="https://picsum.photos/seed/user2/100/100"
                />
                <CandidateCard 
                  name="Madina K."
                  role="售后协调"
                  country="乌兹别克斯坦"
                  match={79}
                  lang="俄语 / 英语"
                  advantage="客户沟通与售后协调经验较强"
                  avatar="https://picsum.photos/seed/user3/100/100"
                />
              </div>
            </section>

          </div>

          {/* Right: AI Assistant Sidebar */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            
            {/* 1. AI Assistant Prompts */}
            <div className="p-5 border-b border-slate-100 bg-indigo-50/30">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <Bot className="w-4 h-4 mr-2 text-indigo-600" /> AI 招聘助手
              </h3>
              <div className="space-y-2">
                <PromptItem text="现在这个产品进入乌兹别克斯坦，最应该先招什么岗位？" />
                <PromptItem text="给我生成一个俄语版安装工程师招聘广告" />
                <PromptItem text="哈萨克斯坦销售团队适合走直招还是合作代理？" />
                <PromptItem text="哪些岗位适合先外包？" />
                <PromptItem text="这个候选人适不适合做医院销售？" />
              </div>
              <div className="mt-4 relative">
                <input 
                  type="text" 
                  placeholder="输入您的问题..." 
                  className="w-full pl-3 pr-10 py-2 bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 rounded-lg text-xs outline-none"
                />
                <button className="absolute right-1.5 top-1.5 p-1 text-indigo-600 hover:bg-indigo-50 rounded">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. AI Suggestions */}
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-teal-600" /> 团队搭建建议
              </h3>
              <div className="space-y-3">
                <SuggestionItem text="建议优先招聘 1 名渠道合作经理和 2 名销售代表" />
                <SuggestionItem text="安装工程师可先采用合作制" />
                <SuggestionItem text="售后协调可由俄语客服兼任第一阶段职责" />
                <SuggestionItem text="LinkedIn 更适合管理层岗位，Telegram 更适合销售与客服岗位" />
              </div>
            </div>

            {/* 3. Today's To-Dos */}
            <div className="p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <ListTodo className="w-4 h-4 mr-2 text-rose-600" /> 今日待办
              </h3>
              <div className="space-y-2">
                <TodoItem text="审核 2 个招聘 JD" />
                <TodoItem text="发布 1 个俄语版招聘广告" />
                <TodoItem text="处理 3 份候选人简历" />
                <TodoItem text="生成 1 份中亚招聘预算建议" />
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
      active ? "bg-indigo-50 text-indigo-700 font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    )}>
      <div className="flex items-center">
        <span className={cn("w-5 h-5 mr-3 flex items-center justify-center", active ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600")}>
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

function ActionButton({ icon, label, primary }: { icon: React.ReactNode, label: string, primary?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center",
      primary ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
    )}>
      <span className={cn("mr-2", primary ? "text-white" : "text-slate-500")}>{icon}</span>
      {label}
    </button>
  );
}

function MiniMetric({ title, value, highlight, alert }: any) {
  return (
    <div className={cn("bg-white p-3 rounded-lg border shadow-sm flex flex-col justify-center", highlight ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200", alert ? "border-rose-200 bg-rose-50/30" : "")}>
      <p className="text-[10px] font-medium text-slate-500 mb-1 truncate">{title}</p>
      <h3 className={cn("text-lg font-bold", highlight ? "text-indigo-700" : alert ? "text-rose-700" : "text-slate-900")}>{value}</h3>
    </div>
  );
}

function JobTypeItem({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-md text-sm cursor-pointer transition-colors",
        active ? "bg-white text-indigo-700 font-bold shadow-sm border border-slate-200" : "text-slate-600 hover:bg-slate-100"
      )}
    >
      {label}
    </div>
  );
}

function LangTab({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-md transition-colors",
        active ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
      )}
    >
      {label}
    </button>
  );
}

function MaterialButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-2.5 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 rounded-lg transition-colors group">
      <div className="flex items-center">
        {icon}
        <span className="text-xs font-medium text-slate-700 ml-2 group-hover:text-indigo-700">{label}</span>
      </div>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
    </button>
  );
}

function ChannelCard({ name, icon, fit, lang, reason }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mr-3 border border-slate-100">
          {icon}
        </div>
        <h3 className="font-bold text-slate-900 text-sm">{name}</h3>
      </div>
      <div className="space-y-2 flex-1">
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase">适合岗位</span>
          <p className="text-xs text-slate-700 mt-0.5">{fit}</p>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase">建议语言</span>
          <p className="text-xs text-slate-700 mt-0.5">{lang}</p>
        </div>
        <div className="bg-slate-50 p-2 rounded border border-slate-100">
          <p className="text-[10px] text-slate-600 italic">"{reason}"</p>
        </div>
      </div>
      <button className="w-full mt-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md transition-colors">
        一键发布
      </button>
    </div>
  );
}

function CandidateCard({ name, role, country, match, lang, advantage, avatar }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border border-slate-200 mr-3" />
          <div>
            <h3 className="font-bold text-slate-900 text-sm">{name}</h3>
            <p className="text-xs text-slate-500">{role} · {country}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{match}% 匹配</span>
        </div>
      </div>
      <div className="space-y-1.5 mb-4">
        <div className="flex items-start">
          <Languages className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0 mt-0.5" />
          <span className="text-xs text-slate-600">{lang}</span>
        </div>
        <div className="flex items-start">
          <ThumbsUp className="w-3.5 h-3.5 text-indigo-400 mr-1.5 shrink-0 mt-0.5" />
          <span className="text-xs text-slate-700 line-clamp-2">{advantage}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-xs font-medium rounded-md transition-colors">AI 分析</button>
        <button className="py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md transition-colors">加入面试池</button>
      </div>
    </div>
  );
}

function PromptItem({ text }: { text: string }) {
  return (
    <div className="bg-white border border-indigo-100 rounded-lg p-2.5 shadow-sm cursor-pointer hover:border-indigo-300 transition-colors">
      <p className="text-xs text-indigo-900 leading-tight">"{text}"</p>
    </div>
  );
}

function SuggestionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></div>
      <p className="text-xs text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function TodoItem({ text }: { text: string }) {
  return (
    <div className="flex items-center p-2 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
      <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-rose-500 mr-2.5 flex items-center justify-center shrink-0">
        <Check className="w-3 h-3 text-transparent group-hover:text-rose-500" />
      </div>
      <span className="text-xs text-slate-700 group-hover:text-slate-900">{text}</span>
    </div>
  );
}

// Extra Icons
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
