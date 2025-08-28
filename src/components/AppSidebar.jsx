import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Compass,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
  Settings,
  Shield
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Search", url: "/search", icon: Search },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Messages", url: "/dm", icon: MessageCircle },
  { title: "Notifications", url: "/notifications", icon: Heart },
  { title: "Profile", url: "/u/johndoe", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Admin", url: "/admin", icon: Shield },
];

export function AppSidebar({ onUploadClick }) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={`${isCollapsed ? "w-20" : "w-64"} transition-all duration-300`} collapsible="icon">
      <SidebarContent className="border-r border-border">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h1 className={`font-bold text-2xl ${isCollapsed ? "text-center" : ""}`}>
            {isCollapsed ? "I" : "Instacam"}
          </h1>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`w-full justify-start px-6 py-3 text-base ${
                      isActive(item.url) 
                        ? "bg-accent text-accent-foreground font-medium" 
                        : "hover:bg-accent/50"
                    }`}
                  >
                     <NavLink to={item.url}>
                       <item.icon className={`h-6 w-6 ${isCollapsed ? "mx-auto" : "mr-4"}`} />
                       {!isCollapsed && <span>{item.title}</span>}
                     </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Create Post Button */}
              <SidebarMenuItem>
                 <SidebarMenuButton 
                   onClick={onUploadClick}
                   className="w-full justify-start px-6 py-3 text-base hover:bg-accent/50"
                 >
                   <PlusSquare className={`h-6 w-6 ${isCollapsed ? "mx-auto" : "mr-4"}`} />
                   {!isCollapsed && <span>Create</span>}
                 </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}