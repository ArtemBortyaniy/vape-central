import css from './NewProducts.module.css';
import SliderList from '../SliderList/SliderList';

const NewProducts = () => {
  return (
    <div className={`${css.container} layoutContainer`}>
      <h2 className={css.title}>Новинки</h2>
      <button className={css.NewProductsBtn}>Дивитися все</button>
      <SliderList></SliderList>
    </div>
  );
};

export default NewProducts;
