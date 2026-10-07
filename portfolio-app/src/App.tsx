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
  Sparkles,
  Layers,
  ChevronDown,
  CheckCircle2,
  Copy,
  ArrowRight,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorActive, setCursorActive] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // References for Danilo De Marco exact sequence
  const heroPinContainerRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const cieloImgRef = useRef<HTMLImageElement>(null);
  const astronautaRef = useRef<HTMLDivElement>(null);
  const astronautaImgRef = useRef<HTMLImageElement>(null);
  const sfondoBlackRef = useRef<HTMLDivElement>(null);
  const heroTextOverlayRef = useRef<HTMLDivElement>(null);

  // Other section refs
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

  // Horizontal pinned projects
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
        'Liderazgo frontend en arquitectura con React y TypeScript. Definición de contratos de API escalables con backend, optimización de performance en flujos críticos y adopción pionera de Claude Code y MCPs para automatizar ciclos de desarrollo y code reviews.',
      stats: [
        { label: 'Tiempo de Carga', val: '-42%' },
        { label: 'Integración', val: 'Claude + MCP' },
        { label: 'Arquitectura', val: 'Clean SSR' }
      ],
      tags: ['React', 'TypeScript', 'Next.js', 'Claude MCP', 'Design Systems', 'Core Web Vitals'],
      image: './images/project-xcons.jpg',
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
        'Plataforma integral de procesamiento masivo y visualización en tiempo real de datos vehiculares en América Latina. Creación de bibliotecas de componentes reutilizables con soporte para streaming de telemetría y gráficos interactivos.',
      stats: [
        { label: 'Procesamiento', val: '+15M datos' },
        { label: 'Componentes', val: 'Sistema Modular' },
        { label: 'Disponibilidad', val: '99.9%' }
      ],
      tags: ['React', 'TypeScript', 'Data Viz', 'State Management', 'REST APIs', 'Tailwind'],
      image: './images/project-automotive.jpg',
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
        'Desarrollo y mantenimiento de interfaces críticas para validación de identidad digital y prevención de fraudes bancarios. Implementación en React y Svelte con exigencias extremas de accesibilidad y tolerancia cero a fallos.',
      stats: [
        { label: 'Seguridad', val: 'Zero-Trust' },
        { label: 'SLA', val: '99.98% Uptime' },
        { label: 'Tecnología', val: 'React + Svelte' }
      ],
      tags: ['React', 'Svelte', 'Web Crypto', 'Identity Mgmt', 'Onboarding', 'Microfrontends'],
      image: './images/project-identity.jpg',
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
        'Entorno de experimentación para sistemas agénticos avanzados. Conexión de Claude Code a bases de datos vía MCP, rastreo web autónomo de contenidos (Auto-Blog), orquestación de agentes locales y pipelines de código automatizados.',
      stats: [
        { label: 'Velocidad', val: 'x3 Prototipado' },
        { label: 'Protocolo', val: 'MCP Nativo' },
        { label: 'Type Safety', val: '100% Strict' }
      ],
      tags: ['Claude Code', 'Model Context Protocol', 'Drizzle ORM', 'Next.js App Router', 'TypeScript', 'Node.js'],
      image: './images/project-ai-tools.jpg',
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

  // Main Lenis + GSAP Choreography
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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

    const ctx = gsap.context(() => {
      /* ========================================================
         EXACT DANILO DE MARCO HERO SCROLL SEQUENCE (SCRUB 1)
         Total container: 400vh (pinned)
         0-7%:   #artwork width: 95% -> 100%
         3-26%:  #artwork translateY(20vh -> 0), rotate(15deg -> 0deg)
         5-26%:  #astronauta translateY(-33% -> 0%)
         5-70%:  #cielo img scale(2 -> 1)
         40-100%:#astronauta img scale(1 -> 80) + translateY(-900%)
         50-60%: #sfondo_black opacity(0 -> 1)
         Roots section enters with #1b1c1e, -20px margin-top
         ======================================================== */
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroPinContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Set initial values
      gsap.set(artworkRef.current, {
        width: '95%',
        y: '20vh',
        rotation: 15,
        transformOrigin: 'center center'
      });
      gsap.set(cieloImgRef.current, { scale: 2, transformOrigin: 'center center' });
      gsap.set(astronautaRef.current, { yPercent: -33 });
      gsap.set(astronautaImgRef.current, {
        scale: 1,
        yPercent: 0,
        transformOrigin: 'center center'
      });
      gsap.set(sfondoBlackRef.current, { opacity: 0 });
      gsap.set(heroTextOverlayRef.current, { opacity: 1, y: 0 });

      // Build precise Scrub timeline normalized from 0 to 100
      // 0 -> 7%: artwork width 95% -> 100%
      heroTl.to(
        artworkRef.current,
        {
          width: '100%',
          ease: 'none',
          duration: 7
        },
        0
      );

      // Hero text fadeout quickly
      heroTl.to(
        heroTextOverlayRef.current,
        {
          opacity: 0,
          y: -50,
          ease: 'none',
          duration: 10
        },
        0
      );

      // 3 -> 26%: artwork y 20vh -> 0, rotate 15 -> 0
      heroTl.to(
        artworkRef.current,
        {
          y: '0vh',
          rotation: 0,
          ease: 'none',
          duration: 23
        },
        3
      );

      // 5 -> 26%: astronauta yPercent -33 -> 0
      heroTl.to(
        astronautaRef.current,
        {
          yPercent: 0,
          ease: 'none',
          duration: 21
        },
        5
      );

      // 5 -> 70%: cielo scale 2 -> 1
      heroTl.to(
        cieloImgRef.current,
        {
          scale: 1,
          ease: 'none',
          duration: 65
        },
        5
      );

      // 40 -> 100%: astronauta img scale 1 -> 80 + translateY -900%
      heroTl.to(
        astronautaImgRef.current,
        {
          scale: 80,
          yPercent: -900,
          ease: 'none',
          duration: 60
        },
        40
      );

      // 50 -> 60%: sfondo_black opacity 0 -> 1
      heroTl.to(
        sfondoBlackRef.current,
        {
          opacity: 1,
          ease: 'none',
          duration: 10
        },
        50
      );

      /* ========================================================
         #ROOTS SECTION: Word-by-word opacity scrub 0.1 -> 1
         ======================================================== */
      const words = gsap.utils.toArray<HTMLElement>('.roots-word');
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: rootsSectionRef.current,
            start: 'top 75%',
            end: 'top 20%',
            scrub: 0.3
          }
        }
      );

      /* ========================================================
         PEACE SECTION (ROCKET LAUNCH & FAST SCRUB TEXT)
         Pin 6000px, #rocket translate(-50%, 100% -> -50%, -50%)
         ======================================================== */
      const peaceTl = gsap.timeline({
        scrollTrigger: {
          trigger: peacePinSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          scrub: 1
        }
      });

      // Rocket ascent
      peaceTl.fromTo(
        peaceRocketRef.current,
        { yPercent: 120, xPercent: -50, scale: 0.7, opacity: 0.5 },
        { yPercent: -50, xPercent: -50, scale: 1.1, opacity: 1, ease: 'none', duration: 70 },
        0
      );

      // Marquee rapid displacement (data-scroll-speed: 4)
      peaceTl.to(
        peaceMarqueeRef.current,
        {
          xPercent: -40,
          ease: 'none',
          duration: 100
        },
        0
      );

      /* ========================================================
         FIGHT / POSTER SECTION: 400vh + sticky
         Poster expands width: 350px -> 100vw, scale 1.2 -> 3
         ======================================================== */
      const fightTl = gsap.timeline({
        scrollTrigger: {
          trigger: fightPinSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          scrub: 1
        }
      });

      fightTl.fromTo(
        fightPosterRef.current,
        { width: '380px', height: '540px', scale: 1 },
        { width: '100vw', height: '100vh', scale: 2.2, ease: 'none', duration: 100 },
        0
      );

      /* ========================================================
         BRANDING 3-COLUMN ROTATE & PARALLAX
         Rotate +-8deg individual + +-3deg col lateral + translateY -10%
         ======================================================== */
      const brandTl = gsap.timeline({
        scrollTrigger: {
          trigger: brandingSectionRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 1
        }
      });

      brandTl.fromTo(
        colLeftRef.current,
        { y: 80, rotation: -3 },
        { y: -80, rotation: 3, ease: 'none' },
        0
      );
      brandTl.fromTo(
        colMidRef.current,
        { y: 0, rotation: 0 },
        { y: -120, rotation: 0, ease: 'none' },
        0
      );
      brandTl.fromTo(
        colRightRef.current,
        { y: 100, rotation: 3 },
        { y: -60, rotation: -3, ease: 'none' },
        0
      );

      /* ========================================================
         PINNED HORIZONTAL PROJECT SHOWCASE
         ======================================================== */
      const wrapper = horizontalWrapperRef.current;
      const section = horizontalSectionRef.current;
      if (wrapper && section) {
        const totalSlides = projects.length;
        const xDistance = () => -(wrapper.scrollWidth - window.innerWidth);

        gsap.to(wrapper, {
          x: xDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.6,
            start: 'top top',
            end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const current = Math.min(
                Math.floor(self.progress * totalSlides),
                totalSlides - 1
              );
              setCurrentSlideIndex(current);
            }
          }
        });
      }
    });

    return () => {
      ctx.revert();
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
    <div className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-emerald-400 selection:text-black relative">
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

      {/* Danilo de Marco Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#070709]/80 border-b border-zinc-800/50 px-6 sm:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative group cursor-pointer">
            <img
              src="./images/profile.jpg"
              alt="Bruno Villavicencio"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/40 p-[2px] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#070709]" />
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
          HERO SECTION: 400vh PIN WITH DANILO DE MARCO ZOOM
          Sticky 100vh inner, #cielo, #astronauta, #artwork, #sfondo_black
          ======================================================== */}
      <section
        ref={heroPinContainerRef}
        className="relative w-full h-[400vh] bg-black"
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          {/* #artwork: respiration width 95% -> 100%, 20vh -> 0, 15deg -> 0 */}
          <div
            ref={artworkRef}
            id="artwork"
            className="relative w-[95%] h-full flex items-center justify-center overflow-hidden will-change-transform"
          >
            {/* #cielo: Parallax sky zoom-out scale 2 -> 1 */}
            <div id="cielo" className="absolute inset-0 w-full h-full">
              <img
                ref={cieloImgRef}
                src="./images/cosmic-sky.jpg"
                alt="Cosmic Space"
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            {/* Astronauta: 30vw centered with translate(-50%, -50%), then scale 1 -> 80 */}
            <div
              ref={astronautaRef}
              id="astronauta"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] min-w-[280px] max-w-[420px] pointer-events-none z-10 will-change-transform"
            >
              <img
                ref={astronautaImgRef}
                src="./images/astronaut-cyber.png"
                alt="Astronaut Software Engineer"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(16,185,129,0.35)] will-change-transform"
              />
            </div>

            {/* Initial Hero Typography Overlay (Fades out 0-10%) */}
            <div
              ref={heroTextOverlayRef}
              className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-16 pointer-events-none max-w-7xl mx-auto"
            >
              <div className="pt-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>DANILO DE MARCO SCROLL ENGINE · SCRUB 1</span>
                </div>
              </div>

              <div>
                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.88]">
                  BRUNO <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                    VILLAVICENCIO
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-xl font-mono text-zinc-300 max-w-xl">
                  Software Engineer Lead · React · TypeScript · Next.js · Metodología AI-First
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400 animate-bounce">
                  <ChevronDown className="w-4 h-4" />
                  <span>DESPLÁZATE HACIA ABAJO PARA ACTIVAR EL ZOOM Y LA TRANSIÓN</span>
                </div>
              </div>
            </div>

            {/* #sfondo_black: Fades 0 -> 1 at 50%-60% to hide pixelation */}
            <div
              ref={sfondoBlackRef}
              id="sfondo_black"
              className="absolute inset-0 bg-[#1b1c1e] z-30 pointer-events-none will-change-opacity"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          #ROOTS SECTION: Background #1b1c1e, margin-top: -20px, z-index: 2
          Word-by-word reveal (opacity 0.1 -> 1)
          ======================================================== */}
      <section
        id="roots"
        ref={rootsSectionRef}
        className="relative z-20 bg-[#1b1c1e] -mt-5 pt-32 pb-36 px-6 sm:px-14 border-b border-zinc-800"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">
              01 // ROOTS & MANIFIESTO
            </span>
            <span className="text-zinc-500 text-xs font-mono">| REVELADO PALABRA POR PALABRA</span>
          </div>

          <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {rootsBio.map((word, idx) => (
              <span
                key={idx}
                className="roots-word inline-block mr-3 transition-opacity duration-75 text-zinc-100"
              >
                {word}
              </span>
            ))}
          </p>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-zinc-700/60 font-mono">
            <div>
              <div className="text-4xl font-black text-emerald-400">+8 Años</div>
              <div className="text-xs uppercase text-zinc-400 mt-1">Experiencia Full</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">Lead</div>
              <div className="text-xs uppercase text-zinc-400 mt-1">Rol en XCONS</div>
            </div>
            <div>
              <div className="text-4xl font-black text-teal-300">AI-1st</div>
              <div className="text-xs uppercase text-zinc-400 mt-1">Claude Code & MCP</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">Córdoba</div>
              <div className="text-xs uppercase text-zinc-400 mt-1">Argentina</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PEACE SECTION: 6000px PIN + Sticky 100vh
          #rocket translates from bottom to center + rapid text marquee
          ======================================================== */}
      <section
        ref={peacePinSectionRef}
        className="relative w-full h-[6000px] bg-[#0d0e12] overflow-hidden"
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
          {/* Background fast marquee speed 4 */}
          <div
            ref={peaceMarqueeRef}
            className="absolute whitespace-nowrap text-[18vw] font-black uppercase text-white/[0.04] select-none tracking-tighter will-change-transform"
          >
            REACT TYPESCRIPT NEXTJS CLAUDE CODE MCP ARCHITECTURE LEADERSHIP
          </div>

          {/* Central Rocket / Misil with glowing aura */}
          <div
            ref={peaceRocketRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 will-change-transform"
          >
            <div className="relative">
              <div className="w-36 h-36 rounded-full bg-emerald-500/20 blur-2xl absolute inset-0 m-auto animate-pulse" />
              <div className="w-24 h-24 rounded-2xl bg-zinc-900 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                <Rocket className="w-12 h-12 -rotate-45" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                VELOCIDAD DE EJECUCIÓN AGÉNTICA
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-3">
                De Cero a Producción
              </h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mt-2 font-mono">
                Flujos automatizados que aceleran refactors, pruebas y despliegue sin perder robustez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FIGHT SECTION: 400vh + Sticky 100vh
          Poster expands from 380px to full viewport + scale
          ======================================================== */}
      <section
        ref={fightPinSectionRef}
        className="relative w-full h-[400vh] bg-black"
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <div
            ref={fightPosterRef}
            className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl flex items-center justify-center will-change-transform"
          >
            <img
              src="./images/poster-architect.jpg"
              alt="Architecture Poster"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-black/70 px-4 py-1.5 rounded-full border border-emerald-500/30">
                MANIFESTO POSTER // 2026
              </span>
              <h2 className="text-5xl sm:text-7xl font-black uppercase text-white mt-4 tracking-tighter">
                ARQUITECTURA <br /> LIMPIA
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BRANDING SECTION: 3 COLUMNS ROTATING +-8deg & +-3deg
          ======================================================== */}
      <section
        ref={brandingSectionRef}
        className="py-32 px-6 sm:px-12 bg-[#090a0d] border-y border-zinc-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
            02 // PERSPECTIVA Y MODULARIDAD
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-2">
            Multi-Dispositivo & Escalabilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Col 1: rotate -3deg */}
          <div ref={colLeftRef} className="space-y-6 will-change-transform">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5 group hover:border-emerald-500/40 transition-colors">
              <img
                src="./images/project-xcons.jpg"
                alt="Dashboard XCONS"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="mt-4 font-mono text-xs text-emerald-400">01. ENTERPRISE CORE</div>
              <h4 className="text-lg font-bold text-white mt-1">XCONS React Architecture</h4>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="p-6 bg-black/40 rounded-xl font-mono text-xs text-zinc-400">
                {`> const lead = new Engineer({
    role: "Lead",
    focus: "Performance",
    aiAssisted: true
  });`}
              </div>
            </div>
          </div>

          {/* Col 2: center translateY -10% */}
          <div ref={colMidRef} className="space-y-6 will-change-transform">
            <div className="rounded-2xl overflow-hidden border border-emerald-500/30 bg-zinc-900/80 p-5 shadow-2xl">
              <img
                src="./images/project-automotive.jpg"
                alt="Automotive Telematics"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="mt-4 font-mono text-xs text-emerald-400">02. TELEMETRÍA LATAM</div>
              <h4 className="text-lg font-bold text-white mt-1">Promotive Data Stream</h4>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5">
              <img
                src="./images/project-ai-tools.jpg"
                alt="AI Tools"
                className="w-full h-44 object-cover rounded-xl"
              />
              <div className="mt-3 font-mono text-xs text-zinc-400">03. MCP Workflows</div>
            </div>
          </div>

          {/* Col 3: rotate +3deg */}
          <div ref={colRightRef} className="space-y-6 will-change-transform">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5 group hover:border-emerald-500/40 transition-colors">
              <img
                src="./images/project-identity.jpg"
                alt="Cybersecurity Identity"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="mt-4 font-mono text-xs text-emerald-400">04. IDENTITY ZERO TRUST</div>
              <h4 className="text-lg font-bold text-white mt-1">VU Inc. Security Flow</h4>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 p-5 text-center">
              <div className="text-3xl font-black font-mono text-emerald-400">+8 Años</div>
              <div className="text-xs font-mono text-zinc-400 mt-1">Construyendo la web moderna</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SELECTED WORKS PINNED HORIZONTAL GALLERY
          ======================================================== */}
      <section
        id="proyectos"
        ref={horizontalSectionRef}
        className="relative w-full h-screen overflow-hidden bg-[#070709] border-b border-zinc-800/80"
      >
        <div className="absolute top-20 left-6 sm:left-12 right-6 sm:right-12 z-30 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">
              03 // CASOS DE ESTUDIO
            </span>
            <span className="text-zinc-600 font-mono text-xs">| SCROLL HORIZONTAL COMPLETO</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-emerald-400 font-bold text-base">0{currentSlideIndex + 1}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">0{projects.length}</span>
          </div>
        </div>

        <div
          ref={horizontalWrapperRef}
          className="flex h-full w-max items-center will-change-transform"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-14 lg:px-20 pt-20"
            >
              <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-emerald-400 border border-zinc-700/60">
                        {p.category}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-zinc-300 border border-zinc-700/60">
                        {p.period}
                      </span>
                    </div>
                    <div className="absolute top-5 left-5 text-6xl sm:text-7xl font-black font-mono text-white/10 select-none">
                      {p.num}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{p.company}</span>
                      <span>·</span>
                      <span className="text-zinc-500">{p.role}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                    {p.summary}
                  </p>

                  <div className="space-y-2">
                    {p.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80">
                    {p.stats.map((s, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase">{s.label}</div>
                        <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 pointer-events-none">
          <span>DESPLÁZATE HACIA ABAJO PARA NAVEGAR</span>
          <ArrowRight className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
        </div>
      </section>

      {/* ========================================================
          EXPERIENCE TIMELINE SECTION
          ======================================================== */}
      <section id="experiencia" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">04 // TRAYECTORIA</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-2">
              Historial Profesional
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light">
            Evolución desde desarrollo fullstack clásico hasta liderazgo de ingeniería frontend y arquitectura de sistemas complejos.
          </p>
        </div>

        <div className="border-l-2 border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceHistory.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#070709] border-2 border-zinc-700 group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full m-auto mt-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-xs font-mono font-semibold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {item.period}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-500">{item.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-emerald-300 transition-colors">
                {item.role} <span className="text-zinc-500 font-normal">@ {item.company}</span>
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base font-light mt-2 max-w-3xl leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-mono text-emerald-400">Educación Formal</div>
              <div className="text-lg font-bold text-white">Técnico Superior en Programación</div>
              <div className="text-xs text-zinc-400">Universidad Tecnológica Nacional (UTN) — Córdoba, Argentina</div>
            </div>
          </div>
          <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-700/50">
            2014 — 2016 · Algoritmos & Bases de Datos
          </span>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase font-mono text-emerald-400 tracking-wider">05 // CAPACIDADES</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-2">
              Arsenal Tecnológico
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light">
            Especialización en React, arquitecturas escalables, diseño de APIs y flujos agénticos con IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
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
                  <li key={i} className="text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI MANIFESTO */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-zinc-900 via-[#0d1114] to-[#07090b] border border-emerald-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>METODOLOGÍA DE INGENIERÍA 2026+</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
              Desarrollo acelerado por IA sin comprometer calidad ni arquitectura.
            </h2>

            <p className="mt-6 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              Integro <span className="text-emerald-400 font-mono font-medium">Claude</span>,{' '}
              <span className="text-emerald-400 font-mono font-medium">Claude Code</span> y{' '}
              <span className="text-emerald-400 font-mono font-medium">MCP (Model Context Protocol)</span> directamente
              en el ciclo de vida del software. Esto potencia la velocidad de iteración, la exhaustividad en pruebas unitarias y la precisión en contratos de datos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 pt-8 border-t border-zinc-800">
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80">
                <div className="text-emerald-400 font-mono font-bold text-sm">Automated Refactors</div>
                <div className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Análisis estático asistido, tipado estricto y migración de código sin fricción.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80">
                <div className="text-emerald-400 font-mono font-bold text-sm">Model Context Protocol</div>
                <div className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Servidores MCP para interactuar con bases de datos y tooling local.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800/80">
                <div className="text-emerald-400 font-mono font-bold text-sm">Clean Architecture</div>
                <div className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Revisión estricta de componentes, accesibilidad y Core Web Vitals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contacto" className="border-t border-zinc-800 bg-[#050507] pt-24 pb-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 pb-16 border-b border-zinc-800/80">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">¿Hablamos de tu próximo desafío?</span>
              <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-white mt-3">
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
                className="group flex items-center justify-between gap-6 px-8 py-5 rounded-2xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500 hover:bg-zinc-850 transition-all cursor-pointer shadow-xl active:scale-95"
              >
                <div className="text-left">
                  <div className="text-xs uppercase font-mono text-zinc-400">Email Directo</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors">
                    vruno182@gmail.com
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  {copiedEmail ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </div>
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
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

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
            <div>
              © {new Date().getFullYear()} Bruno Villavicencio — Danilo De Marco Scroll Experience.
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
