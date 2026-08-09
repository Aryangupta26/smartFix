import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, UserCheck, Cpu, Award, Store, ShieldAlert, 
  Clock, CheckCircle
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/site.config.ts';
import ContactForm from '../components/ContactForm.tsx';

// Mapping string icons to React elements
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Wrench,
  UserCheck,
  Cpu,
  Award,
  Store,
  ShieldAlert
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software' | 'chip-level' | 'diagnostics'>('hardware');

  const syllabusTabs = {
    hardware: {
      title: "Mobile Hardware Repairs",
      desc: "Learn to safely disassemble and replace modular components of popular models.",
      items: ["Screen & Display Assembly swapping", "Lithium Battery diagnostics & replacing", "Charging ribbon, audio jack & speaker repair", "Camera module and sensor replacement"]
    },
    diagnostics: {
      title: "Fault Diagnostics",
      desc: "Find internal issues using standard testing tools.",
      items: ["Power issues tracking with DC supply", "Multi-meter voltage and resistance reads", "Tracing short circuits using Rosin method", "Diagnostic logs & software crash dumps"]
    },
    software: {
      title: "Software & Flashing",
      desc: "Troubleshoot bootloops, OS locks, and firmware faults.",
      items: ["OS flashing & firmware downloads", "Bypassing locks & bootloader unlocking", "Data backup, extraction and restore", "JTAG & network unlocking tutorials"]
    },
    'chip-level': {
      title: "Chip-Level & Micro-Soldering",
      desc: "Perform microscope-level chip reballing and repair.",
      items: ["Underfilled & non-underfilled IC desoldering", "BGA stencil reballing and alignment", "Micro-jumper tracks rebuilding", "Short circuit thermal diagnostic camera work"]
    }
  };

  return (
    <div className="">
      
      {/* 1. HERO SECTION (SPLIT SCREEN LAYOUT) */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row overflow-hidden bg-obsidian-900">
        
        {/* Left Side: Gradient Panel */}
        <div className="w-full md:w-[45%] h-1/2 md:h-full bg-gradient-to-br from-[#b0353c] via-[#8c4852] to-[#516e84] relative flex flex-col justify-center px-8 lg:px-16 z-0">
          
          {/* Middle Left Icon Link */}
          <div className="hidden md:flex flex-col items-start absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-20">
            <div className="grid grid-cols-2 gap-1 mb-3">
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-white leading-tight">Our<br/>Gallery</span>
          </div>
          
          {/* Subtext at bottom left */}
          <div className="absolute bottom-10 left-8 lg:left-16 max-w-xs z-20 hidden md:block">
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Founded in 2020 by Expert Tech, the academy is accustomed to creating remarkable engineers and business owners.
            </p>
          </div>
        </div>

        {/* Right Side: Image Panel */}
        <div className="w-full md:w-[55%] h-1/2 md:h-full relative z-0">
          {/* Subtle overlay to darken the image slightly for text contrast */}
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          
          <img
            src="/assets/hero_lab_modern_1786216707543.png"
            alt="Mobile Repairing Training Lab"
            className="w-full h-full object-cover grayscale-[20%] brightness-90"
          />

          {/* Red Square Badge (Bottom Right) */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-[#e32831] w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center text-white z-20 shadow-2xl hover:scale-105 transition-transform cursor-pointer">
            <div className="flex items-center space-x-1 mb-2">
              <div className="w-2 h-6 bg-white rounded-sm"></div>
              <div className="w-2 h-6 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm self-start"></div>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase leading-tight text-center">Certified<br/>Academy</span>
          </div>
        </div>

        {/* Overlapping Typography (Center) */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 lg:px-40 md:pl-[25%] pointer-events-none mt-10 md:mt-0">
          <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-medium tracking-tight text-white leading-[1.05] drop-shadow-lg">
            Mobile repairing &<br />technical training
          </h1>
        </div>

      </section>

      {/* 2. STATS SECTION (MINIMALIST TRANSITION BAR) */}
      <section className="bg-obsidian-900 border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1">
              <p className="text-4xl lg:text-5xl font-black text-brand-red">
                {siteConfig.stats.studentsTrained}+
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Students Trained
              </p>
            </div>

            <div className="space-y-1 pt-6 md:pt-0 md:pl-8">
              <p className="text-4xl lg:text-5xl font-black text-brand-red">
                {siteConfig.stats.yearsExperience}+
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Years Experience
              </p>
            </div>

            <div className="space-y-1 pt-6 md:pt-0 md:pl-8">
              <p className="text-4xl lg:text-5xl font-black text-brand-red">
                {siteConfig.stats.practicalHours}
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Lab Hours
              </p>
            </div>

            <div className="space-y-1 pt-6 md:pt-0 md:pl-8">
              <p className="text-4xl lg:text-5xl font-black text-brand-red">
                {siteConfig.stats.successRate}
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Placement Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (DARK CHARCOAL SECTION WITH RED TITLE BLOCK) */}
      <section className="bg-[#222222] py-24 text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left Red Square Block */}
          <div className="w-full lg:w-1/3 bg-[#e32831] p-10 flex flex-col justify-between text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/80 block mb-6">Our Advantages</span>
              <h2 className="text-4xl font-medium tracking-tight leading-tight">
                Why Choose Our Training?
              </h2>
            </div>
            <p className="text-white/90 text-sm font-light leading-relaxed mt-10 lg:mt-0">
              Designers can use private rooms as inspiration for their next project. This will allow them to create a superior interior. We focus heavily on practical skills. You get personal desks, diagnostic setups, and modules updated to the latest trends.
            </p>
          </div>

          {/* Right Staggered White Cards Block */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {siteConfig.benefits.map((benefit, index) => {
              const IconComponent = IconMap[benefit.iconName] || Wrench;
              return (
                <div 
                  key={index} 
                  className={`bg-white p-10 text-left space-y-6 text-black border border-neutral-200 transition-transform duration-300 hover:-translate-y-2 ${
                    index % 2 === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. COURSES LISTING SECTION (LIGHT OFF-WHITE SECTION) */}
      <section className="bg-[#f4f4f4] py-24 text-black">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">Courses / Modules</span>
              <h2 className="text-5xl font-medium tracking-tight">Our Professional Courses</h2>
            </div>
            <p className="text-neutral-500 max-w-sm text-sm font-light mt-4 md:mt-0">
              Structured programs designed from basic components to advanced double-decker CPU micro-soldering.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.courses.map((course) => (
              <div 
                key={course.slug} 
                className="bg-white border border-neutral-200 flex flex-col group transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden relative border-b border-neutral-100">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-neutral-900 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">
                    {course.level}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      <span className="flex items-center space-x-1">
                        <Clock size={12} className="text-[#e32831]" />
                        <span>{course.duration}</span>
                      </span>
                      <span>{course.mode}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900">{course.name}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light line-clamp-3">{course.shortDescription}</p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Course Fee</p>
                      <p className="text-lg font-black text-neutral-900">{course.fee}</p>
                    </div>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="px-6 py-2.5 bg-neutral-900 text-white hover:bg-[#e32831] text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STRUCTURED CURRICULUM OVERVIEW (DARK CHARCOAL SECTION) */}
      <section className="bg-[#222222] py-24 text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-white/10 pb-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Practical Mastery</span>
              <h2 className="text-4xl font-medium tracking-tight">What Skills Will You Master?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Tabs Selector */}
            <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 pr-0 lg:pr-6 no-scrollbar">
              {(Object.keys(syllabusTabs) as Array<keyof typeof syllabusTabs>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer border ${
                    activeTab === key
                      ? 'bg-[#e32831] border-[#e32831] text-white'
                      : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {syllabusTabs[key].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8 bg-neutral-900 border border-neutral-800 p-10 text-left space-y-8 min-h-[350px] flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  {syllabusTabs[activeTab].title}
                </h3>
                <p className="text-neutral-400 text-sm font-light">
                  {syllabusTabs[activeTab].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {syllabusTabs[activeTab].items.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-neutral-800/50 p-4 border border-neutral-800">
                    <span className="w-6 h-6 bg-[#e32831]/10 border border-[#e32831]/20 flex items-center justify-center text-[#e32831] shrink-0 mt-0.5">
                      <CheckCircle size={12} />
                    </span>
                    <span className="text-neutral-300 font-medium text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HOW IT WORKS / STEP PROCESS (LIGHT OFF-WHITE SECTION) */}
      <section className="bg-[#f4f4f4] py-24 text-black">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-black/10 pb-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">Syllabus Flow</span>
              <h2 className="text-4xl font-medium tracking-tight">Your Journey to Becoming a Pro</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquire", desc: "Submit an online enquiry or contact us via WhatsApp." },
              { step: "02", title: "Counselling", desc: "Speak to our repair counselor to pick the right syllabus level." },
              { step: "03", title: "Hands-on Training", desc: "Participate in daily 2-hour intense laboratory practicals." },
              { step: "04", title: "Certification", desc: "Pass assessments, receive certifications, and start placement interviews." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 p-8 space-y-6 text-left relative overflow-hidden group">
                <div className="text-5xl font-black text-neutral-100 absolute -top-2 -right-2">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-[#e32831] mb-2 tracking-widest uppercase">Step {step.step}</div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CONTACT & FOOTER SECTION (MASSIVE CRIMSON GRADIENT PANELS) */}
      <section id="enroll" className="bg-gradient-to-br from-[#b0353c] via-[#8c4852] to-[#516e84] text-white pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-16">
          
          {/* Header */}
          <div className="border-b border-white/20 pb-8 text-left">
            <h2 className="text-6xl sm:text-7xl font-medium tracking-tight mb-4">Let's have a chat!</h2>
          </div>

          {/* Grid Layout for Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Contact Info (Sitemap and Contacts style) */}
            <div className="lg:col-span-5 text-left space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/60 block">Sitemap</span>
                <div className="grid grid-cols-2 gap-4 text-sm font-light">
                  <a href="#" className="hover:text-black/80 transition-colors">Home</a>
                  <a href="#courses" className="hover:text-black/80 transition-colors">Courses</a>
                  <a href="#gallery" className="hover:text-black/80 transition-colors">Our Gallery</a>
                  <a href="#about" className="hover:text-black/80 transition-colors">About Us</a>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/60 block">Contact</span>
                <div className="space-y-2 text-sm font-light">
                  <p>Admissions: <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-black/80 transition-colors">{siteConfig.contact.phoneFormatted}</a></p>
                  <p>WhatsApp: <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-black/80 transition-colors">Chat Now</a></p>
                  <p>Email: {siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Right Form Panel (Transparent inputs with white borders) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-10 backdrop-blur-md">
              <ContactForm />
            </div>

          </div>

          {/* Final copyright footer bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
            <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
            <p className="mt-4 md:mt-0 font-light">Designed in collaboration with Halo Lab</p>
          </div>

        </div>
      </section>
    </div>
  );
}
