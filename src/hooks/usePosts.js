import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/posts';
import { getUsers } from '../store/users';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.entities.posts.items);
  const users = useSelector((state) => state.entities.users.items);

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

  const renderPosts = useMemo(
    () =>
      !users.length
        ? []
        : posts.map((post) => ({
            ...post,
            authorName: users.find((a) => a.id === post.userId).name,
          })),
    [users, posts]
  );

  return { dispatch, posts: renderPosts, users };
};

export default usePosts;
