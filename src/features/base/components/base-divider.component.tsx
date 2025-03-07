import { memo } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '#/lib/utils';

import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';

const variants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'h-0.5 w-full flex-col',
      vertical: 'h-full w-0.5',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type Props = Omit<ComponentProps<'div'>, 'children'> &
  VariantProps<typeof variants>;

export const BaseDivider = memo(function ({
  className,
  orientation,
  ...moreProps
}: Props) {
  return (
    <div className={cn(variants({ orientation, className }))} {...moreProps}>
      <div className='h-full w-full bg-[#121212]' />
      <div className='h-full w-full bg-[#595959]' />
    </div>
  );
});

BaseDivider.displayName = 'BaseDivider';
