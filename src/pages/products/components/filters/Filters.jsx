import { Category } from "./Category";
import { PriceRange } from "./PriceRange";
import { Rating } from "./Rating";
import { SortBy } from "./SortBy";

const categories = [
  {
    name: "Racing",
    id: "racing",
  },
  {
    name: "Street",
    id: "street",
  },
  {
    name: "Touring",
    id: "touring",
  },
  {
    name: "Off Road",
    id: "off-road",
  },
];

export const Filters = () => {
  return (
    <>
      <div className="flex-row flex-center">
        <h3>Filters</h3>
        <button className="btn btn-link ml-auto">Clear All</button>
      </div>
      <div className="filters-container">
        <h4>Price</h4>
        <PriceRange min={5000} max={150000} />
        <hr />
        <h4>Category</h4>
        <div className="flex-col">
          {categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
        <hr />
        <h4>Rating</h4>
        <div className="flex-col">
          {[4, 3, 2, 1].map((rating) => (
            <Rating rating={rating} key={rating} />
          ))}
        </div>
        <hr />
        <h4>Sort by</h4>
        <div className="flex-col">
          <SortBy from="High" to="Low" />
          <SortBy from="Low" to="High" />
        </div>
      </div>
    </>
  );
};
