import * as React from 'react';
import './styles.scss';
import { css, cx } from '@emotion/css/macro';

export const Banner = (props: {
  img: string;
  date: string;
  percent: number;
}) => {
  const { img, date, percent } = props;
  // TODO calculate circle percent to deg
  // const leftPercent = ((100 - percent) * 360) / 100;
  // const percentDeg = (percent * 360) / 100;

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
          // TODO draw circle part by canvas
          // http://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
          // http://jsfiddle.net/rpz15web/
          className={cx(
            'arc',
            css`
              border-color: transparent transparent;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              box-shadow: 0px 0px 0px transparent;
            `,
          )}
        ></div>
        <div
          className={cx(
            'arc',
            css`
              border-color: transparent var(--light) var(--light) var(--light);
              -webkit-transform: rotate(-110deg);
              -moz-transform: rotate(-110deg);
              -ms-transform: rotate(-110deg);
              -o-transform: rotate(-110deg);
              transform: rotate(-110deg);
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
