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
  ClipboardList, UserX, UserCheck, Star, TrendingUp,
  Award, FileWarning, History
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminVendorsProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onOrdersClick: () => void;
  onMatchmakingClick: () => void;
  onDisputesClick: () => void;
}

export default function AdminVendors({ onHomeClick, onDashboardClick, onOrdersClick, onMatchmakingClick, onDisputesClick }: AdminVendorsProps) {
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
              <SidebarItem icon={<Store />} label="商家管理" active />
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
                <h1 className="text-2xl font-bold text-slate-900">商家管理</h1>
              </div>
              <p className="text-slate-600 text-sm">
                统一管理平台商家资质、经营表现、能力标签与风险状态，支持平台推荐、撮合与扶持决策。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Download className="w-4 h-4 mr-2" /> 导出商家报表
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <AlertTriangle className="w-4 h-4 mr-2 text-rose-500" /> 查看高风险商家
              </button>
              <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Star className="w-4 h-4 mr-2 text-amber-500" /> 查看重点推荐商家
              </button>
              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <UserCheck className="w-4 h-4 mr-2" /> 新建商家审核任务
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <MetricCard title="平台商家总数" value="318" />
            <MetricCard title="待审核商家" value="7" alert />
            <MetricCard title="重点推荐商家" value="26" highlight />
            <MetricCard title="高风险商家" value="9" alert />
            <MetricCard title="低活跃商家" value="18" />
            <MetricCard title="待补资质商家" value="5" warning />
          </div>
        </div>

        {/* 3-COLUMN WORKSPACE */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* COLUMN 1: Vendor List (Left) */}
          <div className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-100">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="搜索商家名称..." 
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg text-sm outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 outline-none focus:border-teal-500 transition-all">
                  <option>按状态筛选</option>
                  <option>已审核</option>
                  <option>待审核</option>
                  <option>待补资质</option>
                </select>
                <select className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 outline-none focus:border-teal-500 transition-all">
                  <option>按风险等级</option>
                  <option>高风险</option>
                  <option>中高风险</option>
                  <option>中风险</option>
                  <option>低风险</option>
                </select>
                <select className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 outline-none focus:border-teal-500 transition-all">
                  <option>按能力标签</option>
                  <option>俄语支持</option>
                  <option>安装培训</option>
                  <option>项目型采购</option>
                </select>
                <select className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 outline-none focus:border-teal-500 transition-all">
                  <option>按重点推荐</option>
                  <option>是</option>
                  <option>否</option>
                </select>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
              <VendorListCard 
                name="MedTech Precision Instruments"
                category="Imaging & Diagnostics"
                status="已审核"
                risk="低"
                tags={['重点推荐', '中亚经验', '安装培训支持']}
                metrics={{ rfqRate: '98%', rfqTime: '2.1h', dispute: '低' }}
                active
              />
              <VendorListCard 
                name="SonoVista Medical Systems"
                category="Diagnostic Imaging"
                status="已审核"
                risk="中"
                tags={['超声设备', '报价快', '本地服务较弱']}
                metrics={{ rfqRate: '91%', rfqTime: '4.8h', dispute: '中低' }}
              />
              <VendorListCard 
                name="Nova Imaging Solutions"
                category="Imaging Systems"
                status="已审核"
                risk="中高"
                tags={['价格优势', '中亚经验较少', '待补俄语资料']}
                metrics={{ rfqRate: '76%', rfqTime: '16.2h', dispute: '中' }}
              />
              <VendorListCard 
                name="Central Med Export Alliance"
                category="Consumables & Hospital Supply"
                status="待补资质"
                risk="中"
                tags={['待审核', '认证文件待补', 'RFQ 未启用']}
                metrics={{ rfqRate: '-', rfqTime: '-', dispute: '-' }}
                warning
              />
            </div>
          </div>

          {/* COLUMN 2: Main Content (Middle) */}
          <div className="flex-1 bg-slate-50/50 overflow-y-auto custom-scrollbar p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* 1. 商家概况 & 6. 商家分层 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <section className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h2 className="text-base font-bold text-slate-800 flex items-center">
                      <Store className="w-5 h-5 mr-2 text-slate-500" /> 商家概况
                    </h2>
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded border border-emerald-200">
                      已审核
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">MedTech Precision Instruments</h3>
                        <p className="text-sm text-slate-500">Imaging & Diagnostics</p>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-xl">
                        M
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">注册时间 / 所在园区</p>
                        <p className="text-sm font-medium text-slate-900">2025-08-16 <span className="mx-1.5 text-slate-300">|</span> 国际医疗器械产业园 A 区</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">平台标签</p>
                        <p className="text-sm font-bold text-amber-600 flex items-center">
                          <Star className="w-3.5 h-3.5 mr-1 fill-current" /> 重点推荐商家
                        </p>
                      </div>
                      <div className="col-span-2 flex items-center space-x-6 pt-3 border-t border-slate-100">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-1.5" />
                          <span className="text-sm text-slate-700">海外展示已开通</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-1.5" />
                          <span className="text-sm text-slate-700">AI知识库已启用</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-1.5" />
                          <span className="text-sm text-slate-700">RFQ 支持已启用</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-amber-100/50 flex items-center bg-amber-100/30">
                    <Award className="w-5 h-5 mr-2 text-amber-600" />
                    <h2 className="text-base font-bold text-amber-900">商家分层</h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-xs text-amber-700/80 mb-2 uppercase tracking-wide font-bold">当前层级</p>
                    <h3 className="text-2xl font-black text-amber-600 mb-4">重点推荐</h3>
                    <ul className="text-xs text-amber-800/80 space-y-1.5 text-left w-full bg-white/50 p-3 rounded-lg border border-amber-100">
                      <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> 响应快</li>
                      <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> 内容完整</li>
                      <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> 纠纷低</li>
                      <li className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> 中亚项目适配度高</li>
                    </ul>
                  </div>
                </section>
              </div>

              {/* 2. 商家健康度 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-slate-500" /> 商家健康度
                  </h2>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-black text-emerald-600">92</span>
                    <span className="text-sm text-slate-400 ml-1">/ 100</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">RFQ 响应率</p>
                      <p className="text-lg font-bold text-slate-900">98%</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">平均响应时效</p>
                      <p className="text-lg font-bold text-slate-900">2.1 <span className="text-sm font-normal text-slate-500">小时</span></p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">订单履约表现</p>
                      <p className="text-lg font-bold text-emerald-600">优</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">纠纷率</p>
                      <p className="text-lg font-bold text-emerald-600">低</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">内容完整度</p>
                      <p className="text-lg font-bold text-slate-900">94%</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">海外资料完整度</p>
                      <p className="text-lg font-bold text-slate-900">91%</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2">
                      <p className="text-xs text-slate-500 mb-1">活跃度</p>
                      <p className="text-lg font-bold text-emerald-600">高</p>
                    </div>
                  </div>
                  <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 flex items-start">
                    <Sparkles className="w-5 h-5 text-teal-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-teal-900 mb-1">平台判断</h4>
                      <ul className="text-sm text-teal-800/80 space-y-1 list-disc list-inside">
                        <li>适合优先承接高价值 RFQ</li>
                        <li>适合乌兹别克斯坦 / 哈萨克斯坦医院项目</li>
                        <li>建议进入平台重点推荐池</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. 能力标签与市场适配 */}
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                  <Target className="w-5 h-5 mr-2 text-slate-500" />
                  <h2 className="text-base font-bold text-slate-800">能力标签与市场适配</h2>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-3">能力标签</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">俄语资料支持</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">安装培训支持</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">项目型采购支持</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">招投标资料支持</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">经销商合作支持</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">中亚市场经验</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">注册支持</span>
                        <div className="flex items-center text-amber-600 text-xs">
                          <AlertTriangle className="w-3.5 h-3.5 mr-1" /> 按项目确认
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700">快速交付能力</span>
                        <div className="flex items-center text-amber-600 text-xs">
                          <AlertTriangle className="w-3.5 h-3.5 mr-1" /> 需视配置而定
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-slate-900 mb-3">主要适配市场</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">乌兹别克斯坦</span>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">哈萨克斯坦</span>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">吉尔吉斯斯坦</span>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200">CIS</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-3">主要适配客户类型</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">医院采购</span>
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">私立诊所</span>
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">经销商</span>
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md border border-indigo-100">项目型采购方</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. 经营表现概览 & 5. 风险与待补项 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                    <TrendingUp className="w-5 h-5 mr-2 text-slate-500" />
                    <h2 className="text-base font-bold text-slate-800">经营表现概览 (本月)</h2>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">RFQ 数</p>
                        <p className="text-lg font-bold text-slate-900">18</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">有效报价数</p>
                        <p className="text-lg font-bold text-slate-900">12</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">订单数</p>
                        <p className="text-lg font-bold text-slate-900">7</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">高价值 RFQ 命中 (30天)</p>
                        <p className="text-lg font-bold text-teal-600">4</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-end mb-2">
                        <p className="text-xs text-slate-500">本月成交额</p>
                        <p className="text-xl font-black text-slate-900">¥2,860,000</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <p className="text-xs text-slate-500">平均订单金额</p>
                        <p className="text-sm font-bold text-slate-700">¥408,000</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center bg-slate-50/50">
                    <FileWarning className="w-5 h-5 mr-2 text-slate-500" />
                    <h2 className="text-base font-bold text-slate-800">风险与待补项</h2>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs font-bold text-slate-700 mb-2">当前待补项：</p>
                    <ul className="text-sm text-slate-600 space-y-2 mb-4 list-disc list-inside">
                      <li>2 个商品缺少俄语版说明书</li>
                      <li>1 个热门商品缺少安装培训边界说明</li>
                      <li>1 个商品注册支持表述不够明确</li>
                    </ul>
                    
                    <div className="mt-auto bg-amber-50 p-3 rounded-lg border border-amber-100">
                      <p className="text-xs font-bold text-amber-900 mb-1 flex items-center">
                        <AlertTriangle className="w-3.5 h-3.5 mr-1" /> 平台提醒
                      </p>
                      <ul className="text-xs text-amber-800/80 space-y-1 list-disc list-inside">
                        <li>若用于哈萨克斯坦公共项目，建议补充更正式的项目资料包</li>
                        <li>建议更新 Portable Diagnostic Ultrasound Unit 的俄语资料</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

            </div>
          </div>

          {/* COLUMN 3: Right Sidebar (Risk & Actions) */}
          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto custom-scrollbar p-5 space-y-6 shrink-0">
            
            {/* 1. 平台建议 */}
            <div className="bg-white rounded-xl border border-teal-200 shadow-sm overflow-hidden">
              <div className="bg-teal-50 px-4 py-3 border-b border-teal-100 flex items-center">
                <Lightbulb className="w-4 h-4 text-teal-600 mr-2" />
                <h3 className="text-sm font-bold text-teal-900">平台建议</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></div>
                    <span className="text-sm text-slate-700">将该商家加入乌兹别克斯坦重点推荐池</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></div>
                    <span className="text-sm text-slate-700">优先参与高价值影像类 RFQ 撮合</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></div>
                    <span className="text-sm text-slate-700">推动其补充俄语版安装培训资料</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></div>
                    <span className="text-sm text-slate-700">推荐进入中亚医院项目商家名单专题</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. 风险提醒 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <AlertOctagon className="w-4 h-4 text-slate-600 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">风险提醒</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">当前整体风险低</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">但 2 个商品的俄语资料不完整</p>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">若参与公共卫生项目，需补充更正式服务边界说明</p>
                </div>
              </div>
            </div>

            {/* 3. 平台可执行动作 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <Activity className="w-4 h-4 text-slate-600 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">平台可执行动作</h3>
              </div>
              <div className="p-4 space-y-2">
                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center shadow-sm">
                  加入重点推荐
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  推送撮合机会
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  发起资质补充提醒
                </button>
                <button className="w-full py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                  推送内容优化任务
                </button>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                    查看全部订单
                  </button>
                  <button className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors">
                    查看全部纠纷
                  </button>
                </div>
                <button className="w-full py-2 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors mt-2">
                  导出商家画像
                </button>
              </div>
            </div>

            {/* 4. 最近平台互动 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center">
                <History className="w-4 h-4 text-slate-500 mr-2" />
                <h3 className="text-sm font-bold text-slate-800">最近平台互动</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-teal-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">4月7日</span>
                        <span className="text-[10px] text-slate-500">已推送乌兹别克斯坦医院项目 RFQ</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-amber-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">4月6日</span>
                        <span className="text-[10px] text-slate-500">提醒补充俄语版产品资料</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-blue-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-900">4月5日</span>
                        <span className="text-[10px] text-slate-500">加入中亚重点商家池</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-slate-300 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-3 md:pl-0 md:group-even:pl-3 md:group-odd:pr-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500">4月3日</span>
                        <span className="text-[10px] text-slate-400">完成年度资质复核</span>
                      </div>
                    </div>
                  </div>
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

function MetricCard({ title, value, trend, alert, warning, highlight }: any) {
  return (
    <div className={cn(
      "bg-white p-3 rounded-xl border shadow-sm flex flex-col justify-center relative overflow-hidden", 
      alert ? "border-rose-200" : warning ? "border-amber-200" : highlight ? "border-teal-200" : "border-slate-200"
    )}>
      {alert && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>}
      {warning && <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>}
      {highlight && <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>}
      <p className="text-[10px] font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className={cn("text-xl font-bold", alert ? "text-rose-700" : warning ? "text-amber-700" : highlight ? "text-teal-700" : "text-slate-900")}>{value}</h3>
        {trend && (
          <span className="text-[10px] font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

function VendorListCard({ name, category, status, risk, tags, metrics, active, warning }: any) {
  return (
    <div className={cn(
      "p-4 rounded-xl border cursor-pointer transition-all",
      active ? "bg-teal-50/30 border-teal-300 shadow-sm ring-1 ring-teal-500/20" : "bg-white border-slate-200 hover:border-teal-200 hover:shadow-sm"
    )}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-bold text-slate-900 line-clamp-1 flex-1 pr-2" title={name}>{name}</h3>
        <span className={cn(
          "text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0",
          risk === '高' || risk === '中高' ? "bg-rose-100 text-rose-700" : 
          risk === '中' ? "bg-amber-100 text-amber-700" : 
          "bg-emerald-100 text-emerald-700"
        )}>
          {risk}风险
        </span>
      </div>
      <p className="text-[10px] text-slate-500 mb-2">{category}</p>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className={cn(
          "text-[10px] font-medium px-2 py-1 rounded border",
          warning ? "bg-amber-50 text-amber-700 border-amber-100" : 
          "bg-slate-50 text-slate-600 border-slate-200"
        )}>
          {status}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className={cn(
            "px-1.5 py-0.5 text-[10px] rounded border",
            tag === '重点推荐' ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-slate-50 text-slate-500 border-slate-100"
          )}>
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
        <div>
          <p className="text-[9px] text-slate-400 mb-0.5">RFQ响应率</p>
          <p className="text-xs font-semibold text-slate-700">{metrics.rfqRate}</p>
        </div>
        <div>
          <p className="text-[9px] text-slate-400 mb-0.5">平均时效</p>
          <p className="text-xs font-semibold text-slate-700">{metrics.rfqTime}</p>
        </div>
        <div>
          <p className="text-[9px] text-slate-400 mb-0.5">纠纷率</p>
          <p className="text-xs font-semibold text-slate-700">{metrics.dispute}</p>
        </div>
      </div>
    </div>
  );
}

// Missing icon
function Lightbulb(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}
