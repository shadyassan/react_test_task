import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Divider, Row, Col, Select, Input } from 'antd';
const { Option } = Select;

const Filter = ({ users, onChange, onChangeSelect }) => {
  return (
    <div className="site-search">
      <Divider orientation="left">Filter</Divider>
      <Row gutter={[20, 20]}>
        <Col className="gutter-row" span={12}>
          <Input.Search placeholder="Найти..." onChange={onChange} />
        </Col>
        {users && (
          <Col span={12}>
            <Select
              style={{ width: 250 }}
              placeholder="Выберите автора"
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

Filter.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default memo(Filter);
