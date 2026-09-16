"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { EmployeeRecord } from "@/data/employees";
import {
  getCurrentEmployee,
  loginEmployee,
  logoutEmployee,
  type LoginResult,
} from "@/lib/employeeAuth";

type AuthContextValue = {
  employee: EmployeeRecord | null;
  isLoading: boolean;
  login: (email: string, password: string) => LoginResult;
  logout: () => void;
  refresh: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [employee, setEmployee] = useState<EmployeeRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(() => {
    setEmployee(getCurrentEmployee());
  }, []);

  useEffect(() => {
    refresh();
    setIsLoading(false);
  }, [refresh]);

  const login = useCallback((email: string, password: string): LoginResult => {
    const result = loginEmployee(email, password);
    if (result.ok) {
      setEmployee(result.employee);
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    logoutEmployee();
    setEmployee(null);
  }, []);

  const value = useMemo(
    () => ({ employee, isLoading, login, logout, refresh }),
    [employee, isLoading, login, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
