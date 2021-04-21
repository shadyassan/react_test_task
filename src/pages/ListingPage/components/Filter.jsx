import React from 'react';
import { Input } from 'antd';

const Filter = ({ onSearch }) => {
  return (
    <div className='site-search'>
      <Input.Search allowClear placeholder='Найти...' onChange={onSearch} />
    </div>
  );
};

export default Filter;
