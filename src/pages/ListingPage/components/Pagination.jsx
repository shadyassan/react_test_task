import React, { memo, useState } from 'react';
import { Pagination } from 'antd';

const Paginate = ({
  initialPage,
  pageLimit,
  totalRecords,
  onChangePage,
  onShowSizeChange,
}) => {
  return (
    <div className='site-pagination'>
      <Pagination
        current={initialPage}
        defaultPageSize={pageLimit}
        onChange={onChangePage}
        pageSizeOptions={[5, 10, 15, 20]}
        onShowSizeChange={onShowSizeChange}
        total={totalRecords}
      />
    </div>
  );
};

export default memo(Paginate);
