import * as React from 'react';
import './styles.scss';
import { Button } from 'app/components/Buttons/Button';

type Diary = {
  date: string;
  time: string;
  description: string;
};

export const DiaryItem = (props: { diary: Diary }) => {
  const { date, time, description } = props.diary;

  return (
    <div className="diary-item">
      <div className="date">
        {date}
        <br></br>
        {time}
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export const DiaryList = (props: { diaries: Diary[] }) => {
  const { diaries } = props;

  return (
    <>
      <div className="diary-list">
        <div className="list-title">MY DIARY</div>
        <div className="list-items">
          {diaries.map((diary, index) => (
            <DiaryItem diary={diary} key={`ex-${index}`}></DiaryItem>
          ))}
        </div>
      </div>
      <div className="load-more">
        <Button onClick={() => {}}>自分の日記をもっと見る</Button>
      </div>
    </>
  );
};
