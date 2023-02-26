import * as React from 'react';
import './styles.scss';
import Logo from '../../../assets/icons/logo.svg';
import Memo from '../../../assets/icons/icon_memo.svg';
import Challenge from '../../../assets/icons/icon_challenge.svg';
import Info from '../../../assets/icons/icon_info.svg';
import Menu from '../../../assets/icons/icon_menu.svg';
import Close from '../../../assets/icons/icon_close.svg';
import { useState } from 'react';
import { SubMenu } from './SubMenu';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isOpenMenu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!isOpenMenu);
  };

  const navigate = useNavigate();
  const onGoUrl = (url: string) => navigate(`${url}`);

  return (
    <div className="header">
      <div className="content">
        <div className="logo" onClick={() => onGoUrl('/')}>
          <img src={Logo} alt="logo" />
        </div>
        <div className="action-list">
          <div className="action-item" onClick={() => onGoUrl('/record')}>
            <img src={Memo} alt="memo" />
            <span>自分の記録</span>
          </div>
          <div className="action-item" onClick={() => onGoUrl('/challenge')}>
            <img src={Challenge} alt="challenge" />
            <span>チャレンジ</span>
          </div>
          <div className="action-item" onClick={() => onGoUrl('/notify')}>
            <img src={Info} alt="info" />
            <span>お知らせ</span>
          </div>
          <div className="action-item menu" onClick={toggleMenu}>
            <img src={isOpenMenu ? Close : Menu} alt="menu-close" />
            {isOpenMenu && <SubMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};
