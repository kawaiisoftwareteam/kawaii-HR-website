"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  MapPin,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string | number;
  suffix?: string;
}) {
  return (
    <div className="bg-white border border-black/8 p-5 space-y-2">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
        {label}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-black">
        {value}
        {suffix ? (
          <span className="text-base font-semibold text-gray-400 ml-1">
            {suffix}
          </span>
        ) : null}
      </p>
    </div>
  );
}

export default function DashboardPage() {
  const { employee } = useAuth();
  if (!employee) return null;

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A71728]">
          Overview
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
          Welcome back, {employee.name.split(" ").slice(-1)[0]}
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl">
          Your personalized employee dashboard — placement status, documents,
          and HR updates for {employee.placement.company}.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          label="Attendance"
          value={employee.stats.attendanceRate}
          suffix="%"
        />
        <StatCard label="Leave balance" value={employee.stats.leaveBalance} suffix="days" />
        <StatCard label="Open tasks" value={employee.stats.tasksOpen} />
        <StatCard
          label="Docs complete"
          value={employee.stats.documentsComplete}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Placement card */}
        <div className="lg:col-span-2 bg-white border border-black/8 p-6 sm:p-7 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A71728]">
                Current placement
              </p>
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                {employee.placement.position}
              </h3>
              <p className="text-sm text-gray-600">{employee.placement.company}</p>
            </div>
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#A71728] text-white">
              {employee.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-[#A71728] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  Location
                </p>
                <p>{employee.placement.city}, Japan</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <Briefcase className="w-4 h-4 text-[#A71728] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  Contract
                </p>
                <p>{employee.placement.contractType}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <CalendarDays className="w-4 h-4 text-[#A71728] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  Start date
                </p>
                <p>{employee.placement.startDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <ClipboardList className="w-4 h-4 text-[#A71728] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  Package
                </p>
                <p>{employee.placement.salary}</p>
              </div>
            </div>
          </div>

          <Link
            href="/dashboard/placement"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A71728] hover:text-black transition-colors"
          >
            View placement details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="bg-white border border-black/8 p-6 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
            Quick actions
          </p>
          <div className="space-y-2">
            <Link
              href="/dashboard/documents"
              className="flex items-center justify-between gap-3 p-3 border border-black/8 hover:border-[#A71728] transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <FileText className="w-4 h-4 text-[#A71728]" />
                Documents
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center justify-between gap-3 p-3 border border-black/8 hover:border-[#A71728] transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#A71728]" />
                My profile
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white border border-black/8 p-6 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
            Announcements
          </p>
          <ul className="space-y-4">
            {employee.announcements.map((a) => (
              <li key={a.id} className="border-b border-black/5 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold">{a.title}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 shrink-0">
                    {a.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600 font-light">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-black/8 p-6 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
            Recent activity
          </p>
          <ul className="space-y-3">
            {employee.recentActivity.map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <span className="text-gray-800">{item.label}</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 shrink-0">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
