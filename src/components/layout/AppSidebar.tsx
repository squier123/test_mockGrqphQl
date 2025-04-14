import React from "react";
import { useLocation } from "@tanstack/react-router";

// ui
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../ui/Sidebar.tsx";

// icons
import { PanelLeftIcon, Users, Server, Shapes } from "lucide-react";

// icons
import Logo from "../../icons/Logo.tsx";

const items = [
  {
    title: "Visits",
    url: "/visits",
    icon: Server,
  },
  {
    title: "Caregivers",
    url: "/caregiver",
    icon: Users,
  },
  {
    title: "Clients",
    url: "/clients",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: Shapes,
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  return (
    <>
      <SidebarMenuButton
        className="absolute z-20 w-10 top-[18px] left-0"
        onClick={() => setOpenMobile(true)}
      >
        <PanelLeftIcon />
      </SidebarMenuButton>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <div className="mb-9">
                  <Logo className="w-20 h-20" />
                </div>
                {items.map((item) => {
                  const isActive = location.pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          className={`flex items-center gap-2 px-1 py-5 mb-3 rounded-md transition ${
                            isActive ? "bg-hover px-4" : "hover:bg-gray-100"
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
