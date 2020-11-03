import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import AuthProvider from './components/auth/AuthProvider';
import AppHeader from './components/header/AppHeader';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppHeader />
          <Content>
            <Switch>
              <Route path='/' exact>
                Hello world.
              </Route>

              <Route path='/404'>Whoops, looks like you got lost.</Route>
            </Switch>
          </Content>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
