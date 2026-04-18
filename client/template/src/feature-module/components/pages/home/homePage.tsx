import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";

// ✅ Routing — login page route
const LOGIN_PATH = "/login-basic";
const REGISTER_PATH = "/register-basic"; // adjust if needed

const HomePage = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
            // Active section detection
            const sections = ["home", "features", "services", "stats", "contact"];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Stats counter animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    // ✅ If user already logged in, redirect to dashboard
    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            try {
                const u = JSON.parse(userData);
                if (u.token) {
                    if (u.role === "doctor") navigate("/doctor/doctor-dashboard");
                    else if (u.role === "patient") navigate("/patient/patient-dashboard");
                    else navigate("/dashboard");
                }
            } catch { /* ignore */ }
        }
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hp-root {
          font-family: 'DM Sans', sans-serif;
          color: #1a1a2e;
          overflow-x: hidden;
        }

        .hp-display { font-family: 'Sora', sans-serif; }

        /* ── Navbar ── */
        .hp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
        }
        .hp-nav.scrolled {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(20px);
          padding: 12px 0;
          box-shadow: 0 2px 30px rgba(79,70,229,0.1);
        }
        .hp-nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .hp-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }
        .hp-logo-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          display: flex; align-items: center; justify-content: center;
        }
        .hp-logo-text {
          font-family: 'Sora', sans-serif;
          font-size: 20px; font-weight: 700;
          color: #1a1a2e;
        }
        .hp-logo-text span { color: #4f46e5; }
        .hp-nav-links {
          display: flex; align-items: center; gap: 32px;
          list-style: none;
        }
        .hp-nav-links a {
          font-size: 15px; font-weight: 500; color: #4b5563;
          text-decoration: none; transition: color 0.2s;
          cursor: pointer;
        }
        .hp-nav-links a:hover, .hp-nav-links a.active { color: #4f46e5; }
        .hp-nav-btns { display: flex; align-items: center; gap: 12px; }
        .hp-btn-outline {
          padding: 8px 20px; border-radius: 8px;
          border: 2px solid #4f46e5; color: #4f46e5;
          background: transparent; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.2s; text-decoration: none;
          display: inline-block;
        }
        .hp-btn-outline:hover { background: #4f46e5; color: white; }
        .hp-btn-primary {
          padding: 8px 20px; border-radius: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white; border: none; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.2s; text-decoration: none;
          display: inline-block; box-shadow: 0 4px 12px rgba(79,70,229,0.3);
        }
        .hp-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(79,70,229,0.4);
          color: white;
        }
        .hp-hamburger {
          display: none; background: none; border: none; cursor: pointer;
          flex-direction: column; gap: 5px; padding: 4px;
        }
        .hp-hamburger span {
          display: block; width: 24px; height: 2px;
          background: #1a1a2e; border-radius: 2px; transition: all 0.3s;
        }

        /* ── Hero ── */
        #home {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%);
          display: flex; align-items: center; position: relative; overflow: hidden;
          padding-top: 80px;
        }
        .hp-hero-bg {
          position: absolute; inset: 0; pointer-events: none;
        }
        .hp-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.25;
        }
        .hp-blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #4f46e5, #7c3aed);
          top: -100px; right: -100px;
        }
        .hp-blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #06b6d4, #3b82f6);
          bottom: -50px; left: -50px;
        }
        .hp-blob-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #22c55e, #10b981);
          top: 40%; left: 40%;
        }
        .hp-hero-inner {
          max-width: 1200px; margin: 0 auto; padding: 60px 24px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: center; position: relative; z-index: 1;
        }
        .hp-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(79,70,229,0.08); border: 1px solid rgba(79,70,229,0.2);
          color: #4f46e5; border-radius: 100px; padding: 6px 16px;
          font-size: 13px; font-weight: 600; margin-bottom: 20px;
        }
        .hp-hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4f46e5; animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .hp-hero-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(36px, 5vw, 58px); font-weight: 800;
          line-height: 1.1; margin-bottom: 20px; color: #0f0f23;
        }
        .hp-hero-title .accent {
          background: linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hp-hero-desc {
          font-size: 17px; color: #6b7280; line-height: 1.7;
          margin-bottom: 36px; font-weight: 400;
        }
        .hp-hero-actions {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .hp-btn-hero {
          padding: 14px 32px; border-radius: 10px; font-size: 16px;
          font-weight: 600; cursor: pointer; transition: all 0.25s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .hp-btn-hero-primary {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white; border: none;
          box-shadow: 0 8px 24px rgba(79,70,229,0.35);
        }
        .hp-btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(79,70,229,0.45);
          color: white;
        }
        .hp-btn-hero-outline {
          background: white; color: #4f46e5;
          border: 2px solid rgba(79,70,229,0.25);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .hp-btn-hero-outline:hover {
          border-color: #4f46e5;
          transform: translateY(-2px);
          color: #4f46e5;
        }
        .hp-hero-trust {
          display: flex; align-items: center; gap: 12px; margin-top: 28px;
        }
        .hp-trust-avatars {
          display: flex;
        }
        .hp-trust-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid white; margin-left: -8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: white;
        }
        .hp-trust-text { font-size: 14px; color: #6b7280; }
        .hp-trust-text strong { color: #1a1a2e; }

        /* ── Hero Visual ── */
        .hp-hero-visual {
          position: relative;
        }
        .hp-dashboard-preview {
          background: white;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(79,70,229,0.2);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.8);
        }
        .hp-dashboard-topbar {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          padding: 14px 20px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .hp-db-dots { display: flex; gap: 6px; }
        .hp-db-dot {
          width: 10px; height: 10px; border-radius: 50%;
          opacity: 0.6;
        }
        .hp-db-title {
          color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 600;
          font-family: 'Sora', sans-serif;
        }
        .hp-dashboard-body { padding: 20px; }
        .hp-db-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          margin-bottom: 16px;
        }
        .hp-db-stat {
          background: #f8f9ff; border-radius: 12px; padding: 14px;
          text-align: center;
        }
        .hp-db-stat-num {
          font-family: 'Sora', sans-serif;
          font-size: 20px; font-weight: 800; color: #4f46e5;
        }
        .hp-db-stat-label {
          font-size: 11px; color: #9ca3af; margin-top: 2px; font-weight: 500;
        }
        .hp-db-chart {
          background: #f8f9ff; border-radius: 12px; padding: 14px; margin-bottom: 12px;
        }
        .hp-db-chart-title {
          font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 12px;
        }
        .hp-chart-bars {
          display: flex; align-items: flex-end; gap: 6px; height: 60px;
        }
        .hp-chart-bar {
          flex: 1; border-radius: 4px 4px 0 0;
          background: linear-gradient(180deg, #4f46e5, #7c3aed);
          opacity: 0.8; transition: opacity 0.2s;
          animation: barGrow 1s ease forwards;
          transform-origin: bottom;
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .hp-db-appointments {
          background: #f8f9ff; border-radius: 12px; padding: 14px;
        }
        .hp-db-apt-title {
          font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 10px;
        }
        .hp-db-apt-item {
          display: flex; align-items: center; gap: 10px; padding: 8px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .hp-db-apt-item:last-child { border-bottom: none; }
        .hp-db-apt-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: white; flex-shrink: 0;
        }
        .hp-db-apt-info { flex: 1; }
        .hp-db-apt-name { font-size: 12px; font-weight: 600; color: #374151; }
        .hp-db-apt-time { font-size: 10px; color: #9ca3af; }
        .hp-db-apt-badge {
          font-size: 10px; padding: 2px 8px; border-radius: 100px; font-weight: 600;
        }

        /* Floating cards */
        .hp-float-card {
          position: absolute;
          background: white; border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          padding: 12px 16px;
          display: flex; align-items: center; gap: 10px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hp-float-1 {
          bottom: -20px; left: -30px;
          animation-delay: 0s;
        }
        .hp-float-2 {
          top: -10px; right: -20px;
          animation-delay: 2s;
        }
        .hp-float-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .hp-float-label { font-size: 11px; color: #9ca3af; }
        .hp-float-val {
          font-family: 'Sora', sans-serif;
          font-size: 16px; font-weight: 700; color: #1a1a2e;
        }

        /* ── Section Common ── */
        .hp-section {
          padding: 100px 0;
        }
        .hp-section-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
        }
        .hp-section-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: #4f46e5;
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;
        }
        .hp-section-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(28px, 4vw, 42px); font-weight: 800;
          color: #0f0f23; line-height: 1.2; margin-bottom: 16px;
        }
        .hp-section-desc {
          font-size: 17px; color: #6b7280; line-height: 1.7; max-width: 560px;
        }
        .hp-section-header { margin-bottom: 60px; }
        .hp-section-header.center { text-align: center; }
        .hp-section-header.center .hp-section-desc { margin: 0 auto; }

        /* ── Features ── */
        #features { background: white; }
        .hp-features-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
        }
        .hp-feature-card {
          padding: 28px; border-radius: 16px;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          position: relative; overflow: hidden;
        }
        .hp-feature-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          transform: scaleX(0); transition: transform 0.3s ease;
          transform-origin: left;
        }
        .hp-feature-card:hover {
          box-shadow: 0 16px 48px rgba(79,70,229,0.12);
          transform: translateY(-4px);
          border-color: rgba(79,70,229,0.15);
        }
        .hp-feature-card:hover::before { transform: scaleX(1); }
        .hp-feature-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; font-size: 24px;
        }
        .hp-feature-title {
          font-family: 'Sora', sans-serif;
          font-size: 17px; font-weight: 700; color: #0f0f23;
          margin-bottom: 10px;
        }
        .hp-feature-desc {
          font-size: 14px; color: #6b7280; line-height: 1.6;
        }

        /* ── Services ── */
        #services { background: linear-gradient(135deg, #fafbff, #f5f3ff); }
        .hp-services-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .hp-service-card {
          background: white; border-radius: 16px; padding: 28px 20px;
          text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease; cursor: pointer;
          border: 1px solid transparent;
        }
        .hp-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(79,70,229,0.15);
          border-color: rgba(79,70,229,0.2);
        }
        .hp-service-icon {
          width: 64px; height: 64px; border-radius: 18px; margin: 0 auto 16px;
          display: flex; align-items: center; justify-content: center; font-size: 28px;
        }
        .hp-service-title {
          font-family: 'Sora', sans-serif;
          font-size: 15px; font-weight: 700; color: #0f0f23; margin-bottom: 8px;
        }
        .hp-service-desc { font-size: 13px; color: #9ca3af; line-height: 1.5; }

        /* ── Stats ── */
        #stats {
          background: linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95);
          position: relative; overflow: hidden;
        }
        .hp-stats-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.3), transparent 60%),
                      radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.3), transparent 60%);
        }
        .hp-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;
          position: relative; z-index: 1;
        }
        .hp-stat-item { text-align: center; }
        .hp-stat-num {
          font-family: 'Sora', sans-serif;
          font-size: clamp(36px, 5vw, 52px); font-weight: 800;
          color: white; line-height: 1; margin-bottom: 8px;
        }
        .hp-stat-num .suffix { font-size: 0.6em; opacity: 0.8; }
        .hp-stat-label { font-size: 15px; color: rgba(255,255,255,0.65); font-weight: 400; }

        /* ── How it works ── */
        #how { background: white; }
        .hp-steps {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;
          position: relative;
        }
        .hp-steps::before {
          content: '';
          position: absolute; top: 40px; left: calc(16.6% + 20px); right: calc(16.6% + 20px);
          height: 2px; background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899);
          z-index: 0;
        }
        .hp-step { text-align: center; position: relative; z-index: 1; }
        .hp-step-num {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white; font-family: 'Sora', sans-serif;
          font-size: 28px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; box-shadow: 0 8px 24px rgba(79,70,229,0.3);
        }
        .hp-step-title {
          font-family: 'Sora', sans-serif;
          font-size: 18px; font-weight: 700; color: #0f0f23; margin-bottom: 10px;
        }
        .hp-step-desc { font-size: 14px; color: #6b7280; line-height: 1.6; }

        /* ── Testimonials ── */
        #testimonials { background: linear-gradient(135deg, #fafbff, #f0f4ff); }
        .hp-testimonials-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .hp-testimonial-card {
          background: white; border-radius: 16px; padding: 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }
        .hp-testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(79,70,229,0.12);
        }
        .hp-stars { color: #f59e0b; font-size: 14px; margin-bottom: 14px; }
        .hp-testimonial-text {
          font-size: 15px; color: #374151; line-height: 1.7; margin-bottom: 20px;
          font-style: italic;
        }
        .hp-testimonial-author { display: flex; align-items: center; gap: 12px; }
        .hp-author-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 16px; color: white; flex-shrink: 0;
        }
        .hp-author-name {
          font-weight: 700; font-size: 14px; color: #0f0f23;
        }
        .hp-author-role { font-size: 12px; color: #9ca3af; }

        /* ── CTA ── */
        #contact {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #c026d3 100%);
          position: relative; overflow: hidden;
        }
        .hp-cta-bg {
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hp-cta-inner {
          text-align: center; position: relative; z-index: 1;
          max-width: 700px; margin: 0 auto; padding: 0 24px;
        }
        .hp-cta-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(32px, 4vw, 48px); font-weight: 800;
          color: white; line-height: 1.2; margin-bottom: 16px;
        }
        .hp-cta-desc { font-size: 18px; color: rgba(255,255,255,0.8); margin-bottom: 40px; }
        .hp-cta-actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .hp-btn-white {
          padding: 14px 32px; border-radius: 10px; font-size: 16px; font-weight: 700;
          background: white; color: #4f46e5; border: none; cursor: pointer;
          transition: all 0.25s; text-decoration: none; display: inline-block;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .hp-btn-white:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); color: #4f46e5; }
        .hp-btn-ghost {
          padding: 14px 32px; border-radius: 10px; font-size: 16px; font-weight: 700;
          background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5);
          cursor: pointer; transition: all 0.25s; text-decoration: none; display: inline-block;
        }
        .hp-btn-ghost:hover { border-color: white; background: rgba(255,255,255,0.1); color: white; }

        /* ── Footer ── */
        .hp-footer {
          background: #0f0f23; color: rgba(255,255,255,0.7); padding: 60px 0 30px;
        }
        .hp-footer-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
        }
        .hp-footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
          margin-bottom: 48px;
        }
        .hp-footer-brand { }
        .hp-footer-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .hp-footer-desc { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.5); }
        .hp-footer-title {
          font-family: 'Sora', sans-serif;
          font-size: 14px; font-weight: 700; color: white;
          margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;
        }
        .hp-footer-links { list-style: none; }
        .hp-footer-links li { margin-bottom: 10px; }
        .hp-footer-links a {
          font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none;
          transition: color 0.2s; cursor: pointer;
        }
        .hp-footer-links a:hover { color: white; }
        .hp-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .hp-footer-copy { font-size: 13px; color: rgba(255,255,255,0.4); }

        /* ── Mobile nav ── */
        .hp-mobile-menu {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: white; z-index: 999; padding: 80px 24px 40px;
          display: flex; flex-direction: column; gap: 8px;
          transform: translateX(100%); transition: transform 0.3s ease;
        }
        .hp-mobile-menu.open { transform: translateX(0); }
        .hp-mobile-link {
          font-size: 18px; font-weight: 600; color: #1a1a2e;
          padding: 16px 0; border-bottom: 1px solid #f0f0f0;
          text-decoration: none; cursor: pointer;
        }
        .hp-mobile-actions { margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }

        /* ── Counter animation ── */
        .hp-counter { display: inline-block; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hp-features-grid { grid-template-columns: repeat(2, 1fr); }
          .hp-services-grid { grid-template-columns: repeat(2, 1fr); }
          .hp-testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .hp-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .hp-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hp-hero-visual { display: none; }
          .hp-nav-links, .hp-nav-btns { display: none; }
          .hp-hamburger { display: flex; }
          .hp-features-grid { grid-template-columns: 1fr; }
          .hp-services-grid { grid-template-columns: repeat(2, 1fr); }
          .hp-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .hp-steps { grid-template-columns: 1fr; }
          .hp-steps::before { display: none; }
          .hp-testimonials-grid { grid-template-columns: 1fr; }
          .hp-footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .hp-section { padding: 70px 0; }
        }
      `}</style>

            <div className="hp-root">
                {/* ════════════════ NAVBAR ════════════════ */}
                <nav className={`hp-nav ${scrolled ? "scrolled" : ""}`}>
                    <div className="hp-nav-inner">
                        <a className="hp-logo" onClick={() => scrollTo("home")}>
                            <div className="hp-logo-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1.5" />
                                    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="hp-logo-text">Pre<span>clinic</span></span>
                        </a>

                        <ul className="hp-nav-links">
                            {["home", "features", "services", "stats", "contact"].map(s => (
                                <li key={s}>
                                    <a className={activeSection === s ? "active" : ""} onClick={() => scrollTo(s)}>
                                        {s === "stats" ? "About" : s.charAt(0).toUpperCase() + s.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="hp-nav-btns">
                            <Link to={LOGIN_PATH} className="hp-btn-outline">Sign In</Link>
                            <Link to={REGISTER_PATH} className="hp-btn-primary">Get Started</Link>
                        </div>

                        <button className="hp-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                            <span style={{ opacity: menuOpen ? 0 : 1 }} />
                            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className={`hp-mobile-menu ${menuOpen ? "open" : ""}`}>
                    {["home", "features", "services", "stats", "contact"].map(s => (
                        <a key={s} className="hp-mobile-link" onClick={() => scrollTo(s)}>
                            {s === "stats" ? "About" : s.charAt(0).toUpperCase() + s.slice(1)}
                        </a>
                    ))}
                    <div className="hp-mobile-actions">
                        <Link to={LOGIN_PATH} className="hp-btn-outline" style={{ textAlign: "center" }}>Sign In</Link>
                        <Link to={REGISTER_PATH} className="hp-btn-primary" style={{ textAlign: "center" }}>Get Started Free</Link>
                    </div>
                </div>

                {/* ════════════════ HERO ════════════════ */}
                <section id="home">
                    <div className="hp-hero-bg">
                        <div className="hp-blob hp-blob-1" />
                        <div className="hp-blob hp-blob-2" />
                        <div className="hp-blob hp-blob-3" />
                    </div>
                    <div className="hp-hero-inner">
                        <div>
                            <div className="hp-hero-badge">
                                <div className="hp-hero-badge-dot" />
                                Smart Hospital Management System
                            </div>
                            <h1 className="hp-hero-title hp-display">
                                Modern Healthcare<br />
                                <span className="accent">Management Made</span><br />
                                Simple
                            </h1>
                            <p className="hp-hero-desc">
                                Preclinic connects doctors, patients, and staff in one powerful platform.
                                Streamline appointments, manage records, and deliver better care — all in one place.
                            </p>
                            <div className="hp-hero-actions">
                                <Link to={REGISTER_PATH} className="hp-btn-hero hp-btn-hero-primary">
                                    Start Free Today
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link to={LOGIN_PATH} className="hp-btn-hero hp-btn-hero-outline">
                                    Sign In to Dashboard
                                </Link>
                            </div>
                            <div className="hp-hero-trust">
                                <div className="hp-trust-avatars">
                                    {[
                                        { color: "#4f46e5", letter: "D" },
                                        { color: "#7c3aed", letter: "P" },
                                        { color: "#0891b2", letter: "N" },
                                        { color: "#059669", letter: "S" },
                                    ].map((a, i) => (
                                        <div key={i} className="hp-trust-avatar" style={{ background: a.color }}>
                                            {a.letter}
                                        </div>
                                    ))}
                                </div>
                                <p className="hp-trust-text">
                                    Trusted by <strong>500+</strong> healthcare professionals
                                </p>
                            </div>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="hp-hero-visual">
                            <div className="hp-dashboard-preview">
                                <div className="hp-dashboard-topbar">
                                    <div className="hp-db-dots">
                                        {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                                            <div key={c} className="hp-db-dot" style={{ background: c }} />
                                        ))}
                                    </div>
                                    <span className="hp-db-title">Preclinic Dashboard</span>
                                    <div style={{ width: 60 }} />
                                </div>
                                <div className="hp-dashboard-body">
                                    <div className="hp-db-stats">
                                        {[
                                            { num: "248", label: "Appointments" },
                                            { num: "64", label: "Doctors" },
                                            { num: "1.2k", label: "Patients" },
                                        ].map(s => (
                                            <div key={s.label} className="hp-db-stat">
                                                <div className="hp-db-stat-num">{s.num}</div>
                                                <div className="hp-db-stat-label">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="hp-db-chart">
                                        <div className="hp-db-chart-title">Appointments This Week</div>
                                        <div className="hp-chart-bars">
                                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                                <div key={i} className="hp-chart-bar"
                                                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s`, opacity: 0.6 + i * 0.05 }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hp-db-appointments">
                                        <div className="hp-db-apt-title">Today's Appointments</div>
                                        {[
                                            { name: "Rahul Sharma", time: "10:00 AM", color: "#4f46e5", status: "Confirmed", sc: "#dcfce7", tc: "#16a34a" },
                                            { name: "Priya Patel", time: "11:30 AM", color: "#7c3aed", status: "Pending", sc: "#fef9c3", tc: "#a16207" },
                                            { name: "Amit Kumar", time: "2:00 PM", color: "#0891b2", status: "Confirmed", sc: "#dcfce7", tc: "#16a34a" },
                                        ].map(a => (
                                            <div key={a.name} className="hp-db-apt-item">
                                                <div className="hp-db-apt-avatar" style={{ background: a.color }}>
                                                    {a.name[0]}
                                                </div>
                                                <div className="hp-db-apt-info">
                                                    <div className="hp-db-apt-name">{a.name}</div>
                                                    <div className="hp-db-apt-time">{a.time}</div>
                                                </div>
                                                <span className="hp-db-apt-badge"
                                                    style={{ background: a.sc, color: a.tc }}>
                                                    {a.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <div className="hp-float-card hp-float-1">
                                <div className="hp-float-icon" style={{ background: "#dcfce7" }}>✅</div>
                                <div>
                                    <div className="hp-float-label">Appointments Today</div>
                                    <div className="hp-float-val">24 Booked</div>
                                </div>
                            </div>
                            <div className="hp-float-card hp-float-2">
                                <div className="hp-float-icon" style={{ background: "#ede9fe" }}>👨‍⚕️</div>
                                <div>
                                    <div className="hp-float-label">Doctors Online</div>
                                    <div className="hp-float-val">12 Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════ FEATURES ════════════════ */}
                <section id="features" className="hp-section">
                    <div className="hp-section-inner">
                        <div className="hp-section-header center">
                            <div className="hp-section-tag">
                                <span>⚡</span> Features
                            </div>
                            <h2 className="hp-section-title hp-display">
                                Everything You Need to Run<br />a Modern Hospital
                            </h2>
                            <p className="hp-section-desc">
                                Preclinic brings together all the tools your healthcare facility needs in one unified, easy-to-use platform.
                            </p>
                        </div>
                        <div className="hp-features-grid">
                            {[
                                { icon: "📅", color: "#ede9fe", title: "Smart Appointment Booking", desc: "Online & walk-in appointment scheduling with real-time availability, automated reminders, and calendar sync." },
                                { icon: "👨‍⚕️", color: "#dcfce7", title: "Doctor Management", desc: "Complete doctor profiles, schedules, specializations, and performance tracking in one place." },
                                { icon: "🏥", color: "#dbeafe", title: "Patient Records", desc: "Comprehensive patient history, prescriptions, lab reports, and medical records — securely stored." },
                                { icon: "💬", color: "#fce7f3", title: "Real-time Messaging", desc: "WhatsApp-style chat between admin, doctors, and patients with read receipts and online status." },
                                { icon: "💰", color: "#fef9c3", title: "Billing & Invoicing", desc: "Automated invoice generation, payment tracking, and financial reports for the entire clinic." },
                                { icon: "📊", color: "#f0fdf4", title: "Analytics Dashboard", desc: "Powerful insights into appointments, revenue, patient trends, and staff performance." },
                                { icon: "🔔", color: "#fff7ed", title: "Smart Notifications", desc: "Email, SMS, and in-app notifications for appointments, reports, and system events." },
                                { icon: "👥", color: "#f5f3ff", title: "Staff & HR Management", desc: "Staff profiles, payroll, attendance, leaves, and department management simplified." },
                                { icon: "🔒", color: "#f0f9ff", title: "Role-based Security", desc: "Separate dashboards and permissions for Admin, Doctor, and Patient roles with JWT authentication." },
                            ].map(f => (
                                <div key={f.title} className="hp-feature-card">
                                    <div className="hp-feature-icon" style={{ background: f.color }}>
                                        {f.icon}
                                    </div>
                                    <div className="hp-feature-title hp-display">{f.title}</div>
                                    <p className="hp-feature-desc">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════ SERVICES ════════════════ */}
                <section id="services" className="hp-section">
                    <div className="hp-section-inner">
                        <div className="hp-section-header center">
                            <div className="hp-section-tag"><span>🏥</span> Services</div>
                            <h2 className="hp-section-title hp-display">Medical Services We Support</h2>
                            <p className="hp-section-desc">
                                Preclinic supports all types of medical specialties and departments.
                            </p>
                        </div>
                        <div className="hp-services-grid">
                            {[
                                { icon: "❤️", color: "#fee2e2", title: "Cardiology", desc: "Heart health monitoring & care" },
                                { icon: "🧠", color: "#ede9fe", title: "Neurology", desc: "Brain & nervous system care" },
                                { icon: "🦷", color: "#dbeafe", title: "Dental", desc: "Complete dental management" },
                                { icon: "👁️", color: "#fef9c3", title: "Ophthalmology", desc: "Eye care & vision tests" },
                                { icon: "🦴", color: "#f0fdf4", title: "Orthopedics", desc: "Bone & joint treatments" },
                                { icon: "👶", color: "#fce7f3", title: "Pediatrics", desc: "Child health & development" },
                                { icon: "🔬", color: "#f0f9ff", title: "Pathology", desc: "Lab tests & diagnostics" },
                                { icon: "🩺", color: "#fff7ed", title: "General Medicine", desc: "Everyday healthcare needs" },
                            ].map(s => (
                                <div key={s.title} className="hp-service-card">
                                    <div className="hp-service-icon" style={{ background: s.color }}>{s.icon}</div>
                                    <div className="hp-service-title hp-display">{s.title}</div>
                                    <p className="hp-service-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════ STATS ════════════════ */}
                <section id="stats" className="hp-section">
                    <div className="hp-stats-bg" />
                    <div className="hp-section-inner" ref={statsRef}>
                        <div className="hp-stats-grid">
                            {[
                                { num: 500, suffix: "+", label: "Healthcare Facilities" },
                                { num: 50000, suffix: "+", label: "Patients Managed" },
                                { num: 2000, suffix: "+", label: "Doctors Registered" },
                                { num: 99.9, suffix: "%", label: "System Uptime" },
                            ].map(s => (
                                <div key={s.label} className="hp-stat-item">
                                    <div className="hp-stat-num">
                                        <Counter target={s.num} visible={statsVisible} />
                                        <span className="suffix">{s.suffix}</span>
                                    </div>
                                    <div className="hp-stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════ HOW IT WORKS ════════════════ */}
                <section id="how" className="hp-section">
                    <div className="hp-section-inner">
                        <div className="hp-section-header center">
                            <div className="hp-section-tag"><span>🚀</span> How It Works</div>
                            <h2 className="hp-section-title hp-display">Get Started in 3 Simple Steps</h2>
                        </div>
                        <div className="hp-steps">
                            {[
                                { num: "1", title: "Create Your Account", desc: "Register as Admin, Doctor, or Patient. Set up your profile and clinic details in minutes." },
                                { num: "2", title: "Configure Your Clinic", desc: "Add departments, staff, doctors, services, and configure your appointment system." },
                                { num: "3", title: "Start Managing", desc: "Book appointments, chat with patients, generate reports, and run your clinic efficiently." },
                            ].map(s => (
                                <div key={s.num} className="hp-step">
                                    <div className="hp-step-num hp-display">{s.num}</div>
                                    <div className="hp-step-title hp-display">{s.title}</div>
                                    <p className="hp-step-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════ TESTIMONIALS ════════════════ */}
                <section id="testimonials" className="hp-section">
                    <div className="hp-section-inner">
                        <div className="hp-section-header center">
                            <div className="hp-section-tag"><span>💬</span> Testimonials</div>
                            <h2 className="hp-section-title hp-display">What Healthcare Professionals Say</h2>
                        </div>
                        <div className="hp-testimonials-grid">
                            {[
                                { text: "Preclinic transformed how we manage our clinic. The appointment system alone saved us 3 hours per day. The real-time chat between doctors and admin is exceptional.", name: "Dr. Rajesh Kumar", role: "Chief Medical Officer", color: "#4f46e5", rating: 5 },
                                { text: "The patient management features are outstanding. Lab reports, prescriptions, appointment history — everything is organized and accessible in seconds.", name: "Dr. Priya Sharma", role: "Cardiologist", color: "#7c3aed", rating: 5 },
                                { text: "As a hospital admin, the billing and payroll features have made my job so much easier. The notification system keeps everyone in sync automatically.", name: "Anjali Mehta", role: "Hospital Administrator", color: "#0891b2", rating: 5 },
                            ].map(t => (
                                <div key={t.name} className="hp-testimonial-card">
                                    <div className="hp-stars">{"★".repeat(t.rating)}</div>
                                    <p className="hp-testimonial-text">"{t.text}"</p>
                                    <div className="hp-testimonial-author">
                                        <div className="hp-author-avatar" style={{ background: t.color }}>
                                            {t.name[4]}
                                        </div>
                                        <div>
                                            <div className="hp-author-name">{t.name}</div>
                                            <div className="hp-author-role">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════ CTA ════════════════ */}
                <section id="contact" className="hp-section">
                    <div className="hp-cta-bg" />
                    <div className="hp-cta-inner">
                        <h2 className="hp-cta-title hp-display">
                            Ready to Transform Your Healthcare Management?
                        </h2>
                        <p className="hp-cta-desc">
                            Join hundreds of clinics already using Preclinic. Get started today — no setup fee required.
                        </p>
                        <div className="hp-cta-actions">
                            <Link to={REGISTER_PATH} className="hp-btn-white">
                                Create Free Account
                            </Link>
                            <Link to={LOGIN_PATH} className="hp-btn-ghost">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ════════════════ FOOTER ════════════════ */}
                <footer className="hp-footer">
                    <div className="hp-footer-inner">
                        <div className="hp-footer-grid">
                            <div className="hp-footer-brand">
                                <div className="hp-footer-logo">
                                    <div className="hp-logo-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1.5" />
                                            <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span style={{ fontFamily: "Sora, sans-serif", fontSize: 18, fontWeight: 700, color: "white" }}>
                                        Pre<span style={{ color: "#a78bfa" }}>clinic</span>
                                    </span>
                                </div>
                                <p className="hp-footer-desc">
                                    Modern Hospital Management System for clinics, hospitals, and healthcare facilities of all sizes.
                                </p>
                            </div>
                            {[
                                {
                                    title: "Platform",
                                    links: ["Features", "Services", "Pricing", "Updates"]
                                },
                                {
                                    title: "For Users",
                                    links: ["For Doctors", "For Patients", "For Admin", "Mobile App"]
                                },
                                {
                                    title: "Company",
                                    links: ["About", "Contact", "Privacy Policy", "Terms of Service"]
                                }
                            ].map(col => (
                                <div key={col.title}>
                                    <div className="hp-footer-title">{col.title}</div>
                                    <ul className="hp-footer-links">
                                        {col.links.map(l => (
                                            <li key={l}><a>{l}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="hp-footer-bottom">
                            <span className="hp-footer-copy">© 2025 Preclinic HMS. All rights reserved.</span>
                            <span className="hp-footer-copy">Built with ❤️ for better healthcare</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

// ✅ Animated counter component
const Counter = ({ target, visible }: { target: number; visible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!visible) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [visible, target]);

    return <span>{count.toLocaleString()}</span>;
};

export default HomePage;