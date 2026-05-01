import PageHero from "@/components/landing/PageHero";
import PropertyProductsSection from "@/components/property-insurance/PropertyProductsSection";
import OtherInsuranceCategories from "@/components/property-insurance/OtherInsuranceCategories";

export const metadata = {
  title: "Property Insurance | Kolanut Africa",
  description:
    "Our Property Insurance Product reimburses you in the event of damage or theft of your property. It also provides cover for injuries incurred on your property.",
};

const HERO_IMAGE = "/images/motor.jpg";

export default function PropertyInsurancePage() {
  const products = [
    {
      title: "Comprehensive Auto Insurance",
      description: "Full cover for your vehicle for a wide range hazards and damages.",
      image: "/images/comprehensive.png",
      href: "/motor-insurance/comprehensive-auto-insurance",
    },
    {
      title: "Third Party Auto Insurance",
      description: "Genuine insurance coverage that protects third parties in the event of an accident.",
        image: "/images/third-party.png",
      href: "/motor-insurance/third-party-auto-insurance",
    },
    {
      title: "Third Party Autobase Insurance",
      description: "Best of both worlds with cover for third parties and limited cover for your vehicle.",
        image: "/images/autobase.png",
      href: "/motor-insurance/third-party-autobase-insurance",
    },
   
  ];
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero */}
      <PageHero
        title="Motor Insurance"
        subtitle="Drive assured knowing you’re financially protected from unforeseen perils. We have an array of options to fit your needs and budget."
        image={HERO_IMAGE}
      />

      {/* Product cards */}
      <PropertyProductsSection products={products} />

      {/* Other categories */}
      <OtherInsuranceCategories />
    </main>
  );
}
