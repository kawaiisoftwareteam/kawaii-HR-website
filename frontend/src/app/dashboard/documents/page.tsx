"use client";

import React from "react";
import { FileText } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

const statusStyles = {
  verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  expired: "bg-red-50 text-red-700 border-red-200",
} as const;

export default function DashboardDocumentsPage() {
  const { employee } = useAuth();
  if (!employee) return null;

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A71728]">
          Documents
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
          Your documents
        </h2>
        <p className="text-sm text-gray-600">
          Dummy document checklist for {employee.name}. Status updates are for demo
          only.
        </p>
      </div>

      <div className="bg-white border border-black/8 divide-y divide-black/5">
        {employee.documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between gap-4 p-4 sm:p-5"
          >
            <div className="flex items-start gap-3 min-w-0">
              <span className="mt-0.5 w-9 h-9 bg-[#A71728]/10 text-[#A71728] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold truncate">{doc.name}</p>
                <p className="text-xs text-gray-500">Updated {doc.updatedAt}</p>
              </div>
            </div>
            <span
              className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border ${statusStyles[doc.status]}`}
            >
              {doc.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
