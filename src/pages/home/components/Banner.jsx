import React from "react";
import { Link } from "react-router-dom";

export const Banner = ({ offer }) => {
  return (
    <div class="main-banner bg-res ">
      <div className="overlay"></div>
      <img src="assets/images/banner.jpg" alt="banner" className="img-res" />
      <div className="content flex-col flex-center">
        <h2>RULE THE ROAD, BUT FIRST WEAR THE CROWN</h2>
        <p>
          UPTO <span class="offer">{offer}% OFF</span> POPULAR BRANDS
        </p>
        <Link to="/products">
          <button class="btn btn-primary">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};
