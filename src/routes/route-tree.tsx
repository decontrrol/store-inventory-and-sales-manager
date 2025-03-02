import { createRoute, redirect } from '@tanstack/react-router';

import { DashboardPage } from '#/features/dashboard/pages/dashboard.page';
import { rootRoute } from './__root';
import { routes } from './routes';

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: () => {
    throw redirect({ to: routes.dashboard.to });
  },
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routes.dashboard.to,
  component: DashboardPage,
});

const productListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routes.product.to,
}).lazy(() =>
  import('#/features/product/pages/product-list.page').then((d) => d.lazyRoute),
);

export const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  productListRoute,
]);
