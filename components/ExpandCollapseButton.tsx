import React from "react";

interface ExpandCollapseButtonProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
}

const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <div className="pt-3 md:inline-flex  mt-auto ">
      <div className="flex-1" />
      <div className="px-3 py-2 justify-end">
        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
          <span className="sr-only">Expand / collapse sidebar</span>
          <svg
            className={`w-6 h-6 hidden md:block fill-current  transition-all duration-500 delay-50 ${
              !sidebarExpanded ? "rotate-0" : "rotate-180"
            }`}
            viewBox="0 0 24 24"
          >
            <path
              d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpandCollapseButton;
