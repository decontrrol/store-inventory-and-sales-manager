import { memo } from 'react';

import { cn } from '#/lib/utils';
import { BaseBackdrop } from '#/features/base/components/base-backdrop.component';
import { BaseDivider } from '#/features/base/components/base-divider.component';

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
    <BaseBackdrop
      as='aside'
      className={cn(
        'sticky left-0 top-0 z-50 h-screen shrink-0 self-start bg-sidebar transition-[width] duration-300',
        isCollapsed ? 'w-sidebar-collapsed' : 'w-sidebar-expanded',
        className,
      )}
      variant='sidebar'
      {...moreProps}
    >
      <BaseDivider className='absolute right-0 top-0' orientation='vertical' />
      {/* Core Sidebar */}
    </BaseBackdrop>
  );
});

CoreSidebar.displayName = 'CoreSidebar';
