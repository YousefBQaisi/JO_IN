import React, { useContext, useEffect } from "react";
import "./lOgin.css";
import Petra from "./petra.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
import { allData } from "../../../context/context";
function Login() {
  const { isActive, setIsActive, setUserID, userID } = useContext(allData);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [AllUsers, setAllUsers] = useState([]);
  const [errror, setError] = useState(null);

  const fetchUser = async () => {
    const res = await axios.get("/Api/JO_IN/users");
    setAllUsers(res.data.data.users);
  };

  useEffect(() => {
    fetchUser();
    localStorage.clear();
    setUserID(null);
  }, []);

  const handelLogin = async (e) => {
    setError(null);
    e.preventDefault();
    try {
      // Find the user with the matching email in the AllUsers array
      const user = await AllUsers.find((ele) => ele.email === emailRef.current.value);

      if (!user) {
        setError("User not found"); // Throw an error if user not found
      }

      // Compare the provided password with the hashed password stored in the user object
      const passwordMatches = await bcrypt.compare(passwordRef.current.value, user.password);
      if (passwordMatches) {
        // Passwords match, you can proceed with setting the current user
        localStorage.setItem("user", JSON.stringify(user));
        if (user.roleId == 1) {
          navigate("/TourList");
          setIsActive(true);
          setUserID(user.roleId);
        } else {
          navigate("/dash");
        }
        return user; // Return the user object for success
      } else {
        setError("Invalid password"); // Throw an error if password does not match
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while processing your request");
    }
  };
  // ...

  return (
    <div>
      <div
        className="Log-in "
        style={{
          backgroundImage: `url(${Petra})`,
          minHeight: "80vh",
          backgroundSize: "cover",
        }}
      >
        <div className="LoginForm">
          <form className="form-b" onSubmit={handelLogin}>
            <h3>Welcome Again</h3>
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                ref={emailRef}
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
                id="exampleInputPassword1"
              />
            </div>
            <h6>
              Don't Have Account?
              <Link to="/Choose" className="text-light">
                Sign Up
              </Link>
            </h6>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            {errror !== null && <div className="bg-danger p-1">{errror}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
