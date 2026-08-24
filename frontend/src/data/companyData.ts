export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
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
  name: "Kawaii Japan Career & HR Solutions BD",
  shortName: "Kawaii Japan HR",
  group: "Kawaii Group",
  tagline: "Bridging cultures. Connecting talent. Building organizations.",
  establishedYear: "2025",
  address: "House: 11 (2nd Floor), Block: B, Main Road, Banasree, Rampura, Dhaka, Bangladesh",
  chairman: "MD. Dewan Samir",
  managingDirector: "[To be provided]",
  bank: "Southeast Bank PLC",
  email: "[To be provided]",
  phone: "[To be provided]",
  website: "[To be provided]",
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
];

export const EMPLOYER_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Deep dive into your organization's culture, technical requirements, and strategic growth trajectory.",
    details: "We conduct structured stakeholder sessions to formulate precise competency matrices beyond standard job specs.",
  },
  {
    step: "02",
    title: "Source",
    description: "Targeted outreach across verified bilateral databases and proprietary talent networks.",
    details: "Utilizing Japanese precision talent mapping to identify both active candidates and passive top-tier industry performers.",
  },
  {
    step: "03",
    title: "Select",
    description: "Rigorous technical evaluations, linguistic proficiency checks, and behavioral assessments.",
    details: "Every shortlisted candidate undergoes 3-stage pre-screening to ensure minimum 95% placement compatibility.",
  },
  {
    step: "04",
    title: "Coordinate",
    description: "Seamless interview scheduling, briefing sessions, and feedback synthesis.",
    details: "We manage time zones, cross-cultural interview briefings, and salary expectation alignments in advance.",
  },
  {
    step: "05",
    title: "Onboard",
    description: "Contract finalization, compliance verification, and pre-departure / day-one readiness.",
    details: "Comprehensive support covering statutory documentation, cultural orientation, and workplace readiness.",
  },
  {
    step: "06",
    title: "Follow Up",
    description: "Continuous 30-60-90 day performance and satisfaction monitoring.",
    details: "Proactive check-ins with both employer and candidate to ensure long-term retention and organizational harmony.",
  },
];

export const JOB_SEEKER_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand Your Goals",
    description: "In-depth career consultation to understand your aspirations, technical strengths, and preferred work culture.",
    details: "We map your personal ambitions against current market opportunities in Japan and Bangladesh.",
  },
  {
    step: "02",
    title: "Improve Your CV",
    description: "Transform your resume into an executive, Japanese-standard professional profile.",
    details: "We optimize formatting, highlight key quantifiable accomplishments, and align your CV with international ATS standards.",
  },
  {
    step: "03",
    title: "Match Opportunities",
    description: "Direct introduction to verified employers with verified roles matching your skill caliber.",
    details: "Access exclusive, unadvertised enterprise openings across our network of 60+ partner companies.",
  },
  {
    step: "04",
    title: "Prepare For Interviews",
    description: "Mock interviews, Japanese corporate etiquette training, and technical coaching.",
    details: "Learn how to effectively communicate your value proposition, manage behavioral questions, and showcase cultural agility.",
  },
  {
    step: "05",
    title: "Get Hired",
    description: "Fair compensation negotiation, offer review, and smooth contract transition.",
    details: "We advocate for your professional worth and ensure transparent contract terms with zero hidden surprises.",
  },
  {
    step: "06",
    title: "Continuous Support",
    description: "Ongoing career mentorship and alumni network access throughout your tenure.",
    details: "We remain your dedicated career partner as you advance toward senior and executive leadership roles.",
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
