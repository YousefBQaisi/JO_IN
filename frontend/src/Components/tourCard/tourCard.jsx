import React from "react";
import "./tourCard.css";
import { useNavigate } from "react-router-dom";
function TourCard({ image, price, name, duration, id }) {
  const navigate = useNavigate();
  const handelDetails = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate(`/TourList/TourDetails/${id}`);
    } else {
      navigate(`../Login`);
    }
  };
  return (
    <>
      <div className="discover-card" onClick={handelDetails}>
        <img src={image} alt="" />
        <h2 className="dicover-title-card">{name}</h2>

        <div className="discover-card-details">
          <h3 className="price">{price} JD</h3>
          <div className="icon-days">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-cursor-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
            <p>{duration} days for trips</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourCard;
