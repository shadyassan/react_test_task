import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import useAsync from '../../../hooks/useAsync';
import { fetchById } from '../../../api/postsApi';
import { FullSpinner } from '../../../styles/app';

const PostDetails = () => {
  const { id } = useParams();
  const { run, data, isLoading, isSuccess, reset } = useAsync();

  useEffect(() => {
    run(fetchById(id));
    return () => reset();
  }, [id, reset, run]);

  if (isLoading) {
    return <FullSpinner />;
  }

  return isSuccess && <Details data={data} />;
};

const Details = ({ data }) => {
  return (
    <Card title={data.title} bordered={false}>
      <p>{data.body}</p>
    </Card>
  );
};

export default PostDetails;
