
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  BarChart,
  Bell,
  HelpCircle,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import agriLogo from '@/assets/agri-logo.svg';
import { useAppSettings } from '@/contexts/AppSettingsContext';

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  collapsed: boolean;
};

const NavItem = ({ href, icon, title, collapsed }: NavItemProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        isActive 
          ? "bg-agri-primary text-white" 
          : "hover:bg-agri-primary/10 text-muted-foreground hover:text-foreground",
        collapsed && "justify-center px-0"
      )}
    >
      <span className="flex shrink-0 items-center justify-center">
        {icon}
      </span>
      {!collapsed && <span>{title}</span>}
    </NavLink>
  );
};

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useAppSettings();
  
  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background sticky top-0 h-screen transition-all duration-300",
        sidebarCollapsed ? "w-[60px]" : "w-[240px]"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <img 
            src={agriLogo} 
            alt="AgriSavant" 
            className="h-6 w-6"
          />
          {!sidebarCollapsed && <span className="text-agri-primary">AgriSavant</span>}
        </NavLink>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto h-8 w-8"
          onClick={toggleSidebarCollapsed}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-2 px-2">
          <div className="mb-2">
            <div className={cn(
              "mb-1 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground",
              sidebarCollapsed && "flex justify-center px-0"
            )}>
              {!sidebarCollapsed && "MENU"}
              {sidebarCollapsed && <MenuIcon className="h-4 w-4" />}
            </div>
            <div className="grid gap-1">
              <NavItem
                href="/"
                icon={<Home className="h-4 w-4" />}
                title="Dashboard"
                collapsed={sidebarCollapsed}
              />
              <NavItem
                href="/cobertura"
                icon={<Calendar className="h-4 w-4" />}
                title="Cobertura días"
                collapsed={sidebarCollapsed}
              />
              <NavItem
                href="/venta-proyectada"
                icon={<BarChart className="h-4 w-4" />}
                title="Venta proyectada"
                collapsed={sidebarCollapsed}
              />
              <NavItem
                href="/notificaciones"
                icon={<Bell className="h-4 w-4" />}
                title="Notificaciones"
                collapsed={sidebarCollapsed}
              />
            </div>
          </div>
          <div>
            <div className={cn(
              "mb-1 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground",
              sidebarCollapsed && "flex justify-center px-0"
            )}>
              {!sidebarCollapsed && "SUPPORT"}
              {sidebarCollapsed && <HelpCircle className="h-4 w-4" />}
            </div>
            <div className="grid gap-1">
              <NavItem
                href="/help"
                icon={<HelpCircle className="h-4 w-4" />}
                title="Helps"
                collapsed={sidebarCollapsed}
              />
              <NavItem
                href="/integration"
                icon={<Calendar className="h-4 w-4" />}
                title="Integration"
                collapsed={sidebarCollapsed}
              />
              <NavItem
                href="/settings"
                icon={<Settings className="h-4 w-4" />}
                title="Settings"
                collapsed={sidebarCollapsed}
              />
            </div>
          </div>
        </nav>
      </ScrollArea>
    </div>
  );
}
