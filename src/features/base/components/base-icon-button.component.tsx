import { memo } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '#/lib/utils';
import { BaseIcon } from './base-icon.component';

import type { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { IconName } from '../models/base.model';

const variants = cva(
  'inline-flex items-center text-primary-foreground justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-secondary shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-background-hover',
      },
      size: {
        base: 'p-1.5 size-10',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'base',
    },
  },
);

type Props = Omit<ComponentProps<'button'>, 'children'> &
  VariantProps<typeof variants> & {
    name: IconName;
    iconProps?: Omit<ComponentProps<typeof BaseIcon>, 'name'>;
  };

export const BaseIconButton = memo(function ({
  className,
  variant,
  size,
  name,
  iconProps,
  ...moreProps
}: Props) {
  return (
    <button
      className={cn(variants({ variant, size, className }))}
      {...moreProps}
    >
      <BaseIcon name={name} {...iconProps} />
    </button>
  );
});

BaseIconButton.displayName = 'IconButton';
