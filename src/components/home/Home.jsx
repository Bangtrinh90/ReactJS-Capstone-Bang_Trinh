import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <>
      <Carousel />
      <h1>PRODUCT FEATURE</h1>
      <div className="container-fluid product-feature">
        <div className="item">
          <div className="card">
            <img src="" alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="">Product name</Link>
              </h5>
              <p className="card-text">Short description</p>
            </div>
            <div className="card-footer-custom">
              <div className="card-footer-custom-left">Buy now</div>
              <div className="card-footer-custom-right">$85</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
