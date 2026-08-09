export interface CourseModule {
  title: string;
  items: string[];
}

export interface Course {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  mode: string; // "Hands-on Classroom" | "Online Live" | etc.
  level: string; // "Basic" | "Advanced" | "Chip-Level" | etc.
  fee: string; // E.g., "$299" or "Rs. 15,000"
  image: string;
  features: string[];
  syllabus: CourseModule[];
  careerOpportunities: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  source: string; // "Google" | "Facebook" | etc.
  date: string;
  profileImage: string;
  reviewUrl: string;
}

export interface Trainer {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  logo: string;
  theme: {
    primaryColor: string; // e.g. "indigo"
    primaryHex: string;
    secondaryHex: string;
    accentHex: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string; // standard country code + digits, e.g. "919876543210"
    whatsappMessage: string;
    email: string;
    address: string;
    openingHours: string;
    googleMapsLink: string;
    googleMapsEmbed: string; // iframe src
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
  stats: {
    studentsTrained: number;
    yearsExperience: number;
    successRate: string;
    practicalHours: string;
    coursesCount: number;
  };
  benefits: {
    title: string;
    description: string;
    iconName: string;
  }[];
  gallery: {
    category: string;
    title: string;
    url: string;
    type: 'image' | 'video';
  }[];
  courses: Course[];
  trainers: Trainer[];
  testimonials: Review[];
  faqs: FaqItem[];
}

export const siteConfig: SiteConfig = {
  businessName: "SmartFix Mobile Repairing Academy",
  tagline: "Master Mobile Repairing. Launch a Successful Career.",
  logo: "⚡ SmartFix",
  theme: {
    primaryColor: "blue",
    primaryHex: "#2563eb",
    secondaryHex: "#1e3a8a",
    accentHex: "#f59e0b",
  },
  contact: {
    phone: "+919876543210",
    phoneFormatted: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappMessage: "Hi, I'd like to know more about the mobile repairing courses at SmartFix Academy.",
    email: "admissions@smartfixacademy.com",
    address: "3rd Floor, Tech Plaza, Near Central Metro Station, Hyderabad, India - 500001",
    openingHours: "Mon - Sat: 9:00 AM - 7:00 PM, Sunday: Closed",
    googleMapsLink: "https://maps.google.com/?q=SmartFix+Mobile+Repairing+Academy",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.241517441549!2d78.4724963!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a2f69%3A0x7d6f51cb32f1430!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  socialLinks: {
    facebook: "https://facebook.com/smartfixacademy",
    instagram: "https://instagram.com/smartfixacademy",
    youtube: "https://youtube.com/smartfixacademy",
    linkedin: "https://linkedin.com/company/smartfixacademy"
  },
  stats: {
    studentsTrained: 2500,
    yearsExperience: 10,
    successRate: "95%",
    practicalHours: "200+",
    coursesCount: 4,
  },
  benefits: [
    {
      title: "100% Practical Training",
      description: "Learn by doing. Perform live motherboard debugging, chip replacements, and troubleshooting on real mobile devices.",
      iconName: "Wrench"
    },
    {
      title: "Experienced Instructors",
      description: "Get trained by chip-level engineers with over a decade of experience in industrial hardware and software troubleshooting.",
      iconName: "UserCheck"
    },
    {
      title: "Full Equipment Access",
      description: "Work with modern SMD rework stations, digital oscilloscopes, DC power supplies, and thermal diagnostic cameras.",
      iconName: "Cpu"
    },
    {
      title: "ISO Certification",
      description: "Receive a globally recognized, industry-grade training completion certificate to jumpstart your career or business.",
      iconName: "Award"
    },
    {
      title: "Business Setup Support",
      description: "Learn how to open a shop, source components at wholesale rates, market your brand, and manage customer interactions.",
      iconName: "Store"
    },
    {
      title: "Lifetime Technical Support",
      description: "Access our exclusive graduate community forum for troubleshooting complex client repairs even years after you graduate.",
      iconName: "ShieldAlert"
    }
  ],
  gallery: [
    {
      category: "Lab & Training",
      title: "Advanced Chip-Level Soldering Lab",
      url: "https://images.unsplash.com/photo-1597484211625-27a13bd7392e?w=800&auto=format&fit=crop&q=60",
      type: "image"
    },
    {
      category: "Practical Practice",
      title: "Students Repairing Live Motherboards",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60",
      type: "image"
    },
    {
      category: "Tools & Tech",
      title: "Microscope Motherboard Diagnostic Station",
      url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&auto=format&fit=crop&q=60",
      type: "image"
    },
    {
      category: "Certification",
      title: "Recent Graduation Batch Celebration",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
      type: "image"
    }
  ],
  courses: [
    {
      slug: "basic-mobile-repairing",
      name: "Basic Mobile Repairing Course",
      shortDescription: "Ideal for beginners. Learn display swaps, battery assembly, charging jacks, speaker, camera, and basic hardware troubleshooting.",
      longDescription: "This foundation course is designed for individuals with absolutely no background in electronics. You will learn the basic disassembly and assembly procedures, replacing standard modular components (displays, batteries, charging ports, cameras, speaker assemblies), and understanding mobile architecture.",
      duration: "4 Weeks (40 Hours)",
      mode: "Hands-on Classroom",
      level: "Beginner",
      fee: "Rs. 8,500",
      image: "/assets/course_microsoldering_1786216727937.png",
      features: [
        "No prior electronics knowledge required",
        "Free tool kit included",
        "Disassembly of top 10 Android/iOS models",
        "Troubleshooting sound, charging & network jacks"
      ],
      syllabus: [
        {
          title: "Introduction to Mobile Electronics",
          items: ["Understanding AC/DC current", "Identifying modular parts", "Safety protocols in handling Lithium batteries"]
        },
        {
          title: "Disassembly & Assembly",
          items: ["Proper use of heat pads and opening tools", "Screw categorization", "Handling fragile ribbon cables"]
        },
        {
          title: "Common Modular Replacements",
          items: ["Fitted Screen/Folder replacement", "Battery module diagnostics", "Microphone/Speaker flex swaps"]
        }
      ],
      careerOpportunities: [
        "Retail Store Repair Assistant",
        "Independent Freelance Screen Technician",
        "Spare Parts Quality Inspector"
      ]
    },
    {
      slug: "advanced-chip-level-repairing",
      name: "Master Chip-Level & IC Repairing",
      shortDescription: "Advanced course focusing on micro-soldering, IC reballing, jumper tracing, motherboard diagnostic, and dead-phone repair.",
      longDescription: "Take your skills to the professional tier. This advanced program covers schematic reading, tracing short circuits, using multi-meters/oscilloscopes, micro-soldering under digital microscopes, reballing power ICs, and repairing motherboard level damages.",
      duration: "8 Weeks (100 Hours)",
      mode: "Intense Lab Practical",
      level: "Advanced (Chip-Level)",
      fee: "Rs. 18,000",
      image: "/assets/hero_lab_modern_1786216707543.png",
      features: [
        "Micro-soldering under digital microscope",
        "IC Reballing & CPU replacement training",
        "Schematic diagram reading (ZXW, Borneo)",
        "Short-circuit tracing with thermal cameras"
      ],
      syllabus: [
        {
          title: "Micro-Soldering Foundations",
          items: ["Proper temperature and airflow settings", "Using fluxes and low-temp solder wires", "Cleaning motherboard pads"]
        },
        {
          title: "IC Reballing & Swaps",
          items: ["Removing underfilled & non-underfilled ICs", "Reballing stencils layout", "Soldering BGA ICs accurately"]
        },
        {
          title: "Motherboard Diagnostics",
          items: ["DC Power Supply current reading analysis", "Tracing short circuits using Rosin method", "Micro-jumper tracks repair"]
        }
      ],
      careerOpportunities: [
        "Senior Motherboard Chip-Level Engineer",
        "Authorized Service Center Chief Technician",
        "Independent Mobile Repair Business Owner"
      ]
    },
    {
      slug: "iphone-repairing-specialist",
      name: "iPhone & iOS Specialist Masterclass",
      shortDescription: "Learn diagnostic and repair of Apple iPhones: Face ID repair, dot projector, battery health reprogramming, and screen serialization.",
      longDescription: "A specialized masterclass dedicated exclusively to Apple iPhones and iOS hardware. Learn to handle screen serialization warnings, battery health programming, Face ID camera alignment, rear glass laser removals, and advanced Apple board troubleshooting.",
      duration: "6 Weeks (60 Hours)",
      mode: "Intense Practical Lab",
      level: "Specialist",
      fee: "Rs. 22,000",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60",
      features: [
        "Apple-specific tools and diagnostic systems",
        "Serialization programmer (JC V1S Pro) usage",
        "Face ID dot projector micro-soldering",
        "Rear glass back replacement techniques"
      ],
      syllabus: [
        {
          title: "iOS Diagnostics Architecture",
          items: ["Panic logs analysis and crash dumps", "3uTools diagnostic reads", "Identifying battery and screen components mismatch"]
        },
        {
          title: "Serialisation & Programming",
          items: ["TrueTone transfer on display replacements", "Battery BMS flex swapping and data reset", "Face ID logic matching"]
        },
        {
          title: "Advanced iPhone Board Layouts",
          items: ["Double-stacked logicboard separation", "Thermal diagnostic on A-series CPU layers", "NAND upgrade procedures"]
        }
      ],
      careerOpportunities: [
        "Apple Specialist Repair Tech",
        "Premium Third-Party Service Provider Store Manager",
        "Refurbished Apple Device Importer & Tester"
      ]
    }
  ],
  trainers: [
    {
      name: "Amit Sharma",
      role: "Lead Hardware Instructor",
      experience: "12+ Years",
      specialization: "Micro-soldering & BGA IC Reballing",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60"
    },
    {
      name: "Rohan Verma",
      role: "Software & Diagnostics Specialist",
      experience: "8+ Years",
      specialization: "OS Flashing, Network Deserialization & JTAG",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60"
    }
  ],
  testimonials: [
    {
      name: "Suresh Kumar",
      rating: 5,
      text: "SmartFix Academy completely changed my career. I did the Chip-level course and now run my own repair shop earning 50k+ a month. The lifetime technical support community is super helpful when I get complicated motherboard tasks.",
      source: "Google",
      date: "2 months ago",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
      reviewUrl: "#"
    },
    {
      name: "Vikram Reddy",
      rating: 5,
      text: "The instructors are very knowledgeable. They explain concepts with real logicboards under microscopes. Handing the SMD machine is now extremely easy for me. Highly recommended!",
      source: "Google",
      date: "1 month ago",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
      reviewUrl: "#"
    },
    {
      name: "Neha Patel",
      rating: 5,
      text: "Best training institute. As a woman breaking into mobile repairing, I felt very supported and safe. The course was structured and we practiced on live devices instead of just dummy units.",
      source: "Google",
      date: "3 weeks ago",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      reviewUrl: "#"
    }
  ],
  faqs: [
    {
      question: "Do I need an engineering background to join?",
      answer: "No, absolutely not. Our courses start from ground zero. Anyone who can read, write, and has basic manual dexterity can learn mobile repairing."
    },
    {
      question: "Are there tools provided during training?",
      answer: "Yes, every student gets an individual desk equipped with an SMD rework station, soldering iron, DC power supply, multi-meter, and digital microscope during practical classes."
    },
    {
      question: "Do you offer job placement support?",
      answer: "Yes, we have tie-ups with multiple authorized service centers and retail repair chains. We assist with resume creation, interview preparation, and directly send graduates for job interviews."
    },
    {
      question: "Can I join weekend classes?",
      answer: "Yes, we run special fast-track weekend batches (Saturdays & Sundays) for working professionals and university students."
    }
  ]
};

/**
 * Helper to generate the direct WhatsApp URL from config
 */
export function getWhatsAppUrl(courseName?: string): string {
  const baseText = courseName 
    ? `Hi, I am interested in enrolling for the "${courseName}" at ${siteConfig.businessName}. Please send details.`
    : siteConfig.contact.whatsappMessage;
  
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(baseText)}`;
}
