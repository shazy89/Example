import React from 'react';
import { Button } from './Button';
export const Contros = ({ handleStart, setStart, setReset }) => {
  return (
    <div className="buttons_section margin_top_two">
      <Button size="md" spaceTop="margin_top_two" onClick={handleStart}>
        start
      </Button>
      <Button
        size="md"
        spaceTop="margin_top_two"
        color="green"
        onClick={() => setStart(false)}
      >
        pause
      </Button>
      <Button
        size="md"
        spaceTop="margin_top_two"
        color="blue"
        onClick={() => setReset(true)}
      >
        clear
      </Button>
    </div>
  );
};
