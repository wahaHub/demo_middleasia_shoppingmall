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
  History, MessageSquarePlus, FileOutput, ListTodo, ShieldAlert
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AiManagerBotProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiRecruitmentClick: () => void;
  onBusinessCustomizationClick: () => void;
}

export default function AiManagerBot({ 
  onHomeClick, 
  onDashboardClick, 
  onAiMarketingClick, 
  onAiKnowledgeClick, 
  onProductManagementClick,
  onCrmClick,
  onAiRecruitmentClick,
  onBusinessCustomizationClick
}: AiManagerBotProps) {
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
              placeholder="搜索分析记录、订单、商品..." 
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
              <SidebarItem icon={<PlaneIcon />} label="商务定制" badge="新" onClick={onBusinessCustomizationClick} />
            </div>
          </div>
          {/* Group 7 */}
          <div>
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">智能助手</p>
            <div className="space-y-1">
              <SidebarItem icon={<Bot />} label="AI管理机器人" active />
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
                <h1 className="text-2xl font-bold text-slate-900">AI管理机器人</h1>
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-md flex items-center">
                  <Bot className="w-3 h-3 mr-1" /> 智能经营中枢
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                围绕财务、结算、库存、物流、法规与跨境经营，提供智能分析、风险提示与执行建议。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<MessageSquarePlus className="w-4 h-4" />} label="新建分析" primary />
              <ActionButton icon={<UploadCloud className="w-4 h-4" />} label="上传订单 / RFQ" />
              <ActionButton icon={<History className="w-4 h-4" />} label="查看历史会话" />
              <ActionButton icon={<FileOutput className="w-4 h-4" />} label="导出分析结果" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <MiniMetric title="今日待分析事项" value="9" />
            <MiniMetric title="高风险提醒" value="3" alert />
            <MiniMetric title="待处理结算问题" value="2" alert />
            <MiniMetric title="物流异常预警" value="1" alert />
            <MiniMetric title="合规提醒" value="4" />
            <MiniMetric title="AI 已生成建议" value="17" highlight />
          </div>
        </div>

        {/* Three Columns Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Column 1: Scenario Menu */}
          <div className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            <div className="p-4 space-y-6">
              
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">常用分析</p>
                <div className="space-y-1">
                  <ScenarioItem label="经营总览" icon={<PieChart />} />
                  <ScenarioItem label="财务与结算" icon={<CreditCard />} />
                  <ScenarioItem label="库存与供货" icon={<LayersIcon />} />
                  <ScenarioItem label="物流与履约" icon={<Truck />} />
                  <ScenarioItem label="合规与法规" icon={<ShieldAlert />} />
                  <ScenarioItem label="RFQ / 报价分析" icon={<FileText />} />
                  <ScenarioItem label="客户与订单风险" icon={<AlertTriangle />} />
                  <ScenarioItem label="跨境经营建议" icon={<Globe />} />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">快捷场景</p>
                <div className="space-y-1">
                  <ScenarioItem label="分析一个订单" icon={<ShoppingCart />} />
                  <ScenarioItem label="分析一个 RFQ" icon={<FileQuestion />} />
                  <ScenarioItem label="分析一个商品" icon={<Box />} />
                  <ScenarioItem label="分析一个国家市场" icon={<MapIcon />} />
                  <ScenarioItem label="检查本周风险" icon={<AlertOctagon />} />
                  <ScenarioItem label="生成经营建议" icon={<Sparkles />} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <QuickCard icon={<ShoppingCart className="w-4 h-4 text-blue-500" />} title="分析订单" desc="识别履约风险" />
                <QuickCard icon={<FileText className="w-4 h-4 text-indigo-500" />} title="分析 RFQ" desc="评估报价可行性" />
                <QuickCard icon={<Box className="w-4 h-4 text-teal-500" />} title="分析商品" desc="检查合规与素材" />
                <QuickCard icon={<Globe className="w-4 h-4 text-rose-500" />} title="分析市场" desc="获取准入建议" />
              </div>

            </div>
          </div>

          {/* Column 2: Main Chat & Analysis Area */}
          <div className="flex-1 flex flex-col bg-slate-50/50 min-w-[500px]">
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
              
              {/* Conversation 1: Order Analysis */}
              <div className="space-y-4">
                {/* User Query */}
                <div className="flex items-start justify-end space-x-3">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 shadow-sm text-sm max-w-xl">
                    帮我分析一下订单 #MT-2026-1042，有没有物流、结算和安装方面的风险？
                  </div>
                  <div className="w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    ME
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-4">
                    {/* Natural Language Summary */}
                    <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm text-sm text-slate-700 leading-relaxed">
                      订单 <span className="font-semibold text-indigo-600">#MT-2026-1042</span> 当前整体可执行，但在物流条款、安装范围和服务报价拆分方面存在中等风险。建议在发货前确认最终交付城市数量，并将安装培训服务从设备报价中独立列出，以便后续结算和项目管理更清晰。
                    </div>

                    {/* Structured Analysis Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <AnalysisCard title="订单概况" icon={<ShoppingCart className="w-4 h-4 text-blue-500" />}>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between"><span className="text-slate-500">订单号：</span><span className="font-medium">MT-2026-1042</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">目的地：</span><span className="font-medium">塔什干，乌兹别克斯坦</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">金额：</span><span className="font-medium text-emerald-600">USD 86,000</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">产品：</span><span className="font-medium truncate max-w-[120px]" title="Advanced 4D Color Doppler Ultrasound System">Advanced 4D Color...</span></div>
                          <div className="flex justify-between"><span className="text-slate-500">当前状态：</span><span className="font-medium text-amber-600">待安排发货</span></div>
                        </div>
                      </AnalysisCard>
                      
                      <AnalysisCard title="物流风险" icon={<Truck className="w-4 h-4 text-amber-500" />} alert>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between"><span className="text-slate-500">推荐条款：</span><span className="font-medium">CIF Tashkent</span></div>
                          <div className="flex flex-col mt-1">
                            <span className="text-rose-600 font-medium flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> 当前风险：</span>
                            <span className="text-slate-700 mt-0.5">最终交付点数量未确认</span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="text-teal-600 font-medium flex items-center"><Sparkles className="w-3 h-3 mr-1" /> 建议：</span>
                            <span className="text-slate-700 mt-0.5">确认是否存在多院区交付</span>
                          </div>
                        </div>
                      </AnalysisCard>

                      <AnalysisCard title="结算建议" icon={<CreditCard className="w-4 h-4 text-emerald-500" />}>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex flex-col">
                            <span className="text-teal-600 font-medium flex items-center"><Sparkles className="w-3 h-3 mr-1" /> 建议：</span>
                            <span className="text-slate-700 mt-0.5">建议将设备报价和安装培训服务报价拆分</span>
                          </div>
                          <div className="flex justify-between mt-1"><span className="text-slate-500">当前多币种换汇风险：</span><span className="font-medium text-emerald-600">低</span></div>
                          <div className="flex flex-col mt-1">
                            <span className="text-amber-600 font-medium flex items-center"><HelpCircle className="w-3 h-3 mr-1" /> 待确认：</span>
                            <span className="text-slate-700 mt-0.5">是否包含现场培训费用</span>
                          </div>
                        </div>
                      </AnalysisCard>

                      <AnalysisCard title="服务与安装" icon={<Shield className="w-4 h-4 text-indigo-500" />} alert>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex items-start"><CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0 mt-0.5" /><span className="text-slate-700">客户已明确需要安装支持</span></div>
                          <div className="flex items-start"><AlertTriangle className="w-3.5 h-3.5 text-rose-500 mr-1.5 shrink-0 mt-0.5" /><span className="text-slate-700">但安装范围未写入最终报价说明</span></div>
                          <div className="flex items-start mt-1"><Sparkles className="w-3.5 h-3.5 text-teal-500 mr-1.5 shrink-0 mt-0.5" /><span className="text-slate-700">建议补充培训人数、现场天数和语言要求</span></div>
                        </div>
                      </AnalysisCard>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <AiActionButton icon={<MessageSquarePlus />} label="生成客户回复建议" />
                      <AiActionButton icon={<ListTodo />} label="生成内部跟进任务" />
                      <AiActionButton icon={<FileOutput />} label="导出订单风险摘要" />
                      <AiActionButton icon={<Send />} label="推送给物流负责人" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversation 2: Compliance Analysis */}
              <div className="space-y-4">
                {/* User Query */}
                <div className="flex items-start justify-end space-x-3">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 shadow-sm text-sm max-w-xl">
                    这个商品现在用于乌兹别克斯坦医院项目推广，有没有宣传合规风险？
                  </div>
                  <div className="w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    ME
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-4">
                    {/* Natural Language Summary */}
                    <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm text-sm text-slate-700 leading-relaxed">
                      当前商品素材整体可用于一般产品介绍，但部分宣传语存在<span className="font-semibold text-rose-600">绝对化效果表达风险</span>，不建议直接用于医院采购或项目型宣传。建议改成更中性的技术和应用描述，并补充认证与服务支持说明。
                    </div>

                    {/* Structured Analysis Cards */}
                    <div className="bg-white border border-rose-200 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-rose-700 font-bold text-sm">
                          <AlertOctagon className="w-4 h-4 mr-1.5" /> 合规风险分析
                        </div>
                        <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-xs font-bold rounded">风险等级：中</span>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-slate-500 text-xs block mb-1">风险点：</span>
                          <p className="text-slate-800 font-medium">出现绝对化宣传语、认证展示不足、缺少服务范围说明</p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                          <span className="text-teal-700 font-bold text-xs flex items-center mb-2">
                            <Sparkles className="w-3.5 h-3.5 mr-1" /> 建议改写文案：
                          </span>
                          <ul className="space-y-2 text-slate-700 text-xs">
                            <li className="flex items-start">
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0 mt-0.5" />
                              <span>将 <span className="line-through text-rose-500">"industry-leading diagnostic performance"</span> 改为更中性表达 <span className="font-medium text-teal-600">"advanced diagnostic capabilities"</span></span>
                            </li>
                            <li className="flex items-start">
                              <Plus className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0 mt-0.5" />
                              <span>增加 <span className="font-medium text-emerald-700">"CE / ISO 13485 certified"</span></span>
                            </li>
                            <li className="flex items-start">
                              <Plus className="w-3.5 h-3.5 text-emerald-500 mr-1.5 shrink-0 mt-0.5" />
                              <span>增加 <span className="font-medium text-emerald-700">"installation and training support available"</span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <AiActionButton icon={<Edit3 />} label="一键改写文案" primary />
                      <AiActionButton icon={<RefreshCw />} label="同步到商品管理" />
                      <AiActionButton icon={<Share2 />} label="推送到AI营销中心" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <div className="relative flex items-center">
                <button className="absolute left-3 p-1.5 text-slate-400 hover:text-slate-600 rounded-md transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="输入订单号、RFQ、或描述您想分析的业务问题..." 
                  className="w-full pl-11 pr-12 py-3 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl text-sm transition-all outline-none"
                />
                <button className="absolute right-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-2 px-2">
                <span className="text-[10px] text-slate-400">快捷指令：</span>
                <button className="text-[10px] text-indigo-600 hover:text-indigo-800">/分析订单</button>
                <button className="text-[10px] text-indigo-600 hover:text-indigo-800">/检查合规</button>
                <button className="text-[10px] text-indigo-600 hover:text-indigo-800">/生成建议</button>
              </div>
            </div>
          </div>

          {/* Column 3: Risks & Actions */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            
            {/* 1. Current High Risk Alerts */}
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <AlertOctagon className="w-4 h-4 mr-2 text-rose-600" /> 当前高风险提醒
              </h3>
              <div className="space-y-2">
                <RiskItem 
                  title="订单 #MT-2026-1042" 
                  desc="安装范围未明确" 
                />
                <RiskItem 
                  title="商品 Portable Diagnostic..." 
                  desc="缺少俄语说明书" 
                />
                <RiskItem 
                  title="乌兹别克斯坦项目 RFQ" 
                  desc="注册责任未确认" 
                />
              </div>
            </div>

            {/* 2. AI Recommended Actions */}
            <div className="p-5 border-b border-slate-100 bg-indigo-50/30">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-indigo-600" /> AI 推荐动作
              </h3>
              <div className="space-y-3">
                <ActionItem text="建议将订单 #MT-2026-1042 拆分设备与服务报价" />
                <ActionItem text="建议为 2 个热门商品补充俄语版说明资料" />
                <ActionItem text="建议给哈萨克斯坦经销商线索发送认证资料包" />
                <ActionItem text="建议为乌兹别克斯坦医院项目补充注册支持说明" />
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                  一键创建任务
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">推送到相关页面</button>
                  <button className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-md">查看详情</button>
                </div>
              </div>
            </div>

            {/* 3. Today's To-Dos */}
            <div className="p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center">
                <ListTodo className="w-4 h-4 mr-2 text-teal-600" /> 今日待办
              </h3>
              <div className="space-y-2">
                <TodoItem text="审核 1 条高风险宣传语" />
                <TodoItem text="确认 2 笔订单物流条款" />
                <TodoItem text="补充 1 个 RFQ 的质保条款" />
                <TodoItem text="处理 1 个待结算提醒" />
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

function ScenarioItem({ label, icon }: { label: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-600 hover:bg-slate-100 hover:text-slate-900 group">
      <span className="w-4 h-4 mr-3 flex items-center justify-center text-slate-400 group-hover:text-indigo-500 transition-colors">
        {React.cloneElement(icon as React.ReactElement, { className: "w-3.5 h-3.5" })}
      </span>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function QuickCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 p-2.5 rounded-lg cursor-pointer transition-colors">
      <div className="flex items-center mb-1">
        {icon}
        <span className="text-xs font-bold text-slate-800 ml-1.5">{title}</span>
      </div>
      <p className="text-[10px] text-slate-500">{desc}</p>
    </div>
  );
}

function AnalysisCard({ title, icon, children, alert }: { title: string, icon: React.ReactNode, children: React.ReactNode, alert?: boolean }) {
  return (
    <div className={cn("bg-white border rounded-xl p-3 shadow-sm", alert ? "border-rose-200" : "border-slate-200")}>
      <div className="flex items-center mb-2 pb-2 border-b border-slate-100">
        {icon}
        <span className="text-xs font-bold text-slate-800 ml-1.5">{title}</span>
      </div>
      {children}
    </div>
  );
}

function AiActionButton({ icon, label, primary }: { icon: React.ReactNode, label: string, primary?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center border",
      primary ? "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
    )}>
      <span className={cn("mr-1.5", primary ? "text-white" : "text-indigo-600")}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-3.5 h-3.5" })}
      </span>
      {label}
    </button>
  );
}

function RiskItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-rose-50 border border-rose-100 rounded-lg p-2.5 flex items-start">
      <AlertTriangle className="w-3.5 h-3.5 text-rose-500 mr-2 shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-bold text-rose-900 leading-tight">{title}</p>
        <p className="text-[10px] text-rose-700 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function ActionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start bg-white border border-indigo-100 rounded-lg p-2.5 shadow-sm">
      <Sparkles className="w-3.5 h-3.5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
      <p className="text-xs text-slate-700 leading-tight">{text}</p>
    </div>
  );
}

function TodoItem({ text }: { text: string }) {
  return (
    <div className="flex items-center p-2 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors">
      <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-teal-500 mr-2.5 flex items-center justify-center shrink-0">
        <Check className="w-3 h-3 text-transparent group-hover:text-teal-500" />
      </div>
      <span className="text-xs text-slate-700 group-hover:text-slate-900">{text}</span>
    </div>
  );
}

// Extra Icons
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function PlaneIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
