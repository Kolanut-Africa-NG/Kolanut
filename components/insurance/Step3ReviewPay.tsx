"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SummarySection from "@/components/insurance/SummarySection";
import InfoRow from "@/components/insurance/InfoRow";
import StepNavigation from "@/components/insurance/StepNavigation";

interface CostRow {
  label: string;
  value: string;
  hide?: boolean;
}

interface Step3ReviewPayProps {
  summaryRows: CostRow[];
  costRows: CostRow[];
  totalCost: number;
  currencyFormatter: (amount: number) => string;
  currencyCode?: string;
  onPay: () => void;
  onBack: () => void;
  payButtonLabel?: string;
  showCoupon?: boolean;
  onApplyCoupon?: (code: string) => void;
}

export default function Step3ReviewPay({
  summaryRows,
  costRows,
  totalCost,
  currencyFormatter,
  currencyCode = "₦",
  onPay,
  onBack,
  payButtonLabel = "PAY NOW",
  showCoupon = false,
  onApplyCoupon,
}: Step3ReviewPayProps) {
  const [couponInput, setCouponInput] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (couponInput.trim() && onApplyCoupon) {
      onApplyCoupon(couponInput.trim());
      setCouponApplied(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quote Summary */}
        <SummarySection title="Quote Summary">
          <div className="flex flex-col">
            {summaryRows
              .filter((row) => !row.hide)
              .map((row, index) => (
                <InfoRow
                  key={index}
                  label={row.label}
                  value={row.value}
                  border={index < summaryRows.length - 1}
                />
              ))}
          </div>
        </SummarySection>

        {/* Payment */}
        <SummarySection title="Payment">
          <div className="flex flex-col gap-4">
            {/* Coupon Code */}
            {showCoupon && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#374151]">
                  Have a coupon code?
                </label>
                <div className="flex items-center gap-2 h-12 rounded-[10px] border border-[#d1d5db] px-3 shadow-[0_1px_2px_rgba(18,26,43,0.05)]">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 text-sm text-dark-text placeholder:text-[#6b7280] bg-transparent outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="text-sm font-medium text-brand-red hover:text-brand-red/80 transition-colors shrink-0"
                  >
                    {couponApplied ? "Applied" : "Apply"}
                  </button>
                </div>
              </div>
            )}

            {/* Cost Breakdown */}
            <div className="flex flex-col">
              {costRows
                .filter((row) => !row.hide)
                .map((row, index) => (
                  <InfoRow
                    key={index}
                    label={row.label}
                    value={row.value}
                    border={index < costRows.length - 1}
                  />
                ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-normal text-dark-text">
                Total Cost:
              </span>
              <span className="text-xl font-semibold text-brand-red">
                {currencyFormatter(totalCost)}
              </span>
            </div>
          </div>

          {/* Pay Button */}
          <Button
            onClick={onPay}
            className="w-full rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-medium py-3 h-auto text-base tracking-wide mt-4"
          >
            {payButtonLabel}
          </Button>
        </SummarySection>
      </div>

      {/* Go Back */}
      <StepNavigation onBack={onBack}  />
    </div>
  );
}
