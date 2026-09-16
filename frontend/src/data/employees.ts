export interface EmployeeDocument {
  id: string;
  name: string;
  status: "verified" | "pending" | "expired";
  updatedAt: string;
}

export interface EmployeeAnnouncement {
  id: string;
  title: string;
  body: string;
  date: string;
}

export interface EmployeeRecord {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  department: string;
  employeeId: string;
  location: string;
  joinDate: string;
  status: "active" | "onboarding" | "placed";
  phone: string;
  manager: string;
  placement: {
    company: string;
    position: string;
    city: string;
    startDate: string;
    contractType: string;
    salary: string;
  };
  stats: {
    attendanceRate: number;
    leaveBalance: number;
    tasksOpen: number;
    documentsComplete: number;
  };
  documents: EmployeeDocument[];
  announcements: EmployeeAnnouncement[];
  recentActivity: { id: string; label: string; time: string }[];
}

/** Dummy employees — password is the same for all demo accounts. */
export const DEMO_PASSWORD = "employee123";

export const EMPLOYEES: EmployeeRecord[] = [
  {
    id: "emp-001",
    email: "rahim@kawaiihr.demo",
    password: DEMO_PASSWORD,
    name: "Md. Rahim Uddin",
    role: "Full Stack Engineer",
    department: "Technology Placement",
    employeeId: "KJ-EMP-001",
    location: "Tokyo, Japan",
    joinDate: "2025-11-12",
    status: "placed",
    phone: "+880 1711-220011",
    manager: "Aya Tanaka",
    placement: {
      company: "Tokyo Tech Partners",
      position: "Full Stack Engineer",
      city: "Tokyo",
      startDate: "2025-12-01",
      contractType: "Full-time · Visa Support",
      salary: "¥5.4M / year",
    },
    stats: {
      attendanceRate: 98,
      leaveBalance: 12,
      tasksOpen: 3,
      documentsComplete: 5,
    },
    documents: [
      { id: "d1", name: "Passport Copy", status: "verified", updatedAt: "2025-11-01" },
      { id: "d2", name: "Work Visa", status: "verified", updatedAt: "2025-11-20" },
      { id: "d3", name: "Employment Contract", status: "verified", updatedAt: "2025-11-25" },
      { id: "d4", name: "Medical Certificate", status: "pending", updatedAt: "2025-12-02" },
      { id: "d5", name: "Bank Details", status: "verified", updatedAt: "2025-11-18" },
    ],
    announcements: [
      {
        id: "a1",
        title: "Visa renewal reminder",
        body: "Please confirm your residence card scan before March 2026.",
        date: "2026-03-10",
      },
      {
        id: "a2",
        title: "Japanese language workshop",
        body: "Optional N3 conversation class every Saturday at 10:00 JST.",
        date: "2026-03-08",
      },
    ],
    recentActivity: [
      { id: "r1", label: "Contract uploaded by HR", time: "2 days ago" },
      { id: "r2", label: "Onboarding checklist 80% complete", time: "5 days ago" },
      { id: "r3", label: "Placement confirmed — Tokyo Tech Partners", time: "1 week ago" },
    ],
  },
  {
    id: "emp-002",
    email: "fatema@kawaiihr.demo",
    password: DEMO_PASSWORD,
    name: "Fatema Akter",
    role: "Caregiving Professional",
    department: "Healthcare Placement",
    employeeId: "KJ-EMP-002",
    location: "Osaka, Japan",
    joinDate: "2026-01-08",
    status: "onboarding",
    phone: "+880 1812-334455",
    manager: "Kenji Sato",
    placement: {
      company: "Osaka Care Network",
      position: "Caregiving Professional",
      city: "Osaka",
      startDate: "2026-04-01",
      contractType: "Full-time · Specified Skilled",
      salary: "¥3.1M / year",
    },
    stats: {
      attendanceRate: 100,
      leaveBalance: 15,
      tasksOpen: 6,
      documentsComplete: 3,
    },
    documents: [
      { id: "d1", name: "Passport Copy", status: "verified", updatedAt: "2026-01-10" },
      { id: "d2", name: "SSW Certificate", status: "pending", updatedAt: "2026-02-15" },
      { id: "d3", name: "Japanese Language (N4)", status: "verified", updatedAt: "2026-01-22" },
      { id: "d4", name: "Medical Certificate", status: "pending", updatedAt: "2026-02-28" },
      { id: "d5", name: "Training Completion", status: "pending", updatedAt: "2026-03-01" },
    ],
    announcements: [
      {
        id: "a1",
        title: "Pre-departure orientation",
        body: "Mandatory orientation on 25 March at Dhaka office, 10 AM.",
        date: "2026-03-12",
      },
      {
        id: "a2",
        title: "Housing assignment",
        body: "Osaka dormitory room allocation will be shared this week.",
        date: "2026-03-09",
      },
    ],
    recentActivity: [
      { id: "r1", label: "Language assessment passed (N4)", time: "3 days ago" },
      { id: "r2", label: "Offer letter accepted", time: "1 week ago" },
      { id: "r3", label: "Profile created in employee portal", time: "2 weeks ago" },
    ],
  },
  {
    id: "emp-003",
    email: "karim@kawaiihr.demo",
    password: DEMO_PASSWORD,
    name: "Abdul Karim",
    role: "Production Technician",
    department: "Manufacturing Placement",
    employeeId: "KJ-EMP-003",
    location: "Aichi, Japan",
    joinDate: "2025-08-20",
    status: "active",
    phone: "+880 1913-556677",
    manager: "Hiroshi Nakamura",
    placement: {
      company: "Nagoya Precision Works",
      position: "Production Technician",
      city: "Aichi",
      startDate: "2025-09-15",
      contractType: "Full-time · SSW",
      salary: "¥3.6M / year",
    },
    stats: {
      attendanceRate: 96,
      leaveBalance: 8,
      tasksOpen: 1,
      documentsComplete: 6,
    },
    documents: [
      { id: "d1", name: "Passport Copy", status: "verified", updatedAt: "2025-08-01" },
      { id: "d2", name: "Residence Card", status: "verified", updatedAt: "2025-09-10" },
      { id: "d3", name: "Employment Contract", status: "verified", updatedAt: "2025-09-01" },
      { id: "d4", name: "Safety Training", status: "verified", updatedAt: "2025-09-20" },
      { id: "d5", name: "Insurance Card", status: "verified", updatedAt: "2025-10-05" },
      { id: "d6", name: "Annual Review Form", status: "pending", updatedAt: "2026-03-01" },
    ],
    announcements: [
      {
        id: "a1",
        title: "Plant shutdown schedule",
        body: "Golden Week plant closure: 29 April – 5 May. Confirm leave if needed.",
        date: "2026-03-11",
      },
      {
        id: "a2",
        title: "Safety drill",
        body: "Fire drill this Friday at 15:00. Attendance is mandatory.",
        date: "2026-03-07",
      },
    ],
    recentActivity: [
      { id: "r1", label: "Monthly attendance synced", time: "Yesterday" },
      { id: "r2", label: "Leave request approved (2 days)", time: "4 days ago" },
      { id: "r3", label: "Safety certificate renewed", time: "2 weeks ago" },
    ],
  },
];

export function findEmployeeByEmail(email: string): EmployeeRecord | undefined {
  return EMPLOYEES.find(
    (e) => e.email.toLowerCase() === email.trim().toLowerCase()
  );
}

export function findEmployeeById(id: string): EmployeeRecord | undefined {
  return EMPLOYEES.find((e) => e.id === id);
}
