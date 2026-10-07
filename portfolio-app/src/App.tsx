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

  // Roots text array ensuring explicit whitespace preserved
  const rootsBioWords = [
    "Software", "Engineer", "con", "más", "de", "8", "años", "de", "experiencia",
    "construyendo", "aplicaciones", "web", "escalables", "con", "React,", "TypeScript",
    "y", "arquitecturas", "modernas", "basadas", "en", "APIs.", "Lidero", "iniciativas",
    "frontend", "de", "alto", "impacto", "con", "enfoque", "AI-First:", "integrando",
    "Claude,", "Claude", "Code", "y", "servidores", "MCP", "directamente", "en", "el",
    "ciclo", "de", "vida", "del", "software,", "optimizando", "arquitectura,", "performance",
    "y", "entrega", "de", "negocio."
  ];

  const projects = [
    {
      id: 1,
      num: '01',
      role: 'Software Engineer Lead',
      company: 'XCONS',
      period: '2024 — Presente',
      category: 'Enterprise Platform · AI Architecture',
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
        { label: 'Componentes', val: 'Modular System' },
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

  // Main Lenis + GSAP ScrollTrigger Integration
  useEffect(() => {
    // Lenis with exact lerp: 0.09 as defined in setup.js
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
      // 1. HERO PIN (T1: end: "+=180%")
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinContainerRef.current,
          start: 'top top',
          end: '+=180%',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      gsap.set(artworkRef.current, { width: '100%', y: '0vh', rotation: 0 });
      gsap.set(cieloImgRef.current, { scale: 1.35 });
      gsap.set(astronautaRef.current, { yPercent: 0 });
      gsap.set(astronautaImgRef.current, { scale: 1, yPercent: 0 });
      gsap.set(sfondoBlackRef.current, { opacity: 0 });
      gsap.set(heroTextOverlayRef.current, { opacity: 1, y: 0 });

      // Clean, seamless zoom and fade into roots
      heroTl.to(heroTextOverlayRef.current, { opacity: 0, y: -30, ease: 'power1.out', duration: 25 }, 0);
      heroTl.to(cieloImgRef.current, { scale: 1.05, ease: 'power1.out', duration: 100 }, 0);
      heroTl.to(astronautaImgRef.current, { scale: 35, yPercent: -350, ease: 'power2.inOut', duration: 80 }, 10);
      heroTl.to(sfondoBlackRef.current, { opacity: 1, ease: 'power1.inOut', duration: 25 }, 65);

      // 2. ROOTS WORD REVEAL (Fix B: start: 5% 70%, end: top 60%, scrub: 0.3, stagger por palabra con espacios intactos)
      const words = gsap.utils.toArray<HTMLElement>('.roots-word');
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 8 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: rootsSectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 0.3
          }
        }
      );

      // Inline media pills opening animation (C: width 0 -> 100%)
      gsap.utils.toArray<HTMLElement>('.media-pill-inner').forEach((el) => {
        gsap.fromTo(
          el,
          { width: '0%' },
          {
            width: '100%',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Image wipe effect (D: wipe translateY 0 -> -105% & img scale 1.2 -> 1)
      gsap.utils.toArray<HTMLElement>('.img-wipe-container').forEach((container) => {
        ScrollTrigger.create({
          trigger: container,
          start: 'top 75%',
          onEnter: () => container.classList.add('wiped'),
          onLeaveBack: () => container.classList.remove('wiped')
        });
      });

      // 3. PEACE MANIFIESTO PIN (end: "+=300%")
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

      // 4. FIGHT / POSTERS PIN (end: "+=200%")
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

      // 5. BRANDING CARDS PARALLAX (E: rotate +-8deg, col +-3deg, aspect 1/1, border #3b3b3b)
      const brandTl = gsap.timeline({
        scrollTrigger: {
          trigger: brandingSectionRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          scrub: 1
        }
      });
      brandTl.fromTo(colLeftRef.current, { y: 60, rotation: -3 }, { y: -60, rotation: 3, ease: 'none' }, 0);
      brandTl.fromTo(colMidRef.current, { y: 0 }, { y: -80, ease: 'none' }, 0);
      brandTl.fromTo(colRightRef.current, { y: 70, rotation: 3 }, { y: -40, rotation: -3, ease: 'none' }, 0);

      // 6. PROYECTOS HORIZONTAL PIN (end: "+=3000")
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

    // MOBILE ADAPTATION (< 768px)
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
      colors: ['#65AFFF', '#ffffff', '#1b1c1e']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f5] selection:bg-[#65AFFF] selection:text-black relative">
      {/* Top Floating Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-900/60 z-50">
        <div
          ref={progressLineRef}
          className="h-full bg-[#65AFFF] transition-all duration-75"
          style={{ width: '0%' }}
        />
      </div>

      {/* Restored Minimal Floating Header (Original Design with Profile Pic & Status) */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#000000]/80 border-b border-zinc-800/50 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative group cursor-pointer">
            <img
              src={imgProfile}
              alt="Bruno Villavicencio"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#65AFFF]/40 p-[2px] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#65AFFF] rounded-full ring-2 ring-[#000000]" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              Bruno Villavicencio
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#65AFFF]/10 text-[#65AFFF] border border-[#65AFFF]/25">
                Engineer
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono">Software Engineer · Córdoba, AR</div>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-xs uppercase font-mono tracking-wider text-zinc-400">
          <a href="#roots" className="hover:text-[#65AFFF] transition-colors hidden sm:inline-block">
            01. Perfil
          </a>
          <a href="#proyectos" className="hover:text-[#65AFFF] transition-colors hidden sm:inline-block">
            02. Obras
          </a>
          <a href="#experiencia" className="hover:text-[#65AFFF] transition-colors hidden sm:inline-block">
            03. Trayectoria
          </a>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-200 hover:border-[#65AFFF] hover:text-[#65AFFF] transition-all text-xs cursor-pointer active:scale-95 shadow-sm"
          >
            {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-[#65AFFF]" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="font-mono">{copiedEmail ? 'Email Copiado!' : 'vruno182@gmail.com'}</span>
          </button>
        </nav>
      </header>

      {/* ========================================================
          1. HERO SECTION: #000000 background
          Asymmetric Title with Inline Media Pill (C) & Circular Rotating Badge (D)
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
          {/* Cosmic Parallax Sky */}
          <div id="cielo" className="absolute inset-0 w-full h-full">
            <img
              ref={cieloImgRef}
              src={imgCosmicSky}
              alt="Cosmic Space"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-black/40 to-black/70" />
          </div>

          {/* D: Circular Rotating Badge */}
          <div className="absolute top-28 right-8 sm:right-16 z-20 pointer-events-none hidden sm:block">
            <div className="w-28 h-28 relative flex items-center justify-center">
              <svg className="w-full h-full spin-badge" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-mono uppercase tracking-[0.24em] fill-white">
                  <textPath href="#circlePath">
                    SOFTWARE ENGINEER · AI-FIRST · 2026 ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-3 h-3 rounded-full bg-[#65AFFF]" />
            </div>
          </div>

          {/* Astronaut with Bruno's Face inside illuminated visor */}
          <div
            ref={astronautaRef}
            id="astronauta"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28vw] min-w-[260px] max-w-[390px] pointer-events-none z-10 will-change-transform"
          >
            <img
              ref={astronautaImgRef}
              src={imgAstronaut}
              alt="Bruno Cyber Astronaut Software Engineer"
              className="w-full h-auto drop-shadow-[0_25px_50px_rgba(101,175,255,0.3)] will-change-transform"
            />
          </div>

          {/* Hero Typography */}
          <div
            ref={heroTextOverlayRef}
            className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-16 pointer-events-none max-w-[85vw] mx-auto pb-16"
          >
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-[#65AFFF]/40 text-[#65AFFF] text-xs font-mono backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#65AFFF] animate-ping" />
                <span>SOFTWARE ENGINEER · CÓRDOBA, AR</span>
              </div>

              {/* Clean H1 without GitHub photo pill */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.88]">
                BRUNO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#65AFFF] via-white to-zinc-400">
                  VILLAVICENCIO
                </span>
              </h1>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-[55ch]">
                  React · TypeScript · Next.js · Arquitecturas Web Escalables · MCP & Claude Code
                </p>
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
          A & B: 26-column asymmetrical grid, correct whitespace spacing
          ======================================================== */}
      <section
        id="roots"
        ref={rootsSectionRef}
        className="relative z-20 bg-[#1b1c1e] -mt-5 pt-32 pb-24 px-6 sm:px-14 border-b border-zinc-800"
      >
        <div className="max-w-[85vw] mx-auto">
          {/* Editorial Section Header: 34vw left h2, 34vw right p (Danilo pattern) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 border-b border-white/10 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#65AFFF] md:w-[34vw]">
              01 // PERFIL & MANIFIESTO
            </h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed md:w-[34vw]">
              Diseño de sistemas frontend robustos y flujos asistidos por IA orientados a resultados de negocio.
            </p>
          </div>

          {/* B: Roots word-by-word reveal with explicit space & inline media pill */}
          <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="media-pill mr-4">
              <span className="media-pill-inner w-full h-full block overflow-hidden rounded-full">
                <img
                  src={imgXcons}
                  alt="XCONS Project"
                  className="w-full h-full object-cover"
                />
              </span>
            </span>
            {rootsBioWords.map((word, idx) => (
              <span
                key={idx}
                className="roots-word inline-block mr-[0.28em] transition-opacity duration-75 text-zinc-100"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Quick Numbers Grid */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-zinc-800 font-mono">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#65AFFF]">+8 Años</div>
              <div className="text-xs uppercase text-zinc-400 mt-2 font-mono">Trayectoria Web</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white">Full</div>
              <div className="text-xs uppercase text-zinc-400 mt-2 font-mono">Stack Mindset</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white">AI-1st</div>
              <div className="text-xs uppercase text-zinc-400 mt-2 font-mono">Claude Code & MCP</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-zinc-400">Córdoba</div>
              <div className="text-xs uppercase text-zinc-400 mt-2 font-mono">Argentina</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PEACE / MANIFIESTO: Background #f5f5f5 (Light Rhythm)
          Editorial Pattern: h2 34vw left, p 34vw right, CTA pill button
          ======================================================== */}
      <section
        ref={peacePinSectionRef}
        className="relative w-full h-screen bg-[#f5f5f5] text-[#1b1c1e] overflow-hidden"
      >
        <div className="sticky top-0 w-full h-full flex flex-col items-center justify-center">
          <div
            ref={peaceMarqueeRef}
            className="absolute whitespace-nowrap text-[18vw] font-black uppercase text-zinc-900/[0.05] select-none tracking-tighter will-change-transform"
          >
            REACT TYPESCRIPT NEXTJS CLAUDE CODE MCP ARCHITECTURE LEADERSHIP
          </div>

          <div
            ref={peaceRocketRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 will-change-transform text-center px-6 max-w-3xl"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-[#65AFFF]/15 border-2 border-[#65AFFF] flex items-center justify-center text-[#1b1c1e] shadow-lg">
                <Rocket className="w-10 h-10 -rotate-45 text-[#1b1c1e]" />
              </div>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#1b1c1e] text-white font-bold">
              VELOCIDAD DE EJECUCIÓN AGÉNTICA
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#1b1c1e] mt-4">
              De Cero a Producción
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg font-normal leading-relaxed mt-3 max-w-[65ch]">
              Flujos automatizados asistidos por Claude Code y MCPs que aceleran refactorizaciones, pruebas y despliegues sin perder rigurosidad técnica.
            </p>

            <div className="mt-8">
              <a href="#proyectos" className="btn-danilo text-[#1b1c1e] border-[#1b1c1e]">
                <span>Ver Casos de Estudio</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FIGHT / POSTERS: Background #000000
          Full bleed architectural poster
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#65AFFF] bg-black/80 px-4 py-1.5 rounded-full border border-[#65AFFF]/40">
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
          5. BRANDING CARDS SECTION: Background #1b1c1e
          E: Cards branding border:1px #3b3b3b, radius:20px, aspect-ratio:1/1, rotación scroll
          ======================================================== */}
      <section
        ref={brandingSectionRef}
        className="py-24 sm:py-32 px-6 sm:px-14 bg-[#1b1c1e] border-y border-zinc-800 overflow-hidden"
      >
        <div className="max-w-[85vw] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 border-b border-white/10 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#65AFFF] md:w-[34vw]">
              02 // MODULARIDAD & MULTI-ENTORNO
            </h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed md:w-[34vw]">
              Diseño de interfaces resilientes y componentización en aplicaciones empresariales críticas.
            </p>
          </div>

          {/* 3 Columns with aspect-1/1, border #3b3b3b, radius 20px (Danilo style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div ref={colLeftRef} className="space-y-6 will-change-transform">
              <div className="aspect-square rounded-[20px] border border-[#3b3b3b] bg-black/60 p-6 flex flex-col justify-between overflow-hidden relative group">
                <div className="img-wipe-container rounded-xl overflow-hidden h-40">
                  <img
                    src={imgXcons}
                    alt="XCONS Core"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#65AFFF]">01. ENTERPRISE CORE</span>
                  <h3 className="text-xl font-bold text-white mt-1">XCONS React Architecture</h3>
                </div>
              </div>
            </div>

            <div ref={colMidRef} className="space-y-6 will-change-transform md:mt-12">
              <div className="aspect-square rounded-[20px] border border-[#3b3b3b] bg-black/60 p-6 flex flex-col justify-between overflow-hidden relative group">
                <div className="img-wipe-container rounded-xl overflow-hidden h-40">
                  <img
                    src={imgAutomotive}
                    alt="Automotive Telematics"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#65AFFF]">02. TELEMETRÍA LATAM</span>
                  <h3 className="text-xl font-bold text-white mt-1">Promotive Data Stream</h3>
                </div>
              </div>
            </div>

            <div ref={colRightRef} className="space-y-6 will-change-transform">
              <div className="aspect-square rounded-[20px] border border-[#3b3b3b] bg-black/60 p-6 flex flex-col justify-between overflow-hidden relative group">
                <div className="img-wipe-container rounded-xl overflow-hidden h-40">
                  <img
                    src={imgIdentity}
                    alt="VU Cybersecurity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#65AFFF]">03. ZERO-TRUST IDENTITY</span>
                  <h3 className="text-xl font-bold text-white mt-1">VU Inc. Security Flow</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. PROYECTOS: Background #0d0e12
          Image Green Wipe (D) + 1 línea + 3 métricas grandes
          ======================================================== */}
      <section
        id="proyectos"
        ref={horizontalSectionRef}
        className="relative w-full md:h-screen overflow-hidden bg-[#0d0e12] border-b border-zinc-800/80"
      >
        <div className="hidden md:flex absolute top-20 left-6 sm:left-14 right-6 sm:right-14 z-30 items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-mono text-[#65AFFF] tracking-wider">
              03 // CASOS DE ESTUDIO
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-sm bg-black/70 px-4 py-1.5 rounded-full border border-zinc-800">
            <span className="text-[#65AFFF] font-bold">0{currentSlideIndex + 1}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">0{projects.length}</span>
          </div>
        </div>

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
                {/* Image card with Green Wipe (D) */}
                <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#65AFFF]/50 transition-all duration-500 shadow-2xl">
                  <div className="aspect-[16/10] overflow-hidden relative img-wipe-container">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#65AFFF] border border-zinc-700/60 font-semibold">
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

                {/* Info Card */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#65AFFF] mb-2 font-semibold">
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
                        <CheckCircle2 className="w-4 h-4 text-[#65AFFF] shrink-0 mt-1" />
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

                  {/* 3 Métricas Grandes */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
                    {p.stats.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/50 border border-zinc-800 text-center">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase font-medium">{s.label}</div>
                        <div className="text-base sm:text-lg font-mono font-black text-[#65AFFF] mt-1">{s.val}</div>
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
          7. EXPERIENCIA: Background #f5f5f5 (Light Rhythm)
          Editorial Pattern: h2 34vw left, p 34vw right
          ======================================================== */}
      <section
        id="experiencia"
        className="py-24 px-6 sm:px-14 bg-[#f5f5f5] text-[#1b1c1e] border-t border-zinc-300"
      >
        <div className="max-w-[85vw] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 border-b border-zinc-300 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#1b1c1e] font-bold md:w-[34vw]">
              04 // TRAYECTORIA PROFESIONAL
            </h2>
            <p className="text-lg text-zinc-700 font-normal leading-relaxed md:w-[34vw]">
              Evolución desde desarrollo fullstack hasta liderazgo de ingeniería frontend y arquitectura de sistemas complejos.
            </p>
          </div>

          <div className="border-l-2 border-zinc-300 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {experienceHistory.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#f5f5f5] border-2 border-zinc-400 group-hover:border-[#65AFFF] group-hover:scale-125 transition-all duration-300">
                  <div className="w-1.5 h-1.5 bg-[#65AFFF] rounded-full m-auto mt-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-mono font-bold text-[#1b1c1e] px-2.5 py-0.5 rounded bg-zinc-200 border border-zinc-300">
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
              <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-[#1b1c1e]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase font-mono text-zinc-600 font-bold">Educación Formal</div>
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
          8. SKILLS: Background #0d0e12
          Editorial Header & clean cards
          ======================================================== */}
      <section id="skills" className="py-24 px-6 sm:px-14 bg-[#0d0e12] text-zinc-100 border-t border-zinc-800/80">
        <div className="max-w-[85vw] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-16 border-b border-white/10 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#65AFFF] md:w-[34vw]">
              05 // ARSENAL TECNOLÓGICO
            </h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed md:w-[34vw]">
              Especialización profunda en React, arquitecturas escalables, diseño de APIs y flujos agénticos con IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[20px] bg-black/40 border border-[#3b3b3b] hover:border-[#65AFFF]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#65AFFF]">
                  {idx === 0 && <Code2 className="w-5 h-5" />}
                  {idx === 1 && <Layers className="w-5 h-5" />}
                  {idx === 2 && <Cpu className="w-5 h-5" />}
                  {idx === 3 && <Terminal className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.skills.map((s, i) => (
                    <li key={i} className="text-sm font-mono text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#65AFFF]" />
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
          9. FOOTER: Background #000000
          Clean finish, Danilo pill CTA, mix-blend friendly
          ======================================================== */}
      <footer id="contacto" className="border-t border-zinc-800 bg-[#000000] pt-24 pb-16 px-6 sm:px-14">
        <div className="max-w-[85vw] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-16 border-b border-zinc-800/80">
            <div>
              <span className="text-xs font-mono uppercase text-[#65AFFF] tracking-wider">¿Hablamos de tu próximo desafío?</span>
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-white mt-3 [text-wrap:balance]">
                Creemos algo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#65AFFF] via-white to-zinc-400">
                  extraordinario.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleCopyEmail}
                className="btn-danilo text-white border-white/60 text-sm px-8 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-base">{copiedEmail ? 'Email Copiado!' : 'vruno182@gmail.com'}</span>
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#65AFFF]" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#65AFFF]" />
                  <span>Córdoba, Argentina</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#65AFFF]" />
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
                className="hover:text-[#65AFFF] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/thevruno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#65AFFF] transition-colors flex items-center gap-1"
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
