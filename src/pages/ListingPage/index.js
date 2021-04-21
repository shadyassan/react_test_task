import React, { useState } from 'react';
import Filter from './components/Filter.jsx';
import Paginate from './components/Pagination.jsx';
import PostsList from './components/PostsList.jsx';
import usePosts from '../../hooks/usePosts';

const ListingPage = () => {
  const [search, setSearch] = useState('');
  const { posts, dispatch } = usePosts();

  const onSearch = ({ target }) => setSearch(target.value);

  const newItems = search.length
    ? posts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  return (
    <div className='site-main'>
      <Filter onSearch={onSearch} />
      <PostsList posts={newItems} />
      <Paginate />
    </div>
  );
};

export default ListingPage;
