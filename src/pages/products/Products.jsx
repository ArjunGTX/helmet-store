import React, { useRef, useState, useEffect } from "react";
import "../../styles/pages/products.css";
import { Filters, ProductCard } from "./components";
import { GrClose } from "react-icons/gr";
import { useClickOutside } from "../../utils/hooks";
import { getFilteredProducts, getProducts } from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/slices/filter";
import { close, selectIsSidebarOpen } from "../../redux/slices/sidebar";

export const Products = () => {
  const filters = useSelector(selectFilters);
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  const dispatch = useDispatch();

  const sidebarRef = useRef(null);
  useClickOutside(sidebarRef, () => dispatch(close()));

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        setLoading(false);
        setProducts(response.data.products);
      } catch (error) {
        //will be replaced by alert messages
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  const filteredProducts = getFilteredProducts(products, filters);

  return (
    <div className="products-container">
      <div
        ref={sidebarRef}
        className={`sidebar  ${isSidebarOpen ? "show-sidebar" : ""}`}
      >
        <button
          onClick={() => dispatch(close())}
          className="btn btn-icon close-icon"
        >
          <GrClose />
        </button>
        {filters && <Filters filters={filters} />}
      </div>
      <div className="products flex-row flex-center">
        {filteredProducts.length !== 0 ? (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        ) : (
          <h3>No Products matched your search!</h3>
        )}
      </div>
    </div>
  );
};
