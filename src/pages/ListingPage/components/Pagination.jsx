import React, { memo, useState } from 'react';
import { Pagination } from 'antd';

const Paginate = ({ initialPage, pageLimit, totalRecords, onChangePage }) => {
  return (
    <div className='site-pagination'>
      <Pagination
        current={initialPage}
        defaultPageSize={pageLimit}
        onChange={onChangePage}
        simple={false}
        total={totalRecords}
      />
    </div>
  );
};

export default memo(Paginate);
