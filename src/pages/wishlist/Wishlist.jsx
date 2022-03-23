import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "../../styles/pages/products.css";
import { ProductCard } from "../products/components";

const wishlist = [
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
    ratingCount: 573,
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

export const Wishlist = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => !auth.isLoggedIn && navigate("/login"), []);
  return (
    <>
      <h3 className="page-title">My Wishlist</h3>
      <div className="flex-row flex-center">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} isFavourite={true} />
        ))}
      </div>
    </>
  );
};
