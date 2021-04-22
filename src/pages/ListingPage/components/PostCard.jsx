import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'antd';

const PostCard = ({ item, onDelete }) => {
  return (
    <List.Item>
      <div>
        <h2>
          <Link to={`/post/${item.id}`}>{item.title}</Link>
        </h2>
        {item.authorName && (
          <div>
            <span>Author: {item.authorName}</span>
          </div>
        )}
      </div>
      <div>
        <Button type='primary'>
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </Button>
        <Button onClick={() => onDelete(item.id)} type='primary' danger>
          Remove
        </Button>
      </div>
    </List.Item>
  );
};

export default memo(PostCard);
