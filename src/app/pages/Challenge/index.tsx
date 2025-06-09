import * as React from 'react';
import './styles.scss';
import { Recommend } from './components/Recommend';
import { ListArticle } from './components/Article';

const dummyRecommends = [
  { title: 'RECOMMENDED COLUMN', category: 'オススメ' },
  { title: 'RECOMMENDED DIET', category: 'ダイエット' },
  { title: 'RECOMMENDED BEAUTY', category: '美容' },
  { title: 'RECOMMENDED HEALTH', category: '健康' },
];

const dummyArticles = Array.from({ length: 21 }, () => ({
  ...{
    id: 1,
    src: 'https://picsum.photos/234/144);',
    date: '2025.05.06',
    time: '23:22',
    description:
      '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメを食べるメ',
    tags: ['魚料理', '和食', 'DHA'],
  },
}));

export function ChallengePage() {
  const loadMore = () => {
    //TODO: fetchData & save in store
  };

  return (
    <div className="challenge-page">
      <Recommend recommends={dummyRecommends} />
      <ListArticle articles={dummyArticles} onLoadMore={loadMore} />
    </div>
  );
}
