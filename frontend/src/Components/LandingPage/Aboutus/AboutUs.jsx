import React from "react";

export default function AboutUs() {
  return (
    <>
      <div id="AboutUS">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">JO_IN</h1>
              <p className="lead text-muted mb-0 fw-normal">
                Welcome to Discover Jordan, your ultimate online destination for unforgettable tours in the enchanting
                country of Jordan. We are dedicated to providing immersive and authentic travel experiences that
                showcase the rich history, breathtaking landscapes, and warm hospitality of this ancient land. With a
                team of expert guides and a wide range of meticulously curated itineraries, we strive to create
                unforgettable memories for every traveler.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="./image/JO_IN.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
