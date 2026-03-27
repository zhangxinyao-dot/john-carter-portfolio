import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Briefcase, FileText, User, Home, Github, Twitter, Linkedin, Map as MapIcon, Compass, Navigation, Plane, Star, Heart, Sparkles, Coffee, Music, Code } from 'lucide-react';
import portrait from './portrait.png';
import avatar from './avatar.png';
import activity1 from './activity1.png';
import activity2 from './activity2.png';
import activity3 from './activity3.png';
import activity4 from './activity4.png';
import activity5 from './activity5.png';
import activity6 from './activity6.png';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img6 from './6.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import b1 from './b1.png';
import b2 from './b2.png';
import b3 from './b3.png';

// --- Components ---

const Navbar = () => {
  const tabs = [
    { id: 'hero', label: '首页', icon: Home },
    { id: 'about', label: '关于', icon: User },
    { id: 'campus', label: '校园', icon: Compass },
    { id: 'portfolio', label: '作品集', icon: Briefcase },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-white border-2 border-black rounded-full px-4 py-2 brutal-shadow flex items-center gap-6">
        <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-lg">
          Y
        </div>
        <div className="hidden md:flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="text-sm font-bold transition-colors hover:text-brutal-blue text-black"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition-colors">
            <Mail size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Hello, <br />
          我是 <span className="bg-brutal-pink text-black px-2">yoyo</span>, <br />
          一个敢 <span className="bg-brutal-blue text-white px-2">打破常规</span> <br />
          的小小梦想家
        </h1>
        <p className="text-neutral-600 text-lg mb-8 max-w-md">
          一个不会站讲台的运营不是一名好销售！生活就像一只画笔，将白纸般的我 点染出绚烂色彩 ，快来认识更生动活泼的我吧！
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="brutal-btn-primary brutal-shadow brutal-shadow-hover">
            <Mail size={18} /> 联系我
          </button>
          <button 
            onClick={scrollToPortfolio}
            className="brutal-btn-secondary brutal-shadow brutal-shadow-hover"
          >
            <Briefcase size={18} /> 查看作品集
          </button>
        </div>
      </div>
      <div className="relative">
        {/* Floating Animated Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 -left-8 bg-brutal-pink p-3 border-2 border-black rounded-xl brutal-shadow z-20 hidden md:block"
        >
          <Star className="text-white" size={24} fill="currentColor" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-6 -right-6 bg-brutal-blue p-3 border-2 border-black rounded-full brutal-shadow z-20 hidden md:block"
        >
          <Heart className="text-white" size={24} fill="currentColor" />
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 15, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 -right-12 bg-brutal-yellow p-3 border-2 border-black rounded-lg brutal-shadow z-20 hidden md:block"
        >
          <Sparkles className="text-black" size={24} />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 right-10 bg-white p-2 border-2 border-black rounded-full brutal-shadow z-20"
        >
          <Music className="text-brutal-purple" size={20} />
        </motion.div>

        <div className="bg-brutal-yellow border-2 border-black rounded-3xl brutal-shadow aspect-square flex items-center justify-center overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src={portrait} 
            alt="yoyo's Portrait" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const moments = [
    { title: '莎士比亚戏剧节', desc: '在一年一度的莎士比亚戏剧节上，我和同学们一起在舞台上表演《威尼斯商人》中最精彩的部分，感受经典的戏剧冲突。', color: 'bg-white', image: activity1 },
    { title: '小小主持人', desc: '每一次上台都是对我的口才和台风的锻炼，感觉自己在台上的每一刻都闪耀着自信的光芒', color: 'bg-white', image: activity2 },
    { title: '端午划龙舟', desc: '和国际生一起排练划龙舟，一起感受中华文化的魅力。', color: 'bg-white', image: activity3 },
    { title: '金牌师范生', desc: '在师范生模拟课中取得一等奖，我珍惜每一次站上讲台的机会。', color: 'bg-white', image: activity4 },
    { title: '见习班主任', desc: '组织了一次特别欢快活泼的班会活动，看着孩子们快乐的目光，我也很满足。', color: 'bg-white', image: activity5 },
    { title: '期待更多闪耀', desc: '好奇心驱使我不断探索，下一个闪耀时刻，或许就在不远的前方。', color: 'bg-brutal-yellow', isCTA: true, image: activity6 },
  ];

  return (
    <section id="campus" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ rotate: -1 }}
          animate={{ rotate: [ -1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block relative"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 bg-white border-4 border-black px-8 py-4 brutal-shadow relative z-10">
            这些场合是一个普通女孩的 <br className="md:hidden" />
            <span className="relative">
              小小闪耀时刻
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-8 text-4xl"
              >
                ✨
              </motion.span>
            </span>
          </h2>
          {/* Decorative blobs behind title */}
          <div className="absolute -top-2 -left-2 w-full h-full bg-brutal-pink -z-10 rounded-2xl"></div>
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-brutal-blue -z-10 rounded-2xl"></div>
        </motion.div>
        <p className="text-neutral-600 max-w-2xl mx-auto mt-8 font-bold">
          在不同的舞台上，我都在努力散发着属于自己的微光。
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {moments.map((m, i) => (
          <div key={i} className={`brutal-card brutal-shadow p-8 flex flex-col ${m.color}`}>
            <div className="h-48 bg-neutral-100 rounded-xl border-2 border-black mb-6 flex items-center justify-center overflow-hidden">
               {m.image ? (
                 <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
               ) : (
                 <div className="w-20 h-20 border-2 border-black rounded-lg bg-white brutal-shadow"></div>
               )}
            </div>
            <h3 className="text-xl font-bold mb-3">{m.title}</h3>
            <p className="text-neutral-600 mb-6 flex-grow">{m.desc}</p>
            {m.isCTA ? (
              <button className="brutal-btn-primary w-full justify-center">
                <Mail size={18} /> 开启新篇章
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

const WorldMapSection = () => {
  const travelPhotos = [
    { title: '慕尼黑', date: '2024.08', color: 'bg-brutal-blue', rotate: -5, image: img10 },
    { title: '法兰克福', date: '2024.08', color: 'bg-brutal-pink', rotate: 3, image: img2 },
    { title: '海德堡', date: '2024.08', color: 'bg-brutal-yellow', rotate: -2, image: img3 },
    { title: '巴黎', date: '2024.08', color: 'bg-brutal-purple', rotate: 4, image: img6 },
    { title: '弗洛伦萨', date: '2024.08', color: 'bg-brutal-blue', rotate: -3, image: img9 },
    { title: '米兰', date: '2024.08', color: 'bg-brutal-pink', rotate: 2, image: img1 },
    { title: '捷克', date: '2024.08', color: 'bg-brutal-yellow', rotate: -4, image: img4 },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative">
        <div className="inline-block relative">
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10 flex items-center justify-center gap-2">
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                y: [0, -5, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <MapIcon size={40} className="text-brutal-blue" />
            </motion.div>
            
            <div className="flex">
              {"我的".split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="bg-brutal-pink text-white px-2 mx-1 relative">
                {"世界地图".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: (i + 2) * 0.1 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {"探索".split("").map((char, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: (i + 6) * 0.1 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Playful Plane Flying Around */}
            <motion.div
              animate={{ 
                x: [0, 100, 0, -100, 0],
                y: [0, -20, -40, -20, 0],
                rotate: [0, 45, 90, 45, 0],
                scale: [1, 1.2, 0.8, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-12"
            >
              <Plane size={32} className="text-brutal-pink" />
            </motion.div>
          </h2>
        </div>

        <p className="text-xl font-bold mt-8 flex items-center justify-center gap-2">
          <Compass className="animate-spin-slow" />
          生活不止眼前的苟且~还有诗和远方的田野~
        </p>
      </div>

      {/* Rope Container */}
      <div className="relative pt-20 pb-32">
        {/* The Rope */}
        <div className="absolute top-10 left-[-10%] right-[-10%] h-1 bg-black border-b-2 border-dashed border-white/20 z-0"></div>
        
        {/* Photos on the rope */}
        <div className="flex gap-8 px-12 overflow-x-auto no-scrollbar pb-12">
          {travelPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="flex-shrink-0 flex flex-col items-center group"
            >
              {/* Hanging Line */}
              <div className="w-0.5 h-10 bg-black mb-[-2px] relative z-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
              </div>
              
              {/* Photo Card */}
              <motion.div
                whileHover={{ rotate: 0, y: 5, scale: 1.05 }}
                style={{ rotate: photo.rotate }}
                className={`brutal-card brutal-shadow p-3 border-4 border-black ${photo.color} w-64 cursor-pointer transition-transform`}
              >
                <div className="bg-white border-2 border-black rounded-lg aspect-[4/5] overflow-hidden mb-4 relative">
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                   {photo.image ? (
                     <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                        <Navigation size={48} className="text-neutral-300 group-hover:text-brutal-blue transition-colors" />
                     </div>
                   )}
                </div>
                <div className="bg-white border-2 border-black p-2 rounded flex justify-between items-center">
                   <span className="font-black text-sm">{photo.name || photo.title}</span>
                   <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded font-bold">{photo.date}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
         <p className="font-bold text-neutral-500 italic">滑动查看更多足迹 ➔</p>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const mainTasks = [
    { date: '2025.12', title: '跨境产品运营', desc: '从独立站正式开启跨境电商小白的进阶之路，探索欧美市场。', color: 'border-brutal-blue' },
    { date: '2025.09', title: '上海商学院', desc: '逐渐成为英语＋国际商务的复合型人才，沉淀专业知识。', color: 'border-brutal-blue' },
    { date: '2025.06', title: '抖音达人', desc: '尝试抖音探店达人和直播，第一次成为一名真正的电商人。', color: 'border-brutal-blue' },
    { date: '2024.08', title: '慕尼黑大学', desc: '去更大的平台感受更大的世界，为跨专业奠定了基础', color: 'border-brutal-blue' },
    { date: '2021.09', title: '安徽师范大学', desc: '开始我的师范生生涯，实现了自己各方面能力的跨越。', color: 'border-brutal-blue' },
  ];

  const sideTasks = [
    { date: '2025.03', title: 'AI 探索家', desc: '激动地探索各种GenAI，学习做图做视频和AI编程，对新鲜事物永远保持好奇！', color: 'border-brutal-pink' },
    { date: '2025.11', title: '第八届国际进口博览会', desc: '在实践中不断夯实自己的专业知识，结识更多朋友', color: 'border-brutal-pink' },
    { date: '2024.05', title: '发现播客新大陆', desc: '安利声动早咖啡和搞钱女孩！从此成为我的每日精神食粮。', color: 'border-brutal-pink' },
    { date: '2024.05', title: '奇瑞汽车文化节', desc: '作为语言志愿者，用语言碰撞世界，传播地方文化。', color: 'border-brutal-pink' },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 inline-block bg-brutal-yellow text-black px-6 py-3 border-4 border-black rounded-2xl brutal-shadow">
          {"地球Online 游戏进展".split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>

      <div className="brutal-card brutal-shadow bg-[#f8f8f8] border-4 border-black p-8 md:p-12 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 grid md:grid-cols-[1fr_2px_1fr] gap-8 md:gap-20">
          {/* Main Tasks (Left) */}
          <div className="space-y-12 md:pr-12">
            <div className="flex justify-center md:justify-end mb-12">
              <div className="bg-white border-2 border-black px-6 py-2 rounded-xl font-black brutal-shadow-hover rotate-[-1deg] border-t-brutal-blue border-l-brutal-blue">
                主线任务
              </div>
            </div>
            <div className="space-y-16">
              {mainTasks.map((task, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-center md:items-end text-center md:text-right group"
                >
                  <div className={`bg-white border-4 border-black p-6 rounded-2xl brutal-shadow group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all max-w-sm relative ${task.color}`}>
                    <div className="bg-brutal-blue text-white text-[10px] font-black px-2 py-0.5 rounded-md border-2 border-black w-fit mb-2 ml-auto md:mr-0">
                      {task.date}
                    </div>
                    <h4 className="text-xl font-black mb-2">{task.title}</h4>
                    <p className="text-sm text-neutral-600 font-bold">{task.desc}</p>
                    {/* Connecting line to timeline (desktop) */}
                    <div className="hidden md:block absolute top-1/2 -right-24 w-12 border-t-4 border-dashed border-black opacity-30"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical Timeline (Center) */}
          <div className="hidden md:flex flex-col items-center py-20 relative">
            <div className="h-full w-1 border-l-4 border-dashed border-black opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between py-32">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="w-4 h-4 bg-white border-4 border-black rounded-full -ml-[7px] brutal-shadow-hover"></div>
               ))}
            </div>
          </div>

          {/* Side Tasks (Right) */}
          <div className="space-y-12 md:pl-12">
            <div className="flex justify-center md:justify-start mb-12">
              <div className="bg-white border-2 border-black px-6 py-2 rounded-xl font-black brutal-shadow-hover rotate-[1deg] border-t-brutal-pink border-r-brutal-pink">
                支线任务
              </div>
            </div>
            <div className="space-y-16 md:mt-24">
              {sideTasks.map((task, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  <div className={`bg-white border-4 border-black p-6 rounded-2xl brutal-shadow group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all max-w-sm relative ${task.color}`}>
                    <div className="bg-brutal-pink text-white text-[10px] font-black px-2 py-0.5 rounded-md border-2 border-black w-fit mb-2">
                      {task.date}
                    </div>
                    <h4 className="text-xl font-black mb-2">{task.title}</h4>
                    <p className="text-sm text-neutral-600 font-bold">{task.desc}</p>
                    {/* Connecting line to timeline (desktop) */}
                    <div className="hidden md:block absolute top-1/2 -left-24 w-12 border-t-4 border-dashed border-black opacity-30"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArticlesSection = () => {
  const articles = [
    { title: 'Prom 2026 Trend Forecast: 5 Viral Dress Styles That Will Steal the Spotlight', date: '2025年12月', author: 'yoyo—NAFORI', category: '文章', image: b1, desc: '分享关于设计、技术和职业发展的最新见解与技巧。' },
    { title: '探店视频引流推广', category: '探店', image: b2, desc: '分享美食' },
    { title: '小米线下门店推广视频', category: '推广', image: b3, desc: '分享开店福利和产品介绍' },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-black">Blogs与短视频</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="brutal-card brutal-shadow p-0 flex flex-col">
          <div className="bg-neutral-100 h-64 border-b-2 border-black flex items-center justify-center relative overflow-hidden">
             <img src={b1} alt={articles[0].title} className="w-full h-full object-cover" />
             <span className="absolute top-4 right-4 brutal-badge z-10">{articles[0].category}</span>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-black mb-6">{articles[0].title}</h3>
            <div className="flex items-center gap-3">
              <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute+cartoon+girl+avatar&image_size=square" alt="yoyo avatar" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              <div>
                <p className="font-bold text-sm">{articles[0].author}</p>
                <p className="text-xs text-neutral-500">{articles[0].date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {articles.slice(1).map((a, i) => (
            <div key={i} className="brutal-card brutal-shadow p-6 flex gap-6 items-center">
              <div className="w-32 h-32 bg-neutral-100 border-2 border-black rounded-xl flex-shrink-0 relative">
                 <div className="w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
                   {a.image ? (
                     <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-12 h-12 border-2 border-black rounded bg-white"></div>
                   )}
                 </div>
                 <span className="absolute -top-2 -right-2 brutal-badge text-[8px] z-10">{a.category}</span>
              </div>
              <div>
                <h3 className="text-xl font-black mb-2">{a.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Styled Text */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black mb-2 italic">Welcome to</h2>
            <div className="bg-brutal-blue text-white text-4xl md:text-6xl font-black px-6 py-4 w-fit border-4 border-black rounded-2xl brutal-shadow rotate-[-2deg]">
              yoyo的世界！
            </div>
          </div>
          
          <div className="space-y-6 text-lg font-bold text-neutral-800 leading-relaxed">
            <p>
              我出生于 2003 年，来自安徽的一个名为“中国书画之乡”的美丽小县城。在家人的支持下，我有了敢于挑战自己的勇气。
              Anyway，欢迎来到我的世界！
            </p>
            <p>
              我是一个外表 e 但内心 i 的 ISFJ 小护士，平时喜欢安静，但脑子里总会有很多天马行空的 idea 等着我实现。
              虽然比较喜欢宅家，但一到社交场合我就不会让任何人的话掉在地上，维护社交的和平是小护士的职责~
            </p>
            <p>
              目前正在努力学习 AI 的一切事物，对新鲜事物永远充满好奇，毕竟好奇是我保持热爱生活的第一准则！
              当然，我也对跨境电商感兴趣，正在从电商小白逐渐进阶打怪。总之，我走的每一步都是我真正喜欢的，真的很享受这种快乐！
            </p>
          </div>
          
          <button className="brutal-btn-primary brutal-shadow">
            <User size={18} /> 了解更多
          </button>
        </div>

        {/* Right Side: ID Card */}
        <div className="relative pt-12">
          <motion.div 
            initial={{ rotate: 3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="bg-white border-4 border-black rounded-3xl brutal-shadow p-0 overflow-hidden max-w-sm mx-auto relative"
          >
            {/* Green Header */}
            <div className="bg-[#4ADE80] border-b-4 border-black p-4 flex flex-col gap-1">
              <h3 className="text-2xl font-black italic tracking-tighter">ID CARD</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">SHANGHAI BUSINESS SCHOOL</p>
            </div>

            {/* Card Content */}
            <div className="p-6 grid grid-cols-[120px_1fr] gap-4 items-start relative">
              {/* Left: Avatar & Date */}
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-2xl border-4 border-black overflow-hidden bg-neutral-100">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    src={avatar} 
                    alt="yoyo's Cartoon Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-brutal-blue text-white text-[10px] font-black py-1 px-2 rounded-full border-2 border-black text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  2003.03.03
                </div>
              </div>

              {/* Right: Info Boxes */}
              <div className="flex flex-col gap-3">
                <div className="bg-brutal-yellow border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[8px] font-black uppercase block opacity-60">NAME</span>
                  <span className="text-sm font-black">yoyo</span>
                </div>
                <div className="bg-[#BAE6FD] border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[8px] font-black uppercase block opacity-60">MAJOR</span>
                  <span className="text-sm font-black">英语＋国际商务</span>
                </div>
                <div className="bg-[#DDD6FE] border-2 border-black rounded-xl p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[8px] font-black uppercase block opacity-60">JOB</span>
                  <span className="text-sm font-black">跨境电商进阶版</span>
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="px-6 pb-6 pt-2">
               <div className="flex flex-col gap-1 mb-4">
                  <span className="text-[8px] font-black opacity-40 uppercase tracking-widest">E-Mail</span>
                  <span className="text-xs font-black tracking-widest uppercase">yoyo03032003@outlook.com</span>
               </div>
               
               <div className="flex justify-between items-end">
                  <div className="bg-white border-2 border-black p-2 rounded-lg flex gap-1 h-12 items-center">
                     {[...Array(12)].map((_, i) => (
                       <div key={i} className={`w-0.5 bg-black ${i % 3 === 0 ? 'h-full' : 'h-2/3'}`}></div>
                     ))}
                  </div>
                  <div className="w-14 h-14 bg-[#4ADE80] border-2 border-black rounded-full flex items-center justify-center relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                     <span className="text-[8px] font-black text-center leading-none uppercase">OFFICIAL<br/>VIBE</span>
                  </div>
               </div>
            </div>

            {/* Pink Sticker */}
            <div className="absolute top-2 -right-4 w-16 h-16 bg-brutal-pink border-4 border-black rounded-full flex items-center justify-center rotate-12 brutal-shadow z-20">
               <div className="text-2xl font-black">☺</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-black text-2xl mb-6 mx-auto md:mx-0">
            Y
          </div>
          <p className="text-neutral-400 max-w-xs">
            致力于通过卓越的设计，为全球客户创造价值。
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-neutral-500">菜单</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:text-brutal-blue">首页</a></li>
              <li><a href="#" className="hover:text-brutal-blue">关于</a></li>
              <li><a href="#" className="hover:text-brutal-blue">作品集</a></li>
              <li><a href="#" className="hover:text-brutal-blue">文章</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-neutral-500">社交媒体</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:text-brutal-blue flex items-center gap-2"><Twitter size={16} /> Twitter</a></li>
              <li><a href="#" className="hover:text-brutal-blue flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-brutal-blue flex items-center gap-2"><Github size={16} /> GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© 2024 yoyo. 版权所有。</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">隐私政策</a>
          <a href="#" className="hover:text-white">服务条款</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brutal-yellow selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <div className="bg-black py-12 overflow-hidden whitespace-nowrap border-y-4 border-black rotate-[-2deg] scale-105 z-10 relative">
          <div className="flex gap-12 animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-black text-2xl uppercase italic">
                <div className="w-6 h-6 bg-brutal-blue rounded-full"></div>
                startup venture agency application business company
              </div>
            ))}
          </div>
        </div>
        <AboutSection />
        <PortfolioSection />
        <Services />
        <WorldMapSection />
        <ArticlesSection />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
