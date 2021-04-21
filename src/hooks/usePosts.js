import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/posts';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [posts.length, dispatch]);

  return { dispatch, posts };
};

export default usePosts;
