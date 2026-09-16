"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type AuthMode = "login" | "register";
export type RegisterRole = "jobseeker" | "employer";

export type AuthSwitchProps = {
  mode?: AuthMode;
  defaultMode?: AuthMode;
  onModeChange?: (mode: AuthMode) => void;
  email?: string;
  password?: string;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onLoginSubmit?: (e: React.FormEvent) => void;
  error?: string;
  submitting?: boolean;
  demoAccounts?: { id: string; name: string; email: string; role: string }[];
  demoPassword?: string;
  onFillDemo?: (email: string) => void;
  onRegisterJobseeker?: () => void;
  onRegisterEmployer?: () => void;
  brandName?: string;
  className?: string;
};

const overlayEase = [0.77, 0, 0.175, 1] as const;

export default function AuthSwitch({
  mode: controlledMode,
  defaultMode = "login",
  onModeChange,
  email = "",
  password = "",
  onEmailChange,
  onPasswordChange,
  onLoginSubmit,
  error,
  submitting = false,
  demoAccounts = [],
  demoPassword,
  onFillDemo,
  onRegisterJobseeker,
  onRegisterEmployer,
  brandName = "Kawaii Japan Career",
  className,
}: AuthSwitchProps) {
  const [internalMode, setInternalMode] = useState<AuthMode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [registerRole, setRegisterRole] = useState<RegisterRole>("jobseeker");

  const mode = controlledMode ?? internalMode;
  const isSignUp = mode === "register";

  const setMode = (next: AuthMode) => {
    if (controlledMode === undefined) setInternalMode(next);
    onModeChange?.(next);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerRole === "employer") onRegisterEmployer?.();
    else onRegisterJobseeker?.();
  };

  return (
    <div
      className={cn(
        "relative flex min-h-svh w-full items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6",
        className
      )}
      style={{
        background:
          "linear-gradient(165deg, #7B6EF2 0%, #6C5CE7 42%, #5B4ED8 100%)",
      }}
    >
      <Link
        href="/"
        className="absolute left-5 top-5 z-20 sm:left-8 sm:top-7"
        aria-label="Back to home"
      >
        <Image
          src="/kawaiihrlogo-white.webp"
          alt={brandName}
          width={220}
          height={66}
          className="h-9 w-auto object-contain sm:h-10"
          priority
        />
      </Link>

      <div className="relative w-full max-w-[440px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_80px_rgba(50,30,140,0.35)] lg:h-[560px] lg:max-w-[960px]">
        {/* Forms — sit on the white half, then swap sides with the overlay */}
        <div
          className={cn(
            "relative z-[1] flex w-full items-center justify-center px-7 py-8 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] sm:px-10 lg:absolute lg:top-0 lg:h-full lg:w-1/2 lg:py-0",
            isSignUp
              ? "lg:left-0 lg:pl-10 lg:pr-16"
              : "lg:left-1/2 lg:pl-16 lg:pr-10"
          )}
        >
          <AnimatePresence mode="wait">
            {isSignUp ? (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: overlayEase }}
                className="w-full max-w-[300px]"
              >
                <SignUpForm
                  name={name}
                  email={email}
                  password={password}
                  showPassword={showPassword}
                  registerRole={registerRole}
                  onNameChange={setName}
                  onEmailChange={(v) => onEmailChange?.(v)}
                  onPasswordChange={(v) => onPasswordChange?.(v)}
                  onTogglePassword={() => setShowPassword((v) => !v)}
                  onRoleChange={setRegisterRole}
                  onSubmit={handleRegisterSubmit}
                />
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.35, ease: overlayEase }}
                className="w-full max-w-[300px]"
              >
                <SignInForm
                  email={email}
                  password={password}
                  showPassword={showPassword}
                  error={error}
                  submitting={submitting}
                  demoAccounts={demoAccounts}
                  demoPassword={demoPassword}
                  onEmailChange={(v) => onEmailChange?.(v)}
                  onPasswordChange={(v) => onPasswordChange?.(v)}
                  onTogglePassword={() => setShowPassword((v) => !v)}
                  onSubmit={onLoginSubmit}
                  onFillDemo={onFillDemo}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile overlay CTA (stacked; circle overlay is desktop-only) */}
        <div className="relative z-[2] border-t border-[#EDEDF5] bg-[#F7F6FF] px-6 py-5 text-center lg:hidden">
          {isSignUp ? (
            <>
              <h3 className="text-lg font-semibold text-[#2F2A5A]">
                Welcome back?
              </h3>
              <p className="mx-auto mt-1 max-w-[260px] text-sm leading-relaxed text-[#6B668C]">
                Already have an account? Sign in to your dashboard.
              </p>
              <button
                type="button"
                onClick={() => setMode("login")}
                className="mt-4 inline-flex h-10 min-w-[132px] items-center justify-center rounded-full border border-[#6C5CE7] px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6C5CE7] transition-colors hover:bg-[#6C5CE7] hover:text-white"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#2F2A5A]">New here?</h3>
              <p className="mx-auto mt-1 max-w-[260px] text-sm leading-relaxed text-[#6B668C]">
                Join us today and create your account in seconds.
              </p>
              <button
                type="button"
                onClick={() => setMode("register")}
                className="mt-4 inline-flex h-10 min-w-[132px] items-center justify-center rounded-full border border-[#6C5CE7] px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6C5CE7] transition-colors hover:bg-[#6C5CE7] hover:text-white"
              >
                Sign up
              </button>
            </>
          )}
        </div>

        {/* Desktop curved overlay */}
        <div className="pointer-events-none absolute inset-0 z-[3] hidden overflow-hidden lg:block">
          <div
            className={cn(
              "absolute top-1/2 h-[220%] w-[120%] -translate-y-1/2 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]",
              isSignUp ? "left-[50%]" : "-left-[70%]"
            )}
            style={{
              background:
                "linear-gradient(165deg, #9B94F7 0%, #7E76EE 48%, #6E66E8 100%)",
            }}
          />
        </div>

        {/* Desktop overlay copy — New here? */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 z-[4] hidden w-[46%] flex-col items-center justify-center px-10 text-center text-white transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] lg:flex",
            isSignUp
              ? "pointer-events-none -translate-x-8 opacity-0"
              : "pointer-events-auto translate-x-0 opacity-100"
          )}
        >
          <h2 className="text-[28px] font-semibold tracking-tight">New here?</h2>
          <p className="mt-3 max-w-[250px] text-[13.5px] leading-relaxed text-white/90">
            Join us today and discover a world of possibilities. Create your
            account in seconds!
          </p>
          <button
            type="button"
            onClick={() => setMode("register")}
            className="mt-7 inline-flex h-11 min-w-[148px] items-center justify-center rounded-full border-[1.5px] border-white px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#6C5CE7]"
          >
            Sign up
          </button>
        </div>

        {/* Desktop overlay copy — Welcome back */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 z-[4] hidden w-[46%] flex-col items-center justify-center px-10 text-center text-white transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] lg:flex",
            isSignUp
              ? "pointer-events-auto translate-x-0 opacity-100"
              : "pointer-events-none translate-x-8 opacity-0"
          )}
        >
          <h2 className="text-[28px] font-semibold tracking-tight">
            Welcome back?
          </h2>
          <p className="mt-3 max-w-[250px] text-[13.5px] leading-relaxed text-white/90">
            To keep connected with us please login with your personal info.
          </p>
          <button
            type="button"
            onClick={() => setMode("login")}
            className="mt-7 inline-flex h-11 min-w-[148px] items-center justify-center rounded-full border-[1.5px] border-white px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#6C5CE7]"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

function SignInForm({
  email,
  password,
  showPassword,
  error,
  submitting,
  demoAccounts,
  demoPassword,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
  onFillDemo,
}: {
  email: string;
  password: string;
  showPassword: boolean;
  error?: string;
  submitting: boolean;
  demoAccounts: { id: string; name: string; email: string; role: string }[];
  demoPassword?: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  onFillDemo?: (email: string) => void;
}) {
  return (
    <form className="flex w-full flex-col items-center" onSubmit={onSubmit}>
      <h1 className="mb-6 text-[28px] font-bold tracking-tight text-[#1A1A1A] sm:text-[32px]">
        Sign in
      </h1>

      <Field
        id="auth-email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        autoComplete="username"
        icon={<Mail className="h-4 w-4" />}
      />
      <Field
        id="auth-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        autoComplete="current-password"
        icon={<Lock className="h-4 w-4" />}
        trailing={
          <button
            type="button"
            onClick={onTogglePassword}
            className="text-gray-400 transition-colors hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        }
      />

      {error ? (
        <p className="mb-1 w-full text-center text-sm font-medium text-[#A71728]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex h-11 min-w-[168px] items-center justify-center rounded-full bg-[#6C7CFF] px-10 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(108,124,255,0.35)] transition-transform hover:scale-[1.03] hover:bg-[#5B6CF5] disabled:opacity-60"
      >
        {submitting ? "Signing in…" : "Login"}
      </button>

      <p className="mt-6 text-[13px] text-[#6B7280]">
        Or sign in with social platforms
      </p>
      <SocialRow />

      {demoAccounts.length > 0 ? (
        <div className="mt-5 w-full">
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Demo employees
            {demoPassword ? ` · ${demoPassword}` : null}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {demoAccounts.map((emp) => (
              <button
                key={emp.id}
                type="button"
                onClick={() => onFillDemo?.(emp.email)}
                className="rounded-full bg-[#F3F4F8] px-3 py-1.5 text-[11px] font-medium text-[#4B5563] transition-colors hover:bg-[#E8E9FF] hover:text-[#6C5CE7]"
              >
                {emp.name.split(" ").slice(-2).join(" ")}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </form>
  );
}

function SignUpForm({
  name,
  email,
  password,
  showPassword,
  registerRole,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onRoleChange,
  onSubmit,
}: {
  name: string;
  email: string;
  password: string;
  showPassword: boolean;
  registerRole: RegisterRole;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onRoleChange: (role: RegisterRole) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form className="flex w-full flex-col items-center" onSubmit={onSubmit}>
      <h1 className="mb-5 text-[28px] font-bold tracking-tight text-[#1A1A1A] sm:text-[32px]">
        Sign up
      </h1>

      <div className="mb-3 grid w-full grid-cols-2 gap-1.5 rounded-full bg-[#F3F4F8] p-1">
        {(
          [
            { id: "jobseeker" as const, label: "Job seeker" },
            { id: "employer" as const, label: "Employer" },
          ] as const
        ).map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => onRoleChange(role.id)}
            className={cn(
              "h-8 rounded-full text-[11px] font-semibold transition-colors",
              registerRole === role.id
                ? "bg-white text-[#6C5CE7] shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            {role.label}
          </button>
        ))}
      </div>

      <Field
        id="auth-name"
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        autoComplete="name"
        icon={<User className="h-4 w-4" />}
      />
      <Field
        id="auth-register-email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        autoComplete="email"
        icon={<Mail className="h-4 w-4" />}
      />
      <Field
        id="auth-register-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        autoComplete="new-password"
        icon={<Lock className="h-4 w-4" />}
        trailing={
          <button
            type="button"
            onClick={onTogglePassword}
            className="text-gray-400 transition-colors hover:text-gray-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        }
      />

      <button
        type="submit"
        className="mt-1 inline-flex h-11 min-w-[168px] items-center justify-center rounded-full bg-[#6C7CFF] px-10 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(108,124,255,0.35)] transition-transform hover:scale-[1.03] hover:bg-[#5B6CF5]"
      >
        Sign up
      </button>

      <p className="mt-5 text-[13px] text-[#6B7280]">
        Or sign up with social platforms
      </p>
      <SocialRow />
    </form>
  );
}

function Field({
  id,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  icon,
  trailing,
}: {
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoComplete?: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="mb-2.5 flex h-12 w-full items-center gap-3 rounded-full bg-[#F1F2F8] px-4 text-[#9AA0B4] focus-within:bg-[#ECEEFB] focus-within:ring-2 focus-within:ring-[#6C7CFF]/25"
    >
      <span className="shrink-0">{icon}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#1A1A1A] outline-none placeholder:text-[#9AA0B4]"
      />
      {trailing ? <span className="shrink-0">{trailing}</span> : null}
    </label>
  );
}

function SocialRow() {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <SocialButton label="Google">
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" aria-hidden>
          <path
            fill="#EA4335"
            d="M12 10.2v3.6h5.1c-.2 1.2-.9 2.3-1.9 3l3.1 2.4c1.8-1.7 2.8-4.1 2.8-7 0-.7-.1-1.3-.2-1.9H12z"
          />
          <path
            fill="#34A853"
            d="M5.3 14.3 4.4 15l-2.7 2.1C3.5 20.2 7.5 23 12 23c3 0 5.5-1 7.3-2.8l-3.1-2.4c-.9.6-2 1-3.2 1-2.5 0-4.6-1.7-5.4-3.9z"
          />
          <path
            fill="#4A90E2"
            d="M2 7c-.6 1.2-1 2.5-1 4s.4 2.8 1 4c0 .1 3.3-2.6 3.3-2.6C5.1 11.5 5 11.3 5 11s.1-.5.2-.8z"
          />
          <path
            fill="#FBBC05"
            d="M12 5c1.6 0 3.1.6 4.2 1.6L19 3.8C17.1 2.1 14.7 1 12 1 7.5 1 3.5 3.8 1.7 7.9L5.2 10C6 7.7 8.1 5 12 5z"
          />
        </svg>
      </SocialButton>
      <SocialButton label="Facebook">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2" aria-hidden>
          <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1h1.7V3h-2.9C11.6 3 10 4.7 10 7.3v1.2H8v3h2V21h3.5v-9.5h2.5l.5-3z" />
        </svg>
      </SocialButton>
      <SocialButton label="X">
        <svg viewBox="0 0 24 24" className="h-[14px] w-[14px]" fill="#1DA1F2" aria-hidden>
          <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1A3.8 3.8 0 0 0 12.4 9c0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4-.4.6-.5 1.3-.5 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6A7.7 7.7 0 0 1 2 18.4 10.8 10.8 0 0 0 7.8 20c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2z" />
        </svg>
      </SocialButton>
      <SocialButton label="LinkedIn">
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="#0A66C2" aria-hidden>
          <path d="M6.5 9H4V20h2.5V9zM5.2 4C4.3 4 3.6 4.7 3.6 5.6S4.3 7.2 5.2 7.2 6.9 6.5 6.9 5.6 6.2 4 5.2 4zM20 20h-2.5v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V9h2.4v1.5h.1c.3-.6 1.2-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V20z" />
        </svg>
      </SocialButton>
    </div>
  );
}

function SocialButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={`${label} login coming soon`}
      aria-label={`Sign in with ${label} (coming soon)`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E4EE] bg-white transition-colors hover:border-[#6C7CFF]/50 hover:bg-[#F7F8FF]"
    >
      {children}
    </button>
  );
}

/** Named export kept for demos that import `{ Component }` */
export const Component = AuthSwitch;
