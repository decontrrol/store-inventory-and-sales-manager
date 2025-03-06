import { memo, useCallback } from 'react';

import { cn } from '#/lib/utils';
import { BaseIconButton } from '#/features/base/components/base-icon-button.component';
import { useBoundStore } from '../hooks/use-store.hook';

import type { ComponentProps } from 'react';

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  const toggleLeftSidebar = useBoundStore((state) => state.toggleLeftSidebar);

  const handleToggleLeftSideSidebar = useCallback(
    () => toggleLeftSidebar(),
    [toggleLeftSidebar],
  );

  return (
    <header
      className={cn(
        'h-header-full relative flex w-full items-center justify-between px-11 py-2.5',
        'before:absolute before:left-0 before:top-0 before:-z-10 before:h-24 before:w-full before:bg-gradient-to-b before:from-[rgba(0,0,0,1)] before:to-[rgb(0,0,0,0)] before:opacity-10 before:content-[""]',
        className,
      )}
      {...moreProps}
    >
      <div className='flex gap-2.5'>
        <BaseIconButton
          name='panel-left-dashed'
          onPress={handleToggleLeftSideSidebar}
        />
        <BaseIconButton name='sliders-horizontal' />
      </div>
    </header>
  );
});

CoreHeader.displayName = 'CoreHeader';
