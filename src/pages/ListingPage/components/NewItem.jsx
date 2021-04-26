import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Divider, Form, Input, Select, Button } from 'antd';
const { Option } = Select;
import { PlusOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addPost } from '../../../store/posts';

const NewItem = ({ users }) => {
  const [form] = Form.useForm();
  const [{ title, userId }, setField] = useState({
    title: '',
    userId: '',
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setField((prev) => ({ ...prev, title: e.target.value }));
  };

  const onChangeSelect = (value) => {
    setField((prev) => ({ ...prev, userId: value }));
  };

  const addNewItem = async () => {
    if (!title.trim()) return;
    if (userId == '' || userId == null) return;

    try {
      await dispatch(
        addPost({
          userId,
          id: nanoid(),
          title,
          body: '',
          edit: false,
        })
      );
      toast.success('Post Added');
    } catch (err) {
      toast.error('Add Failled - ' + err.message, { autoClose: false });
      throw err;
    }
  };

  return (
    <Form onFinish={addNewItem} layout="inline" form={form}>
      <Divider orientation="left">Add New Item</Divider>
      <Form.Item name="title">
        <Input
          style={{
            width: 594,
          }}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        {users && (
          <Select
            style={{ width: 250 }}
            placeholder="Выберите автора"
            onChange={onChangeSelect}>
            <Option>Выберите автора</Option>
            {users.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          shape="circle"
          icon={<PlusOutlined />}
          htmlType="submit"
          type="primary"
        />
      </Form.Item>
    </Form>
  );
};

NewItem.propTypes = {
  users: PropTypes.array.isRequired,
};

export default memo(NewItem);
