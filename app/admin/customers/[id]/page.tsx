"use client";

import { useState } from "react";
import {
  ChevronDown,
  ArrowLeft,
  Download,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function CustomerDetailPage() {
  const [customerOpen, setCustomerOpen] = useState(true);
  const [policiesOpen, setPoliciesOpen] = useState(true);

  const policies = [
    {
      policyNumber: "KA-09795170",
      insuranceType: "International Travel Insurance",
      premiumPaid: "$5,110",
      datePurchased: "12/8/2025",
    },
    {
      policyNumber: "KA-09795170",
      insuranceType: "International Travel Insurance",
      premiumPaid: "$5,110",
      datePurchased: "12/8/2025",
    },
  ];

  return (
    <div className="min-h-screen space-y-6">
      {/* Top Nav */}
      <button className="flex cursor-pointer items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
        <ArrowLeft size={16} />
        Back to Customers
      </button>

      {/* Page Content */}
      <div className=" space-y-6">
        {/* Header */}
        <div className="bg-white rounded-[8px] border border-[#F3F4F6]  p-4">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight font-heading">
            Adeleke Mauteen
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500">KYC Status:</span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
              Completed
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-white border border-[#F3F4F6] p-4 rounded-[10px] space-y-6">
            {/* Customer Details */}
            <div className="bg-[#FEFEFE] rounded-[10px] border border-[#F3F4F6] p-3 overflow-hidden">
              <button
                onClick={() => setCustomerOpen(!customerOpen)}
                className="w-full flex items-center justify-between pb-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-base font-heading font-semibold text-gray-800">
                  Customer Details
                </h2>
                <ChevronDown
                  size={24}
                  className={`text-[#111827] transition-transform duration-200 ${customerOpen ? "rotate-180" : ""}`}
                />
              </button>

              {customerOpen && (
                <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  <Field label="Customer Name" value="Mauteen Adeleke" />
                  <Field label="Email Address" value="Mauteen11@gmail.com" />
                  <Field label="NIN Number" value="1234567890" />
                  <Field label="Phone Number" value="1234567890" />
                  <Field label="State" value="International Travel Insurance" />
                  <Field label="Country" value="$5,110" />
                  <Field
                    label="Street"
                    value="45 Motunde street, Odo road"
                    className="sm:col-span-2"
                  />
                </div>
              )}
            </div>

            {/* Active Policies */}
            <div className="bg-[#FEFEFE] rounded-[10px] border border-[#F3F4F6] p-3 overflow-hidden">
              <button
                onClick={() => setPoliciesOpen(!policiesOpen)}
                className="w-full flex items-center justify-between  pb-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-base font-heading font-semibold text-gray-800">
                  Active Policies
                </h2>
                <ChevronDown
                  size={24}
                  className={`text-[#111827] transition-transform duration-200 ${policiesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {policiesOpen && (
                <div className=" pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {policies.map((policy, i) => (
                      <div
                        key={i}
                        className="rounded-[10px] border border-[#F3F4F6] bg-[#FFFFFF] p-3 space-y-4"
                      >
                        <PolicyRow
                          label="Policy Number:"
                          value={policy.policyNumber}
                        />
                        <PolicyRow
                          label="Insurance Type:"
                          value={policy.insuranceType}
                        />
                        <PolicyRow
                          label="Premium Paid:"
                          value={policy.premiumPaid}
                        />
                        <PolicyRow
                          label="Date Purchased:"
                          value={policy.datePurchased}
                        />
                        <button className="text-base font-semibold text-[#AF060D] hover:text-[#AF060D]/80 transition-colors pt-1">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column — ID Card */}
          <div className="lg:col-span-1 ">
            <div className="bg-white border border-[#F3F4F6] p-4 rounded-[10px] space-y-6 sticky top-6">
              <div className="bg-[#FEFEFE] rounded-[10px] border border-[#F3F4F6] p-3 overflow-hidden  space-y-4">
                <h2 className="text-base font-heading font-semibold text-gray-800 border-b border-gray-100 pb-3">
                  Identification Card
                </h2>

                <IDField label="ID type" value="International passport" />
                <IDField label="Identification Number" value="DT89648802JN" />
                <IDField label="Date of Issue" value="11/11/2025" />
                <IDField label="Expiry date" value="11/11/2025" />

                {/* ID Image Row */}
                <div className="flex items-center justify-between bg-[#F9FAFB] rounded-[10px] border border-[#F3F4F6] p-4 mt-2">
                  <div className="flex items-center gap-3">
                   <FileText size={24} className="text-[#4B5563]" />
                    <div>
                      <p className="text-sm font-medium text-[#111827]">
                        ID Image
                      </p>
                      <p className="text-xs text-[#4B5563]">300 KB</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm text-[#4B5563] mb-1">{label}</p>
      <p className="text-sm font-medium text-[#161616]">{value}</p>
    </div>
  );
}

function IDField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-[#4B5563] mb-1">{label}</p>
      <p className="text-sm font-semibold text-[#161616]">{value}</p>
    </div>
  );
}

function PolicyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#F3F4F6] pb-4">
      <p className="text-sm text-[#4B5563]">{label}</p>
      <p className="text-sm font-semibold text-[#161616] mt-1">{value}</p>
    </div>
  );
}
