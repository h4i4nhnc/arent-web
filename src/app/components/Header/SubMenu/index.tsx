import * as React from 'react';
import './styles.scss';

export const SubMenu = () => {
  const listItems = [
    {
      url: '',
      text: '自分の記録',
    },
    {
      url: '',
      text: '体重グラフ',
    },
    {
      url: '',
      text: '目標',
    },
    {
      url: '',
      text: '選択中のコース',
    },
    {
      url: '',
      text: 'コラム一覧',
    },
    {
      url: '',
      text: '設定',
    },
  ];

  const goToUrl = (url: string) => {
    console.log('go to url page:', url);
  };

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
