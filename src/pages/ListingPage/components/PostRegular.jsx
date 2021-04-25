import React, { memo } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deletePost } from '../../../store/posts';

const PostRegular = ({ item, dispatch, handleEdit }) => {
  const onDelete = async (id) => {
    try {
      await dispatch(deletePost(id));
      toast.success('Post Deleted');
    } catch (err) {
      toast.error('Delete Failled - ' + err.message, { autoClose: false });
      throw err;
    }
  };

  return (
    <>
      <div className="article">
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
        <Button onClick={() => handleEdit(item.id)} type="primary">
          Edit
        </Button>
        <Button onClick={() => onDelete(item.id)} type="primary" danger>
          Remove
        </Button>
      </div>
    </>
  );
};

export default memo(PostRegular);
