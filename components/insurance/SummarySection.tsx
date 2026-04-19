"use client";

import { ReactNode } from "react";

interface SummarySectionProps {
  title: string;
  children: ReactNode;
}

export default function SummarySection({ title, children }: SummarySectionProps) {
  return (
    <div className="rounded-xl border border-[#f3f4f6] bg-[#fdfdfd] p-4 lg:p-5">
      <h3 className="text-base font-semibold text-[#111827] mb-4">{title}</h3>
      {children}
    </div>
  );
}
