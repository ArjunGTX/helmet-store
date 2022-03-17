import React from "react";
import "../../styles/pages/products.css";
import { Filters, ProductCard } from "./components";
import { GrClose } from "react-icons/gr";
import { useSidebar } from "../../contexts";
import { useRef } from "react";
import { useClickOutside } from "../../utils/hooks";

//hardcoded
const products = [
  {
    id: 1,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 4,
    ratingCount: 456,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
  {
    id: 2,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 3,
    ratingCount: 320,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
  {
    id: 3,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 5,
    ratingCount:573,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
  {
    id: 4,
    name: "AGV PISTA GP",
    price: 104000,
    offer: 25,
    rating: 3,
    ratingCount: 246,
    description: "RACE TESTED, GLOSSY GRAPHICS PRINTED",
    image: "assets/images/helmets/racing/agv/pista-gp-rr-min.png",
  },
];

export const Products = () => {
  const { isSidebarActive, toggleSidebar } = useSidebar();
  const sidebarRef = useRef(null);
  const closeSidebar = () => toggleSidebar(false);

  useClickOutside(sidebarRef, closeSidebar);
  return (
    <div className="products-container">
      <div
        ref={sidebarRef}
        className={`sidebar  ${isSidebarActive ? "show-sidebar" : ""}`}
      >
        <button onClick={closeSidebar} className="btn btn-icon close-icon">
          <GrClose />
        </button>
        <Filters />
      </div>
      <div className="products flex-row flex-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
