import { useEffect } from "react";
import {
  addBrand,
  addCategory,
  clearFilters,
  filterPrice,
  filterRating,
  removeBrand,
  removeCategory,
  sortItems,
  toggleDelivery,
  toggleStock,
} from "../../../../actions";
import { useFilters } from "../../../../contexts";
import { brandList } from "../../../../utils/constants";
import { Availability } from "./Availability";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { PriceRange } from "./PriceRange";
import { Rating } from "./Rating";
import { SortBy } from "./SortBy";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../../redux/slices/category";

export const Filters = ({ filters }) => {
  const categories = useSelector(selectCategories);

  const { filterDispatch } = useFilters();

  useEffect(() => {
    return () => filterDispatch(clearFilters());
  }, []);

  const handlePriceChange = (e) => filterDispatch(filterPrice(e.target.value));

  const handleStockChange = (e) =>
    filterDispatch(toggleStock(e.target.checked));

  const handleDeliveryChange = (e) =>
    filterDispatch(toggleDelivery(e.target.checked));

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      filterDispatch(addCategory(e.target.value));
    } else {
      filterDispatch(removeCategory(e.target.value));
    }
  };

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      filterDispatch(addBrand(e.target.value));
    } else {
      filterDispatch(removeBrand(e.target.value));
    }
  };

  const handleRatingChange = (e) =>
    filterDispatch(filterRating(parseInt(e.target.value)));

  const handleSortChange = (e) => filterDispatch(sortItems(e.target.value));

  const handleClearAll = () => filterDispatch(clearFilters());

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
