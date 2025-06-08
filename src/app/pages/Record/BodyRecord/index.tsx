import * as React from 'react';
import Body from 'assets/images/dummy/body.jpg';
import Excercise from 'assets/images/dummy/excercise.jpg';
import Diary from 'assets/images/dummy/diary.jpg';
import { cx, css } from '@emotion/css';
import './styles.scss';

export const BodyRecord = (props: {
  title: string;
  description: string;
  url: string;
  image: string;
}) => {
  const { title, description, image } = props;

  const getImgByType = (img: string) => {
    switch (img) {
      case 'body':
        return Body;
      case 'exercise':
        return Excercise;
      default:
        return Diary;
    }
  };

  return (
    <div className="record">
      <div
        className={cx(
          'record-bgr',
          css`
            background: url(${getImgByType(image)});
            background-repeat: no-repeat;
            background-size: 240px 240px;
          `,
        )}
      />
      <div className="overlay" />
      <div className="record-content">
        <div className="content-body">
          <div className="title digit">{title}</div>
          <div className="desc">{description}</div>
        </div>
      </div>
    </div>
  );
};
