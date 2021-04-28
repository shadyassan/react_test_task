import { useState, useEffect } from 'react';
import { fetchById, fetchCommentsById } from '../api/postsApi';

const useDetails = (id) => {
  const [post, setPost] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      let [post, comments] = await Promise.all([
        fetchById(id),
        fetchCommentsById(id),
      ]);
      setPost(post);
      setComments(comments);
      setLoading(false);
    })();
  }, [id]);

  return { loading, post, comments };
};

export default useDetails;
