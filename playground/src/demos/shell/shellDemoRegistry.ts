import AppShellDemo from "./Layouts/AppShellDemo";
import BlankShellDemo from "./Layouts/BlankShellDemo";
import CenteredShellDemo from "./Layouts/CenteredShellDemo";
import DashboardShellDemo from "./Layouts/DashboardShellDemo";
import DrawerHeaderDemo from "./Components/DrawerHeaderDemo";
import PageContainerDemo from "./Components/PageContainerDemo";
import PageHeaderDemo from "./Components/PageHeaderDemo";
import ShellBrandDemo from "./Components/ShellBrandDemo";
import ShellFooterDemo from "./Components/ShellFooterDemo";
import ShellHeaderDemo from "./Components/ShellHeaderDemo";
import ShellHooksDemo from "./Hooks/ShellHooksDemo";
import ShellMainDemo from "./Components/ShellMainDemo";
import ShellMobileNavDemo from "./Components/ShellMobileNavDemo";
import ShellProviderDemo from "./Provider/ShellProviderDemo";
import ShellRootDemo from "./Components/ShellRootDemo";
import ShellSidebarDemo from "./Components/ShellSidebarDemo";
import SidebarFooterDemo from "./Components/SidebarFooterDemo";
import WebsiteShellDemo from "./Layouts/WebsiteShellDemo";

export const shellDemos = [
  { id: "app-shell", label: "AppShell", description: "Base shell provider and root.", component: AppShellDemo },
  { id: "dashboard-shell", label: "DashboardShell", description: "Reusable application dashboard layout.", component: DashboardShellDemo },
  { id: "website-shell", label: "WebsiteShell", description: "Public website layout.", component: WebsiteShellDemo },
  { id: "centered-shell", label: "CenteredShell", description: "Centered focused-page layout.", component: CenteredShellDemo },
  { id: "blank-shell", label: "BlankShell", description: "Minimal shell base.", component: BlankShellDemo },
  { id: "shell-root", label: "ShellRoot", description: "Low-level shell root.", component: ShellRootDemo },
  { id: "shell-brand", label: "ShellBrand", description: "Reusable shell branding.", component: ShellBrandDemo },
  { id: "shell-header", label: "ShellHeader", description: "Reusable header slots and menu.", component: ShellHeaderDemo },
  { id: "shell-sidebar", label: "ShellSidebar", description: "Reusable navigation sidebar.", component: ShellSidebarDemo },
  { id: "shell-mobile-nav", label: "ShellMobileNav", description: "Responsive mobile navigation.", component: ShellMobileNavDemo },
  { id: "shell-main", label: "ShellMain", description: "Main content primitive.", component: ShellMainDemo },
  { id: "shell-footer", label: "ShellFooter", description: "Reusable footer primitive.", component: ShellFooterDemo },
  { id: "drawer-header", label: "DrawerHeader", description: "Compact mobile navigation header.", component: DrawerHeaderDemo },
  { id: "sidebar-footer", label: "SidebarFooter", description: "Sidebar metadata footer.", component: SidebarFooterDemo },
  { id: "page-container", label: "PageContainer", description: "Reusable page boundary.", component: PageContainerDemo },
  { id: "page-header", label: "PageHeader", description: "Reusable page heading.", component: PageHeaderDemo },
  { id: "shell-provider", label: "ShellProvider", description: "Shared shell state provider.", component: ShellProviderDemo },
  { id: "shell-hooks", label: "Shell Hooks", description: "useShell, useSidebar, useLayout, and breakpoint hooks.", component: ShellHooksDemo },
] as const;
