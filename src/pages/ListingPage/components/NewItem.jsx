import React, { useState, memo } from 'react';
import { Form, Input, Button } from 'antd';
import { generate as id } from 'shortid';
import { uniqueId } from 'lodash';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from '../../../store/posts';

const initialState = {
  userId: uniqueId(),
  id: id(),
  title: '',
};

const NewItem = () => {
  const [post, setPost] = useState(initialState);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const addNewItem = async (item) => {
    try {
      await dispatch(addPost(item));
      toast.success('Post added');
    } catch (err) {
      toast.error('Add failled - ' + err.message, { autoClose: false });
      throw err;
    }
  };

  const handleSubmit = () => {
    addNewItem(post);
  };

  const onChange = ({ target }) => {
    const { value } = target;
    setPost((prev) => ({ ...prev, title: value }));
  };

  return (
    <Form onFinish={handleSubmit} layout='inline' form={form}>
      <Form.Item name='title'>
        <Input
          style={{
            width: 594,
          }}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          Add item
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(NewItem);
