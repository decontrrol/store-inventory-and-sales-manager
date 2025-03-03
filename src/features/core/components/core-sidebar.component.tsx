import { memo } from 'react';

import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';

export const CoreSidebar = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'aside'>) {
  return (
    <aside
      className={cn(
        'w-sidebar-collapsed fixed left-0 top-0 z-50 h-screen shrink-0 bg-red-700 transition-[width] duration-300',
        className,
      )}
      {...moreProps}
    >
      {/* Core Sidebar */}
    </aside>
  );
});
