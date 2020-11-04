import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import AuthProvider from './components/auth/AuthProvider';
import AppHeader from './components/header/AppHeader';
import Home from './routes/Home';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppHeader />
          <Content style={{ marginTop: '64px' }}>
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>

              <Route>Whoops, looks like you got lost.</Route>
            </Switch>
          </Content>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
