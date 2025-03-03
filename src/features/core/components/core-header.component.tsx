import { memo } from 'react';

import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  return (
    <header className={cn('h-4 w-full bg-green-600', className)} {...moreProps}>
      header
    </header>
  );
});
