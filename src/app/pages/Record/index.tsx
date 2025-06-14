import * as React from 'react';
import { Row, Col } from 'antd';
import { BodyRecord } from './components/BodyRecord';
import './styles.scss';
import { menuList } from 'dummy/recordData';
import { LineChart } from 'app/components/Chart/LineChart';
import { Exercises } from './components/Exercise';
import { DiaryList } from './components/Diary';

export function RecordPage() {
  const exerciseDummy = Array.from({ length: 15 }, () => ({
    title: '家事全般（立位・軽い）',
    time: '10 min',
    energy: 26,
  }));

  const diariesDummy = Array.from({ length: 8 }, () => ({
    date: '2025.06.06',
    time: '23:35',
    description:
      '私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス',
  }));

  return (
    <div className="record-page">
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
        <Exercises exercises={exerciseDummy}></Exercises>
        <DiaryList diaries={diariesDummy}></DiaryList>
      </div>
    </div>
  );
}
