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
    category: "general",
    question: "How does Kawaii Japan Career & HR Solutions BD differ from other agencies?",
    answer:
      "As a proud sister concern of Kawaii Group operating across Dhaka and Tokyo, we combine Japanese precision, discipline (Kiritsu), and Kaizen workflows with deep understanding of Bangladesh's premier talent market. We do not flood clients with unqualified resumes; instead, we deliver 3-5 meticulously pre-screened, culturally aligned, and technically verified candidates backed by a 90-day replacement warranty.",
  },
  {
    id: "faq-2",
    category: "candidate",
    question: "Do job seekers need to pay any fees for job placement or consultations?",
    answer:
      "No! Our recruitment, career consultation, CV improvement, and job placement services are 100% FREE for all job seekers and candidates. We strictly adhere to ethical, fair recruitment standards and never charge job seekers any registration or placement fees.",
  },
  {
    id: "faq-3",
    category: "candidate",
    question: "Can fresh graduates or candidates with no prior experience apply?",
    answer:
      "Absolutely! We gather all types of job positions from leading Japanese, international, and Bangladeshi companies—ranging from newly graduated and entry-level positions to mid-level specialists and top-level executive management. Our career advisors provide specialized coaching to help fresh graduates launch their dream careers.",
  },
  {
    id: "faq-4",
    category: "candidate",
    question: "What opportunities exist for working directly in Japan?",
    answer:
      "We facilitate direct placements for qualified Bangladeshi software developers, engineers, and specialists into Japanese companies in Tokyo, Osaka, and other major hubs. We guide eligible candidates through Japanese language preparation (JLPT), technical interviews, and Certificate of Eligibility (COE) work visa sponsorship (Engineer/Specialist in Humanities).",
  },
  {
    id: "faq-5",
    category: "employer",
    question: "How fast can we receive candidate shortlists for urgent hiring?",
    answer:
      "For standard technical and corporate roles, we deliver our first curated shortlist of pre-screened candidates within 48 to 72 hours. For emergency contract staffing or staff augmentation, deployment can be achieved in 3 to 7 business days.",
  },
  {
    id: "faq-6",
    category: "employer",
    question: "What guarantee do you provide for permanent staffing placements?",
    answer:
      "We provide a comprehensive 90-Day Free Replacement Guarantee for all permanent placements. If a placed candidate leaves or does not meet expectations during the initial 90-day warranty window, we will source, vet, and place a suitable replacement at zero additional charge.",
  },
  {
    id: "faq-7",
    category: "employer",
    question: "Can we convert a contract worker into a permanent employee?",
    answer:
      "Yes! Our Contract-to-Hire (C2H) model allows you to evaluate contract personnel on active projects and seamlessly transition high-performing talent into full-time permanent employees whenever you are ready.",
  },
  {
    id: "faq-8",
    category: "employer",
    question: "How do you handle confidentiality during executive search assignments?",
    answer:
      "Our Executive Search team works under strict non-disclosure protocols (NDAs). Sensitive leadership searches are conducted through discreet market mapping and private candidate briefings, protecting your organization's strategic maneuvers and market reputation.",
  },
];

