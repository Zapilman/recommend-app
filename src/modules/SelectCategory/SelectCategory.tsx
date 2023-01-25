import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import GridTable from '../../UI/GridTable/GridTable';

const SelectCategory = () => {
  const category = {
    title: 'Games',
    icon: 'https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg',
  };
  const getTableContent = () => {
    const arr = ['asda', 'asdasd', 'asdas', 'asdqweqwe', 'qweasda'];
    return arr.map((_, index) => {
      return <CategoryCard key={index} category={category} />;
    });
  };
  return (
    <div>
      <GridTable items={getTableContent()} />
    </div>
  );
};

export default SelectCategory;
