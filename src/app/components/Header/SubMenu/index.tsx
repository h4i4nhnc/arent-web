import * as React from 'react';
import './styles.scss';

export const SubMenu = (props: { onGoUrl: Function }) => {
  const { onGoUrl } = props;

  const listItems = [
    {
      url: '/record',
      text: '自分の記録',
    },
    {
      url: '/graph',
      text: '体重グラフ',
    },
    {
      url: '/diary',
      text: '目標',
    },
    {
      url: '/course',
      text: '選択中のコース',
    },
    {
      url: '/challenge',
      text: 'コラム一覧',
    },
    {
      url: '/settings',
      text: '設定',
    },
  ];

  return (
    <ul className="sub-menu-container">
      {listItems.map((item, index) => (
        <li
          key={index}
          onClick={() => onGoUrl(item.url)}
          className="sub-menu-item"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
