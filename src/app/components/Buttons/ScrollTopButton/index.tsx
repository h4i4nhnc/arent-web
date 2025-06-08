import * as React from 'react';
import ScrollTopSvg from 'assets/icons/icon_scroll.svg';
import './styles.scss';
import { useEffect, useState } from 'react';
import { cx } from '@emotion/css';

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cx('scroll-to-top', !isVisible && 'hide')}
      onClick={scrollToTop}
    >
      <img src={ScrollTopSvg} alt="scrollTop" />
    </div>
  );
};
