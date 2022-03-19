import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Racing",
    category: "racing",
  },
  {
    _id: uuid(),
    categoryName: "Off Road",
    category: "street",
  },
  {
    _id: uuid(),
    categoryName: "Street",
    category: "offRoad",
  },
  {
    _id: uuid(),
    categoryName: "Touring",
    category: "touring",
  },
];
