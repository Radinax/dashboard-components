import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
  FileText,
  Calendar,
  Target,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#", current: true },
  { name: "Analytics", icon: BarChart3, href: "#", current: false },
  { name: "Users", icon: Users, href: "#", current: false },
  { name: "Activity", icon: Activity, href: "#", current: false },
  { name: "Reports", icon: FileText, href: "#", current: false },
  { name: "Calendar", icon: Calendar, href: "#", current: false },
  { name: "Goals", icon: Target, href: "#", current: false },
  { name: "Settings", icon: Settings, href: "#", current: false },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col h-full bg-card border-r border-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className={cn("flex items-center", collapsed && "justify-center")}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="ml-3 text-lg font-semibold text-foreground">
              DashBuilder
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-accent transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
              item.current
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent",
              collapsed && "justify-center"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3 truncate">{item.name}</span>}
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div
          className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "space-x-3"
          )}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-muted-foreground truncate">
                john@example.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
