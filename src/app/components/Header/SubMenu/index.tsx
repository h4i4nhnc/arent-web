import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const SubMenu = () => {
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
      url: '/article',
      text: 'コラム一覧',
    },
    {
      url: '/settings',
      text: '設定',
    },
  ];

  const navigate = useNavigate();
  const goToUrl = (url: string) => navigate(`${url}`);

  return (
    <ul className="sub-menu-container">
      {listItems.map((item, index) => (
        <li
          key={index}
          onClick={() => goToUrl(item.url)}
          className="sub-menu-item"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};
