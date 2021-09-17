import React, { useState, useRef, useEffect, useCallback } from 'react';
import './practice.css';
import { Display } from './components/Display';
import { ChangeSeconds } from './components/ChangeSeconds';
import { Contros } from './components/Contros';
const ApiNYCTimes = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [targetSeconds, setTargetSeconds] = useState(1);
  const interval = useRef(null);

  const handleCounter = useCallback(
    () => setCounter((counter) => counter + targetSeconds),
    [targetSeconds]
  );
  const handleStart = () => {
    if (reset) setReset(false);
    if (!start) setStart(true);
  };

  useEffect(() => {
    if (start) {
      interval.current = setInterval(handleCounter, 1000);
    }
    if (!start || reset) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    return () => clearInterval(interval.current);
  }, [counter, handleCounter, reset, start]);

  return (
    <section className="container_xxx">
      <div className="progress_section">
        <div className="display_container">
          <Display
            size=""
            counter={counter}
            setCounter={setCounter}
            reset={reset}
          />
        </div>
        <Contros
          handleStart={handleStart}
          setStart={setStart}
          setReset={setReset}
        />
        <ChangeSeconds onClick={setTargetSeconds} />
      </div>
    </section>
  );
};

export default ApiNYCTimes;
