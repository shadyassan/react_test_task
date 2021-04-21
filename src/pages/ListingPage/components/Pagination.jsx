import React from 'react';
import { Pagination } from 'antd';

const Paginate = () => {
  return (
    <div className='site-pagination'>
      <Pagination defaultCurrent={1} total={20} />
    </div>
  );
};

export default Paginate;
