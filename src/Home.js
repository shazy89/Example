import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import CountriesSelect from "react-form-countries-select";
import Slider from "react-slick";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      <Button
        variant="secondary"
        size="lg"
        style={{ marginLeft: "30%", marginTop: "5%" }}
      >
        <NavLink
          to="/animation"
          style={{
            color: "black",
          }}
        >
          Animation
        </NavLink>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        style={{ marginLeft: "30%", marginTop: "5%" }}
      >
        <NavLink
          to="/background"
          style={{
            color: "black",
          }}
        >
          Background
        </NavLink>
      </Button>
      <CountriesSelect />
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>1</h3>
        </div>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>2</h3>
        </div>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>3</h3>
        </div>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>4</h3>
        </div>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>5</h3>
        </div>
        <div style={{ width: "10rem", height: "10rem" }}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
