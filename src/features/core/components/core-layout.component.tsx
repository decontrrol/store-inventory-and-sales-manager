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
    <div className='flex items-start justify-start'>
      <CoreSidebar isCollapsed={isLeftSidebarCollapsed} />
      <CoreMain id='main'>
        <CoreHeader />
        <Outlet />
      </CoreMain>
    </div>
  );
}

CoreLayout.displayName = 'CoreLayout';
