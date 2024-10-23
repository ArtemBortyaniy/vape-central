import css from './LeadersProducts.module.css';
import SliderList from '../SliderList/SliderList';

const LeadersProducts = () => {
  return (
    <div className={`${css.container} layoutContainer`}>
      <h2 className={css.title}>Лідери</h2>
      <button className={css.NewProductsBtn}>Дивитися все</button>
      <SliderList></SliderList>
    </div>
  );
};

export default LeadersProducts;
