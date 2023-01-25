import React, { FC } from 'react';
import styles from './GridTable.module.scss';

interface IGridTableProps {
  items: React.ReactNode;
}

const GridTable: FC<IGridTableProps> = ({ items }) => {
  return <div className={styles.gridTable}>{items}</div>;
};

export default GridTable;
