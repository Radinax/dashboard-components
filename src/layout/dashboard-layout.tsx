import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { MainContent } from "@/pages/main-content";

interface DashboardLayoutProps {
  className?: string;
}

export function DashboardLayout({ className }: DashboardLayoutProps) {
  return (
    <div className={cn("flex h-screen bg-background", className)}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
