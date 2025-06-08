import * as React from 'react';
import { Header } from 'app//components/Header/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Row, Col } from 'antd';
import { BodyRecord } from './BodyRecord';
import './styles.scss';
import { menuList } from 'dummy/recordData';

export function RecordPage() {
  return (
    <>
      <div className="record-body">
        <Row gutter={[8, 16]} className="activities">
          {menuList.map((item, index) => (
            <Col key={index} xs={24} md={8} lg={8} xl={8} className="left">
              <BodyRecord
                title={item.title}
                description={item.description}
                url={item.url}
                image={item.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
