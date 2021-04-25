import React, { useState, memo } from 'react';
import { Form, Input, Button } from 'antd';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from '../../../store/posts';

const NewItem = () => {
  const [form] = Form.useForm();
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const addNewItem = async () => {
    if (!title.trim()) return;

    const item = {
      userId: 1,
      id: nanoid(),
      title,
      body: '',
    };

    try {
      await dispatch(addPost(item));
      toast.success('Post Added');
    } catch (err) {
      toast.error('Add Failled - ' + err.message, { autoClose: false });
      throw err;
    }
  };

  return (
    <Form onFinish={addNewItem} layout="inline" form={form}>
      <Form.Item name="title">
        <Input
          style={{
            width: 594,
          }}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Add item
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(NewItem);
