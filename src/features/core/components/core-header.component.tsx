import { memo } from 'react';

import { cn } from '#/lib/utils';
import { BaseIcon } from '#/features/base/components/base-icon.component';

import type { ComponentProps } from 'react';

export const CoreHeader = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'header'>) {
  return (
    <header className={cn('w-full bg-green-600', className)} {...moreProps}>
      <BaseIcon name='panel-left-dashed' />
    </header>
  );
});
