import * as React from 'react';
import './styles.scss';
import Morning from 'assets/icons/icon_morning.svg';
import Lunch from 'assets/icons/icon_lunch.svg';
import Dinner from 'assets/icons/icon_dinner.svg';
import Snack from 'assets/icons/icon_snack.svg';
import { Row, Col } from 'antd';

export const FilterDinner = (props: {
  categories: Array<string>;
  onSetCategory: Function;
}) => {
  const { categories, onSetCategory } = props;

  return (
    <div className="dinner-container">
      <Row gutter={[8, 16]} className="dinner">
        <Col xs={12} md={8} lg={6} xl={6} key="morning">
          <img
            src={Morning}
            alt="dinner"
            onClick={() => onSetCategory('morning')}
            className={categories.includes('morning') ? 'category-active' : ''}
          />
        </Col>
        <Col xs={12} md={8} lg={6} xl={6} key="lunch">
          <img
            src={Lunch}
            alt="dinner"
            onClick={() => onSetCategory('lunch')}
            className={categories.includes('lunch') ? 'category-active' : ''}
          />
        </Col>
        <Col xs={12} md={8} lg={6} xl={6} key="dinner">
          <img
            src={Dinner}
            alt="dinner"
            onClick={() => onSetCategory('dinner')}
            className={categories.includes('dinner') ? 'category-active' : ''}
          />
        </Col>
        <Col xs={12} md={8} lg={6} xl={6} key="snack">
          <img
            src={Snack}
            alt="dinner"
            onClick={() => onSetCategory('snack')}
            className={categories.includes('snack') ? 'category-active' : ''}
          />
        </Col>
      </Row>
    </div>
  );
};
