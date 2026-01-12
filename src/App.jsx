import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import {
  Database,
  Layers,
  Layout,
  Github,
  Linkedin,
  MessageCircle,
  BrainCircuit,
  Palette,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Home,
  Briefcase,
  User,
  MessageSquare,
  GraduationCap,
  Code2,
  Award,
  Terminal,
  Wrench,
  Cpu as AiIcon,
  Music,
  Heart,
  Sparkles,
  Camera,
  Globe,
  Film
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow, Mousewheel, Navigation } from 'swiper/modules'
import BlastingText from './components/BlastingText'
import GlassCard from './components/GlassCard'
import InterstellarGrid from './components/InterstellarGrid'

import profileImg from './assets/profile.jpg'
import profileHoverImg from './assets/profile_hover.jpg'
import calligraphyImg from './assets/calligraphy.jpg'
import rahmanImg from './assets/ar_rahman.jpg'
import crmImg from './assets/Project/Screenshot 2026-01-06 004858.png'
import crmImg2 from './assets/Project/Screenshot 2026-01-05 024311.png'
import crmImg3 from './assets/Project/app.jpg'
import crmImg4 from './assets/Project/screenshot 2026-01-07 045130.png'
import crmImg5 from './assets/Project/alu.png'
import crmImg6 from './assets/Project/ship.png'
import crmImg7 from './assets/Project/r.png'
import crmImg8 from './assets/Project/my.png'
import crmImg9 from './assets/Project/se.png'
import crmImg10 from './assets/Project/vort.png'
import crmImg11 from './assets/Project/sit.png'
import crmImg12 from './assets/Project/iot.jpg'
import naitaLogo from './assets/education/channels4_profile.jpg'
import aiuLogo from './assets/education/AIU-Official-Logo-01.png'
import python from './assets/certificate/python.png'
import cloud from './assets/certificate/google-cloud.png'
import ibm from './assets/certificate/ibm.png'
import sta from './assets/certificate/st.png'
import nvq from './assets/certificate/nvq.jpg'
import photo1 from './assets/hobbies/photography/photo1.jpg'
import photo2 from './assets/hobbies/photography/photo2.jpg'
import photo3 from './assets/hobbies/photography/photo3.jpg'
import photo4 from './assets/hobbies/photography/photo4.jpg'
import photo5 from './assets/hobbies/photography/photo5.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import './App.css'

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showIntro, setShowIntro] = useState(true);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const words = ["Hi,", "YOU'RE,", "WELCOME!"];
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isHoveringElement, setIsHoveringElement] = useState(false);
  const [isPhotoHobbyHovered, setIsPhotoHobbyHovered] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoHobbyImages = [photo1, photo2, photo3, photo4, photo5];

  useEffect(() => {
    let interval;
    if (isPhotoHobbyHovered) {
      interval = setInterval(() => {
        setActivePhotoIndex((prev) => (prev + 1) % photoHobbyImages.length);
      }, 150); // Speed of the "animation"
    } else {
      setActivePhotoIndex(0);
    }
    return () => clearInterval(interval);
  }, [isPhotoHobbyHovered]);

  const stars = [
    { id: 1, top: '10%', left: '15%', size: 2, delay: 0 },
    { id: 2, top: '20%', left: '80%', size: 3, delay: 0.5 },
    { id: 3, top: '70%', left: '10%', size: 1, delay: 1.2 },
    { id: 4, top: '80%', left: '70%', size: 2, delay: 0.8 },
    { id: 5, top: '45%', left: '90%', size: 1.5, delay: 1.5 },
    { id: 6, top: '5%', left: '50%', size: 1, delay: 2 },
    { id: 7, top: '95%', left: '40%', size: 2, delay: 0.3 },
    { id: 8, top: '30%', left: '5%', size: 1.5, delay: 0.7 },
    { id: 9, top: '60%', left: '95%', size: 2.5, delay: 1.1 },
    { id: 10, top: '15%', left: '35%', size: 1, delay: 1.8 },
    { id: 11, top: '85%', left: '25%', size: 3, delay: 0.2 },
    { id: 12, top: '40%', left: '20%', size: 1, delay: 0.9 },
    { id: 13, top: '75%', left: '85%', size: 2, delay: 1.4 },
    { id: 14, top: '10%', left: '95%', size: 1, delay: 0.6 },
    { id: 15, top: '50%', left: '5%', size: 2, delay: 1.3 },
  ];

  const handleHireClick = (e) => {
    e.preventDefault();
    const linkedinUrl = "https://www.linkedin.com/in/mohmaed-afrath-mohamed-naseer-3360963a5";
    const end = Date.now() + (2 * 1000);
    const colors = ['#111', '#444', '#888', '#ccc'];

    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: colors, zIndex: 2000 });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: colors, zIndex: 2000 });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());

    setTimeout(() => { window.open(linkedinUrl, '_blank'); }, 1500);
  };

  const categories = ['All', 'ML & Data Science/AI', 'UI/UX', 'Full Stack', 'Others'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const isInteractive = e.target.closest('a, button, .glass-card, .profile-container, .filter-btn');
      setIsHoveringElement(!!isInteractive);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  const projects = [
    {
      title: "SmartHire AI",
      role: "Full Stack • ML & AI • UI/UX",
      category: ["Full Stack", "ML & Data Science/AI", "UI/UX"],
      desc: "SmartHire AI is an advanced recruitment automation system designed to streamline the hiring process.",
      img: crmImg,
      link: "https://github.com/naseermohamedafrath001/SmartHire-AI_Recruitment-Platform",
      tags: ["React", "Flask", "Python", "JS", "REST APIs", "SQLite", "LLMs", "Google Gemini API", "NLP", "AI Chatbots", "Figma"]
    },
    {
      title: "ScribeScan",
      role: "ML & AI • UI/UX",
      category: ["ML & Data Science/AI", "UI/UX"],
      desc: "It is a web-based application designed to identify student IDs from handwriting samples using Deep Learning.",
      img: crmImg2,
      link: "https://github.com/naseermohamedafrath001/ScribeScan_Professional-Handwriting-Recognition",
      tags: ["Figma", "Deep Learning", "Python", "Flask", "Computer Vision", "JS", "HTML", "CSS", "SQLite",]
    },
    {
      title: "ThermalAi+",
      role: "Full Stack • ML & AI • UI/UX",
      category: ["Full Stack", "ML & Data Science/AI", "UI/UX"],
      desc: "It is a healthcare monitoring system (Mobile App) designed to assist nurses and healthcare providers in ICU patient care.",
      img: crmImg3,
      link: "https://github.com/naseermohamedafrath001/ICU-Patient-Posture-Monitoring-App-TAi-",
      tags: ["Python", "Flutter", "JS", "HTML", "CSS", "SQLite", "Figma", "PyTorch", "Keras", "OpenCV", "NumPy", "RESTful API", "Flask",]
    },
    {
      title: "E-commerce-Intelligence-Hub",
      role: "Data Analysis",
      category: ["ML & Data Science/AI"],
      desc: "This project transforms raw transactional data into actionable business intelligence.",
      img: crmImg4,
      link: "https://github.com/naseermohamedafrath001/E-commerce-Intelligence-Hub_A-PowerBI-Project",
      tags: ["Python", "Pandas", "PowerBI", "Scikit-Learn",],
    },
    {
      title: "Almni Management System - AIU",
      role: "Full Stack • UI/UX",
      category: ["Full Stack", "UI/UX"],
      desc: "AIU Alumni Management System – Web-based platform connecting alumni and students",
      img: crmImg5,
      link: "https://github.com/naseermohamedafrath001/AIU-Alumni-Management-System",
      tags: ["HTML", "CSS", "JavaScript", "Figma", "MySQL", "Python"],
    },
    {
      title: "E-commerce-Shipment-Delivery-Prediction",
      role: "ML & AI • Data Analysis",
      category: ["ML & Data Science/AI"],
      desc: "Predicting shipment delivery delays is a critical challenge in e-commerce logistics using ML",
      img: crmImg6,
      link: "https://github.com/naseermohamedafrath001/E-commerce-Shipment-Delivery-Prediction-Machine-Learning-",
      tags: ["Python", "PowerBI",],
    },
    {
      title: "Students-Performance-Analysis",
      role: "Data Analysis",
      category: ["Others"],
      desc: "An R-based exploratory data analysis (EDA) project for analyzing student academic performance.",
      img: crmImg7,
      link: "https://github.com/naseermohamedafrath001/Students-Performance-Analysis-using-R-Lang.",
      tags: ["R",],
    },
    {
      title: "My Portfolio",
      role: "UI/UX",
      category: ["UI/UX"],
      desc: "A minimalist developer portfolio built with React & Vite. Features interactive cursor animations, bento-grid layouts, and glassmorphism.",
      img: crmImg8,
      link: "https://github.com/naseermohamedafrath001?tab=repositories",
      tags: ["Figma", "Photoshop", "React", "Vite"],
    },
    {
      title: "Airline Sentiment Analysis System using NLP",
      role: "Full Stack • ML & AI • NLP • Data Analysis",
      category: ["ML & Data Science/AI", "Full Stack"],
      desc: "A Python-based sentiment analysis system to recognize and examine emotional states in airline-related tweets.",
      img: crmImg9,
      link: "https://github.com/naseermohamedafrath001/Sentiment-Analysis-System-using-NLP",
      tags: ["Python", "Flask", "HTML", "CSS", "JS"],
    },
    {
      title: "VortexFinance",
      role: "Full Stack • ML & AI • UI/UX",
      category: ["Full Stack", "ML & Data Science/AI", "UI/UX"],
      desc: "A Python-based sentiment analysis system to recognize and examine emotional states in airline-related tweets.",
      img: crmImg10,
      link: "https://github.com/naseermohamedafrath001/Full-Stack-Expense-Tracking-and-Budgeting-Platform",
      tags: ["React", "TailwindCSS", "Recharts", "Framer Motion", "HTML", "JS", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Socket.io", "OCR Processing"],
    },
    {
      title: "Sinhala-text-simplification",
      role: "ML & AI • NLP • Data Analysis",
      category: ["ML & Data Science/AI", "Others"],
      desc: "Prompting LLMs for Low-Resource Text Simplification: A Comprehensive Evaluation on the Sinhala SiTSE Dataset.",
      img: crmImg11,
      link: "https://github.com/naseermohamedafrath001/sinhala-text-simplification",
      tags: ["Python", "Jupyter Notebook", "NLP", "LLM", "SiTSE"],
    },
    {
      title: "IoT based line following robot with cloud monitoring",
      role: "Internet of Things",
      category: ["Others"],
      desc: "an IoT-enabled mobile robot system that focus is not on building a working robot, but on demonstrating, system architecture, and components.",
      img: crmImg12,
      link: "https://github.com/naseermohamedafrath001/IoT-based-line-following-robot-with-cloud-monitoring",
      tags: ["MQTT", "WorkflowIcon", "IoT - enabled mobile robot", "Cloud monitoring"],
    }
  ];

  const tools = [
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
    { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
    { name: "Keras", icon: "https://cdn.simpleicons.org/keras" },
    { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
    { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
    { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
    { name: "Power BI", icon: "https://api.iconify.design/logos:microsoft-power-bi.svg" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Photoshop", icon: "https://skillicons.dev/icons?i=ps" },
    { name: "Illustrator", icon: "https://skillicons.dev/icons?i=ai" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
    { name: "R", icon: "https://cdn.simpleicons.org/r" }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="portfolio-app">
      <InterstellarGrid />
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          >
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="intro-star"
                style={{
                  position: 'absolute',
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  boxShadow: star.size > 2 ? '0 0 8px white' : 'none',
                }}
                animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, star.size > 2 ? 1.4 : 1.2, 1] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
              />
            ))}
            <div className="intro-text-mask">
              <motion.div
                className="intro-text-stack"
                animate={{ y: [120, 60, 60, 0, 0, -60, -60, -180] }}
                transition={{ duration: 4.5, times: [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.9, 1], ease: [0.85, 0, 0.15, 1] }}
                onUpdate={(latest) => {
                  const y = latest.y;
                  if (y > 90) setCurrentWordIndex(-1);
                  else if (y > 30) setCurrentWordIndex(0);
                  else if (y > -30) setCurrentWordIndex(1);
                  else if (y > -90) setCurrentWordIndex(2);
                  else setCurrentWordIndex(-1);
                }}
                onAnimationComplete={() => setShowIntro(false)}
              >
                {words.map((word, i) => {
                  const isActive = currentWordIndex === i;
                  return (
                    <motion.div
                      key={i}
                      className="intro-word"
                      animate={{
                        color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.15)",
                        WebkitTextStroke: isActive ? "0px #ffffff" : "1px rgba(255, 255, 255, 0.3)",
                        scale: isActive ? 1.3 : 0.8,
                        rotateX: isActive ? 0 : (i < currentWordIndex ? 25 : -25),
                        opacity: isActive ? 1 : 0.4
                      }}
                      transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.4 }}
                    >
                      {word}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="cursor-lens"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: isHoveringElement ? -40 : -20,
          translateY: isHoveringElement ? -40 : -20,
          width: isHoveringElement ? 80 : 40,
          height: isHoveringElement ? 80 : 40,
        }}
      />

      <AnimatePresence>
        {!showIntro && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            {isSidebarOpen && (
              <>
                <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSidebarOpen(false)} />
                <motion.div className="sidebar-panel" initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} transition={{ type: "spring", damping: 25, stiffness: 200 }}>
                  <div style={{ position: 'absolute', right: 30, top: 30, cursor: 'pointer' }} onClick={() => setIsSidebarOpen(false)}><X size={28} /></div>
                  <a href="#" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Home size={22} /> Home</a>
                  <a href="#work" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Briefcase size={22} /> Projects</a>
                  <a href="#skills" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Code2 size={22} /> Skills</a>
                  <a href="#tools" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Wrench size={22} /> Tools</a>
                  <a href="#education" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><GraduationCap size={22} /> Education</a>
                  <a href="#certificates" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Award size={22} /> Certificates</a>
                  <a href="#interests" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Heart size={22} /> Interests</a>
                  <a href="#contact" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><MessageSquare size={22} /> Contact</a>
                </motion.div>
              </>
            )}

            <nav className="navbar container">
              <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}><Menu size={20} /></div>
              <div className="logo" style={{ marginLeft: '60px' }}>
                <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-1px', color: '#111' }}>PORTFOLIO.</span>
              </div>
              <div className="nav-links">
                <a href="#work">Projects</a>
                <a href="#tools">Tools</a>
                <a href="#interests">Interests</a>
                <a href="#" className="btn-primary" onClick={handleHireClick}>Hire <ChevronRight size={16} /></a>
              </div>
            </nav>

            <main className="container">
              <section className="section-padding hero-section">
                <div className="hero-background">
                  <img src={calligraphyImg} alt="Background decoration" className="calligraphy-img" />
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="profile-container" onMouseEnter={() => setIsPhotoHovered(true)} onMouseLeave={() => setIsPhotoHovered(false)}>
                    <motion.img src={profileImg} alt="Imthar" className="profile-img base-img" animate={{ opacity: isPhotoHovered ? 0 : 1, scale: isPhotoHovered ? 1.1 : 1, filter: isPhotoHovered ? 'blur(10px)' : 'blur(0px)' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />
                    <motion.img src={profileHoverImg} alt="Imthar Hover" className="profile-img hover-img" initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} animate={{ opacity: isPhotoHovered ? 1 : 0, scale: isPhotoHovered ? 1 : 0.9, filter: isPhotoHovered ? 'blur(0px)' : 'blur(10px)' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />
                  </div>
                  <span className="role-tag">Mohamed Naseer Mohamed Afrath</span>
                  <h1 className="hero-title"><BlastingText text="Crafting Intelligent" /> <br /><BlastingText text="Software Solutions." /></h1>
                  <p className="hero-subtitle">Intresting in ML, Data Science with AI, Full Stack Development and UI/UX Design</p>
                </motion.div>
              </section>

              <section id="work" className="project-slider" style={{ paddingBottom: '80px' }}>
                <div className="filter-bar">
                  {categories.map(cat => (
                    <motion.button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {cat}
                      {activeFilter === cat && <motion.div layoutId="filter-bg" className="filter-active-bg" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    </motion.button>
                  ))}
                </div>
                <div className="slider-container" style={{ position: 'relative' }}>
                  <Swiper
                    key={activeFilter}
                    modules={[Pagination, Autoplay, EffectCoverflow, Mousewheel, Navigation]}
                    navigation={{
                      prevEl,
                      nextEl,
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    mousewheel={{ forceToAxis: true }}
                    slidesPerView={'auto'}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="modern-project-swiper"
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevEl;
                      swiper.params.navigation.nextEl = nextEl;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                  >
                    {filteredProjects.map((project, idx) => (
                      <SwiperSlide key={idx}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>  <GlassCard className="feature-card" delay={idx * 0.1}>
                          <img src={project.img} alt={project.title} className="preview-img" style={{ marginTop: 0, marginBottom: 20 }} />
                          <div className="card-content">
                            <span className="role-tag" style={{ fontSize: '0.65rem', padding: '4px 8px' }}>{project.role}</span>
                            <h3>{project.title}</h3>
                            <p style={{ minHeight: '60px' }}>{project.desc}</p>
                            <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                          </div>
                        </GlassCard>
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button ref={(node) => setPrevEl(node)} className="side-label prev-label">
                    <span>PREV.</span>
                  </button>
                  <button ref={(node) => setNextEl(node)} className="side-label next-label">
                    <span>NEXT.</span>
                  </button>
                </div>
              </section>

              <section id="skills" className="section-padding">
                <div className="section-header"><span className="role-tag">Expertise</span><h2>Professional Skills</h2></div>
                <div className="skills-grid">
                  <GlassCard className="skill-category-card">
                    <div className="icon-box"><AiIcon size={24} /></div>
                    <h3>ML & Data Science|AI</h3>
                    <div className="skill-list">
                      <span>Python</span> <span>TensorFlow</span> <span>Keras</span> <span>PyTorch</span>
                      <span>Scikit-Learn</span> <span>OpenCV</span> <span>Jupyter</span> <span>NumPy</span> <span>PowerBI</span>
                      <span>Computer Vision</span> <span>MS Office Packages</span> <span>NLP</span> <span>LLMs</span> <span>R</span><span>G Colab</span>
                    </div>
                  </GlassCard>
                  <GlassCard className="skill-category-card" delay={0.1}>
                    <div className="icon-box"><Code2 size={24} /></div>
                    <h3>Full Stack</h3>
                    <div className="skill-list">
                      <span>Antigiravity</span> <span>Visual Studio</span><span>HTML</span><span>CSS</span><span>JavaScript</span>
                      <span>React.js</span> <span>json</span><span>Flask</span> <span>Flutter</span><span>Node.js</span><span>RESTful APIs</span> <span>MySQL</span><span>Docker</span><span>Cloud Security</span><span>Networking</span>
                    </div>
                  </GlassCard>
                  <GlassCard className="skill-category-card" delay={0.2}>
                    <div className="icon-box"><Palette size={24} /></div>
                    <h3>UI/UX Design</h3>
                    <div className="skill-list">
                      <span>Figma</span> <span>Photoshop</span> <span>Adobe Illustrator</span> <span>Webflow</span><span>Affinity</span>
                    </div>
                  </GlassCard>
                </div>
              </section>

              <section id="tools" className="section-padding">
                <div className="section-header"><span className="role-tag">Tools</span><h2>Tools I Use</h2></div>
                <div className="tools-grid">
                  {tools.map((tool, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                      <GlassCard className="tool-card"><img src={tool.icon} alt={tool.name} className="tool-icon" /><span className="tool-name">{tool.name}</span></GlassCard>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section id="education" className="section-padding">
                <div className="section-header"><span className="role-tag">Journey</span><h2>Education</h2></div>
                <div className="education-timeline">
                  <GlassCard className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="edu-header">
                        <img src={naitaLogo} alt="University Logo" className="edu-logo" />
                        <div className="edu-text"><span className="date-tag">2020 - 2021</span><h3>NVQ Level 4 in Computer Graphics Design</h3><p className="university">NAITA - National Apprentice and Industrial Training Authority</p></div>
                      </div>
                    </div>
                  </GlassCard>
                  <GlassCard className="timeline-item" delay={0.1}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="edu-header">
                        <img src={aiuLogo} alt="University Logo" className="edu-logo" />
                        <div className="edu-text"><span className="date-tag">2023 - Now</span><h3>Bachelor of Computer Science (Hons.) Data Science</h3><p className="university">AIU - Albukhary International University</p></div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </section>

              <section id="certificates" className="section-padding" style={{ marginBottom: '80px' }}>
                <div className="section-header"><span className="role-tag">Credentials</span><h2>Certifications</h2></div>
                <div className="cert-grid">
                  <GlassCard className="cert-card"><div className="badge-wrapper"><img src={python} alt="Badge" className="cert-badge" /></div><div className="cert-info"><h4>Certified Entry-Level Python Programmer</h4><p>Python | PCEP</p></div><a href="https://verify.openedg.org/" className="view-cert-link">View <ChevronRight size={14} /></a></GlassCard>
                  <GlassCard className="cert-card" delay={0.1}><div className="badge-wrapper"><img src={cloud} alt="Badge" className="cert-badge" /></div><div className="cert-info"><h4>Build a Secure Google Cloud Network Skill Badge</h4><p>Google Cloud</p></div><a href="https://www.credly.com/badges/0d8ff86d-f2ff-4bba-9ecc-65bab711c762/linked_in_profile" className="view-cert-link">View <ChevronRight size={14} /></a></GlassCard>
                  <GlassCard className="cert-card" delay={0.2}><div className="badge-wrapper"><img src={ibm} alt="Badge" className="cert-badge" /></div><div className="cert-info"><h4>Designing User Interfaces and Experiences (UI/UX)</h4><p>IBM</p></div><a href="https://www.coursera.org/account/accomplishments/verify/33W9A18M9GA9" className="view-cert-link">View <ChevronRight size={14} /></a></GlassCard>
                  <GlassCard className="cert-card" delay={0.2}><div className="badge-wrapper"><img src={sta} alt="Badge" className="cert-badge" /></div><div className="cert-info"><h4>Machine Learning Specialization</h4><p>Stanford University</p></div><a href="https://www.coursera.org/account/accomplishments/verify/SNU1BQZYL16M" className="view-cert-link">View <ChevronRight size={14} /></a></GlassCard>
                  <GlassCard className="cert-card" delay={0.2}><div className="badge-wrapper"><img src={nvq} alt="Badge" className="cert-badge" /></div><div className="cert-info"><h4>NVQ Level 4 in Computer Graphics Design</h4><p>National Apprentice and Industrial Training Authority, Sri Lanka</p></div><a href="https://www.coursera.org/account/accomplishments/verify/SNU1BQZYL16M" className="view-cert-link">View <ChevronRight size={14} /></a></GlassCard>
                </div>
              </section>

              <section id="interests" className="section-padding" style={{ marginBottom: '80px' }}>
                <div className="section-header">
                  <span className="role-tag">Life & Inspiration</span>
                  <h2>Interesting Things</h2>
                </div>
                <div className="interests-grid">
                  <GlassCard className="rahman-card highlight-card">
                    <div className="rahman-content">
                      <div className="rahman-info">
                        <div className="icon-box"><Sparkles size={24} /></div>
                        <span className="inspiration-tag">Major Inspiration</span>
                        <h3>A.R. Rahman</h3>
                        <p className="rahman-desc">
                          Academy Award Winner who has inspired me with his spiritual humility and rapid rise to success, always attributing his achievements to God. Even after fame, he remains calm and silent, embracing innovation in every step rather than repeating the old.
                        </p>
                        <div className="rahman-badges">
                          <span className="badge">Honorary President of Trinity Laban</span>
                        </div>
                      </div>
                      <div className="rahman-visual">
                        <img src={rahmanImg} alt="A.R. Rahman" className="rahman-photo" />
                      </div>
                    </div>
                  </GlassCard>

                  <div className="secondary-interests">
                    <GlassCard className="hobby-card" delay={0.1}>
                      <h3>Hobbies</h3>
                      <div className="hobby-list">
                        <div className="hobby-item">
                          <div className="hobby-icon-name">
                            <Palette size={16} />
                            <span>Graphics Design</span>
                          </div>
                        </div>
                        <div
                          className="hobby-item photography-hobby"
                          onMouseEnter={() => setIsPhotoHobbyHovered(true)}
                          onMouseLeave={() => setIsPhotoHobbyHovered(false)}
                        >
                          <div className="hobby-icon-name">
                            <Camera size={16} />
                            <span>Photography</span>
                          </div>
                          <AnimatePresence>
                            {isPhotoHobbyHovered && (
                              <motion.div
                                className="hobby-anim-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <img
                                  src={photoHobbyImages[activePhotoIndex]}
                                  alt="Photography Animation"
                                  className="hobby-anim-img"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="hobby-item">
                          <div className="hobby-icon-name">
                            <Film size={16} />
                            <span>Motion Animation</span>
                          </div>
                        </div>
                        <div className="hobby-item">
                          <div className="hobby-icon-name">
                            <BrainCircuit size={16} />
                            <span>Reminiscing</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard className="additional-skills-card" delay={0.2}>
                      <h3>Additional Skills</h3>
                      <ul className="extra-skills">
                        <li><ChevronRight size={14} /> Basic Bahasa Melayu</li>
                        <li><ChevronRight size={14} /> Creative Thinking</li>
                        <li><ChevronRight size={14} /> Problem Solving</li>
                        <li><ChevronRight size={14} /> Public Speaking</li>
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </section>
            </main>

            <section id="contact" className="contact-section">
              <div className="container">
                <div className="contact-grid">
                  <div className="contact-item"><h4>Email</h4><p>mohamednaseermohamedafrath@gmail.com</p></div>
                  <div className="contact-item"><h4>Social</h4><div className="social-links" style={{ marginTop: '10px' }}><a href="https://github.com/naseermohamedafrath001" className="icon-btn"><Github size={20} /></a><a href="https://www.linkedin.com/in/mohmaed-afrath-mohamed-naseer-3360963a5" className="icon-btn"><Linkedin size={20} /></a><a href="https://wa.link/3soblp" className="icon-btn" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a></div></div>
                  <div className="contact-item"><h4>Location</h4><p>Jln Tun Razak, Bandar Alor Setar, 05200 Alor Setar, Kedah</p></div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .swiper-pagination-bullet-active { background: #111 !important; transform: scale(1.2); }
        .swiper-pagination-bullet { background: #ccc; opacity: 1; transition: all 0.3s ease; }
        .swiper-pagination { position: relative !important; bottom: auto !important; margin-top: 40px !important; display: flex !important; justify-content: center !important; align-items: center !important; gap: 10px; z-index: 10 !important; }
      `}</style>
    </div>
  )
}

export default App
