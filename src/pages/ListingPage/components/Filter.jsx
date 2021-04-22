import React, { memo } from 'react';
import { Row, Col, Select, Input } from 'antd';
const { Option } = Select;

const Filter = ({ onChange, onChangeSelect, users }) => {
  return (
    <div className='site-search'>
      <Row gutter={[20, 20]}>
        <Col className='gutter-row' span={12}>
          <Input.Search allowClear placeholder='Найти...' onChange={onChange} />
        </Col>
        {users && (
          <Col span={12}>
            <Select
              style={{ width: 250 }}
              placeholder='Выберите автора'
              onChange={onChangeSelect}>
              <Option>Все авторы</Option>
              {users.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default memo(Filter);
