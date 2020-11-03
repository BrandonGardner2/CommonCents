import React, { FC } from 'react';
import { Layout, Row, Col } from 'antd';
import Navigation from './Navigation';

const { Header } = Layout;

const AppHeader: FC = function () {
  return (
    <Header>
      <Row justify='space-between'>
        <Col span={8}>Good Cents</Col>
        <Col span={8}>
          <Navigation />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
