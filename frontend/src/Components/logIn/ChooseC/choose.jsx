import React from "react";
import "./choose.css";
import { Link, useNavigate } from "react-router-dom";
function Choose() {
  const navigate = useNavigate();

  return (
    <div className="chooseContainer">
      <div className="card" >
        <img src="./image/tourist.avif" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tourist</h5>

          <button
            className="btn "
            onClick={() => {
              navigate("/Choose/1");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="card">
        <img src="./image/vendor.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tour Guide</h5>

          <button className="btn "  onClick={() => {
              navigate("/Choose/2");
            }}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Choose;
