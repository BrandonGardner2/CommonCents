import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, PieChartOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import './headerStyle.scss';

const Navigation: FC = function () {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();

  const handleLogin = () => loginWithRedirect();
  const handleLogout = () => logout({ returnTo: window.location.origin });

  const { pathname } = location;
  return (
    <Menu className='navigation-container' mode='horizontal' selectedKeys={[pathname]} theme='dark'>
      <Menu.Item key='/' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      {isAuthenticated && (
        <Menu.Item key='/dashboard' icon={<PieChartOutlined />}>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
      )}
      <Menu.Item
        key='login-out'
        icon={isAuthenticated ? <LogoutOutlined /> : <LoginOutlined />}
        onClick={isAuthenticated ? handleLogout : handleLogin}
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
