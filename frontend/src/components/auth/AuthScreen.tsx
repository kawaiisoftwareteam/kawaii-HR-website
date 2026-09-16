"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import AuthSwitch, { type AuthMode } from "@/components/ui/auth-switch";
import { useAuth } from "@/components/auth/AuthProvider";
import { DEMO_PASSWORD, EMPLOYEES } from "@/data/employees";

export function AuthScreen({ defaultMode = "login" }: { defaultMode?: AuthMode }) {
  const router = useRouter();
  const { employee, isLoading, login } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"employer" | "jobseeker">("jobseeker");
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && employee) {
      router.replace("/dashboard");
    }
  }, [employee, isLoading, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const result = login(email, password);
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/dashboard");
  };

  const fillDemo = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword(DEMO_PASSWORD);
    setError("");
    setMode("login");
  };

  const openRegister = (tab: "employer" | "jobseeker") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-svh font-sans selection:bg-[#A71728] selection:text-white">
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />
      <AuthSwitch
        mode={mode}
        onModeChange={setMode}
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onLoginSubmit={handleSubmit}
        error={error}
        submitting={submitting}
        demoAccounts={EMPLOYEES.map((emp) => ({
          id: emp.id,
          name: emp.name,
          email: emp.email,
          role: emp.role,
        }))}
        demoPassword={DEMO_PASSWORD}
        onFillDemo={fillDemo}
        onRegisterJobseeker={() => openRegister("jobseeker")}
        onRegisterEmployer={() => openRegister("employer")}
        brandName="Kawaii Japan Career"
      />
    </main>
  );
}
