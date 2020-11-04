import React, { FC } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import Navigation from './Navigation';
import './headerStyle.scss';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: FC = function () {
  return (
    <Header>
      <Row justify='space-between'>
        <Col span={8} xs={16} style={{ display: 'flex' }}>
          <Title level={2} id='header-title'>
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
