import React, { useState, useEffect, useRef } from "react";
import Links from "./Links";

import { menuItems } from "@/presets/menuItems";
import ExpandCollapseButton from "@/components/ExpandCollapseButton";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/*Click outside listner*/}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 md:translate-x-0 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 h-screen overflow-hidden overflow-y-scroll md:overflow-y-auto no-scrollbar md:w-64  w-72 bg-white md:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Links */}
        <Links
          menuItems={menuItems}
          sidebarExpanded={sidebarExpanded}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Expand / collapse button */}
        <ExpandCollapseButton
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
        />
      </div>
    </>
  );
};

export default Sidebar;
