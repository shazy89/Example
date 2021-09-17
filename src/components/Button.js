import React from 'react';

const fontSize = {
  sm: 'font_size_sm',
  md: 'font_size_md',
  lr: 'font_size_lr',
  xl: 'font_size_xl',
};

export const Button = ({ children, size = 'md' }) => {
  return <button className={`button ${fontSize[size]}`}>{children}</button>;
};
