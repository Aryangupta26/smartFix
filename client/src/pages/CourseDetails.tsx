import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Award, AlertCircle, CheckCircle, 
  ArrowLeft, FileText, Briefcase, GraduationCap 
} from 'lucide-react';
import { siteConfig } from '../config/site.config.ts';
import ContactForm from '../components/ContactForm.tsx';

export default function CourseDetails() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the course based on slug
  const course = siteConfig.courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="pt-24 pb-20 max-w-md mx-auto px-4 text-center space-y-4">
        <AlertCircle size={48} className="mx-auto text-rose-500" />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Course Not Found</h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          The course slug you are trying to access does not exist in our configuration system.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-bold shadow-md"
        >
          <ArrowLeft size={16} />
          <span>Back to All Courses</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-16 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link to="/courses" className="inline-flex items-center space-x-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold mb-2">
            <ArrowLeft size={14} />
            <span>Back to All Courses</span>
          </Link>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-3 py-1 rounded-full">
              {course.level}
            </span>
            <span className="bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
              {course.mode}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {course.name}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-blue-400" />
              <span>Duration: <strong className="text-white">{course.duration}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-blue-400" />
              <span>Certification: <strong className="text-white">ISO Certified Training</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Split */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Detailed Info */}
          <div className="lg:col-span-8 text-left space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Course Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {course.longDescription}
              </p>
            </div>

            {/* What you get/Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Curriculum */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <FileText size={20} className="text-blue-500" />
                <span>Curriculum & Syllabus Details</span>
              </h3>
              
              <div className="space-y-4">
                {course.syllabus.map((module, mIdx) => (
                  <div key={mIdx} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                      Module {mIdx + 1}: {module.title}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      {module.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center space-x-2">
                          <span className="h-1.5 w-1.5 bg-blue-500 rounded-full shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Briefcase size={20} className="text-blue-500" />
                <span>Career Opportunities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.careerOpportunities.map((op, idx) => (
                  <div key={idx} className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-500/10 text-sm font-semibold text-slate-800 dark:text-slate-300">
                    {op}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Lead Enquiry Form Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-blue-900 text-white rounded-2xl p-6 text-left shadow-lg">
              <h4 className="text-lg font-bold flex items-center space-x-2">
                <GraduationCap size={20} />
                <span>Course Details</span>
              </h4>
              <div className="mt-4 space-y-3 text-sm border-t border-blue-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-blue-300">Total Fee:</span>
                  <span className="font-bold">{course.fee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Level:</span>
                  <span className="font-bold">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Syllabus Mode:</span>
                  <span className="font-bold">{course.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Modules count:</span>
                  <span className="font-bold">{course.syllabus.length} Modules</span>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
