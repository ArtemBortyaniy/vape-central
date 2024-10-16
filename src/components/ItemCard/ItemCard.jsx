import sprite from "../../assets/symbol-defs.svg";
import css from "./ItemCard.module.css";
import img from "../../assets/ProductImage.jpg";

const ItemCard = () => {
  return (
    <div className={css.container}>
      <svg className={css.iconPosition1}>
        <use
          href={`${sprite}#icon-justice-scale-1--office-work-scale-justice-company-arbitration-balance-court`}
        />
      </svg>

      <svg className={css.iconPosition2}>
        <use href={`${sprite}#icon-Hearts-Symbol--Streamline-Plump-1`} />
      </svg>

      <div className={css.imgContainer}>
        <img src={img} alt="product" className={css.imgCard} />
      </div>

      <p className={css.title}>POD-система Suorin Air Hybrid</p>
      <div className={css.containerTaste}>
        <p className={css.taste}>Смак: манго</p>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-Chevron-Down`} />
        </svg>
      </div>
      <div className={css.containerPrice}>
        <p className={css.price}>99 грн</p>
        <button className={css.btnBy}>Купити</button>
      </div>
    </div>
  );
};

export default ItemCard;
