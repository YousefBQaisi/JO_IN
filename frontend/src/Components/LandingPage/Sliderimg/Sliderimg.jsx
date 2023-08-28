import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";

// we use bootstrap react to create image slider
function SlideImg() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: "100vh", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j1.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h1 style={{ fontFamily: " Nantes Light, serif" }}>Aqaba</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: "100vh", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontFamily: " Nantes Light, serif" }}>Petra</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "100vh", objectFit: "cover" }}
          className="d-block w-100"
          src="./image/j3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{ fontFamily: " Nantes Light, serif" }}>Wadi Rum</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideImg;
