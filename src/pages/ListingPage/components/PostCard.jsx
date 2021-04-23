import React, { memo } from 'react';
import { List } from 'antd';
import { useDispatch } from 'react-redux';
import PostRegular from './PostRegular';
import PostEdit from './PostEdit';

const PostCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch({ type: 'posts/edit', payload: parseInt(id) });
  };

  return (
    <List.Item>
      {!item.edit ? (
        <PostRegular item={item} dispatch={dispatch} handleEdit={handleEdit} />
      ) : (
        <PostEdit item={item} dispatch={dispatch} handleEdit={handleEdit} />
      )}
    </List.Item>
  );
};

export default memo(PostCard);
