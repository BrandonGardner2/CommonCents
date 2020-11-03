import React, { FC, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuProps } from 'rc-menu';
import { HomeOutlined } from '@ant-design/icons';
import LoginBtn from '../auth/LoginBtn';
import LogoutBtn from '../auth/LogoutBtn';

const Navigation: FC = function () {
  const { isAuthenticated } = useAuth0();
  const [selectedLink, setSelectedLink] = useState<string>('home');

  const handleClick: MenuProps['onClick'] = (e) => {
    setSelectedLink(String(e.key));
  };

  return (
    <Menu
      mode='horizontal'
      onClick={handleClick}
      selectedKeys={[selectedLink]}
      style={{ display: 'flex', justifyContent: 'flex-end' }}
      theme='dark'
    >
      <Menu.Item key='mail' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='login-out'>{isAuthenticated ? <LoginBtn /> : <LogoutBtn />}</Menu.Item>
    </Menu>
  );
};

export default Navigation;
