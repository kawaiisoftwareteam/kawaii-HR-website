import {
  EMPLOYEES,
  findEmployeeByEmail,
  findEmployeeById,
  type EmployeeRecord,
} from "@/data/employees";

const SESSION_KEY = "kawaii_employee_session";

export type EmployeeSession = {
  employeeId: string;
  email: string;
  loggedInAt: string;
};

export type LoginResult =
  | { ok: true; employee: EmployeeRecord }
  | { ok: false; error: string };

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function loginEmployee(email: string, password: string): LoginResult {
  const employee = findEmployeeByEmail(email);
  if (!employee || employee.password !== password) {
    return { ok: false, error: "Invalid email or password." };
  }

  const session: EmployeeSession = {
    employeeId: employee.id,
    email: employee.email,
    loggedInAt: new Date().toISOString(),
  };

  if (canUseStorage()) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  return { ok: true, employee };
}

export function logoutEmployee(): void {
  if (canUseStorage()) {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function getSession(): EmployeeSession | null {
  if (!canUseStorage()) return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as EmployeeSession;
    if (!parsed?.employeeId) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getCurrentEmployee(): EmployeeRecord | null {
  const session = getSession();
  if (!session) return null;
  return findEmployeeById(session.employeeId) ?? null;
}

export function listDemoAccounts() {
  return EMPLOYEES.map((e) => ({
    email: e.email,
    name: e.name,
    role: e.role,
  }));
}
