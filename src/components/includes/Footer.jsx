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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    123 IEEE Street<br />
                    Technology District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </div>
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-gray-300 group-hover:text-white" />
                </div>
                <a 
                  href="mailto:info@ieee2025.org" 
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  info@ieee2025.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* About IEEE */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">About IEEE</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              IEEE is the world's largest technical professional organization dedicated to advancing technology 
              for the benefit of humanity. We inspire global innovation through publications, conferences, 
              and educational activities.
            </p>
          </div>

          {/* Social Media & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Follow Us</h3>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-600 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20 text-white placeholder-gray-400 transition-all duration-300"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
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
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
