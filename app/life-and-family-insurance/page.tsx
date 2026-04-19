import PageHero from "@/components/landing/PageHero";
import PropertyProductsSection from "@/components/property-insurance/PropertyProductsSection";
import OtherInsuranceCategories from "@/components/property-insurance/OtherInsuranceCategories";

export const metadata = {
  title: "Property Insurance | Kolanut Africa",
  description:
    "Our Property Insurance Product reimburses you in the event of damage or theft of your property. It also provides cover for injuries incurred on your property.",
};

const HERO_IMAGE = "";

export default function PropertyInsurancePage() {
  const products = [
    {
      title: "Term Life Plan Insurance",
      description: "This plan is specially designed to provide affordable life insurance to individuals.",
      href: "/life-and-family-insurance/term-life-plan",
    },
    {
      title: "Family Benefits Plan",
      description: "Give your parents the respectful farewell they deserve.",
      href: "/life-and-family-insurance/family-benefits-plan",
    },
   
  ];
  return (
    <main className="min-h-screen bg-page-bg">
      {/* Hero */}
      <PageHero
        title="Life & Family Insurance"
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
