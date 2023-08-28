import React from "react";
import "./OurTeam.css";
export default function OurTeam(props) {
  return (
    <section className="ourTeamSection">
      <div className="ourTeam">
        <img src={props.img} alt="user image" />
        <h5>{props.name}</h5>
        <h6>Full Stack Web & Mobile Developer</h6>
      </div>
    </section>
  );
}
