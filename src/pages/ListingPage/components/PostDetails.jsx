import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Comment, List, Avatar } from 'antd';
import { fetchById, fetchCommentsById } from '../../../api/postsApi';
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
    console.error(err);
  }

  if (loading) {
    return <FullSpinner />;
  }

  return <Details post={post} comments={comments} />;
};

const Details = ({ post, comments }) => {
  return (
    <>
      {post && (
        <>
          <h1 style={{ textTransform: 'capitalize' }}>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
      {comments && (
        <>
          <h3>Comments</h3>
          <List
            className="comment-list"
            header={`${comments.length} replies`}
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={`${item.name} - ${item.email}`}
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt={item.name}
                    />
                  }
                  content={<p>{item.body}</p>}
                />
              </li>
            )}
          />
        </>
      )}
    </>
  );
};

export default memo(PostDetails);
