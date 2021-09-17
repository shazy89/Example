import React from 'react';
import { fontSize, defaultColors } from './utils/Helpers';

export const Button = ({
  children,
  size = 'md',
  color = 'pink',
  textColor = '#f5f5f5',
  spaceTop,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`radio_button ${fontSize[size]} ${defaultColors[color]} ${spaceTop}`}
    >
      {children}
    </button>
  );
};
