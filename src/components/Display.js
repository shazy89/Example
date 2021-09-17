import React, { useState, useEffect } from 'react';

const formatTime = (mins) => (mins >= 10 ? mins : `0${mins}`);

export const Display = ({ counter, setCounter, reset }) => {
  const [mins, setMins] = useState(0);

  useEffect(() => {
    const handleChanges = () => {
      if (counter >= 60) {
        setMins(mins + 1);
        setCounter(0);
      }
      if (reset) {
        setMins(0);
        setCounter(0);
      }
    };
    handleChanges();
  }, [counter, mins, setCounter, reset]);
  return (
    <h1 className="display">
      <span>{formatTime(mins)}</span>
      <span>:</span>
      <span>{formatTime(counter)}</span>
    </h1>
  );
};
/*  */
//    {`${formatTime(mins)} : ${formatTime(counter)}`}
