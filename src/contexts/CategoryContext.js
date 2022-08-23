import { createContext, useState, useContext, useEffect } from "react";
import { getCategories } from "../utils/api";

const CategoryContext = createContext(null);

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await getCategories();
        if (status !== 200) return;
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
