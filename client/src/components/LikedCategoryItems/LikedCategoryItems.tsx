import React from 'react';

import { useAppSelector } from '../../store/store';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';

const LikedCategoryItems = () => {
  const value = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <Button title={value.toString()} />
      <Modal />
    </div>
  );
};

export default LikedCategoryItems;
