import React from "react";
import "./tourCard.css";

const Pagination = ({ tourPerPage, totalTour, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTour / tourPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
