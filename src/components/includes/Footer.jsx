import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Add Intersection Observer for scroll-in animation with stagger
function useFooterStaggerReveal(colCount) {
  const refs = Array.from({ length: colCount }, () => useRef(null));
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-col-animate");
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);
  return refs;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const colRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Force animation on mount for testing
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".footer-col").forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("footer-col-animate");
        }, i * 200);
      });
    }, 500);
  }, []);

  // Update navigation links for internal routing
  const navigationLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Features", to: "/features" },
    { name: "Team", to: "/team" },
    { name: "Events", to: "/events" },
    { name: "Contact", to: "/contact" },
  ];

  const servicesLinks = [
    { name: "Membership", to: "/membership" },
    { name: "Conferences", to: "/conferences" },
    { name: "Publications", to: "/publications" },
    { name: "Standards", to: "/standards" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:text-blue-500",
      external: true,
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-sky-500",
      external: true,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
      external: true,
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-400",
      external: true,
    },
  ];

  return (
    <footer className="footer-root border-t border-blue-900 shadow-[0_-2px_16px_0_rgba(26,31,54,0.12)] text-white relative z-10 bg-[#22336b]">
      <style>{`
        .footer-root {
          --footer-col-gap: 2.5rem;
          --footer-row-gap: 2.5rem;
          background: #22336b !important;
        }
        .footer-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: var(--footer-col-gap);
        }
        @media (max-width: 1023px) {
          .footer-grid { flex-direction: column; gap: var(--footer-row-gap); }
          .footer-col { margin-left: 0 !important; max-width: 100%; }
        }
        @media (max-width: 639px) {
          .footer-grid { flex-direction: column; gap: var(--footer-row-gap); }
        }
        .footer-col {
          flex: 1 1 0;
          min-width: 180px;
          max-width: 300px;
          text-align: left;
          padding: 0 0.5rem;
          opacity: 0;
          transform: translateY(100px);
          transition: opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-col-animate {
          opacity: 1 !important;
          transform: none !important;
        }
        .footer-col:first-child {
          margin-left: -1.5rem;
        }
        .footer-link {
          position: relative;
          display: inline-block;
          color: #fff;
          transition: color 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-link:after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          width: 0;
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .footer-link:hover:after, .footer-link:focus:after {
          width: 100%;
        }
        .footer-link:hover, .footer-link:focus {
          color: #e0e7ff;
        }
        .footer-icon {
          color: #fff;
        }
      `}</style>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="footer-grid">
          {/* About Us */}
          <div ref={colRefs[0]} className="footer-col flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-1">About Us</h3>
            <p className="text-sm leading-relaxed text-white/90">
              IEEE is the world's largest technical professional organization
              dedicated to advancing technology for the benefit of humanity. We
              inspire global innovation through publications, conferences, and
              educational activities.
            </p>
          </div>
          {/* Quick Links */}
          <div
            ref={colRefs[1]}
            className="footer-col flex flex-col gap-4 items-center text-center"
          >
            <h3 className="text-lg font-bold mb-1">Quick Links</h3>
            <nav className="flex flex-col gap-2 items-center">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="footer-link text-sm focus:outline-none"
                  tabIndex={0}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Services */}
          <div
            ref={colRefs[2]}
            className="footer-col flex flex-col gap-4 items-center text-center"
          >
            <h3 className="text-lg font-bold mb-1">Services</h3>
            <nav className="flex flex-col gap-2 items-center">
              {servicesLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="footer-link text-sm focus:outline-none"
                  tabIndex={0}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Contact Us */}
          <div
            ref={colRefs[3]}
            className="footer-col flex flex-col gap-4 items-center text-center"
          >
            <h3 className="text-lg font-bold mb-1">Contact Us</h3>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5 footer-icon" />
              <a
                href="mailto:saipratik2311@gmail.com"
                className="text-sm hover:text-white transition-colors"
              >
                saipratik2311@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-5 h-5 footer-icon" />
              <a
                href="tel:8447989912"
                className="text-sm hover:text-white transition-colors"
              >
                8447989912
              </a>
            </div>
            <div className="flex gap-3 mt-2 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-8 h-8 bg-[#23284a] rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-[#1A1F36] hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <social.icon className="w-4 h-4 footer-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-400 text-center lg:text-left">
              &copy; {currentYear} IEEE 2025. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
