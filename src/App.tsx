/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  Map, 
  Flag, 
  Tent, 
  ChevronRight, 
  Users, 
  Compass, 
  Star, 
  Trophy,
  BookOpen,
  Mail,
  Instagram,
  Linkedin,
  Code,
  ArrowUp
} from "lucide-react";

// --- Types ---
interface Achievement {
  title: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number; // 0-100
}

// --- Data ---
const achievements: Achievement[] = [
  {
    title: "Pramuka Garuda (Penegak)",
    year: "2023",
    description: "Tingkatan tertinggi dalam golongan Penegak, dicapai melalui pengabdian dan uji kecakapan yang ketat di tingkat Kwartir Cabang.",
    icon: <Star className="w-6 h-6 text-scout-gold" />,
  },
  {
    title: "Peserta Jambore Nasional XI",
    year: "2021",
    description: "Mewakili sekolah dan daerah dalam pertemuan Pramuka Penggalang se-Indonesia di Buperta Cibubur, Jakarta.",
    icon: <Tent className="w-6 h-6 text-scout-green" />,
  },
  {
    title: "Ketua Regu Lomba Pionering",
    year: "2022",
    description: "Juara 1 Lomba Ketangkasan Tali Temali tingkat Kwartir Ranting dengan inovasi desain menara pandang.",
    icon: <Trophy className="w-6 h-6 text-scout-brown" />,
  },
];

const scoutingSkills: Skill[] = [
  { name: "Pionering (Tali Temali)", level: 90 },
  { name: "Semaphore & Morse", level: 85 },
  { name: "Pertolongan Pertama (P3K)", level: 80 },
  { name: "Navigasi Darat", level: 75 },
  { name: "Kepemimpinan", level: 95 },
];

// --- Components ---

const Navbar = () => (
  <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-scout-brown/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Compass className="w-6 h-6 text-scout-brown" />
        <span className="font-serif font-bold text-scout-text tracking-tighter text-xl">Aulia Nur</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-semibold text-scout-brown/70 uppercase tracking-widest">
        <a href="#about" className="hover:text-scout-brown transition-colors">Tentang</a>
        <a href="#achievements" className="hover:text-scout-brown transition-colors">Prestasi</a>
        <a href="#skills" className="hover:text-scout-brown transition-colors">Keterampilan</a>
        <a href="#contact" className="hover:text-scout-brown transition-colors">Kontak</a>
      </div>
      <button id="contact-btn" className="bg-scout-brown text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-scout-text transition-all">
        Hubungi
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-paper">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E7E0D7] -skew-x-12 transform origin-top-right transition-all duration-1000" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block bg-scout-brown/10 text-scout-brown px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Portofolio Digital • XI TKJ 1
        </span>
        <h1 className="text-7xl md:text-8xl font-serif font-bold italic text-scout-text leading-[0.9] tracking-tighter mb-8">
          Aulia <br /> <span className="text-scout-brown">Nur.</span>
        </h1>
        <p className="text-lg text-scout-text/70 max-w-md leading-relaxed mb-10 font-medium">
          Mengintegrasikan semangat kepanduan dengan keahlian Teknik Komputer Jaringan. Fokus pada kepemimpinan digital.
        </p>
        <div className="flex gap-4">
          <a href="#achievements" className="group bg-scout-text text-white px-8 py-4 rounded-full flex items-center gap-2 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-scout-brown/20">
            Lihat Prestasi <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative aspect-square max-w-md mx-auto lg:ml-auto"
      >
        <div className="absolute inset-0 bg-scout-brown rounded-3xl rotate-6 scale-95 opacity-20 -z-10" />
        <div className="absolute inset-0 bg-scout-text rounded-3xl -rotate-3 scale-95 opacity-5 -z-10" />
        <div className="w-full h-full p-4 bg-white rounded-3xl shadow-card relative overflow-hidden flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000" 
            alt="Scouting Scene" 
            className="w-full h-full object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 right-10 p-6 bg-gradient-to-t from-scout-brown/80 to-transparent text-white rounded-b-2xl">
            <p className="font-serif italic text-xl">"Satyaku Kudarmakan, Darmaku Kubaktikan."</p>
          </div>
        </div>
        
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-card border-l-4 border-scout-green flex items-center gap-4">
          <div className="w-12 h-12 bg-scout-gold/20 rounded-full flex items-center justify-center">
            <Trophy className="text-scout-text w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-scout-brown/50 uppercase tracking-widest">Gelar Garuda</p>
            <p className="text-2xl font-serif font-black text-scout-text">Terverifikasi</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 leading-none">
          <h2 className="text-5xl font-serif font-bold text-scout-text mb-8 sticky top-32 leading-tight">
            Pancasila Adalah Dasar, <br /> Darma Adalah <br /> <span className="text-scout-green italic">Navigasi.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-paper rounded-2xl shadow-card border border-scout-brown/5">
              <Users className="w-10 h-10 text-scout-brown mb-6" />
              <h3 className="text-xl font-bold text-scout-text mb-4">Jiwa Pemimpin</h3>
              <p className="text-scout-text/70 text-sm leading-relaxed">Sebagai siswi XI TKJ 1, saya mengintegrasikan disiplin teknologi dengan ketegasan Pramuka.</p>
            </div>
            <div className="p-8 bg-paper rounded-2xl shadow-card border-l-4 border-scout-green">
              <Map className="w-10 h-10 text-scout-green mb-6" />
              <h3 className="text-xl font-bold text-scout-text mb-4">Selalu Siap</h3>
              <p className="text-scout-text/70 text-sm leading-relaxed">Memahami bahwa keberhasilan bukan tentang tujuan, tapi tentang ketangguhan selama perjalanan.</p>
            </div>
          </div>
          <div className="prose prose-xl text-scout-text/70 font-medium leading-relaxed">
            <p>
              Halo! Saya <span className="font-bold text-scout-text">Aulia Nur</span>, seorang Pramuka Penegak yang bersemangat dari kelas XI Teknik Komputer dan Jaringan 1. 
            </p>
            <p className="text-lg">
              Bagi saya, Pramuka bukan sekadar ekstrakurikuler, melainkan jalan hidup untuk membentuk jati diri. Di dunia TKJ, saya belajar logika dan presisi. Di dunia Pramuka, saya belajar empati dan kepemimpinan.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 border border-scout-brown/10 rounded-lg">
                <p className="text-2xl font-bold font-serif text-scout-text">12+</p>
                <p className="text-[10px] uppercase font-bold text-scout-brown/60">Tanda Kecakapan</p>
              </div>
              <div className="text-center p-4 border border-scout-brown/10 rounded-lg">
                <p className="text-2xl font-bold font-serif text-scout-text">04</p>
                <p className="text-[10px] uppercase font-bold text-scout-brown/60">Sertifikat Nasional</p>
              </div>
              <div className="text-center p-4 border border-scout-brown/10 rounded-lg">
                <p className="text-2xl font-bold font-serif text-scout-text">01</p>
                <p className="text-[10px] uppercase font-bold text-scout-brown/60">Gelar Garuda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AchievementsSelection = () => (
  <section id="achievements" className="py-32 bg-paper">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <span className="text-scout-brown/60 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Milestone</span>
          <h2 className="text-6xl font-serif font-bold text-scout-text">Pencapaian Saya.</h2>
        </div>
        <p className="max-w-xs text-scout-text/60 text-sm italic">
          Beberapa pencapaian signifikan yang telah saya raih selama aktif dalam gerakan Pramuka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-2xl shadow-card border border-scout-brown/10 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-paper rounded-full flex items-center justify-center mb-8 border border-scout-brown/5">
              {item.icon}
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold text-white bg-scout-brown px-2 py-1 rounded block uppercase tracking-widest">{item.year}</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-scout-text mb-4 leading-tight">{item.title}</h3>
            <p className="text-scout-text/60 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-32 bg-scout-brown text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12">
      <Flag className="w-96 h-96" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl font-serif font-bold mb-12">Keterampilan Khusus.</h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed italic">
            Pramuka bukan hanya tentang alam, tapi tentang kemahiran teknis yang teruji.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-bold tracking-widest uppercase text-xs">Literasi Digital</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Tent className="w-6 h-6" />
              </div>
              <span className="font-bold tracking-widest uppercase text-xs">Survival Dasar</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-10">
          {scoutingSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-white/80">{skill.name}</span>
                <span className="font-mono text-xs opacity-60">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-scout-gold rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-paper py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-scout-brown/10 pb-20 mb-20">
        <div>
          <h2 className="text-4xl font-serif font-bold text-scout-text mb-4 tracking-tighter italic">Mari Berkarya.</h2>
          <p className="text-scout-brown/60 italic font-medium">"Satyaku Kudarmakan, Darmaku Kubaktikan."</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-scout-text hover:text-white transition-all shadow-card">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-scout-text hover:text-white transition-all shadow-card">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-scout-text hover:text-white transition-all shadow-card">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-scout-brown/50 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© 2024 Aulia Nur - XI TKJ 1 Profile</p>
        <div className="flex gap-6">
          <p>Saka Telematika Member</p>
          <p>Digital Scout Initiative</p>
        </div>
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-scout-text text-white p-4 rounded-full shadow-card hover:bg-scout-brown transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-sans antialiased text-scout-text bg-paper selection:bg-scout-brown selection:text-white">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Hero />
          <About />
          <AchievementsSelection />
          <SkillsSection />
          <Footer />
          <BackToTop />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
