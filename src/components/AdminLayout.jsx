// Imports
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AdminLayout = () => {
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
          <Link to="/admin">Dashboard</Link>
          <Link to="sales">Sales</Link>
          <Link to="customers">Customers</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
