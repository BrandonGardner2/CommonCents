import React, { FC } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import Navigation from './Navigation';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: FC = function () {
  return (
    <Header>
      <Row justify='space-between'>
        <Col span={8} style={{ display: 'flex' }}>
          <Title style={{ marginBottom: '0', alignSelf: 'center', color: 'whitesmoke' }}>
            Good Cents
          </Title>
        </Col>
        <Col span={8}>
          <Navigation />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
