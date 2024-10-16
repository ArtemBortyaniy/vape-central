import css from "./NewProducts.module.css";
import ItemCard from "../ItemCard/ItemCard";

const NewProducts = () => {
  return (
    <div className={`${css.container} layoutContainer`}>
      <h2 className={css.title}>Новинки</h2>
      <button className={css.NewProductsBtn}>Дивитися все</button>
      <ItemCard></ItemCard>
    </div>
  );
};

export default NewProducts;
