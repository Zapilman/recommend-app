import React, { FC } from 'react';

import Card from '../../UI/Card/Card';

interface Props {
  category: any;
}

const CategoryCard: FC<Props> = ({ category }) => {
  return <Card title={category.title} icon={category.icon} />;
};

export default CategoryCard;
