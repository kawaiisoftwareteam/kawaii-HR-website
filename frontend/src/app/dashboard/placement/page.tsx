"use client";

import React from "react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  JapaneseYen,
  MapPin,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

export default function DashboardPlacementPage() {
  const { employee } = useAuth();
  if (!employee) return null;

  const { placement } = employee;

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A71728]">
          Placement
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
          Japan placement details
        </h2>
      </div>

      <div className="bg-white border border-black/8 overflow-hidden">
        <div className="bg-[#0A0A0A] text-white p-6 sm:p-8 space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A71728]">
            Assigned role
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            {placement.position}
          </h3>
          <p className="text-white/70">{placement.company}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Employer
              </p>
              <p className="text-sm font-semibold">{placement.company}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                City
              </p>
              <p className="text-sm font-semibold">{placement.city}, Japan</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Contract type
              </p>
              <p className="text-sm font-semibold">{placement.contractType}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CalendarDays className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Start date
              </p>
              <p className="text-sm font-semibold">{placement.startDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:col-span-2">
            <JapaneseYen className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Compensation
              </p>
              <p className="text-sm font-semibold">{placement.salary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF5F5] border border-[#F0A8AE] p-5 text-sm text-gray-700">
        This is a <strong>demo placement record</strong> for {employee.name}. No
        real visa or payroll actions are processed from this portal.
      </div>
    </div>
  );
}
