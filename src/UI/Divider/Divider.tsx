import { FC } from 'react';
import styles from './Divider.module.scss';

interface Props {
  title: string;
  onClick?: VoidFunction;
}

const Divider: FC<Props> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className={styles.divider}>
      <hr />
      <span>{'Show more: ' + title}</span>
    </div>
  );
};

export default Divider;
