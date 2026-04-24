"use client";

import { useState } from "react";
import PlanCard from "@/components/insurance/PlanCard";
import StepNavigation from "@/components/insurance/StepNavigation";
import StepLayout from "@/components/insurance/StepLayout";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features?: string[];
}

interface Step1ChoosePlanProps<T extends Record<string, any>> {
  plans: Plan[];
  formatPrice: (price: number) => string;
  priceLabel?: string;
  onSelect: (planId: string, price: number) => void;
  onContinue: () => void;
  onBack?: () => void;
  title?: string;
  description?: string;
  insuranceType?: string;
}

export default function Step1ChoosePlan<T extends Record<string, any>>({
  plans,
  formatPrice,
  priceLabel,
  onSelect,
  onContinue,
  onBack,
  title = "Choose the Right Cover",
  description = "Compare our flexible plans and find one that fits your needs and budget",
  insuranceType,
}: Step1ChoosePlanProps<T>) {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: Plan) => {
    onSelect(plan.id, plan.price);
    onContinue();
  };

  return (
    <StepLayout title={title} description={description}>
      {/* Plan Cards */}
      <div className="flex flex-col gap-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isExpanded={expandedPlan === plan.id}
            onToggle={() =>
              setExpandedPlan(expandedPlan === plan.id ? null : plan.id)
            }
            onSelect={() => handleSelectPlan(plan)}
            formatPrice={formatPrice}
            priceLabel={priceLabel}
            insuranceType={insuranceType}
          />
        ))}
      </div>

      {/* Navigation */}
      <StepNavigation onBack={onBack} />
    </StepLayout>
  );
}
