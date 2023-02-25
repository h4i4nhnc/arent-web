import * as React from 'react';
import './styles.scss';
import { css, cx } from '@emotion/css/macro';

export const Banner = (props: {
  img: string;
  date: string;
  percent: number;
}) => {
  const { img, date, percent } = props;
  const leftPercent = ((100 - percent) * 360) / 100;
  const percentDeg = (percent * 360) / 100;

  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="left-banner"
    >
      <div className="content">
        <div
          className={cx(
            'arc',
            css`
              border-color: transparent var(--light) var(--light) var(--light);
              -webkit-transform: rotate(${percentDeg}deg);
              -moz-transform: rotate(${percentDeg}deg);
              -ms-transform: rotate(${percentDeg}deg);
              -o-transform: rotate(${percentDeg}deg);
              transform: rotate(${percentDeg}deg);
              box-shadow: 0px 0px 0px transparent;
            `,
          )}
        ></div>
        <div
          className={cx(
            'arc',
            css`
              border-color: transparent var(--light) var(--light) var(--light);
              -webkit-transform: rotate(${leftPercent}deg);
              -moz-transform: rotate(${leftPercent}deg);
              -ms-transform: rotate(${leftPercent}deg);
              -o-transform: rotate(${leftPercent}deg);
              transform: rotate(${leftPercent}deg);
              box-shadow: 0px 0px 0px transparent;
            `,
          )}
        ></div>
        <div className="digit">
          <span className="date">{date}</span>
          <span className="percent">{percent}%</span>
        </div>
      </div>
    </div>
  );
};
