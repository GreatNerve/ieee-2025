import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-400" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          
          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start justify-center sm:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  123 IEEE Street, Technology District<br />
                  City, State 12345
                </p>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@ieee2025.org" 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@ieee2025.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Quick Links</h3>
            <nav className="flex flex-wrap justify-center sm:justify-start gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* About IEEE */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">About IEEE</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0">
              IEEE is the world's largest technical professional organization dedicated to advancing technology 
              for the benefit of humanity.
            </p>
          </div>

          {/* Social Media & Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-lg transition-all duration-200 ${social.color} hover:bg-gray-700 hover:scale-105`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="max-w-sm mx-auto sm:mx-0">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-400 text-center sm:text-left">
              &copy; {currentYear} IEEE 2025. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
