import React, { useState } from 'react';
import './practice.css';
import { Button } from './components/Button';
import { Display } from './components/Display';
const ApiNYCTimes = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

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
            handleDisplay={handleCounter}
          >
            start
          </Button>
          <Button size="md" spaceTop="margin_top_two" color="green">
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
