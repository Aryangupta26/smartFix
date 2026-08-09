import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, MessageSquare } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site.config.ts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'COURSES', path: '/courses' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACTS', path: '/contact' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 pt-10 px-8 lg:px-16 pointer-events-none">
        <div className="flex items-start justify-between">
          
          {/* Left Side: Logo & Search */}
          <div className="flex items-center space-x-12 pointer-events-auto">
            {/* Logo Block (JUO style) */}
            <Link to="/" className="bg-white text-slate-900 px-3 py-1.5 font-black text-xl tracking-tighter">
              {siteConfig.logo.replace('⚡ ', '').toUpperCase()}
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-2 border-b border-white/30 pb-1 pb-1 w-48 text-white/70">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="SEARCH" 
                className="bg-transparent border-none outline-none text-xs tracking-widest placeholder-white/70 w-full text-white font-medium"
              />
            </div>
          </div>

          {/* Right Side: Stacked Nav Links (Desktop) */}
          <div className="hidden md:flex flex-col items-end space-y-4 pointer-events-auto mt-2 pr-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium tracking-widest transition-all duration-300 hover:text-white ${
                    isActive ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center pointer-events-auto bg-black/20 p-2 rounded-full backdrop-blur-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/70 transition-colors"
              aria-label="Open Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-obsidian-900/95 backdrop-blur-xl z-40 flex flex-col pt-32 px-8">
          <div className="flex flex-col space-y-6 animate-slide-up">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-display font-bold tracking-wide transition-all ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-10 border-t border-white/10 flex flex-col space-y-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center space-x-3 text-white">
                <Phone size={20} className="text-electric-400" />
                <span className="font-semibold text-lg">Call Us</span>
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white">
                <MessageSquare size={20} className="text-emerald-400" />
                <span className="font-semibold text-lg">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
