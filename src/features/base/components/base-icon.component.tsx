import { memo, useMemo } from 'react';
import { PanelLeftDashed } from 'lucide-react';

import type {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import type { LucideProps } from 'lucide-react';
import type { IconName } from '../models/base.model';

type Props = ComponentProps<
  ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
> & {
  name: IconName;
};

export const BaseIcon = memo(function ({ name, size, ...moreProps }: Props) {
  const Icon = useMemo(() => {
    switch (name) {
      case 'panel-left-dashed':
        return PanelLeftDashed;
    }
  }, [name]);

  return <Icon size={size || 24} {...moreProps} />;
});
