import React, { memo } from 'react';
import { Pagination } from 'antd';

const Paginate = ({
  initialPage,
  pageLimit,
  totalRecords,
  onChangePage,
  onShowSizeChange,
}) => {
  return (
    <div className="site-pagination">
      <Pagination
        current={initialPage}
        defaultPageSize={pageLimit}
        onChange={onChangePage}
        onShowSizeChange={onShowSizeChange}
        total={totalRecords}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </div>
  );
};

export default memo(Paginate);
