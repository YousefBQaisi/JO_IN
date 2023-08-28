import React from "react";
import "./Testimonial.css";
export default function Testimonial({ name, img, description }) {
  return (
    <>
     
      
        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src={img} alt="" />
            <h4>{name}</h4>
          </div>
          <p>{description}</p>
        </div>
      
    </>
  );
}
