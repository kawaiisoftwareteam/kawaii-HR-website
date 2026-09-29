export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
}

export interface DetailedService {
  id: string;
  number: string;
  badge: string;
  title: string;
  japaneseTitle: string;
  bengaliTitle: string;
  tagline: string;
  quoteSummary: string;
  overview: string;
  bangladeshiContext: string;
  keyBenefits: { title: string; desc: string }[];
  targetRoles: string[];
  idealFor: string[];
  slaMetrics: { label: string; value: string }[];
  image: string;
  tags: string[];
}

export interface ServiceUsageStep {
  step: string;
  title: string;
  bengaliTitle: string;
  japaneseLabel: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface ServiceComparisonItem {
  feature: string;
  permanent: string;
  contract: string;
  outsourcing: string;
  executiveSearch: string;
}

export interface ServiceFaqItem {
  id: string;
  category: "candidate" | "employer" | "general";
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  roles: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  type: "employer" | "candidate";
  avatar: string;
  quote: string;
  highlight: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Japan" | "Bangladesh" | "Corporate" | "People" | "Interviews" | "Careers";
  src: string;
  aspect: "portrait" | "landscape" | "square";
  caption: string;
}

export const COMPANY_INFO = {
  name: "Kawaii Japan Career & HR",
  fullName: "Kawaii Japan Career & HR — Domestic HR Solutions",
  shortName: "Kawaii Japan HR",
  group: "Kawaii Group",
  tagline: "The Right Talent. The Right Role. The Right Fit.",
  subTagline: "Japanese-standard HR precision, built for Bangladesh.",
  establishedYear: "2025",
  address: "House: 11 (2nd Floor), Block: B, Main Road, Banasree, Rampura, Dhaka, Bangladesh",
  chairman: "MD. Dewan Samir",
  managingDirector: "[To be provided]",
  bank: "Southeast Bank PLC",
  email: "corporate@kawaiihr.com",
  candidateEmail: "careers@kawaiihr.com",
  phone: "+880 1711-000000",
  whatsapp: "+880 1711-000000",
  website: "www.kawaiihr.com",
  businessHours: "Sunday – Thursday | 9:00 AM – 6:00 PM BST",
  weekendHours: "Friday & Saturday: Closed",
  sla: "Within 24 business hours",
};

export const KEY_METRICS = [
  {
    value: "2025",
    label: "Established",
    description: "Founded as a premier Japan-Bangladesh HR joint venture",
  },
  {
    value: "60+",
    label: "Company Connections",
    description: "Enterprise partners across Japan & Bangladesh",
  },
  {
    value: "2",
    label: "Countries Connected",
    description: "Direct bilateral bridge between Tokyo & Dhaka",
  },
  {
    value: "∞",
    label: "Career Possibilities",
    description: "Unlocking boundless professional growth",
  },
];

/** PRD — Product vision & core objectives */
export const PRODUCT_VISION = {
  name: "Kawaii Japan Career & HR",
  vision:
    "A professional domestic HR and talent acquisition platform for Bangladesh that connects employers with qualified professionals and skilled workers through Japanese-standard recruitment discipline, structured evaluation, and transparent processes.",
  objectives: [
    {
      id: "obj-1",
      title: "Efficient Hiring",
      description: "Companies discover and hire suitable talent with less friction and clearer pipelines.",
    },
    {
      id: "obj-2",
      title: "Verified Careers",
      description: "Professionals find verified opportunities with employers they can trust.",
    },
    {
      id: "obj-3",
      title: "Professional HR Ops",
      description: "HR teams manage end-to-end recruitment workflows with structure and visibility.",
    },
    {
      id: "obj-4",
      title: "Skilled Employment",
      description: "Skilled workers access structured, transparent employment pathways.",
    },
  ],
};

/** PRD — Three target audiences */
export const TARGET_AUDIENCES = [
  {
    id: "employers",
    number: "01",
    title: "Employers",
    subtitle: "Organizations hiring at scale",
    targets: [
      "MNCs",
      "Local corporations",
      "Manufacturing",
      "Technology",
      "Engineering",
      "Construction",
      "Financial institutions",
      "Growing enterprises",
    ],
    needs: [
      "Find qualified candidates",
      "Reduce hiring time",
      "Improve candidate quality",
      "Manage recruitment efficiently",
    ],
  },
  {
    id: "professionals",
    number: "02",
    title: "Professional Candidates",
    subtitle: "Corporate & technical talent",
    targets: [
      "Engineers",
      "IT professionals",
      "Executives",
      "Managers",
      "Corporate specialists",
    ],
    needs: [
      "Find relevant jobs",
      "Submit professional profiles",
      "Receive career support",
      "Access verified employers",
    ],
  },
  {
    id: "skilled-workforce",
    number: "03",
    title: "Skilled Workforce",
    subtitle: "Trade & operational talent",
    targets: [
      "Technicians",
      "Factory workers",
      "Construction workers",
      "Maintenance professionals",
      "Operators",
    ],
    needs: [
      "Skill-based opportunities",
      "Transparent recruitment",
      "Career growth",
    ],
  },
];

/** PRD — Four product modules */
export const PRODUCT_MODULES = [
  {
    id: "employer-portal",
    number: "01",
    title: "Employer Recruitment Portal",
    tagline: "Corporate hiring command center",
    description:
      "Register your company, publish roles, search candidates, and manage interviews from one structured employer workspace.",
    features: [
      "Company registration",
      "Corporate profile management",
      "Job posting",
      "Candidate search",
      "Recruitment request submission",
      "Interview management",
      "Candidate tracking",
    ],
  },
  {
    id: "candidate-portal",
    number: "02",
    title: "Candidate Career Portal",
    tagline: "Professional career workspace",
    description:
      "Build a verified profile, browse opportunities, track applications, and prepare for interviews with guided career support.",
    features: [
      "Candidate registration",
      "CV upload",
      "Profile creation",
      "Job browsing",
      "Application tracking",
      "Interview scheduling",
      "Career guidance",
    ],
  },
  {
    id: "recruitment-system",
    number: "03",
    title: "Recruitment Management System",
    tagline: "End-to-end hiring operations",
    description:
      "Centralize screening, evaluation, and hiring status so HR teams run predictable pipelines with full visibility.",
    features: [
      "Candidate database",
      "Resume management",
      "Screening workflow",
      "Interview pipeline",
      "Candidate evaluation",
      "Hiring status tracking",
    ],
  },
  {
    id: "skilled-workforce",
    number: "04",
    title: "Skilled Workforce Management",
    tagline: "Trade talent deployment",
    description:
      "Register skilled workers, capture certifications and trade assessments, and deploy workforce with clear skill matching.",
    features: [
      "Worker registration",
      "Skill profile",
      "Certification records",
      "Trade assessment records",
      "Workforce deployment management",
    ],
  },
];

/** PRD — Core business requirements */
export const BUSINESS_REQUIREMENTS = [
  {
    id: "req-1",
    title: "Professional Recruitment Workflow",
    description: "Structured hiring stages from requirement intake through placement follow-up.",
  },
  {
    id: "req-2",
    title: "Candidate Verification",
    description: "Profile, skill, and credential checks before shortlist and interview.",
  },
  {
    id: "req-3",
    title: "Employer Verification",
    description: "Validated organizations so candidates engage only with trusted employers.",
  },
  {
    id: "req-4",
    title: "Search & Filtering",
    description: "Precise discovery of roles and talent by skill, industry, and seniority.",
  },
  {
    id: "req-5",
    title: "Secure Data Management",
    description: "Protected handling of CVs, company data, and hiring communications.",
  },
  {
    id: "req-6",
    title: "Recruitment Analytics",
    description: "Visibility into pipeline health, time-to-hire, and placement outcomes.",
  },
  {
    id: "req-7",
    title: "Communication Management",
    description: "Coordinated updates across employers, candidates, and HR teams.",
  },
];

/** PRD — Quality standards */
export const QUALITY_STANDARDS = [
  { id: "qs-1", title: "Japanese Precision", description: "Discipline in evaluation, documentation, and delivery." },
  { id: "qs-2", title: "Structured Processes", description: "Repeatable workflows that reduce hiring noise." },
  { id: "qs-3", title: "Reliability", description: "Consistent outcomes employers and candidates can count on." },
  { id: "qs-4", title: "Transparency", description: "Clear status, expectations, and communication at every stage." },
  { id: "qs-5", title: "Continuous Improvement", description: "Kaizen-driven refinement of matching and operations." },
];

/** PRD — Success metrics / KPIs */
export const PLATFORM_KPIS = [
  {
    id: "kpi-1",
    label: "Registered Companies",
    description: "Verified employers actively hiring through the platform.",
  },
  {
    id: "kpi-2",
    label: "Registered Candidates",
    description: "Professionals and skilled workers with complete profiles.",
  },
  {
    id: "kpi-3",
    label: "Successful Placements",
    description: "Completed hires from matching through onboarding.",
  },
  {
    id: "kpi-4",
    label: "Average Hiring Time",
    description: "Speed from requirement submission to accepted offer.",
  },
  {
    id: "kpi-5",
    label: "Candidate Satisfaction",
    description: "Feedback on matching quality, support, and transparency.",
  },
  {
    id: "kpi-6",
    label: "Employer Satisfaction",
    description: "Feedback on shortlist quality, process, and outcomes.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "recruitment",
    number: "01",
    title: "Recruitment & Talent Acquisition",
    shortDesc: "Targeted sourcing for specialized technical and corporate roles.",
    fullDesc: "We leverage proprietary Japanese talent-mapping methodology to identify, screen, and place exceptional professionals who align seamlessly with organizational culture and technical expectations.",
    image: "/images/japanese_office_team.jpg",
    tags: ["Headhunting", "Technical Sourcing", "Cultural Fit"],
  },
  {
    id: "staffing",
    number: "02",
    title: "Permanent & Contract Staffing",
    shortDesc: "Flexible staffing models engineered for high-growth enterprises.",
    fullDesc: "Providing versatile workforce options ranging from core permanent hires to project-based contract specialists, allowing organizations to scale agilely without administrative bottlenecks.",
    image: "/images/executive_interview.jpg",
    tags: ["Direct Hire", "Contract Staffing", "Interim Talent"],
  },
  {
    id: "executive-search",
    number: "03",
    title: "Executive Search",
    shortDesc: "Confidential C-suite and leadership acquisition.",
    fullDesc: "Discreet, high-touch executive recruitment connecting top-tier corporate visionaries, managing directors, and engineering heads with pioneering international enterprises.",
    image: "/images/gallery_corporate_consultant.jpg",
    tags: ["C-Suite", "Board Level", "Discreet Search"],
  },
  {
    id: "hr-consulting",
    number: "04",
    title: "HR Consulting & Org Development",
    shortDesc: "Japanese management philosophy tailored to international operations.",
    fullDesc: "Architecting performance evaluation frameworks, compensation benchmarks, and organizational hierarchies based on Japanese precision, discipline, and efficiency.",
    image: "/images/japan_bangladesh_partnership.jpg",
    tags: ["Org Structure", "Performance KPIs", "Kaizen Workflow"],
  },
  {
    id: "it-enabled-hr",
    number: "05",
    title: "IT-Enabled HR Solutions",
    shortDesc: "Modern automated candidate pipelines and intelligent matching.",
    fullDesc: "Implementing modern talent tracking databases and tech-enabled assessment portals to dramatically reduce time-to-hire while elevating candidate qualification precision.",
    image: "/images/it_industry.jpg",
    tags: ["HR Tech", "Automated Pipelines", "Data Insights"],
  },
  {
    id: "legal-compliance",
    number: "06",
    title: "Legal & Compliance Support",
    shortDesc: "Cross-border employment regulations and ethical compliance.",
    fullDesc: "Ensuring 100% adherence to international labor standards, local statutory regulations, expatriate documentation, and rigorous ethical employment protocols.",
    image: "/images/tokyo_skyline.jpg",
    tags: ["Labor Law", "Visa & Expat", "Statutory Audits"],
  },
  {
    id: "sustainable-workforce",
    number: "07",
    title: "Sustainable Workforce Planning",
    shortDesc: "Long-term talent pipelines for future-ready organizations.",
    fullDesc: "Helping enterprises anticipate future skill gaps, succession roadmaps, and continuous upskilling initiatives that nurture long-term organizational stability.",
    image: "/images/philosophy_bg.jpg",
    tags: ["Succession Planning", "Skill Roadmaps", "Talent Retention"],
  },
];

export interface JapanJobCircular {
  id: string;
  circularNo: string;
  title: string;
  company: string;
  location: string;
  vacancies: number;
  education: string;
  experience: string;
  type: string;
  salary: string;
  publishedAt: string;
  deadline: string;
  description: string;
  requirements: string[];
}

/** Japan job circulars — notice-board style listings */
export const JAPAN_JOB_CIRCULARS: JapanJobCircular[] = [
  {
    id: "circ-2026-001",
    circularNo: "KJ/JP/2026/001",
    title: "Full Stack Engineer",
    company: "Tokyo Tech Partners",
    location: "Tokyo, Japan",
    vacancies: 8,
    education: "BSc in CSE / ICT or equivalent",
    experience: "2–5 years software development",
    type: "Full-time · Visa Support",
    salary: "¥4.5M – ¥7.2M / year",
    publishedAt: "2026-03-01",
    deadline: "2026-04-15",
    description:
      "Develop and maintain cloud-native applications for Japanese enterprise clients. React, Node.js, and AWS experience preferred.",
    requirements: ["React / Node.js", "Japanese N3+ preferred", "Passport valid 2+ years"],
  },
  {
    id: "circ-2026-002",
    circularNo: "KJ/JP/2026/002",
    title: "Caregiving Professional (SSW)",
    company: "Osaka Care Network",
    location: "Osaka, Japan",
    vacancies: 25,
    education: "HSC / Diploma + caregiving training",
    experience: "Freshers & experienced welcome",
    type: "Full-time · Specified Skilled Worker",
    salary: "¥2.8M – ¥3.6M / year",
    publishedAt: "2026-03-02",
    deadline: "2026-04-20",
    description:
      "Provide elderly care in licensed Osaka facilities under Japanese caregiving standards. Housing and training support included.",
    requirements: ["SSW / caregiving cert", "Basic Japanese", "Medical fitness"],
  },
  {
    id: "circ-2026-003",
    circularNo: "KJ/JP/2026/003",
    title: "Production Technician",
    company: "Nagoya Precision Works",
    location: "Aichi, Japan",
    vacancies: 40,
    education: "SSC / HSC / Technical Diploma",
    experience: "1+ year factory / technical work",
    type: "Full-time · SSW",
    salary: "¥3.0M – ¥4.2M / year",
    publishedAt: "2026-03-03",
    deadline: "2026-04-10",
    description:
      "Operate precision manufacturing lines with Kaizen safety and quality discipline in Aichi industrial plants.",
    requirements: ["Factory experience", "Safety awareness", "SSW eligible"],
  },
  {
    id: "circ-2026-004",
    circularNo: "KJ/JP/2026/004",
    title: "Bilingual Customer Support",
    company: "Yokohama Shared Services",
    location: "Kanagawa, Japan",
    vacancies: 12,
    education: "Bachelor’s degree any discipline",
    experience: "1–3 years BPO / customer service",
    type: "Full-time · Hybrid",
    salary: "¥3.5M – ¥5.0M / year",
    publishedAt: "2026-03-04",
    deadline: "2026-04-25",
    description:
      "Handle Japanese and English customer operations for multinational clients with high service standards.",
    requirements: ["Japanese N3 / N2", "English communication", "Shift flexibility"],
  },
  {
    id: "circ-2026-005",
    circularNo: "KJ/JP/2026/005",
    title: "Quality Assurance Engineer",
    company: "Kobe Industrial Systems",
    location: "Hyogo, Japan",
    vacancies: 6,
    education: "BSc Engineering / Industrial Eng.",
    experience: "3+ years QA / QC",
    type: "Full-time · Visa Support",
    salary: "¥4.0M – ¥6.0M / year",
    publishedAt: "2026-03-05",
    deadline: "2026-04-18",
    description:
      "Lead QA processes for automotive and electronics suppliers aligned with Japanese quality frameworks.",
    requirements: ["ISO / QA tools", "Automotive preferred", "Japanese N3+"],
  },
  {
    id: "circ-2026-006",
    circularNo: "KJ/JP/2026/006",
    title: "Hotel Operations Staff",
    company: "Kyoto Hospitality Group",
    location: "Kyoto, Japan",
    vacancies: 15,
    education: "HSC / Diploma in Hospitality",
    experience: "Hotel / guest service experience preferred",
    type: "Full-time · Training Provided",
    salary: "¥2.6M – ¥3.4M / year",
    publishedAt: "2026-03-06",
    deadline: "2026-04-22",
    description:
      "Deliver guest experience excellence in premium Kyoto hospitality properties with cultural onboarding.",
    requirements: ["Service mindset", "Basic Japanese", "Flexible roster"],
  },
  {
    id: "circ-2026-007",
    circularNo: "KJ/JP/2026/007",
    title: "CNC Machine Operator",
    company: "Saitama Auto Components",
    location: "Saitama, Japan",
    vacancies: 18,
    education: "Technical Diploma / Trade certificate",
    experience: "2+ years CNC / machining",
    type: "Full-time · SSW",
    salary: "¥3.2M – ¥4.5M / year",
    publishedAt: "2026-03-07",
    deadline: "2026-04-12",
    description:
      "Operate CNC machines for automotive component production under strict Japanese quality control.",
    requirements: ["CNC experience", "Blueprint reading", "SSW eligible"],
  },
  {
    id: "circ-2026-008",
    circularNo: "KJ/JP/2026/008",
    title: "Food Processing Worker",
    company: "Hokkaido Fresh Foods",
    location: "Hokkaido, Japan",
    vacancies: 30,
    education: "SSC / HSC",
    experience: "Freshers acceptable",
    type: "Full-time · SSW",
    salary: "¥2.7M – ¥3.5M / year",
    publishedAt: "2026-03-08",
    deadline: "2026-04-28",
    description:
      "Food packaging and processing roles in Hokkaido facilities with accommodation support.",
    requirements: ["Physical fitness", "Shift work", "Basic hygiene training"],
  },
  {
    id: "circ-2026-009",
    circularNo: "KJ/JP/2026/009",
    title: "Construction Site Worker",
    company: "Fukuoka Build Corp",
    location: "Fukuoka, Japan",
    vacancies: 22,
    education: "SSC / Technical trade",
    experience: "1+ year construction preferred",
    type: "Full-time · SSW",
    salary: "¥3.1M – ¥4.0M / year",
    publishedAt: "2026-03-09",
    deadline: "2026-04-16",
    description:
      "Support civil and building construction sites across Fukuoka with Japanese safety protocols.",
    requirements: ["Site experience", "Safety discipline", "SSW eligible"],
  },
  {
    id: "circ-2026-010",
    circularNo: "KJ/JP/2026/010",
    title: "IT Support Engineer",
    company: "Nagoya Digital Hub",
    location: "Nagoya, Japan",
    vacancies: 10,
    education: "Diploma / BSc in IT",
    experience: "1–4 years IT support",
    type: "Full-time · Visa Support",
    salary: "¥3.8M – ¥5.5M / year",
    publishedAt: "2026-03-10",
    deadline: "2026-04-30",
    description:
      "Provide desktop, network, and user support for Japanese corporate clients in Nagoya.",
    requirements: ["Windows / networking", "Japanese N3+", "Customer service"],
  },
  {
    id: "circ-2026-011",
    circularNo: "KJ/JP/2026/011",
    title: "Nursing Care Assistant",
    company: "Chiba Senior Care",
    location: "Chiba, Japan",
    vacancies: 20,
    education: "Nursing / caregiving certificate",
    experience: "Hospital or care-home experience preferred",
    type: "Full-time · SSW",
    salary: "¥2.9M – ¥3.8M / year",
    publishedAt: "2026-03-11",
    deadline: "2026-05-05",
    description:
      "Assist nurses and caregivers in Chiba senior-care facilities with daily resident support.",
    requirements: ["Care certificate", "Compassion", "Basic Japanese"],
  },
  {
    id: "circ-2026-012",
    circularNo: "KJ/JP/2026/012",
    title: "Warehouse & Logistics Staff",
    company: "Osaka Logistics Link",
    location: "Osaka, Japan",
    vacancies: 16,
    education: "SSC / HSC",
    experience: "Warehouse experience preferred",
    type: "Full-time · SSW",
    salary: "¥2.8M – ¥3.7M / year",
    publishedAt: "2026-03-12",
    deadline: "2026-04-27",
    description:
      "Pick, pack, and dispatch goods in Osaka distribution centers with Japanese inventory systems.",
    requirements: ["Physical fitness", "Shift readiness", "Basic Japanese preferred"],
  },
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "it",
    number: "01",
    title: "Information Technology",
    subtitle: "Software Engineering & Cloud Architecture",
    description: "Connecting full-stack developers, AI researchers, cloud DevOps architects, and QA engineers with Japanese tech giants and emerging SaaS leaders.",
    image: "/images/it_industry.jpg",
    roles: ["Full Stack Engineers", "AI / ML Specialists", "Cloud Architects", "Bilingual Tech Leads"],
  },
  {
    id: "manufacturing",
    number: "02",
    title: "Manufacturing & Robotics",
    subtitle: "Precision Engineering & Industrial Automation",
    description: "Sourcing mechanical engineers, automation specialists, and Kaizen quality inspectors for cutting-edge Japanese manufacturing and industrial complexes.",
    image: "/images/manufacturing_industry.jpg",
    roles: ["Robotics Engineers", "Plant Managers", "Quality Assurance (QA)", "Automation Techs"],
  },
  {
    id: "garments",
    number: "03",
    title: "Garments & Textiles",
    subtitle: "Apparel Sourcing & Supply Chain Operations",
    description: "Bridging Bangladesh's world-leading textile manufacturing capability with international fashion houses and Japanese quality-control benchmarks.",
    image: "/images/garments_industry.jpg",
    roles: ["Merchandising Directors", "Textile Engineers", "Sustainable Production Leads", "Compliance Officers"],
  },
  {
    id: "pharma",
    number: "04",
    title: "Pharmaceuticals",
    subtitle: "Biotechnology & Clinical Research",
    description: "Placing formulation scientists, clinical compliance managers, and quality control specialists in regulated pharmaceutical laboratories.",
    image: "/images/pharma_industry.jpg",
    roles: ["Formulation Scientists", "Clinical Research Associates", "Regulatory Affairs", "QA/QC Managers"],
  },
  {
    id: "healthcare",
    number: "05",
    title: "Healthcare & Caregiving",
    subtitle: "Medical Facilities & Healthcare Tech",
    description: "Providing qualified nursing supervisors, healthcare technicians, and medical translators compliant with international healthcare certifications.",
    image: "/images/healthcare_industry.jpg",
    roles: ["Medical Technicians", "Healthcare Admin", "Biomedical Engineers", "Care Coordinators"],
  },
  {
    id: "banking",
    number: "06",
    title: "Banking & Financial Services",
    subtitle: "Fintech, Investment & Corporate Banking",
    description: "Recruiting financial analysts, compliance controllers, investment strategists, and fintech product managers for premier financial institutions.",
    image: "/images/banking_industry.jpg",
    roles: ["Financial Analysts", "Risk & Compliance", "Fintech Engineers", "Treasury Managers"],
  },
  {
    id: "fmcg",
    number: "07",
    title: "FMCG & Logistics",
    subtitle: "Consumer Goods & Global Distribution",
    description: "Connecting brand managers, supply chain directors, and logistics operations experts with international consumer packaged goods companies.",
    image: "/images/fmcg_industry.jpg",
    roles: ["Supply Chain Directors", "Brand Managers", "Logistics Leads", "Procurement Specialists"],
  },
  {
    id: "bpo",
    number: "08",
    title: "Business Process Outsourcing",
    subtitle: "Multilingual Operations & Customer Excellence",
    description: "Building scalable BPO teams with bilingual Japanese proficiency, data analysts, and 24/7 technical customer support specialists.",
    image: "/images/bpo_industry.jpg",
    roles: ["Bilingual Support Leads", "Operations Managers", "Data Analysts", "Client Success Heads"],
  },
  {
    id: "energy",
    number: "09",
    title: "Oil, Gas, Power & Energy",
    subtitle: "Plant, Project & HSE Talent",
    description: "Recruiting operations, project controls, HSE, and technical specialists for energy operators, EPCs, and utilities in Bangladesh.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    roles: ["Plant Managers", "HSE Specialists", "Project Controls", "Electrical / Mechanical Engineers"],
  },
];

export const EMPLOYER_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Submit Hiring Requirement",
    description: "Share role needs, headcount, timelines, and success criteria through the employer portal.",
    details: "Structured intake captures skills, seniority, culture fit, and commercial constraints in one brief.",
  },
  {
    step: "02",
    title: "Role Analysis",
    description: "Translate the brief into a competency matrix and screening scorecard.",
    details: "We define must-have vs nice-to-have criteria before any candidate outreach begins.",
  },
  {
    step: "03",
    title: "Candidate Sourcing",
    description: "Search verified talent pools across professionals and skilled workforce profiles.",
    details: "Targeted matching from our database plus curated outreach to passive high-fit candidates.",
  },
  {
    step: "04",
    title: "Candidate Screening",
    description: "Filter for experience, credentials, and role compatibility before shortlist.",
    details: "Only candidates who clear profile verification and baseline fit move forward.",
  },
  {
    step: "05",
    title: "Technical Evaluation",
    description: "Assess skills through structured tests, trade assessments, or technical reviews.",
    details: "Evaluation depth matches the role — from corporate specialists to shop-floor operators.",
  },
  {
    step: "06",
    title: "Interview Coordination",
    description: "Schedule interviews, brief both sides, and consolidate feedback in the pipeline.",
    details: "Interview status and notes stay visible to your hiring team throughout the process.",
  },
  {
    step: "07",
    title: "Offer Support",
    description: "Align compensation, terms, and start dates with clear documentation.",
    details: "Transparent offer packaging reduces drop-offs and accelerates acceptance.",
  },
  {
    step: "08",
    title: "Placement Follow-Up",
    description: "Monitor onboarding outcomes and retention after the hire is complete.",
    details: "Post-placement check-ins protect both employer satisfaction and candidate stability.",
  },
];

export const JOB_SEEKER_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Registration",
    description: "Create your candidate account and begin your professional profile.",
    details: "Fast onboarding so you can start browsing verified opportunities immediately.",
  },
  {
    step: "02",
    title: "Profile Verification",
    description: "Upload your CV and complete identity and experience checks.",
    details: "Verified profiles receive priority matching with employers on the platform.",
  },
  {
    step: "03",
    title: "Skill Evaluation",
    description: "Complete role-relevant assessments to surface your true capability.",
    details: "Technical, trade, or behavioral evaluation depending on your career track.",
  },
  {
    step: "04",
    title: "Opportunity Matching",
    description: "Get matched to openings that fit your skills, goals, and availability.",
    details: "Browse jobs and receive curated introductions to verified employers.",
  },
  {
    step: "05",
    title: "Interview",
    description: "Attend coordinated interviews with preparation and scheduling support.",
    details: "Track interview status and next steps from your candidate portal.",
  },
  {
    step: "06",
    title: "Placement",
    description: "Accept the offer and transition into your new role with follow-up support.",
    details: "We stay engaged through onboarding so your placement sticks.",
  },
];

export const JAPANESE_PRINCIPLES = [
  {
    kanji: "倫理",
    romaji: "Rinri",
    title: "Ethics",
    description: "Unwavering commitment to honesty, transparency, and moral responsibility in every placement and consultation.",
  },
  {
    kanji: "規律",
    romaji: "Kiritsu",
    title: "Discipline",
    description: "Rigorous attention to detail, punctual execution, and structured workflows that guarantee consistency.",
  },
  {
    kanji: "効率",
    romaji: "Kōritsu",
    title: "Efficiency",
    description: "Kaizen-inspired streamlined recruitment pipelines that minimize turnaround time without sacrificing accuracy.",
  },
  {
    kanji: "敬意",
    romaji: "Keii",
    title: "Respect",
    description: "Deep, human-centered appreciation for candidates' career aspirations and employers' organizational heritage.",
  },
  {
    kanji: "品質",
    romaji: "Hinshitsu",
    title: "Quality",
    description: "Uncompromising focus on finding the exact right match rather than flooding clients with unqualified resumes.",
  },
  {
    kanji: "透明性",
    romaji: "Tōmeisei",
    title: "Transparency",
    description: "Clear communication, open salary benchmarks, and straightforward hiring processes at every step.",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Kenji Takahashi",
    role: "Senior Director of Global Talent",
    company: "Tokyo Precision Systems Ltd.",
    type: "employer",
    avatar: "/images/client_avatar_1.jpg",
    quote: "Kawaii Japan Career & HR Solutions stands out drastically from generic recruitment firms. Their candidates come with rigorous pre-screening, impeccable work ethics, and immediate readiness for our Tokyo engineering operations.",
    highlight: "Quality Over Quantity In Practice",
  },
  {
    id: "2",
    name: "Farhan Ahmed",
    role: "Cloud Systems Lead",
    company: "Placed at Japanese Cloud Infrastructure Firm",
    type: "candidate",
    avatar: "/images/candidate_avatar_1.jpg",
    quote: "The interview coaching and cultural preparation provided by Kawaii Japan transformed my career trajectory. Within 4 weeks, I secured a role that matched both my technical ambition and compensation goals.",
    highlight: "Life-Changing Career Guidance",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    role: "Managing Director",
    company: "Kawaii Group Partner Enterprise",
    type: "employer",
    avatar: "/images/client_avatar_1.jpg",
    quote: "As a Japan-Bangladesh joint venture, their understanding of both Japanese corporate culture and Bangladeshi engineering talent is unparalleled. They are our trusted long-term strategic HR partner.",
    highlight: "Unrivaled Bilateral Bridge",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    title: "Tokyo Business Hub",
    category: "Japan",
    src: "/images/tokyo_skyline.jpg",
    aspect: "landscape",
    caption: "The epicentre of Japanese innovation and corporate headquarters in Tokyo.",
  },
  {
    id: "2",
    title: "Executive Strategy Board",
    category: "Corporate",
    src: "/images/japanese_office_team.jpg",
    aspect: "landscape",
    caption: "High-level bilateral corporate strategic meeting in Tokyo.",
  },
  {
    id: "3",
    title: "Modern Dhaka Cityscape",
    category: "Bangladesh",
    src: "/images/dhaka_skyline.jpg",
    aspect: "landscape",
    caption: "Dhaka's vibrant commercial skyline, home to world-class technical talent.",
  },
  {
    id: "4",
    title: "Engineering Excellence",
    category: "Careers",
    src: "/images/job_seeker_candidate.jpg",
    aspect: "portrait",
    caption: "Empowering visionary professionals to thrive in global technology environments.",
  },
  {
    id: "5",
    title: "Executive Consultation",
    category: "Interviews",
    src: "/images/executive_interview.jpg",
    aspect: "landscape",
    caption: "In-depth career consultation adhering to Japanese precision and empathy.",
  },
  {
    id: "6",
    title: "Advanced Software Labs",
    category: "Corporate",
    src: "/images/it_industry.jpg",
    aspect: "landscape",
    caption: "State-of-the-art tech workspace driving enterprise digital transformation.",
  },
  {
    id: "7",
    title: "Industrial Robotics",
    category: "Japan",
    src: "/images/manufacturing_industry.jpg",
    aspect: "landscape",
    caption: "Precision manufacturing engineering and robotics workforce placement.",
  },
  {
    id: "8",
    title: "Bilateral Alliance",
    category: "Corporate",
    src: "/images/japan_bangladesh_partnership.jpg",
    aspect: "landscape",
    caption: "Forging long-term corporate partnerships across Japan and Bangladesh.",
  },
  {
    id: "9",
    title: "Strategic HR Advisory",
    category: "People",
    src: "/images/gallery_corporate_consultant.jpg",
    aspect: "portrait",
    caption: "Consultants delivering high-impact workforce frameworks.",
  },
  {
    id: "10",
    title: "Minimalist Workspaces",
    category: "Japan",
    src: "/images/gallery_minimal_interior.jpg",
    aspect: "landscape",
    caption: "Modern Japanese architectural design fostering focus and harmony.",
  },
  {
    id: "11",
    title: "Tokyo Night Metropolis",
    category: "Japan",
    src: "/images/gallery_tokyo_night.jpg",
    aspect: "landscape",
    caption: "The continuous pulse of international enterprise in Tokyo.",
  },
  {
    id: "12",
    title: "Apparel Engineering",
    category: "Bangladesh",
    src: "/images/garments_industry.jpg",
    aspect: "landscape",
    caption: "World-class sustainable garment manufacturing leadership.",
  },
];

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "permanent-staff",
    number: "01",
    badge: "DIRECT HIRE & CAREER PLACEMENT",
    title: "PERMANENT STAFF",
    japaneseTitle: "正社員紹介サービス",
    bengaliTitle: "স্থায়ী জনবল নিয়োগ (Permanent Staffing)",
    tagline: "The Right Professional in the Right Role with Japanese Precision",
    quoteSummary:
      "Our professional HR consultants input the right person on the right job. No matter how specific your job requirements are, we can find suitable staff for you.",
    overview:
      "Permanent staffing is the bedrock of enduring enterprise success. We utilize Japanese competency-mapping methodologies combined with deep Bangladeshi market intelligence to source, evaluate, and place full-time professionals who align seamlessly with your corporate vision, culture, and operational rigor.",
    bangladeshiContext:
      "For Bangladeshi enterprises and Japanese multinational organizations operating in Bangladesh or abroad, our permanent staffing service bridges high-performing tech leads, software engineers, industrial managers, accountants, and executive leaders into stable, high-growth career tracks.",
    keyBenefits: [
      {
        title: "3-Tier Pre-Screening",
        desc: "Every candidate undergoes rigorous technical evaluation, behavioral assessment, and cultural readiness checks.",
      },
      {
        title: "90-Day Replacement Guarantee",
        desc: "Complete peace of mind with our free replacement warranty in the rare event of mismatch or early departure.",
      },
      {
        title: "Fast 48–72h Shortlists",
        desc: "Access our pre-vetted bilateral talent database for rapid turnaround without compromising screening depth.",
      },
      {
        title: "Cultural & Japanese Work Ethic Fit",
        desc: "Candidates evaluated for discipline (Kiritsu), punctuality, accountability, and collaborative team mindset.",
      },
    ],
    targetRoles: [
      "Senior Software Engineers (Full-Stack, Cloud, AI)",
      "Bilingual Project Managers (Japanese / English)",
      "Factory Operations & Plant Managers",
      "Garments & Textile Merchandising Directors",
      "Finance, Audit & Statutory Compliance Leads",
      "Corporate Legal & Regulatory Specialists",
    ],
    idealFor: [
      "Enterprises building core long-term teams in Bangladesh or Japan",
      "Japanese organizations seeking local Bangladeshi leadership and technical specialists",
      "Job seekers seeking stable, rewarding career progression with leading corporations",
    ],
    slaMetrics: [
      { label: "Initial Shortlist Delivery", value: "48–72 Hours" },
      { label: "Placement Retention Rate", value: "98.4%" },
      { label: "Replacement Warranty", value: "90 Days" },
      { label: "Candidate Upfront Fee", value: "৳0 (Free for Job Seekers)" },
    ],
    image: "/images/japanese_office_team.jpg",
    tags: ["Direct Placement", "Long-Term Retention", "Technical Vetting", "Kaizen Precision"],
  },
  {
    id: "contract-staff",
    number: "02",
    badge: "AGILE PROJECT WORKFORCE",
    title: "CONTRACT STAFF",
    japaneseTitle: "契約社員・プロジェクト派遣",
    bengaliTitle: "চুক্তিভিত্তিক কর্মী (Contract Staffing)",
    tagline: "High-Efficiency Scaling for Critical Projects & Scalable Sprints",
    quoteSummary:
      "Employing contract workers can help reduce costs for short-term projects. Additionally, contract workers who have demonstrated high performance during the contract period, can be considered for renewing the contract or hiring them as full-time employees.",
    overview:
      "In dynamic business landscapes, project deadlines demand immediate, specialized capabilities without prolonged hiring overheads. Our Contract Staffing solution supplies experienced professionals on flexible 3, 6, or 12-month engagements, with transparent contract-to-hire (C2H) conversion protocols.",
    bangladeshiContext:
      "Ideal for software development sprints, seasonal manufacturing peaks, ERP migrations, and international development initiatives in Bangladesh. We handle all contract administration, statutory tax, and performance oversight.",
    keyBenefits: [
      {
        title: "Cost & Overhead Optimization",
        desc: "Eliminate long-term fringe liabilities while accessing top-caliber talent tailored exactly to project milestones.",
      },
      {
        title: "Contract-to-Hire (C2H) Pathway",
        desc: "Evaluate candidate performance on live projects before seamlessly transitioning them into permanent roles.",
      },
      {
        title: "Rapid Deployment within 5–7 Days",
        desc: "Pre-screened professionals ready to hit the ground running with immediate domain familiarity.",
      },
      {
        title: "Full Contract & Payroll Management",
        desc: "We manage timesheets, statutory contributions, payroll processing, and cross-border paperwork.",
      },
    ],
    targetRoles: [
      "Contract Full-Stack Developers & QA Engineers",
      "Short-Term ERP & SAP Implementation Specialists",
      "Interim Financial Controllers & Auditors",
      "Seasonal Production & Merchandising Managers",
      "Translators & Cross-Cultural Coordinators",
      "DevOps & Cloud Migration Consultants",
    ],
    idealFor: [
      "Companies with fluctuating workloads or fixed-duration technology projects",
      "Organizations piloting new products or market expansion initiatives in Bangladesh",
      "Specialists and consultants who thrive on high-impact milestone engagements",
    ],
    slaMetrics: [
      { label: "Deployment Speed", value: "5–7 Business Days" },
      { label: "Contract Renewal Rate", value: "88%" },
      { label: "Conversion to Full-Time", value: "Seamless C2H" },
      { label: "Administrative Burden", value: "Zero for Client" },
    ],
    image: "/images/executive_interview.jpg",
    tags: ["Flexible Contracts", "Contract-to-Hire", "Rapid Deployment", "Payroll Managed"],
  },
  {
    id: "outsourcing-temporary",
    number: "03",
    badge: "MANAGED STAFF AUGMENTATION",
    title: "OUTSOURCING & TEMPORARY STAFF",
    japaneseTitle: "業務委託・派遣サービス",
    bengaliTitle: "আউটসোর্সিং ও অস্থায়ী কর্মী (Temporary Staff & Outsourcing)",
    tagline: "Instant Talent Utilization with Zero Administrative Friction",
    quoteSummary:
      "We provide temporary staffing and outsourcing services that allow you to utilize 'human resources with the necessary skills and experience who can work immediately' for 'the required period of time'. We will introduce you to reliable staff.",
    overview:
      "Outsourcing and temporary staffing deliver immediate operational capability on demand. Whether you need an augmented engineering pod, a bilingual Japanese customer support center, or specialized data operations in Dhaka, we assemble, host, and manage fully productive teams.",
    bangladeshiContext:
      "Leveraging Bangladesh's demographic dividend of world-class, cost-competitive technical and multilingual professionals, our outsourcing hub gives Japanese and international firms 24/7 productivity with Japanese quality assurance benchmarks.",
    keyBenefits: [
      {
        title: "Immediate Workforce Readiness",
        desc: "Deploy pre-trained specialists with the required technical and linguistic credentials from Day 1.",
      },
      {
        title: "Employer of Record (EOR) Compliance",
        desc: "We act as the legal employer, managing local labor laws, benefits, insurance, and tax governance.",
      },
      {
        title: "Elastic Scalability",
        desc: "Scale your dedicated offshore team up or down with simple monthly resource adjustments.",
      },
      {
        title: "Dedicated Kaizen Quality Control",
        desc: "Embedded team leads ensure delivery matches Japanese standards of precision, punctuality, and security.",
      },
    ],
    targetRoles: [
      "Dedicated Offshore Software Development Teams",
      "Bilingual Japanese/English Customer Support (BPO)",
      "Data Annotation, Processing & AI Labeling Teams",
      "Digital Marketing & Creative Production Pods",
      "Back-Office HR & Accounting Operations",
      "IT Helpdesk & Remote Infrastructure Monitoring",
    ],
    idealFor: [
      "Global & Japanese businesses seeking high-quality offshore talent hubs in Dhaka",
      "Companies requiring temporary workforce bursts without adding headcounts",
      "Enterprises looking for reliable, managed BPO and IT staff augmentation",
    ],
    slaMetrics: [
      { label: "Onboarding Timeline", value: "3–10 Days" },
      { label: "Bilingual Language Standards", value: "JLPT N3–N1 / Fluent EN" },
      { label: "SLA Uptime / Delivery", value: "99.8%" },
      { label: "Compliance Score", value: "100% Statutory Compliant" },
    ],
    image: "/images/bpo_industry.jpg",
    tags: ["Staff Augmentation", "BPO & Offshore Hub", "EOR & Payroll", "Immediate Deployment"],
  },
  {
    id: "executive-search",
    number: "04",
    badge: "CONFIDENTIAL LEADERSHIP HEADHUNTING",
    title: "EXECUTIVE SEARCH",
    japaneseTitle: "エグゼクティブ・サーチ",
    bengaliTitle: "নির্বাহী ও লিডারশিপ সার্চ (Executive Search)",
    tagline: "Securing Visionary Leaders for Strategic Transformation",
    quoteSummary:
      "Discreet, high-touch executive recruitment connecting top-tier corporate visionaries, managing directors, and engineering heads with pioneering international enterprises.",
    overview:
      "The right leadership shapes the destiny of an organization. Our Executive Search practice conducts confidential, discreet headhunting campaigns to secure board-level directors, country managers, CTOs, and division heads across Bangladesh, Japan, and Southeast Asia.",
    bangladeshiContext:
      "We connect Japanese multinationals establishing their footprint in Bangladesh with seasoned Bangladeshi executive leaders, and place visionary Bangladeshi corporate titans into international regional leadership roles.",
    keyBenefits: [
      {
        title: "Confidential Market Mapping",
        desc: "Comprehensive discreet talent mapping that approaches top passive executives without public exposure.",
      },
      {
        title: "Leadership Competency Benchmarking",
        desc: "360-degree leadership evaluation encompassing strategic vision, financial acumen, and cross-border leadership.",
      },
      {
        title: "Bespoke Compensation Structuring",
        desc: "Advising on competitive equity, retention bonuses, and cross-border expat compensation models.",
      },
      {
        title: "Executive Transition Mentorship",
        desc: "Facilitating strategic 100-day onboarding plans to ensure rapid organizational alignment.",
      },
    ],
    targetRoles: [
      "Managing Directors & Country Representatives",
      "Chief Technology Officers (CTO) & Chief AI Officers",
      "Vice Presidents of Engineering & Manufacturing",
      "Chief Financial Officers (CFO) & Audit Committee Heads",
      "Heads of Global Supply Chain & Merchandising",
      "Executive Directors & Board Members",
    ],
    idealFor: [
      "Japanese conglomerates establishing Bangladesh subsidiaries or joint ventures",
      "Fast-scaling tech scaleups seeking experienced C-suite operators",
      "Enterprises executing confidential leadership succession transitions",
    ],
    slaMetrics: [
      { label: "Executive Mapping Period", value: "10–14 Days" },
      { label: "Candidate Confidentiality", value: "100% Guaranteed" },
      { label: "Placement Success Rate", value: "96.5%" },
      { label: "Leadership Guarantee", value: "6 Months" },
    ],
    image: "/images/gallery_corporate_consultant.jpg",
    tags: ["C-Suite", "Board Level", "Discreet Headhunting", "Bilateral Leadership"],
  },
  {
    id: "japan-global-career",
    number: "05",
    badge: "CROSS-BORDER CAREER CORRIDOR",
    title: "JAPAN & GLOBAL CAREER PLACEMENT",
    japaneseTitle: "日本・海外就職支援",
    bengaliTitle: "জাপান ও আন্তর্জাতিক ক্যারিয়ার (Japan Career Gateway)",
    tagline: "Enlighten Your Global Career Horizons with Japanese Industry Leaders",
    quoteSummary:
      "Direct pathway for qualified Bangladeshi software engineers, technical professionals, and graduates to secure legitimate, high-paying career positions with leading corporations in Japan.",
    overview:
      "Japan's technology and industrial sectors are experiencing unprecedented demand for top-tier foreign engineering and specialized talent. Kawaii Japan HR provides a trusted, direct bridge for Bangladeshi talents to secure Engineer / Specialist in Humanities visas, SSW, and corporate positions in Tokyo, Osaka, Nagoya, and Fukuoka.",
    bangladeshiContext:
      "We prepare Bangladeshi university graduates, software engineers, and specialists with Japanese business etiquette (Omotenashi & Business Keigo), visa sponsorship documentation, and direct interview scheduling with Tokyo corporate hiring managers.",
    keyBenefits: [
      {
        title: "Direct Verified Corporate Openings",
        desc: "Opportunities with verified Japanese enterprises offering full work visa sponsorships and competitive Tokyo salary packages.",
      },
      {
        title: "Japanese Corporate Interview Coaching",
        desc: "Intensive training in Japanese interview etiquette, CV format (Rirekisho / Shokumu Keirekisho), and technical mock sessions.",
      },
      {
        title: "End-to-End Visa & COE Support",
        desc: "Guidance on Certificate of Eligibility (COE) processing, Embassy paperwork, and pre-departure relocation orientation.",
      },
      {
        title: "Zero Exploitation Guarantee",
        desc: "Strictly ethical recruitment adhering to Japanese Immigration and Ministry of Health, Labour and Welfare guidelines.",
      },
    ],
    targetRoles: [
      "Software Engineers (Java, Python, React, Go, Cloud)",
      "Mechanical & Automation CAD Engineers",
      "Embedded Systems & Robotics Specialists",
      "Bilingual IT Communicators & Translators (JLPT N2/N1)",
      "Architecture & Civil Engineering Designers",
      "Specialized Care & Healthcare Technicians",
    ],
    idealFor: [
      "Bangladeshi software engineers and engineering graduates aiming for Tokyo careers",
      "Professionals with Japanese language abilities seeking international corporate growth",
      "Japanese employers seeking highly skilled, disciplined Bangladeshi engineers",
    ],
    slaMetrics: [
      { label: "Visa Approval Track Record", value: "99.2%" },
      { label: "Average Tokyo Salary Package", value: "¥4.5M – ¥9M / Year" },
      { label: "Relocation Guidance", value: "Comprehensive" },
      { label: "Post-Arrival Support", value: "Tokyo Network" },
    ],
    image: "/images/tokyo_skyline.jpg",
    tags: ["Tokyo Jobs", "Engineer Visa", "JLPT Preparation", "Relocation Guidance"],
  },
  {
    id: "hr-consulting",
    number: "06",
    badge: "MANAGEMENT CONSULTING & KAIZEN",
    title: "HR CONSULTING & ORG DEVELOPMENT",
    japaneseTitle: "人事コンサルティング・組織開発",
    bengaliTitle: "এইচআর কনসাল্টিং ও প্রাতিষ্ঠানিক উন্নয়ন (HR Consulting)",
    tagline: "Japanese Management Philosophy Tailored to Modern Enterprises",
    quoteSummary:
      "Architecting performance evaluation frameworks, compensation benchmarks, and organizational hierarchies based on Japanese precision, discipline, and efficiency.",
    overview:
      "Sustainable enterprise growth requires robust internal HR systems. We assist organizations in designing objective KPI appraisal matrices, compliant employee handbooks, 5S workplace productivity cultures, and market-calibrated salary benchmarking.",
    bangladeshiContext:
      "We help Bangladeshi businesses adopt world-renowned Japanese management principles (Kaizen, 5S, Ringi decision-making) while ensuring complete statutory compliance with Bangladesh Labour Act 2006 and international audit standards.",
    keyBenefits: [
      {
        title: "Kaizen Productivity & 5S Frameworks",
        desc: "Instill continuous improvement methodologies that eliminate workplace waste and elevate employee accountability.",
      },
      {
        title: "Salary Benchmarking & Grading Systems",
        desc: "Empirical salary data across IT, manufacturing, and corporate sectors to retain key high-performers.",
      },
      {
        title: "Performance Appraisal Matrices (KPI / OKR)",
        desc: "Transparent, merit-based performance appraisal architectures that drive team alignment and measurable results.",
      },
      {
        title: "Statutory & Labor Law Compliance Audits",
        desc: "Comprehensive auditing to safeguard your business against legal liabilities, audit penalties, and workplace disputes.",
      },
    ],
    targetRoles: [
      "Organizational Design & Hierarchy Re-structuring",
      "Employee Performance Management Systems (KPI / OKR)",
      "Total Rewards & Salary Band Architecture",
      "Corporate Culture & Japanese Etiquette Workshops",
      "HR Policy Handbooks & Labor Law Compliance Manuals",
      "Succession Planning & Leadership Pipelines",
    ],
    idealFor: [
      "Companies upgrading from unstructured operations to institutional corporate governance",
      "Joint-venture organizations harmonizing foreign and Bangladeshi work cultures",
      "Fast-growing startups establishing robust HR foundations",
    ],
    slaMetrics: [
      { label: "Framework Delivery Cycle", value: "2–4 Weeks" },
      { label: "Productivity Gain Average", value: "+28%" },
      { label: "Compliance Safety Rating", value: "100% Guaranteed" },
      { label: "Customization Level", value: "Fully Tailored" },
    ],
    image: "/images/japan_bangladesh_partnership.jpg",
    tags: ["Kaizen Systems", "KPI Architecture", "Salary Benchmarks", "Labor Compliance"],
  },
];

export const SERVICE_FLOW_JOB_SEEKERS: ServiceUsageStep[] = [
  {
    step: "01",
    title: "Register & Profile Submission",
    bengaliTitle: "ওয়েবসাইটে রেজিস্ট্রেশন ও সিভি জমা",
    japaneseLabel: "ウェブ登録",
    description:
      "Please register and submit your CV through our website. Our career portal is open for newly graduated individuals, experienced professionals, and top-level executives.",
    deliverables: [
      "Online CV & profile registration",
      "Skill & language proficiency capture",
      "Target career preferences submission",
    ],
    timeline: "Instant (< 3 Mins)",
    iconName: "UserCheck",
  },
  {
    step: "02",
    title: "Career Consultation & Counseling",
    bengaliTitle: "ক্যারিয়ার কাউন্সেলিং ও পরামর্শ",
    japaneseLabel: "キャリア面談",
    description:
      "A dedicated career advisor will be in charge of your career change consultations. We analyze your technical strengths, language abilities, career aspirations, and market readiness.",
    deliverables: [
      "1-on-1 advisor consultation",
      "Skill gap & market valuation analysis",
      "CV optimization for Japanese/MNC standards",
    ],
    timeline: "Within 24–48 Hours",
    iconName: "Compass",
  },
  {
    step: "03",
    title: "Providing Job & Project Opportunities",
    bengaliTitle: "উপযুক্ত প্রজেক্ট ও জব ইনফরমেশন প্রদান",
    japaneseLabel: "求人・案件のご紹介",
    description:
      "We will introduce you to verified job openings and high-impact projects that strictly match your educational background, technical experience, and salary expectations.",
    deliverables: [
      "Curated job matches from 60+ partner firms",
      "Detailed JD, compensation & company insights",
      "Transparent role expectations briefing",
    ],
    timeline: "Continuous Matching",
    iconName: "Briefcase",
  },
  {
    step: "04",
    title: "Direct Recommendation to Companies",
    bengaliTitle: "কোম্পানিতে সরাসরি সুপারিশ",
    japaneseLabel: "企業への推薦",
    description:
      "We will recommend your verified candidate profile directly to the key hiring decision-makers of your desired companies, emphasizing your unique strengths.",
    deliverables: [
      "Direct endorsement to hiring managers",
      "Priority shortlist consideration",
      "Advocacy for candidate value proposition",
    ],
    timeline: "Within 2 Business Days",
    iconName: "Send",
  },
  {
    step: "05",
    title: "Interviewing, Offering & Joining",
    bengaliTitle: "ইন্টারভিউ প্রস্তুতি, অফার লেটার ও যোগদান",
    japaneseLabel: "面接・内定・入社支援",
    description:
      "We will support you from Japanese corporate interview coaching until contract negotiation, offer letter acceptance, and joining the company.",
    deliverables: [
      "Mock interview & Japanese etiquette coaching",
      "Salary negotiation advocacy",
      "Offer review & smooth onboarding transition",
    ],
    timeline: "1–3 Weeks",
    iconName: "Award",
  },
  {
    step: "06",
    title: "Support After Joining the Company",
    bengaliTitle: "যোগদানের পরও সার্বিক সহায়তা",
    japaneseLabel: "入社後フォローアップ",
    description:
      "We provide continuous support and check-ins even after joining the company to ensure your career thrives and you maintain long-term workplace harmony.",
    deliverables: [
      "30, 60 & 90-day retention check-ins",
      "Workplace cultural adaptation mentoring",
      "Continuous career growth advisory",
    ],
    timeline: "Ongoing 90+ Days",
    iconName: "LifeBuoy",
  },
];

export const SERVICE_FLOW_EMPLOYERS: ServiceUsageStep[] = [
  {
    step: "01",
    title: "Requirement Briefing & Role Matrix",
    bengaliTitle: "নিয়োগের চাহিদা ও লক্ষ্য নির্ধারণ",
    japaneseLabel: "採用要件のヒアリング",
    description:
      "We conduct a structured briefing to understand your technical requirements, team culture, project milestones, and exact competency expectations.",
    deliverables: [
      "Precise role competency matrix",
      "Compensation benchmarking consultation",
      "Targeted hiring SLA confirmation",
    ],
    timeline: "Day 1",
    iconName: "ClipboardList",
  },
  {
    step: "02",
    title: "Talent Mapping & Deep Sourcing",
    bengaliTitle: "ট্যালেন্ট ম্যাপিং ও সোর্সিং",
    japaneseLabel: "人材マッピング・母集団形成",
    description:
      "Using Japanese precision talent mapping, we search verified active candidate networks and discreetly engage passive top performers.",
    deliverables: [
      "Cross-channel talent search (BD & Japan)",
      "Direct outreach to high-caliber passive talent",
      "Initial pipeline generation",
    ],
    timeline: "Days 2–3",
    iconName: "Users",
  },
  {
    step: "03",
    title: "3-Tier Screening & Skill Verification",
    bengaliTitle: "৩-ধাপের মূল্যায়ন ও স্ক্রিনিং",
    japaneseLabel: "厳格なスキル審査・選考",
    description:
      "Every candidate undergoes hands-on technical testing, linguistic proficiency checks, and behavioral work-ethic evaluations.",
    deliverables: [
      "Technical code/domain assessment",
      "Language & communication evaluation",
      "Background & reference checks",
    ],
    timeline: "Days 3–4",
    iconName: "ShieldCheck",
  },
  {
    step: "04",
    title: "Shortlist Presentation & Dossiers",
    bengaliTitle: "নির্বাচিত প্রার্থীদের প্রোফাইল উপস্থাপন",
    japaneseLabel: "推薦人材のご提案",
    description:
      "We present a curated shortlist of top 3–5 high-compatibility candidates complete with structured evaluation dossiers and interview recommendations.",
    deliverables: [
      "Curated candidate comparative dossier",
      "Evaluation scores & assessment summary",
      "Pre-aligned compensation expectations",
    ],
    timeline: "Days 4–5",
    iconName: "FileSpreadsheet",
  },
  {
    step: "05",
    title: "Interview Coordination & Offer Management",
    bengaliTitle: "ইন্টারভিউ সমন্বয় ও চুক্তি সম্পাদন",
    japaneseLabel: "面接調整・内定手続き",
    description:
      "We coordinate all interview rounds, assist with cross-cultural briefings, and facilitate transparent offer negotiations to prevent dropouts.",
    deliverables: [
      "Seamless interview scheduling",
      "Post-interview feedback synthesis",
      "Offer letter & contract finalization",
    ],
    timeline: "Days 6–10",
    iconName: "Handshake",
  },
  {
    step: "06",
    title: "Onboarding & 90-Day Guarantee",
    bengaliTitle: "অনবোর্ডিং ও ৯০ দিনের রিপ্লেসমেন্ট গ্যারান্টি",
    japaneseLabel: "入社支援・定着保証",
    description:
      "We ensure smooth Day 1 integration with ongoing check-ins and back every permanent placement with our 90-day free replacement guarantee.",
    deliverables: [
      "Day 1 readiness & documentation",
      "30-60-90 day retention monitoring",
      "90-day replacement warranty protection",
    ],
    timeline: "Day 10 – 90 Days",
    iconName: "CheckCircle",
  },
];

export const SERVICES_COMPARISON_TABLE: ServiceComparisonItem[] = [
  {
    feature: "Primary Objective",
    permanent: "Core long-term workforce retention & organizational growth",
    contract: "Short to mid-term project milestones & agile sprints",
    outsourcing: "Immediate managed teams & operational staff augmentation",
    executiveSearch: "Confidential C-suite, Board & strategic leadership",
  },
  {
    feature: "Engagement Duration",
    permanent: "Indefinite / Permanent Full-Time",
    contract: "3 to 12 Months (Renewable or C2H)",
    outsourcing: "Flexible monthly retainer / Project duration",
    executiveSearch: "Permanent Strategic Leadership",
  },
  {
    feature: "Time to Shortlist",
    permanent: "48 – 72 Hours",
    contract: "24 – 48 Hours",
    outsourcing: "3 – 5 Business Days",
    executiveSearch: "10 – 14 Business Days (Deep Market Mapping)",
  },
  {
    feature: "Legal Employer",
    permanent: "Client Enterprise",
    contract: "Client or Kawaii HR (EOR Option)",
    outsourcing: "Kawaii HR (Managed EOR & Payroll)",
    executiveSearch: "Client Enterprise",
  },
  {
    feature: "Replacement Warranty",
    permanent: "90 Days Free Replacement",
    contract: "Immediate Replacement (< 48h)",
    outsourcing: "Continuous Resource Guarantee",
    executiveSearch: "180 Days (6 Months) Guarantee",
  },
  {
    feature: "Fee / Billing Model",
    permanent: "Success-based placement fee (Pay on hire)",
    contract: "Monthly billing / Fixed milestone rate",
    outsourcing: "Monthly team retainer / Seat pricing",
    executiveSearch: "Retained / Structured executive search fee",
  },
  {
    feature: "Fee for Job Seekers",
    permanent: "100% Free (৳0 for candidates)",
    contract: "100% Free (৳0 for candidates)",
    outsourcing: "100% Free (৳0 for candidates)",
    executiveSearch: "100% Free (৳0 for candidates)",
  },
];

export const SERVICES_FAQS: ServiceFaqItem[] = [
  {
    id: "faq-1",
    category: "employer",
    question: "How quickly can Kawaii Japan Career & HR source candidates?",
    answer:
      "Our sourcing timeline depends on the position, required qualifications, talent availability, workforce volume, and urgency of the assignment. For clearly defined requirements, we can begin targeted sourcing promptly after completing the initial role assessment and recruitment briefing.",
  },
  {
    id: "faq-2",
    category: "employer",
    question: "Can you recruit multiple employees for a large project or facility?",
    answer:
      "Yes. Our workforce solutions can support bulk and project-based recruitment for suitable engineering, technical, skilled, manufacturing, construction, logistics, and operational requirements. We begin by assessing the required headcount, skill profile, deployment timeline, work location, and employment model.",
  },
  {
    id: "faq-3",
    category: "employer",
    question: "Do you provide executive search services?",
    answer:
      "Yes. Our Executive Search service is designed for organizations seeking senior managers, business leaders, technical heads, functional specialists, and other high-impact professionals. Our approach emphasizes targeted sourcing, professional assessment, confidentiality, and organizational fit.",
  },
  {
    id: "faq-4",
    category: "general",
    question: "Can you recruit engineers and IT professionals?",
    answer:
      "Yes. We support recruitment across fields including: IT & Technology, Mechanical Engineering, Electrical Engineering, Technical Management, and other specialist engineering disciplines.",
  },
  {
    id: "faq-5",
    category: "candidate",
    question: "Do job seekers pay any fees for placement in Bangladesh?",
    answer:
      "Candidates should always review the specific terms associated with a recruitment opportunity before proceeding. Kawaii Japan Career & HR is committed to transparent recruitment communication. Any applicable fee, charge, or candidate-related cost must be clearly communicated in advance rather than presented unexpectedly. For a specific opportunity, please contact our Candidate Support team for clarification.",
  },
  {
    id: "faq-6",
    category: "candidate",
    question: "Can I submit my CV even if there is no suitable vacancy?",
    answer:
      "Yes. If you are interested in being considered for future opportunities, you may submit your professional profile through the appropriate Candidate Portal or contact our Candidate Support team. Keeping your professional information current can help our recruitment specialists identify relevant opportunities as they arise.",
  },
  {
    id: "faq-7",
    category: "candidate",
    question: "How do I check the status of my application?",
    answer:
      "For an application already submitted to Kawaii Japan Career & HR, contact our Candidate Support & Placement Helpdesk with the relevant application information.",
  },
  {
    id: "faq-8",
    category: "employer",
    question: "Can companies contact Kawaii HR for urgent hiring requirements?",
    answer:
      "Yes. If you have an urgent recruitment requirement, clearly indicate your required hiring date, number of vacancies, position titles, and critical qualifications in the employer inquiry form. This allows our corporate team to understand the urgency and determine an appropriate sourcing approach.",
  },
];

/** Master Document: Why Partner With Kawaii HR (3 Pillars) */
export const WHY_PARTNER_PILLARS = [
  {
    number: "01",
    title: "Rigorous Talent Vetting",
    subtitle: "Quality before quantity.",
    description:
      "We go beyond CV screening to evaluate candidates against the capabilities, experience, technical requirements, and organizational expectations of each position.",
    points: [
      "Structured candidate screening",
      "Experience and qualification verification",
      "Technical and functional assessment",
      "Communication and professional capability evaluation",
      "Role-specific candidate profiling",
      "Shortlisting based on employer-defined requirements",
    ],
    result: "A stronger, more relevant talent pipeline with less recruitment risk.",
  },
  {
    number: "02",
    title: "Rapid Time-to-Hire",
    subtitle: "Reduce recruitment delays without compromising quality.",
    description:
      "An unfilled position can slow projects, increase workload, and affect business performance. Our structured sourcing methodology helps employers reach qualified candidates efficiently.",
    points: [
      "Clearly defined role profiling",
      "Targeted candidate sourcing",
      "Active professional talent networks",
      "Multi-level screening",
      "Coordinated interview scheduling",
      "Streamlined candidate communication",
    ],
    result: "Faster access to qualified professionals and a more efficient recruitment funnel.",
  },
  {
    number: "03",
    title: "Long-Term Employee Retention",
    subtitle: "Recruit for the future—not just for today.",
    description:
      "A successful placement depends on more than technical qualifications. We consider career aspirations, organizational culture, responsibilities, growth opportunities, and long-term compatibility.",
    points: [
      "Better candidate-role alignment",
      "Stronger employer-employee fit",
      "Improved onboarding",
      "Post-placement follow-up",
      "Employee engagement and development",
      "Sustainable talent relationships",
    ],
    result: "Hiring decisions designed to support lasting organizational performance.",
  },
];

/** Master Document: Our Domestic HR Services (5 Services) */
export const DOMESTIC_HR_SERVICES = [
  {
    id: "executive-search",
    number: "01",
    title: "Executive Search & C-Suite Headhunting",
    tagline: "Leadership talent for organizations that demand more.",
    description:
      "We identify and approach experienced professionals for critical leadership and senior management positions. We focus on identifying leaders who contribute not only through experience, but through strategic thinking, organizational leadership, and measurable business impact.",
    roles: [
      "C-Suite recruitment",
      "Directors and General Managers",
      "Department Heads",
      "Senior Managers",
      "Functional leadership",
      "Confidential executive appointments",
      "Specialized headhunting mandates",
    ],
    href: "/for-businesses#white-collar",
  },
  {
    id: "it-software",
    number: "02",
    title: "IT & Software Engineering Recruitment",
    tagline: "Build the technology teams behind your growth.",
    description:
      "Access qualified IT and software professionals across Bangladesh's competitive technology ecosystem. Whether scaling a technology team or hiring for a mission-critical position, we help you reach relevant technical talent efficiently.",
    roles: [
      "Software Engineers",
      "Full-Stack Developers",
      "Backend & Frontend Developers",
      "DevOps & Cloud Engineers",
      "QA & Automation Engineers",
      "Data & AI Professionals",
      "IT Infrastructure Specialists",
      "Technical Leads & Engineering Managers",
    ],
    href: "/for-businesses",
  },
  {
    id: "engineering",
    number: "03",
    title: "Civil, Mechanical & Structural Engineering Placement",
    tagline: "Technical expertise for Bangladesh's infrastructure and industrial growth.",
    description:
      "Our engineering recruitment services connect organizations with skilled professionals across construction, infrastructure, manufacturing, and industrial sectors. Candidates are assessed against technical and practical requirements to support safer, more effective hiring.",
    roles: [
      "Civil Engineers",
      "Structural Engineers",
      "Mechanical Engineers",
      "Project Engineers",
      "Site Engineers",
      "Design Engineers",
      "MEP Professionals",
      "Project Managers & Technical Supervisors",
    ],
    href: "/for-businesses",
  },
  {
    id: "contract-staffing",
    number: "04",
    title: "Temporary / Contract Staffing & Payroll Management",
    tagline: "Flexible workforce solutions for changing business demands.",
    description:
      "When workforce requirements fluctuate, organizations need flexibility without sacrificing operational control. We help maintain workforce flexibility while keeping recruitment and employment processes structured and compliant.",
    roles: [
      "Temporary staffing",
      "Contract-based professionals",
      "Project-based recruitment",
      "Seasonal workforce requirements",
      "Workforce expansion",
      "Payroll administration",
      "Employee documentation and coordination",
    ],
    href: "/for-businesses#blue-collar",
  },
  {
    id: "corporate-training",
    number: "05",
    title: "Corporate Training & Organizational Development",
    tagline: "Turn talent into organizational capability.",
    description:
      "Recruiting great people is only part of the equation. Organizations also need to continuously develop their workforce. We help organizations build cultures where employees continuously learn, contribute, and grow.",
    roles: [
      "Leadership development",
      "Professional skills development",
      "Technical upskilling",
      "Communication and workplace effectiveness",
      "Team development",
      "Management capability building",
      "Employee development programs",
    ],
    href: "/about",
  },
];

/** Master Document: 4-Step Quality Assurance Pipeline */
export const QA_RECRUITMENT_PIPELINE = [
  {
    step: "01",
    title: "Corporate Needs Assessment & Role Profiling",
    subtitle: "Understand the business before searching for the person.",
    description:
      "We begin by understanding your organization, hiring objective, team structure, role responsibilities, technical requirements, seniority level, and desired candidate profile.",
    deliverable: "A clearly defined recruitment brief and role profile.",
  },
  {
    step: "02",
    title: "Targeted Sourcing & Multi-Level Technical Screening",
    subtitle: "Find the right people, not simply available people.",
    description:
      "Our recruitment team uses targeted sourcing methodologies to identify relevant professionals and applies structured screening based on the requirements of each position. Evaluation includes experience screening, technical assessment, functional competency, communication, career motivation, and qualification verification.",
    deliverable: "A qualified and relevant shortlist.",
  },
  {
    step: "03",
    title: "Candidate-Client Matching & Interview Facilitation",
    subtitle: "Create meaningful connections between employers and professionals.",
    description:
      "We assess candidate suitability against the role and facilitate the interview process between both parties. Our team supports candidate presentation, interview coordination, employer feedback collection, candidate communication, and offer-stage coordination.",
    deliverable: "An informed hiring decision with greater confidence.",
  },
  {
    step: "04",
    title: "Onboarding Support & Post-Placement Evaluation",
    subtitle: "Our relationship does not end when the offer is signed.",
    description:
      "We support the transition from recruitment to employment and maintain communication during the early stages of placement, including joining coordination, onboarding support, employer-candidate communication, early-stage follow-up, and post-placement evaluation.",
    deliverable: "A smoother transition and stronger foundation for long-term employment.",
  },
];

/** Master Document: Business Solutions Page Data */
export const BUSINESS_SOLUTIONS = {
  header: {
    title: "Precision HR Solutions for Businesses Building Bangladesh's Future",
    subtitle: "Transforming Bangladeshi Workforce Capabilities with Precision HR Solutions.",
    description:
      "The right workforce is not simply a recruitment outcome—it is a business advantage. Kawaii Japan Career & HR helps organizations across Bangladesh build stronger, more capable, and more productive teams through structured recruitment, specialized talent sourcing, and workforce solutions.",
  },
  strategicApproach: {
    title: "Why Leading Businesses Need a More Strategic Approach to Hiring",
    description:
      "In a competitive talent market, receiving a high volume of CVs does not guarantee a successful hire. The challenge for today's organizations is to identify professionals who possess the right combination of technical capability, relevant industry experience, leadership competence, role-specific qualifications, organizational compatibility, and long-term potential.",
    focusPillars: [
      "Reduce time spent reviewing unsuitable applications",
      "Access targeted professional and technical talent",
      "Improve candidate-role alignment",
      "Streamline recruitment coordination",
      "Support workforce expansion and project staffing",
      "Maintain structured hiring and employment processes",
      "Build teams with long-term organizational potential",
    ],
  },
  industrySpecializations: [
    {
      id: "it-software",
      title: "Information Technology & Software Engineering",
      desc: "Bangladesh's technology sector demands professionals with specialized technical capabilities. We support recruitment across software engineering, DevOps/cloud, QA, data/AI, infrastructure, cybersecurity, and engineering leadership.",
      roles: ["Software Engineering", "Full-Stack Development", "QA & Automation", "DevOps & Cloud", "Data & AI", "Cybersecurity", "Technical Leadership"],
    },
    {
      id: "civil-infra",
      title: "Civil Engineering, Construction & Infrastructure",
      desc: "Infrastructure, construction, and engineering organizations require professionals who can perform effectively in demanding technical and operational environments.",
      roles: ["Civil & Structural Engineers", "Mechanical and MEP Engineers", "Planning and Estimation", "Site Engineers", "Project Directors"],
    },
    {
      id: "garments-manufacturing",
      title: "Garments, Textiles & Industrial Manufacturing",
      desc: "Bangladesh's industrial economy depends on capable professionals who manage production, quality, operations, compliance, engineering, and workforce performance.",
      roles: ["Production & Operations", "Industrial Engineering", "QA/QC", "Merchandising", "Supply Chain", "Factory Management", "Compliance"],
    },
    {
      id: "corporate-finance",
      title: "Corporate Operations, Finance & Administration",
      desc: "Strong organizations depend on the professionals behind their financial discipline, operational efficiency, governance, and day-to-day execution.",
      roles: ["Finance & Accounting", "Corporate Operations", "Administration", "Procurement", "Sales & BD", "Legal & Compliance", "Executive Leadership"],
    },
    {
      id: "energy",
      title: "Oil, Gas, Power & Energy",
      desc: "Energy operators, EPCs, and utilities need plant, project, HSE, and technical specialists who can work to site discipline — not just a CV match.",
      roles: ["Plant Operations", "HSE", "Project Controls", "Electrical / Mechanical", "Commissioning"],
    },
  ],
  specializedSolutions: [
    {
      title: "Permanent Direct-Hire Recruitment",
      subtitle: "Hire professionals who can create lasting business value.",
      desc: "Our direct-hire recruitment process identifies professionals whose experience, skills, career objectives, and professional capabilities align with the specific requirements of your organization.",
    },
    {
      title: "Bulk Technical & Engineering Staffing",
      subtitle: "Scale your workforce without sacrificing structure or quality.",
      desc: "Business expansion, new projects, and industrial development create urgent demand for multiple qualified professionals. We support multi-position campaigns with structured coordination.",
    },
    {
      title: "Customized Employee Skill Assessments",
      subtitle: "Make hiring decisions based on relevant capability—not assumptions.",
      desc: "We support customized assessment frameworks including technical competency, functional skill evaluation, workplace capability, and recruitment scorecards.",
    },
  ],
  partnerStandards: [
    { title: "Rapid Account Manager Assignment", desc: "Dedicated point of contact to coordinate your recruitment process." },
    { title: "Confidential Talent Sourcing", desc: "Appropriate professional discretion for sensitive leadership or strategic roles." },
    { title: "Requirement-Based Strategy", desc: "Sourcing and screening tailored to your specific workforce timeline." },
    { title: "Clear Communication", desc: "Transparent coordination between stakeholders throughout the hiring journey." },
    { title: "Quality-Focused Matching", desc: "Candidates presented based on capability and alignment, not just availability." },
  ],
};

/** Master Document: Job Seekers Page Data */
export const JOB_SEEKER_DATA = {
  header: {
    title: "Empowering Your Career Journey Across Bangladeshi Leading Enterprises and MNC's",
    subtitle: "Your next career opportunity should match your skills, ambitions, and potential.",
    description:
      "Kawaii Japan Career & HR connects talented Bangladeshi professionals with career opportunities at reputable companies across Bangladesh. Whether you are an experienced engineer, technology professional, project specialist, executive, or emerging professional, we help you navigate the local job market with greater clarity and confidence. No guesswork. No misleading opportunities.",
  },
  domains: [
    {
      title: "Software Development & IT",
      desc: "Build your career with technology-driven organizations seeking professionals in Software Development, Full-Stack, QA, DevOps, Data & AI, and Engineering Management.",
    },
    {
      title: "Structural & Civil Engineering",
      desc: "Contribute to Bangladesh's infrastructure and construction growth through Structural Design, Civil, Site, MEP, Planning, Estimation, and Technical Supervision.",
    },
    {
      title: "Project Management",
      desc: "Lead projects from planning to execution: Construction Project Management, Operations Management, Program Coordination, and Project Controls.",
    },
    {
      title: "Corporate Operations",
      desc: "Build your career across Finance & Accounting, Sales & Business Development, Compliance, Management, and Executive leadership roles.",
    },
  ],
  advantages: [
    {
      number: "01",
      title: "Verified Employer Network",
      subtitle: "Apply with greater confidence.",
      desc: "We focus on opportunities from reputable organizations and established employers, reducing exposure to misleading vacancies. We want you to find opportunities worth pursuing.",
    },
    {
      number: "02",
      title: "Career Mentorship & CV Enhancement Guidance",
      subtitle: "Present your experience with confidence.",
      desc: "Support includes CV structure guidance, experience positioning, skills presentation, career direction discussions, interview preparation, and professional profile improvement.",
    },
    {
      number: "03",
      title: "Transparent Interview & Salary Negotiation Process",
      subtitle: "Know what to expect as you move forward.",
      desc: "Clear communication regarding job responsibilities, employer expectations, interview stages, employment conditions, and structured salary discussion support.",
    },
  ],
  journey: [
    { step: "01", title: "Registration", desc: "Create your candidate profile with experience, qualifications, skills, and career preferences." },
    { step: "02", title: "Screening", desc: "Our recruitment team reviews your profile and connects to understand your objectives and preferred roles." },
    { step: "03", title: "Interview", desc: "Meet the employer through coordinated initial, functional, and management interview stages with pre-briefings." },
    { step: "04", title: "Placement", desc: "Support the transition toward joining, contract finalization, and long-term onboarding success." },
  ],
};

/** Master Document: White-Collar Page Data */
export const WHITE_COLLAR_DATA = {
  header: {
    title: "White-Collar & Professional Recruitment",
    subtitle: "Connecting Exceptional Professionals with High-Impact Career Opportunities",
    description:
      "Executive search, specialist recruitment, and rigorous professional vetting for Bangladesh's most ambitious organizations. Kawaii Japan Career & HR helps MNCs, local conglomerates, technology companies, engineering consultancies, and financial institutions identify and secure high-caliber professionals across Bangladesh.",
  },
  practiceAreas: [
    {
      title: "IT, Software Engineering & Technology Leadership",
      desc: "From DevOps & cloud engineering and technical architecture to VP Engineering and CTO appointments, we identify talent capable of supporting digital transformation.",
    },
    {
      title: "Civil, Structural & Mechanical Engineering",
      desc: "Engineering-intensive organizations require professionals whose qualifications translate into real project capability: MEP Engineers, Planning Specialists, and Project Directors.",
    },
    {
      title: "Corporate Finance, Accounting & Legal",
      desc: "Financial control, governance, compliance, and commercial decision-making: Finance Managers, Controllers, Internal Audit, Legal Counsel, and CFO appointments.",
    },
    {
      title: "Operations, Supply Chain & Project Management",
      desc: "Turning strategy into efficient execution: Operations Managers, Supply Chain & Procurement Specialists, Program Managers, and Operations Directors.",
    },
  ],
  searchProcess: [
    { step: "01", title: "Strategic Role Profiling & Cultural Fit Mapping", desc: "We define success before we begin the search, creating a precise search mandate rather than a generic job description." },
    { step: "02", title: "Confidential Headhunting & Multi-Tier Screening", desc: "Targeted, discreet sourcing methodologies to identify professionals who may not be actively visible through public ads." },
    { step: "03", title: "Technical Competency & Behavioral Evaluation", desc: "Evaluating problem-solving, leadership behavior, communication, stakeholder management, and role-specific competencies." },
    { step: "04", title: "Placement, Offer Negotiation & Senior Onboarding", desc: "Facilitating compensation discussions, offer formalization, and senior-level onboarding support for lasting retention." },
  ],
  valueProps: [
    { title: "Precision Matching for Critical Roles", desc: "Structured search reducing recruitment friction and accelerating time-to-fill." },
    { title: "Strict Confidentiality for Executive Transitions", desc: "Professional discretion for sensitive replacements, new business entries, and strategic leadership changes." },
    { title: "Replacement Guarantee & Long-Term Retention Tracking", desc: "Contractually backed replacement warranty and post-placement engagement to ensure cultural and functional alignment." },
  ],
};

/** Master Document: Blue-Collar Page Data */
export const BLUE_COLLAR_DATA = {
  header: {
    title: "Blue-Collar, Technical & Skilled Workforce Solutions",
    subtitle: "Verified Skilled Talent. Disciplined Workforce. Rapid Deployment.",
    description:
      "Build your workforce with skilled professionals who are practically assessed, safety-oriented, and ready for the demands of real-world operations. We provide workforce solutions for construction, manufacturing plants, industrial facilities, logistics hubs, and facility management across Bangladesh.",
  },
  disciplines: [
    {
      title: "Construction & Structural Site Mechanics",
      desc: "Skilled hands for demanding construction environments.",
      roles: ["Welders", "Fabricators", "Fitters", "Electricians", "Masons", "Masonry Leads", "Steel Structure Workers", "Site Technicians", "Mechanical Technicians", "Skilled Site Supervisors"],
    },
    {
      title: "Industrial Manufacturing & Assembly Line Technicians",
      desc: "Reliable technical workers for production environments.",
      roles: ["Assembly Technicians", "Production Technicians", "Machine Operators", "Line Operators", "QC Workers", "Industrial Technicians", "Fabrication Workers", "Production Supervisors"],
    },
    {
      title: "Plant Maintenance & Heavy Machinery Operators",
      desc: "Keep critical equipment operating with capable technical talent.",
      roles: ["Maintenance Technicians", "Mechanical Maintenance", "Electrical Technicians", "Heavy Equipment Operators", "Plant Technicians", "Utility Technicians", "Maintenance Supervisors"],
    },
    {
      title: "Logistics, Warehousing & Fleet Operations",
      desc: "People who keep goods and operations moving.",
      roles: ["Warehouse Workers", "Warehouse Supervisors", "Loading & Unloading Teams", "Inventory Support", "Material Handling", "Fleet Operations", "Drivers and Operators", "Logistics Coordinators"],
    },
  ],
  qaPillars: [
    { title: "Practical Trade Testing", desc: "Hands-on assessment examining tool familiarity, work-method knowledge, execution accuracy, and safety compliance before placement." },
    { title: "Safety & 5S Discipline", desc: "Orientation incorporating Japanese 5S (Sort, Set in Order, Shine, Standardize, Sustain), PPE usage, and site discipline." },
    { title: "Certification & Background Verification", desc: "Verification of trade certificates, work history, identity, and documented credentials." },
  ],
  models: [
    { title: "Mass Permanent Placement", desc: "Coordinated recruitment for factories, new facilities, construction projects, and large-scale industrial expansions." },
    { title: "Contractual & Project-Based Staffing", desc: "Flexible staffing for shutdowns, short-term assignments, seasonal production peaks, and specialized projects." },
    { title: "Managed Payroll & Site Compliance", desc: "Full attendance tracking, documentation, payroll administration, and site workforce coordination." },
  ],
};

/** Master Document: About Page Data */
export const ABOUT_PAGE_DATA = {
  header: {
    badge: "Sister Concern of Kawaii Group (Japan)",
    title: "Redefining Talent Acquisition with Japanese Standard",
    subtitle: "A Proud Sister Concern of Kawaii Group • Bridging Tokyo Precision with Bangladesh's Premier Human Capital",
    description:
      "Kawaii Japan Career & HR Solutions is a specialized human resources, executive search, and workforce solutions company operating as a proud sister concern of the esteemed Kawaii Group (Japan). Backed by the global infrastructure, corporate discipline, and international heritage of Kawaii Group, we bring Tokyo's renowned recruitment precision, structural discipline, and Kaizen-driven quality benchmarks to empower organizations and ambitious professionals across Bangladesh and beyond.",
  },
  groupHeritage: {
    title: "The Kawaii Group Corporate Ecosystem",
    subtitle: "Global Vision. Japanese Precision. Sister Concern Strength.",
    description:
      "As an integral sister concern of the multinational Kawaii Group headquartered in Tokyo, Japan, Kawaii Japan Career & HR Solutions benefits from decades of combined expertise across cross-border enterprise solutions, software architecture, bilateral trade, and human resource engineering. Our shared lineage ensures that every recruitment mandate is executed with unyielding ethical rigor, structured governance, and long-term organizational value.",
    pillars: [
      {
        title: "Kawaii Group Backing",
        desc: "Direct corporate synergy, strategic governance, and resource backing from the parent Kawaii Group network in Japan.",
        tag: "Corporate Heritage",
      },
      {
        title: "Bilateral Tokyo × Dhaka Desk",
        desc: "Seamless cross-border executive alignment connecting Japanese multinational standards with Bangladesh's top 1% talent pool.",
        tag: "Global Synergy",
      },
      {
        title: "Kaizen & Quality Standards",
        desc: "Proprietary candidate assessment frameworks built upon Japanese industrial discipline, technical vetting, and cultural harmony.",
        tag: "Operational Rigor",
      },
    ],
  },
  story: {
    title: "Born From a Sister Concern Vision for Absolute HR Reliability",
    desc: "Established as a dedicated sister concern of Kawaii Group, Kawaii Japan Career & HR Solutions was founded to solve a critical market gap: the disconnect between rapid industrial expansion and high-fidelity talent matching. By infusing authentic Japanese management ethics into Bangladesh's talent landscape, we provide corporations with reliable, verified, and culturally aligned leaders.",
  },
  japaneseStandards: [
    { title: "Methodical Screening", desc: "Multi-tiered evaluation assessing verified technical proficiency, leadership maturity, and cultural alignment under Japanese evaluation standards." },
    { title: "Structured Operations (Hou-Ren-Sou)", desc: "Transparent reporting, communication discipline, and documented milestone tracking throughout every stage of recruitment." },
    { title: "Integrity & Professionalism", desc: "Uncompromising data confidentiality, zero candidate exploitation, and strict compliance with international corporate ethics." },
    { title: "Quality Control (Kaizen)", desc: "Systematic refinement of our talent sourcing pipelines, feedback integration, and continuous placement performance optimization." },
    { title: "Long-Term Retention Focus", desc: "Prioritizing organizational retention and mutual growth rather than short-term transactional placements." },
  ],
  visionMission: {
    vision: "To stand as Bangladesh's foremost benchmark for Japanese-standard HR precision, executive search, and bilateral talent bridges as the flagship HR sister concern of Kawaii Group.",
    mission: "To empower visionary enterprises with vetted, high-performing human capital and enable career-defining pathways for professionals through ethical, transparent, and structured Japanese methodologies.",
  },
  kawaiiAdvantages: [
    { number: "01", title: "Kawaii Group Sister Concern", desc: "Backed by the institutional strength, global standards, and bilateral trust of Kawaii Group, Japan." },
    { number: "02", title: "Methodical Talent Vetting", desc: "Rigorous 360-degree competency evaluation covering technical depth, problem-solving, and professional integrity." },
    { number: "03", title: "Industry-Specific Expertise", desc: "Deep domain competence across IT/Software, Garments/Textiles, Engineering, Pharma, and Corporate Leadership." },
    { number: "04", title: "Post-Placement Harmony", desc: "Active onboarding assistance, 90-day retention guarantee, and long-term talent performance alignment." },
  ],
};


