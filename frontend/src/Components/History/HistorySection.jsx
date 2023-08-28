import React, { useEffect, useState } from "react";
import "./History.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HistorySection = () => {
  // Sample history data

  const [historyDat, setHistoryData] = useState([]);
  const [Tours, setTours] = useState([]);
  const [Tourshis, setTourshis] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()

  const fetchHistory = async () => {
    const res = await axios.get("/Api/JO_IN/userTourRoute");
    setHistoryData(res.data.data.userTours);
  };

  const getTour = async () => {
    const res = await axios.get("/Api/JO_IN/tours");
    const filteredTours = res.data.tours.filter((tour) =>
      historyDat.some((item) => item.tourId === tour._id && item.userId === user._id)
    );
    setTourshis(filteredTours);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    getTour();
  }, [historyDat]);

  return (
    <div className="history-container d-flex justify-content-center align-items-center">
      <div className="history-wrapper">
        <h2 className="history-title text-center mb-4">History</h2>
        <div className="history-list">
          {Tourshis?.map((item, index) => (
            <div className="history-item" key={index}>
              <img className="history-picture" src={item?.images} alt={item?.name} />
              <div className="history-details">
                <h3 className="history-item-title">{item?.name}</h3>
                <p className="history-description">{item?.description}</p>
                <p className="history-price">Price: {item?.price}</p>
                <p className="history-time">Time: {item.time}</p>
                <p className="history-date">Date: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=>navigate("../")} type="submit" className="btn ">
          Back
        </button>
      </div>
    </div>
  );
};

export default HistorySection;
