import React, { useState } from 'react';
import Filter from './components/Filter.jsx';
import Paginate from './components/Pagination.jsx';
import PostsList from './components/PostsList.jsx';
import usePosts from '../../hooks/usePosts';

const ListingPage = () => {
  const { posts, users } = usePosts();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(1);

  const pageLimit = 10;
  const startIndex = (current - 1) * pageLimit;

  const onSearch = ({ target }) => setSearch(target.value);

  const onChange = (page) => {
    setCurrent(page);
  };

  let newItems = posts;

  if (search) {
    newItems = posts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  newItems = posts.slice(startIndex, pageLimit);

  return (
    <div className='site-main'>
      <Filter users={users} onChange={onSearch} />
      <PostsList posts={newItems} />
      <Paginate
        initialPage={current}
        pageLimit={pageLimit || 10}
        totalRecords={posts.length}
        onChangePage={onChange}
      />
    </div>
  );
};

export default ListingPage;
