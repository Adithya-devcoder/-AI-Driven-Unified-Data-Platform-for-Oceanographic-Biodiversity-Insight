import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: "🌊" },
  { path: "/coral-reefs", label: "Coral Reefs", icon: "🪸" },
  { path: "/biodiversity", label: "Biodiversity", icon: "🐠" },
  { path: "/pollution", label: "Pollution", icon: "🏭" },
  { path: "/climate-impact", label: "Climate Impact", icon: "🌡" },
  { path: "/marine-species", label: "Marine Species", icon: "🐋" },
  { path: "/about", label: "About", icon: "ℹ️" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center gap-1 px-4 py-2 overflow-x-auto">
        <div className="mr-4 flex items-center gap-2 shrink-0">
          <span className="text-2xl">🌊</span>
          <span className="font-display text-sm font-extrabold tracking-tight text-foreground hidden sm:inline">
            Ocean Risk Monitor
          </span>
        </div>
        {NAV_ITEMS.map((item) => {
          const active = location.pathname === item.path;
          return (
            <NavLink key={item.path} to={item.path} className="relative shrink-0">
              <span
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-[11px] tracking-wide transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </span>
              {active && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
