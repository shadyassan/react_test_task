import React, { useEffect, useRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.which === 13) {
        handleUpdate(e.target.dataset.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleUpdate]);

  const handleUpdate = useCallback(
    async (id) => {
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
    },
    [dispatch, handleEdit, item]
  );

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

PostEdit.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default memo(PostEdit);
