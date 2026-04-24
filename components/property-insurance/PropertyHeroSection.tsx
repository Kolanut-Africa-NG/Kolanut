"use client";

import { useEffect, useState } from "react";

interface PropertyHeroSectionProps {
  title?: string;
  subtitle?: string;
}

export default function PropertyHeroSection({
  title = "Complete Your Order",
  subtitle = "Follow the Kolanut process to get insured and receive your policy instantly.",
}: PropertyHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full flex items-end min-h-[340px] lg:min-h-[462px]"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.25) 100%), url('/images/property.jpg') center/cover no-repeat`,
      }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-20 pb-10 lg:pb-16 pt-24 lg:pt-32">
        <h1
          className={`font-heading text-4xl lg:text-[60px] font-bold capitalize leading-tight text-white mb-3 lg:mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-base lg:text-lg font-normal text-white transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
