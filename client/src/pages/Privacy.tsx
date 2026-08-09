import { siteConfig } from '../config/site.config.ts';

export default function Privacy() {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 text-left space-y-6">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="text-xs text-slate-400">Last updated: August 9, 2026</p>
      
      <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        <p>
          At {siteConfig.businessName}, we respect your privacy and are committed to protecting the personal information you share with us. This policy describes how we collect, store, and use information submitted via our course enquiry forms.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">1. Information We Collect</h3>
        <p>
          When you fill out our contact or course registration form, we collect your name, phone number, email address, course interest, preferred batch timing, and any optional message you provide.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">2. How We Use Your Information</h3>
        <p>
          We use this data solely to handle your enrollment enquiries, contact you regarding course batches, send course brochures, and coordinate batch schedules. We do not sell or lease your details to third-party marketing companies.
        </p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">3. Security and Storage</h3>
        <p>
          Your submissions are securely saved in our MongoDB server and are handled with strict safety standards. We limit access to this information to relevant counseling and administration staff only.
        </p>
      </div>
    </div>
  );
}
