import React from "react";
import "../../styles/pages/home.css";
import { Banner, Category, Footer, NewArrival } from "./components";

//will be replaced by backend data in the future
const categories = [
  {
    id: 1,
    category: "racing",
    image: "racing.jpg",
  },
  {
    id: 2,
    category: "street",
    image: "street.jpg",
  },
  {
    id: 3,
    category: "touring",
    image: "touring.jpg",
  },
  {
    id: 4,
    category: "off road",
    image: "off-road.jpg",
  },
];
const newArrivals = [
  {
    id: 1,
    image: "pista-gp-rr-min.png",
    item: "AGV PISTA GP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde velit labore accusantium veniam",
  },
  {
    id: 1,
    image: "pista-gp-rr-min.png",
    item: "AGV PISTA GP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde velit labore accusantium veniam",
  },
  {
    id: 1,
    image: "pista-gp-rr-min.png",
    item: "AGV PISTA GP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde velit labore accusantium veniam",
  },
];

export const Home = () => {
  return (
    <>
      <Category categories={categories} />
      <section className="flex-row flex-center">
        <Banner offer={35} />
      </section>
      <section className="flex-col flex-center">
        <h3 className="section-head">NEW ARRIVALS</h3>
        <div className="flex-row flex-center">
          {newArrivals.map((item) => (
            <NewArrival item={item} key={item.id} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
