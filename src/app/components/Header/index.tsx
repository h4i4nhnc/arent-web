import * as React from 'react';
import './styles.scss';
import Logo from '../../../assets/icons/logo.svg';
import Memo from '../../../assets/icons/icon_memo.svg';
import Challenge from '../../../assets/icons/icon_challenge.svg';
import Info from '../../../assets/icons/icon_info.svg';
import Menu from '../../../assets/icons/icon_menu.svg';
import Close from '../../../assets/icons/icon_close.svg';
import { useEffect, useState } from 'react';
import { SubMenu } from './SubMenu';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isOpenMenu, setMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const toggleMenu = () => {
    setMenu(!isOpenMenu);
  };

  const menuItems = [
    { path: '/record', label: '自分の記録', icon: Memo, alt: 'memo' },
    {
      path: '/challenge',
      label: 'チャレンジ',
      icon: Challenge,
      alt: 'challenge',
    },
    { path: '/notify', label: 'お知らせ', icon: Info, alt: 'info' },
  ];

  const navigate = useNavigate();
  const onGoUrl = (url: string) => {
    setActiveMenu(url);
    navigate(`${url}`);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath) {
      setActiveMenu(currentPath);
    }
  }, []);

  const menuItemClass = (url: string) => {
    console.log('Active Menu:', activeMenu, 'Current URL:', url);
    return activeMenu === url ? 'is-active' : '';
  };

  return (
    <div className="header">
      <div className="content">
        <div className="logo" onClick={() => onGoUrl('/')}>
          <img src={Logo} alt="logo" />
        </div>
        <div className="action-list">
          {menuItems.map(({ path, label, icon, alt }) => (
            <div
              key={path}
              className="action-item"
              onClick={() => onGoUrl(path)}
            >
              <img src={icon} alt={alt} />
              <span className={menuItemClass(path)}>{label}</span>
            </div>
          ))}
          <div className="action-item menu" onClick={toggleMenu}>
            <img src={isOpenMenu ? Close : Menu} alt="menu-close" />
            {isOpenMenu && <SubMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};
