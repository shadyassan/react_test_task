import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import usePosts from '../../../hooks/usePosts';
import { updatePost } from '../../../store/posts';

const PostEdit = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { posts, dispatch } = usePosts();

  const handleSubmit = () => {
    dispatch(updatePost(post));
    setRedirect(true);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setPost((prev) => ({
      ...prev,
      title: value,
    }));
  };

  useEffect(() => {
    const post = posts.find((c) => c.id === parseInt(id));
    setPost(post);
  }, [posts, id]);

  if (redirect) {
    return <Redirect to='/' noThrow />;
  }

  return (
    <form className='ant-form ant-form-inline' onSubmit={handleSubmit}>
      <div className='ant-row ant-form-item'>
        <div className='ant-col ant-form-item-control'>
          <div className='ant-form-item-control-input'>
            <div className='ant-form-item-control-input-content'>
              <input
                type='text'
                className='ant-input'
                style={{ width: '590px' }}
                value={post.title}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ant-row ant-form-item'>
        <div className='ant-col ant-form-item-control'>
          <div className='ant-form-item-control-input'>
            <div className='ant-form-item-control-input-content'>
              <button className='ant-btn ant-btn-primary'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostEdit;
