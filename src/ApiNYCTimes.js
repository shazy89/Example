import React, { useState, useRef, useEffect, useCallback } from 'react';
import './practice.css';
import { Button } from './components/Button';
import { Display } from './components/Display';
import { ChangeSeconds } from './components/ChangeSeconds';
const ApiNYCTimes = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const interval = useRef(null);

  const handleCounter = useCallback(
    () => setCounter((counter) => counter + 4),
    []
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
    <section className="container">
      <div className="progress_section">
        <div className="display_container">
          <Display
            size=""
            counter={counter}
            setCounter={setCounter}
            reset={reset}
          />
        </div>
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
        <ChangeSeconds />
      </div>
    </section>
  );
};

export default ApiNYCTimes;
