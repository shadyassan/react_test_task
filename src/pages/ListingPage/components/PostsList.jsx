import React, { memo } from 'react';
import { List, Divider } from 'antd';
import PostCard from './PostCard.jsx';

const PostsList = ({ posts, onDelete }) => {
  return (
    <div className='site-card-wrapper'>
      <Divider orientation='left'>Articles</Divider>
      <List
        size='large'
        bordered
        dataSource={posts}
        renderItem={(item) => <PostCard onDelete={onDelete} item={item} />}
      />
    </div>
  );
};

export default memo(PostsList);
