import * as React from 'react';
import KnifeSvg from 'assets/icons/icon_knife.svg';
import Cup from 'assets/icons/icon_cup.svg';
import HexBgr from 'assets/icons/icon_hex_bgr.svg';
import { cx } from '@emotion/css';
import './styles.scss';

export const Hex = (props: {
  name: string;
  isMeal: boolean;
  isActive: boolean;
  onSetHex: Function;
}) => {
  const { name, isMeal, isActive, onSetHex } = props;

  const toggleActive = () => {
    onSetHex('morning', !isActive);
  };

  return (
    <div className="c-hex">
      <img src={HexBgr} alt="hex-bgr" className="hex-background" />
      <img
        src={isMeal ? KnifeSvg : Cup}
        alt={isMeal ? 'meal' : 'snack'}
        onClick={() => toggleActive()}
        className={cx('hex-icon', isActive ? 'hex-active' : '')}
      />
      <div className="hex-text">{name}</div>
    </div>
  );
};
