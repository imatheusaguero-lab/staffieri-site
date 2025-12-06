
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function DashboardMenuItem({ title, onClick, children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);

  const hasChildren = !!children;

  return (
    <div className="dashboard-menu-option">

      {/* TÍTULO DO ITEM */}
      <div 
        className="dashboard-menu-option-title"
        onClick={hasChildren ? toggle : onClick}
      >
        <h3>{title}</h3>

        {hasChildren && (
          <button aria-label="Open submenu">
            {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        )}
      </div>

      {/* SUBMENU (caso exista) */}
      {hasChildren && (
        <div
          className={`dashboard-menu-option-subtitles ${open ? "open" : ""}`}
        >
          {children}
        </div>
      )}

    </div>
  );
}
