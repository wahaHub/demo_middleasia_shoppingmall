import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Store, Box, ShoppingCart, 
  Handshake, Truck, ShieldAlert, AlertOctagon, 
  Megaphone, FileText, CreditCard, BarChart2, 
  Search, Bell, Shield, Filter, Download, Eye,
  ChevronLeft, ChevronRight, MoreVertical, Calendar,
  AlertTriangle, CheckCircle, Clock, Package
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminOrderManagementProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onMatchmakingClick: () => void;
  onDisputesClick: () => void;
  onVendorsClick: () => void;
}

const ORDERS = [
  {
    id: "ORD-2026-8832",
    date: "2026-04-08 10:23",
    buyer: "Tashkent City Hospital",
    buyerCountry: "乌兹别克斯坦",
    seller: "MedTech Precision Instruments",
    product: "Advanced 4D Color Doppler Ultrasound System",
    amount: "¥ 580,000",
    status: "已发货",
    logistics: "正常",
  },
  {
    id: "ORD-2026-8831",
    date: "2026-04-07 15:45",
    buyer: "Almaty Central Clinic",
    buyerCountry: "哈萨克斯坦",
    seller: "SinoCare Medical Devices",
    product: "Multi-parameter Patient Monitor (x10)",
    amount: "¥ 125,000",
    status: "待发货",
    logistics: "待揽收",
  },
  {
    id: "ORD-2026-8829",
    date: "2026-04-05 09:12",
    buyer: "Bishkek Diagnostic Network",
    buyerCountry: "吉尔吉斯斯坦",
    seller: "Nova Imaging Solutions",
    product: "Digital X-Ray Machine",
    amount: "¥ 420,000",
    status: "纠纷中",
    logistics: "清关延迟",
  },
  {
    id: "ORD-2026-8825",
    date: "2026-04-02 14:30",
    buyer: "Dushanbe Health Center",
    buyerCountry: "塔吉克斯坦",
    seller: "CareEquip Manufacturing",
    product: "Hospital Bed ICU Type (x20)",
    amount: "¥ 180,000",
    status: "已完成",
    logistics: "已签收",
  },
  {
    id: "ORD-2026-8820",
    date: "2026-03-28 11:05",
    buyer: "Astana Medical Hub",
    buyerCountry: "哈萨克斯坦",
    seller: "BioTest Diagnostics Park",
    product: "IVD Reagents Bulk Package",
    amount: "¥ 85,000",
    status: "已发货",
    logistics: "运输中",
  }
];

export default function AdminOrderManagement({ onHomeClick, onDashboardClick, onMatchmakingClick, onDisputesClick, onVendorsClick }: AdminOrderManagementProps) {
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
              <SidebarItem icon={<LayoutDashboard />} label="平台工作台" onClick={onDashboardClick} />
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
              <SidebarItem icon={<ShoppingCart />} label="订单管理" active />
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
                <h1 className="text-2xl font-bold text-slate-900">订单管理</h1>
              </div>
              <p className="text-slate-600 text-sm">
                全局监控平台交易订单，处理物流异常与履约风险。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center shadow-sm">
                <Download className="w-4 h-4 mr-2" /> 导出订单报表
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard title="今日新增订单" value="24" trend="+12%" />
            <MetricCard title="待发货订单" value="156" />
            <MetricCard title="物流异常" value="8" alert />
            <MetricCard title="售后/纠纷中" value="12" alert />
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col min-h-full">
            
            {/* Filters */}
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex flex-wrap gap-3 items-center">
                <div className="relative w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="搜索订单号、买家、商家..." 
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-lg text-sm outline-none transition-all"
                  />
                </div>
                <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-teal-500 transition-all">
                  <option>所有状态</option>
                  <option>待付款</option>
                  <option>待发货</option>
                  <option>已发货</option>
                  <option>已完成</option>
                  <option>纠纷中</option>
                </select>
                <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-slate-400" /> 日期范围
                </button>
                <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-slate-400" /> 更多筛选
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">订单信息</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">买家 / 国家</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">商家</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">订单金额</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">状态</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">物流状态</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ORDERS.map((order, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-4 py-4">
                        <div className="font-mono text-sm font-medium text-slate-900">{order.id}</div>
                        <div className="text-xs text-slate-500 mt-1">{order.date}</div>
                        <div className="text-xs text-slate-600 mt-1.5 line-clamp-1 max-w-[200px]" title={order.product}>{order.product}</div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-slate-900">{order.buyer}</div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-1.5"></span>
                          {order.buyerCountry}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-slate-700">{order.seller}</div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-bold text-slate-900">{order.amount}</div>
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-4">
                        <LogisticsBadge status={order.logistics} />
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors" title="查看详情">
                            <Eye className="w-4 h-4" />
                          </button>
                          {order.status === '纠纷中' && (
                            <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors" title="平台介入">
                              <ShieldAlert className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-b-xl">
              <span className="text-sm text-slate-500">显示 1 到 5 条，共 1,248 条记录</span>
              <div className="flex space-x-1">
                <button className="p-1.5 rounded border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-white disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
                <button className="px-3 py-1.5 rounded bg-teal-50 text-teal-600 font-medium text-sm border border-teal-100">1</button>
                <button className="px-3 py-1.5 rounded text-slate-600 hover:bg-slate-100 font-medium text-sm">2</button>
                <button className="px-3 py-1.5 rounded text-slate-600 hover:bg-slate-100 font-medium text-sm">3</button>
                <span className="px-2 py-1.5 text-slate-400">...</span>
                <button className="px-3 py-1.5 rounded text-slate-600 hover:bg-slate-100 font-medium text-sm">250</button>
                <button className="p-1.5 rounded border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white"><ChevronRight className="w-4 h-4" /></button>
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

function MetricCard({ title, value, trend, alert }: any) {
  return (
    <div className={cn(
      "bg-white p-4 rounded-xl border shadow-sm flex flex-col justify-center relative overflow-hidden", 
      alert ? "border-rose-200" : "border-slate-200"
    )}>
      {alert && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>}
      <p className="text-xs font-medium text-slate-500 mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className={cn("text-2xl font-bold", alert ? "text-rose-700" : "text-slate-900")}>{value}</h3>
        {trend && (
          <span className="text-xs font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  let colorClass = "bg-slate-100 text-slate-600";
  
  if (status === '已完成') colorClass = "bg-emerald-50 text-emerald-700 border border-emerald-200";
  if (status === '已发货') colorClass = "bg-blue-50 text-blue-700 border border-blue-200";
  if (status === '待发货') colorClass = "bg-amber-50 text-amber-700 border border-amber-200";
  if (status === '纠纷中') colorClass = "bg-rose-50 text-rose-700 border border-rose-200";

  return (
    <span className={cn("px-2.5 py-1 text-xs font-medium rounded-md", colorClass)}>
      {status}
    </span>
  );
}

function LogisticsBadge({ status }: { status: string }) {
  let colorClass = "text-slate-500";
  let Icon = Package;
  
  if (status === '正常' || status === '已签收') {
    colorClass = "text-emerald-600";
    Icon = CheckCircle;
  }
  if (status === '运输中') {
    colorClass = "text-blue-600";
    Icon = Truck;
  }
  if (status === '待揽收') {
    colorClass = "text-amber-600";
    Icon = Clock;
  }
  if (status === '清关延迟' || status === '异常') {
    colorClass = "text-rose-600";
    Icon = AlertTriangle;
  }

  return (
    <div className={cn("flex items-center text-xs font-medium", colorClass)}>
      <Icon className="w-3.5 h-3.5 mr-1.5" />
      {status}
    </div>
  );
}
