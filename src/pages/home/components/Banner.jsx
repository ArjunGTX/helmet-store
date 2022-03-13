import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

export const Banner = ({ background, className }) => {
  return (
    <div className={`full-width px-sm ${className ? className : ""}`}>
      <div class="main-banner bg-res fc-ct-ct br-xs full-width of-hidden pos-rel">
        <img
          className="img-res"
          src={`assets/images/${background}`}
          alt={background}
        />
        <div className="pos-abs txt-light full-width full-height fc-ct-ct p-xl">
          <h4 className="txt-xl txt-center font-bold">
            RULE THE ROAD, BUT FIRST WEAR THE CROWN
          </h4>
          <div className="fr-ct-ct">
            <span className="txt-lg font-medium">SELECT YOUR'S NOW</span>
            <Link to="/products">
              <Button
                size="md"
                className="ml-lg font-medium"
                variant="contained"
              >
                VIEW COLLECTION
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
