import React, { PropsWithChildren, useCallback } from "react";

import Logo from "@/components/Logo";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  setSidebarOpen,
}: PropsWithChildren<HeaderProps>) => {
  const handleSidebarButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setSidebarOpen(!sidebarOpen);
    },
    [sidebarOpen, setSidebarOpen]
  );

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-2 md:px-5">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex flex-row gap-2">
            <button
              className="text-slate-500 hover:text-slate-600 md:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={handleSidebarButtonClick}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <Logo width={40} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
