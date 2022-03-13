import React from "react";
import "../../styles/pages/home.css";
import { Banner, Brand, CategoryCard } from "./components";

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
const brands = [
  {
    id: 1,
    image: "agv.png",
  },
  {
    id: 2,
    image: "shoei.png",
  },
  {
    id: 3,
    image: "arai.png",
  },
  {
    id: 4,
    image: "mt.png",
  },
];

export const Home = () => {
  return (
    <main className="full-width px-xl">
      <div className="full-width ul-light mt-sm" />
      <section class="category-container p-xl mt-sm full-width">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category.category}
            image={category.image}
            className="m-sm"
          />
        ))}
      </section>
      <section className="full-width fc-ct-ct p-xl pt-sm">
        <Banner background={"banner.jpg"} className="py-md" />
      </section>
      <section className="full-width px-xl fr-ct-ct f-wrap mt-auto mb-xl">
        {brands.map((brand) => (
          <Brand key={brand.id} image={brand.image} className="mx-xl my-md" />
        ))}
      </section>
    </main>
  );
};
