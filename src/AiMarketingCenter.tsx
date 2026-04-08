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
  ShieldCheck
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AiMarketingCenterProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiKnowledgeClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
}

const MOCK_PLANS = [
  { id: 1, title: 'Telegram 俄语短文案', type: '社交媒体', desc: '适合快速传播的短图文，强调现货与注册证。', img: 'https://picsum.photos/seed/p1/400/300' },
  { id: 2, title: 'LinkedIn 英文长文案', type: '商务拓展', desc: '面向医院管理层的专业设备介绍，突出技术优势。', img: 'https://picsum.photos/seed/p2/400/300' },
  { id: 3, title: 'Instagram 视觉海报', type: '品牌曝光', desc: '高对比度产品图，适合移动端视觉冲击。', img: 'https://picsum.photos/seed/p3/400/300' },
  { id: 4, title: '医院采购邮件模板', type: '邮件营销', desc: '正式的商业邮件，包含详细参数附件引导。', img: 'https://picsum.photos/seed/p4/400/300' },
  { id: 5, title: '经销商招募单页', type: '渠道拓展', desc: '强调利润空间与独家代理政策的招募海报。', img: 'https://picsum.photos/seed/p5/400/300' },
  { id: 6, title: 'WhatsApp 快速问候', type: '即时通讯', desc: '简短的破冰话术，带产品缩略图。', img: 'https://picsum.photos/seed/p6/400/300' },
  { id: 7, title: 'Facebook 广告文案', type: '付费投放', desc: '针对中亚地区精准定向的转化向广告。', img: 'https://picsum.photos/seed/p7/400/300' },
  { id: 8, title: '展会邀请函', type: '线下活动', desc: 'KIHE哈萨克斯坦医疗展定向邀请海报。', img: 'https://picsum.photos/seed/p8/400/300' },
  { id: 9, title: '产品参数对比图', type: '竞品分析', desc: '直观展示与竞品的核心参数优势对比。', img: 'https://picsum.photos/seed/p9/400/300' },
];

export default function AiMarketingCenter({ onHomeClick, onDashboardClick, onAiKnowledgeClick, onProductManagementClick, onCrmClick, onAiManagerClick, onAiRecruitmentClick }: AiMarketingCenterProps) {
  const [activeAssetTab, setActiveAssetTab] = useState('image');
  const [activeLeadTab, setActiveLeadTab] = useState('hospital');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
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
              placeholder="搜索营销任务、素材、客户线索..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg text-sm transition-all outline-none"
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
              <SidebarItem icon={<Sparkles />} label="AI营销中心" active badge="新" />
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
      <main className="flex-1 ml-64 mr-80 mt-16 overflow-y-auto p-8 custom-scrollbar bg-slate-50/50">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* 1. 页面头部 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">AI营销中心</h1>
                <span className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-md flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" /> AI 驱动
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                围绕中亚市场，一站式生成营销素材、投放方案、渠道触达与采购机会情报
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<UploadCloud className="w-4 h-4" />} label="上传产品资料" />
              <ActionButton icon={<ImagePlusIcon className="w-4 h-4" />} label="生成图片/视频" />
              <ActionButton icon={<Share2 className="w-4 h-4" />} label="一键发布" />
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" /> 新建营销任务
              </button>
            </div>
          </div>

          {/* 2. 顶部营销概览卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard title="本月生成素材" value="126" trend="+24%" trendUp />
            <MetricCard title="已生成图片" value="68" />
            <MetricCard title="已生成视频脚本" value="19" />
            <MetricCard title="已发布渠道内容" value="37" trend="+12%" trendUp />
            <MetricCard title="新发现潜在线索" value="54" highlight />
            <MetricCard title="新发现医院/机构" value="18" highlight />
            <MetricCard title="政府采购/公共卫生" value="7" alert />
            <MetricCard title="预计营销预算" value="¥82,000" />
          </div>

          {/* 3. 营销任务配置区 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
            {/* Left Config */}
            <div className="w-full lg:w-1/3 border-r border-slate-200 p-5 bg-slate-50/50">
              <h2 className="font-bold text-slate-900 mb-4 flex items-center">
                <Settings className="w-4 h-4 mr-2 text-indigo-600" /> 营销任务配置
              </h2>
              <div className="space-y-4">
                <ConfigSelect label="产品选择" value="Advanced 4D Color Doppler Ultrasound System" />
                <ConfigSelect label="目标国家" value="乌兹别克斯坦" />
                <ConfigSelect label="目标客群" value="医院采购" />
                <ConfigSelect label="营销目标" value="RFQ询盘获取" />
                <ConfigSelect label="内容类型" value="Telegram推广文案" />
                <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center mt-2">
                  <Sparkles className="w-4 h-4 mr-2" /> 开始生成
                </button>
              </div>
            </div>
            {/* Right Preview */}
            <div className="w-full lg:w-2/3 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-bold text-slate-900 flex items-center">
                    <FileEdit className="w-4 h-4 mr-2 text-indigo-600" /> 生成结果预览
                  </h2>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> 
                    生成结果符合中亚各国医疗法律法规要求
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors">多语言切换</button>
                  <button className="text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-md transition-colors">渠道适配建议</button>
                </div>
              </div>
              <div className="flex-1 bg-slate-100 rounded-lg border border-slate-200 p-4 relative">
                <div className="grid grid-cols-3 gap-3 h-full">
                  {MOCK_PLANS.map((plan, idx) => (
                    <div 
                      key={plan.id}
                      className="bg-white border border-slate-200 rounded-lg p-2 cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all flex flex-col group"
                      onMouseEnter={() => setHoveredPlan(idx)}
                      onMouseLeave={() => setHoveredPlan(null)}
                    >
                      <div className="flex-1 bg-slate-50 rounded mb-2 overflow-hidden relative min-h-[80px]">
                        <img src={plan.img} alt={plan.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs font-bold text-slate-800 truncate">{plan.title}</p>
                      <p className="text-[10px] text-slate-500 truncate mt-0.5">{plan.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. AI素材生成区 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-900 flex items-center">
                <ImageIcon className="w-4 h-4 mr-2 text-indigo-600" /> AI素材库
              </h2>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                {['image', 'video', 'copy', 'template'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveAssetTab(tab)}
                    className={cn(
                      "px-4 py-1.5 text-xs font-medium rounded-md transition-colors",
                      activeAssetTab === tab ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {tab === 'image' && '图片素材'}
                    {tab === 'video' && '视频素材'}
                    {tab === 'copy' && '文案素材'}
                    {tab === 'template' && '触达模板'}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AssetCard 
                title="俄语版医院采购海报" 
                img="https://picsum.photos/seed/poster1/300/400" 
                type="image"
              />
              <AssetCard 
                title="Telegram 渠道推广图" 
                img="https://picsum.photos/seed/poster2/300/400" 
                type="image"
              />
              <AssetCard 
                title="中亚展会风格宣传图" 
                img="https://picsum.photos/seed/poster3/300/400" 
                type="image"
              />
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <button className="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-sm font-medium rounded-lg transition-colors">继续生成</button>
              <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors">换风格</button>
            </div>
          </div>

          {/* 5. 渠道分发区 */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-indigo-600" /> 多渠道一键分发
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ChannelCard 
                icon={<Music className="w-6 h-6 text-black" />} name="TikTok"
                content="30秒产品短视频" target="品牌曝光 / 轻询盘" lang="俄语/当地语"
              />
              <ChannelCard 
                icon={<Send className="w-6 h-6 text-blue-500" />} name="Telegram"
                content="产品图+参数摘要" target="经销商 / 采购群" lang="俄语"
              />
              <ChannelCard 
                icon={<Linkedin className="w-6 h-6 text-blue-700" />} name="LinkedIn"
                content="医院触达/合作提案" target="医院管理层/医生" lang="英语/俄语"
              />
              <ChannelCard 
                icon={<Instagram className="w-6 h-6 text-pink-600" />} name="Instagram"
                content="展会动态/高清图" target="私立诊所/医生" lang="俄语"
              />
            </div>
          </div>

          {/* 6. LinkedIn 精准触达模块 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white flex justify-between items-center">
              <h2 className="font-bold text-slate-900 flex items-center">
                <Linkedin className="w-5 h-5 mr-2 text-blue-700" /> LinkedIn 精准触达
              </h2>
              <div className="flex gap-2">
                <button className="text-xs font-medium text-blue-700 bg-white border border-blue-200 px-3 py-1.5 rounded-md">搜索中亚医院</button>
                <button className="text-xs font-medium text-blue-700 bg-white border border-blue-200 px-3 py-1.5 rounded-md">搜索关键决策人</button>
              </div>
            </div>
            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">目标机构与决策人</h3>
                <div className="space-y-3">
                  <ProfileCard 
                    name="Almaty Women's Health Center" loc="哈萨克斯坦" type="妇产专科中心"
                    roles={['Head of Imaging Department', 'Procurement Manager']}
                  />
                  <ProfileCard 
                    name="Tashkent Diagnostic Clinic Network" loc="乌兹别克斯坦" type="私立诊所连锁"
                    roles={['Medical Director', 'Chief Equipment Officer']}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3 flex justify-between items-center">
                  <span>AI 推荐触达文案</span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">高回复率模板</span>
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700 font-mono leading-relaxed relative">
                  <p>Dear [Name],</p>
                  <p className="mt-2">I noticed your impressive work at [Clinic Name]. As you expand your diagnostic capabilities, our Advanced 4D Color Doppler Ultrasound could be a great fit.</p>
                  <p className="mt-2">We already support several clinics in [Country] with full registration and local training.</p>
                  <p className="mt-2 text-blue-600">[Insert Product Page Link]</p>
                  <p className="mt-2">Would you be open to a brief chat?</p>
                  
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-md hover:bg-slate-50">复制文案</button>
                    <button className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-md hover:bg-indigo-100 flex items-center"><Sparkles className="w-3 h-3 mr-1"/>个性化重写</button>
                    <button className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-md hover:bg-emerald-100">推送销售跟进</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. 潜在客户与渠道发现 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900 flex items-center">
                <Target className="w-5 h-5 mr-2 text-rose-500" /> 潜在客户与渠道发现
              </h2>
              <div className="flex bg-slate-100 p-1 rounded-lg overflow-x-auto">
                {['医院', '诊所', '药房', '经销商', '检验中心', '公共卫生机构'].map((tab, i) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveLeadTab(tab)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap",
                      i === 0 ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 font-medium">机构名称</th>
                    <th className="pb-3 font-medium">国家/城市</th>
                    <th className="pb-3 font-medium">推荐理由</th>
                    <th className="pb-3 font-medium">可能采购方向</th>
                    <th className="pb-3 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <LeadRow name="Tashkent City Maternity Hospital" loc="乌兹别克斯坦, 塔什干" reason="近期获批扩建资金" intent="妇产超声, 监护仪" />
                  <LeadRow name="Almaty Private Diagnostic Center" loc="哈萨克斯坦, 阿拉木图" reason="新开设高端影像中心" intent="高端彩超" />
                  <LeadRow name="Central Med Distribution LLP" loc="哈萨克斯坦" reason="当地Top3医疗器械分销商" intent="全线代理" />
                </tbody>
              </table>
            </div>
          </div>

          {/* 8. 政府采购 / 公共卫生项目情报 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h2 className="font-bold text-slate-900 flex items-center mb-4">
              <Briefcase className="w-5 h-5 mr-2 text-amber-600" /> 政府采购 / 公共卫生项目情报
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCard 
                country="乌兹别克斯坦" title="Regional Maternal Health Equipment Upgrade"
                needs="便携式超声, 胎心监护仪" risk="需当地注册证, 俄语培训"
              />
              <ProjectCard 
                country="哈萨克斯坦" title="Primary Care Imaging Procurement Program"
                needs="基础型彩超 (批量)" risk="偏好本地化售后服务中心"
              />
              <ProjectCard 
                country="吉尔吉斯斯坦" title="Rural Diagnostic Access Initiative"
                needs="高性价比便携超声" risk="预算敏感, 需长质保"
              />
            </div>
          </div>

          {/* 9. AI渠道与预算建议 & 10. AI营销方案输出 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <h2 className="font-bold text-slate-900 flex items-center mb-4">
                <PieChart className="w-5 h-5 mr-2 text-emerald-600" /> AI渠道与预算建议
              </h2>
              <div className="space-y-4">
                <BudgetCard country="乌兹别克斯坦" focus="私立医院集团 + 妇产影像" channels="Telegram / LinkedIn / Email" budget="¥18,000 / 月" />
                <BudgetCard country="哈萨克斯坦" focus="经销商合作 + 大型诊断中心" channels="LinkedIn / Instagram / 展会" budget="¥24,000 / 月" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <h2 className="font-bold text-white flex items-center mb-4 relative z-10">
                <FileText className="w-5 h-5 mr-2 text-indigo-400" /> AI营销方案输出
              </h2>
              <div className="relative z-10 space-y-4">
                <div>
                  <p className="text-indigo-300 text-xs mb-1">方案标题</p>
                  <p className="font-semibold text-lg">Advanced 4D Color Doppler Ultrasound System 中亚三国营销启动方案</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-sm font-medium mb-2 text-indigo-200">推荐核心动作：</p>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0 mt-0.5"/>生成俄语版产品图和医院采购版产品册</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0 mt-0.5"/>LinkedIn 精准触达 25 个医院和诊断中心联系人</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 text-emerald-400 shrink-0 mt-0.5"/>Telegram 渠道投放经销商合作素材</li>
                  </ul>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" /> 导出完整PDF
                  </button>
                  <button className="flex-1 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors backdrop-blur-sm">
                    推送到销售CRM
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* RIGHT SIDEBAR: AI Assistant & To-Do */}
      <aside className="fixed top-16 right-0 bottom-0 w-80 bg-white border-l border-slate-200 overflow-y-auto z-40 custom-scrollbar flex flex-col">
        <div className="p-5 border-b border-slate-100 bg-gradient-to-b from-indigo-50/50 to-white">
          <h2 className="font-bold text-slate-900 flex items-center mb-4">
            <Bot className="w-5 h-5 mr-2 text-indigo-600" /> AI营销助手
          </h2>
          <div className="space-y-2 mb-4">
            <ChatSuggestion text="这个产品更适合先做医院还是经销商？" />
            <ChatSuggestion text="帮我生成俄语版 Telegram 推广文案" />
            <ChatSuggestion text="哪些哈萨克斯坦医院可能对这类设备感兴趣？" />
            <ChatSuggestion text="给我一个 LinkedIn 医院触达计划" />
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="输入营销需求..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-10 py-2.5 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-inner"
            />
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center transition-colors shadow-sm">
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="p-5 border-b border-slate-100 flex-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-500" /> AI建议
          </h3>
          <div className="space-y-3">
            <SuggestionCard text="建议优先投放乌兹别克斯坦 Telegram 渠道" />
            <SuggestionCard text="建议为 LinkedIn 生成更正式的英文版本" />
            <SuggestionCard text="建议把官网产品页链接嵌入医院触达邮件" />
            <SuggestionCard text="建议将 3 个公共卫生项目加入跟踪" />
          </div>
        </div>

        <div className="p-5 bg-slate-50">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
            <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> 今日待办
          </h3>
          <div className="space-y-2">
            <TodoItem text="审核 2 张俄语推广图" urgent />
            <TodoItem text="确认 LinkedIn 医院名单" />
            <TodoItem text="导出乌兹别克斯坦营销方案" />
            <TodoItem text="推送 1 个经销商合作包给销售团队" />
          </div>
        </div>
      </aside>

      {/* Hover Modal for Plans */}
      {hoveredPlan !== null && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-slate-900/10 backdrop-blur-sm transition-opacity">
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-slate-200 max-w-md w-full transform scale-105 transition-transform">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">{MOCK_PLANS[hoveredPlan].title}</h3>
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-[10px] rounded-full ml-auto">{MOCK_PLANS[hoveredPlan].type}</span>
            </div>
            <img src={MOCK_PLANS[hoveredPlan].img} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {MOCK_PLANS[hoveredPlan].desc}
            </p>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
              <p className="text-xs text-emerald-700 font-medium flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1" />
                已通过中亚医疗广告法合规性审查
              </p>
            </div>
          </div>
        </div>
      )}

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

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
      <span className="mr-2 text-slate-500">{icon}</span>
      {label}
    </button>
  );
}

function MetricCard({ title, value, trend, trendUp, highlight, alert }: any) {
  return (
    <div className={cn("bg-white p-4 rounded-xl border shadow-sm relative overflow-hidden", highlight ? "border-indigo-200 bg-indigo-50/30" : "border-slate-200")}>
      {alert && <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>}
      {highlight && <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>}
      <p className="text-xs font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className={cn("text-2xl font-bold", highlight ? "text-indigo-700" : "text-slate-900")}>{value}</h3>
        {trend && (
          <span className={cn("text-xs font-medium px-1.5 py-0.5 rounded", trendUp ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50")}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

function ConfigSelect({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
      <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 flex justify-between items-center cursor-pointer hover:border-indigo-300">
        <span className="truncate mr-2">{value}</span>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      </div>
    </div>
  );
}

function AssetCard({ title, img, type }: any) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white group cursor-pointer hover:border-indigo-300 transition-colors">
      <div className="h-32 bg-slate-100 relative">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-slate-900 text-xs font-medium px-3 py-1.5 rounded-md shadow-sm">预览 / 下载</button>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-slate-900 truncate">{title}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase">{type}</span>
          <button className="text-indigo-600 hover:text-indigo-700"><Share2 className="w-3.5 h-3.5" /></button>
        </div>
      </div>
    </div>
  );
}

function ChannelCard({ icon, name, content, target, lang }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-indigo-300 transition-colors">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
          {icon}
        </div>
        <h3 className="font-bold text-slate-900">{name}</h3>
      </div>
      <div className="space-y-2 text-xs">
        <p><span className="text-slate-500">推荐内容：</span><span className="font-medium text-slate-700">{content}</span></p>
        <p><span className="text-slate-500">推荐目标：</span><span className="font-medium text-slate-700">{target}</span></p>
        <p><span className="text-slate-500">推荐语言：</span><span className="font-medium text-slate-700">{lang}</span></p>
      </div>
      <button className="w-full mt-4 py-2 bg-slate-50 hover:bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg transition-colors border border-slate-100 hover:border-indigo-200">
        一键发布
      </button>
    </div>
  );
}

function ProfileCard({ name, loc, type, roles }: any) {
  return (
    <div className="bg-white border border-slate-200 p-3 rounded-lg flex items-start space-x-3">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
        <Building2 className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-900">{name}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{loc} | {type}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {roles.map((r: string) => (
            <span key={r} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{r}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeadRow({ name, loc, reason, intent }: any) {
  return (
    <tr className="hover:bg-slate-50 transition-colors group">
      <td className="py-3 font-medium text-slate-900">{name}</td>
      <td className="py-3 text-slate-600">{loc}</td>
      <td className="py-3 text-emerald-600 text-xs"><span className="bg-emerald-50 px-2 py-1 rounded-md">{reason}</span></td>
      <td className="py-3 text-slate-600 text-xs">{intent}</td>
      <td className="py-3">
        <button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">生成开发信</button>
      </td>
    </tr>
  );
}

function ProjectCard({ country, title, needs, risk }: any) {
  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">{country}</span>
        <button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">加入跟踪</button>
      </div>
      <h4 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{title}</h4>
      <p className="text-xs text-slate-600 mb-1"><span className="text-slate-400">可能需求：</span>{needs}</p>
      <p className="text-xs text-rose-600"><span className="text-slate-400">风险提示：</span>{risk}</p>
    </div>
  );
}

function BudgetCard({ country, focus, channels, budget }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg">
      <div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">{country}</h4>
        <p className="text-xs text-slate-500 mb-0.5">重点：<span className="text-slate-700">{focus}</span></p>
        <p className="text-xs text-slate-500">渠道：<span className="text-slate-700">{channels}</span></p>
      </div>
      <div className="text-right">
        <p className="text-xs text-slate-400 mb-1">建议预算</p>
        <p className="text-sm font-bold text-emerald-600">{budget}</p>
      </div>
    </div>
  );
}

function ChatSuggestion({ text }: { text: string }) {
  return (
    <div className="bg-white border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 text-xs p-2 rounded-lg cursor-pointer transition-colors shadow-sm">
      {text}
    </div>
  );
}

function SuggestionCard({ text }: { text: string }) {
  return (
    <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-lg flex items-start group cursor-pointer hover:bg-amber-50 transition-colors">
      <Sparkles className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
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
function ImagePlusIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" x2="22" y1="5" y2="5"/><line x1="19" x2="19" y1="2" y2="8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> }
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
