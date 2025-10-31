import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarProps {
  items: SidebarItem[];
  logo?: string;
  title?: string;
}

export const Sidebar = ({ items, logo = "🎓", title = "Lovable" }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-card min-h-screen">
      {/* Logo */}
      <div className="p-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">{logo}</span>
          <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            {title}
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;

          return (
            <Link key={item.href} to={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 transition-smooth",
                  isActive && "shadow-soft"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
