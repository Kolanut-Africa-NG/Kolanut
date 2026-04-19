"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface StepNavigationProps {
  onBack?: () => void;
  onContinue: () => void;
  continueLabel?: string;
  showBack?: boolean;
  backLabel?: string;
  fullWidthButton?: boolean;
}

export default function StepNavigation({
  onBack,
  onContinue,
  continueLabel = "Continue",
  showBack = true,
  backLabel = "Go Back",
  fullWidthButton = false,
}: StepNavigationProps) {
  return (
    <div className={`flex items-center ${fullWidthButton ? 'justify-center' : 'justify-between'}`}>
      {showBack && onBack ? (
        <Button
          variant="outline"
          onClick={onBack}
          className="rounded-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-medium px-8 py-3 h-auto transition-colors"
        >
          {backLabel}
        </Button>
      ) : (
        <div className="flex-1" />
      )}
      <Button
        onClick={onContinue}
        className="rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-medium px-8 py-3 h-auto"
      >
        {continueLabel}
      </Button>
    </div>
  );
}
