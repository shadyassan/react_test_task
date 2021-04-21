import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/posts';
import { getUsers } from '../store/users';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [posts.length, dispatch]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users.length, dispatch]);

  return { dispatch, posts, users };
};

export default usePosts;
