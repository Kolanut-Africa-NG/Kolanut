"use client";

import { ReactNode } from "react";

interface InfoRowProps {
  label: string;
  value: ReactNode;
  border?: boolean;
}

export default function InfoRow({ label, value, border = true }: InfoRowProps) {
  return (
    <div
      className={`flex items-center justify-between py-3 ${
        border ? "border-b border-[#f3f4f6]" : ""
      }`}
    >
      <span className="text-sm font-normal text-body-text">{label}</span>
      <span className="text-sm font-semibold text-dark-text">
        {typeof value === "string" ? value : value}
      </span>
    </div>
  );
}
