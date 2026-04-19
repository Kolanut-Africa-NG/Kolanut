"use client";

import { useLandlordPolicyStore } from "@/lib/store/landlordPolicyStore";
import type { LandlordPolicyFormData } from "@/lib/store/landlordPolicyStore";
import PropertyHeroSection from "@/components/property-insurance/PropertyHeroSection";
import GenericStepIndicator from "@/components/insurance/GenericStepIndicator";
import Step1ChoosePlan from "@/components/insurance/Step1ChoosePlan";
import Step2ProvideDetails from "@/components/insurance/Step2ProvideDetails";
import Step3ReviewPay from "@/components/insurance/Step3ReviewPay";
import Step4PolicyDocument from "@/components/insurance/Step4PolicyDocument";

const LANDLORD_PLANS = [
  {
    id: "standard",
    name: "Standard Plan",
    description: "Basic coverage for your rental property and loss of rent",
    price: 45000,
    features: [
      "Building coverage up to ₦10 million",
      "Loss of rent protection",
      "Tenant liability coverage",
      "Standard perils included",
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive Plan",
    description: "Complete protection with higher limits and additional benefits",
    price: 85000,
    features: [
      "Building coverage up to ₦25 million",
      "Loss of rent protection",
      "Tenant liability coverage",
      "Fire & allied perils",
      "Burglary and theft coverage",
      "Public liability included",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    description: "Ultimate all-round protection with maximum coverage",
    price: 180000,
    features: [
      "Unlimited building coverage",
      "Extended loss of rent period",
      "Comprehensive tenant liability",
      "All perils coverage",
      "Legal expense coverage",
      "24/7 claims support",
    ],
  },
];

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatUsd(amount: number): string {
  const usd = Math.round(amount / 1500);
  return `$${usd.toLocaleString("en-US")}`;
}

function getPlanLabel(planId: string): string {
  const map: Record<string, string> = {
    standard: "Standard Plan",
    comprehensive: "Comprehensive Plan",
    premium: "Premium Plan",
  };
  return map[planId] || "Landlord Policy";
}

const STEPS = [
  { number: 1, label: "Choose Plan" },
  { number: 2, label: "Provide Details" },
  { number: 3, label: "Review & Pay" },
  { number: 4, label: "Policy Document" },
];

export default function LandlordPolicyPage() {
  const { currentStep, setStep, formData, updateField, reset } =
    useLandlordPolicyStore();

  const handleContinueStep1 = () => setStep(2);
  const handleContinueStep2 = () => setStep(3);
  const handleContinueStep3 = () => setStep(4);
  const handleBack = () => setStep(currentStep - 1);

  const handleBackToHome = () => {
    reset();
    window.location.href = "/";
  };

  const handleSelectPlan = (planId: string, price: number) => {
    updateField("selectedPlan", planId);
    updateField("selectedPlanPrice", price);
  };

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero */}
      <PropertyHeroSection
        title="Landlord Insurance"
        subtitle="Protect your rental property, loss of rent, and tenant-related risks."
      />

      {/* Steps Content */}
      <section className="bg-[#fdfdfd] pb-16">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-20">
          {/* Step Indicator */}
          <GenericStepIndicator currentStep={currentStep} steps={STEPS} />

          {/* Step Content */}
          <div className="transition-all duration-300 mt-8">
            {currentStep === 1 && (
              <Step1ChoosePlan<LandlordPolicyFormData>
                plans={LANDLORD_PLANS}
                formatPrice={formatNaira}
                priceLabel="Annual Premium"
                onSelect={handleSelectPlan}
                onContinue={handleContinueStep1}
                title="Choose the Right Landlord Cover"
                description="Protect your rental property and investment with our comprehensive landlord insurance"
              />
            )}

            {currentStep === 2 && (
              <Step2ProvideDetails<LandlordPolicyFormData>
                personalFields={{
                  firstName: formData.firstName,
                  surname: formData.surname,
                  email: formData.email,
                  phone: formData.phone,
                  dateOfBirth: formData.dateOfBirth,
                  nin: formData.nin,
                  state: formData.state,
                  city: formData.city,
                }}
                locationFields={{
                  address: formData.address,
                }}
                onUpdate={updateField}
                onContinue={handleContinueStep2}
                onBack={handleBack}
                title="Provide Your Details"
                description="Fill in your information to generate your policy quote"
              />
            )}

            {currentStep === 3 && (
              <Step3ReviewPay
                summaryRows={[
                  {
                    label: "Full Name:",
                    value: `${formData.firstName} ${formData.surname}`.trim() || "N/A",
                  },
                  { label: "Insurance Type:", value: "Landlord Insurance" },
                  {
                    label: "Product:",
                    value: getPlanLabel(formData.selectedPlan),
                  },
                  { label: "Coverage Period:", value: "12 Months" },
                ]}
                costRows={[
                  {
                    label: "Premium Cost:",
                    value: formatNaira(formData.selectedPlanPrice || 45000),
                  },
                  { label: "Extra Fee:", value: `₦10` },
                ]}
                totalCost={(formData.selectedPlanPrice || 45000) + 10}
                currencyFormatter={formatNaira}
                currencyCode="₦"
                onPay={handleContinueStep3}
                onBack={handleBack}
                payButtonLabel={`PAY NOW - ${formatUsd((formData.selectedPlanPrice || 45000) + 10)}`}
              />
            )}

            {currentStep === 4 && (
              <Step4PolicyDocument
                policyNumber="KA-09795170"
                fullName={`${formData.firstName} ${formData.surname}`.trim() || "Landlord Name"}
                insuranceType="Landlord Insurance"
                productName={getPlanLabel(formData.selectedPlan)}
                premiumPaid={formatUsd(formData.selectedPlanPrice || 45000)}
                coveragePeriod="12 Months"
                userEmail={formData.email || "your email"}
                onBackToHome={handleBackToHome}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
