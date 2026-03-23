"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = [
  "Home Insurance",
  "Marine (Cargo) Insurance",
  "Travel Insurance",
  "Motor Insurance",
] as const;
type Category = (typeof CATEGORIES)[number];

export default function AdminFaqsPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Home Insurance");

  const recentPremiums = Array(6).fill({
    policyNumber: "KA-09795170",
    insuranceType: "International Travel Insurance",
    premiumPaid: "$5,110",
    datePurchased: "12/8/2025",
  });
  return (
    <div className="flex flex-col gap-4">
      {/* Header card */}
      <div
        className="flex flex-col"
        style={{
          backgroundColor: "#fefefe",
          border: "1px solid #f3f4f6",
          borderRadius: 8,
          padding: "16px",
          gap: 16,
        }}
      >
        {/* Title + button row */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col" style={{ gap: 4 }}>
            <h1
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: 700,
                fontFamily: "var(--font-merriweather), Merriweather, serif",
              }}
            >
              Purchased Premiums
            </h1>
            <p
              style={{
                color: "#6b7280",
                fontSize: 14,
                fontWeight: 400,
                fontFamily:
                  "HelveticaNeue, Helvetica Neue, Helvetica, sans-serif",
              }}
            >
              Manage and purchase your insurance premium
            </p>
          </div>

          <button
            className="flex items-center justify-center px-5 py-2.5 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#af060d",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 500,
              fontFamily:
                "HelveticaNeue, Helvetica Neue, Helvetica, sans-serif",
              border: "none",
              borderRadius: 24,
              whiteSpace: "nowrap",
            }}
          >
            Get Insured
          </button>
        </div>

        {/* Category tabs - scrollable on mobile */}
        <div
          className="flex items-center overflow-x-auto scrollbar-hide"
          style={{
            gap: 8,
            backgroundColor: "#f9fafb",
            borderRadius: 8,
            padding: "4px",
            width: "fit-content",
            maxWidth: "100%",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center transition-all"
                style={{
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: isActive ? "#ffffff" : "transparent",
                  boxShadow: isActive
                    ? "0px 1px 2px rgba(18, 26, 43, 0.06), 0px 1px 2px rgba(18, 26, 43, 0.10)"
                    : "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    color: isActive ? "#af060d" : "#6b7280",
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily:
                      "HelveticaNeue, Helvetica Neue, Helvetica, sans-serif",
                  }}
                >
                  {cat}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentPremiums.map((premium, i) => (
          <Card
            key={i}
            className="border border-[#F3F4F6] bg-[#FEFEFE] rounded-[10px] shadow-none hover:shadow-sm transition-shadow"
          >
            <CardContent className="p-3 space-y-4">
              <div>
                <p className="text-[#4B5563] text-sm">Policy Number:</p>
                <p className="text-[#AF060D] font-semibold text-sm mt-0.5">
                  {premium.policyNumber}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="text-[#4B5563] text-sm">Insurance Type:</p>
                <p className="text-gray-800 font-semibold text-sm mt-0.5">
                  {premium.insuranceType}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="text-[#4B5563] text-sm">Premium Paid:</p>
                <p className="text-gray-800 font-semibold text-sm mt-0.5">
                  {premium.premiumPaid}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="text-[#4B5563] text-sm">Date Purchased:</p>
                <p className="text-gray-800 font-semibold text-sm mt-0.5">
                  {premium.datePurchased}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full border-[#AF060D] text-[#AF060D] hover:bg-red-50 hover:text-red-700 rounded-full text-sm font-semibold h-10 mt-1"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
