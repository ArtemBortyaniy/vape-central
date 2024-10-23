import css from './LeadersProducts.module.css';
import SliderList from '../SliderList/SliderList';

const LeadersProducts = () => {
  return (
    <div className={`${css.container} layoutContainer`}>
      <h2 className={css.title}>Лідери</h2>
      <div className={css.containerBtn}>
        <button className={css.NewProductsBtn}>Дивитися все</button>
      </div>
      <SliderList></SliderList>
    </div>
  );
};

export default LeadersProducts;
