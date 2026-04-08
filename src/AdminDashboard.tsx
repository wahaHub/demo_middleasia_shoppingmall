import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Store, Box, ShoppingCart, 
  Handshake, Truck, ShieldAlert, AlertOctagon, 
  Megaphone, FileText, CreditCard, BarChart2, 
  Search, Bell, Plus, Download, ListTodo, 
  AlertTriangle, CheckCircle, Clock, ChevronRight,
  Activity, Shield, Zap, ArrowRight, FileCheck,
  TrendingUp, Building2, MapPin
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminDashboardProps {
  onHomeClick: () => void;
  onOrdersClick: () => void;
  onMatchmakingClick: () => void;
  onDisputesClick: () => void;
  onVendorsClick: () => void;
}

export default function AdminDashboard({ onHomeClick, onOrdersClick, onMatchmakingClick, onDisputesClick, onVendorsClick }: AdminDashboardProps) {
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
          {/* Group 1 */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">总览</p>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard />} label="平台工作台" active />
            </div>
          </div>
          {/* Group 2 */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">平台主体</p>
            <div className="space-y-1">
              <SidebarItem icon={<Users />} label="用户管理" />
              <SidebarItem icon={<Store />} label="商家管理" onClick={onVendorsClick} />
              <SidebarItem icon={<Box />} label="商品管理" />
            </div>
          </div>
          {/* Group 3 */}
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
          {/* Group 4 */}
          <div>
            <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">运营与增长</p>
            <div className="space-y-1">
              <SidebarItem icon={<Megaphone />} label="营销活动" />
              <SidebarItem icon={<FileText />} label="内容公告" />
            </div>
          </div>
          {/* Group 5 */}
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
      <main className="flex-1 ml-64 mt-16 flex flex-col overflow-hidden bg-slate-50">
        
        {/* Header & Metrics */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 shrink-0 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900">平台工作台</h1>
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-md flex items-center">
                  <Activity className="w-3 h-3 mr-1" /> 实时运营状态
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                统一管理平台用户、商家、商品、订单、撮合、纠纷与运营数据。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<Megaphone className="w-4 h-4" />} label="发布公告" />
              <ActionButton icon={<Plus className="w-4 h-4" />} label="新建活动" />
              <ActionButton icon={<Download className="w-4 h-4" />} label="导出报表" />
              <ActionButton icon={<ListTodo className="w-4 h-4" />} label="查看全部待办" primary />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <MiniMetric title="活跃用户数" value="12,486" />
            <MiniMetric title="活跃商家数" value="318" />
            <MiniMetric title="在售商品数" value="4,962" />
            <MiniMetric title="本周新增RFQ" value="126" highlight />
            <MiniMetric title="本月订单额" value="¥18,620,000" highlight />
            <MiniMetric title="待处理纠纷" value="9" alert />
            <MiniMetric title="平台撮合中项目" value="24" highlight />
            <MiniMetric title="高风险事项" value="6" alert />
          </div>
        </div>

        {/* Two Columns Layout for Workspace */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Middle: Main Workspace */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6 bg-slate-50/50">
            
            {/* 1. 重点待处理事项模块 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" /> 重点待处理事项
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                <PriorityItem 
                  title="乌兹别克斯坦医院项目 RFQ" 
                  tag1="待平台撮合" tag2="高优先级" 
                  desc="需匹配3家影像设备商家" 
                  icon={<Handshake className="w-4 h-4 text-teal-600" />}
                />
                <PriorityItem 
                  title="订单 #PL-2026-0182" 
                  tag1="物流异常" tag2="哈萨克斯坦" 
                  desc="需确认清关进度" 
                  icon={<Truck className="w-4 h-4 text-amber-600" />}
                />
                <PriorityItem 
                  title="售后纠纷 #DS-2026-0047" 
                  tag1="待平台介入" tag2="高优先级" 
                  desc="安装服务范围争议" 
                  icon={<ShieldAlert className="w-4 h-4 text-rose-600" />}
                />
                <PriorityItem 
                  title="商品合规提醒" 
                  tag1="待处理" tag2="合规" 
                  desc="2个热门商品宣传语需要调整" 
                  icon={<FileCheck className="w-4 h-4 text-indigo-600" />}
                />
              </div>
            </section>

            {/* 2. 交易撮合模块 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <Handshake className="w-5 h-5 mr-2 text-teal-600" /> 交易撮合
                </h2>
                <button className="text-sm text-teal-600 hover:text-teal-800 font-medium flex items-center">
                  查看全部撮合项目 <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <StatBox label="待撮合RFQ" value="18" highlight />
                  <StatBox label="高价值项目" value="6" highlight />
                  <StatBox label="本月撮合成功" value="11" />
                  <StatBox label="平台推荐匹配准确率" value="84%" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MatchCard 
                    title="Tashkent Women’s Health Hospital Group"
                    requirement="Advanced 4D Color Doppler Ultrasound System"
                    country="乌兹别克斯坦"
                    budget="USD 80,000–110,000"
                    suggestion="MedTech Precision Instruments / SonoVista Medical Systems"
                  />
                  <MatchCard 
                    title="Kazakhstan Primary Care Procurement Package"
                    requirement="便携式超声 + 监护设备"
                    country="哈萨克斯坦"
                    status="待确认商家响应"
                  />
                </div>
              </div>
            </section>

            {/* 3. 平台介入纠纷模块 */}
            <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <ShieldAlert className="w-5 h-5 mr-2 text-rose-600" /> 平台介入纠纷
                </h2>
                <div className="flex space-x-3">
                  <button className="text-sm text-slate-600 hover:text-slate-900 font-medium">导出处理记录</button>
                  <button className="text-sm text-rose-600 hover:text-rose-800 font-medium flex items-center">
                    查看全部纠纷 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4 mb-5">
                  <StatBox label="待介入纠纷" value="5" alert />
                  <StatBox label="处理中" value="4" />
                  <StatBox label="本月已解决" value="17" />
                  <StatBox label="高风险纠纷" value="2" alert />
                </div>
                <div className="space-y-3">
                  <DisputeCard 
                    id="#DS-2026-0047"
                    buyer="Bishkek Diagnostic Clinic Network"
                    seller="MedTech Precision Instruments"
                    issue="安装服务范围争议"
                    status="待平台判定"
                    priority="高"
                  />
                  <DisputeCard 
                    id="#DS-2026-0042"
                    buyer="Central Med Distribution LLP"
                    seller="Nova Imaging Solutions"
                    issue="交付时效与承诺不一致"
                    status="处理中"
                  />
                </div>
              </div>
            </section>

            {/* 4. 商家与商品治理概览 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <Store className="w-5 h-5 mr-2 text-indigo-600" /> 商家管理概览
                  </h2>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <GovernanceRow label="待审核商家" value="7" alert />
                    <GovernanceRow label="高活跃商家" value="26" highlight />
                    <GovernanceRow label="低活跃商家" value="18" />
                    <GovernanceRow label="待补资质商家" value="5" alert />
                  </div>
                  <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                    查看商家管理
                  </button>
                </div>
              </section>

              <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h2 className="text-base font-bold text-slate-800 flex items-center">
                    <Box className="w-5 h-5 mr-2 text-indigo-600" /> 商品管理概览
                  </h2>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <GovernanceRow label="待审核商品" value="32" />
                    <GovernanceRow label="高风险宣传商品" value="4" alert />
                    <GovernanceRow label="缺少认证信息商品" value="11" alert />
                    <GovernanceRow label="热门商品" value="27" highlight />
                  </div>
                  <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 transition-colors">
                    查看商品管理
                  </button>
                </div>
              </section>
            </div>

          </div>

          {/* Right: Sidebar */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            
            {/* 1. 平台风险提醒 */}
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-rose-600" /> 平台风险提醒
              </h3>
              <div className="space-y-3">
                <RiskItem text="2 个商品存在宣传语风险" />
                <RiskItem text="1 个哈萨克斯坦订单清关延迟" />
                <RiskItem text="1 个乌兹别克斯坦项目注册责任未明确" />
                <RiskItem text="1 个商家连续 48 小时未响应 RFQ" />
              </div>
            </div>

            {/* 2. 今日待办 */}
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <ListTodo className="w-4 h-4 mr-2 text-indigo-600" /> 今日待办
              </h3>
              <div className="space-y-2">
                <TodoItem text="审核 3 个商家入驻" />
                <TodoItem text="处理 2 个高优先级纠纷" />
                <TodoItem text="跟进 1 个高价值 RFQ 撮合" />
                <TodoItem text="发布本周平台公告" />
              </div>
            </div>

            {/* 3. 平台建议 */}
            <div className="p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-amber-500" /> 平台建议
              </h3>
              <div className="space-y-3">
                <SuggestionItem text="建议将 4D 彩超品类推到乌兹别克斯坦专题" />
                <SuggestionItem text="建议补充哈萨克斯坦公共卫生项目信息" />
                <SuggestionItem text="建议催促 2 个热门商家更新俄语资料" />
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
    )}>
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

function ActionButton({ icon, label, primary }: { icon: React.ReactNode, label: string, primary?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center",
      primary ? "bg-teal-600 hover:bg-teal-700 text-white" : "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
    )}>
      <span className={cn("mr-2", primary ? "text-white" : "text-slate-500")}>{icon}</span>
      {label}
    </button>
  );
}

function MiniMetric({ title, value, highlight, alert }: any) {
  return (
    <div className={cn("bg-white p-3 rounded-lg border shadow-sm flex flex-col justify-center", highlight ? "border-teal-200 bg-teal-50/30" : "border-slate-200", alert ? "border-rose-200 bg-rose-50/30" : "")}>
      <p className="text-[10px] font-medium text-slate-500 mb-1 truncate">{title}</p>
      <h3 className={cn("text-lg font-bold", highlight ? "text-teal-700" : alert ? "text-rose-700" : "text-slate-900")}>{value}</h3>
    </div>
  );
}

function PriorityItem({ title, tag1, tag2, desc, icon }: any) {
  return (
    <div className="p-4 flex items-start hover:bg-slate-50 transition-colors cursor-pointer group">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 shrink-0 border border-slate-200 group-hover:border-slate-300">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-1">
          <h4 className="text-sm font-bold text-slate-900 truncate mr-3">{title}</h4>
          <div className="flex space-x-2 shrink-0">
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded">{tag1}</span>
            <span className={cn("px-2 py-0.5 text-[10px] font-medium rounded", tag2 === '高优先级' ? "bg-rose-100 text-rose-700" : "bg-slate-100 text-slate-600")}>{tag2}</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 truncate">{desc}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 ml-4 shrink-0 self-center" />
    </div>
  );
}

function StatBox({ label, value, highlight, alert }: any) {
  return (
    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex flex-col justify-center">
      <p className="text-[10px] font-medium text-slate-500 mb-1">{label}</p>
      <h3 className={cn("text-xl font-bold", highlight ? "text-teal-600" : alert ? "text-rose-600" : "text-slate-800")}>{value}</h3>
    </div>
  );
}

function MatchCard({ title, requirement, country, budget, suggestion, status }: any) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:border-teal-300 transition-colors bg-white">
      <h4 className="font-bold text-slate-900 text-sm mb-3 line-clamp-1" title={title}>{title}</h4>
      <div className="space-y-2 mb-4">
        <div className="flex items-start">
          <span className="text-xs text-slate-400 w-12 shrink-0">需求：</span>
          <span className="text-xs text-slate-700 line-clamp-1" title={requirement}>{requirement}</span>
        </div>
        <div className="flex items-start">
          <span className="text-xs text-slate-400 w-12 shrink-0">国家：</span>
          <span className="text-xs text-slate-700">{country}</span>
        </div>
        {budget && (
          <div className="flex items-start">
            <span className="text-xs text-slate-400 w-12 shrink-0">预算：</span>
            <span className="text-xs text-slate-700 font-mono">{budget}</span>
          </div>
        )}
      </div>
      
      {suggestion && (
        <div className="bg-teal-50 p-2.5 rounded border border-teal-100 mb-4">
          <p className="text-[10px] text-teal-600 font-bold mb-1">建议撮合商家</p>
          <p className="text-xs text-teal-800 truncate" title={suggestion}>{suggestion}</p>
        </div>
      )}
      
      {status && (
        <div className="bg-slate-50 p-2.5 rounded border border-slate-200 mb-4">
          <p className="text-[10px] text-slate-500 font-bold mb-1">状态</p>
          <p className="text-xs text-slate-700">{status}</p>
        </div>
      )}

      <div className="flex gap-2">
        <button className="flex-1 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-md transition-colors">平台手动撮合</button>
        <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md transition-colors">推送给商家</button>
      </div>
    </div>
  );
}

function DisputeCard({ id, buyer, seller, issue, status, priority }: any) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:border-rose-300 transition-colors bg-white flex items-center justify-between">
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-mono font-bold text-slate-900 mr-3">{id}</span>
          <span className={cn("px-2 py-0.5 text-[10px] font-medium rounded mr-2", status === '待平台判定' ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700")}>{status}</span>
          {priority === '高' && <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-bold rounded">高优先级</span>}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <p className="text-[10px] text-slate-400 mb-0.5">买家</p>
            <p className="text-xs text-slate-700 truncate" title={buyer}>{buyer}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 mb-0.5">商家</p>
            <p className="text-xs text-slate-700 truncate" title={seller}>{seller}</p>
          </div>
        </div>
        <div className="flex items-start">
          <AlertOctagon className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-800 font-medium">{issue}</p>
        </div>
      </div>
      <div className="shrink-0">
        <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md transition-colors shadow-sm">
          平台介入处理
        </button>
      </div>
    </div>
  );
}

function GovernanceRow({ label, value, highlight, alert }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={cn("text-sm font-bold", highlight ? "text-teal-600" : alert ? "text-rose-600" : "text-slate-900")}>{value}</span>
    </div>
  );
}

function RiskItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>
      <p className="text-xs text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function TodoItem({ text }: { text: string }) {
  return (
    <div className="flex items-center p-2 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
      <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-indigo-500 mr-2.5 flex items-center justify-center shrink-0">
        <CheckCircle className="w-3.5 h-3.5 text-transparent group-hover:text-indigo-500" />
      </div>
      <span className="text-xs text-slate-700 group-hover:text-slate-900">{text}</span>
    </div>
  );
}

function SuggestionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start p-2.5 bg-amber-50/50 border border-amber-100 rounded-lg">
      <Zap className="w-3.5 h-3.5 text-amber-500 mr-2 shrink-0 mt-0.5" />
      <p className="text-xs text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}
