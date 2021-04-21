import React from 'react';
import { List, Divider } from 'antd';
import PostCard from './PostCard.jsx';

const PostsList = ({ posts }) => {
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
