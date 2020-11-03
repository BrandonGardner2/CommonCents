import React from 'react';
import { Layout } from 'antd';
import AuthProvider from './components/auth/AuthProvider';
import AppHeader from './components/header/AppHeader';

const { Content } = Layout;

function App() {
  return (
    <AuthProvider>
      <Layout>
        <AppHeader />
        <Content>
          <div className='App'>Hello world.</div>
        </Content>
      </Layout>
    </AuthProvider>
  );
}

export default App;
