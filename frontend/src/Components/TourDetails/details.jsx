import React, { useEffect, useState } from "react";
// import "./css/all.min.css";
import "./css/style.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  const params = useParams();
  const [oneTour, setOneTour] = useState();
  const [vendor, setvendor] = useState();
  const fetchTour = async () => {
    const res = await axios.get(`/Api/JO_IN/tours/${params.id}`);
    await setOneTour(res.data.data.tour);
  };

  const getuser = async () => {
    if (oneTour && oneTour.userId) {
      const res2 = await axios.get(`/Api/JO_IN/users/${oneTour.userId}`);
      setvendor(res2.data.data.user);
    }
  };
  useEffect(() => {
    fetchTour();
  }, []);

  useEffect(() => {
    getuser();
  }, [oneTour]);
  return (
    <div className="Card-container">
      {console.log()}
      <div className="box">
        <div className="images">
          <div className="img-holder active">
            <img src={oneTour?.images} alt="" />
          </div>
        </div>
        <div className="basic-info">
          <h1>{oneTour?.name}</h1>
          <h2>{vendor?.name}</h2>

          <div className="rate">
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
          </div>
          <span>{oneTour?.price}</span>
          <div className="options">
            <Link to={`../CheckOut/${oneTour?._id}`}>Book Now</Link>
          </div>
        </div>
        <div className="description">
          <p>{oneTour?.description}</p>
          <ul className="features">
            <li>
              <i className="fa-solid fa-circle-check" /> All meals included
            </li>
            <li>
              <i className="fa-solid fa-circle-check" /> 5 Starts hotels
            </li>
            <li>
              <i className="fa-solid fa-circle-check" /> All activities included
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
