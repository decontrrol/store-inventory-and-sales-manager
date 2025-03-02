import { createRootRoute } from '@tanstack/react-router';

import { CoreLayout } from '#/features/dashboard/components/core-layout.component';

export const rootRoute = createRootRoute({
  component: CoreLayout,
});
