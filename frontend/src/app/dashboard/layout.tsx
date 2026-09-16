"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  Briefcase,
  FileText,
  LayoutDashboard,
  LogOut,
  UserRound,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
  { href: "/dashboard/documents", label: "Documents", icon: FileText },
  { href: "/dashboard/placement", label: "Placement", icon: Briefcase },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { employee, isLoading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !employee) {
      router.replace("/login");
    }
  }, [employee, isLoading, router]);

  if (isLoading || !employee) {
    return (
      <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center">
        <div className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Loading dashboard…
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#111] font-sans selection:bg-[#A71728] selection:text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-[#0A0A0A] text-white border-r border-white/10">
          <div className="px-6 py-6 border-b border-white/10">
            <Link href="/" className="inline-block">
              <Image
                src="/kawaiihrlogo-white.webp"
                alt="Kawaii Japan HR"
                width={180}
                height={54}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/45">
              Employee Portal
            </p>
          </div>

          <nav className="flex-1 px-3 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-[#A71728] text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-4 py-5 border-t border-white/10 space-y-3">
            <div>
              <p className="text-sm font-semibold text-white truncate">
                {employee.name}
              </p>
              <p className="text-xs text-white/50 truncate">{employee.employeeId}</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full inline-flex items-center justify-center gap-2 h-10 text-xs font-bold uppercase tracking-wider border border-white/20 hover:border-[#A71728] hover:bg-[#A71728] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/5">
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-16">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A71728]">
                  {employee.department}
                </p>
                <h1 className="text-sm sm:text-base font-bold uppercase tracking-tight truncate">
                  {employee.name}
                </h1>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-[#FFF5F5] text-[#A71728] border border-[#F0A8AE]">
                  <Bell className="w-3 h-3" />
                  {employee.status}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="lg:hidden inline-flex items-center gap-1.5 h-9 px-3 text-[11px] font-bold uppercase tracking-wider border border-black/15 hover:border-[#A71728] hover:text-[#A71728] transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile nav */}
            <nav className="lg:hidden flex overflow-x-auto no-scrollbar border-t border-black/5 px-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-3 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
                      active
                        ? "border-[#A71728] text-[#A71728]"
                        : "border-transparent text-gray-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </header>

          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
