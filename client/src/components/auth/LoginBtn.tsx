import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const LoginBtn: FC = function () {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button icon={<LoginOutlined />} onClick={loginWithRedirect} shape='round' type='primary'>
      Login
    </Button>
  );
};

export default LoginBtn;
