import React, { useState, useEffect } from "react";
import Box from "./Box";
import svg from "./UMBABE.svg";
const BoxMain = () => {
  const [trigger, setTrigger] = useState(false);
  const [offset, setOffset] = useState(0);
  const handleChange = (e) => {};
  const createBoxes = [1, 2, 3].map((box, index) => (
    <Box id={index} handleChange={handleChange} />
  ));
  function logit() {}
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  console.log(Math.floor(offset) > 100, Math.floor(offset));
  return (
    <>
      <header className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span
              onAnimationEnd={(e) => setTrigger(false)}
              className={`heading-primary-main ${offset > 50 ? "triger" : ""}`}
            >
              SHAZY
            </span>
          </h1>
        </div>
      </header>
      <section className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span
              onAnimationEnd={(e) => setTrigger(false)}
              className={`heading-primary-main ${
                offset > 600 ? "pipirko" : ""
              }`}
            >
              Hey Pipir
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default BoxMain;
