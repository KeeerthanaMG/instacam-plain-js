import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { UploadModal } from "@/components/UploadModal";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar onUploadClick={() => setIsUploadModalOpen(true)} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
        <UploadModal 
          isOpen={isUploadModalOpen} 
          onClose={() => setIsUploadModalOpen(false)} 
        />
      </div>
    </SidebarProvider>
  );
};