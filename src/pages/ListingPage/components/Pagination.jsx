import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

Paginate.propTypes = {
  initialPage: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onShowSizeChange: PropTypes.func.isRequired,
};

export default memo(Paginate);
