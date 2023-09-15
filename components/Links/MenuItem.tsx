import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  to: string;
  sidebarExpanded: boolean;
  setSidebarOpen: (open: boolean) => void;
}

function MenuItem({
  title,
  icon,
  to,
  sidebarExpanded,
  setSidebarOpen,
}: MenuItemProps) {
  return (
    <li className="hover:font-bold">
      <Link
        onClick={() => setSidebarOpen(false)}
        href={`/${to.toLowerCase()}`}
        className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light hover:font-bold transition-all"
      >
        <span className="flex items-center text-base  text-gray-900 rounded-lg hover:bg-gray-100  hover:font-bold transition-all">
          {icon}
          <span
            className={`${
              sidebarExpanded
                ? "opacity-0 ml-0 hidden"
                : "opacity-100 ml-3 block"
            }ml-3 whitespace-nowrap `}
          >
            {title}
          </span>
        </span>
      </Link>
    </li>
  );
}

export default MenuItem;
