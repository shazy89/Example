import React from "react";
import { Formik, Field, Form } from "formik";

const Inputs = ({ attribute, onChange, value }) => {
  const capitalize = attribute[0].toUpperCase() + attribute.slice(1);

  return (
    <>
      <label htmlFor="name">{capitalize}</label>
      <Field
        id={`${attribute}`}
        name={`${attribute}`}
        value={value}
        onChange={onChange}
        placeholder={attribute}
      />
    </>
  );
};

export default Inputs;
