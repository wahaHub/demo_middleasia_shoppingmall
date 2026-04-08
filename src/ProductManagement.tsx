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
  Wand2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductManagementProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onAiKnowledgeClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
  onBusinessCustomizationClick: () => void;
}

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Advanced 4D Color Doppler Ultrasound System",
    model: "MT-Ultra4D-X9",
    category: "影像与诊断",
    markets: ["乌兹别克斯坦", "哈萨克斯坦", "医院采购"],
    status: "已上架",
    completeness: 92,
    aiAssets: "已生成 8 份",
    kbStatus: "已同步 14 条",
    rfq: "支持",
    updatedAt: "今天 10:42",
    img: "https://picsum.photos/seed/us1/100/100"
  },
  {
    id: 2,
    name: "Portable Diagnostic Ultrasound Unit",
    model: "MT-Portable-U3",
    category: "便携诊断设备",
    markets: ["吉尔吉斯斯坦", "经销商", "公共卫生项目"],
    status: "待补充认证",
    completeness: 74,
    aiAssets: "已生成 3 份",
    kbStatus: "已同步 8 条",
    rfq: "支持",
    updatedAt: "昨天 18:12",
    img: "https://picsum.photos/seed/us2/100/100"
  },
  {
    id: 3,
    name: "Smart Patient Monitor",
    model: "MT-Monitor-P8",
    category: "监护设备",
    markets: ["哈萨克斯坦", "诊所", "经销商"],
    status: "草稿",
    completeness: 61,
    aiAssets: "未生成",
    kbStatus: "未同步",
    rfq: "待配置",
    updatedAt: "4月5日",
    img: "https://picsum.photos/seed/pm1/100/100"
  }
];

export default function ProductManagement({ onHomeClick, onDashboardClick, onAiMarketingClick, onAiKnowledgeClick, onCrmClick, onAiManagerClick, onAiRecruitmentClick, onBusinessCustomizationClick }: ProductManagementProps) {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

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
              placeholder="搜索商品、型号、分类..." 
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
              <SidebarItem icon={<Box />} label="商品管理" active />
              <SidebarItem icon={<Package />} label="服务管理" />
              <SidebarItem icon={<FileQuestion />} label="AI知识库" onClick={onAiKnowledgeClick} />
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
              <SidebarItem icon={<PlaneIcon />} label="商务定制" badge="新" onClick={onBusinessCustomizationClick} />
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
      <main className={cn(
        "flex-1 ml-64 mt-16 overflow-y-auto p-6 custom-scrollbar bg-slate-50/50 transition-all duration-300",
        selectedProduct ? "mr-[600px]" : "mr-0"
      )}>
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* 1. 页面头部 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">商品管理</h1>
              </div>
              <p className="text-slate-600 text-sm">
                统一管理商品资料、认证信息、展示内容与 AI 生成素材，面向海外采购场景优化商品运营。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<Plus className="w-4 h-4" />} label="新建商品" primary />
              <ActionButton icon={<FileUp className="w-4 h-4" />} label="批量导入" />
              <ActionButton icon={<FileEdit className="w-4 h-4 text-indigo-600" />} label="AI 批量生成文案" highlight />
              <ActionButton icon={<ImageIcon className="w-4 h-4 text-indigo-600" />} label="AI 批量生成宣传图" highlight />
            </div>
          </div>

          {/* 2. 顶部概览卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <MiniMetric title="已上架商品" value="36" />
            <MiniMetric title="草稿商品" value="5" />
            <MiniMetric title="待补充认证" value="4" alert />
            <MiniMetric title="待补充多语言内容" value="7" alert />
            <MiniMetric title="已接入 AI 知识库" value="29" highlight />
            <MiniMetric title="已生成营销素材" value="68" highlight />
            <MiniMetric title="支持 RFQ 商品" value="21" />
            <MiniMetric title="本月商品询盘量" value="54" />
          </div>

          {/* 3. 商品列表区 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="搜索商品名称、型号..." 
                    className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md text-sm transition-all outline-none"
                  />
                </div>
                <FilterSelect label="分类" options={['全部', '影像与诊断', '便携诊断设备', '监护设备']} />
                <FilterSelect label="状态" options={['全部', '已上架', '草稿', '待补充认证']} />
                <FilterSelect label="市场" options={['全部', '中亚', '独联体', '中东']} />
                <FilterSelect label="支持 RFQ" options={['全部', '是', '否']} />
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-xs text-slate-500 hover:text-slate-700 flex items-center">
                  <Filter className="w-3.5 h-3.5 mr-1" /> 更多筛选
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500">
                    <th className="px-4 py-3 font-medium">商品信息</th>
                    <th className="px-4 py-3 font-medium">分类 / 市场标签</th>
                    <th className="px-4 py-3 font-medium">状态 / 完整度</th>
                    <th className="px-4 py-3 font-medium">AI 素材 / 知识库</th>
                    <th className="px-4 py-3 font-medium">RFQ</th>
                    <th className="px-4 py-3 font-medium">更新时间</th>
                    <th className="px-4 py-3 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-3">
                          <img src={product.img} alt={product.name} className="w-12 h-12 rounded-md object-cover border border-slate-200" />
                          <div>
                            <p className="font-bold text-slate-900 max-w-[200px] truncate" title={product.name}>{product.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">型号：{product.model}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-slate-700 mb-1">{product.category}</p>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {product.markets.map(m => (
                            <span key={m} className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded">{m}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col space-y-1.5">
                          <span className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium w-fit",
                            product.status === '已上架' ? "bg-emerald-50 text-emerald-700" : 
                            product.status === '待补充认证' ? "bg-rose-50 text-rose-700" : "bg-slate-100 text-slate-700"
                          )}>
                            {product.status}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-slate-100 rounded-full h-1.5">
                              <div className={cn("h-1.5 rounded-full", product.completeness > 80 ? "bg-emerald-400" : product.completeness > 60 ? "bg-amber-400" : "bg-rose-400")} style={{ width: `${product.completeness}%` }}></div>
                            </div>
                            <span className="text-[10px] text-slate-500">{product.completeness}%</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col space-y-1 text-xs">
                          <span className={cn("flex items-center", product.aiAssets.includes('已生成') ? "text-indigo-600" : "text-slate-400")}>
                            <Sparkles className="w-3 h-3 mr-1" /> {product.aiAssets}
                          </span>
                          <span className={cn("flex items-center", product.kbStatus.includes('已同步') ? "text-teal-600" : "text-slate-400")}>
                            <Database className="w-3 h-3 mr-1" /> {product.kbStatus}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn("text-xs font-medium", product.rfq === '支持' ? "text-emerald-600" : "text-amber-600")}>{product.rfq}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500">
                        {product.updatedAt}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded" title="编辑"><Edit3 className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded" title="AI 生成素材"><Wand2 className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded" title="查看海外页"><ExternalLink className="w-4 h-4" /></button>
                          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded" title="更多"><MoreHorizontal className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-200 flex justify-between items-center text-sm text-slate-500">
              <span>共 41 件商品</span>
              <div className="flex space-x-1">
                <button className="px-2 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">上一页</button>
                <button className="px-2 py-1 border border-slate-200 rounded hover:bg-slate-50">下一页</button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* RIGHT DRAWER: Product Details & AI Tools */}
      <div className={cn(
        "fixed top-16 right-0 bottom-0 w-[600px] bg-white border-l border-slate-200 shadow-2xl transform transition-transform duration-300 z-50 flex flex-col",
        selectedProduct ? "translate-x-0" : "translate-x-full"
      )}>
        {selectedProduct && (
          <>
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-900 flex items-center">
                <Box className="w-5 h-5 mr-2 text-blue-600" /> 商品详情与 AI 运营
              </h2>
              <button onClick={() => setSelectedProduct(null)} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              
              {/* 1. 基础信息 */}
              <section>
                <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                  <span className="w-1.5 h-4 bg-blue-500 rounded-full mr-2"></span> 基础信息
                </h3>
                <div className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <img src={selectedProduct.img} alt={selectedProduct.name} className="w-24 h-24 rounded-lg object-cover border border-slate-200 bg-white" />
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-1">{selectedProduct.name}</h4>
                    <p className="text-xs text-slate-500 mb-2">型号：{selectedProduct.model} | 分类：{selectedProduct.category}</p>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      高端智能彩色多普勒超声诊断系统，专为妇产科、心血管及全身应用设计，提供卓越的图像质量和智能分析工具。
                    </p>
                  </div>
                </div>
                {/* AI Tip 6: Missing Info */}
                <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg p-3 flex items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-800">
                    <span className="font-bold">AI 资料完善提示：</span>
                    <ul className="list-disc list-inside mt-1 space-y-0.5">
                      <li>缺少俄语版产品标题和卖点描述</li>
                      <li>未上传哈萨克斯坦本地注册证书</li>
                      <li>物流说明不够详细，建议补充包装尺寸与重量</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2. 多语言展示内容 */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-4 bg-indigo-500 rounded-full mr-2"></span> 多语言展示内容
                  </h3>
                  <div className="flex gap-2">
                    <AiButton icon={<Languages />} label="生成俄语版" />
                    <AiButton icon={<Sparkles />} label="优化为医院采购风格" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700">英文版 (English)</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">已完善</span>
                    </div>
                    <div className="p-3 text-sm space-y-2">
                      <p><span className="text-slate-500 text-xs">Title:</span> <span className="font-medium">Advanced 4D Color Doppler Ultrasound System</span></p>
                      <div>
                        <span className="text-slate-500 text-xs">Selling Points:</span>
                        <ul className="list-disc list-inside text-slate-700 text-xs mt-1 space-y-1">
                          <li>High-resolution 4D imaging for accurate diagnostics</li>
                          <li>AI-powered auto-measurement tools</li>
                          <li>Ergonomic design with adjustable touchscreen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border border-slate-200 rounded-lg overflow-hidden border-dashed">
                    <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700">俄语版 (Русский)</span>
                      <span className="text-[10px] text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">待补充</span>
                    </div>
                    <div className="p-4 flex justify-center items-center bg-slate-50/50">
                      <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center">
                        <Wand2 className="w-3.5 h-3.5 mr-1" /> 点击使用 AI 一键生成俄语内容
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. 认证与合规 */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-4 bg-emerald-500 rounded-full mr-2"></span> 认证与合规
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded flex items-center transition-colors">
                      <UploadCloud className="w-3.5 h-3.5 mr-1" /> 上传证书
                    </button>
                    <AiButton icon={<AlertOctagon />} label="AI 检查宣传风险" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <CertItem name="CE 认证" status="已上传" valid />
                  <CertItem name="ISO 13485" status="已上传" valid />
                  <CertItem name="本地注册支持" status="可按项目确认" />
                  <CertItem name="招投标资料" status="支持" />
                </div>
                {/* AI Tip 3: Risk Check */}
                <div className="bg-rose-50 border border-rose-100 rounded-lg p-3 flex items-start">
                  <Shield className="w-4 h-4 text-rose-500 mr-2 shrink-0 mt-0.5" />
                  <div className="text-xs text-rose-800">
                    <span className="font-bold">AI 宣传风险提示：</span>
                    <p className="mt-0.5">检测到英文描述中包含 "100% accurate diagnostics"。根据中亚医疗器械广告法规，建议避免使用绝对化或保证临床结果的宣传语。建议修改为 "highly accurate" 或 "supports precise diagnostics"。</p>
                  </div>
                </div>
              </section>

              {/* 4. AI 宣传素材 */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-4 bg-purple-500 rounded-full mr-2"></span> AI 宣传素材
                  </h3>
                  <div className="flex gap-2">
                    <AiButton icon={<ImageIcon />} label="继续生成" />
                    <button className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded flex items-center transition-colors">
                      <ExternalLink className="w-3.5 h-3.5 mr-1" /> 进入营销中心
                    </button>
                  </div>
                </div>
                <div className="flex space-x-3 overflow-x-auto pb-2 custom-scrollbar">
                  <AssetThumb name="官网横幅图" img="https://picsum.photos/seed/a1/160/90" />
                  <AssetThumb name="LinkedIn 宣传图" img="https://picsum.photos/seed/a2/160/90" />
                  <AssetThumb name="Telegram 推广图" img="https://picsum.photos/seed/a3/160/90" />
                  <AssetThumb name="医院采购海报" img="https://picsum.photos/seed/a4/160/90" />
                  <div className="w-32 shrink-0 h-[72px] border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-500 cursor-pointer transition-colors">
                    <Video className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">生成视频封面</span>
                  </div>
                </div>
              </section>

              {/* 5. 知识库联动 */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-4 bg-teal-500 rounded-full mr-2"></span> 知识库联动
                  </h3>
                  <div className="flex gap-2">
                    <AiButton icon={<FileEdit />} label="生成FAQ草稿" />
                    <button className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded flex items-center transition-colors">
                      <RefreshCw className="w-3.5 h-3.5 mr-1" /> 同步到AI知识库
                    </button>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-white p-2 rounded border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-500">已生成 FAQ</p>
                      <p className="text-lg font-bold text-teal-700">6</p>
                    </div>
                    <div className="flex-1 bg-white p-2 rounded border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-500">已绑定知识条目</p>
                      <p className="text-lg font-bold text-teal-700">14</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-700 mb-2">该商品热门问题：</p>
                    <ul className="space-y-1.5">
                      <li className="text-xs text-slate-600 flex items-center"><HelpCircle className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> 是否支持俄语说明书？</li>
                      <li className="text-xs text-slate-600 flex items-center"><HelpCircle className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> 是否提供安装培训？</li>
                      <li className="text-xs text-slate-600 flex items-center"><HelpCircle className="w-3.5 h-3.5 mr-1.5 text-slate-400" /> 发往乌兹别克斯坦多久到货？</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6. RFQ 与服务包 & AI Tip 5 */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full mr-2"></span> RFQ 与服务包
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded flex items-center transition-colors">
                      配置RFQ支持
                    </button>
                  </div>
                </div>
                
                {/* AI Tip 5: Market Recommendation */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg p-3 mb-3 flex items-start">
                  <Target className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                  <div className="text-xs text-indigo-900">
                    <span className="font-bold">AI 市场与客群推荐：</span>
                    <p className="mt-0.5">基于产品参数（高端4D彩超）和历史询盘数据，该产品更适合<span className="font-bold text-indigo-700">公立医院采购</span>或<span className="font-bold text-indigo-700">大型私立诊所</span>，而非小型经销商。建议在 RFQ 中重点突出“安装培训”和“注册支持”服务。</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-slate-700 mb-2">已配置推荐服务：</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded flex items-center"><Check className="w-3 h-3 mr-1 text-emerald-500" /> 安装培训</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded flex items-center"><Check className="w-3 h-3 mr-1 text-emerald-500" /> 注册支持</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded flex items-center"><Check className="w-3 h-3 mr-1 text-emerald-500" /> 物流清关</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded flex items-center"><Check className="w-3 h-3 mr-1 text-emerald-500" /> 俄语文档</span>
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-slate-700 mb-2">推荐采购场景：</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-[10px] rounded">医院采购</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-[10px] rounded">私立诊所</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-[10px] rounded">项目型采购</span>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </>
        )}
      </div>

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

function ActionButton({ icon, label, primary, highlight }: { icon: React.ReactNode, label: string, primary?: boolean, highlight?: boolean }) {
  return (
    <button className={cn(
      "px-3 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center",
      primary ? "bg-blue-600 hover:bg-blue-700 text-white" : 
      highlight ? "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200" :
      "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700"
    )}>
      <span className={cn("mr-2", primary ? "text-white" : highlight ? "text-indigo-600" : "text-slate-500")}>{icon}</span>
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

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="flex items-center text-xs">
      <span className="text-slate-500 mr-2">{label}:</span>
      <select className="bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-blue-500">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function AiButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 px-2 py-1.5 rounded flex items-center transition-colors">
      <span className="mr-1">{React.cloneElement(icon as React.ReactElement, { className: "w-3.5 h-3.5" })}</span>
      {label}
    </button>
  );
}

function CertItem({ name, status, valid }: { name: string, status: string, valid?: boolean }) {
  return (
    <div className="flex items-center justify-between bg-white border border-slate-200 rounded p-2 text-xs">
      <span className="text-slate-700 font-medium">{name}</span>
      <span className={cn("flex items-center", valid ? "text-emerald-600" : "text-slate-500")}>
        {valid && <CheckCircle className="w-3 h-3 mr-1" />}
        {status}
      </span>
    </div>
  );
}

function AssetThumb({ name, img }: { name: string, img: string }) {
  return (
    <div className="w-32 shrink-0 group cursor-pointer">
      <div className="h-[72px] rounded-lg overflow-hidden mb-1 relative border border-slate-200">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <p className="text-[10px] text-slate-600 truncate text-center group-hover:text-indigo-600 transition-colors">{name}</p>
    </div>
  );
}

// Extra Icons
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function PlaneIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
