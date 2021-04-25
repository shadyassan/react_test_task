import React, { useState } from 'react';
import usePosts from '../../hooks/usePosts';
import Filter from './components/Filter.jsx';
import Paginate from './components/Pagination.jsx';
import PostsList from './components/PostsList.jsx';
import NewItem from './components/NewItem.jsx';
import { FullSpinner } from '../../styles/app';

const CURRENT = 1;
const PAGELIMIT = 5;

const ListingPage = () => {
  const { posts, users, loading } = usePosts();
  const [{ search, author }, setFilter] = useState({
    search: '',
    author: '',
  });
  const [current, setCurrent] = useState(CURRENT);
  const [pageLimit, setPageLimit] = useState(PAGELIMIT);

  const onSearch = ({ target }) =>
    setFilter((prev) => ({ ...prev, search: target.value }));

  const onChangeSelect = (value) => {
    setCurrent(CURRENT);
    setFilter((prev) => ({ ...prev, author: value }));
  };

  const onChange = (page) => setCurrent(page);

  const onShowSizeChange = (current, pageSize) => {
    setCurrent(current);
    setPageLimit(pageSize);
  };

  let items = posts;

  if (search) {
    items = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (author) {
    items = items.filter((item) => item.userId == author);
  }

  const startIndex = (current - 1) * pageLimit;
  const endIndex = Math.min(startIndex + pageLimit, items.length);

  return (
    <div className="site-main">
      <NewItem />
      <Filter
        users={users}
        onChange={onSearch}
        onChangeSelect={onChangeSelect}
      />
      {loading ? (
        <FullSpinner />
      ) : (
        <PostsList posts={items.slice(startIndex, endIndex)} />
      )}
      <Paginate
        initialPage={current}
        pageLimit={pageLimit}
        totalRecords={items.length}
        onChangePage={onChange}
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  );
};

export default ListingPage;
