import React, { useState } from 'react';
import Paginate from './components/Pagination.jsx';
import PostsList from './components/PostsList.jsx';

const ListingPage = () => {
  return (
    <div className='site-main'>
      <PostsList />
      <Paginate />
    </div>
  );
};

export default ListingPage;
