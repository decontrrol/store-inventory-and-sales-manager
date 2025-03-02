import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '#/routes/route-tree';
import {
  CoreThemeProvider,
  storageKeyName,
} from './core/components/core-theme-provider.component';
import { Theme } from './core/models/core.model';

// Define tanstack router from tree
const router = createRouter({ routeTree });

export function App() {
  return (
    <CoreThemeProvider defaultTheme={Theme.Dark} storageKey={storageKeyName}>
      <RouterProvider router={router} />
    </CoreThemeProvider>
  );
}
