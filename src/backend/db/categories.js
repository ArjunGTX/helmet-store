import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Racing",
    category: "racing",
    image: "assets/images/category/racing.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Off Road",
    category: "offRoad",
    image: "assets/images/category/off-road.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Street",
    category: "street",
    image: "assets/images/category/street.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Touring",
    category: "touring",
    image: "assets/images/category/touring.jpg",
  },
];
