import { Users, Building, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';

export default function About() {
  return (
    <div className="pt-20 pb-20 bg-[#f4f4f4] text-black min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#222222] text-white py-20 text-left border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">About Our Academy</h1>
          <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
            Empowering students with industry-relevant skills in micro-soldering, diagnostics, and chip-level hardware repair.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 leading-tight">
            Our Mission is Simple: Practical, Career-Focused Education.
          </h2>
          <p className="text-neutral-600 text-sm font-light leading-relaxed">
            At {siteConfig.businessName}, we believe that true engineering skills are developed through hands-on laboratory practice, not generic presentations. Our training labs are custom-built to resemble authorized service center repair desks.
          </p>
          <p className="text-neutral-600 text-sm font-light leading-relaxed">
            Whether you are a beginner looking to open your own mobile repair shop or an existing technician wanting to master Face ID repair and BGA IC reballing, our custom-designed courses will help you succeed.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-video bg-white overflow-hidden border border-neutral-200 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
              alt="Students in Lab"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="bg-[#222222] py-20 text-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-12">
          <div className="text-left space-y-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Our Foundations</span>
            <h2 className="text-3xl font-medium tracking-tight">Core Educational Pillars</h2>
            <p className="text-neutral-400 text-sm font-light max-w-2xl">
              We hold ourselves to high technical standards to ensure our graduates are competitive in the repair market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-8 border border-neutral-800 text-left space-y-4">
              <div className="p-3 bg-neutral-850 border border-neutral-800 text-[#e32831] inline-block">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Personal Attention</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">We limit batch sizes to maximum 10 students per slots to ensure instructor availability for every student.</p>
            </div>

            <div className="bg-neutral-900 p-8 border border-neutral-800 text-left space-y-4">
              <div className="p-3 bg-neutral-850 border border-neutral-800 text-[#e32831] inline-block">
                <Building size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Premium Infrastructure</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Individual stations with high-grade temperature-controlled SMDs, digital multi-meters, and microscopes.</p>
            </div>

            <div className="bg-neutral-900 p-8 border border-neutral-800 text-left space-y-4">
              <div className="p-3 bg-neutral-850 border border-neutral-800 text-[#e32831] inline-block">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Lifetime Support</h3>
              <p className="text-neutral-400 text-xs font-light leading-relaxed">Graduates get access to our online support forum to consult on complex motherboard diagnostic issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors list */}
      <section className="py-20 max-w-7xl mx-auto px-8 lg:px-16 space-y-12 text-black">
        <div className="text-left space-y-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 block">Trainers</span>
          <h2 className="text-3xl font-medium tracking-tight">Meet Our Core Instructors</h2>
          <p className="text-neutral-500 text-sm font-light max-w-2xl">
            Learn directly from chip-level hardware repair engineers with years of commercial service experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {siteConfig.trainers.map((trainer, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-8 flex items-center space-x-6 text-left">
              <img
                src={trainer.avatar}
                alt={trainer.name}
                className="w-20 h-20 object-cover border border-neutral-200 shrink-0"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold uppercase tracking-tight text-neutral-900">{trainer.name}</h3>
                <p className="text-xs font-bold text-[#e32831] uppercase tracking-wider">{trainer.role}</p>
                <p className="text-xs text-neutral-500">Experience: {trainer.experience}</p>
                <p className="text-xs text-neutral-600 font-medium">Specs: {trainer.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
