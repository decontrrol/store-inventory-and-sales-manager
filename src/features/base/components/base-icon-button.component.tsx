import { memo } from 'react';
import { cva } from 'class-variance-authority';
import {
  Button as AriaButton,
  composeRenderProps,
} from 'react-aria-components';

import { cn } from '#/lib/utils';
import { BaseIcon } from './base-icon.component';

import type { ComponentProps } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { VariantProps } from 'class-variance-authority';
import type { IconName } from '../models/base.model';

const variants = cva(
  [
    'inline-flex items-center text-primary-foreground justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    // disabled
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
    // focus visible
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
    // resets
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-secondary shadow-sm data-[hovered]:bg-secondary/80',
        ghost: 'data-[hovered]:bg-background-hover',
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

type Props = Omit<AriaButtonProps, 'children'> &
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
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(variants({ variant, size, className })),
      )}
      {...moreProps}
    >
      <BaseIcon name={name} {...iconProps} />
    </AriaButton>
  );
});

BaseIconButton.displayName = 'IconButton';
