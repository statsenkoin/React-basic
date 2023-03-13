// Imports
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    //   Container
    <div>
      {/* Header */}
      <div>
        {/* Logo */}
        <div>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>

          <Link to="/admin">Dashboard</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
