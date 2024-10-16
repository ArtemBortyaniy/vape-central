import css from "./LeadersProducts.module.css";
import ItemCard from "../ItemCard/ItemCard";

const LeadersProducts = () => {
  return (
    <div className={`${css.container} layoutContainer`}>
      <h2 className={css.title}>Лідери</h2>
      <button className={css.NewProductsBtn}>Дивитися все</button>
      <ItemCard></ItemCard>
    </div>
  );
};

export default LeadersProducts;
