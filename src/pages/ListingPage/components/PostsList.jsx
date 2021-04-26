import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { List, Divider } from 'antd';
import PostCard from './PostCard';

const PostsList = ({ posts }) => {
  return (
    <div className="site-card-wrapper">
      <Divider orientation="left">Articles</Divider>
      <List
        size="large"
        bordered
        dataSource={posts}
        renderItem={(item) => <PostCard item={item} />}
      />
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default memo(PostsList);
