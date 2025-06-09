import React from 'react';
import { Row, Space, Spin } from 'antd';
import './styles.scss';

export const LoadMore = () => (
  <Row className="loadmore">
    <Space
      direction="vertical"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin tip="Loading..." className="spinner"></Spin>
    </Space>
  </Row>
);
