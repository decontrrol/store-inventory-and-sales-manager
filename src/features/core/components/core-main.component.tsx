import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'main'> & {
  isCollapsed?: boolean;
};

export function CoreMain({
  className,
  children,
  isCollapsed,
  ...moreProps
}: Props) {
  return (
    <main
      className={cn(
        'relative flex h-[2000px] min-h-screen w-auto flex-1 flex-col transition-[margin] duration-300',
        isCollapsed ? 'ml-sidebar-collapsed' : 'ml-sidebar-expanded',
        className,
      )}
      {...moreProps}
    >
      {children}
    </main>
  );
}

CoreMain.displayName = 'CoreMain';
