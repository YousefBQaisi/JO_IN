import { useContext } from "react";
import { allData } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const { setIsActive } = useContext(allData);
  const navigate = useNavigate();
  const handelLogout = () => {
    // Update login status when logging out
  };
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <img src="./image/Logo.png" style={{ width: "13vw" }} />
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i> <span>Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i> <span>Products</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i> <span>Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i> <span>Customers</span>
        </a>
        <button
          className="btn btn-primary"
          onClick={() => {
            localStorage.clear();
            setIsActive(false);
            navigate("../Login");
          }}
        >
          <i className="bi bi-power fs-5 me-3"></i> Logout
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
