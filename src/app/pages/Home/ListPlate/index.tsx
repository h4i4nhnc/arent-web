import * as React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import { dinnerData } from 'dummy/dinnerData';
import { cx, css } from '@emotion/css';
import { Button } from 'app/components/Buttons/Button';

export const ListPlate = (props: { categories: Array<string> }) => {
  const { categories } = props;
  const filtered = dinnerData.filter(dish =>
    categories.includes(dish.category),
  );
  return (
    <div className="list-plate-container">
      <Row gutter={[0, 8]} className="list-plate">
        {filtered.map(dish => (
          <Col
            key={dish.id}
            xs={12}
            md={6}
            lg={6}
            xl={6}
            className={cx(
              'dish-item',
              css`
                background: url(${dish.image});
                background-repeat: no-repeat;
                background-size: 234px 234px;
              `,
            )}
          >
            <div className="date-tag">{`${dish.date}.${dish.category}`}</div>
          </Col>
        ))}
      </Row>
      <Row>
        <Button className="load-more">記録をもっと見る</Button>
      </Row>
    </div>
  );
};