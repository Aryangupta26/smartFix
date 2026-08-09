import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { 
      name: 'facebook', 
      svg: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>, 
      href: siteConfig.socialLinks.facebook 
    },
    { 
      name: 'instagram', 
      svg: <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
      href: siteConfig.socialLinks.instagram 
    },
    { 
      name: 'youtube', 
      svg: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.108C0 8.026 0 12 0 12s0 3.974.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.524 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.974 24 12 24 12s0-3.974-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, 
      href: siteConfig.socialLinks.youtube 
    },
    { 
      name: 'linkedin', 
      svg: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
      href: siteConfig.socialLinks.linkedin 
    },
  ];

  return (
    <footer className="bg-obsidian-900 text-slate-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center space-x-2">
              <span>{siteConfig.logo}</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed">
              {siteConfig.tagline} Professional white-label template designed to deliver hand-on micro-soldering, diagnostics, and software repair training.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((soc) => {
                if (!soc.href) return null;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-800 hover:bg-[#e32831] hover:text-white transition-all duration-200"
                    aria-label={`Follow us on ${soc.name}`}
                  >
                    {soc.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">Our Courses</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Training Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">Student Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses List */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Courses Offered</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.courses.map((course) => (
                <li key={course.slug}>
                  <Link to={`/courses/${course.slug}`} className="hover:text-white transition-colors block truncate">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#e32831] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#e32831] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#e32831] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-[#e32831] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="mt-16 pt-8 border-t border-white/5 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} {siteConfig.businessName}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
