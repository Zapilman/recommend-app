import { useQuery } from '@apollo/client';

import { GET_ALL_CATEGORIES } from '../../api/queries';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import GridTable from '../../UI/GridTable/GridTable';

const SelectCategory = () => {
  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);

  if (loading) {
    return <span>loading</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  return (
    <div>
      <GridTable
        data={data.getAllCategories}
        renderItem={(item) => <CategoryCard category={item} />}
        keyExtractor={({ id }) => id}
      />
    </div>
  );
};

export default SelectCategory;
