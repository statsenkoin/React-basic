import { Routes, Route } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
import { ProductDetails } from 'pages/ProductDetails';
import { NotFound } from 'pages/NotFound';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';
import { AdminLayout } from './AdminLayout';

// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: red;
//   }
// `;

export const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav> */}
      {/* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h3>Dashboard</h3>} />
          <Route path="sales" element={<h3>Sales</h3>} />
          <Route path="customers" element={<h3>Customers</h3>} />
        </Route>
      </Routes>
    </div>
  );
};
