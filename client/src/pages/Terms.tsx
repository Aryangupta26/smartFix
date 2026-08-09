import { siteConfig } from '../config/site.config.ts';

export default function Terms() {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 text-left space-y-6">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms & Conditions</h1>
      <p className="text-xs text-slate-400">Last updated: August 9, 2026</p>
      
      <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        <p>
          Welcome to {siteConfig.businessName}. By accessing or using our website, submitting enquiry forms, or enrolling in our courses, you agree to comply with the terms and rules described below.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">1. Admission and Fees</h3>
        <p>
          Course seats are allocated based on batch availability and receipt of the registration fee. The fee packages listed on the website represent the standard syllabus package and are subject to validation during direct counseling sessions.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">2. Lab Guidelines and Equipment</h3>
        <p>
          Students are expected to handle laboratory equipment (SMD stations, oscilloscopes, testing motherboards) with appropriate care as directed by the lead instructor. Any willful damage to lab resources may result in academic review.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">3. White-Label Product Usage Note</h3>
        <p>
          This website is a white-label web product template designed for mobile repair training institutes. Re-use of the layout, structure, or assets by unauthorized parties is prohibited.
        </p>
      </div>
    </div>
  );
}
