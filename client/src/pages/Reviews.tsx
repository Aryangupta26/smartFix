import { Star } from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';

export default function Reviews() {
  return (
    <div className="pt-20 pb-20 bg-[#f4f4f4] text-black min-h-screen">
      
      {/* Title */}
      <section className="bg-[#222222] text-white py-20 text-left border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Student Success</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Student Reviews</h1>
          <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
            Hear from our alumni who graduated and launched successful repair careers or shops of their own.
          </p>
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-12">
        <div className="bg-white border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-neutral-50 p-6 border border-neutral-200 flex flex-col items-center shrink-0">
              <span className="text-4xl font-black text-neutral-900">4.9</span>
              <div className="flex items-center space-x-0.5 text-amber-500 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Google rating</span>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-xl font-bold uppercase tracking-tight text-neutral-900">Genuine Graduate Feedback</h2>
              <p className="text-neutral-500 text-sm font-light max-w-lg leading-relaxed">
                Our rating is backed by verified student submissions. Check out what they think of our instructors, tools, and job support.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-900 text-white hover:bg-[#e32831] text-xs font-bold uppercase tracking-widest transition-colors duration-300"
          >
            <span>View All Google Reviews</span>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {siteConfig.testimonials.map((rev, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8 flex flex-col justify-between space-y-6 text-left"
            >
              <div className="space-y-4">
                {/* Rating stars & Source tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="bg-neutral-50 border border-neutral-200 text-neutral-600 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center space-x-1">
                    <Star size={10} fill="currentColor" className="text-[#e32831]" />
                    <span>{rev.source}</span>
                  </span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-light">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="flex items-center space-x-4 border-t border-neutral-100 pt-4">
                <img
                  src={rev.profileImage}
                  alt={rev.name}
                  className="w-10 h-10 object-cover shrink-0 border border-neutral-200"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tight text-neutral-900 leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-neutral-400">
                    {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
