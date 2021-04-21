import React, { useEffect, useState } from 'react';
import { List, Divider } from 'antd';
import PostCard from './PostCard.jsx';
import usePosts from '../../../hooks/usePosts';

const PostsList = () => {
  const { posts, dispatch } = usePosts();

  return (
    <div className='site-card-wrapper'>
      <Divider orientation='left'>Articles</Divider>
      <List
        size='large'
        bordered
        dataSource={posts}
        renderItem={(item) => <PostCard item={item} />}
      />
    </div>
  );
};

export default PostsList;
