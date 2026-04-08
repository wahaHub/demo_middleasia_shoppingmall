import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Store, Box, ShoppingCart, 
  Handshake, Truck, ShieldAlert, AlertOctagon, 
  Megaphone, FileText, CreditCard, BarChart2, 
  Search, Bell, Shield, Filter, Download, 
  AlertTriangle, CheckCircle, Clock, Zap,
  ChevronRight, ArrowRight, Activity, Target,
  BriefcaseMedical, Globe, HelpCircle, Sparkles,
  UserPlus, CheckSquare, XCircle, Info
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminMatchmakingProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onOrdersClick: () => void;
  onDisputesClick: () => void;
  onVendorsClick: () => void;
}

export default function AdminMatchmaking({ onHomeClick, onDashboardClick, onOrdersClick, onDisputesClick, onVendorsClick }: AdminMatchmakingProps) {
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
              <SidebarItem icon={<Box />} label="商品管理" />
            </div>
          </div>
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">交易与履约</p>
            <div className="space-y-1">
              <SidebarItem icon={<ShoppingCart />} label="订单管理" onClick={onOrdersClick} />
              <SidebarItem icon={<Handshake />} label="交易撮合" badge="18" active />
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
        
        {/* Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">交易撮合</h1>
                <span className="px-2.5 py-0.5 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200">
                  Beta
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                识别高价值与高流失风险机会，匹配更适合的商家与服务资源，并持续推进成交。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Download className="w-4 h-4 mr-2" /> 导出撮合报表
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Target className="w-4 h-4 mr-2 text-amber-500" /> 查看高价值机会
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Clock className="w-4 h-4 mr-2 text-rose-500" /> 查看未及时回复询单
              </button>
              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Handshake className="w-4 h-4 mr-2" /> 发起人工撮合
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <MetricCard title="待撮合机会" value="24" />
            <MetricCard title="未及时回复询单" value="9" alert />
            <MetricCard title="高价值项目" value="6" highlight />
            <MetricCard title="推荐待确认" value="11" />
            <MetricCard title="已撮合推进中" value="14" />
            <MetricCard title="本月撮合成功" value="11" trend="+3" />
          </div>
        </div>

        {/* 3-COLUMN WORKSPACE */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* COLUMN 1: Opportunity List (Left) */}
          <div className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-100">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="搜索买家、需求、国家..." 
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg text-sm outline-none transition-all"
                />
              </div>
              <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-teal-500 transition-all">
                <option>全部机会</option>
                <option>未及时回复</option>
                <option>高价值项目</option>
                <option>待平台推荐</option>
                <option>多商家补位需求</option>
                <option>平台介入中</option>
              </select>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
              <OpportunityCard 
                title="Tashkent Women's Health Hospital Group"
                country="乌兹别克斯坦"
                requirement="Advanced 4D Color Doppler Ultrasound System"
                source="RFQ Basket"
                status="48小时未获有效回复"
                tags={['高价值', '医院项目', '需俄语资料']}
                active
                alert
              />
              <OpportunityCard 
                title="Kazakhstan Primary Care Procurement Package"
                country="哈萨克斯坦"
                requirement="Portable Ultrasound + Patient Monitor"
                source="AI Search"
                status="现有商家匹配度一般"
                tags={['多商品', '需多商家协同', '公共卫生']}
              />
              <OpportunityCard 
                title="Bishkek Diagnostic Clinic Network"
                country="吉尔吉斯斯坦"
                requirement="Smart Patient Monitor"
                source="商品页询盘"
                status="商家已回复但未覆盖安装支持"
                tags={['需服务补位', '潜在流失']}
                warning
              />
            </div>
          </div>

          {/* COLUMN 2: Main Content (Middle) */}
          <div className="flex-1 bg-slate-50/50 overflow-y-auto custom-scrollbar p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* 1. 需求摘要 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-slate-500" /> 需求摘要
                  </h2>
                  <span className="text-xs font-medium text-slate-500">ID: RFQ-2026-0408-A1</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">客户</p>
                      <p className="text-sm font-medium text-slate-900">Tashkent Women's Health Hospital Group</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">国家 / 客户类型</p>
                      <p className="text-sm font-medium text-slate-900 flex items-center">
                        <Globe className="w-3.5 h-3.5 mr-1 text-slate-400" /> 乌兹别克斯坦 <span className="mx-2 text-slate-300">|</span> 私立医院集团
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">需求产品</p>
                      <p className="text-sm font-medium text-slate-900">Advanced 4D Color Doppler Ultrasound System</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">预算范围</p>
                      <p className="text-sm font-bold text-teal-600">USD 80,000 – 110,000</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 mb-2">关键要求</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">俄语产品册</span>
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">安装培训支持</span>
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">45天内交付</span>
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">项目型报价</span>
                    </div>
                  </div>

                  <div className="bg-rose-50 border border-rose-100 rounded-lg p-4 flex items-start">
                    <AlertTriangle className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-rose-800 mb-1">当前问题 (流失风险)</h4>
                      <ul className="text-sm text-rose-700 space-y-1 list-disc list-inside">
                        <li>原始商家 48 小时未有效回复</li>
                        <li>安装支持未明确</li>
                        <li>注册支持未说明</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. 平台推荐商家 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <Store className="w-5 h-5 mr-2 text-slate-500" /> 平台推荐商家
                  </h2>
                  <button className="text-sm text-teal-600 font-medium hover:text-teal-700">比较三家</button>
                </div>
                <div className="p-5 space-y-4">
                  {/* Recommended Vendor 1 */}
                  <div className="border border-teal-200 bg-teal-50/30 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                      首选推荐
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">MedTech Precision Instruments</h3>
                        <div className="flex items-center mt-1 space-x-4 text-xs text-slate-500">
                          <span className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1 text-teal-500" /> 优质供应商</span>
                          <span>响应率: 98%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-teal-600">92%</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">匹配度</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 mb-1 flex items-center"><CheckSquare className="w-3.5 h-3.5 mr-1" /> 优势</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          <li>CE / ISO 13485</li>
                          <li>Europe / CIS / Central Asia 经验</li>
                          <li>支持俄语资料 & 安装培训</li>
                          <li>项目型 RFQ 响应能力强</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-teal-100/50">
                      <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                        推送给商家
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                        查看详情
                      </button>
                    </div>
                  </div>

                  {/* Recommended Vendor 2 */}
                  <div className="border border-slate-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">SonoVista Medical Systems</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-700">87%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 mb-1 flex items-center"><CheckSquare className="w-3.5 h-3.5 mr-1" /> 优势</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          <li>超声设备产品线完整</li>
                          <li>报价速度快，适合标准配置</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-600 mb-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" /> 不足</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          <li>本地安装支持较弱</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mt-3 pt-3 border-t border-slate-100">
                      <button className="text-sm text-teal-600 font-medium hover:text-teal-700">设为首选</button>
                    </div>
                  </div>

                  {/* Recommended Vendor 3 */}
                  <div className="border border-slate-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Nova Imaging Solutions</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-700">78%</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700 mb-1 flex items-center"><CheckSquare className="w-3.5 h-3.5 mr-1" /> 优势</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          <li>成本较优</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-600 mb-1 flex items-center"><AlertTriangle className="w-3.5 h-3.5 mr-1" /> 不足</p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          <li>中亚经验较少</li>
                          <li>俄语支持不明确</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. 能力匹配分析 & 4. 多商家补位 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                    <Target className="w-5 h-5 mr-2 text-slate-500" />
                    <h2 className="text-base font-bold text-slate-800">能力匹配分析</h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs text-slate-500 mb-3">本单所需核心能力：</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> 设备能力</div>
                      <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> 俄语资料支持</div>
                      <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> 安装培训</div>
                      <div className="flex items-center text-sm text-slate-700"><CheckCircle className="w-4 h-4 mr-2 text-emerald-500" /> 医院项目经验</div>
                      <div className="flex items-center text-sm text-slate-700"><AlertTriangle className="w-4 h-4 mr-2 text-amber-500" /> 45天交付能力</div>
                      <div className="flex items-center text-sm text-slate-700"><AlertTriangle className="w-4 h-4 mr-2 text-amber-500" /> 注册支持说明</div>
                    </div>
                    <div className="mt-auto bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs font-semibold text-slate-700 mb-1 flex items-center"><Info className="w-3.5 h-3.5 mr-1 text-blue-500" /> 平台判断</p>
                      <p className="text-xs text-slate-600 leading-relaxed">当前最优不是最低价商家，而是能力最完整商家。建议优先保障项目落地能力。</p>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                    <BriefcaseMedical className="w-5 h-5 mr-2 text-slate-500" />
                    <h2 className="text-base font-bold text-slate-800">多商家 / 服务补位建议</h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs text-slate-500 mb-3">推荐撮合方案：</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start">
                        <span className="w-16 shrink-0 text-xs font-medium text-slate-500 mt-0.5">主供应商</span>
                        <span className="text-sm font-medium text-slate-900">MedTech Precision Instruments</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-16 shrink-0 text-xs font-medium text-slate-500 mt-0.5">配套服务</span>
                        <span className="text-sm text-slate-700">Installation & Training Support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-16 shrink-0 text-xs font-medium text-slate-500 mt-0.5">附加支持</span>
                        <span className="text-sm text-slate-700">Russian Documentation Pack</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-16 shrink-0 text-xs font-medium text-slate-500 mt-0.5">可选补位</span>
                        <span className="text-sm text-slate-500 border-b border-dashed border-slate-300 cursor-pointer hover:text-teal-600">Registration Support Service</span>
                      </div>
                    </div>
                    <div className="mt-auto space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-700">平台建议：</span>如果客户重视交付与落地使用，建议采用“设备商家 + 服务包”的组合方案，而不是单纯推商品。
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-medium rounded-lg transition-colors border border-teal-200">
                          发起组合撮合
                        </button>
                        <button className="flex-1 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors border border-slate-200">
                          发送完整方案
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* 5. AI 推荐说明 */}
              <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 p-5">
                <h3 className="text-sm font-bold text-indigo-900 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-indigo-600" /> AI 推荐说明
                </h3>
                <p className="text-sm text-indigo-800/80 leading-relaxed">
                  本次优先推荐 MedTech Precision Instruments，原因是其在超声影像产品、俄语支持、医院项目经验和安装培训方面最符合当前 RFQ 要求。虽然部分商家报价响应可能更快，但在服务完整度和项目适配度上不如 MedTech Precision Instruments。
                </p>
              </section>

            </div>
          </div>

          {/* COLUMN 3: Right Sidebar (Risk & Actions) */}
          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto custom-scrollbar p-5 space-y-6 shrink-0">
            
            {/* 1. 流失风险提醒 */}
            <div className="bg-white rounded-xl border border-rose-200 shadow-sm overflow-hidden">
              <div className="bg-rose-50 px-4 py-3 border-b border-rose-100 flex items-center">
                <AlertOctagon className="w-4 h-4 text-rose-600 mr-2" />
                <h3 className="text-sm font-bold text-rose-900">流失风险提醒</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">该机会已 <span className="font-bold text-rose-600">48 小时</span> 未获有效回复</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">若今日内无动作，预计流失概率提升至 <span className="font-bold text-rose-600">68%</span></p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>
                  <p className="text-sm text-slate-700">客户有明确项目时间要求，适合优先介入</p>
                </div>
              </div>
            </div>

            {/* 2. 平台建议动作 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <Zap className="w-4 h-4 text-amber-500 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">平台建议动作</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3 mb-5">
                  <li className="flex items-start">
                    <CheckSquare className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">立即推送给 MedTech Precision Instruments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">同时附带安装培训服务建议</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">自动发送俄语版资料包</span>
                  </li>
                  <li className="flex items-start">
                    <CheckSquare className="w-4 h-4 text-slate-300 mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500">若 12 小时内无响应，平台二次介入</span>
                  </li>
                </ul>
                <div className="space-y-2">
                  <button className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm shadow-teal-600/20">
                    一键执行全部
                  </button>
                  <button className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                    创建跟进任务
                  </button>
                  <button className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                    平台人工介入
                  </button>
                </div>
              </div>
            </div>

            {/* 3. 撮合推进状态 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <Activity className="w-4 h-4 text-blue-500 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">撮合推进状态</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-teal-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">推荐已发送</span>
                        <span className="text-[10px] text-slate-500">2 家商家</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-teal-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">已响应</span>
                        <span className="text-[10px] text-slate-500">1 家</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-teal-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">已发送资料包</span>
                        <span className="text-[10px] text-slate-500">是</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-200 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500">买家已查看</span>
                        <span className="text-[10px] text-slate-400">待确认</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">下一关键节点：</p>
                  <p className="text-sm font-medium text-blue-600">等待商家报价</p>
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

function OpportunityCard({ title, country, requirement, source, status, tags, active, alert, warning }: any) {
  return (
    <div className={cn(
      "p-4 rounded-xl border cursor-pointer transition-all",
      active ? "bg-teal-50/30 border-teal-300 shadow-sm ring-1 ring-teal-500/20" : "bg-white border-slate-200 hover:border-teal-200 hover:shadow-sm"
    )}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-bold text-slate-900 line-clamp-1 flex-1 pr-2" title={title}>{title}</h3>
        <span className="text-[10px] text-slate-400 shrink-0">{source}</span>
      </div>
      <p className="text-xs text-slate-500 mb-2 flex items-center">
        <Globe className="w-3 h-3 mr-1" /> {country}
      </p>
      <p className="text-sm font-medium text-slate-800 mb-3 line-clamp-2">{requirement}</p>
      
      <div className={cn(
        "text-xs font-medium px-2 py-1 rounded mb-3 inline-block",
        alert ? "bg-rose-50 text-rose-700 border border-rose-100" : 
        warning ? "bg-amber-50 text-amber-700 border border-amber-100" : 
        "bg-slate-100 text-slate-600 border border-slate-200"
      )}>
        {status}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
