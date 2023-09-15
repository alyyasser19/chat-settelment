"use client";

import { useEffect, useState } from "react";

import Sidenav from "@/components/Sidebar";
import Header from "@/components/Header";
import Provider from "@/utils/Provider";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider>
      <div className="flex h-screen bg-slate-50">
        <div>
          <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <main>{children}</main>
        </div>
      </div>
    </Provider>
  );
}
