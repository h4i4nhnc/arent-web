import * as React from 'react';
import './styles.scss';
import { css, cx } from '@emotion/css';
import { Button } from 'app/components/Buttons/Button';
import { Row } from 'antd';

type ArticleProps = {
  id: number;
  src: string;
  date: string;
  time: string;
  description: string;
  tags: string[];
};

export const Article = (props: { article: ArticleProps }) => {
  const { id, src, date, time, description, tags } = props.article;

  return (
    <div className="artilce" key={id}>
      <div
        className={cx(
          'thumbnail',
          css`
            background: url(${src});
            background-repeat: no-repeat;
            background-size: 234px 144px;
          `,
        )}
      >
        <div className="date-tag">{`${date} ${time}`}</div>
      </div>
      <div className="description">{description}</div>
      <div className="tags">
        {tags.map(tag => (
          <span className="tag-item">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export const ListArticle = (props: {
  articles: ArticleProps[];
  onLoadMore: Function;
}) => {
  const { articles, onLoadMore } = props;

  return (
    <>
      <div className="list-articles">
        {articles.map(article => (
          <Article article={article} />
        ))}
      </div>
      <div className="load-more-wrapper">
        <Button className="load-more" onClick={() => onLoadMore()}>
          コラムをもっと見る
        </Button>
      </div>
    </>
  );
};
