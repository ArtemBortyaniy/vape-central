import ItemCard from '../ItemCard/ItemCard';
import css from './SliderList.module.css';

const SliderList = () => {
  const cards = Array(4).fill(null);

  return (
    <div className={css.sliderContainer}>
      {cards.map((_, index) => (
        <div key={index} className={css.sliderListItem}>
          <ItemCard />
        </div>
      ))}
    </div>
  );
};

export default SliderList;
