import React, { useEffect, useRef, memo } from 'react';
import { Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { updatePost } from '../../../store/posts';

const PostEdit = ({ item, dispatch, handleEdit }) => {
  const updateRef = useRef(null);

  const inputProps = {
    style: {
      width: 'auto',
      flexGrow: 1,
      marginRight: '15px',
    },
    ref: updateRef,
    'data-id': item.id,
  };

  useEffect(() => {
    updateRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.which === 13) {
      handleUpdate(e.target.dataset.id);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleUpdate = async (id) => {
    const title = updateRef.current.input.value.trim();

    if (!title) return;

    try {
      await dispatch(updatePost({ ...item, title }));
      toast.success('Post Updated');
    } catch (err) {
      toast.error('Updated Failled - ' + err.message, { autoClose: false });
      throw err;
    }

    handleEdit(id);
  };

  return (
    <>
      <Input {...inputProps} />
      <Button onClick={() => handleUpdate(item.id)} type="danger">
        Save
      </Button>
      <Button onClick={() => handleEdit(item.id)} type="primary">
        No
      </Button>
    </>
  );
};

export default memo(PostEdit);
