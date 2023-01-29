import React from 'react';
import { Link } from 'react-router-dom';

import LikedCategoryItems from '../../components/LikedCategoryItems/LikedCategoryItems';

const Header = () => {
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
      <LikedCategoryItems />
    </header>
  );
};

export default Header;
