import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import ReactSlick from "../reactSlick";
import makeAnimated from "react-select/animated";

import Inputs from "./Inputs";

let initialState = {
  email: "",
  name: "",
  lastName: "",
  school: "",
  password: "",
  email1: "",
};
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const animatedComponents = makeAnimated();
const MyForm = () => {
  const [myFavForm, setMyFavForm] = useState(initialState);

  const onChange = (e) =>
    setMyFavForm({ ...myFavForm, [e.target.name]: e.target.value });

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const onSubmit = async (e) => {
    e.preventDefault(e);
    await sleep(3000);
    alert(JSON.stringify(myFavForm, null, " "));
    setMyFavForm(initialState);
  };
  const myArray = Object.keys(myFavForm).map((attribute, index) => (
    <Inputs
      key={index}
      value={myFavForm.attribute}
      attribute={attribute}
      onChange={onChange}
    />
  ));
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik>
        <Form onSubmit={onSubmit}>
          {myArray}
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

Form.propTypes = {};

export default MyForm;
