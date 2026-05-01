"use client";

import Image from "next/image";
import React from "react";
import { CircleCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import OtherInsuranceCategories from "../property-insurance/OtherInsuranceCategories";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ── Types ────────────────────────────────────────────────────────────────────

interface Benefit {
  text: string;
}

interface CategoryItem {
  label: string;
  icon: React.ReactNode;
}

interface InsurancePolicyLayoutProps {
  // Hero section
  heroCategory: string;
  heroTitle: string;
  heroTitleAccent?: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  onGetQuote?: () => void;

  // Info cards
  benefits: Benefit[];
  documents: Benefit[];

  // Categories section
  categories: CategoryItem[];
  showCategories?: boolean;

  // Comparison table (only for Third Party Auto Base)
  showComparisonTable?: boolean;
}

function BenefitItem({ text }: Benefit) {
  return (
    <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4B5563]">
      <CircleCheck
        fill="#af060d"
        size={20}
        className=" flex-shrink-0 text-white"
      />
      <span>{text}</span>
    </li>
  );
}

function InfoCard({ title, items }: { title: string; items: Benefit[] }) {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#F3F4F6] bg-white p-6">
      <h3 className="mb-6 pl-2 text-lg font-bold text-gray-900">{title}</h3>
      <ul className="flex flex-col gap-4 pl-2">
        {items.map((item, i) => (
          <BenefitItem key={i} {...item} />
        ))}
      </ul>
    </div>
  );
}

// Insurance Comparison Table (for Third Party Auto Base only)
const plans = ["Travelers", "Silver", "Gold"] as const;
type Plan = (typeof plans)[number];

interface BenefitRow {
  benefit: string;
  values: Record<Plan, string>;
}

const benefits: BenefitRow[] = [
  {
    benefit: "Premium",
    values: {
      Travelers: "₦30,000",
      Silver: "₦35,000",
      Gold: "₦60,000",
    },
  },
  {
    benefit: "Third Party Property Damage",
    values: {
      Travelers: "₦3 million",
      Silver: "₦3 million",
      Gold: "₦3 million",
    },
  },
  {
    benefit: "Third Party Bodily Injury & Death",
    values: {
      Travelers: "Unlimited",
      Silver: "Unlimited",
      Gold: "Unlimited",
    },
  },
  {
    benefit: "Own Damage Limit",
    values: {
      Travelers: "₦1m without accompanied 3rd Party",
      Silver: "₦1m without accompanied 3rd Party",
      Gold: "₦2m without accompanied 3rd Party",
    },
  },
  {
    benefit: "Fire",
    values: {
      Travelers: "Limit – ₦500,000",
      Silver: "Limit – ₦500,000",
      Gold: "Limit – ₦1,000,000",
    },
  },
  {
    benefit: "SRCC",
    values: {
      Travelers: "Limit – ₦250,000",
      Silver: "Limit – ₦250,000",
      Gold: "Limit – ₦250,000",
    },
  },
  {
    benefit: "Flood",
    values: {
      Travelers: "Limit – ₦250,000",
      Silver: "Limit – ₦250,000",
      Gold: "Limit – ₦250,000",
    },
  },
  {
    benefit: "Windscreen Damage",
    values: {
      Travelers: "Limit – ₦50,000",
      Silver: "Limit – ₦50,000",
      Gold: "Limit – ₦50,000",
    },
  },
  {
    benefit: "Towing Limit",
    values: {
      Travelers: "Limit – ₦20,000",
      Silver: "Limit – ₦20,000",
      Gold: "Limit – ₦20,000",
    },
  },
  {
    benefit: "Medical Expenses",
    values: {
      Travelers: "Limit – ₦100,000",
      Silver: "Limit – ₦100,000",
      Gold: "Limit – ₦100,000",
    },
  },
  {
    benefit: "Excess",
    values: {
      Travelers: "₦25,000 or 10% of claim whichever is higher",
      Silver: "₦30,000 or 10% of claim, whichever is higher",
      Gold: "₦50,000 or 10% of claim whichever is higher",
    },
  },
  {
    benefit: "Types of Vehicle Covered",
    values: {
      Travelers: "Private vehicles only",
      Silver:
        "This plan provides cover for private vehicles like buses for school, staff, ambulances (excluding fare paying passengers). The maximum limit of passengers for such vehicles/buses is 16 seaters.",
      Gold: "This plan provides cover for private vehicles carrying goods only. The policy covers only small and medium goods carrying vehicles e.g pickup and vans.",
    },
  },
];

function InsuranceTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-white">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="border-b-2 border-border bg-white hover:bg-white">
            <TableHead className="w-[22%] py-5 px-6 text-xs font-semibold uppercase tracking-widest ">
              Benefits
            </TableHead>
            {plans.map((plan) => (
              <TableHead key={plan} className="py-5 px-6">
                <div className="flex items-center gap-2.5">
                  <span className=" text-base font-semibold text-foreground">
                    {plan}
                  </span>
                  <Button
                    size="sm"
                    className="h-7 rounded-full bg-[#c8102e] px-3.5 text-xs font-semibold text-white hover:bg-[#a50d26] focus-visible:ring-[#c8102e]"
                  >
                    Buy Now
                  </Button>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {benefits.map((row, index) => (
            <TableRow
              key={row.benefit}
              className={index % 2 === 1 ? "bg-muted/30" : "bg-white"}
            >
              <TableCell className="py-4 px-6 align-top text-sm font-semibold text-foreground">
                {row.benefit}
              </TableCell>
              {plans.map((plan) => (
                <TableCell
                  key={plan}
                  className="py-4 px-6 align-top text-sm text-[#000000] max-w-[300px] break-words whitespace-normal"
                >
                  <p>{row.values[plan]}</p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function InsurancePolicyLayout({
  heroCategory,
  heroTitle,
  heroTitleAccent,
  heroDescription,
  heroImage,
  heroImageAlt,
  onGetQuote,
  benefits,
  documents,
  categories,
  showCategories = true,
  showComparisonTable = false,
}: InsurancePolicyLayoutProps) {
  return (
    <div className=" antialiased">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[420px] items-center justify-between md:flex-row flex-col-reverse overflow-hidden bg-white gap-6 mx-auto max-w-[1440px] px-4 lg:px-20">
        {/* decorative circle */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-red/5 opacity-50" />

        {/* left: copy */}
        <div className="md:w-6/12 relative z-10 flex flex-col justify-center">
          {/* <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            {heroCategory}
          </p> */}
          <h1 className="mb-5 font-heading md:text-5xl text-2xl font-extrabold leading-[1.1] text-gray-900">
            {heroTitle}
            {heroTitleAccent && (
              <>
                <br />
                <span className="text-brand-red">{heroTitleAccent}</span>
              </>
            )}
          </h1>
          <p className="mb-9  text-[15px] leading-relaxed text-[#4B5563]">
            {heroDescription}
          </p>
          <button
            onClick={onGetQuote}
            className="inline-flex rounded-full w-fit items-center gap-2.5 rounded bg-brand-red px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red/90 active:translate-y-0"
          >
            Get Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* right: image */}
        <div className="relative overflow-hidden md:w-5/12">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="object-cover w-full h-full "
          />
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="grid md:grid-cols-2 grid-cols-1 gap-5 bg-[#FBFBFB] mx-auto max-w-[1440px] px-4 lg:px-20 py-10">
        <InfoCard title="Benefits" items={benefits} />
        <InfoCard title="Documents Required" items={documents} />
      </section>

      {/* ── Comparison Table (Third Party Auto Base only) ── */}
      {showComparisonTable && (
        <section className="bg-[#FBFBFB] mx-auto max-w-[1440px] px-4 lg:px-20 py-10 md:block hidden">
          <InsuranceTable />
        </section>
      )}

      {/* ── Other Categories ── */}
      <OtherInsuranceCategories />
    </div>
  );
}
