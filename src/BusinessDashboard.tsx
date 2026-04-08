import React from 'react';
import { 
  LayoutDashboard, TrendingUp, MessageSquare, ShoppingCart, 
  Settings, Box, FileText, Globe, Shield, CreditCard, 
  Bot, Bell, Search, HelpCircle, User, Plus, ArrowRight, 
  Activity, AlertCircle, CheckCircle, Clock, ChevronRight,
  Package, Truck, HeadphonesIcon, FileQuestion, UploadCloud,
  Zap, AlertTriangle, FileBarChart
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BusinessDashboardProps {
  onHomeClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
}

export default function BusinessDashboard({ onHomeClick, onAiMarketingClick, onAiKnowledgeClick, onProductManagementClick, onCrmClick, onAiManagerClick, onAiRecruitmentClick }: BusinessDashboardProps) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4 lg:px-6 shadow-sm">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={onHomeClick}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
              MedSource
            </span>
          </div>
          
          {/* Merchant Name */}
          <div className="hidden md:flex items-center px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200">
            <BuildingIcon className="w-4 h-4 text-slate-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">MedTech Precision Instruments</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          {/* Global Search */}
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
          
          {/* Group 1 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">总览</p>
            <div className="space-y-1">
              <SidebarItem icon={<LayoutDashboard />} label="工作台" active />
            </div>
          </div>

          {/* Group 2 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">经营增长</p>
            <div className="space-y-1">
              <SidebarItem icon={<SparklesIcon />} label="AI营销中心" badge="新" onClick={onAiMarketingClick} />
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
              <SidebarItem icon={<ShoppingCart />} label="订单管理" onClick={onCrmClick} />
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

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 mr-80 mt-16 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* 1. 页面头部欢迎区 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">工作台</h1>
                <span className="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-md">
                  统一管理商品、询盘、订单、营销与跨境经营
                </span>
              </div>
              <p className="text-slate-600">
                上午好，<span className="font-semibold text-slate-900">MedTech Precision Instruments</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">
                今天有 <strong className="text-blue-600">8</strong> 条新询盘、<strong className="text-rose-600">3</strong> 个高优先级 RFQ、<strong className="text-amber-600">2</strong> 个待处理售后任务。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<UploadCloud className="w-4 h-4" />} label="上传商品" />
              <ActionButton icon={<Zap className="w-4 h-4" />} label="创建营销任务" />
              <ActionButton icon={<FileText className="w-4 h-4" />} label="查看RFQ" />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
                <Bot className="w-4 h-4 mr-2" /> 唤起AI助手
              </button>
            </div>
          </div>

          {/* 2. 核心经营指标卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard title="今日新询盘" value="8" trend="+12%" trendUp />
            <MetricCard title="待处理RFQ" value="3" subtitle="高优 2" alert />
            <MetricCard title="进行中订单" value="14" />
            <MetricCard title="待发货订单" value="6" alert />
            <MetricCard title="本月销售额" value="¥1,286,000" subtitle="本月转化率 18.6%" />
            <MetricCard title="待结算金额" value="¥368,500" />
            <MetricCard title="售后工单" value="2" alert />
            <MetricCard title="AI营销线索" value="21" trend="+5%" trendUp />
          </div>

          {/* 3. 重点业务工作区 */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* A. 最新 RFQ / 采购需求 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-600" /> 最新 RFQ / 采购需求
                </h2>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">查看全部</button>
              </div>
              <div className="p-4 flex-1 space-y-4">
                <RfqItem 
                  buyer="乌兹别克斯坦私立医院集团" 
                  product="Advanced 4D Color Doppler Ultrasound System"
                  status="待报价" priority="高优先级" deadline="今天18:00截止"
                />
                <RfqItem 
                  buyer="哈萨克斯坦经销商" 
                  product="Patient Monitor + Accessories"
                  status="待确认参数"
                />
                <RfqItem 
                  buyer="吉尔吉斯斯坦诊所项目" 
                  product="Portable Ultrasound Unit"
                  status="待补充物流方案"
                />
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl flex gap-2">
                <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">一键生成报价建议</button>
                <button className="flex-1 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-medium rounded-lg transition-colors flex items-center justify-center">
                  <SparklesIcon className="w-3 h-3 mr-1" /> 让AI分析需求
                </button>
              </div>
            </div>

            {/* B. 订单履约概览 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-bold text-slate-900 flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-2 text-emerald-600" /> 订单履约概览
                </h2>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">查看全部</button>
              </div>
              <div className="p-4 flex-1 space-y-4">
                <OrderItem 
                  id="#MT-2026-1042" location="塔什干" 
                  status="待安排发货" amount="USD 86,000" alert
                />
                <OrderItem 
                  id="#MT-2026-1037" location="阿拉木图" 
                  status="运输中" amount="预计 4月12日到达"
                />
                <OrderItem 
                  id="#MT-2026-1028" location="比什凯克" 
                  status="待安装培训确认" amount="" alert
                />
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl flex gap-2">
                <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">查看订单</button>
                <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">查看物流</button>
                <button className="flex-1 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors">查看售后</button>
              </div>
            </div>

            {/* C. AI营销任务 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
              <div className="p-4 border-b border-slate-100 flex items-center justify-between relative z-10">
                <h2 className="font-bold text-slate-900 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-indigo-600" /> AI营销任务
                </h2>
              </div>
              <div className="p-4 flex-1 space-y-4 relative z-10">
                <div className="text-sm">
                  <p className="text-slate-500 mb-1">推荐市场：<span className="text-slate-900 font-medium">乌兹别克斯坦、哈萨克斯坦</span></p>
                  <p className="text-slate-500 mb-3">推荐渠道：<span className="text-slate-900 font-medium">Telegram、Instagram、当地医疗展会名单</span></p>
                  
                  <p className="font-semibold text-slate-900 mb-2">当前任务：</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md border border-slate-100">
                      <span className="text-xs text-slate-700">生成俄语版超声设备推广图</span>
                      <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">进行中</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md border border-slate-100">
                      <span className="text-xs text-slate-700">生成中亚医院触达方案</span>
                      <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">待确认</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-md border border-slate-100">
                      <span className="text-xs text-slate-700">生成渠道报价包</span>
                      <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">已完成</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-indigo-50/50 rounded-b-xl flex gap-2 relative z-10">
                <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors">进入AI营销中心</button>
                <button className="flex-1 py-2 bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg transition-colors">查看素材</button>
                <button className="flex-1 py-2 bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg transition-colors">继续生成</button>
              </div>
            </div>

          </div>

          {/* 4. 商品与AI知识库概览 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 左栏：商品概览 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-slate-900 flex items-center">
                  <Box className="w-4 h-4 mr-2 text-slate-600" /> 商品概览
                </h2>
                <div className="flex gap-2">
                  <button className="text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md transition-colors">管理商品</button>
                  <button className="text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-md transition-colors">新建商品</button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                  <p className="text-2xl font-bold text-slate-900">36</p>
                  <p className="text-xs text-slate-500 mt-1">已上架商品</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                  <p className="text-2xl font-bold text-slate-900">5</p>
                  <p className="text-xs text-slate-500 mt-1">草稿商品</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-center">
                  <p className="text-2xl font-bold text-amber-700">4</p>
                  <p className="text-xs text-amber-600 mt-1">待补充认证信息</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 mb-2">热门商品：</p>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-md border border-slate-100 truncate">Advanced 4D Color Doppler Ultrasound System</li>
                  <li className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-md border border-slate-100 truncate">Portable Diagnostic Ultrasound Unit</li>
                  <li className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-md border border-slate-100 truncate">Smart Patient Monitor</li>
                </ul>
              </div>
            </div>

            {/* 右栏：AI知识库状态 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <h2 className="font-bold text-slate-900 flex items-center">
                  <FileQuestion className="w-4 h-4 mr-2 text-blue-600" /> AI知识库状态
                </h2>
                <div className="flex gap-2">
                  <button className="text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors">进入AI知识库</button>
                  <button className="text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-md transition-colors">预览海外问答</button>
                  <button className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md transition-colors">上传新资料</button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 mb-5 relative z-10">
                <div className="col-span-1 bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                  <p className="text-lg font-bold text-slate-900">128</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">知识文档</p>
                </div>
                <div className="col-span-1 bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                  <p className="text-lg font-bold text-slate-900">86</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">FAQ条目</p>
                </div>
                <div className="col-span-1 bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                  <p className="text-lg font-bold text-slate-900">24</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">证书文档</p>
                </div>
                <div className="col-span-1 bg-emerald-50 p-2 rounded-lg border border-emerald-100 text-center">
                  <p className="text-lg font-bold text-emerald-700">91%</p>
                  <p className="text-[10px] text-emerald-600 mt-0.5">问答命中率</p>
                </div>
                <div className="col-span-1 bg-amber-50 p-2 rounded-lg border border-amber-100 text-center">
                  <p className="text-lg font-bold text-amber-700">7</p>
                  <p className="text-[10px] text-amber-600 mt-0.5">待优化问题</p>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold text-slate-900 mb-2">热门问答：</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">是否支持俄语说明书</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">是否提供安装培训</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">是否支持当地注册</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">质保期多久</span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">是否支持经销合作</span>
                </div>
              </div>
            </div>

          </div>

          {/* 5. 跨境经营与风险提醒 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">跨境经营与风险提醒</h2>
              <div className="flex gap-3">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">查看跨境支持</button>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"><Bot className="w-4 h-4 mr-1"/> 问AI管理机器人</button>
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900">查看全部风险</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 物流与交付提醒 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                <h3 className="font-bold text-slate-900 flex items-center mb-4 pb-3 border-b border-slate-100">
                  <Truck className="w-4 h-4 mr-2 text-blue-600" /> 物流与交付提醒
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>乌兹别克斯坦项目建议选择 CIF Tashkent</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 shrink-0"></div>哈萨克斯坦当前铁路时效波动增加</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>1 个订单缺少最终装箱单确认</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>1 个项目建议增加安装培训服务</li>
                </ul>
              </div>

              {/* 法规与合规提醒 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                <h3 className="font-bold text-slate-900 flex items-center mb-4 pb-3 border-b border-slate-100">
                  <Shield className="w-4 h-4 mr-2 text-emerald-600" /> 法规与合规提醒
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 shrink-0"></div>乌兹别克斯坦超声设备项目建议确认当地注册责任</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>哈萨克斯坦公立医院采购建议补充招投标支持资料</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 mr-2 shrink-0"></div>2 个商品缺少俄语版说明书文件</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2 shrink-0"></div>1 个国家市场新增税务减免项目说明</li>
                </ul>
              </div>

              {/* 财务 / 结算提醒 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                <h3 className="font-bold text-slate-900 flex items-center mb-4 pb-3 border-b border-slate-100">
                  <CreditCard className="w-4 h-4 mr-2 text-purple-600" /> 财务 / 结算提醒
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>待结算金额：<strong className="ml-1">¥368,500</strong></li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-2 shrink-0"></div>本周预计到账：<strong className="ml-1">¥122,000</strong></li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 shrink-0"></div>2 笔订单建议核对多币种汇率</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></div>1 个项目建议拆分设备报价和服务报价</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* RIGHT SIDEBAR: AI Assistant & To-Do */}
      <aside className="fixed top-16 right-0 bottom-0 w-80 bg-white border-l border-slate-200 overflow-y-auto z-40 custom-scrollbar flex flex-col">
        
        {/* 1. AI管理机器人 */}
        <div className="p-5 border-b border-slate-100 bg-gradient-to-b from-blue-50/50 to-white">
          <h2 className="font-bold text-slate-900 flex items-center mb-4">
            <Bot className="w-5 h-5 mr-2 text-blue-600" /> AI管理机器人
          </h2>
          <div className="space-y-2 mb-4">
            <ChatSuggestion text="乌兹别克斯坦这类设备要注意什么合规问题？" />
            <ChatSuggestion text="这个 RFQ 适合怎么报价？" />
            <ChatSuggestion text="这个订单适合走什么物流条款？" />
            <ChatSuggestion text="当前库存够不够支持下周交付？" />
            <ChatSuggestion text="这笔订单的结算有没有风险？" />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="请输入问题，或拖入订单/RFQ/商品进行分析"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-10 py-2.5 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-inner"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition-colors shadow-sm">
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 2. AI快捷建议 */}
        <div className="p-5 border-b border-slate-100 flex-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
            <SparklesIcon className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> AI快捷建议
          </h3>
          <div className="space-y-3">
            <SuggestionCard text="建议为乌兹别克斯坦私立医院集团 RFQ 增加注册支持服务" />
            <SuggestionCard text="建议为热门商品生成俄语版宣传册" />
            <SuggestionCard text="建议联系 3 家潜在医院采购联系人" />
            <SuggestionCard text="建议将订单 #MT-2026-1042 拆分物流与安装报价" />
          </div>
        </div>

        {/* 3. 今日待办 */}
        <div className="p-5 bg-slate-50">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
            <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> 今日待办
          </h3>
          <div className="space-y-2">
            <TodoItem text="今天18:00前提交超声设备报价" urgent />
            <TodoItem text="补充 2 个商品认证信息" />
            <TodoItem text="确认 1 笔哈萨克斯坦订单物流条款" />
            <TodoItem text="审核 AI 生成的俄语推广素材" />
          </div>
        </div>

      </aside>

    </div>
  );
}

// --- Subcomponents ---

function SidebarItem({ icon, label, active, badge, onClick }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string, onClick?: () => void }) {
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

function MetricCard({ title, value, subtitle, trend, trendUp, alert }: any) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
      {alert && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>}
      <p className="text-xs font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        {trend && (
          <span className={cn("text-xs font-medium px-1.5 py-0.5 rounded", trendUp ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50")}>
            {trend}
          </span>
        )}
      </div>
      {subtitle && <p className={cn("text-xs mt-2", alert ? "text-rose-600 font-medium" : "text-slate-500")}>{subtitle}</p>}
    </div>
  );
}

function RfqItem({ buyer, product, status, priority, deadline }: any) {
  return (
    <div className="border border-slate-100 rounded-lg p-3 bg-white hover:border-blue-200 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{buyer}</p>
        <div className="flex gap-1.5">
          {priority && <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">{priority}</span>}
          <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{status}</span>
        </div>
      </div>
      <p className="text-xs text-slate-600 mb-2 flex items-center"><Package className="w-3 h-3 mr-1 text-slate-400"/> {product}</p>
      {deadline && <p className="text-[10px] text-rose-600 flex items-center"><Clock className="w-3 h-3 mr-1"/> {deadline}</p>}
    </div>
  );
}

function OrderItem({ id, location, status, amount, alert }: any) {
  return (
    <div className="border border-slate-100 rounded-lg p-3 bg-white hover:border-emerald-200 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{id}</p>
        <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded", alert ? "text-amber-700 bg-amber-50 border border-amber-100" : "text-emerald-700 bg-emerald-50 border border-emerald-100")}>
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-slate-600">
        <p className="flex items-center"><Globe className="w-3 h-3 mr-1 text-slate-400"/> {location}</p>
        {amount && <p className="font-medium">{amount}</p>}
      </div>
    </div>
  );
}

function ChatSuggestion({ text }: { text: string }) {
  return (
    <div className="bg-white border border-blue-100 hover:border-blue-300 hover:bg-blue-50 text-slate-700 text-xs p-2 rounded-lg cursor-pointer transition-colors shadow-sm">
      {text}
    </div>
  );
}

function SuggestionCard({ text }: { text: string }) {
  return (
    <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-lg flex items-start group cursor-pointer hover:bg-amber-50 transition-colors">
      <SparklesIcon className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
      <p className="text-xs text-slate-700 leading-relaxed group-hover:text-slate-900">{text}</p>
    </div>
  );
}

function TodoItem({ text, urgent }: { text: string, urgent?: boolean }) {
  return (
    <div className="flex items-start p-2 hover:bg-white rounded-md transition-colors cursor-pointer group">
      <div className={cn("w-4 h-4 rounded border flex items-center justify-center mr-2 shrink-0 mt-0.5 transition-colors", urgent ? "border-rose-300 bg-rose-50" : "border-slate-300 bg-white group-hover:border-emerald-400")}>
      </div>
      <p className={cn("text-xs leading-relaxed", urgent ? "text-rose-700 font-medium" : "text-slate-700")}>{text}</p>
    </div>
  );
}

// Extra Icons
function BuildingIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg> }
function SparklesIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> }
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
