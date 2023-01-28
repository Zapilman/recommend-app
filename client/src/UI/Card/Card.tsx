import React, { FC } from 'react';

import styles from './Card.module.scss';

interface Props {
  title: string;
  icon?: string;
}

const Card: FC<Props> = ({ title, icon }) => {
  return (
    <div className={styles.card}>
      <span>{title}</span>
      <img src={icon} alt="category icon" />
    </div>
  );
};

export default Card;
