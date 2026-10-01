import type { CSSProperties, ElementType, ReactNode } from "react";

export interface ShellBranding {
  name?: ReactNode;
  subtitle?: ReactNode;
  href?: string;
  src?: string;
  alt?: string;
}

export interface ShellNavItem {
  id?: string;
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  active?: boolean;
  exact?: boolean;
  onClick?: () => void;
}

export type ShellLinkComponent = ElementType;
export type ShellSidebarPosition = "left" | "right";
export type ShellSidebarVariant = "fixed" | "static" | "overlay";
export type ShellHeaderPosition = "fixed" | "sticky" | "static";

export interface ShellProviderProps {
  children: ReactNode;
  defaultSidebarOpen?: boolean;
  defaultSidebarCollapsed?: boolean;
  defaultMobileOpen?: boolean;
}

export interface ShellContextValue {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  mobileOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  toggleSidebarCollapsed: () => void;
  toggleMobile: () => void;
  closeMobile: () => void;
}

export interface ShellRootProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface ShellHeaderProps {
  branding?: ShellBranding;
  start?: ReactNode;
  center?: ReactNode;
  end?: ReactNode;
  showMenu?: boolean;
  menuLabel?: string;
  position?: ShellHeaderPosition;
  height?: number | string;
  className?: string;
  children?: ReactNode;
}

export interface ShellSidebarProps {
  navigation?: ShellNavItem[];
  pathname?: string;
  linkComponent?: ShellLinkComponent;
  branding?: ShellBranding;
  footer?: ReactNode;
  collapsed?: boolean;
  width?: number | string;
  position?: ShellSidebarPosition;
  variant?: ShellSidebarVariant;
  isActive?: (item: ShellNavItem, pathname?: string) => boolean;
  onNavigate?: (item: ShellNavItem) => void;
  className?: string;
  children?: ReactNode;
}

export interface ShellMobileNavProps extends ShellSidebarProps {
  open?: boolean;
  size?: number | string;
  onClose?: () => void;
}

export interface ShellMainProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export interface ShellFooterProps {
  children?: ReactNode;
  branding?: ShellBranding;
  className?: string;
}

export interface ShellPageProps {
  children: ReactNode;
  className?: string;
  maxWidth?: number | string;
  padding?: number | string;
}

export interface ShellPageHeaderProps {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export interface ShellLayoutProps {
  children: ReactNode;
  branding?: ShellBranding;
  navigation?: ShellNavItem[];
  pathname?: string;
  linkComponent?: ShellLinkComponent;
  headerStart?: ReactNode;
  headerCenter?: ReactNode;
  headerEnd?: ReactNode;
  header?: ReactNode;
  sidebarFooter?: ReactNode;
  footer?: ReactNode;
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  sidebarCollapsed?: boolean;
  sidebarWidth?: number | string;
  contentPadding?: number | string;
  isActive?: (item: ShellNavItem, pathname?: string) => boolean;
  onNavigate?: (item: ShellNavItem) => void;
  className?: string;
}

export interface CenteredShellProps {
  children: ReactNode;
  branding?: ShellBranding;
  headerEnd?: ReactNode;
  maxWidth?: number | string;
  className?: string;
}
