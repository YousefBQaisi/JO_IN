import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { allData } from "../../context/context";
export default function Nav() {
  const { isActive, setIsActive, setUserID, userID } = useContext(allData);
  const [IsTogle, setTogle] = useState(false);
  useEffect(() => {
    // Check login status when the component mounts
    isLogin();
    cheackid();
  }, [userID]);
  const handeltogle = () => {
    if (IsTogle) {
      setTogle(false);
    } else {
      setTogle(true);
    }
  };

  const isLogin = () => {
    // Use the state to track the login status
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const cheackid = () => {
    const x = JSON.parse(localStorage.getItem("user"));
    if (x) setUserID(x.roleId);
  };

  const handelLogout = () => {
    localStorage.clear();
    setIsActive(false); // Update login status when logging out
  };
  console.log(userID);
  if (userID == undefined || userID === `1` || userID == null) {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light  mask-custom shadow-0"
          style={{ background: "#fff", width: "100%" }}
        >
          <div className="container justify-content-around">
            <Link to="/">
              <img style={{ width: "100px" }} src="./image/Logo.png" alt="lOGO" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handeltogle}
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className={IsTogle ? "collapse navbar-collapse show text-center" : "collapse navbar-collapse "}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto ps-5">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#AboutUS">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Testimonial">
                    Testimonial
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#Team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TourList">
                    Tours
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ps-5">
                {!isActive ? (
                  <>
                    <li className="nav-item me-3 me-lg-0">
                      <Link className="nav-link" to="Login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item me-3 me-lg-0">
                      <Link className="nav-link" to="/Choose">
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item me-3 me-lg-0">
                      <Link className="nav-link" to="Login" onClick={handelLogout}>
                        Logout
                      </Link>
                    </li>
                    <li className="nav-item me-3 me-lg-0">
                      <Link className="nav-link" to="/History">
                        History
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  } else {
    return;
  }
}
