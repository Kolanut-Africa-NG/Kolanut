"use client";

import { ReactNode } from "react";

interface StepLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
  maxWidth?: string;
}

export default function StepLayout({
  title,
  description,
  children,
  actions,
  maxWidth = "max-w-[920px]",
}: StepLayoutProps) {
  return (
    <div className={`mx-auto w-full ${maxWidth} rounded-xl border border-[#f3f4f6] bg-[#fdfdfd] px-6 lg:px-8 py-8`}>
      {/* Title */}
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-xl lg:text-2xl font-semibold text-dark-text">
          {title}
        </h2>
        <p className="text-sm lg:text-base font-normal text-body-text">
          {description}
        </p>
      </div>

      {/* Content */}
      {children}

      {/* Actions */}
      {actions && <div className="mt-8">{actions}</div>}
    </div>
  );
}
