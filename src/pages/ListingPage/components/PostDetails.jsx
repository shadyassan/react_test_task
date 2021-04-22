import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { fetchById } from '../../../api/postsApi';
import { fetchCommentsById } from '../../../api/commentsApi';
import { FullSpinner } from '../../../styles/app';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(true);

  try {
    useEffect(async () => {
      let [post, comments] = await Promise.all([
        fetchById(id),
        fetchCommentsById(id),
      ]);
      setPost(post);
      setComments(comments);
      setLoading(false);
    }, [setPost, setComments, setLoading]);
  } catch (err) {
    console.log(err);
  }

  // if (loading) {
  //   return <FullSpinner />;
  // }

  return <Details post={post} comments={comments} />;
};

const Details = ({ post, comments }) => {
  return (
    <>
      {post && (
        <Card title={post.title} bordered={false}>
          <p>{post.body}</p>
        </Card>
      )}
      {comments && (
        <ul>
          {comments.map((item) => {
            return (
              <li>
                {item.name} - {item.email}
                <p>{item.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default memo(PostDetails);
