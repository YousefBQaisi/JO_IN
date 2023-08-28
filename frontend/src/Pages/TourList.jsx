import React, { useContext, useEffect, useState } from "react";
import TourCard from "../Components/tourCard/tourCard";
import "../Components/tourCard/tourCard.css";
// import { tourItems, badges } from "./TourDataTest";
// import BadgeCard from "../Components/tourCard/Test";
import Pagination from "../Components/tourCard/Pagination";
import axios from "axios";
import { allData } from "../context/context";
import { useNavigate } from "react-router-dom";

function TourList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tourPerPage] = useState(6);
  const { fetchTours, allTours } = useContext(allData);
  console.log(allTours);

  // Get current tour
  const indexOfLastTour = currentPage * tourPerPage;
  const indexOfFirstTour = indexOfLastTour - tourPerPage;
  const currentToursList = allTours.slice(indexOfFirstTour, indexOfLastTour);

  // Chang page
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div>
      <section className="discover-container">
        <div className="discover-text-wrapper">
          <h3 className="section-title ">Travelers Point</h3>
          <h1 className="section-sub-title ">
            We help to find your dream place
          </h1>
        </div>
        <div className="discover-cards-container animate__animated animate__fadeIn">
          {currentToursList.map((item) => {
            return (
              <TourCard
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.images}
                duration={item.duration}
                id={item._id}
              />

              //   <BadgeCard
              //     key={item.id}
              //     title={item.name}
              //     description={item.summary}
              //     country={item.difficulty}
              //     badges={badges}
              //     image={item.images}
              //   />
            );
          })}
        </div>

        <Pagination
          tourPerPage={tourPerPage}
          totalTour={allTours.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
}

export default TourList;
