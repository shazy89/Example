import React from 'react';
import './practice.css';
import { Button } from './components/Button';

const ApiNYCTimes = () => {
  return (
    <section className="container">
      <div>
        <div>
          <h1>Numbers</h1>
        </div>
        <div>
          <Button size="lr">+</Button>
          <div>-</div>
        </div>
        <div>pause</div>
      </div>
    </section>
  );
};

export default ApiNYCTimes;
