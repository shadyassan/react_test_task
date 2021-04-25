import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const TopBar = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState('/');
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(pathname);
  }, [[pathname]]);

  return (
    <div className="top-bar">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="/">
          <NavLink exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/task">
          <NavLink exact to="/task">
            Task
          </NavLink>
        </Menu.Item>
      </Menu>
      <Link to="/">
        <img src={logo} alt="#" className="logo-img" />
      </Link>
    </div>
  );
};

export default TopBar;
