import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
import { NotFound } from 'pages/NotFound';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav> */}
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </div>
  );
};
