import * as React from 'react';
import { Row, Col } from 'antd';
import { BodyRecord } from './BodyRecord';
import './styles.scss';
import { menuList } from 'dummy/recordData';
import { LineChart } from 'app/components/Chart/LineChart';

export function RecordPage() {
  return (
    <>
      <div className="record-body">
        <Row className="activities">
          {menuList.map((item, index) => (
            <Col key={index} className="left">
              <BodyRecord
                title={item.title}
                description={item.description}
                url={item.url}
                image={item.image}
              />
            </Col>
          ))}
        </Row>
        <div className="chart-wrapper">
          <LineChart type="record" />
          <div className="title">BODY RECORD</div>
          <div className="date">2021.05.21</div>
          <div className="unit">
            <div className="unit-item">日</div>
            <div className="unit-item">週</div>
            <div className="unit-item">月</div>
            <div className="unit-item is-active">月</div>
          </div>
        </div>
      </div>
    </>
  );
}
