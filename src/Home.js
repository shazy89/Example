import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Button
        variant="secondary"
        size="lg"
        style={{ marginLeft: "30%", marginTop: "5%" }}
      >
        <NavLink
          to="/myform"
          style={{
            color: "black",
          }}
        >
          FORM
        </NavLink>
      </Button>
    </div>
  );
};

export default Home;
