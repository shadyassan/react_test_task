import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';

const PostCard = ({ item }) => {
  return (
    <List.Item>
      <Link to={`/post/${item.id}`}>{item.title}</Link>
      <span>{item.authorName}</span>
    </List.Item>
  );
};

export default memo(PostCard);
