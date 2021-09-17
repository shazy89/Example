import React, { useState, useRef, useEffect } from 'react';
import './practice.css';
import { Button } from './components/Button';
import { Display } from './components/Display';
const ApiNYCTimes = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const interval = useRef(null);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (start) {
      interval.current = setInterval(handleCounter, 1000);

      return () => clearInterval(interval.current);
    }
  }, [counter, start]);

  return (
    <section className="container">
      <div className="progress_section">
        <div className="display_container">
          <Display size="" counter={counter} setCounter={setCounter} />
        </div>
        <div className="buttons_section margin_top_two">
          <Button
            size="md"
            spaceTop="margin_top_two"
            onClick={() => setStart(true)}
          >
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
          <Button size="md" spaceTop="margin_top_two" color="blue">
            stop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApiNYCTimes;
