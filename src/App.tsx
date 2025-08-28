import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Feed } from "./pages/Feed";
import { Profile } from "./pages/Profile";
import { Explore } from "./pages/Explore";
import { DirectMessages } from "./pages/DirectMessages";
import { Notifications } from "./pages/Notifications";
import { Settings } from "./pages/Settings";
import { Admin } from "./pages/Admin";
import { Search } from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Feed /></MainLayout>} />
          <Route path="/u/:username" element={<MainLayout><Profile /></MainLayout>} />
          <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
          <Route path="/dm" element={<MainLayout><DirectMessages /></MainLayout>} />
          <Route path="/notifications" element={<MainLayout><Notifications /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
          <Route path="/search" element={<MainLayout><Search /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
