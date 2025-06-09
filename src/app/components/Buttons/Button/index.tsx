import * as React from 'react';
import { Button as Abutton, ButtonProps } from 'antd';

export const Button = ({ ...rest }: ButtonProps) => {
  return (
    <Abutton
      type="primary"
      {...rest}
      style={{
        padding: '14px 40px 16px 40px',
        height: '56px',
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        fontSize: '18px',
        fontWeight: 300,
      }}
    />
  );
};
