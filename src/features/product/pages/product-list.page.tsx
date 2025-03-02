import { createLazyRoute } from '@tanstack/react-router';

import { routes } from '#/routes/routes';

// eslint-disable-next-line react-refresh/only-export-components
export const lazyRoute = createLazyRoute(routes.product.to)({
  component: ProductListPage,
});

export function ProductListPage() {
  return (
    <div>
      <h2>Product List Page</h2>
    </div>
  );
}
