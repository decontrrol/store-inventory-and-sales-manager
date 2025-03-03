import { Outlet } from '@tanstack/react-router';

import { CoreSidebar } from './core-sidebar.component';
import { CoreMain } from './core-main.component';
import { CoreHeader } from './core-header.component';

export function CoreLayout() {
  return (
    <div>
      <CoreSidebar />
      <CoreMain id='main'>
        <CoreHeader />
        <Outlet />
      </CoreMain>
    </div>
  );
}
