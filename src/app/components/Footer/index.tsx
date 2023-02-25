import * as React from 'react';
import './styles.scss';

export const Footer = () => {
  const footerTags = [
    {
      url: '',
      text: '会員登録',
    },
    {
      url: '',
      text: '運営会社 ',
    },
    {
      url: '',
      text: '利用規約',
    },
    {
      url: '',
      text: '個人情報の取扱について',
    },
    {
      url: '',
      text: '特定商取引法に基づく表記',
    },
    {
      url: '',
      text: 'お問い合わせ',
    },
  ];

  const goToUrl = (url: string) => {
    console.log('go to url:', url);
  };

  return (
    <div className="footer">
      <ul className="footer-link">
        {footerTags.map(tag => (
          <li onClick={() => goToUrl(tag.url)} className="tag-item">
            {tag.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
