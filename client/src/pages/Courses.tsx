import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';

export default function Courses() {
  return (
    <div className="pt-20 pb-20 bg-[#f4f4f4] text-black min-h-screen">
      
      {/* Title (Dark charcoal block) */}
      <section className="bg-[#222222] text-white py-20 text-left border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">Academy Programs</span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Our Professional Courses</h1>
          <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
            Choose from beginner-friendly foundation modules to expert stack-logic and double-decker CPU micro-soldering courses.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.courses.map((course) => (
            <div 
              key={course.slug}
              className="bg-white border border-neutral-200 flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden relative border-b border-neutral-100">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover grayscale-[10%]"
                />
                <span className="absolute top-4 right-4 bg-neutral-900 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">
                  {course.level}
                </span>
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
                  
                  <h3 className="text-xl font-bold uppercase tracking-tight text-neutral-900">
                    {course.name}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed font-light line-clamp-4">
                    {course.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] text-neutral-400 uppercase tracking-wider font-bold">Total Fee</span>
                    <span className="text-lg font-black text-neutral-900">{course.fee}</span>
                  </div>
                  
                  <Link
                    to={`/courses/${course.slug}`}
                    className="px-6 py-2.5 bg-neutral-900 text-white hover:bg-[#e32831] text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Explore</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
