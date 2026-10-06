export interface ServiceSection {
  id: string;
  badge?: string;
  h2: string;
  h3: string;
  paragraphs: string[];
  ctaText: string;
  ctaAction?: "employer" | "jobseeker";
  image: string;
  imageAlt: string;
  features?: string[];
  stats?: { value: string; label: string }[];
}

export interface ServiceOffering {
  title: string;
  desc: string;
  image: string;
}

export interface ServiceCategory {
  slug: string;
  number: string;
  navLabel: string;
  title: string;
  headerBrand?: string;
  headerBadge?: string;
  metaTitle?: string;
  metaDescription?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroCtaText?: string;
  tagline: string;
  summary: string;
  overview: string;
  body: string[];
  sections?: ServiceSection[];
  whoFor: string[];
  heroImage: string;
  gallery: { src: string; alt: string }[];
  offerings: ServiceOffering[];
  highlights: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  cta: { title: string; desc: string; employer: boolean };
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "recruitment",
    number: "01",
    navLabel: "Recruitment Services",
    headerBrand: "Kawaii Career — Recruitment, Payroll & Immigration Solutions in Bangladesh",
    headerBadge: "SECTION 1 — RECRUITMENT SERVICES",
    metaTitle: "Recruitment Agency in Bangladesh | Kawaii Career",
    metaDescription:
      "Kawaii Career provides recruitment, executive search, manpower supply and HR solutions in Bangladesh for MNCs, Japanese companies and local enterprises.",
    title: "Recruitment Agency in Bangladesh for Strategic Workforce Growth",
    heroHeadline: "Recruitment Agency in Bangladesh for Strategic Workforce Growth",
    heroCtaText: "Hire Top Talent Today",
    tagline:
      "Structured talent sourcing, executive search, and end-to-end workforce solutions designed around the specific requirements of employers in Bangladesh.",
    summary:
      "Kawaii Career provides recruitment, executive search, manpower supply and HR solutions in Bangladesh for MNCs, Japanese companies and local enterprises.",
    overview:
      "Bangladesh’s expanding manufacturing, technology, infrastructure, energy, services, and corporate sectors are creating new demand for qualified talent. Finding people with the right technical capabilities, leadership experience, cultural fit, and availability can be challenging—particularly when companies are entering a new market or scaling rapidly.",
    body: [
      "Kawaii Career provides structured recruitment and workforce solutions designed around the specific requirements of employers in Bangladesh. From specialist hiring and executive search to contractual staffing and large-scale manpower deployment, our approach combines market knowledge, candidate assessment, verification, and recruitment technology.",
      "Our objective is not simply to fill vacancies. We help organizations build workforces that support operational continuity, business expansion, and long-term organizational performance.",
    ],
    sections: [
      {
        id: "talent-sourcing",
        badge: "Sourcing Strategy",
        h2: "Talent Sourcing",
        h3: "Data-Driven Talent Sourcing in Bangladesh",
        paragraphs: [
          "Kawaii Career uses structured sourcing strategies to identify qualified Bangladeshi and international professionals across multiple industries. Our recruitment teams combine candidate databases, professional networks, targeted searches, referrals, and sector-specific talent mapping.",
          "For employers, this means access to a broader candidate pool without requiring internal HR teams to spend extensive time identifying and approaching potential applicants.",
          "Our screening process considers qualifications, professional experience, technical competencies, communication capabilities, career history, and role-specific requirements before suitable candidates are presented.",
        ],
        ctaText: "Start Your Talent Search",
        ctaAction: "employer",
        image: "/images/executive_interview.jpg",
        imageAlt: "Data-Driven Talent Sourcing in Bangladesh",
        features: [
          "Candidate databases & sector-specific talent mapping across Bangladesh",
          "Discreet passive candidate outreach & executive search pipelines",
          "Comprehensive screening: technical competency, leadership, and communication",
          "Accelerated hiring velocity while eliminating internal HR administrative load",
        ],
        stats: [
          { value: "12,000+", label: "Vetted Profiles" },
          { value: "5-Tier", label: "Screening Gate" },
        ],
      },
      {
        id: "recruitment-solution",
        badge: "Complete Lifecycle",
        h2: "Recruitment Solution",
        h3: "End-to-End Recruitment Solutions",
        paragraphs: [
          "A successful recruitment process extends beyond publishing a vacancy. Kawaii Career can support employers throughout the talent acquisition lifecycle—from workforce requirement analysis and job profiling to sourcing, screening, interviews, reference verification, selection, and onboarding coordination.",
          "Our recruitment solutions can be configured for individual vacancies, recurring hiring requirements, new business launches, or large-scale workforce expansion.",
          "This allows companies to use a consistent recruitment framework while maintaining flexibility as their workforce requirements change.",
        ],
        ctaText: "Discuss Your Recruitment Requirements",
        ctaAction: "employer",
        image: "/images/japanese_office_team.jpg",
        imageAlt: "End-to-End Recruitment Solutions in Bangladesh",
        features: [
          "Full talent acquisition lifecycle from requirement analysis to onboarding",
          "Configurable for one-off specialist hires, recurring needs, or rapid expansion",
          "Multi-level reference verification and background validation",
          "Consistent recruitment framework with high operational agility",
        ],
        stats: [
          { value: "98.4%", label: "Placement Retention" },
          { value: "30 Days", label: "Executive Mandate" },
        ],
      },
      {
        id: "manpower-supply",
        badge: "Workforce Supply",
        h2: "Manpower Supply",
        h3: "Skilled, Semi-Skilled and Technical Manpower Supply",
        paragraphs: [
          "Kawaii Career supports organizations requiring rapid access to skilled, semi-skilled, technical, operational, and support personnel.",
          "Our manpower supply process can be adapted to construction, manufacturing, facilities management, logistics, hospitality, engineering, industrial operations, and other workforce-intensive sectors.",
          "Candidates are assessed according to the requirements of the position and applicable employment conditions before deployment.",
        ],
        ctaText: "Request Manpower Supply",
        ctaAction: "employer",
        image: "/images/manpower_supply_workforce.jpg",
        imageAlt: "Skilled, Semi-Skilled and Technical Manpower Supply",
        features: [
          "Rapid deployment of verified skilled, semi-skilled, and technical personnel",
          "Engineered for construction, manufacturing, engineering, and logistics facilities",
          "Pre-deployment competency testing, compliance verification, and health checks",
          "Flexible short-term, contractual, and high-volume deployment arrangements",
        ],
        stats: [
          { value: "Rapid", label: "Mobilization Speed" },
          { value: "100%", label: "Screened Before Deployment" },
        ],
      },
      {
        id: "headhunting",
        badge: "Executive & Specialist Search",
        h2: "Headhunting",
        h3: "Specialized Headhunting for Hard-to-Fill Positions",
        paragraphs: [
          "Some vacancies require specialist knowledge or experience that is uncommon in the general applicant market. In these cases, conventional recruitment advertising may produce limited results.",
          "Kawaii Career conducts targeted headhunting campaigns to identify qualified professionals, including passive candidates who may not be actively searching for employment.",
          "Our consultants focus on matching technical capability, career experience, compensation expectations, and organizational requirements.",
        ],
        ctaText: "Find Specialized Talent",
        ctaAction: "employer",
        image: "/images/specialized_headhunting_search.jpg",
        imageAlt: "Specialized Headhunting for Hard-to-Fill Positions",
        features: [
          "Discreet outreach to top-tier passive executives and niche specialists",
          "In-depth talent mapping across competitive industries and markets",
          "Holistic evaluation of technical capability, leadership pedigree, and culture",
          "Rigorous confidentiality safeguarding institutional brand and trade discretion",
        ],
        stats: [
          { value: "Discreet", label: "Executive Protocol" },
          { value: "30 Days", label: "Average Shortlist Mandate" },
        ],
      },
      {
        id: "contractual-staffing",
        badge: "Workforce Flexibility",
        h2: "Contractual Staffing",
        h3: "Project-Based and Contractual Workforce Solutions",
        paragraphs: [
          "Contractual staffing provides businesses with workforce flexibility for defined projects, seasonal requirements, temporary vacancies, or short-term operational expansion.",
          "Kawaii Career can support the recruitment and administration of contractual personnel according to the agreed employment structure and applicable requirements.",
          "This can help employers manage workforce requirements without automatically expanding permanent headcount for temporary business needs.",
        ],
        ctaText: "Explore Contract Staffing",
        ctaAction: "employer",
        image: "/images/contractual_staffing_workforce.jpg",
        imageAlt: "Project-Based and Contractual Workforce Solutions",
        features: [
          "Agile deployment tailored for time-bound projects & seasonal demand",
          "Comprehensive contractor onboarding, administration & attendance oversight",
          "Optimized operational headcount without permanent payroll liabilities",
          "Rapid replacement protocols safeguarding critical business project milestones",
        ],
        stats: [
          { value: "Flexible", label: "Project Engagements" },
          { value: "Full-Cycle", label: "Contract Admin Support" },
        ],
      },
      {
        id: "work-permit-support",
        badge: "Global Mobility",
        h2: "Work Permit Support for International Recruitment",
        h3: "Foreign Employee Recruitment and Compliance Support",
        paragraphs: [
          "Recruiting an international employee involves additional documentation and regulatory requirements. Kawaii Career can coordinate recruitment-related work permit support so employers have a structured process for foreign-national onboarding.",
          "We help organize relevant documentation and coordinate with appropriate authorities and stakeholders as required.",
          "Because immigration rules and administrative procedures can change, applications should always be assessed against the latest government requirements.",
        ],
        ctaText: "Get Work Permit Support",
        ctaAction: "employer",
        image: "/images/work_permit_international_compliance.jpg",
        imageAlt: "Foreign Employee Recruitment and Compliance Support",
        features: [
          "Structured foreign-national onboarding & advisory for expat placements",
          "Comprehensive dossier collation & compliance alignment with local regulations",
          "Coordination with relevant authorities and key institutional stakeholders",
          "Proactive monitoring of evolving immigration regulations and procedural updates",
        ],
        stats: [
          { value: "Compliant", label: "Regulatory Alignment" },
          { value: "End-to-End", label: "Expat Onboarding Flow" },
        ],
      },
      {
        id: "oil-gas-power-energy",
        badge: "Energy & Infrastructure",
        h2: "Oil, Gas, Power & Energy Recruitment",
        h3: "Specialized Recruitment for Energy and Infrastructure",
        paragraphs: [
          "Bangladesh's infrastructure and energy sectors require professionals with specialized engineering, technical, project management, HSE, operations, and commercial expertise.",
          "Kawaii Career supports recruitment for specialized roles across oil and gas, power generation, energy, construction, engineering, utilities, and infrastructure projects.",
          "Our sector-focused approach helps employers identify candidates whose technical backgrounds correspond with demanding project and operational environments.",
        ],
        ctaText: "Hire Energy Professionals",
        ctaAction: "employer",
        image: "/images/energy_infrastructure_recruitment.jpg",
        imageAlt: "Specialized Recruitment for Energy and Infrastructure",
        features: [
          "Specialized engineering, project managers, HSE, and plant operations talent",
          "Dedicated coverage across oil & gas, utilities, power plants, and EPC megaprojects",
          "Assessment calibrated for high-hazard and mission-critical project environments",
          "Deep talent mapping across domestic and international technical energy sectors",
        ],
        stats: [
          { value: "Heavy Industry", label: "Sector Focus" },
          { value: "100% Certified", label: "HSE & Technical Vetting" },
        ],
      },
      {
        id: "recruitment-methodology",
        badge: "Quality Assurance",
        h2: "Recruitment Methodology",
        h3: "Rigorous Candidate Screening and Verification",
        paragraphs: [
          "Our recruitment methodology is designed to reduce unsuitable applications reaching hiring managers.",
          "Depending on the assignment, the process can incorporate CV screening, competency-based interviews, technical assessment, employment verification, reference checks, document verification, and role-specific evaluation.",
          "The exact methodology is adapted to the seniority, sensitivity, technical complexity, and regulatory requirements of each position.",
        ],
        ctaText: "Request Our Recruitment Methodology",
        ctaAction: "employer",
        image: "/images/recruitment_methodology_screening.jpg",
        imageAlt: "Rigorous Candidate Screening and Verification",
        features: [
          "Multi-stage screening eliminating unqualified submissions before hiring review",
          "Competency-based interviews, technical diagnostics, and background verification",
          "Document authentication, reference audits, and strict compliance vetting",
          "Customized assessment matrices adapted to role seniority and sensitivity",
        ],
        stats: [
          { value: "Multi-Stage", label: "Assessment Protocol" },
          { value: "Zero Compromise", label: "Verification Integrity" },
        ],
      },
    ],
    whoFor: [
      "MNCs, Japanese enterprises & local groups filling specialist or leadership seats",
      "Expanding manufacturing, technology, infrastructure, energy & corporate sectors",
      "Boards running confidential C-level, VP, or specialist leadership replacements",
      "HR teams seeking vetted, scored shortlists rather than unfiltered CV dumps",
    ],
    heroImage: img("photo-1521737711867-e3b97375f902"),
    gallery: [
      { src: img("photo-1573496359142-b8d87734a5a2"), alt: "Structured candidate interview" },
      { src: img("photo-1600880292203-757bb62b4baf"), alt: "Leadership handshake after offer" },
      { src: img("photo-1556761175-4b46a572b786"), alt: "Talent team collaboration" },
      { src: img("photo-1473341304170-971dccb5ac1e"), alt: "Oil, gas, power and energy operations" },
    ],
    offerings: [
      {
        title: "Talent Sourcing & Acquisition",
        desc: "Written role brief, competency matrix, and targeted outreach across professional and skilled pipelines. You receive a compared shortlist with scores — not a folder of résumés.",
        image: img("photo-1551836022-d5d88e9218df", 900),
      },
      {
        title: "Executive Search (C-level / VP)",
        desc: "Confidential headhunting for sitting leaders. Market map, discreet approach, compensation advice. Typical first shortlist: about 30 days on a clear mandate.",
        image: img("photo-1556761175-5973dc0f32e7", 900),
      },
      {
        title: "Executive Coaching & Interventions",
        desc: "100-day landing plans, stakeholder mapping, and targeted interventions when a new leader or a stuck team needs a structured reset — not a motivational workshop.",
        image: img("photo-1517245386807-bb43f82c33c4", 900),
      },
      {
        title: "Corporate & Contract Staffing",
        desc: "Permanent hire, contractual staffing, and manpower supply. Replacement cover is written into the assignment so a no-show does not stop the site.",
        image: img("photo-1522071820081-009f0129c71c", 900),
      },
      {
        title: "Oil, Gas, Power & Energy",
        desc: "Plant, project, HSE, electrical/mechanical, and operations talent for energy operators, EPCs, and utilities. Site discipline is screened, not assumed.",
        image: img("photo-1513828583688-c5265db8c4e4", 900),
      },
      {
        title: "Shared Service & HR Solution",
        desc: "Recruitment process design and shared-service hiring desks for multi-entity groups that want one standard, not eight local habits.",
        image: img("photo-1454165804606-c3d57bc86b40", 900),
      },
    ],
    highlights: [
      "Structured screening: skill, behavior, and role fit before you see a name",
      "~30-day executive search window for clearly scoped C-level / VP mandates",
      "Named energy desk: Oil, Gas, Power & Energy",
      "One workflow: brief → shortlist → offer → 90-day follow-up",
      "Candidates are not charged a placement fee on domestic assignments",
    ],
    process: [
      {
        step: "01",
        title: "Requirement Analysis & Brief",
        desc: "Headcount, must-haves vs nice-to-haves, culture, reporting line, and commercial constraints go into one written intake. We do not start sourcing from a one-line job title.",
      },
      {
        step: "02",
        title: "Data-Driven Sourcing & Mapping",
        desc: "Active candidate databases plus discreet outreach and sector talent mapping to reach qualified professionals across Bangladesh and internationally.",
      },
      {
        step: "03",
        title: "Screening & Reference Gate",
        desc: "Technical assessment, behavioral interviews, communication tests, and reference verification. Only candidates clearing the matrix reach your calendar.",
      },
      {
        step: "04",
        title: "Selection & Onboarding Coordination",
        desc: "Compared dossiers, interview coordination, offer negotiation support, onboarding coordination, and 90-day placement follow-up to ensure long-term retention.",
      },
    ],
    faqs: [
      {
        q: "What industries do you recruit for in Bangladesh?",
        a: "We recruit across manufacturing, technology & software engineering, civil & infrastructure, oil & gas, power & energy, corporate finance & operations, garments & textiles, and services sectors.",
      },
      {
        q: "How fast is executive search?",
        a: "For a clearly scoped C-level or VP mandate we typically complete mapping and a first shortlist inside about 30 days. Highly specialized or confidential replacements can take longer — we say so at intake, not after week four.",
      },
      {
        q: "How does data-driven talent sourcing work at Kawaii Career?",
        a: "We combine proprietary candidate databases, professional networks, targeted searches, referrals, and sector-specific talent mapping to identify top talent with exact technical competencies and cultural fit.",
      },
      {
        q: "What does the employer actually receive?",
        a: "A written brief confirmation, a scored shortlist (usually 3–5 names), interview support, reference check dossiers, and offer/join tracking. You keep the hire decision; we keep the pipeline moving.",
      },
      {
        q: "Is there a replacement guarantee if someone leaves early?",
        a: "Yes. Permanent placements carry a written replacement window (typically 90 days). Contract and manpower assignments use faster swap cover. Exact terms sit in the assignment letter.",
      },
    ],
    cta: {
      title: "Hire Top Talent Today",
      desc: "Tell us your role requirements, seniority, and target start date. Our recruitment specialists will get back within 24 business hours with a proposed sourcing path.",
      employer: true,
    },
  },
  {
    slug: "payroll",
    number: "02",
    navLabel: "Payroll & Workforce",
    title: "Payroll & Workforce Administration",
    tagline: "Outsourced payroll, attendance, leave, claims — one operating desk.",
    summary:
      "Third-party and automated payroll, financial administration, contingent workforce, secondment, time & attendance, leave, claims, and training/appraisal admin.",
    overview:
      "Payroll breaks when attendance, leave, claims, and statutory files live in different inboxes. We run one desk: outsourced and third-party payroll, automated monthly cycles, contingent and seconded staff on the same track, plus time & attendance, leave, claims, and training/appraisal records.",
    body: [
      "Your finance and HR leads stay on exceptions and decisions. We own the calendar: cut-off, exception lock, compute, bank file, payslips, and statutory submissions. Mid-year takeovers get a parallel month before we go live so balances and tax-to-date do not vanish.",
      "Contractors, project staff, and secondments sit on the same administration as core employees — different pay elements, one audit trail. Cost packs can split by site, cost center, and employment type so operations can see what the workforce actually costs this month.",
    ],
    whoFor: [
      "Companies that want payroll off the internal spreadsheet",
      "Groups with mixed permanent, contract, and seconded staff",
      "Multi-site operations that need attendance-to-pay without late runs",
      "Finance teams that need audit-ready files, not chat-thread approvals",
    ],
    heroImage: img("photo-1554224155-6726b3ff858f"),
    gallery: [
      { src: img("photo-1460925895917-afdab827c52f"), alt: "Payroll analytics dashboard" },
      { src: img("photo-1551288049-bebda4e38f71"), alt: "Workforce data review" },
      { src: img("photo-1450101499163-c8848c66ca85"), alt: "Contract and claims administration" },
      { src: img("photo-1507679799987-c73779587ccf"), alt: "Finance and payroll leadership" },
    ],
    offerings: [
      {
        title: "Outsourced & Third-Party Payroll",
        desc: "Monthly processing, statutory deductions, and payslips on a documented calendar. We take the run; you approve exceptions and the bank file.",
        image: img("photo-1554224154-26032ffc0d07", 900),
      },
      {
        title: "Automated Payroll Cycles",
        desc: "Attendance-to-pay pipelines that cut manual keying and late-run risk. Cut-off and exception rules are written down so the month does not depend on one person.",
        image: img("photo-1516321318423-f06f85e504b3", 900),
      },
      {
        title: "Managed & Contingent Workforce",
        desc: "Contractors, secondment, and project staff on a single payroll and compliance track — not a side spreadsheet that nobody owns at year-end.",
        image: img("photo-1521791136064-7986c2920216", 900),
      },
      {
        title: "Time, Leave & Claims",
        desc: "Attendance, leave balances, and claims with an audit trail. Managers approve; we keep the file that finance and inspectors can actually read.",
        image: img("photo-1434626881859-194d67b2b86f", 900),
      },
      {
        title: "Training & Appraisal Admin",
        desc: "Training rosters and appraisal cycles kept current so the next audit or promotion round does not start with a missing folder.",
        image: img("photo-1552664730-d307ca884978", 900),
      },
      {
        title: "Financial Workforce Management",
        desc: "Cost visibility by site, cost center, and employment type. Monthly variance packs for CFOs who do not want a surprise in month 11.",
        image: img("photo-1553729459-efe14ef6055d", 900),
      },
    ],
    highlights: [
      "Business-day payroll calendar with named exception handling",
      "Contingent and seconded staff on the same desk as core payroll",
      "Attendance, leave, and claims in one file set",
      "Ready for statutory and internal audit requests",
      "Parallel-month option for mid-year takeover",
    ],
    process: [
      {
        step: "01",
        title: "Setup",
        desc: "Entities, pay elements, calendars, approval paths, and bank/statutory contacts. We map what you have today before we change a number.",
      },
      {
        step: "02",
        title: "Run",
        desc: "Attendance lock, exception review, compute, and finance sign-off. Late inputs are logged — they do not silently rewrite the run.",
      },
      {
        step: "03",
        title: "Pay",
        desc: "Bank files, payslips, and statutory submissions on the agreed calendar. Exceptions after cut-off go to the next cycle unless you authorize an off-cycle.",
      },
      {
        step: "04",
        title: "Report",
        desc: "Cost, headcount, and variance packs. You get a file you can send upstairs, not a screenshot of a worksheet.",
      },
    ],
    faqs: [
      {
        q: "Can you take over an existing payroll mid-year?",
        a: "Yes. We migrate balances, tax-to-date, and employee master data, then run a parallel month before going live so the first live run is not the first test.",
      },
      {
        q: "Do you cover contractors and seconded staff?",
        a: "Yes. Contingent workforce and secondment sit on the same administration desk as permanent payroll, with different pay elements and the same audit trail.",
      },
      {
        q: "Who approves the bank file?",
        a: "You do. We prepare; a named person on your side releases payment. That split is written into the calendar so it is not improvised on payday.",
      },
      {
        q: "What systems do you use?",
        a: "We can run on your stack or ours. The constraint is a clean cut-off and an export finance already trusts — not a branded portal for its own sake.",
      },
    ],
    cta: {
      title: "Request a payroll review",
      desc: "Share entity count, headcount, and whether you are mid-year. We outline a run calendar and a takeover path.",
      employer: true,
    },
  },
  {
    slug: "managed-service",
    number: "03",
    navLabel: "Managed Service",
    title: "360° Managed HR Service",
    tagline: "One account manager. Labor-law cover. Full HR operating stack.",
    summary:
      "360 HR solutions with labor-law support and a dedicated account manager — hiring through exit, without building a large internal HR bench.",
    overview:
      "Managed service is for companies that want HR outcomes without standing up every function in-house. You get a named account manager, labor-law support on contracts and exits, and a 360 operating model: recruitment, workforce admin, policy, and employee relations on one retainer.",
    body: [
      "The point is ownership. Escalations do not bounce between a recruiter, a payroll clerk, and a lawyer you have never met. One account manager holds the SLA: time-to-shortlist, open cases, and compliance items, reviewed monthly.",
      "You can keep a lean internal HR lead and park the operating stack with us, or we can be the HR function. That split is decided in a scope workshop — not discovered during a termination. Labor-law review sits on templates and exits so you are not writing letters from memory.",
    ],
    whoFor: [
      "Growing Bangladeshi companies that are not ready for a 10-person HR department",
      "Local and inbound firms that need a Dhaka HR operating desk",
      "Groups that want one SLA across hiring, cases, and compliance",
      "Leaders tired of vendor-hopping between recruiter, payroll, and counsel",
    ],
    heroImage: img("photo-1600880292089-90a7e086ee0c"),
    gallery: [
      { src: img("photo-1542744173-8e7e53415bb0"), alt: "Account management review" },
      { src: img("photo-1557804506-669a67965ba0"), alt: "Leadership planning session" },
      { src: img("photo-1522202176988-66273c2fd55f"), alt: "Cross-functional HR team" },
      { src: img("photo-1497366216548-37526070297c"), alt: "Managed service workspace" },
    ],
    offerings: [
      {
        title: "360 HR Solutions",
        desc: "Recruitment, payroll liaison, policy, and employee relations under one agreement. You are not stitching three vendors into a fake HR department.",
        image: img("photo-1556761175-b413fe4c8819", 900),
      },
      {
        title: "Labor-Law Support",
        desc: "Bangladesh Labour Act alignment on contracts, working hours, leave, and exit documentation. We review the letter before it goes out — not after a dispute starts.",
        image: img("photo-1589829545856-d10d557cf95f", 900),
      },
      {
        title: "Dedicated Account Manager",
        desc: "A named owner for SLAs, escalations, and monthly operating reviews. You always know who to call and what they owe you this month.",
        image: img("photo-1573497019940-1c28c88b4f3e", 900),
      },
    ],
    highlights: [
      "Single commercial and operational owner",
      "Labor-law review on templates and exits",
      "Monthly SLA pack: hiring, cases, and compliance",
      "Scope workshop so in-house vs outsourced is explicit",
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        desc: "What stays in-house vs what we run. Written RACI so a resignation or a hire does not stall while people argue whose job it is.",
      },
      {
        step: "02",
        title: "Assign",
        desc: "Account manager, playbooks, and escalation path. You meet the people who will actually do the work.",
      },
      {
        step: "03",
        title: "Operate",
        desc: "Weekly desk plus a monthly review against SLA: open roles, cases, and compliance items.",
      },
      {
        step: "04",
        title: "Improve",
        desc: "Kaizen on cycle time, quality, and case load. If a step is slow, we change the step — we do not add a status meeting.",
      },
    ],
    faqs: [
      {
        q: "Is this a replacement for an internal HR team?",
        a: "It can be, or it can sit beside a lean internal lead. We define the split in the scope workshop so ownership stays clear when something goes wrong.",
      },
      {
        q: "What does the monthly review include?",
        a: "Open requisitions, time-to-shortlist, employee cases, and any labor or statutory items that need a decision. No vanity dashboard — items with owners and dates.",
      },
      {
        q: "Do you also run payroll?",
        a: "Payroll can sit inside the managed-service retainer or as a linked Payroll desk. We do not pretend they are the same skill; we just keep one account owner.",
      },
    ],
    cta: {
      title: "Book a managed-service scope call",
      desc: "We map functions, SLAs, and a start date. Bring your current org chart and the three HR problems that keep repeating.",
      employer: true,
    },
  },
  {
    slug: "peo-eor",
    number: "04",
    navLabel: "PEO & EOR",
    title: "PEO, EOR & Bangladesh Mobility",
    tagline: "Hire in Bangladesh without standing up a full local HR-legal stack first.",
    summary:
      "Bangladesh EOR, PEO, contractor AOR, and inbound mobility — local employment cover without building a full in-house legal stack first.",
    overview:
      "Employer of Record (EOR) and Professional Employer Organization (PEO) are Bangladesh employment models. You direct the work. We hold the local contract, payroll, and statutory cover (EOR), or we co-employ beside your Bangladeshi entity (PEO). Built for companies hiring here — not an overseas placement desk.",
    body: [
      "Inbound mobility, Agent of Record (AOR) for contractors, and KPO-style documentation sit on the same file so a Dhaka hire does not stall because contract, pay, and work permit were three vendors. Immigration is a linked local desk — we do not invent visa categories in a sales call.",
      "Pick the model against risk and timeline, not a brochure. No Bangladesh entity and you need someone working next month? EOR. Entity already exists and you want shared HR infrastructure? PEO. Contractor-heavy and you need cleaner payment and IP assignment? AOR. We say which one we will not do.",
    ],
    whoFor: [
      "Foreign companies hiring in Bangladesh before they incorporate",
      "Local groups that want EOR/PEO instead of growing a legal-HR bench overnight",
      "Teams that need contractors documented (AOR), not informal retainers",
      "Inbound hires that also need a Bangladesh work permit",
    ],
    heroImage: img("photo-1526304640581-d334cdbbf45e"),
    gallery: [
      { src: img("photo-1436491865332-7a61a109cc05"), alt: "Inbound travel for a Bangladesh assignment" },
      { src: img("photo-1454165804606-c3d57bc86b40"), alt: "Cross-border compliance work" },
      { src: img("photo-1521790797524-b2497295b8a0"), alt: "International contract signing" },
      { src: img("photo-1486406146926-c627a92ad1ab"), alt: "Dhaka corporate operations" },
    ],
    offerings: [
      {
        title: "Employer of Record (EOR)",
        desc: "We are the legal employer; you direct day-to-day work. Contract, payroll, benefits, and statutory cover included. Useful when you have no local entity yet.",
        image: img("photo-1507679799987-c73779587ccf", 900),
      },
      {
        title: "PEO / Co-employment",
        desc: "Shared employment beside an entity you already have — or are forming. You keep the employer brand; we run the HR operating layer.",
        image: img("photo-1556761175-5973dc0f32e7", 900),
      },
      {
        title: "Inbound Mobility (Bangladesh)",
        desc: "Assignment letters, relocation liaison, and a clean handoff to the Immigration desk for people joining a Bangladesh role.",
        image: img("photo-1464037866556-6812c9d1c72e", 900),
      },
      {
        title: "AOR & Contractors",
        desc: "Agent of Record for independent contractors: documentation, payment rails, and IP assignment that will survive a later audit.",
        image: img("photo-1450101499163-c8848c66ca85", 900),
      },
      {
        title: "KPO & Transaction Support",
        desc: "Knowledge-process support and paperwork so the commercial deal and the Bangladesh people file stay aligned — entity, contract, and pay on one track.",
        image: img("photo-1554224155-8d04cb21cd6c", 900),
      },
      {
        title: "Local Compliance Desk",
        desc: "Bangladesh labour and statutory checklists before the offer is signed. The expensive mistake is discovering a gap after the person has resigned elsewhere.",
        image: img("photo-1589829545856-d10d557cf95f", 900),
      },
    ],
    highlights: [
      "EOR for Bangladesh employment without your own local entity",
      "PEO when you want co-employment beside a BD company",
      "Inbound mobility + work-permit liaison on the same file",
      "AOR for contractor-heavy teams in Bangladesh",
      "Model chosen against risk and start date — not a product push",
    ],
    process: [
      {
        step: "01",
        title: "Country & model",
        desc: "EOR, PEO, AOR, or your own BD entity — picked against risk, tax posture, and timeline. We write down what we will not do.",
      },
      {
        step: "02",
        title: "Contract",
        desc: "Employment or contractor pack, benefits, confidentiality, and IP assignment. You review before anyone starts work.",
      },
      {
        step: "03",
        title: "Onboard",
        desc: "Right-to-work, payroll setup, and manager briefing. Immigration, if needed, is a parallel workstream with its own owner.",
      },
      {
        step: "04",
        title: "Run",
        desc: "Monthly compliance, pay, mobility changes, and offboarding. Exits get the same discipline as joins.",
      },
    ],
    faqs: [
      {
        q: "EOR vs PEO?",
        a: "EOR: we employ the person in Bangladesh; you do not need your own local entity. PEO: co-employment beside your Bangladeshi company. We recommend the model after a short scoping call, not from a one-pager.",
      },
      {
        q: "Do you handle visas as well?",
        a: "Mobility files route to our Immigration desk. Work permits and employment visas are a separate, documented workstream. We do not bundle “visa included” as a slogan.",
      },
      {
        q: "Who owns intellectual property?",
        a: "The commercial SOW assigns IP to you. The employment or contractor contract we issue has to match that SOW — that is why both are drafted together.",
      },
      {
        q: "How fast can someone start?",
        a: "Contract and payroll setup can be days if right-to-work is already clear. If a work permit is required, the immigration calendar — not the EOR calendar — is the constraint.",
      },
    ],
    cta: {
      title: "Scope an EOR / PEO hire",
      desc: "Tell us country, role, start date, and whether you have a local entity. We recommend a model in writing.",
      employer: true,
    },
  },
  {
    slug: "hr-outsourcing",
    number: "05",
    navLabel: "HR Outsourcing",
    title: "HR Outsourcing & Advisory",
    tagline: "Strategic HR, RPO, background checks, and Bangladesh corporate advisory.",
    summary:
      "Essential strategic HR, advisory & compliance, expatriate management, end-to-end HR, RPO, and background verification.",
    overview:
      "Outsource the HR operating system — or a slice of it. We cover strategic HR, advisory and compliance, expatriate management, Bangladesh corporate advisory, full end-to-end HR, Recruitment Process Outsourcing (RPO), and background verification before the start date.",
    body: [
      "RPO means we own the hiring funnel: intake, sourcing, screening, interview coordination, offer, and join tracking. You keep hire/no-hire. Background verification (identity, education, employment, references) runs before Day 1 — not after a problem appears on site.",
      "Expat files stay tied to immigration and payroll so an inbound manager does not land with a contract that the permit file contradicts. Bangladesh corporate advisory is local labour and employer-practice guidance for boards that need Dhaka reality, not an imported playbook.",
    ],
    whoFor: [
      "Companies that want RPO without giving up hire decisions",
      "Employers who need BGV as a gate, not a formality",
      "Inbound expatriate assignments that also need a permit",
      "Foreign boards that need Bangladesh labor and documentation advice",
    ],
    heroImage: img("photo-1556761175-4b46a572b786"),
    gallery: [
      { src: img("photo-1573497019236-17f8177b81e8"), alt: "HR advisory consultation" },
      { src: img("photo-1560264280-88b68371db39"), alt: "Background verification desk" },
      { src: img("photo-1551836022-4c4c79ecde51"), alt: "Expatriate onboarding" },
      { src: img("photo-1522202176988-66273c2fd55f"), alt: "End-to-end HR operations" },
    ],
    offerings: [
      {
        title: "Strategic HR & Advisory",
        desc: "Org design, policies, and compliance advice that matches how Bangladeshi companies actually operate — not a generic imported handbook.",
        image: img("photo-1552664730-d307ca884978", 900),
      },
      {
        title: "Expatriate Management",
        desc: "Assignment letters, housing liaison, and a documented handoff to Immigration so the permit file and the employment file tell the same story.",
        image: img("photo-1521791136064-7986c2920216", 900),
      },
      {
        title: "Corporate Advisory — Bangladesh",
        desc: "Local labor, documentation, and employer-practice guidance for foreign and local boards. We say what the Act requires; we do not sell theater.",
        image: img("photo-1450101499163-c8848c66ca85", 900),
      },
      {
        title: "End-to-End HR / RPO",
        desc: "We own the hiring funnel: intake, sourcing, screening, offer, and onboarding. You keep decisions and brand. We keep cycle time.",
        image: img("photo-1600880292203-757bb62b4baf", 900),
      },
      {
        title: "Background Verification",
        desc: "Identity, education, employment, and reference checks before the start date. A failed check stops the join — it does not become a surprise in month two.",
        image: img("photo-1454165804606-c3d57bc86b40", 900),
      },
    ],
    highlights: [
      "RPO for high-volume or multi-site hiring",
      "BGV before join — not after a problem appears",
      "Expat files stay tied to immigration and payroll",
      "Advisory that cites Bangladesh labour practice, not imported slogans",
    ],
    process: [
      {
        step: "01",
        title: "Diagnose",
        desc: "Which HR processes leak time or risk: hiring, BGV, policy, expat, or employee cases. We pick a workstream, not “HR” as a blob.",
      },
      {
        step: "02",
        title: "Design",
        desc: "SLA, RACI, and templates. You see the letters and scorecards before we run them on live people.",
      },
      {
        step: "03",
        title: "Run",
        desc: "Named desk for hiring, BGV, and employee cases. Status is a list of names and dates, not a percentage.",
      },
      {
        step: "04",
        title: "Review",
        desc: "Quarterly quality and compliance review. If a step does not change an outcome, we drop the step.",
      },
    ],
    faqs: [
      {
        q: "What is included in RPO?",
        a: "Intake, sourcing, screening, interview coordination, offer support, and join tracking. You keep hiring decisions; we keep the pipeline moving and report against the SLA.",
      },
      {
        q: "How deep is background verification?",
        a: "Standard pack is identity, education, last employment, and references. We can add criminal or address checks where lawful and useful. Depth is written in the SOW.",
      },
      {
        q: "Can we outsource only BGV or only RPO?",
        a: "Yes. The point of a workstream model is that you do not have to buy the whole stack to get one gate done well.",
      },
    ],
    cta: {
      title: "Outsource an HR workstream",
      desc: "Pick RPO, BGV, expat, or full HR ops. We scope one workstream first so the SLA is real.",
      employer: true,
    },
  },
  {
    slug: "bpo-rpo",
    number: "06",
    navLabel: "BPO & RPO",
    title: "BPO, RPO & Offshore Delivery",
    tagline: "Customer service, back office, tech staffing, and IT/ITeS pods in Bangladesh.",
    summary:
      "BPO, virtual office, customer service, back office, tech staffing, offshore IT, IT/ITeS outsourcing, and MPO.",
    overview:
      "Stand up a delivery pod in Bangladesh: customer service, back office, virtual office presence, tech staffing, offshore IT, IT/ITeS outsourcing, RPO for hiring at volume, and Managed Process Outsourcing (MPO). We recruit, seat, train, and manage to an SLA — not a body-count invoice.",
    body: [
      "Bangla and English desks are the default. Language QA is in the SLA, not a hope. Virtual office plus back-office seats give you a Dhaka presence without pretending it is a full subsidiary.",
      "RPO here means filling seats on a calendar for the pod itself. MPO means we own the process quality: sampling, coaching, and a lead. If you only want contractors with no QA, say so — that is staffing, and we will route it there instead of dressing it up as BPO.",
    ],
    whoFor: [
      "Companies standing up a first Dhaka delivery floor",
      "Teams that need Bangla or English customer operations",
      "IT leaders who want an offshore pod with a named lead",
      "Volume hiring that has to hit a go-live date, not a hope",
    ],
    heroImage: img("photo-1525182008055-f88b95ff7980"),
    gallery: [
      { src: img("photo-1556761175-5973dc0f32e7"), alt: "BPO operations floor" },
      { src: img("photo-1531482615713-2afd69097998"), alt: "IT staffing collaboration" },
      { src: img("photo-1553877522-43269d4ea984"), alt: "Offshore technology team" },
      { src: img("photo-1497215728101-856f4ea42174"), alt: "Back-office workspace" },
    ],
    offerings: [
      {
        title: "BPO & Customer Service",
        desc: "Voice, chat, and ticket teams in Bangla and English. QA sampling and a floor lead are part of the seat price, not extras.",
        image: img("photo-1596524430615-b46475ddff46", 900),
      },
      {
        title: "Virtual Office & Back Office",
        desc: "Local presence plus finance, HR admin, and data-ops seats. Useful when you need a Bangladesh address and a working desk, not a brass plate.",
        image: img("photo-1497366811353-6870744d04b2", 900),
      },
      {
        title: "Tech & Offshore IT Staffing",
        desc: "Engineers, QA, DevOps, and support on contract or dedicated teams. They work on your stack; we hold employment or the pod SOW.",
        image: img("photo-1573164713714-d95e436ab8d6", 900),
      },
      {
        title: "IT / ITeS Outsourcing & MPO",
        desc: "Process ownership with quality control. We take the SLA on output, not just attendance. If you only want bodies, we will say so and staff it as staffing.",
        image: img("photo-1519389950473-47ba0277781c", 900),
      },
      {
        title: "RPO for Volume Hiring",
        desc: "Recruitment process outsourcing when the pod itself needs seats filled on a calendar — ramp, attrition cover, and a weekly join list.",
        image: img("photo-1521737711867-e3b97375f902", 900),
      },
    ],
    highlights: [
      "Dhaka delivery with written QA sampling",
      "Bangla / English desks as the default",
      "Scale seats monthly; we hold the bench and the SLA",
      "Clear split: staffing vs process ownership (MPO)",
    ],
    process: [
      {
        step: "01",
        title: "Process map",
        desc: "Volumes, languages, tools, hours, and the quality bar. We write the SLA before we hire the first seat.",
      },
      {
        step: "02",
        title: "Build",
        desc: "Hire, train, and seat the first pod. You meet the lead. Shadow and go-live dates are on a calendar.",
      },
      {
        step: "03",
        title: "Stabilize",
        desc: "SLA, QA sampling, and client cadence. Weeks 2–6 are where we catch process bugs — not month six.",
      },
      {
        step: "04",
        title: "Scale",
        desc: "Add seats or new processes without a new vendor hunt. Attrition cover is part of the model.",
      },
    ],
    faqs: [
      {
        q: "What languages do you run?",
        a: "Bangla and English as standard. Other languages only if the bench and volume support it — we will not promise coverage we cannot staff.",
      },
      {
        q: "Do people work on our systems?",
        a: "Yes. Access, IP, and data rules go in the SOW. We can also host on our floor if you need a controlled workspace.",
      },
      {
        q: "What is the difference between BPO and remote staffing?",
        a: "BPO/MPO: we own process quality and a lead. Remote staffing: you manage the person on your team. Pick the one that matches who you want waking up when a ticket slips.",
      },
    ],
    cta: {
      title: "Stand up a delivery pod",
      desc: "Share process, language, hours, and target go-live. We return a seat plan and an SLA draft.",
      employer: true,
    },
  },
  {
    slug: "immigration",
    number: "07",
    navLabel: "Immigration & Visa",
    title: "Immigration & Visa — Bangladesh",
    tagline: "Work permit, employment visa, investor visa — documented, not guessed.",
    summary:
      "Work permit and work visa guidance, business/investor and employment visa categories (including PI, E, E1, A3), fee orientation, and a practical how-to guide.",
    overview:
      "We prepare employer and assignee files for Bangladesh work permits and related visas. Categories we commonly support include employment and investor tracks such as PI, E, E1, and A3. Exact eligibility depends on the current circular and the assignee’s role — we check that before we collect a stack of documents.",
    body: [
      "How a work permit typically runs: the employer (or EOR) justifies the role, we assemble company and candidate documents, the permit / recommendation is filed, then the assignee applies for the matching visa. After arrival there is registration and a conditions briefing. We tell you which step you own so the file does not sit in someone’s inbox.",
      "Official fees and service charges change. We do not publish a stale table on this page. Ask for a current fee note for your category and nationality. We do not guarantee approval — that decision sits with the authorities. We assemble a complete, consistent file and track status.",
    ],
    whoFor: [
      "Employers hiring a foreign professional into Bangladesh",
      "Investors and business visitors who need a PI or related track",
      "EOR / expat cases that already have a job but no permit",
      "Assignees who want a document list, not a rumor from a forum",
    ],
    heroImage: img("photo-1436491865332-7a61a109cc05"),
    gallery: [
      { src: img("photo-1464037866556-6812c9d1c72e"), alt: "Travel and visa documentation" },
      { src: img("photo-1521790797524-b2497295b8a0"), alt: "Employment contract for visa file" },
      { src: img("photo-1450101499163-c8848c66ca85"), alt: "Work permit paperwork" },
      { src: img("photo-1488085061387-422e29b40080"), alt: "International arrival" },
    ],
    offerings: [
      {
        title: "Work Permit & Work Visa",
        desc: "Employer invitation, role justification, and permit file for foreign professionals. We keep the employment letter and the permit story aligned.",
        image: img("photo-1560264280-88b68371db39", 900),
      },
      {
        title: "Employment Visa (E / E1)",
        desc: "Employment-category filings aligned to the approved permit and job description. Category is chosen against the circular, not a nickname on a brochure.",
        image: img("photo-1454165804606-c3d57bc86b40", 900),
      },
      {
        title: "Business / Investor Visa (PI)",
        desc: "Private investor and business-entry documentation with corporate advisory. Useful when the person is investing or transacting, not joining as staff.",
        image: img("photo-1507679799987-c73779587ccf", 900),
      },
      {
        title: "A3 and Related Categories",
        desc: "Support on listed categories such as A3 where the circular and role match. If it does not match, we say so and stop — we do not force a file.",
        image: img("photo-1589829545856-d10d557cf95f", 900),
      },
    ],
    highlights: [
      "How-to: brief → documents → file → endorsement → arrival",
      "PI, E, E1, A3 checked against the current circular",
      "Visa fee schedule issued on request (official fees change)",
      "Tied to EOR / expat management when you also need employment cover",
      "No approval guarantee — we own the file quality, not the stamp",
    ],
    process: [
      {
        step: "01",
        title: "Eligibility",
        desc: "Role, nationality, employer type, and likely category (PI, E, E1, A3, or other). If the category is wrong, we stop before you pay for translations.",
      },
      {
        step: "02",
        title: "Documents",
        desc: "Company papers, appointment letter, qualifications, photos, and forms. You get a checklist with owners — not a WhatsApp pile.",
      },
      {
        step: "03",
        title: "File",
        desc: "Work permit / recommendation path, then visa endorsement. We track status and tell you when a query needs your reply.",
      },
      {
        step: "04",
        title: "Arrive",
        desc: "Landing, registration, and permit conditions briefing so the person does not accidentally breach a condition in week one.",
      },
    ],
    faqs: [
      {
        q: "How do I get a work permit in Bangladesh?",
        a: "The employer (or EOR) justifies the role, assembles company and candidate documents, files for the work permit / recommendation, then the assignee applies for the matching visa. We run that sequence and mark which step you own.",
      },
      {
        q: "What are the visa fees?",
        a: "Official fees and service charges change. We do not publish a stale table. Ask for the current fee note for your category and nationality.",
      },
      {
        q: "Do you guarantee approval?",
        a: "No. Immigration decisions sit with the authorities. We assemble a complete, consistent file and track status. Anyone who “guarantees” a stamp is selling something else.",
      },
      {
        q: "Can you handle this together with EOR?",
        a: "Yes. Many inbound hires need both an employer of record and a permit. We keep one file so the contract and the visa application do not contradict each other.",
      },
    ],
    cta: {
      title: "Start a visa / permit file",
      desc: "Send nationality, role, employer entity, and target entry date. We reply with eligibility notes and a document list.",
      employer: true,
    },
  },
  {
    slug: "remote-staffing",
    number: "08",
    navLabel: "Remote Staffing",
    title: "Remote & Offshore Staffing",
    tagline: "Hire IT and specialist talent in Bangladesh. They work on your stack.",
    summary:
      "Remote and offshore hiring for IT and tech roles — dedicated engineers, pods, and managed remote desks.",
    overview:
      "Remote staffing is for companies that want Bangladesh talent on their tools and an agreed timezone overlap, without a local entity. We hire, contract (or EOR), and keep the person or pod accountable. Strongest on IT and tech; we also staff remote analysts, designers, and bilingual coordinators.",
    body: [
      "You interview. We employ or contract. IP, confidentiality, and overlap hours go in the SOW so nobody is arguing about Git access in week three. If you have no Bangladesh entity, EOR sits underneath. If you want a lead plus replacement cover instead of twelve individual Slack relationships, that is a managed remote desk.",
      "This is not BPO unless you ask for process ownership. Here, your manager runs the work. We run hiring, contract, attendance, and swap cover. If you need a customer-service floor with our QA, use BPO & RPO instead.",
    ],
    whoFor: [
      "Product and engineering teams that need extra seats on their stack",
      "Companies without a Bangladesh entity (EOR underneath)",
      "Managers who want a shortlist, not a freelance marketplace tab",
      "Teams that need overlap hours written into the SOW",
    ],
    heroImage: img("photo-1593642632823-8f785ba67e45"),
    gallery: [
      { src: img("photo-1516321318423-f06f85e504b3"), alt: "Remote engineering desk" },
      { src: img("photo-1573164713714-d95e436ab8d6"), alt: "Offshore developer pairing" },
      { src: img("photo-1588196749597-9ff075ee6b5b"), alt: "Distributed team video call" },
      { src: img("photo-1498050108023-c5249f4df085"), alt: "IT workstation" },
    ],
    offerings: [
      {
        title: "Remote / Offshore Hiring",
        desc: "One hire or a pod. You interview finalists; we employ or contract. Start window and overlap hours are in the SOW, not a chat promise.",
        image: img("photo-1522071820081-009f0129c71c", 900),
      },
      {
        title: "IT & Tech Staffing",
        desc: "Full-stack, QA, DevOps, data, and support on retainers or contract-to-hire. Screening is technical first — we do not send “available immediately” as a skill.",
        image: img("photo-1519389950473-47ba0277781c", 900),
      },
      {
        title: "Managed Remote Desk",
        desc: "Attendance, replacement cover, and a lead so you are not managing twelve individual contractors alone when one goes quiet.",
        image: img("photo-1600880292089-90a7e086ee0c", 900),
      },
    ],
    highlights: [
      "Works with EOR if you have no Bangladesh entity",
      "IT-first bench; other remote roles on request",
      "Overlap hours agreed in the SOW",
      "You manage the work; we manage the employment file",
    ],
    process: [
      {
        step: "01",
        title: "Stack & hours",
        desc: "Skills, seniority, tools, and the overlap window. If you need 9am Dhaka plus a client timezone, we say whether the bench can actually do that.",
      },
      {
        step: "02",
        title: "Shortlist",
        desc: "Vetted profiles in days, not a CV flood. You interview. We do not “submit” people you have not agreed to see.",
      },
      {
        step: "03",
        title: "Contract",
        desc: "Direct, EOR, or pod SOW. IP, pay, and notice are explicit. Work does not start on a handshake.",
      },
      {
        step: "04",
        title: "Operate",
        desc: "First-month check-in and replacement cover. If someone is not landing, we swap — we do not ask you to coach them for a quarter.",
      },
    ],
    faqs: [
      {
        q: "Who is the employer?",
        a: "Your entity, or ours via EOR. We pick that in the SOW so IP assignment and statutory cover are explicit before the first standup.",
      },
      {
        q: "How is this different from BPO?",
        a: "Remote staffing: your manager runs the work. BPO: we own process quality and a floor lead. Use the page that matches who you want accountable for output.",
      },
      {
        q: "Can we convert a contractor to full-time later?",
        a: "Yes, if the SOW is C2H or we amend it. Conversion terms (notice, fee, EOR exit) are written up front so it is not a surprise negotiation.",
      },
    ],
    cta: {
      title: "Hire a remote seat",
      desc: "Send the stack, seniority, overlap hours, and start window. We come back with a shortlist path — not a rate card dump.",
      employer: true,
    },
  },
];

export function getServiceCategory(slug: string) {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}
