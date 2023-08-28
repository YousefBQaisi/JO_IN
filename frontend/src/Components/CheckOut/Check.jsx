import React, { useContext, useEffect, useState } from "react";
import "./Check.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { allData } from "../../context/context";
const Check = () => {
  const params = useParams();
  const navigat = useNavigate();
  const [tourCheck , setTourCheck]=useState()
// const { fetchTours, allTours } = useContext(allData);


const fetchTour = async () => {
  const res = await axios.get(`/Api/JO_IN/tours/${params.id}`);
  console.log(res.data.data.tour)
  setTourCheck(res.data.data.tour);
};
useEffect(()=>{
  fetchTour();
},[]);


  const handelCheckeout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios.post("/Api/JO_IN/userTourRoute", {
      userId: user._id,
      tourId: params.id
    });
    navigat("../");
  };
  return (
    <section className="checkoutSec">
      <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Biling details</h5>
            </div>
            <div class="card-body">
              <form>
                <h5 class="mb-4">Payment</h5>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="checkoutForm3"
                    checked
                  />
                  <label class="form-check-label" for="checkoutForm3">
                    Credit card
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="checkoutForm4"
                  />
                  <label class="form-check-label" for="checkoutForm4">
                    Debit card
                  </label>
                </div>

                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="checkoutForm5"
                  />
                  <label class="form-check-label" for="checkoutForm5">
                    Paypal
                  </label>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="formNameOnCard"
                        class="form-control"
                      />
                      <label class="form-label" for="formNameOnCard">
                        Name on card
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="formCardNumber"
                        class="form-control"
                      />
                      <label class="form-label" for="formCardNumber">
                        Credit card number
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-3">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="formExpiration"
                        class="form-control"
                      />
                      <label class="form-label" for="formExpiration">
                        Expiration
                      </label>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="form-outline">
                      <input type="text" id="formCVV" class="form-control" />
                      <label class="form-label" for="formCVV">
                        CVV
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className="btn btn-success btn-lg btn-block"
                  onClick={handelCheckeout}
                >
                  Check out
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Tour Price
                  <span>${tourCheck?.price}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  discount
                  <span>-</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount  : </strong>
                    
                  </div>
                  <span>
                    <strong>  $ {tourCheck?.price}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Check;
