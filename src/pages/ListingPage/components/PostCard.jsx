import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

const PostCard = ({ item }) => {
  return (
    <List.Item>
      <Link to={`/post/postid-${item.id}`}>{item.title}</Link>
    </List.Item>
  );
};

export default memo(PostCard);
