import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { useDispatch } from 'react-redux';
import PostRegular from './PostRegular';
import PostEdit from './PostEdit';

const PostCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch({ type: 'posts/postEdit', payload: parseInt(id) });
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

PostCard.propTypes = {
  item: PropTypes.shape({
    edit: PropTypes.bool.isRequired,
  }),
};

export default memo(PostCard);
