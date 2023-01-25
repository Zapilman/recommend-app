import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
