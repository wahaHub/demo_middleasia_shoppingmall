import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Store, Box, ShoppingCart, 
  Handshake, Truck, ShieldAlert, AlertOctagon, 
  Megaphone, FileText, CreditCard, BarChart2, 
  Search, Bell, Shield, Filter, Download, 
  AlertTriangle, CheckCircle, Clock, Zap,
  ChevronRight, ArrowRight, Activity, Target,
  BriefcaseMedical, Globe, HelpCircle, Sparkles,
  UserPlus, CheckSquare, XCircle, Info, Scale,
  MessageSquare, FileSearch, Gavel, ArrowLeftRight,
  ClipboardList, UserX, UserCheck
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminDisputesProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onOrdersClick: () => void;
  onMatchmakingClick: () => void;
  onVendorsClick: () => void;
}

export default function AdminDisputes({ onHomeClick, onDashboardClick, onOrdersClick, onMatchmakingClick, onVendorsClick }: AdminDisputesProps) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      
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
              <SidebarItem icon={<Box />} label="商品管理" />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">交易与履约</p>
            <div className="space-y-1">
              <SidebarItem icon={<ShoppingCart />} label="订单管理" onClick={onOrdersClick} />
              <SidebarItem icon={<Handshake />} label="交易撮合" badge="18" onClick={onMatchmakingClick} />
              <SidebarItem icon={<Truck />} label="物流管理" />
              <SidebarItem icon={<AlertOctagon />} label="售后纠纷" />
              <SidebarItem icon={<ShieldAlert />} label="平台介入纠纷" badge="5" active alert />
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
        
        {/* Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">平台介入纠纷</h1>
              </div>
              <p className="text-slate-600 text-sm">
                识别责任边界、评估风险等级，并推动买卖双方在关键节点快速解决争议。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Download className="w-4 h-4 mr-2" /> 导出纠纷报表
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <AlertTriangle className="w-4 h-4 mr-2 text-rose-500" /> 查看高风险纠纷
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <ClipboardList className="w-4 h-4 mr-2 text-slate-500" /> 查看处理记录
              </button>
              <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <ShieldAlert className="w-4 h-4 mr-2" /> 新建处理任务
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <MetricCard title="待平台介入纠纷" value="5" alert />
            <MetricCard title="处理中纠纷" value="4" />
            <MetricCard title="高风险纠纷" value="2" alert highlight />
            <MetricCard title="本月已解决" value="17" trend="+5" />
            <MetricCard title="责任边界未明确" value="6" />
            <MetricCard title="可能升级退款" value="2" alert />
          </div>
        </div>

        {/* 3-COLUMN WORKSPACE */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* COLUMN 1: Dispute List (Left) */}
          <div className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-100">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="搜索纠纷号、买家、商家..." 
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-sm outline-none transition-all"
                />
              </div>
              <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-indigo-500 transition-all">
                <option>全部纠纷</option>
                <option>待介入</option>
                <option>处理中</option>
                <option>高风险</option>
                <option>服务范围争议</option>
                <option>交付 / 物流争议</option>
                <option>验收 / 质量争议</option>
                <option>付款 / 结算争议</option>
              </select>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
              <DisputeListCard 
                id="#DS-2026-0047"
                buyer="Bishkek Diagnostic Clinic Network"
                seller="MedTech Precision Instruments"
                country="吉尔吉斯斯坦"
                type="安装服务范围争议"
                status="待平台介入"
                risk="高"
                tags={['高价值', '首次合作', '可能升级退款']}
                active
                alert
              />
              <DisputeListCard 
                id="#DS-2026-0042"
                buyer="Central Med Distribution LLP"
                seller="Nova Imaging Solutions"
                country="哈萨克斯坦"
                type="交付时效争议"
                status="处理中"
                risk="中"
                tags={['清关延迟', '沟通不一致']}
              />
              <DisputeListCard 
                id="#DS-2026-0039"
                buyer="Tashkent Women's Health Hospital Group"
                seller="SonoVista Medical Systems"
                country="乌兹别克斯坦"
                type="资料与注册支持争议"
                status="待补资料"
                risk="中高"
                tags={['医院项目', '俄语资料缺失']}
                warning
              />
            </div>
          </div>

          {/* COLUMN 2: Main Content (Middle) */}
          <div className="flex-1 bg-slate-50/50 overflow-y-auto custom-scrollbar p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* 1. 纠纷概况 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <FileSearch className="w-5 h-5 mr-2 text-slate-500" /> 纠纷概况
                  </h2>
                  <span className="text-sm font-bold text-slate-900">DS-2026-0047</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">买家</p>
                      <p className="text-sm font-medium text-slate-900">Bishkek Diagnostic Clinic Network</p>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center"><Globe className="w-3 h-3 mr-1" /> 吉尔吉斯斯坦</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">商家</p>
                      <p className="text-sm font-medium text-slate-900">MedTech Precision Instruments</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">对应订单 / 涉及金额</p>
                      <p className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">PL-2026-0163</p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">USD 29,000</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-slate-500 mb-1">涉及商品</p>
                      <p className="text-sm font-medium text-slate-900">Advanced 4D Color Doppler Ultrasound System</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">纠纷类型 / 状态</p>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200">安装服务范围争议</span>
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded border border-amber-200">待平台介入</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. 争议摘要 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                  <ArrowLeftRight className="w-5 h-5 mr-2 text-slate-500" />
                  <h2 className="text-base font-bold text-slate-800">争议摘要</h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Buyer Claim */}
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <h3 className="text-sm font-bold text-blue-900">买家主张</h3>
                      </div>
                      <ul className="text-sm text-blue-800/80 space-y-2 list-disc list-inside">
                        <li>买家认为订单应包含现场安装和基础培训</li>
                        <li>买家认为设备到货后应可直接投入使用</li>
                      </ul>
                    </div>
                    {/* Seller Claim */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-2">
                          <Store className="w-3.5 h-3.5 text-slate-600" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-800">商家主张</h3>
                      </div>
                      <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                        <li>商家认为订单仅包含远程安装指导</li>
                        <li>现场培训不在原报价范围内</li>
                      </ul>
                    </div>
                  </div>
                  {/* Current Dispute Points */}
                  <div className="bg-rose-50 border border-rose-100 rounded-lg p-4">
                    <h4 className="text-sm font-bold text-rose-900 mb-2 flex items-center">
                      <AlertOctagon className="w-4 h-4 mr-1.5 text-rose-600" /> 当前争议焦点
                    </h4>
                    <ul className="text-sm text-rose-800/80 space-y-1.5 list-disc list-inside">
                      <li>安装支持是否等于现场安装培训</li>
                      <li>订单文件中未明确写清服务边界</li>
                      <li>买卖双方对交付完成定义不一致</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. 责任边界分析 & 4. 证据摘要 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Boundary Analysis */}
                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                    <Scale className="w-5 h-5 mr-2 text-indigo-600" />
                    <h2 className="text-base font-bold text-slate-800">责任边界分析</h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <ul className="text-xs text-slate-600 space-y-2 mb-6 list-disc list-inside">
                      <li>订单中写明“installation support available”，但未具体说明形式</li>
                      <li>RFQ 中提到“training needed”，但未形成明确服务范围</li>
                      <li>报价单未拆分设备和安装培训服务</li>
                      <li>买家存在较强默认预期，商家存在表述不清问题</li>
                    </ul>
                    
                    <div className="mt-auto space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-slate-700">商家责任 (表述不清)</span>
                          <span className="text-amber-600 font-bold">中</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-amber-500 h-1.5 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-slate-700">买家误解因素 (默认预期)</span>
                          <span className="text-amber-600 font-bold">中</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <div className="bg-amber-500 h-1.5 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      
                      <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 mt-2">
                        <p className="text-xs font-bold text-indigo-900 mb-1 flex items-center">
                          <Gavel className="w-3.5 h-3.5 mr-1" /> 平台初步判断
                        </p>
                        <p className="text-xs text-indigo-800/80 leading-relaxed">
                          通过补充服务说明 + 协调补位服务优先解决，不建议直接升级退款。
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Evidence Summary */}
                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-base font-bold text-slate-800 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-slate-500" /> 证据与沟通摘要
                    </h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200">订单条款</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200">RFQ 原文</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200">商家报价单</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200">历史消息记录</span>
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-4 flex-1">
                      <ul className="text-xs text-slate-700 space-y-2 font-mono">
                        <li>&gt; RFQ 中出现 "installation support required"</li>
                        <li>&gt; 商家英文回复中出现 "installation support can be arranged"</li>
                        <li>&gt; 最终报价未单列现场培训费用</li>
                        <li>&gt; 客户未确认远程 / 现场方式</li>
                      </ul>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                        查看原始记录
                      </button>
                      <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                        导出证据摘要
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* 5. 纠纷解决建议方案 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                  <Zap className="w-5 h-5 mr-2 text-teal-500" />
                  <h2 className="text-base font-bold text-slate-800">纠纷解决建议方案</h2>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Plan A */}
                  <div className="border border-teal-200 bg-teal-50/30 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                      推荐方案 A
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3">低成本快速闭环</h3>
                    <ul className="text-xs text-slate-700 space-y-2 mb-4 list-disc list-inside">
                      <li>商家补充 1 次远程培训</li>
                      <li>平台协调生成俄语培训资料</li>
                      <li>买家确认无需现场支持</li>
                    </ul>
                    <div className="flex items-center text-xs font-medium text-teal-700 bg-teal-100/50 px-2 py-1 rounded inline-flex">
                      <Clock className="w-3.5 h-3.5 mr-1" /> 预计 2 天内关闭纠纷
                    </div>
                  </div>
                  
                  {/* Plan B */}
                  <div className="border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">引入第三方补位</h3>
                    <ul className="text-xs text-slate-600 space-y-2 mb-4 list-disc list-inside">
                      <li>商家补充现场安装培训服务</li>
                      <li>平台协调本地化服务商参与</li>
                    </ul>
                    <div className="flex items-center text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded inline-flex">
                      <Clock className="w-3.5 h-3.5 mr-1" /> 预计 5 天内关闭纠纷
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* COLUMN 3: Right Sidebar (Risk & Actions) */}
          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto custom-scrollbar p-5 space-y-6 shrink-0">
            
            {/* 1. 风险评估 */}
            <div className="bg-white rounded-xl border border-rose-200 shadow-sm overflow-hidden">
              <div className="bg-rose-50 px-4 py-3 border-b border-rose-100 flex items-center justify-between">
                <div className="flex items-center">
                  <ShieldAlert className="w-4 h-4 text-rose-600 mr-2" />
                  <h3 className="text-sm font-bold text-rose-900">风险评估</h3>
                </div>
                <span className="px-2 py-0.5 bg-rose-600 text-white text-[10px] font-bold rounded">高风险</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">首次合作，信任度脆弱</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">医院/诊所设备落地使用受阻</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">存在服务边界认知差</p>
                </div>
                <div className="mt-3 pt-3 border-t border-rose-100">
                  <p className="text-xs font-bold text-rose-700 leading-relaxed">
                    若 24 小时内不处理，可能升级为退款 / 差评 / 平台投诉
                  </p>
                </div>
              </div>
            </div>

            {/* 2. 平台介入建议 */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm overflow-hidden">
              <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-100 flex items-center">
                <MessageSquare className="w-4 h-4 text-indigo-600 mr-2" />
                <h3 className="text-sm font-bold text-indigo-900">平台介入建议</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3 mb-5">
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold text-xs mr-2 mt-0.5">1.</span>
                    <span className="text-sm text-slate-700">平台先向买卖双方发起澄清，明确远程安装指导与现场安装培训的边界</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold text-xs mr-2 mt-0.5">2.</span>
                    <span className="text-sm text-slate-700">若买家接受，平台撮合补充安装培训服务</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 font-bold text-xs mr-2 mt-0.5">3.</span>
                    <span className="text-sm text-slate-700">若买家不接受，推动双方确认补偿或服务调整方案</span>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                    平台发起协调
                  </button>
                  <button className="py-2 bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg transition-colors">
                    生成澄清模板
                  </button>
                  <button className="py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                    发起服务补位
                  </button>
                  <button className="py-2 bg-white border border-rose-200 hover:bg-rose-50 text-rose-700 text-xs font-medium rounded-lg transition-colors">
                    升级高级处理
                  </button>
                </div>
              </div>
            </div>

            {/* 3. 可执行动作 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <Activity className="w-4 h-4 text-slate-600 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">可执行动作</h3>
              </div>
              <div className="p-4 space-y-2">
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  联系商家
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  联系买家
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  推送安装服务方案
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  生成平台说明
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  创建内部待办
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-rose-50 text-rose-600 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  转入高风险纠纷池
                </button>
              </div>
            </div>

            {/* 4. 处理进度 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <Clock className="w-4 h-4 text-slate-500 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">处理进度</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-200 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500">平台已联系买家</span>
                        <span className="text-[10px] text-slate-400">否</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-teal-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">平台已联系商家</span>
                        <span className="text-[10px] text-slate-500">是</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-200 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500">澄清模板已发送</span>
                        <span className="text-[10px] text-slate-400">否</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-200 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500">补位服务方案</span>
                        <span className="text-[10px] text-slate-400">待确认</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">下一关键节点：</p>
                  <p className="text-sm font-medium text-rose-600">24 小时内首次协调</p>
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

function MetricCard({ title, value, trend, alert, highlight }: any) {
  return (
    <div className={cn(
      "bg-white p-3 rounded-xl border shadow-sm flex flex-col justify-center relative overflow-hidden", 
      alert ? "border-rose-200" : highlight ? "border-amber-200" : "border-slate-200"
    )}>
      {alert && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>}
      {highlight && <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>}
      <p className="text-[10px] font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className={cn("text-xl font-bold", alert ? "text-rose-700" : highlight ? "text-amber-700" : "text-slate-900")}>{value}</h3>
        {trend && (
          <span className="text-[10px] font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

function DisputeListCard({ id, buyer, seller, country, type, status, risk, tags, active, alert, warning }: any) {
  return (
    <div className={cn(
      "p-4 rounded-xl border cursor-pointer transition-all",
      active ? "bg-indigo-50/30 border-indigo-300 shadow-sm ring-1 ring-indigo-500/20" : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm"
    )}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-bold text-slate-900 line-clamp-1 flex-1 pr-2" title={id}>{id}</h3>
        <span className={cn(
          "text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0",
          risk === '高' ? "bg-rose-100 text-rose-700" : 
          risk === '中高' ? "bg-amber-100 text-amber-700" : 
          "bg-slate-100 text-slate-600"
        )}>
          {risk}风险
        </span>
      </div>
      <p className="text-xs font-medium text-slate-800 mb-1 line-clamp-1">{buyer}</p>
      <p className="text-[10px] text-slate-500 mb-2 flex items-center">
        <Globe className="w-3 h-3 mr-1" /> {country} <span className="mx-1.5">|</span> {seller}
      </p>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">
          {type}
        </span>
        <span className={cn(
          "text-[10px] font-medium px-2 py-1 rounded border",
          alert ? "bg-rose-50 text-rose-700 border-rose-100" : 
          warning ? "bg-amber-50 text-amber-700 border-amber-100" : 
          "bg-slate-50 text-slate-600 border-slate-200"
        )}>
          {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className="px-1.5 py-0.5 bg-slate-50 text-slate-500 text-[10px] rounded border border-slate-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
