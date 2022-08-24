import { Link } from "react-router-dom";
import "../../styles/pages/products.css";
import { ProductCard } from "../products/components";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../redux/slices/wishlist";

export const Wishlist = () => {
  const wishlist = useSelector(selectWishlist);

  return (
    <>
      {wishlist.length !== 0 && (
        <h3 className="page-title">My Wishlist({wishlist.length})</h3>
      )}
      <div className="flex-row flex-center">
        {wishlist?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {wishlist.length === 0 && (
          <div className="flex-col flex-center full-page">
            <h2>Your Wishlist is Empty</h2>
            <Link to="/products" className="btn btn-primary">
              SHOP NOW
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
