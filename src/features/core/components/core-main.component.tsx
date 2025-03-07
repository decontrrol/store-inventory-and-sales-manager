import { cn } from '#/lib/utils';
import { BaseBackdrop } from '#/features/base/components/base-backdrop.component';

import type { ComponentProps } from 'react';

export function CoreMain({
  className,
  children,
  ...moreProps
}: ComponentProps<'main'>) {
  return (
    <>
      <BaseBackdrop className='fixed left-0 top-0 -z-20 flex h-full w-full' />
      <main
        className={cn(
          'relative flex h-[2000px] min-h-screen w-auto flex-1 flex-col bg-transparent duration-300',
          className,
        )}
        {...moreProps}
      >
        {children}
      </main>
    </>
  );
}

CoreMain.displayName = 'CoreMain';
