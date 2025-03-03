import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';

export function CoreMain({
  className,
  children,
  ...moreProps
}: ComponentProps<'main'>) {
  return (
    <main
      className={cn(
        'relative ml-0 flex h-[2000px] min-h-screen w-full flex-1 flex-col transition-[margin] duration-300',
        className,
      )}
      {...moreProps}
    >
      {children}
    </main>
  );
}
