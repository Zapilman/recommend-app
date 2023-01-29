import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../UI/Card/Card';

interface Props {
  category: any;
}

const CategoryCard: FC<Props> = ({ category }) => {
  return (
    <Link to={'card'}>
      <Card title={category.name} icon={category.icon} />
    </Link>
  );
};

export default CategoryCard;
