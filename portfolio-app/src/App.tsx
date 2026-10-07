import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import confetti from 'canvas-confetti';
import {
  ArrowUpRight,
  Code2,
  Terminal,
  Cpu,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Layers,
  ChevronDown,
  CheckCircle2,
  Copy,
  Rocket
} from 'lucide-react';

import imgProfile from './assets/images/profile.jpg';
import imgCosmicSky from './assets/images/cosmic-sky.jpg';
import imgAstronaut from './assets/images/astronaut-cyber.png';
import imgPoster from './assets/images/poster-architect.jpg';
import imgXcons from './assets/images/project-xcons.jpg';
import imgAutomotive from './assets/images/project-automotive.jpg';
import imgIdentity from './assets/images/project-identity.jpg';
import imgAiTools from './assets/images/project-ai-tools.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorActive, setCursorActive] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // References
  const heroPinContainerRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const cieloImgRef = useRef<HTMLImageElement>(null);
  const astronautaRef = useRef<HTMLDivElement>(null);
  const astronautaImgRef = useRef<HTMLImageElement>(null);
  const sfondoBlackRef = useRef<HTMLDivElement>(null);
  const heroTextOverlayRef = useRef<HTMLDivElement>(null);

  const rootsSectionRef = useRef<HTMLDivElement>(null);
  const peacePinSectionRef = useRef<HTMLDivElement>(null);
  const peaceRocketRef = useRef<HTMLDivElement>(null);
  const peaceMarqueeRef = useRef<HTMLDivElement>(null);
  const fightPinSectionRef = useRef<HTMLDivElement>(null);
  const fightPosterRef = useRef<HTMLDivElement>(null);
  const brandingSectionRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colMidRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalWrapperRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const rootsBio =
    "Software Engineer con más de 8 años de experiencia construyendo aplicaciones web escalables con React, TypeScript y arquitecturas modernas basadas en APIs. Lidero iniciativas frontend de alto impacto con un enfoque AI-First: integrando Claude, Claude Code y servidores MCP directamente en el ciclo de vida del software, optimizando performance, arquitectura y entrega de valor.".split(
      " "
    );

  const projects = [
    {
      id: 1,
      num: '01',
      role: 'Software Engineer Lead',
      company: 'XCONS',
      period: '2024 — Presente',
      category: 'Enterprise Platform · AI-First Architecture',
      title: 'Plataforma Web Empresarial & Metodología AI-First',
      summary:
        'Liderazgo frontend en React y TypeScript con arquitectura modular y contratos de API escalables.',
      stats: [
        { label: 'Tiempo de Carga', val: '-42%' },
        { label: 'Integración', val: 'Claude + MCP' },
        { label: 'Arquitectura', val: 'Clean SSR' }
      ],
      tags: ['React', 'TypeScript', 'Next.js', 'Claude MCP', 'Design Systems', 'Core Web Vitals'],
      image: imgXcons,
      bulletPoints: [
        'Definición de estándares de ingeniería frontend y contratos API de alta fidelidad',
        'Integración en el IDE de herramientas agénticas (Claude Code) reduciendo deuda técnica',
        'Validación de interfaces con equipos de producto reduciendo ciclos de iteración'
      ]
    },
    {
      id: 2,
      num: '02',
      role: 'React Developer',
      company: 'Promotive LATAM',
      period: '2023 — 2024',
      category: 'Big Data & Telematics Visualization',
      title: 'Ecosistema de Analítica Automotriz & Telemetría',
      summary:
        'Procesamiento masivo y visualización en tiempo real de datos vehiculares en América Latina.',
      stats: [
        { label: 'Procesamiento', val: '+15M datos' },
        { label: 'Componentes', val: 'Sistema Modular' },
        { label: 'Disponibilidad', val: '99.9%' }
      ],
      tags: ['React', 'TypeScript', 'Data Viz', 'State Management', 'REST APIs', 'Tailwind'],
      image: imgAutomotive,
      bulletPoints: [
        'Diseño de interfaces analíticas ultralivianas para monitoreo continuo',
        'Consumo de microservicios y sincronización de datos en tiempo real',
        'Estandarización de patrones UI en todo el equipo de producto'
      ]
    },
    {
      id: 3,
      num: '03',
      role: 'Frontend Developer',
      company: 'VU Inc.',
      period: '2022 — 2023',
      category: 'Cybersecurity & Biometric Identity',
      title: 'Plataformas de Autenticación & Seguridad Digital',
      summary:
        'Interfaces críticas para validación de identidad digital y prevención de fraudes bancarios.',
      stats: [
        { label: 'Seguridad', val: 'Zero-Trust' },
        { label: 'SLA', val: '99.98% Uptime' },
        { label: 'Tecnología', val: 'React + Svelte' }
      ],
      tags: ['React', 'Svelte', 'Web Crypto', 'Identity Mgmt', 'Onboarding', 'Microfrontends'],
      image: imgIdentity,
      bulletPoints: [
        'Desarrollo de módulos de verificación biométrica y autenticación robusta',
        'Optimización del funnel de onboarding reduciendo tasas de abandono',
        'Integración de APIs con estándares estrictos de ciberseguridad'
      ]
    },
    {
      id: 4,
      num: '04',
      role: 'AI-First Systems Lab',
      company: 'Personal R&D',
      period: '2024 — Presente',
      category: 'Agentic Tooling, MCP & Next.js',
      title: 'Laboratorio Agéntico: Model Context Protocol & Auto-Crawl',
      summary:
        'Sistemas agénticos conectados a bases de datos vía MCP con orquestación y pipelines modernos.',
      stats: [
        { label: 'Velocidad', val: 'x3 Prototipado' },
        { label: 'Protocolo', val: 'MCP Nativo' },
        { label: 'Type Safety', val: '100% Strict' }
      ],
      tags: ['Claude Code', 'Model Context Protocol', 'Drizzle ORM', 'Next.js App Router', 'TypeScript', 'Node.js'],
      image: imgAiTools,
      bulletPoints: [
        'Servidores MCP para lectura y edición semántica de repositorios locales',
        'Next.js 15+ con Drizzle ORM y base de datos PostgreSQL node-postgres',
        'Arquitecturas full-stack modernas impulsadas por IA generativa'
      ]
    }
  ];

  const experienceHistory = [
    {
      period: '2024 — 2026',
      role: 'Software Engineer Lead',
      company: 'XCONS',
      badge: 'Liderazgo & AI-First',
      summary:
        'Lidero el desarrollo de aplicaciones web empresariales con React y TypeScript, participando en decisiones técnicas, definición de estándares y coordinación entre frontend, backend y producto. Impulso metodología AI-First con Claude Code y MCPs.'
    },
    {
      period: '2023 — 2024',
      role: 'React Developer',
      company: 'Promotive | LATAM Automotive Data Solutions',
      badge: 'Automotive Data',
      summary:
        'Desarrollé aplicaciones frontend en React y TypeScript para plataformas de datos automotrices utilizadas en Latinoamérica. Construí librerías de componentes reutilizables y escalables.'
    },
    {
      period: '2022 — 2023',
      role: 'Frontend Developer',
      company: 'VU Inc.',
      badge: 'Cybersecurity & Identity',
      summary:
        'Desarrollé y mantuve funcionalidades para plataformas de identidad digital y seguridad utilizando React y Svelte. Optimización de procesos de onboarding y autenticación multifactor.'
    },
    {
      period: '2021 — 2022',
      role: 'Frontend Engineer',
      company: 'Comprando en Grupo',
      badge: 'E-commerce Scale',
      summary:
        'Desarrollé componentes web escalables y pixel-perfect. Lideré la refactorización frontend en Magento 2, implementé web components con Vue.js y metodologías BEM/SMACSS/ITCSS.'
    },
    {
      period: '2017 — 2021',
      role: 'Fullstack Developer',
      company: 'The Fuzzy Fish - Digital Agency',
      badge: 'SSR & Agencias Globales',
      summary:
        'Desarrollo fullstack con Vue.js, Nuxt SSR, WordPress y Laravel. Construcción de sitios y plataformas web para clientes internacionales priorizando performance y UX.'
    },
    {
      period: '2015 — 2017',
      role: 'Fullstack Web Developer',
      company: 'FIRMA',
      badge: 'Fundamentos Web & APIs',
      summary:
        'Desarrollo fullstack con Laravel, JavaScript, HTML5 y CSS3 para aplicaciones comerciales. Gestión de integraciones y bases de datos relacionales.'
    }
  ];

  const skillGroups = [
    {
      title: 'Frontend Architecture',
      skills: ['React', 'TypeScript', 'Next.js (App Router)', 'Vue.js', 'Nuxt', 'Svelte', 'Tailwind CSS', 'GSAP / ScrollTrigger']
    },
    {
      title: 'Backend, APIs & Data',
      skills: ['REST APIs Design', 'API Contracts', 'Node.js Ecosystem', 'SQL / PostgreSQL', 'Drizzle ORM', 'SSR Architectures', 'Auth & JWT']
    },
    {
      title: 'AI-First Development',
      skills: ['Claude Code CLI', 'Model Context Protocol (MCP)', 'Prompt Engineering', 'AI-Assisted Code Reviews', 'Agentic Workflows']
    },
    {
      title: 'Engineering & Delivery',
      skills: ['Design Systems', 'Performance Tuning (Core Web Vitals)', 'Clean Code', 'Git Workflows', 'Cypress & Testing', 'Storybook & Figma']
    }
  ];

  // Cursor follow
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Main Lenis + GSAP ScrollTrigger Integration
  useEffect(() => {
    // Lenis smooth scroll with unified lerp 0.09 as specified in T4
    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.09,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ({ progress }: { progress: number }) => {
      if (progressLineRef.current) {
        progressLineRef.current.style.width = `${progress * 100}%`;
      }
    });

    const mm = gsap.matchMedia();

    // DESKTOP ANIMATIONS (>= 768px)
    mm.add('(min-width: 768px)', () => {
      // 1. HERO PIN (T1: end: "+=200%", no 400vh gap)
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinContainerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      gsap.set(artworkRef.current, { width: '100%', y: '0vh', rotation: 0 });
      gsap.set(cieloImgRef.current, { scale: 1.4 });
      gsap.set(astronautaRef.current, { yPercent: 0 });
      gsap.set(astronautaImgRef.current, { scale: 1, yPercent: 0 });
      gsap.set(sfondoBlackRef.current, { opacity: 0 });
      gsap.set(heroTextOverlayRef.current, { opacity: 1, y: 0 });

      // Smooth fadeout of text (0 -> 25%)
      heroTl.to(heroTextOverlayRef.current, { opacity: 0, y: -40, ease: 'none', duration: 25 }, 0);
      // Gentle cosmic sky zoom-out (0 -> 100%)
      heroTl.to(cieloImgRef.current, { scale: 1.05, ease: 'none', duration: 100 }, 0);
      // Zoom astronaut into screen (scale 1 -> 45) (15 -> 90%)
      heroTl.to(astronautaImgRef.current, { scale: 45, yPercent: -450, ease: 'none', duration: 75 }, 15);
      // Sfondo dark crossfade (70 -> 90%) to cleanly blend into roots
      heroTl.to(sfondoBlackRef.current, { opacity: 1, ease: 'none', duration: 20 }, 70);

      // 2. ROOTS WORD REVEAL
      const words = gsap.utils.toArray<HTMLElement>('.roots-word');
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 6 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: rootsSectionRef.current,
            start: 'top 75%',
            end: 'top 20%',
            scrub: 1
          }
        }
      );

      // 3. PEACE MANIFIESTO PIN (T1: end: "+=300%", no 6000px gap)
      const peaceTl = gsap.timeline({
        scrollTrigger: {
          trigger: peacePinSectionRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1
        }
      });

      peaceTl.fromTo(
        peaceRocketRef.current,
        { yPercent: 120, xPercent: -50, scale: 0.8 },
        { yPercent: -50, xPercent: -50, scale: 1.1, ease: 'none', duration: 75 },
        0
      );
      peaceTl.to(peaceMarqueeRef.current, { xPercent: -35, ease: 'none', duration: 100 }, 0);

      // 4. FIGHT / POSTERS PIN (T1: end: "+=200%")
      const fightTl = gsap.timeline({
        scrollTrigger: {
          trigger: fightPinSectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1
        }
      });

      fightTl.fromTo(
        fightPosterRef.current,
        { width: '420px', height: '560px', scale: 0.95 },
        { width: '100vw', height: '100vh', scale: 1.5, ease: 'none', duration: 100 },
        0
      );

      // 5. BRANDING SECTION PARALLAX
      const brandTl = gsap.timeline({
        scrollTrigger: {
          trigger: brandingSectionRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 1
        }
      });
      brandTl.fromTo(colLeftRef.current, { y: 40, rotation: -2 }, { y: -40, rotation: 2, ease: 'none' }, 0);
      brandTl.fromTo(colMidRef.current, { y: 0 }, { y: -70, ease: 'none' }, 0);
      brandTl.fromTo(colRightRef.current, { y: 50, rotation: 2 }, { y: -30, rotation: -2, ease: 'none' }, 0);

      // 6. PROYECTOS HORIZONTAL PIN (T1: end: "+=3000")
      const wrapper = horizontalWrapperRef.current;
      const section = horizontalSectionRef.current;
      if (wrapper && section) {
        const totalSlides = projects.length;
        gsap.to(wrapper, {
          x: () => -(wrapper.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            end: '+=3000',
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const current = Math.min(Math.floor(self.progress * totalSlides), totalSlides - 1);
              setCurrentSlideIndex(current);
            }
          }
        });
      }
    });

    // MOBILE ADAPTATION (< 768px): T4 - No horizontal, normal flow, gentle scale
    mm.add('(max-width: 767px)', () => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinContainerRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
          pin: true
        }
      });
      heroTl.to(heroTextOverlayRef.current, { opacity: 0, y: -30, ease: 'none', duration: 30 }, 0);
      heroTl.to(astronautaImgRef.current, { scale: 8, yPercent: -150, ease: 'none', duration: 70 }, 15);
      heroTl.to(sfondoBlackRef.current, { opacity: 1, ease: 'none', duration: 25 }, 65);
    });

    // Refresh triggers after assets/fonts load
    ScrollTrigger.refresh();

    return () => {
      mm.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [projects.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vruno182@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#10b981', '#34d399', '#6ee7b7', '#ffffff']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 selection:bg-emerald-400 selection:text-black relative">
      {/* Interactive Cursor */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:flex items-center justify-center ${
          cursorActive ? 'scale-[2.8] bg-emerald-500/20 backdrop-blur-xs border-emerald-300' : 'scale-100'
        }`}
        style={{
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`
        }}
      >
        {cursorText && (
          <span className="text-[7px] uppercase font-mono font-bold tracking-widest text-emerald-300">
            {cursorText}
          </span>
        )}
      </div>

      {/* Top Floating Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-900/60 z-50">
        <div
          ref={progressLineRef}
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-white transition-all duration-75"
          style={{ width: '0%' }}
        />
      </div>

      {/* Minimal Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#000000]/80 border-b border-zinc-800/50 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative group cursor-pointer">
            <img
              src={imgProfile}
              alt="Bruno Villavicencio"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/40 p-[2px] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#000000]" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              Bruno Villavicencio
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                Lead
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono">Software Engineer · Córdoba, AR</div>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-xs uppercase font-mono tracking-wider text-zinc-400">
          <a href="#roots" className="hover:text-emerald-400 transition-colors hidden sm:inline-block">
            01. Perfil
          </a>
          <a href="#proyectos" className="hover:text-emerald-400 transition-colors hidden sm:inline-block">
            02. Obras
          </a>
          <a href="#experiencia" className="hover:text-emerald-400 transition-colors hidden sm:inline-block">
            03. Trayectoria
          </a>
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => {
              setCursorActive(true);
              setCursorText('Copiar');
            }}
            onMouseLeave={() => {
              setCursorActive(false);
              setCursorText('');
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:border-emerald-500 hover:text-emerald-400 transition-all text-xs cursor-pointer active:scale-95 shadow-sm"
          >
            {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="font-mono">{copiedEmail ? 'Email Copiado!' : 'vruno182@gmail.com'}</span>
          </button>
        </nav>
      </header>

      {/* ========================================================
          1. HERO SECTION: #000000 background, Sticky 100vh
          T1: end "+=200%", no 400vh gap, blends with #1b1c1e
          ======================================================== */}
      <section
        ref={heroPinContainerRef}
        className="relative w-full h-screen bg-[#000000] overflow-hidden"
      >
        <div
          ref={artworkRef}
          id="artwork"
          className="relative w-full h-full flex items-center justify-center overflow-hidden will-change-transform"
        >
          {/* Cosmic Sky background */}
          <div id="cielo" className="absolute inset-0 w-full h-full">
            <img
              ref={cieloImgRef}
              src={imgCosmicSky}
              alt="Cosmic Space"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-black/40 to-black/70" />
          </div>

          {/* Astronaut with Bruno's Face inside illuminated helmet */}
          <div
            ref={astronautaRef}
            id="astronauta"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28vw] min-w-[260px] max-w-[390px] pointer-events-none z-10 will-change-transform"
          >
            <img
              ref={astronautaImgRef}
              src={imgAstronaut}
              alt="Bruno Cyber Astronaut Software Engineer"
              className="w-full h-auto drop-shadow-[0_25px_50px_rgba(16,185,129,0.35)] will-change-transform"
            />
          </div>

          {/* Hero Typography with dark backing card for maximum contrast */}
          <div
            ref={heroTextOverlayRef}
            className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-16 pointer-events-none max-w-7xl mx-auto"
          >
            <div className="pt-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>SOFTWARE ENGINEER LEAD · FULLSTACK & AI-FIRST</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 rounded-3xl bg-black/60 backdrop-blur-md border border-zinc-800/80 max-w-4xl">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] [text-wrap:balance]">
                BRUNO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                  VILLAVICENCIO
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-xl font-normal text-zinc-200 leading-relaxed max-w-[65ch]">
                React · TypeScript · Next.js · Arquitecturas Web Escalables · MCP & Claude Code
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400 animate-bounce">
                <ChevronDown className="w-4 h-4" />
                <span>DESPLÁZATE HACIA ABAJO PARA EXPLORAR</span>
              </div>
            </div>
          </div>

          {/* Sfondo crossfade into roots #1b1c1e */}
          <div
            ref={sfondoBlackRef}
            id="sfondo_black"
            className="absolute inset-0 bg-[#1b1c1e] z-30 pointer-events-none will-change-opacity"
          />
        </div>
      </section>

      {/* ========================================================
          2. #ROOTS SECTION: Background #1b1c1e, -margin-top -20px
          T2/T3: High contrast text-zinc-200, py-20, no gaps
          ======================================================== */}
      <section
        id="roots"
        ref={rootsSectionRef}
        className="relative z-20 bg-[#1b1c1e] -mt-5 pt-24 pb-24 px-6 sm:px-14 border-b border-zinc-800"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">
              01 // PERFIL & MANIFIESTO
            </span>
            <span className="text-zinc-400 text-xs font-mono">| REVELADO DINÁMICO</span>
          </div>

          <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-relaxed [text-wrap:balance]">
            {rootsBio.map((word, idx) => (
              <span
                key={idx}
                className="roots-word inline-block mr-3 transition-opacity duration-75 text-zinc-100"
              >
                {word}
              </span>
            ))}
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-zinc-700/60 font-mono">
            <div className="p-4 rounded-xl bg-black/30 border border-zinc-800">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">+8 Años</div>
              <div className="text-xs uppercase text-zinc-300 mt-1">Experiencia Full</div>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-zinc-800">
              <div className="text-3xl sm:text-4xl font-black text-white">Lead</div>
              <div className="text-xs uppercase text-zinc-300 mt-1">Rol en XCONS</div>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-zinc-800">
              <div className="text-3xl sm:text-4xl font-black text-teal-300">AI-1st</div>
              <div className="text-xs uppercase text-zinc-300 mt-1">Claude Code & MCP</div>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-zinc-800">
              <div className="text-3xl sm:text-4xl font-black text-white">Córdoba</div>
              <div className="text-xs uppercase text-zinc-300 mt-1">Argentina</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PEACE / MANIFIESTO: Background #f5f5f5 (T2: Light Rhythm)
          Dark text on light background to break black-on-black fatigue
          ======================================================== */}
      <section
        ref={peacePinSectionRef}
        className="relative w-full h-screen bg-[#f5f5f5] text-[#1b1c1e] overflow-hidden"
      >
        <div className="sticky top-0 w-full h-full flex flex-col items-center justify-center">
          <div
            ref={peaceMarqueeRef}
            className="absolute whitespace-nowrap text-[18vw] font-black uppercase text-zinc-900/[0.06] select-none tracking-tighter will-change-transform"
          >
            REACT TYPESCRIPT NEXTJS CLAUDE CODE MCP ARCHITECTURE LEADERSHIP
          </div>

          <div
            ref={peaceRocketRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 will-change-transform text-center px-6 max-w-3xl"
          >
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-3xl bg-emerald-600/10 border-2 border-emerald-600 flex items-center justify-center text-emerald-600 shadow-xl">
                <Rocket className="w-12 h-12 -rotate-45" />
              </div>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold">
              VELOCIDAD DE EJECUCIÓN AGÉNTICA
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#1b1c1e] mt-4">
              De Cero a Producción
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg font-normal leading-relaxed mt-3 max-w-[65ch]">
              Flujos automatizados asistidos por Claude Code y MCPs que aceleran refactorizaciones, pruebas y despliegues sin perder rigurosidad técnica.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FIGHT / POSTERS: Background #000000
          T1: end "+=200%", high contrast poster
          ======================================================== */}
      <section
        ref={fightPinSectionRef}
        className="relative w-full h-screen bg-[#000000] overflow-hidden"
      >
        <div className="sticky top-0 w-full h-full flex items-center justify-center">
          <div
            ref={fightPosterRef}
            className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex items-center justify-center will-change-transform"
          >
            <img
              src={imgPoster}
              alt="Architecture Poster"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center p-8 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-black/80 px-4 py-1.5 rounded-full border border-emerald-500/40">
                MANIFESTO // 2026
              </span>
              <h2 className="text-5xl sm:text-7xl font-black uppercase text-white mt-4 tracking-tighter">
                ARQUITECTURA <br /> LIMPIA
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PROYECTOS: Background #0d0e12
          T1/T3: 1 línea + 3 métricas grandes, navegable
          ======================================================== */}
      <section
        id="proyectos"
        ref={horizontalSectionRef}
        className="relative w-full md:h-screen overflow-hidden bg-[#0d0e12] border-b border-zinc-800/80"
      >
        <div className="hidden md:flex absolute top-20 left-6 sm:left-12 right-6 sm:right-12 z-30 items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">
              02 // CASOS DE ESTUDIO
            </span>
            <span className="text-zinc-400 font-mono text-xs">| SCROLL HORIZONTAL</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-sm bg-black/60 px-3 py-1 rounded-full border border-zinc-800">
            <span className="text-emerald-400 font-bold">0{currentSlideIndex + 1}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">0{projects.length}</span>
          </div>
        </div>

        {/* Horizontal Container (Stacked on mobile <768px, pinned horizontal on desktop) */}
        <div
          ref={horizontalWrapperRef}
          className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-max items-center will-change-transform py-16 md:py-0"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="w-full md:w-screen min-h-screen md:h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-14 lg:px-20 pt-16 md:pt-20 pb-12"
            >
              <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Image card with dark overlay to protect text */}
                <div
                  onMouseEnter={() => {
                    setCursorActive(true);
                    setCursorText('Explorar');
                  }}
                  onMouseLeave={() => {
                    setCursorActive(false);
                    setCursorText('');
                  }}
                  className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-emerald-400 border border-zinc-700/60 font-semibold">
                        {p.category}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-zinc-200 border border-zinc-700/60">
                        {p.period}
                      </span>
                    </div>
                    <div className="absolute top-5 left-5 text-6xl sm:text-7xl font-black font-mono text-white/20 select-none">
                      {p.num}
                    </div>
                  </div>
                </div>

                {/* Info Card (T3: 1 línea + 3 métricas grandes) */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{p.company}</span>
                      <span>·</span>
                      <span className="text-zinc-400">{p.role}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-zinc-200 text-base sm:text-lg leading-relaxed max-w-[65ch]">
                    {p.summary}
                  </p>

                  <div className="space-y-2">
                    {p.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* 3 Métricas Grandes (T3) */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
                    {p.stats.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/50 border border-zinc-800 text-center">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase font-medium">{s.label}</div>
                        <div className="text-base sm:text-lg font-mono font-black text-emerald-400 mt-1">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. EXPERIENCIA: Background #f5f5f5 (T2: Light Rhythm)
          Dark text on light background
          ======================================================== */}
      <section
        id="experiencia"
        className="py-24 px-6 sm:px-12 bg-[#f5f5f5] text-[#1b1c1e] border-t border-zinc-300"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-mono text-emerald-700 font-bold tracking-wider">
                03 // TRAYECTORIA
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#1b1c1e] mt-2">
                Historial Profesional
              </h2>
            </div>
            <p className="text-zinc-600 text-base max-w-md">
              Evolución desde desarrollo fullstack hasta liderazgo de ingeniería frontend y arquitectura de sistemas complejos.
            </p>
          </div>

          <div className="border-l-2 border-zinc-300 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {experienceHistory.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#f5f5f5] border-2 border-zinc-400 group-hover:border-emerald-600 group-hover:scale-125 transition-all duration-300">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full m-auto mt-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-mono font-bold text-emerald-800 px-2.5 py-0.5 rounded bg-emerald-100 border border-emerald-300">
                    {item.period}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-wider text-zinc-500 font-semibold">{item.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1e] mt-2">
                  {item.role} <span className="text-zinc-600 font-normal">@ {item.company}</span>
                </h3>

                <p className="text-zinc-700 text-base leading-relaxed mt-2 max-w-[65ch]">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-300 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono text-emerald-800 font-bold">Educación Formal</div>
                <div className="text-lg font-bold text-[#1b1c1e]">Técnico Superior en Programación</div>
                <div className="text-sm text-zinc-600">Universidad Tecnológica Nacional (UTN) — Córdoba, Argentina</div>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-300 font-semibold">
              2014 — 2016 · Algoritmos & Bases de Datos
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SKILLS: Background #0d0e12
          T2: Dark section after light experience
          ======================================================== */}
      <section id="skills" className="py-24 px-6 sm:px-12 bg-[#0d0e12] text-zinc-100 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">04 // CAPACIDADES</span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-2">
                Arsenal Tecnológico
              </h2>
            </div>
            <p className="text-zinc-300 text-base max-w-md">
              Especialización en React, arquitecturas escalables, diseño de APIs y flujos agénticos con IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-black/40 border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                  {idx === 0 && <Code2 className="w-5 h-5" />}
                  {idx === 1 && <Layers className="w-5 h-5" />}
                  {idx === 2 && <Cpu className="w-5 h-5" />}
                  {idx === 3 && <Terminal className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.skills.map((s, i) => (
                    <li key={i} className="text-sm font-mono text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. FOOTER: Background #000000
          Clean finish, high contrast
          ======================================================== */}
      <footer id="contacto" className="border-t border-zinc-800 bg-[#000000] pt-24 pb-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-16 border-b border-zinc-800/80">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">¿Hablamos de tu próximo desafío?</span>
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-white mt-3 [text-wrap:balance]">
                Creemos algo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white">
                  extraordinario.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => {
                  setCursorActive(true);
                  setCursorText('Copiar');
                }}
                onMouseLeave={() => {
                  setCursorActive(false);
                  setCursorText('');
                }}
                className="group flex items-center justify-between gap-6 px-8 py-5 rounded-2xl bg-zinc-900 border border-zinc-700 hover:border-emerald-500 hover:bg-zinc-850 transition-all cursor-pointer shadow-xl active:scale-95"
              >
                <div className="text-left">
                  <div className="text-xs uppercase font-mono text-zinc-300 font-semibold">Email Directo</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors">
                    vruno182@gmail.com
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  {copiedEmail ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </div>
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Córdoba, Argentina</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0351 15-631-8939</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-400">
            <div>
              © {new Date().getFullYear()} Bruno Villavicencio — Portfolio Web & Experiencia Interactiva.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/vruno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/thevruno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
