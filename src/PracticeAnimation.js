import React, { useState, useEffect } from "react";
import "./index.css";
import Box from "./Box";

const PracticeAnimation = () => {
  const [classNames, setClassNames] = useState({
    animation: "",
    boxBorder: "",
    border: "",
  });
  const [letsAddBorder, setLetsAddBorder] = useState(false);
  const [animations, setAnimations] = useState({
    animationFinished: false,
    showAnimationStartLabel: false,
  });

  const startStopAnimation = () => {
    classNames.animation
      ? setClassNames({ animation: "" })
      : setClassNames({ animation: "animation" });
  };

  const option = {
    border: "3px solid black",
  };
  const onAnimationStart = () => {
    setAnimations({
      animationFinished: false,
      showAnimationStartLabel: true,
    });
  };

  const onAnimationEnd = () => {
    setAnimations({
      animationFinished: true,
      showAnimationStartLabel: false,
    });
  };

  const createBoxes = [1, 2, 3].map((element, index) => <Box id={index} />);

  const { animationFinished, showAnimationStartLabel } = animations;
  const displayState = animationFinished ? "block" : "none";
  const displayStateAnimationStart =
    !animationFinished && showAnimationStartLabel ? "block" : "none";

  return (
    <div className="App">
      <button onClick={startStopAnimation}>Start/stop the animation</button>

      <div style={{ display: displayStateAnimationStart }}>
        <h1>Animation Start</h1>
      </div>
      <div style={{ display: displayState }}>
        <h1>Animation Finished</h1>
      </div>

      <div className="demo">
        <div
          className={`box ${classNames.animation}`}
          onAnimationEnd={onAnimationEnd}
          onAnimationStart={onAnimationStart}
        />
      </div>
    </div>
  );
};
export default PracticeAnimation;
