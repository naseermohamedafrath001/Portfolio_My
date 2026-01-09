import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database,
  Layers,
  Layout,
  Cpu,
  Github,
  Linkedin,
  Twitter,
  BrainCircuit,
  Palette,
  ChevronRight,
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
  Cpu as AiIcon
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import GlassCard from './components/GlassCard'
import profileImg from './assets/profile.jpg'
import profileHoverImg from './assets/profile_hover.jpg'
import calligraphyImg from './assets/calligraphy.jpg'
import crmImg from './assets/Project/Screenshot 2026-01-06 004858.png'
import crmImg2 from './assets/Project/Screenshot 2026-01-05 024311.png'
import crmImg3 from './assets/Project/app.jpg'
import crmImg4 from './assets/Project/screenshot 2026-01-07 045130.png'
import crmImg5 from './assets/Project/alu.png'
import crmImg6 from './assets/Project/ship.png'
import crmImg7 from './assets/Project/r.png'
import crmImg8 from './assets/Project/my.png'
import naitaLogo from './assets/education/channels4_profile.jpg'
import aiuLogo from './assets/education/AIU-Official-Logo-01.png'
import python from './assets/certificate/python.png'
import cloud from './assets/certificate/google-cloud.png'
import ibm from './assets/certificate/ibm.png'
import sta from './assets/certificate/st.png'
import BlastingText from './components/BlastingText'

import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'ML & Data Aanalysis with AI', 'UI/UX', 'Full Stack', 'Others'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "SmartHire AI",
      role: "Full Stack • ML & AI • UI/UX",
      category: ["Full Stack", "ML & Data Aanalysis with AI", "UI/UX"],
      desc: "SmartHire AI is an advanced recruitment automation system designed to streamline the hiring process.",
      img: crmImg,
      link: "https://github.com/naseermohamedafrath001/SmartHire-AI_Recruitment-Platform",
      tags: ["React", "Flask", "Python", "JS", "REST APIs", "SQLite", "LLMs", "Google Gemini API", "NLP", "AI Chatbots", "Figma"]
    },
    {
      title: "ScribeScan",
      role: "ML & AI • UI/UX",
      category: ["ML & Data Aanalysis with AI", "UI/UX"],
      desc: "It is a web-based application designed to identify student IDs from handwriting samples using Deep Learning.",
      img: crmImg2,
      link: "https://github.com/naseermohamedafrath001/ScribeScan_Professional-Handwriting-Recognition",
      tags: ["Figma", "Deep Learning", "Python", "Flask", "Computer Vision", "JS", "HTML", "CSS", "SQLite",]
    },
    {
      title: "ThermalAi+",
      role: "Full Stack • ML & AI • UI/UX",
      category: ["Full Stack", "ML & Data Aanalysis with AI", "UI/UX"],
      desc: "It is a healthcare monitoring system (Mobile App) designed to assist nurses and healthcare providers in ICU patient care.",
      img: crmImg3,
      link: "https://github.com/naseermohamedafrath001/ICU-Patient-Posture-Monitoring-App-TAi-",
      tags: ["Python", "Flutter", "JS", "HTML", "CSS", "SQLite", "Figma", "PyTorch", "Keras", "OpenCV", "NumPy", "RESTful API", "Flask",]
    },
    {
      title: "E-commerce-Intelligence-Hub",
      role: "Data Analysis",
      category: ["ML & Data Aanalysis with AI"],
      desc: "This project transforms raw transactional data into actionable business intelligence.",
      img: crmImg4,
      link: "https://github.com/naseermohamedafrath001/E-commerce-Intelligence-Hub_A-PowerBI-Project",
      tags: ["Python", "Pandas", "PowerBI", "Scikit-Learn",]
    },
    {
      title: "Almni Management System - AIU",
      role: "Full Stack • UI/UX",
      category: ["Full Stack", "UI/UX"],
      desc: "AIU Alumni Management System – Web-based platform connecting alumni and students",
      img: crmImg5,
      link: "https://github.com/naseermohamedafrath001/AIU-Alumni-Management-System",
      tags: ["HTML", "CSS", "JavaScript", "Figma", "MySQL", "Python"]
    },
    {
      title: "E-commerce-Shipment-Delivery-Prediction",
      role: "ML & AI • Data Analysis",
      category: ["ML & Data Aanalysis with AI"],
      desc: "Predicting shipment delivery delays is a critical challenge in e-commerce logistics using ML",
      img: crmImg6,
      link: "https://github.com/naseermohamedafrath001/E-commerce-Shipment-Delivery-Prediction-Machine-Learning-",
      tags: ["Python", "PowerBI",]
    },
    {
      title: "Students-Performance-Analysis",
      role: "Data Analysis",
      category: ["Others"],
      desc: "An R-based exploratory data analysis (EDA) project for analyzing student academic performance.",
      img: crmImg7,
      link: "https://github.com/naseermohamedafrath001/Students-Performance-Analysis-using-R-Lang.",
      tags: ["R",]
    },
    {
      title: "My Portfolio",
      role: "UI/UX",
      category: ["UI/UX"],
      desc: "A minimalist developer portfolio built with React & Vite. Features interactive cursor animations, bento-grid layouts, and glassmorphism.",
      img: crmImg8,
      link: "https://github.com/naseermohamedafrath001?tab=repositories",
      tags: ["Figma", "Photoshop",]
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="portfolio-app">
      {/* Interactive Round Cursor Animations */}
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 100, mass: 0.8 }}
      />

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              className="sidebar-panel"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div style={{ position: 'absolute', right: 30, top: 30, cursor: 'pointer' }} onClick={() => setIsSidebarOpen(false)}>
                <X size={28} />
              </div>
              <a href="#" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Home size={22} /> Home</a>
              <a href="#work" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Briefcase size={22} /> Projects</a>
              <a href="#skills" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Code2 size={22} /> Skills</a>
              <a href="#education" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><GraduationCap size={22} /> Education</a>
              <a href="#certificates" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><Award size={22} /> Certificates</a>
              <a href="#contact" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}><MessageSquare size={22} /> Contact</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav className="navbar container">
        {/* Sidebar Toggle Button - Now Aligned inside Navbar */}
        <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={20} />
        </div>

        <div className="logo" style={{ marginLeft: '60px' }}>
          <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-1px', color: '#111' }}>
            PORTFOLIO.
          </span>
        </div>
        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#contact" className="btn-primary">
            Hire <ChevronRight size={16} />
          </a>
        </div>
      </nav>

      <main className="container">
        <section className="section-padding hero-section">
          {/* Background Reveal Calligraphy */}
          <div className="hero-background">
            <img src={calligraphyImg} alt="Background decoration" className="calligraphy-img" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div
              className="profile-container"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              <motion.img
                src={profileImg}
                alt="Imthar"
                className="profile-img base-img"
                animate={{
                  opacity: isPhotoHovered ? 0 : 1,
                  scale: isPhotoHovered ? 1.1 : 1,
                  filter: isPhotoHovered ? 'blur(10px)' : 'blur(0px)'
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.img
                src={profileHoverImg}
                alt="Imthar Hover"
                className="profile-img hover-img"
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{
                  opacity: isPhotoHovered ? 1 : 0,
                  scale: isPhotoHovered ? 1 : 0.9,
                  filter: isPhotoHovered ? 'blur(0px)' : 'blur(10px)'
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="role-tag">Mohamed Naseer Mohamed Afrath</span>
            <h1 className="hero-title">
              <BlastingText text="Crafting Intelligent" /> <br />
              <BlastingText text="Software Solutions." />
            </h1>
            <p className="hero-subtitle">
              Intresting in ML, Data Analysis with AI, Full Stack Development and UI/UX Design
            </p>
          </motion.div>
        </section>

        <section id="work" className="project-slider" style={{ paddingBottom: '80px' }}>
          <div className="filter-bar">
            {categories.map(cat => (
              <motion.button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="filter-bg"
                    className="filter-active-bg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <Swiper
            key={activeFilter}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 }
            }}
          >
            {filteredProjects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <GlassCard className="feature-card" delay={idx * 0.1}>
                    <img src={project.img} alt={project.title} className="preview-img" style={{ marginTop: 0, marginBottom: 20 }} />
                    <div className="card-content">
                      <span className="role-tag" style={{ fontSize: '0.65rem', padding: '4px 8px' }}>{project.role}</span>
                      <h3>{project.title}</h3>
                      <p style={{ minHeight: '60px' }}>{project.desc}</p>
                      <div className="tags">
                        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section id="skills" className="section-padding">
          <div className="section-header">
            <span className="role-tag">Expertise</span>
            <h2>Professional Skills</h2>
          </div>
          <div className="skills-grid">
            <GlassCard className="skill-category-card">
              <div className="icon-box"><AiIcon size={24} /></div>
              <h3>ML & Data Analysis with AI</h3>
              <div className="skill-list">
                <span>Python</span> <span>TensorFlow</span> <span>Keras</span> <span>PyTorch</span>
                <span>Scikit-Learn</span> <span>OpenCV</span> <span>Pandas</span> <span>NumPy</span> <span>PowerBI</span>
                <span>Computer Vision</span> <span>MS Office Packages</span> <span>NLP</span> <span>LLMs</span> <span>R</span>
              </div>
            </GlassCard>
            <GlassCard className="skill-category-card" delay={0.1}>
              <div className="icon-box"><Code2 size={24} /></div>
              <h3>Full Stack</h3>
              <div className="skill-list">
                <span>React.js</span> <span>Flask</span> <span>Flutter</span> <span>JavaScript</span>
                <span>Node.js</span> <span>RESTful APIs</span> <span>MySQL</span><span>HTML</span><span>CSS</span>
              </div>
            </GlassCard>
            <GlassCard className="skill-category-card" delay={0.2}>
              <div className="icon-box"><Palette size={24} /></div>
              <h3>UI/UX Design</h3>
              <div className="skill-list">
                <span>Figma</span> <span>Photoshop</span> <span>Adobe Illustrator</span> <span>Affinity</span>

              </div>
            </GlassCard>
          </div>
        </section>

        <section id="education" className="section-padding">
          <div className="section-header">
            <span className="role-tag">Journey</span>
            <h2>Education</h2>
          </div>
          <div className="education-timeline">
            <GlassCard className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="edu-header">
                  <img src={naitaLogo} alt="University Logo" className="edu-logo" />
                  <div className="edu-text">
                    <span className="date-tag">2020 - 2021</span>
                    <h3>NVQ Level 4 in Computer Graphics Design
                    </h3>
                    <p className="university">NAITA - National Apprentice and Industrial Training Authority
                    </p>
                  </div>
                </div>
                <p className="edu-desc">Specializing in Software Engineering and Artificial Intelligence. Currently maintaining a high GPA and leading the AI Student Society.</p>
              </div>
            </GlassCard>

            <GlassCard className="timeline-item" delay={0.1}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="edu-header">
                  <img src={aiuLogo} alt="University Logo" className="edu-logo" />
                  <div className="edu-text">
                    <span className="date-tag">2014 - 2020</span>
                    <h3>Bachelor of Computer Science (Hons.) Data Science</h3>
                    <p className="university">AIU - Albukhary International University</p>
                  </div>
                </div>
                <p className="edu-desc">Relevant coursework in Advanced Mathematics, Computer Science, and Physics. Graduated with Honors.</p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="certificates" className="section-padding" style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <span className="role-tag">Credentials</span>
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            <GlassCard className="cert-card">
              <div className="badge-wrapper">
                <img src={python} alt="Badge" className="cert-badge" />
              </div>
              <div className="cert-info">
                <h4>Certified Entry-Level Python Programmer</h4>
                <p>Python | PCEP</p>
              </div>
              <a href="https://verify.openedg.org/" className="view-cert-link">View <ChevronRight size={14} /></a>
            </GlassCard>
            <GlassCard className="cert-card" delay={0.1}>
              <div className="badge-wrapper">
                <img src={cloud} alt="Badge" className="cert-badge" />
              </div>
              <div className="cert-info">
                <h4>Build a Secure Google Cloud Network Skill Badge</h4>
                <p>Google Cloud</p>
              </div>
              <a href="https://www.credly.com/badges/0d8ff86d-f2ff-4bba-9ecc-65bab711c762/linked_in_profile" className="view-cert-link">View <ChevronRight size={14} /></a>
            </GlassCard>
            <GlassCard className="cert-card" delay={0.2}>
              <div className="badge-wrapper">
                <img src={ibm} alt="Badge" className="cert-badge" />
              </div>
              <div className="cert-info">
                <h4>Designing User Interfaces and Experiences (UI/UX)</h4>
                <p>IBM</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/verify/33W9A18M9GA9" className="view-cert-link">View <ChevronRight size={14} /></a>
            </GlassCard>
            <GlassCard className="cert-card" delay={0.2}>
              <div className="badge-wrapper">
                <img src={sta} alt="Badge" className="cert-badge" />
              </div>
              <div className="cert-info">
                <h4>Machine Learning Specialization</h4>
                <p>Stanford University</p>
              </div>
              <a href="#" className="view-cert-link">View <ChevronRight size={14} /></a>
            </GlassCard>
          </div>
        </section>
      </main>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <h4>Email</h4>
              <p>mohamednaseermohamedafrath@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>Social</h4>
              <div className="social-links" style={{ marginTop: '10px' }}>
                <a href="https://github.com/naseermohamedafrath001" className="icon-btn"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/mohmaed-afrath-mohamed-naseer-3360963a5" className="icon-btn"><Linkedin size={20} /></a>
                <a href="#" className="icon-btn"><Twitter size={20} /></a>
              </div>
            </div>
            <div className="contact-item">
              <h4>Location</h4>
              <p>Jln Tun Razak, Bandar Alor Setar, 05200 Alor Setar, Kedah</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .swiper-pagination-bullet-active { background: #111 !important; }
        .swiper-pagination-bullet { background: #ccc; }
      `}</style>
    </div>
  )
}

export default App
