import React, { useState, useEffect } from 'react';

const formatTime = (mins) => (mins >= 10 ? mins : `0${mins}`);

export const Display = ({ counter, setCounter }) => {
  const [mins, setMins] = useState(0);

  useEffect(() => {
    const handleChanges = () => {
      if (counter === 60) {
        setMins(mins + 1);
        setCounter(0);
      }
    };
    handleChanges();
  }, [counter, mins, setCounter]);
  return (
    <h1 className="display">{`${formatTime(mins)} : ${formatTime(
      counter
    )}`}</h1>
  );
};
