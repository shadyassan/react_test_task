import React, { useState } from 'react';
import Filter from './components/Filter.jsx';
import Paginate from './components/Pagination.jsx';
import PostsList from './components/PostsList.jsx';
import usePosts from '../../hooks/usePosts';

const ListingPage = () => {
  const { posts, users } = usePosts();
  const [{ search, author }, setFilter] = useState({
    search: '',
    author: '',
  });
  const [current, setCurrent] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const startIndex = (current - 1) * pageLimit;
  const endIndex = Math.min(startIndex + pageLimit, posts.length - 1);

  // Filter
  const onSearch = ({ target }) =>
    setFilter((prev) => ({ ...prev, search: target.value }));
  const onChangeSelect = (value) => {
    setFilter((prev) => {
      return { ...prev, author: value };
    });
  };

  const onChange = (page) => setCurrent(page);
  const onShowSizeChange = (current, pageSize) => {
    setCurrent(current);
    setPageLimit(pageSize);
  };

  let items = posts
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .slice(startIndex, endIndex);

  if (author) {
    items = items.filter((item) => item.userId == author);
  }

  return (
    <div className='site-main'>
      <Filter
        users={users}
        onChange={onSearch}
        onChangeSelect={onChangeSelect}
      />
      <PostsList posts={items} />
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
