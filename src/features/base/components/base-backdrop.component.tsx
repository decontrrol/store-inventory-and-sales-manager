import { cva } from 'class-variance-authority';

import { cn } from '#/lib/utils';

import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const variants = cva('', {
  variants: {
    variant: {
      main: 'bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.03)_0px,rgba(0,0,0,0.03)_4px,rgba(0,0,0,0)_5px,rgba(0,0,0,0)_10px)]',
      sidebar:
        'bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_4px,rgba(0,0,0,0)_5px,rgba(0,0,0,0)_10px)]',
    },
  },
  defaultVariants: { variant: 'main' },
});

type Props = ComponentPropsWithoutRef<'div' | 'aside' | 'main'> &
  VariantProps<typeof variants> & {
    as?: 'div' | 'aside' | 'main';
  };

export function BaseBackdrop({
  as: Component = 'div',
  className,
  variant,
  ...moreProps
}: Props) {
  return (
    <Component
      className={cn(variants({ variant, className }))}
      {...moreProps}
    />
  );
}

BaseBackdrop.displayName = 'BaseBackdrop';
