import React, { useState } from 'react';
import usePosts from '../../hooks/usePosts';
import Filter from './components/Filter';
import Paginate from './components/Pagination';
import PostsList from './components/PostsList';
import NewItem from './components/NewItem';
import { FullSpinner } from '../../styles/app';
import { CURRENT, PAGE_LIMIT } from '../../constants';

const ListingPage = () => {
  const { posts, users, loading } = usePosts();

  let items = posts;

  const [{ search, author }, setFilter] = useState({
    search: '',
    author: '',
  });

  const [{ current, pageLimit }, setData] = useState({
    current: CURRENT,
    pageLimit: PAGE_LIMIT,
  });

  let startIndex = (current - 1) * pageLimit;
  let endIndex = Math.min(startIndex + pageLimit, items.length);

  if (search) {
    items = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (author) {
    items = items.filter((item) => item.userId == author);
  }

  const onChange = ({ target }) => {
    setData((prev) => ({ ...prev, current: 1 }));
    setFilter((prev) => ({ ...prev, search: target.value }));
  };

  const onChangeSelect = (value) => {
    setData((prev) => ({ ...prev, current: 1 }));
    setFilter((prev) => ({ ...prev, author: value }));
  };

  const setPage = (current) => setData((prev) => ({ ...prev, current }));
  const onShowSizeChange = (current, pageLimit) =>
    setData((prev) => ({ ...prev, current, pageLimit }));

  return (
    <div className="site-main">
      <NewItem users={users} />
      <Filter
        users={users}
        onChange={onChange}
        onChangeSelect={onChangeSelect}
      />
      {loading ? (
        <FullSpinner />
      ) : (
        <PostsList posts={items.slice(startIndex, endIndex)} />
      )}
      {items.length > 1 && (
        <Paginate
          totalRecords={items.length}
          current={current}
          pageLimit={pageLimit}
          setPage={setPage}
          onShowSizeChange={onShowSizeChange}
        />
      )}
    </div>
  );
};

export default ListingPage;
