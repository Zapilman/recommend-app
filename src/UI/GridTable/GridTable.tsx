import React from 'react';
import styles from './GridTable.module.scss';
import cn from 'classnames';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  maxCountPerLine?: number;
}

const GridTable = <T,>({
  data,
  renderItem,
  keyExtractor,
  maxCountPerLine = 10,
}: Props<T>) => {
  return (
    <div
      className={cn(styles.gridTable, {
        [styles.fadeOut]: data.length > maxCountPerLine,
      })}
    >
      {data.map((item) => (
        <div className={styles.gridItem} key={keyExtractor(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default GridTable;
