import * as React from 'react';
import './styles.scss';

type RecommendType = { title: string; category: string };

export const RecommendItem = (props: RecommendType) => {
  const { title, category } = props;

  return (
    <div className="recommend-item">
      <div className="title">{title}</div>
      <div className="inner-line" />
      <div className="category">{category}</div>
    </div>
  );
};

export const Recommend = (props: { recommends: RecommendType[] }) => {
  const { recommends } = props;

  return (
    <div className="list-recommend">
      {recommends.map(({ title, category }) => (
        <RecommendItem title={title} category={category} />
      ))}
    </div>
  );
};
