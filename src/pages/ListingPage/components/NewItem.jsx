import React from 'react';
import { Form, Input, Button } from 'antd';
import { generate as id } from 'shortid';
import { uniqueId } from 'lodash';

const NewItem = ({ addNewItem }) => {
  const [form] = Form.useForm();

  const handleSubmit = ({ title }) => {
    addNewItem({ userId: uniqueId(), id: id(), title });
  };

  return (
    <Form onFinish={handleSubmit} layout='inline' form={form}>
      <Form.Item name='title'>
        <Input
          style={{
            width: 594,
          }}
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

export default NewItem;
