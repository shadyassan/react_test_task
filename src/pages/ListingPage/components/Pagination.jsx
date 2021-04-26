import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

const Paginate = ({
  current,
  pageLimit,
  totalRecords,
  setPage,
  onShowSizeChange,
}) => {
  return (
    <div className="site-pagination">
      <Pagination
        current={current}
        defaultPageSize={pageLimit}
        onChange={setPage}
        onShowSizeChange={onShowSizeChange}
        total={totalRecords}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </div>
  );
};

Paginate.propTypes = {
  current: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  onShowSizeChange: PropTypes.func.isRequired,
};

export default memo(Paginate);
