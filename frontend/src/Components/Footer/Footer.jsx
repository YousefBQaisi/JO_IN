import React from "react";
export default function Footer() {
  return (
    <section className="">
      <footer className="text-center text-white" style={{ backgroundColor: "#295943" }}>
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <img src="./image/Logo2.png" alt="logo" style={{ width: "200px" }} />
            </p>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            JO_IN
          </a>
        </div>
      </footer>
    </section>
  );
}
