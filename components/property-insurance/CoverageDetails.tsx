"use client";

import Link from "next/link";
import { CheckCircle, XCircle, ChevronLeft } from "lucide-react";

interface CoverageDetailsProps {
  planId: string;
  planName: string;
  description: string;
  price: number;
  excess: string;
  allRiskCap: string;
  covered: string[];
  notCovered: string[];
  backLink: string;
  insuranceType: string;
}

export default function CoverageDetails({
  planId,
  planName,
  description,
  price,
  excess,
  allRiskCap,
  covered,
  notCovered,
  backLink,
  insuranceType,
}: CoverageDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Complete your order
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base">
            Follow the Kolanut process to get insured and receive your policy instantly.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Back link */}
        <Link
          href={backLink}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6"
        >
          <ChevronLeft size={16} />
          Back to Plans
        </Link>

        {/* Plan Card */}
        <div className="bg-white rounded-[12px] border border-[#F3F4F6] overflow-hidden">
          {/* Plan Header */}
          <div className="flex items-start justify-between px-8 py-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{planName}</h2>
              <p className="text-gray-500 text-sm mt-0.5">{description}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-brand-red">
                ₦{price.toLocaleString("en-NG")}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">12 Months Coverage</p>
            </div>
          </div>

          {/* Excess & All-Risk Row */}
          <div className="grid grid-cols-2 px-8  gap-5">
            <div className="px-6 py-5 bg-[#FDFDFD] border border-[#F3F4F6] rounded-[8px] ">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                Excess
              </p>
              <p className="text-base font-bold text-gray-800">{excess}</p>
            </div>
            <div className="px-6 py-5 bg-[#FDFDFD] border border-[#F3F4F6] rounded-[8px] ">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                All-Risk Cap
              </p>
              <p className="text-base font-bold text-gray-800">{allRiskCap}</p>
            </div>
          </div>

          {/* Coverage Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2  px-8 py-6 gap-6">
            {/* What's Covered */}
            <div className="px-6 py-5 bg-[#FDFDFD] border border-[#F3F4F6] rounded-[8px] ">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                What&apos;s Covered
              </h3>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={17}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Covered */}
            <div className="px-6 py-5 bg-[#FDFDFD] border border-[#F3F4F6] rounded-[8px] ">
              <h3 className="text-sm font-bold text-gray-900 mb-4">
                What&apos;s Not Covered
              </h3>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle
                      size={17}
                      className="text-brand-red mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="flex justify-end px-8 py-6 border-t border-[#F3F4F6]">
            <button className="bg-brand-red hover:bg-brand-red/90 active:scale-95 transition-all text-white text-sm font-semibold px-7 py-3 rounded-full shadow-md shadow-red-200">
              Choose this Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
