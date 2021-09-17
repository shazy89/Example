import React from 'react';
import { fontSize, defaultColors } from './utils/Helpers';

export const Button = ({ children, size = 'md', color = '#ff547d' }) => {
  return (
    <button className={`button ${fontSize[size]} ${defaultColors[color]}`}>
      {children}
    </button>
  );
};
