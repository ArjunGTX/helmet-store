import "../../styles/pages/home.css";
import { brandList } from "../../utils/constants";
import { Banner, Brand, Category, Footer } from "./components";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/slices/category";

export const Home = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      <Category categories={categories} />
      <section className="flex-row flex-center">
        <Banner offer={20} />
      </section>
      <section className="flex-col flex-center">
        <div className="flex-row flex-center">
          {brandList.map((item) => (
            <Brand item={item} key={item.brand} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
