import * as React from 'react';
import './styles.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Banner = (props: {
  img: string;
  date: string;
  percent: number;
}) => {
  const { img, date, percent } = props;

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
        <CircularProgressbar
          value={percent}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: '#FFF',
            backgroundColor: 'transparent',
            trailColor: 'transparent',
          })}
          className="circle"
        />
        <div className=" content-wrapper digit">
          <span className="date">{date}</span>
          <span className="percent">{percent}%</span>
        </div>
      </div>
    </div>
  );
};
