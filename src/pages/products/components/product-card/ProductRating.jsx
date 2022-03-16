import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const ProductRating = ({ rating }) => {
  return (
    <div className="rating">
      {[1,2,3,4,5].map((num) => num <= rating ? <AiFillStar key={num} className="filled"/> : <AiOutlineStar key={num} />)}
    </div>
  );
};
