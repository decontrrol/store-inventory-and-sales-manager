import { createContext, useEffect, useMemo, useState } from 'react';
import { Theme } from '../models/core.model';

import type { ThemeProviderState } from '../models/core.model';

type Props = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export const storageKeyName = 'sism-ui-theme';

const initialState: ThemeProviderState = {
  theme: Theme.Dark,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function CoreThemeProvider({
  children,
  defaultTheme = Theme.Dark,
  storageKey = storageKeyName,
  ...props
}: Props) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(Theme.Light, Theme.Dark);

    if (theme === Theme.System) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? Theme.Dark
        : Theme.Light;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      },
    }),
    [theme, storageKey],
  );

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

CoreThemeProvider.displayName = 'CoreThemeProvider';

// export const useCoreTheme = () => {
//   const context = useContext(ThemeProviderContext);

//   if (context === undefined)
//     throw new Error('useTheme must be used within a ThemeProvider');

//   return context;
// };
