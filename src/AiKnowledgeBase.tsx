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
  AlertTriangle, Check, X, FileUp, BarChart2, Database
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AiKnowledgeBaseProps {
  onHomeClick: () => void;
  onDashboardClick: () => void;
  onAiMarketingClick: () => void;
  onProductManagementClick: () => void;
  onCrmClick: () => void;
  onAiManagerClick: () => void;
  onAiRecruitmentClick: () => void;
}

export default function AiKnowledgeBase({ onHomeClick, onDashboardClick, onAiMarketingClick, onProductManagementClick, onCrmClick, onAiManagerClick, onAiRecruitmentClick }: AiKnowledgeBaseProps) {
  const [activeCategory, setActiveCategory] = useState('全部知识');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4 lg:px-6 shadow-sm">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-700">
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
              placeholder="搜索知识库、FAQ、文档..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 rounded-lg text-sm transition-all outline-none"
            />
          </div>
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-medium text-sm cursor-pointer shadow-sm border-2 border-white ring-2 ring-slate-100">
            MT
          </div>
        </div>
      </header>

      {/* LEFT SIDEBAR (Main Nav) */}
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
              <SidebarItem icon={<Box />} label="商品管理" onClick={onProductManagementClick} />
              <SidebarItem icon={<Package />} label="服务管理" />
              <SidebarItem icon={<FileQuestion />} label="AI 客服" active />
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

      {/* INNER LEFT SIDEBAR (Category Tree) */}
      <aside className="fixed top-16 left-64 bottom-0 w-60 bg-slate-50 border-r border-slate-200 overflow-y-auto z-30 custom-scrollbar hidden lg:block">
        <div className="p-4">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
            <FolderTree className="w-4 h-4 mr-2 text-teal-600" /> 知识分类树
          </h3>
          <div className="space-y-1">
            <TreeItem label="全部知识" active={activeCategory === '全部知识'} onClick={() => setActiveCategory('全部知识')} />
            
            <TreeGroup label="商品知识">
              <TreeItem label="产品介绍" />
              <TreeItem label="参数规格" />
              <TreeItem label="应用场景" />
              <TreeItem label="配件与兼容性" />
            </TreeGroup>

            <TreeGroup label="认证与合规">
              <TreeItem label="CE / ISO / FDA" />
              <TreeItem label="出口文件" />
              <TreeItem label="注册支持" />
              <TreeItem label="招投标资料" />
            </TreeGroup>

            <TreeGroup label="物流与交付">
              <TreeItem label="发货方式" />
              <TreeItem label="时效说明" />
              <TreeItem label="包装要求" />
              <TreeItem label="清关支持" />
            </TreeGroup>

            <TreeGroup label="售后与服务">
              <TreeItem label="安装培训" />
              <TreeItem label="质保政策" />
              <TreeItem label="备件支持" />
              <TreeItem label="远程技术支持" />
            </TreeGroup>

            <TreeGroup label="商务与报价">
              <TreeItem label="RFQ与报价" />
              <TreeItem label="MOQ" />
              <TreeItem label="付款方式" />
              <TreeItem label="Distributor合作" />
            </TreeGroup>

            <TreeGroup label="公司与工厂">
              <TreeItem label="企业介绍" />
              <TreeItem label="工厂能力" />
              <TreeItem label="出口市场" />
              <TreeItem label="OEM/ODM" />
            </TreeGroup>

            <TreeGroup label="国家市场说明">
              <TreeItem label="哈萨克斯坦" />
              <TreeItem label="乌兹别克斯坦" />
              <TreeItem label="吉尔吉斯斯坦" />
              <TreeItem label="俄语资料支持" />
            </TreeGroup>

            <TreeGroup label="FAQ">
              <TreeItem label="常见问题" />
              <TreeItem label="热门问题" />
              <TreeItem label="待补充问题" />
            </TreeGroup>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 lg:ml-[500px] ml-64 mr-80 mt-16 overflow-y-auto p-6 custom-scrollbar bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* 1. 页面头部 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">AI 客服</h1>
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-md flex items-center">
                  <Database className="w-3 h-3 mr-1" /> 知识源中心
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                管理商品、物流、售后、认证与服务知识，为海外用户端 AI 客服提供准确回答。
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <ActionButton icon={<UploadCloud className="w-4 h-4" />} label="上传资料" />
              <ActionButton icon={<FileUp className="w-4 h-4" />} label="批量导入" />
              <ActionButton icon={<Eye className="w-4 h-4" />} label="预览海外问答" />
              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" /> 新建FAQ
              </button>
              <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center">
                发布更新
              </button>
            </div>
          </div>

          {/* 2. 顶部总览卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <MiniMetric title="知识文档总数" value="128" />
            <MiniMetric title="FAQ 条目" value="86" />
            <MiniMetric title="产品知识" value="42" />
            <MiniMetric title="物流与交付知识" value="18" />
            <MiniMetric title="售后与服务知识" value="16" />
            <MiniMetric title="认证与合规知识" value="24" />
            <MiniMetric title="AI 回答命中率" value="91%" highlight />
            <MiniMetric title="待优化问题" value="7" alert />
          </div>

          {/* 3. 中间主内容区：知识条目列表 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative max-w-xs w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="搜索知识条目..." 
                    className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-md text-sm transition-all outline-none"
                  />
                </div>
                <FilterSelect label="分类" options={['全部', '产品知识', '物流与交付', '售后与服务', '认证与合规']} />
                <FilterSelect label="语言" options={['全部', '中文', '英文', '俄语']} />
                <FilterSelect label="状态" options={['全部', '已发布', '草稿', '待审核']} />
                <FilterSelect label="来源" options={['全部', '手动录入', '文件抽取', 'AI生成']} />
              </div>
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100">
              <KnowledgeRow 
                question="这款 Advanced 4D Color Doppler Ultrasound System 是否支持俄语说明书？"
                category="产品知识 / FAQ"
                langs={['中文', '英文', '俄语']}
                status="已发布"
                answer="支持英文与俄语版用户手册，可按项目提供俄语界面说明资料。"
                onEdit={() => setIsEditing(true)}
              />
              <KnowledgeRow 
                question="发往乌兹别克斯坦通常支持哪些物流方式？"
                category="物流与交付"
                langs={['中文', '英文']}
                status="已发布"
                answer="标准项目通常支持 CIF Tashkent、DAP Tashkent 等模式，可根据设备体积与时效要求选择空运+陆运或铁路+陆运。"
                onEdit={() => setIsEditing(true)}
              />
              <KnowledgeRow 
                question="是否提供安装培训服务？"
                category="售后与服务"
                langs={['中文', '英文', '俄语']}
                status="已发布"
                answer="支持远程安装指导、线上培训，也可根据项目安排现场培训。"
                onEdit={() => setIsEditing(true)}
              />
              <KnowledgeRow 
                question="是否支持经销商合作？"
                category="商务与报价"
                langs={['中文', '英文']}
                status="已发布"
                answer="支持经销合作，可提供产品资料、认证资料、售后支持说明及合作政策。"
                onEdit={() => setIsEditing(true)}
              />
              <KnowledgeRow 
                question="这个产品能否用于政府采购或医院招标项目？"
                category="认证与合规 / 商务"
                langs={['中文', '英文']}
                status="待审核"
                answer="支持项目型采购，但需根据具体国家和项目要求确认认证、注册、招标资料和售后服务承诺。"
                onEdit={() => setIsEditing(true)}
              />
              {/* Extra Required Questions */}
              <KnowledgeRow question="产品适用于哪些科室" category="产品知识" langs={['英文']} status="已发布" answer="适用于妇产科、心血管科、腹部、小器官及肌骨等常规超声检查科室。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持4D实时成像" category="产品知识" langs={['英文']} status="已发布" answer="支持，配备专用容积探头可实现高质量4D实时成像。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持多探头" category="产品知识" langs={['英文']} status="已发布" answer="支持，标配3个探头接口，可选配凸阵、线阵、相控阵、腔内等多种探头。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否有 CE / ISO 13485" category="认证与合规" langs={['英文']} status="已发布" answer="是的，我们的工厂和主要产品均已获得 CE 和 ISO 13485 认证。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持提供注册资料" category="认证与合规" langs={['英文']} status="已发布" answer="支持，可根据目标国家（如哈萨克斯坦、乌兹别克斯坦）的法规要求提供相应的注册授权书和技术文档。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="发往乌兹别克斯坦通常多久" category="物流与交付" langs={['英文']} status="已发布" answer="空运通常需 5-7 天，铁路/陆运通常需 15-25 天，具体取决于航班和班列排期。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持 CIF / DAP" category="物流与交付" langs={['英文']} status="已发布" answer="支持，我们常做 CIF Tashkent 或 DAP Almaty 等条款。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="质保期多久" category="售后与服务" langs={['英文']} status="已发布" answer="标准质保期为 12 个月，可根据项目需求购买延保服务至 24 或 36 个月。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持备件供应" category="售后与服务" langs={['英文']} status="已发布" answer="支持，我们在停产后至少 5 年内持续供应核心备件。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持 RFQ" category="商务与报价" langs={['英文']} status="已发布" answer="支持，欢迎通过平台提交详细的 RFQ，我们的销售工程师会在 24 小时内响应。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持 project-based quotation" category="商务与报价" langs={['英文']} status="已发布" answer="支持，针对医院采购或政府招标等项目型需求，我们可提供定制化的项目报价和支持方案。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否是 manufacturer 还是 trading company" category="公司与工厂" langs={['英文']} status="已发布" answer="我们是拥有 12 年经验的专业医疗设备 Manufacturer，拥有 8500 平方米的生产基地。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="是否支持中亚市场本地化文档" category="国家市场说明" langs={['英文']} status="已发布" answer="支持，我们可提供俄语版的操作手册、界面语言及部分清关所需的俄语文件。" onEdit={() => setIsEditing(true)} />
              <KnowledgeRow question="哪些国家已有出口经验" category="公司与工厂" langs={['英文']} status="已发布" answer="我们的产品已出口至 28 个国家，在中亚地区（哈萨克斯坦、乌兹别克斯坦等）有丰富的项目经验和客户案例。" onEdit={() => setIsEditing(true)} />
            </div>
            
            <div className="p-4 border-t border-slate-200 flex justify-center">
              <button className="text-sm font-medium text-teal-600 hover:text-teal-700">加载更多...</button>
            </div>
          </div>

        </div>
      </main>

      {/* RIGHT SIDEBAR: AI Preview & Analysis */}
      <aside className="fixed top-16 right-0 bottom-0 w-80 bg-white border-l border-slate-200 overflow-y-auto z-40 custom-scrollbar flex flex-col">
        
        {/* AI Answer Preview */}
        <div className="p-5 border-b border-slate-100 bg-gradient-to-b from-teal-50/50 to-white">
          <h2 className="font-bold text-slate-900 flex items-center mb-4">
            <Bot className="w-5 h-5 mr-2 text-teal-600" /> AI 回答预览
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="text-xs font-bold text-slate-500 mb-1">海外采购商提问：</p>
            <p className="text-sm text-slate-800 font-medium mb-3">"Do you support installation and training in Uzbekistan?"</p>
            
            <p className="text-xs font-bold text-teal-600 mb-1 flex items-center">
              <Sparkles className="w-3 h-3 mr-1" /> AI 客服回答：
            </p>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-3 rounded border border-teal-100 shadow-sm">
              Yes. For Uzbekistan projects, installation guidance and training support can be arranged based on project scope. We can provide remote technical guidance, documentation in English or Russian, and discuss on-site training arrangements if required. For project-based procurement, we recommend including training requirements in the RFQ for a more accurate quotation.
            </p>
          </div>
          
          <div className="space-y-2 text-xs text-slate-600 mb-4 bg-white p-3 rounded-lg border border-slate-100">
            <div className="flex justify-between"><span className="text-slate-400">来源条目：</span><span className="font-medium text-slate-800">安装培训服务说明</span></div>
            <div className="flex justify-between"><span className="text-slate-400">使用语言：</span><span className="font-medium text-slate-800">英文</span></div>
            <div className="flex justify-between"><span className="text-slate-400">风险等级：</span><span className="font-medium text-emerald-600">低</span></div>
            <div className="flex justify-between"><span className="text-slate-400">建议跟进动作：</span><span className="font-medium text-blue-600">推荐提交 RFQ</span></div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 text-xs bg-teal-50 text-teal-700 border border-teal-100 px-3 py-2 rounded-md hover:bg-teal-100 font-medium">优化回答</button>
            <button className="flex-1 text-xs bg-white border border-slate-200 px-3 py-2 rounded-md hover:bg-slate-50 font-medium text-slate-700">查看来源</button>
          </div>
        </div>

        {/* Hot Questions & Hit Analysis */}
        <div className="p-5 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
            <BarChart2 className="w-4 h-4 mr-2 text-indigo-500" /> 热门问题与命中分析
          </h3>
          
          <div className="mb-5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">本周热门问题</p>
            <div className="space-y-2">
              <HotQuestion text="是否支持俄语说明书" hits="142" rate="98%" />
              <HotQuestion text="是否提供安装培训" hits="98" rate="95%" />
              <HotQuestion text="发往乌兹别克斯坦需要多久" hits="76" rate="92%" />
              <HotQuestion text="是否支持当地注册" hits="65" rate="88%" />
              <HotQuestion text="质保期多久" hits="54" rate="100%" />
              <HotQuestion text="是否支持 distributor 合作" hits="41" rate="90%" />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2 flex items-center">
              <AlertTriangle className="w-3 h-3 mr-1" /> 低命中问题 (需优化)
            </p>
            <div className="space-y-2">
              <LowHitQuestion text="哈萨克斯坦公立医院采购需要哪些文件" hits="12" rate="35%" />
              <LowHitQuestion text="是否支持软件升级包长期提供" hits="8" rate="40%" />
              <LowHitQuestion text="是否能先提供 demo 设备" hits="5" rate="20%" />
            </div>
            <button className="w-full mt-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg transition-colors border border-slate-200 flex items-center justify-center">
              <Sparkles className="w-3 h-3 mr-1 text-teal-600" /> 让AI生成草稿答案
            </button>
          </div>
        </div>

        {/* File Upload & Knowledge Extraction */}
        <div className="p-5 border-b border-slate-100 bg-slate-50">
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
            <FileUp className="w-4 h-4 mr-2 text-blue-500" /> 文件上传与知识抽取
          </h3>
          <p className="text-xs text-slate-500 mb-3">支持 PDF, Excel, DOCX。AI 将自动抽取知识点。</p>
          
          <div className="space-y-2 mb-4">
            <FileItem name="ultrasound_brochure_ru_en.pdf" status="已抽取" />
            <FileItem name="technical_specs_v4.xlsx" status="已抽取" />
            <FileItem name="ce_iso_certificates.pdf" status="已抽取" />
            <FileItem name="after_sales_policy_2026.docx" status="抽取中..." loading />
          </div>

          <div className="bg-white p-3 rounded-lg border border-slate-200 mb-3">
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">AI 已抽取知识点：</span><span className="font-bold text-teal-600">34</span></div>
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-500">待人工确认：</span><span className="font-bold text-amber-600">8</span></div>
            <div className="flex justify-between text-xs"><span className="text-slate-500">建议生成 FAQ：</span><span className="font-bold text-blue-600">12</span></div>
          </div>

          <button className="w-full py-2 bg-white hover:bg-slate-50 text-teal-700 text-xs font-medium rounded-lg transition-colors border border-teal-200">
            查看抽取结果
          </button>
        </div>

        {/* Knowledge Coverage Map */}
        <div className="p-5">
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
            <PieChart className="w-4 h-4 mr-2 text-emerald-500" /> 知识覆盖地图
          </h3>
          <div className="space-y-3 mb-4">
            <CoverageBar label="产品知识" pct={94} />
            <CoverageBar label="物流与交付" pct={81} />
            <CoverageBar label="售后与服务" pct={88} />
            <CoverageBar label="认证与合规" pct={76} />
            <CoverageBar label="商务与报价" pct={83} />
            <CoverageBar label="中亚国家适配" pct={69} alert />
          </div>
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-bold">💡 建议优先补充：</span><br/>
              乌兹别克斯坦注册说明、哈萨克斯坦招投标资料、俄语售后支持文件。
            </p>
          </div>
        </div>

      </aside>

      {/* EDIT MODAL (Knowledge Detail Edit Area) */}
      {isEditing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-lg font-bold text-slate-900 flex items-center">
                <Edit3 className="w-5 h-5 mr-2 text-teal-600" /> 编辑知识详情
              </h2>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">问题 (Question)</label>
                <input type="text" defaultValue="发往乌兹别克斯坦通常支持哪些物流方式？" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">标准答案 (Standard Answer)</label>
                <textarea rows={4} defaultValue="我们通常可根据项目需求支持 CIF Tashkent、DAP Tashkent 等交付方式。对于超声设备等高价值医疗设备，常见方案为“空运+陆运”或“铁路+陆运”，具体将根据交期、包装尺寸、清关安排及安装计划进一步确认。" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent leading-relaxed"></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">补充说明 (Internal Notes / Additional Context)</label>
                <textarea rows={4} defaultValue="• 紧急项目建议优先考虑空运+陆运&#10;• 若涉及安装培训，请在发货前确认到货计划&#10;• 可协助提供装箱清单、发票、产地证等文件" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent leading-relaxed text-slate-600 font-mono"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">适用分类</label>
                  <select className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>物流与交付</option>
                    <option>商务与报价</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">语言版本</label>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded border border-teal-200">中文</span>
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded border border-teal-200">英文</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded border border-slate-200 border-dashed cursor-pointer hover:bg-slate-200">+ 添加俄语</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">AI 权限</label>
                  <label className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500" />
                    <span>允许 AI 直接回答</span>
                  </label>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">风险提示</label>
                  <label className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                    <span>需要人工复核 (高风险)</span>
                  </label>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">推荐引导动作</label>
                  <select className="w-full px-2 py-1.5 bg-white border border-slate-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>引导提交 RFQ</option>
                    <option>转接人工客服</option>
                    <option>无</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end space-x-3">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors">
                取消
              </button>
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-colors shadow-sm">
                保存并发布
              </button>
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
      active ? "bg-teal-50 text-teal-700 font-medium" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    )}>
      <div className="flex items-center">
        <span className={cn("w-5 h-5 mr-3 flex items-center justify-center", active ? "text-teal-600" : "text-slate-400 group-hover:text-slate-600")}>
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

function TreeGroup({ label, children }: { label: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-1">
      <div 
        className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-200/50 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 text-slate-400 transition-transform", !isOpen && "-rotate-90")} />
      </div>
      {isOpen && (
        <div className="ml-2 pl-2 border-l border-slate-200 mt-1 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}

function TreeItem({ label, active, onClick }: { label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "px-2 py-1.5 text-xs rounded-md cursor-pointer transition-colors",
        active ? "bg-teal-100 text-teal-800 font-medium" : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
      )}
    >
      {label}
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

function MiniMetric({ title, value, highlight, alert }: any) {
  return (
    <div className={cn("bg-white p-3 rounded-lg border shadow-sm flex flex-col justify-center", highlight ? "border-teal-200 bg-teal-50/30" : "border-slate-200", alert ? "border-rose-200 bg-rose-50/30" : "")}>
      <p className="text-[10px] font-medium text-slate-500 mb-1 truncate">{title}</p>
      <h3 className={cn("text-lg font-bold", highlight ? "text-teal-700" : alert ? "text-rose-700" : "text-slate-900")}>{value}</h3>
    </div>
  );
}

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="flex items-center text-xs">
      <span className="text-slate-500 mr-2">{label}:</span>
      <select className="bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-teal-500">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function KnowledgeRow({ question, category, langs, status, answer, onEdit }: any) {
  return (
    <div className="p-4 hover:bg-slate-50 transition-colors group">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-bold text-slate-900 flex-1 pr-4 leading-snug">{question}</h4>
        <div className="flex items-center space-x-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded" title="编辑"><Edit3 className="w-4 h-4" /></button>
          <button className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded" title="预览回答"><Eye className="w-4 h-4" /></button>
          <button className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded" title="查看引用页面"><Link className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 text-xs">
        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{category}</span>
        <div className="flex space-x-1">
          {langs.map((l: string) => <span key={l} className="border border-slate-200 text-slate-500 px-1.5 py-0.5 rounded">{l}</span>)}
        </div>
        <span className={cn("px-2 py-0.5 rounded font-medium", status === '已发布' ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700")}>{status}</span>
      </div>
      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed"><span className="font-medium text-slate-700">回答摘要：</span>{answer}</p>
    </div>
  );
}

function HotQuestion({ text, hits, rate }: any) {
  return (
    <div className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded border border-slate-100">
      <span className="text-slate-700 truncate pr-2 flex-1" title={text}>{text}</span>
      <div className="flex items-center space-x-3 shrink-0 text-slate-500">
        <span title="提问次数">{hits} 次</span>
        <span className="text-teal-600 font-medium w-8 text-right" title="命中率">{rate}</span>
      </div>
    </div>
  );
}

function LowHitQuestion({ text, hits, rate }: any) {
  return (
    <div className="flex items-center justify-between text-xs bg-rose-50/50 p-2 rounded border border-rose-100">
      <span className="text-slate-700 truncate pr-2 flex-1" title={text}>{text}</span>
      <div className="flex items-center space-x-3 shrink-0 text-slate-500">
        <span title="提问次数">{hits} 次</span>
        <span className="text-rose-600 font-medium w-8 text-right" title="命中率">{rate}</span>
      </div>
    </div>
  );
}

function FileItem({ name, status, loading }: any) {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded border border-slate-200 text-xs">
      <div className="flex items-center overflow-hidden pr-2">
        <FileText className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
        <span className="text-slate-700 truncate">{name}</span>
      </div>
      <span className={cn("shrink-0 font-medium", loading ? "text-amber-500" : "text-teal-600")}>{status}</span>
    </div>
  );
}

function CoverageBar({ label, pct, alert }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-600">{label}</span>
        <span className={cn("font-medium", alert ? "text-rose-600" : "text-slate-800")}>{pct}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div className={cn("h-1.5 rounded-full", alert ? "bg-rose-400" : "bg-emerald-400")} style={{ width: `${pct}%` }}></div>
      </div>
    </div>
  );
}

// Extra Icons
function LayersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg> }
function MapIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg> }
function FileCheckIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg> }
function UsersIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }
