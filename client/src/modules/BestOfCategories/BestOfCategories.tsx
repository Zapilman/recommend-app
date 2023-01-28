import { FC, useEffect, useRef, useState } from 'react';

import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import { RecommendationPreviewType } from '../../types/Recommendation';
import Divider from '../../UI/Divider/Divider';
import GridTable from '../../UI/GridTable/GridTable';
import styles from './BestOfCategories.module.scss';

interface Props {
  title: string;
}

const recommendation: RecommendationPreviewType = {
  title: 'Dota 2',
  photo: 'https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg',
  countOfLikes: 0,
  type: 'MOBA',
};
const getTableContent = () => {
  const arr = new Array(15).fill('0');
  return arr.map((_, index) => {
    return recommendation;
  });
};

const BestOfCategories: FC<Props> = ({ title }) => {
  const cardRef = useRef<HTMLDivElement>();
  const [gridHeigth, setGridHeight] = useState<number>(0);
  const [isDividerActive, setIsDividerActive] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const { offsetHeight } = cardRef.current;
      setGridHeight(isDividerActive && cardRef.current ? offsetHeight + 50 : 0);
    }, 0);
  }, [isDividerActive]);

  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <div
        className={styles.gridWrapper}
        style={{ height: gridHeigth > 0 ? gridHeigth : 'max-content' }}
      >
        <GridTable
          data={getTableContent()}
          keyExtractor={({ title }) => title}
          renderItem={(item) => (
            <RecommendationCard customRef={cardRef} recommendation={item} />
          )}
        />
      </div>
      {getTableContent().length > 10 && (
        <Divider
          title={title}
          onClick={() => {
            setIsDividerActive((prev) => !prev);
          }}
        />
      )}
    </div>
  );
};

export default BestOfCategories;
