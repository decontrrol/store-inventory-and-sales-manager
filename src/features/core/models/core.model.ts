export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export enum SidebarState {
  Collapsed = 0,
  Expanded,
}

export type CoreSlice = {
  leftSidebarState: SidebarState;
  rightSidebarState: SidebarState;
  toggleLeftSidebar: (state?: SidebarState) => void;
  toggleRightSidebar: (state?: SidebarState) => void;
};
