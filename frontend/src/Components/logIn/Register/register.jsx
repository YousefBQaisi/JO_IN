import React from "react";
import "./rEgister.css";
import Sea from "./deadsea.jpg";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  let params = useParams();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();

  const HandelRegister = async (e) => {
    e.preventDefault();
    // Get form values
    const name = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;
    const phoneNumber = phoneRef.current.value;
    const Address = cityRef.current.value;

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid email address. Please enter a valid email.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }

    // Password validation using regular expression
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }

    // Password and Retype password check
    if (password !== repassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }

    // Create a user object with the form values
    const newUser = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      Address: Address,
      isActive: true,
      roleId: params.id
    };
    try {
      // Send a POST request to your authentication API endpoint
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
      const response = await axios.post("/Api/JO_IN/users", newUser);
       // Assuming the response contains the user data or a success message
      
      navigate("/login"); // Redirect to the login page after successful registration
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div>
      <div
        className="register "
        style={{
          backgroundImage: `url(${Sea})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="FORMTour">
          <form className="form-a" onSubmit={HandelRegister}>
            <h3>Join Us</h3>
            <div className="mb-2">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                ref={userNameRef}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                ref={emailRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordRef}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Retype password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={repasswordRef}
              />
            </div>
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="numeric"
              className="form-control"
              id="phone"
              ref={phoneRef}
            />
            <div class="col-md-0">
              <label for="city" class="form-label">
                City
              </label>
              <select className="form-select" id="city" ref={cityRef} required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Aqaba</option>
                <option>Irbid</option>
                <option>Salt</option>
              </select>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
