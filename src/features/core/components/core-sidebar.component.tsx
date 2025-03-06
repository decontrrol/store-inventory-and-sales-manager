import { memo } from 'react';

import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'aside'> & {
  isCollapsed?: boolean;
};

export const CoreSidebar = memo(function ({
  className,
  isCollapsed,
  ...moreProps
}: Props) {
  return (
    <aside
      className={cn(
        'bg-sidebar fixed left-0 top-0 z-50 h-screen shrink-0 transition-[width] duration-300',
        isCollapsed ? 'w-sidebar-collapsed' : 'w-sidebar-expanded',
        className,
      )}
      {...moreProps}
    >
      {/* Core Sidebar */}
    </aside>
  );
});

CoreSidebar.displayName = 'CoreSidebar';
