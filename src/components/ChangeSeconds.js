import React from 'react';
import { Button } from './Button';

export const ChangeSeconds = ({ onClick }) => {
  return (
    <div className="">
      <Button size="md" color="black" onClick={() => onClick(1)}>
        1
      </Button>
      <Button size="md" color="black" onClick={() => onClick(2)}>
        + 2
      </Button>
      <Button size="md" color="black" onClick={() => onClick(4)}>
        + 4
      </Button>
      <Button size="md" color="black" onClick={() => onClick(6)}>
        + 6
      </Button>
    </div>
  );
};
