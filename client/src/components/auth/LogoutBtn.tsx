import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const LoginBtn: FC = function () {
  const { logout } = useAuth0();

  return (
    <Button
      icon={<LogoutOutlined />}
      onClick={() => logout({ returnTo: window.location.origin })}
      shape='round'
      type='primary'
    >
      Logout
    </Button>
  );
};

export default LoginBtn;
