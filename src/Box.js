import React, { useState, useRef, useEffect } from "react";

const Box = ({ id, handleChange }) => {
  const [selected, setSelected] = useState("");

  return <div id={id} className={`box-1`} onClick={handleChange} />;
};
export default Box;
