import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../store/store';

const Header = () => {
  const value = useAppSelector((state) => state.counter.value);
  return (
    <header>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
      <span>{value}</span>
    </header>
  );
};

export default Header;
