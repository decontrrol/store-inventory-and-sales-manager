import { Link, Outlet } from '@tanstack/react-router';

// TEMP
const activeProps = {
  className: 'underline',
};

export function CoreLayout() {
  return (
    <div>
      <nav>
        <ul className='flex items-center gap-2.5'>
          <li>
            <Link to='/dashboard' activeProps={activeProps}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/products' activeProps={activeProps}>
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
