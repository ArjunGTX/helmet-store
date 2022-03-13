import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Racing",
    description: "Performance oriented, extremely aerodynamic helmets.",
  },
  {
    _id: uuid(),
    categoryName: "Off Road",
    description:
      "Specially designed helmets to provide confidence on tough terrains and off-road trials.",
  },
  {
    _id: uuid(),
    categoryName: "Street",
    description: "Glossy and graphics printed helmets for a street show.",
  },
  {
    _id: uuid(),
    categoryName: "Touring",
    description:
      "Lightweight and comfortable helmets for long rides and highway cruising.",
  },
];
