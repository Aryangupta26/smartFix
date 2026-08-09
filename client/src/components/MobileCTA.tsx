import { Phone, MessageSquare, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig, getWhatsAppUrl } from '../config/site.config.ts';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian-900 border-t border-white/5 shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-white/5 h-16">
        
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center text-slate-300 active:bg-neutral-800"
        >
          <Phone size={18} className="text-[#e32831] mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-slate-300 active:bg-neutral-800"
        >
          <MessageSquare size={18} className="text-emerald-500 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Enroll Now */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center bg-[#e32831] text-white active:bg-[#b01d24]"
        >
          <GraduationCap size={18} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Enroll Now</span>
        </Link>
        
      </div>
    </div>
  );
}
