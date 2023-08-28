import React from "react";
import Testimonial from "./testimonial/Testimonial";
import "./testimonial/Testimonial.css"
export default function TestimonialContainer() {
  return (
 
      <section className="testimonial-container" id="Testimonial">
        <div className="testimonial-text-wrapper">
          <h1 className="section-sub-title">What they say about us</h1>
        </div>
        <div className="testimonial-cards-container">
          <Testimonial
            img="./image/person1.jpg"
            name="Angelina Simple"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
          <Testimonial
            img="./image/person2.jpg"
            name="Viola Natalie"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
          <Testimonial
            img="./image/person3.jpg"
            name="Robert John K."
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
          <Testimonial
            img="./image/person4.jpg"
            name="Anggi Nani"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
          <Testimonial
            img="./image/person5.jpg"
            name="Graham Suryo J"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
          <Testimonial
            img="./image/person6.jpg"
            name="Bagas G Natfi"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis"
          />
          {/*  */}
        </div>
      </section>

  );
}
