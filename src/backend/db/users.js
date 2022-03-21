import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "guest",
    lastName: "user",
    email: "guestuser@email.com",
    password: bcyrpt.hashSync("GuestUser@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
