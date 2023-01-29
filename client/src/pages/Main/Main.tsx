import React from 'react';

import BestOfCategories from '../../modules/BestOfCategories/BestOfCategories';
import SelectCategory from '../../modules/SelectCategory/SelectCategory';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main_container}>
      <SelectCategory />
      <BestOfCategories title="Best of games" />
      <BestOfCategories title="Best of Movies" />
      <BestOfCategories title="Best of Books" />
    </div>
  );
};

export default Main;
