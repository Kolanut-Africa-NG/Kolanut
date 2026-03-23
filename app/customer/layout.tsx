import CustomerSidebar from "@/components/customer/CustomerSidebar";
import CustomerHeader from "@/components/customer/CustomerHeader";
import { CustomerProvider } from "@/components/customer/CustomerContext";
import "../globals.css";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomerProvider>
      <div className="flex min-h-screen" style={{ backgroundColor: "#f9fafb" }}>
        <CustomerSidebar />
        <div className="flex flex-col flex-1 transition-all duration-300 md:ml-[250px]">
          <CustomerHeader />
          <main className="flex-1 overflow-y-auto" style={{ paddingTop: 64 }}>
            <div className="p-4 md:p-6 lg:p-10">{children}</div>
          </main>
        </div>
      </div>
    </CustomerProvider>
  );
}
