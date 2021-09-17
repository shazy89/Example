import React from 'react';
import { fontSize, defaultColors } from './utils/Helpers';

export const Button = ({
  children,
  size = 'md',
  color = 'pink',
  textColor = '#f5f5f5',
  spaceTop,
  handleDisplay,
}) => {
  return (
    <button
      onClick={handleDisplay}
      className={`radio_button ${fontSize[size]} ${defaultColors[color]} ${spaceTop}`}
    >
      {children}
    </button>
  );
};
