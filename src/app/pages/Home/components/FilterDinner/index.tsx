import * as React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import { Hex } from 'app/components/Buttons/Hex';

export const FilterDinner = (props: {
  categories: Array<string>;
  onSetCategory: Function;
}) => {
  const { categories, onSetCategory } = props;
  const mealCategories = [
    { key: 'morning', label: 'Morning' },
    { key: 'lunch', label: 'Lunch' },
    { key: 'diner', label: 'Diner' },
    { key: 'snack', label: 'Snack' },
  ];

  return (
    <div className="hex-container">
      <Row className="hex-row">
        {mealCategories.map(({ key, label }) => (
          <Col xs={6} md={6} lg={6} xl={6} key={key} className="hex-col">
            <Hex
              name={label}
              isActive={categories.includes(key)}
              isMeal={true}
              onSetHex={() => onSetCategory(key)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
