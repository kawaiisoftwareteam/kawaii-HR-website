"use client";

import React from "react";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

export default function DashboardProfilePage() {
  const { employee } = useAuth();
  if (!employee) return null;

  const fields = [
    { label: "Full name", value: employee.name },
    { label: "Employee ID", value: employee.employeeId },
    { label: "Role", value: employee.role },
    { label: "Department", value: employee.department },
    { label: "Manager", value: employee.manager },
    { label: "Join date", value: employee.joinDate },
    { label: "Status", value: employee.status },
    { label: "Base location", value: employee.location },
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A71728]">
          Profile
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
          Employee profile
        </h2>
      </div>

      <div className="bg-white border border-black/8 p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-black/5">
          <div className="w-14 h-14 bg-[#A71728]/10 text-[#A71728] flex items-center justify-center">
            <UserRound className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-600">
              {employee.role} · {employee.employeeId}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {fields.map((f) => (
            <div key={f.label} className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                {f.label}
              </p>
              <p className="text-sm font-semibold capitalize">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/5">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Mail className="w-4 h-4 text-[#A71728] shrink-0" />
            {employee.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Phone className="w-4 h-4 text-[#A71728] shrink-0" />
            {employee.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin className="w-4 h-4 text-[#A71728] shrink-0" />
            {employee.location}
          </div>
        </div>
      </div>
    </div>
  );
}
