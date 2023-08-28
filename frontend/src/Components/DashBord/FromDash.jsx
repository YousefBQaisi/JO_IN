// http://localhost:8000/Api/JO_IN/tours
import { useContext, useEffect, useState } from "react";

import "./fromD.css";
import axios from "axios";
import { allData } from "../../context/context";
import { useNavigate } from "react-router-dom";
function FromDash() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState({
    name: "",
    duration: "",
    price: "",
    summary: "",
    description: "",
    images: "",
    userId: user._id,
  });

  const navigate = useNavigate();
  const { setAllTours, allTours } = useContext(allData);

  // console.log(tours);
  const FormData = (event) => {
    const { name, value } = event.target;
    setForm((data) => ({ ...data, [name]: value }));
  };
  const createTour = async () => {
    try {
      const response = await axios.post("/Api/JO_IN/tours", form);
      console.log(response.data);
      setAllTours([...allTours, { ...form }]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTour();
    navigate("/dash");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tourForm">
        <h5>Add Product</h5>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => FormData(event)}
        />

        <label htmlFor="duration">Duration :</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={form.duration}
          onChange={(event) => FormData(event)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={form.price}
          onChange={(event) => FormData(event)}
        />
        <label htmlFor="summary">Summary:</label>
        <input
          type="text"
          id="summary"
          name="summary"
          value={form.summary}
          onChange={(event) => FormData(event)}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={form.description}
          onChange={(event) => FormData(event)}
        />
        <label htmlFor="images">images:</label>
        <input
          type="text"
          id="images"
          name="images"
          value={form.images}
          onChange={(event) => FormData(event)}
        />

        <button className="add-product">Add Tour</button>
      </form>
    </div>
  );
}
export default FromDash;
