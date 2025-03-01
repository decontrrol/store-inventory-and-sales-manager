export enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
