import * as React from 'react';
import './styles.scss';

type ExerciseLog = {
  title: string;
  time: string;
  energy: number;
};

export const Exercise = (props: { exercise: ExerciseLog }) => {
  const { title, time, energy } = props.exercise;
  return (
    <div className="exercise-log">
      <div className="content">
        <div className="title">{title}</div>
        <div className="energy">{energy}kcal</div>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};

export const Exercises = (props: { exercises: ExerciseLog[] }) => {
  const { exercises } = props;

  return (
    <div className="my-exercises">
      <div className="my-title">
        MY <br></br>EXERCISE
      </div>
      <div className="my-date">2021.05.21</div>
      <div className="list-exercise">
        {exercises.map((exercise, index) => (
          <Exercise exercise={exercise} key={`ex-${index}`}></Exercise>
        ))}
      </div>
    </div>
  );
};
