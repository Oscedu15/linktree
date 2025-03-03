import { Metadata } from "next";
import {  SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/Shared/AdminSidebar/AdminSidebar";

export const metadata: Metadata = {
  title: "TarreTreeClone Home",
  description: "TarreTreeClone Is Your Home",
};

export default function LayoutHome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full bg-[#f3f3f1]">
        <div className="px-3">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
