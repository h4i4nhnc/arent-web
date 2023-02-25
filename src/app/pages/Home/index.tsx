import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.scss';
import { Header } from 'app//components/Header/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { LineChart } from 'app/components/Chart/LineChart';
import { Banner } from './Banner';
import { Row, Col } from 'antd';
import mainPhoto from 'assets/images/dummy/main_photo.jpg';

export function HomePage() {
  const bannerData = {
    bgr: mainPhoto,
    date: '05/21',
    percent: 75,
  };

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Row gutter={[8, 16]} className="banner-container">
        <Col xs={24} md={8} lg={8} xl={10} className="left">
          <Banner
            img={bannerData.bgr}
            date={bannerData.date}
            percent={bannerData.percent}
          />
        </Col>
        <Col xs={24} md={16} lg={16} xl={14} className="right" span={10}>
          <LineChart />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
