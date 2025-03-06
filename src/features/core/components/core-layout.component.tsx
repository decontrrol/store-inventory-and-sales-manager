import { Outlet } from '@tanstack/react-router';

import { SidebarState } from '../models/core.model';
import { useBoundStore } from '../hooks/use-store.hook';
import { CoreSidebar } from './core-sidebar.component';
import { CoreMain } from './core-main.component';
import { CoreHeader } from './core-header.component';

export function CoreLayout() {
  const isLeftSidebarCollapsed = useBoundStore(
    (state) => state.leftSidebarState === SidebarState.Collapsed,
  );

  return (
    <div>
      <CoreSidebar isCollapsed={isLeftSidebarCollapsed} />
      <CoreMain id='main' isCollapsed={isLeftSidebarCollapsed}>
        <CoreHeader />
        <Outlet />
      </CoreMain>
    </div>
  );
}

CoreLayout.displayName = 'CoreLayout';
