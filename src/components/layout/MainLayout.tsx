import React from "react";
import { Outlet } from "@tanstack/react-router";
import AppSidebar from "./AppSidebar.tsx";
import { SidebarProvider } from "../../ui/Sidebar.tsx";
import Header from "./Header.tsx";
const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-dark">
        <AppSidebar />
        <div className="flex-1">
          <Header />
          <main className="py-4 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
