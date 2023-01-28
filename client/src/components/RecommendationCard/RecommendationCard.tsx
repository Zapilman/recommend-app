import { FC } from 'react';
import { increment } from '../../store/slices/conterSlice';
import { useAppDispatch } from '../../store/store';
import { RecommendationPreviewType } from '../../types/Recommendation';
import styles from './RecommendationCard.module.scss';

interface Props {
  recommendation: RecommendationPreviewType;
  customRef?: any;
}

const RecommendationCard: FC<Props> = ({ recommendation, customRef }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      ref={customRef}
      className={styles.card}
      onClick={() => dispatch(increment())}
    >
      <img
        src={recommendation.photo}
        alt={recommendation.title}
        onLoad={() => {
          console.log('loaded');
        }}
      />
      <h6>{recommendation.title}</h6>
      <span>{recommendation.countOfLikes}</span>
      <span>{recommendation.type}</span>
    </div>
  );
};

export default RecommendationCard;
