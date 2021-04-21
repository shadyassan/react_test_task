import React from 'react';
import { Row, Col, Select, Input } from 'antd';
const { Option } = Select;

const Filter = ({ onChange, users }) => {
  const onChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='site-search'>
      <Row gutter={[20, 20]}>
        <Col className='gutter-row' span={12}>
          <Input.Search allowClear placeholder='Найти...' onChange={onChange} />
        </Col>
        {users && (
          <Col span={12}>
            <Select
              style={{ width: 200 }}
              placeholder='Выберите автора'
              optionFilterProp='children'
              onChange={onChangeSelect}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }>
              {users.map((item) => (
                <Option value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Filter;
