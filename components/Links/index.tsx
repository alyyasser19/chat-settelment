import React from "react";

import MenuItem from "@/components/Links/MenuItem";

interface LinksProps {
  menuItems: { title: string; to: string; icon: React.ReactNode }[];
  sidebarExpanded: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Links: React.FC<LinksProps> = ({
  menuItems,
  sidebarExpanded,
  setSidebarOpen,
}) => {
  return (
    <div className="space-y-4">
      <p
        className={`${
          sidebarExpanded ? "md:hidden" : "block"
        } px-2 text-md font-base text-gray-400 uppercase`}
      >
        LINKS
      </p>
      <ul className="space-y-2">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={menuItem.title + index}
            title={menuItem.title}
            icon={menuItem.icon}
            to={menuItem.to}
            sidebarExpanded={sidebarExpanded}
            setSidebarOpen={setSidebarOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export default Links;
