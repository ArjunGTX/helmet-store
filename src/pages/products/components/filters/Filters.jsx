import { useEffect } from "react";
import { brandList } from "../../../../utils/constants";
import { Availability } from "./Availability";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { PriceRange } from "./PriceRange";
import { Rating } from "./Rating";
import { SortBy } from "./SortBy";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../../../redux/slices/category";
import {
  addBrand,
  addCategory,
  clearFilters,
  removeBrand,
  removeCategory,
  setPriceRange,
  setRating,
  sort,
  toggleFastDelivery,
  toggleStockAvailability,
} from "../../../../redux/slices/filter";

export const Filters = ({ filters }) => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearFilters());
  }, []);

  const handlePriceChange = (e) => dispatch(setPriceRange(e.target.value));

  const handleStockChange = (e) =>
    dispatch(toggleStockAvailability(e.target.checked));

  const handleDeliveryChange = (e) =>
    dispatch(toggleFastDelivery(e.target.checked));

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      dispatch(addCategory(e.target.value));
    } else {
      dispatch(removeCategory(e.target.value));
    }
  };

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      dispatch(addBrand(e.target.value));
    } else {
      dispatch(removeBrand(e.target.value));
    }
  };

  const handleRatingChange = (e) =>
    dispatch(setRating(parseInt(e.target.value)));

  const handleSortChange = (e) => dispatch(sort(e.target.value));

  const handleClearAll = () => dispatch(clearFilters());

  return (
    <>
      <div className="flex-row flex-center">
        <h3>Filters</h3>
        <button onClick={handleClearAll} className="btn btn-link ml-auto">
          Clear All
        </button>
      </div>
      <div className="filters-container">
        <h4>Price</h4>
        <PriceRange
          min={5000}
          max={150000}
          step={2000}
          range={filters.priceRange}
          onChange={handlePriceChange}
        />
        <hr />
        <h4>Availability</h4>
        <div className="flex-col">
          <Availability
            stock={filters.includeOutOfStock}
            delivery={filters.fastDelivery}
            onStockChange={handleStockChange}
            onDeliveryChange={handleDeliveryChange}
          />
        </div>
        <hr />
        <h4>Category</h4>
        <div className="flex-col">
          {categories.map((category) => (
            <Category
              category={category}
              key={category._id}
              checked={filters.category[category.category]}
              onChange={handleCategoryChange}
            />
          ))}
        </div>
        <hr />
        <h4>Brands</h4>
        <div className="flex-col">
          {brandList
            .map((item) => item.brand)
            .map((brand) => (
              <Brand
                brand={brand}
                key={brand}
                checked={filters.brands.includes[brand]}
                onChange={handleBrandChange}
              />
            ))}
        </div>
        <hr />
        <h4>Rating</h4>
        <div className="flex-col">
          {[4, 3, 2, 1].map((rating) => (
            <Rating
              rating={rating}
              key={rating}
              checked={filters.rating === rating}
              onChange={handleRatingChange}
            />
          ))}
        </div>
        <hr />
        <h4>Sort by</h4>
        <div className="flex-col">
          {["high", "low"].map((sort) => (
            <SortBy
              sort={sort}
              checked={filters.sortBy === sort}
              onChange={handleSortChange}
              key={sort}
            />
          ))}
        </div>
      </div>
    </>
  );
};
