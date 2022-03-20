import { useCategories } from "../../contexts";
import "../../styles/pages/home.css";
import { brandList } from "../../utils/constants";
import { Banner, Brand, Category, Footer } from "./components";

export const Home = () => {
  const { categories } = useCategories();

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
