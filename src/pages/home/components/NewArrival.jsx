import React from "react";

export const NewArrival = ({item}) => {
  return (
    <div className="new-arrival">
      <div className="cover">
        <img className="image-res" src={`assets/images/helmets/racing/agv/${item.image}`}alt={item.image} />
      </div>
      <div className="content">
        <h4>{item.item}</h4>
        <p>
         {item.desc}
        </p>
      </div>
    </div>
  );
};
