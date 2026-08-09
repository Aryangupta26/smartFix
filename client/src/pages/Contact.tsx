import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site.config.ts';
import ContactForm from '../components/ContactForm.tsx';

export default function Contact() {
  return (
    <div className="pt-20 pb-20 bg-[#f4f4f4] text-black min-h-screen">
      
      {/* Title */}
      <section className="bg-[#222222] text-white py-20 text-left border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Contact Us</h1>
          <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
            Have questions about admissions, fees, or batch timings? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900">
                Our Campus Office
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                Visit our training lab for a direct counselling session. We are open Monday to Saturday. Walk-ins are welcome.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-neutral-205 text-[#e32831] shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900 text-base">Campus Location</h4>
                  <p className="text-neutral-600 text-sm mt-1">{siteConfig.contact.address}</p>
                  <a
                    href={siteConfig.contact.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#e32831] hover:underline font-bold mt-2 uppercase tracking-wider"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-neutral-205 text-[#e32831] shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900 text-base">Call Admissions</h4>
                  <p className="text-neutral-600 text-sm mt-1">For general course enquiries and custom batches:</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-neutral-900 font-bold text-lg hover:text-[#e32831] block mt-1"
                  >
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-neutral-205 text-emerald-600 shrink-0 mt-0.5">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900 text-base">WhatsApp Support</h4>
                  <p className="text-neutral-600 text-sm mt-1 font-light">Instant support, brochure PDFs and demo registration:</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-neutral-900 font-bold text-lg hover:text-emerald-600 mt-1"
                  >
                    <span>Message on WhatsApp</span>
                    <ExternalLink size={14} className="text-emerald-500" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-neutral-205 text-[#e32831] shrink-0 mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900 text-base">Email Queries</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-neutral-600 text-sm hover:text-[#e32831] block mt-1"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-neutral-205 text-[#e32831] shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-neutral-900 text-base">Office Hours</h4>
                  <p className="text-neutral-600 text-sm mt-1">{siteConfig.contact.openingHours}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form & Map Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-neutral-200 p-8 shadow-sm">
              <ContactForm />
            </div>
            
            {/* Embed Map */}
            <div className="w-full h-80 overflow-hidden border border-neutral-200 shadow-sm">
              <iframe
                title="Google Maps Campus Office Location"
                src={siteConfig.contact.googleMapsEmbed}
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
