import React from 'react';
import BestOfCategories from '../../modules/BestOfCategories/BestOfCategories';
import SelectCategory from '../../modules/SelectCategory/SelectCategory';

const Main = () => {
  return (
    <>
      <SelectCategory />
      <BestOfCategories title="Best of games" />
      <BestOfCategories title="Best of Movies" />
      <BestOfCategories title="Best of Books" />
    </>
  );
};

export default Main;
