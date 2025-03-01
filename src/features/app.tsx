import {
  CoreThemeProvider,
  storageKeyName,
} from './core/components/core-theme-provider.component';
import { Theme } from './core/models/core.model';

export function App() {
  return (
    <CoreThemeProvider defaultTheme={Theme.Dark} storageKey={storageKeyName}>
      <div>
        <h1>Store Inventory and Sales Manager</h1>
        <span>Store Inventory and Sales Manager</span>
      </div>
    </CoreThemeProvider>
  );
}
