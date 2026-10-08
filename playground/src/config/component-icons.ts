export interface ComponentIconConfig {
  icon: string;
  color: string;
}

export const DEFAULT_COMPONENT_ICON = "AppsIcon";

export const DEFAULT_COMPONENT_ICON_COLOR =
  "var(--shivanya-color-primary)";

export const componentIcons: Record<
  string,
  ComponentIconConfig
> = {
  BarChart: {
    icon: "ChartBarIcon",
    color: "#df3a3a",
  },

  DonutChart: {
    icon: "DonutIcon",
    color: "#51ec7e",
  },

  PieChart: {
    icon: "ChartPieIcon",
    color: "#8e29d6",
  },

  Accordion: {
    icon: "ChevronDownIcon",
    color: "#e5d143",
  },

  AnimatedNumber: {
    icon: "ActivityIcon",
    color: "#6ad2e7",
  },

  Avatar: {
    icon: "UserIcon",
    color: "#e83094",
  },

  Calendar: {
    icon: "CalendarIcon",
    color: "#7de05c",
  },

  Card: {
    icon: "CardIcon",
    color: "#271fe0",
  },

  Chip: {
    icon: "ChipIcon",
    color: "#e17a47",
  },

  DataGrid: {
    icon: "GridIcon",
    color: "#63eeba",
  },

  EmptyState: {
    icon: "EmptyStateIcon",
    color: "#9b4de8",
  },

  List: {
    icon: "ListIcon",
    color: "#e75d5d",
  },

  Statistic: {
    icon: "AnalyticsIcon",
    color: "#35c9a3",
  },

  Table: {
    icon: "TableIcon",
    color: "#d94fe8",
  },

  Timeline: {
    icon: "ActivityIcon",
    color: "#4d91e8",
  },

  TreeView: {
    icon: "LayersIcon",
    color: "#e8a63d",
  },

  Alert: {
    icon: "AlertCircleIcon",
    color: "#e83f62",
  },

  ConfirmDialog: {
    icon: "CheckCircleIcon",
    color: "#36c978",
  },

  Dialog: {
    icon: "DialogIcon",
    color: "#7a55e8",
  },

  LoadingOverlay: {
    icon: "LoaderIcon",
    color: "#e86c3f",
  },

  Modal: {
    icon: "WindowIcon",
    color: "#35a9d6",
  },

  Notification: {
    icon: "BellIcon",
    color: "#d946a8",
  },

  Popover: {
    icon: "PopoverIcon",
    color: "#5d8de8",
  },

  Toast: {
    icon: "BellIcon",
    color: "#e8b23f",
  },

  Tooltip: {
    icon: "TooltipIcon",
    color: "#36c99b",
  },

  Autocomplete: {
    icon: "SearchIcon",
    color: "#e84b4b",
  },

  Checkbox: {
    icon: "CheckIcon",
    color: "#4de87a",
  },

  DatePicker: {
    icon: "CalendarIcon",
    color: "#944de8",
  },

  DateRangePicker: {
    icon: "CalendarRangeIcon",
    color: "#e87d4d",
  },

  ErrorMessage: {
    icon: "AlertCircleIcon",
    color: "#3eaae8",
  },

  FileUpload: {
    icon: "UploadIcon",
    color: "#e84da0",
  },

  FormField: {
    icon: "EditIcon",
    color: "#6a5de8",
  },

  FormGroup: {
    icon: "LayersIcon",
    color: "#e8a54d",
  },

  HelperText: {
    icon: "QuestionMarkCircleIcon",
    color: "#3ed1b0",
  },

  Input: {
    icon: "EditIcon",
    color: "#e84d62",
  },

  Label: {
    icon: "TagIcon",
    color: "#56a4e8",
  },

  NumberInput: {
    icon: "HashIcon",
    color: "#d84de8",
  },

  OtpInput: {
    icon: "KeyIcon",
    color: "#70d94d",
  },

  PasswordInput: {
    icon: "LockIcon",
    color: "#e8784d",
  },

  Radio: {
    icon: "RadioIcon",
    color: "#4d8fe8",
  },

  Select: {
    icon: "ChevronDownIcon",
    color: "#e84da8",
  },

  Switch: {
    icon: "ToggleIcon",
    color: "#7650e8",
  },

  Textarea: {
    icon: "FileTextIcon",
    color: "#e8a74d",
  },

  Badge: {
    icon: "BadgeIcon",
    color: "#38c99a",
  },

  Button: {
    icon: "MousePointerIcon",
    color: "#e84b4b",
  },

  Divider: {
    icon: "MinusIcon",
    color: "#4dafe8",
  },

  IconButton: {
    icon: "MousePointerIcon",
    color: "#d94de8",
  },

  Link: {
    icon: "LinkIcon",
    color: "#67d94d",
  },

  Logo: {
    icon: "AppsIcon",
    color: "#e8844d",
  },

  Progress: {
    icon: "ActivityIcon",
    color: "#4d83e8",
  },

  Skeleton: {
    icon: "ActivityIcon",
    color: "#e84da2",
  },

  Spinner: {
    icon: "LoaderIcon",
    color: "#7951e8",
  },

  Typography: {
    icon: "TypeIcon",
    color: "#e8ad4d",
  },

  AspectRatio: {
    icon: "ExpandIcon",
    color: "#38c9ad",
  },

  Box: {
    icon: "BoxIcon",
    color: "#e84d56",
  },

  Container: {
    icon: "ContainerIcon",
    color: "#4d9de8",
  },

  Flex: {
    icon: "LayoutIcon",
    color: "#d64de8",
  },

  Grid: {
    icon: "GridIcon",
    color: "#70d94d",
  },

  Spacer: {
    icon: "ExpandIcon",
    color: "#e88b4d",
  },

  Stack: {
    icon: "LayersIcon",
    color: "#4d76e8",
  },

  Carousel: {
    icon: "ImagesIcon",
    color: "#e84da5",
  },

  Image: {
    icon: "ImageIcon",
    color: "#8050e8",
  },

  ImageCropper: {
    icon: "CropIcon",
    color: "#e8a94d",
  },

  Video: {
    icon: "VideoIcon",
    color: "#39c9a3",
  },

  Breadcrumb: {
    icon: "ChevronRightIcon",
    color: "#e84d5e",
  },

  Dropdown: {
    icon: "ChevronDownIcon",
    color: "#4d9fe8",
  },

  Menu: {
    icon: "MenuIcon",
    color: "#d84de8",
  },

  Navbar: {
    icon: "NavbarIcon",
    color: "#6ed94d",
  },

  Pagination: {
    icon: "ListIcon",
    color: "#e88c4d",
  },

  Sidebar: {
    icon: "SidebarIcon",
    color: "#4d7ce8",
  },

  Stepper: {
    icon: "ListIcon",
    color: "#e84da5",
  },

  Tabs: {
    icon: "TabsIcon",
    color: "#8050e8",
  },

  CommandPalette: {
    icon: "CommandPaletteIcon",
    color: "#e8aa4d",
  },

  ContextMenu: {
    icon: "MenuIcon",
    color: "#39c9a3",
  },

  Drawer: {
    icon: "PanelRightIcon",
    color: "#e84d5e",
  },

  Sheet: {
    icon: "LayersIcon",
    color: "#4d9fe8",
  },

  ClickAwayListener: {
    icon: "MousePointerIcon",
    color: "#d84de8",
  },

  CopyButton: {
    icon: "CopyIcon",
    color: "#6ed94d",
  },

  FocusTrap: {
    icon: "FocusIcon",
    color: "#e88c4d",
  },

  Portal: {
    icon: "AppsIcon",
    color: "#4d7ce8",
  },

  ScrollArea: {
    icon: "ScrollIcon",
    color: "#e84da5",
  },

  ThemeToggle: {
    icon: "SunIcon",
    color: "#8050e8",
  },

  VisuallyHidden: {
    icon: "EyeOffIcon",
    color: "#e8aa4d",
  },

  DrawerHeader: {
    icon: "PanelRightIcon",
    color: "#e84d5e",
  },

  PageContainer: {
    icon: "ContainerIcon",
    color: "#4d9de8",
  },

  PageHeader: {
    icon: "LayoutIcon",
    color: "#d64de8",
  },

  ShellBrand: {
    icon: "AppsIcon",
    color: "#e8844d",
  },

  ShellFooter: {
    icon: "PanelBottomIcon",
    color: "#39c9a3",
  },

  ShellHeader: {
    icon: "NavbarIcon",
    color: "#6ed94d",
  },

  ShellMain: {
    icon: "LayoutIcon",
    color: "#8050e8",
  },

  ShellMobileNav: {
    icon: "CompassIcon",
    color: "#e8aa4d",
  },

  ShellRoot: {
    icon: "BoxIcon",
    color: "#e84d56",
  },

  ShellSidebar: {
    icon: "PanelLeftIcon",
    color: "#4d7ce8",
  },

  SidebarFooter: {
    icon: "PanelBottomIcon",
    color: "#e84da5",
  },
  AppShell: { icon: "AppsIcon", color: "#e8844d" },
  BlankShell: { icon: "BoxIcon", color: "#4d9de8" },
  CenteredShell: { icon: "FocusIcon", color: "#8b5cf6" },
  DashboardShell: { icon: "LayoutIcon", color: "#22c55e" },
  WebsiteShell: { icon: "NavbarIcon", color: "#e84d62" },
  ShellProvider: { icon: "SettingsIcon", color: "#06b6d4" },
  ShellHooks: { icon: "BoltIcon", color: "#e8aa4d" },
  AuthProvider: {
    icon: "ShieldCheckIcon",
    color: "#06b6d4",
  },

  Connections: {
    icon: "LinkIcon",
    color: "#4d9fe8",
  },

  ForgotPassword: {
    icon: "LockIcon",
    color: "#e8784d",
  },

  Login: {
    icon: "LoginIcon",
    color: "#22c55e",
  },

  Profile: {
    icon: "UserIcon",
    color: "#8b5cf6",
  },

  Register: {
    icon: "UserPlusIcon",
    color: "#38c99a",
  },

  RegisterEmail: {
    icon: "UserPlusIcon",
    color: "#e84da5",
  },

  ResetPassword: {
    icon: "KeyIcon",
    color: "#e8a54d",
  },

  Security: {
    icon: "ShieldCheckIcon",
    color: "#e83f62",
  },

  Sessions: {
    icon: "MonitorIcon",
    color: "#4d91e8",
  },

  Settings: {
    icon: "SettingsIcon",
    color: "#e8aa4d",
  },

  VerifyEmail: {
    icon: "MailIcon",
    color: "#36c978",
  },

  AccountOverview: {
    icon: "HomeIcon",
    color: "#a855f7",
  },
};

export const categoryIcons: Record<
  string,
  string
> = {
  Charts: "ChartBarIcon",
  "Data Display": "AnalyticsIcon",
  Feedback: "NotificationIcon",
  Forms: "EditIcon",
  Foundation: "FoundationIcon",
  Layout: "AppsIcon",
  Media: "ImageIcon",
  Navigation: "CompassIcon",
  Overlays: "LayersIcon",
  Utilities: "SettingsIcon",

  Components: "FoundationIcon",
  Hooks: "BoltIcon",
  Layouts: "LayoutIcon",
  Provider: "SettingsIcon",
};

export const categoryIconColors: Record<
  string,
  string
> = {
  Charts: "#3b82f6",
  "Data Display": "#8b5cf6",
  Feedback: "#f97316",
  Forms: "#22c55e",
  Foundation: "#06b6d4",
  Layout: "#ec4899",
  Media: "#eab308",
  Navigation: "#14b8a6",
  Overlays: "#ef4444",
  Utilities: "#a855f7",

  Components: "#a855f7",
  Hooks: "#e8aa4d",
  Layouts: "#3b82f6",
  Provider: "#22c55e",
};

export function getComponentIconName(
  componentName: string,
  categoryName: string,
): string {
  return (
    componentIcons[componentName]?.icon ??
    categoryIcons[categoryName] ??
    DEFAULT_COMPONENT_ICON
  );
}

export function getComponentIconColor(
  componentName: string,
  categoryName: string,
): string {
  return (
    componentIcons[componentName]?.color ??
    categoryIconColors[categoryName] ??
    DEFAULT_COMPONENT_ICON_COLOR
  );
}

export function getCategoryIconName(
  categoryName: string,
): string {
  return (
    categoryIcons[categoryName] ??
    DEFAULT_COMPONENT_ICON
  );
}

export function getCategoryIconColor(
  categoryName: string,
): string {
  return (
    categoryIconColors[categoryName] ??
    DEFAULT_COMPONENT_ICON_COLOR
  );
}