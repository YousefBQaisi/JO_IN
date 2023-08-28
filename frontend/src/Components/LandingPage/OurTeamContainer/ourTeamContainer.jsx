import React from "react";
import OurTeam from "./OurTime/OurTeam";
import "./Teamcontainer.css";
export default function ourTeamContainer() {
  return (
    <div id="Team">
      <div className="testimonial-text-wrapper">
        <h1 className="section-sub-title">Our Team</h1>
      </div>
      <div className="TeamContainer">
        <OurTeam img="./image/Abdulraof.jpg" name="Abdulraof Mattur" />
        <OurTeam img="./image/amer.png" name="Amer Naser" />
        <OurTeam img="./image/duha.png" name="Duha Jilani" />
        <OurTeam img="./image/jehad.jpg" name="Jehad Mansra" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
        <OurTeam img="./image/yousef.jpg" name="Yousef Alqaisi" />
        <OurTeam img="./image/yousef.jpg" name="Yousef Qaisi" />
      </div>
    </div>
  );
}
