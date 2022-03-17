import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const ProductRating = ({ rating, ratingCount }) => {
  return (
    <div className="rating flex-row align-center">
      {[1,2,3,4,5].map((num) => num <= rating ? <AiFillStar key={num} className="filled"/> : <AiOutlineStar key={num} />)}
      ({ratingCount})
    </div>
  );
};
