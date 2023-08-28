import React, { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "../tourCard/tourCard";

function AllTour() {
  const [tours, setTours] = useState([]);

  const getTour = async () => {
    try {
      const response = await axios.get("/Api/JO_IN/tours");
      setTours(response.data.tours);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  return (
    <>
      <div>
        {tours.map((element) => {
          return (
            <TourCard
              name={element.name}
              price={element.price}
              duration={element.duration}
              image={element.images}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllTour;
