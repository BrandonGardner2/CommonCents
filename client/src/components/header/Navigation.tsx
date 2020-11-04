import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import LoginBtn from '../auth/LoginBtn';
import LogoutBtn from '../auth/LogoutBtn';
import './headerStyle.scss';

const Navigation: FC = function () {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  return (
    <Menu
      className='navigation-container'
      mode='horizontal'
      selectedKeys={[location.pathname]}
      theme='dark'
    >
      <Menu.Item key='/' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      {isAuthenticated && (
        <Menu.Item key='/dashboard' icon={<PieChartOutlined />}>
          <Link to='/dashbaord'>Dashboard</Link>
        </Menu.Item>
      )}
      <Menu.Item key='login-out'>{isAuthenticated ? <LogoutBtn /> : <LoginBtn />}</Menu.Item>
    </Menu>
  );
};

export default Navigation;
